import {Meta, StoryObj} from "@storybook/react";

import ContactForm from "./ContactForm";

const meta: Meta<typeof ContactForm> = {
	component: ContactForm,
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {};
