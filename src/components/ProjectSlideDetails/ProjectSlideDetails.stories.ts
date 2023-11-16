import {Meta, StoryObj} from "@storybook/react";
import {CSS3, Discord, HTML5, JavaScript, Next} from "public/icons";
import ProjectSlideDetails from "./ProjectSlideDetails";

const meta: Meta<typeof ProjectSlideDetails> = {
	component: ProjectSlideDetails,
};

export default meta;
type Story = StoryObj<typeof ProjectSlideDetails>;

export const Default: Story = {
	args: {
		description: ["test desc"],
		skillIcons: [CSS3, Discord, JavaScript, HTML5, Next],
	},
};
