import {Meta, StoryObj} from "@storybook/react";
import About from "./About";
import skillData from "../../componentData/aboutData";

const meta: Meta<typeof About> = {
	component: About,
};

export default meta;
type Story = StoryObj<typeof About>;

export const Default: Story = {
	args: {
		image: skillData.image,
		description: skillData.description,
		interests: skillData.interests,
		skillIconSources: skillData.skillIconSources,
		centerToRef: {current: null},
	},
};
