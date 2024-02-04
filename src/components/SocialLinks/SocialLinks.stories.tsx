import {Meta, StoryObj} from "@storybook/react";
import {GithubMark, LinkedIn} from "public/icons";

import SocialLinks from "./SocialLinks";

const meta: Meta<typeof SocialLinks> = {
	component: SocialLinks,
};

export default meta;
type Story = StoryObj<typeof SocialLinks>;

export const Default: Story = {
	args: {
		links: [
			{
				Icon: GithubMark,
				href: "https://github.com",
				text: "GitHub",
			},
			{
				Icon: LinkedIn,
				href: "https://linkedin.com",
				text: "LinkedIn",
			},
		],
	},
};
