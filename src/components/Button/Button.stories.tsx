import {Meta, StoryObj} from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
	component: Button,
	args: {
		children: "Button",
	},
	argTypes: {
		onClick: {
			control: false,
		},
		children: {
			control: false,
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const FAB: Story = {
	args: {
		buttonStyle: "fab",
	},
};
export const Filled: Story = {
	args: {
		buttonStyle: "filled",
	},
};
export const Outlined: Story = {
	args: {
		buttonStyle: "outlined",
	},
	parameters: {
		backgrounds: {
			default: "dark gray",
			values: [{name: "dark gray", value: "#4b4b4b"}],
		},
	},
};
export const IconButton: Story = {
	args: {
		buttonStyle: "iconButton",
		children: <span className="material-symbols-outlined">menu</span>,
	},
};
