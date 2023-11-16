import {Meta, StoryObj} from "@storybook/react";
import skillData from "../../componentData/aboutData";
import About from "./About";

const meta: Meta<typeof About> = {
	component: About,
};

export default meta;
type Story = StoryObj<typeof About>;

export const Default: Story = {
	args: {
		imageProps: skillData.imageProps,
		description: skillData.description,
		interests: skillData.interests,
		skillIconSources: skillData.skillIconSources,
		centerToRef: {current: null},
	},
};
