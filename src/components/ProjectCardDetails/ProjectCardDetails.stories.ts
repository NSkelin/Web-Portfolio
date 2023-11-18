import {Meta, StoryObj} from "@storybook/react";
import {CSS3, Discord, HTML5, JavaScript, Next} from "public/icons";
import ProjectCardDetails from "./ProjectCardDetails";

const meta: Meta<typeof ProjectCardDetails> = {
	component: ProjectCardDetails,
};

export default meta;
type Story = StoryObj<typeof ProjectCardDetails>;

export const Default: Story = {
	args: {
		description: ["test desc"],
		technologies: [CSS3, Discord, JavaScript, HTML5, Next],
	},
};
