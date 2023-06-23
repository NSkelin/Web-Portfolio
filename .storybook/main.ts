import type {StorybookConfig} from "@storybook/nextjs";
import type {Configuration, RuleSetRule} from "webpack";
const config: StorybookConfig = {
	stories: [
		"../components/**/*.mdx",
		"../components/**/*.stories.@(js|jsx|ts|tsx)",
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|ts|tsx)",
	],
	staticDirs: ["../public"],
	addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: true,
	},
	webpackFinal: async (config: Configuration) => {
		if (config.module?.rules == null) return config;
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) => {
			if (rule == null) return;
			rule = rule as RuleSetRule;
			rule.test = rule.test as RegExp;
			return rule.test?.test?.(".svg");
		});

		if (fileLoaderRule == null) return config;

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...(fileLoaderRule as RuleSetRule),
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
		(fileLoaderRule as RuleSetRule).exclude = /\.svg$/i;

		return config;
	},
};
export default config;
