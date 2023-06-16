import type {StorybookConfig} from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: [
		"../components/**/*.mdx",
		"../components/**/*.stories.@(js|jsx|ts|tsx)",
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: true,
	},
	webpackFinal: async (config) => {
		if (config.module?.rules == null) return config;
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) => {
			if (rule == null) return;
			return rule.test?.test?.(".svg");
		});

		if (fileLoaderRule == null) return config;

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				resourceQuery: {not: /url/}, // exclude if *.svg?url
				use: ["@svgr/webpack"],
			}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};
export default config;
