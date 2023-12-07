import {Meta, StoryObj} from "@storybook/react";
import {projectCardData} from "src/componentData";
import ProjectCarousel from "./ProjectCarousel";

const meta: Meta<typeof ProjectCarousel> = {
	component: ProjectCarousel,
};

export default meta;
type Story = StoryObj<typeof ProjectCarousel>;

export const Default: Story = {
	args: {projectData: projectCardData},
};
