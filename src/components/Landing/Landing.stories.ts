import {Meta, StoryObj} from "@storybook/react";
import pfp from "public/pfp1.jpg";
import Landing from "./Landing";

const meta: Meta<typeof Landing> = {
	component: Landing,
};

export default meta;
type Story = StoryObj<typeof Landing>;

export const Default: Story = {
	args: {
		title: "Title",
		subtitle: "Subtitle",
		imageSrc: pfp,
	},
};
