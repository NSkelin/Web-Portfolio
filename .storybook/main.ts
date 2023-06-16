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
};
export default config;