import {Meta, StoryObj} from "@storybook/react";
import CollapsibleArea from "./CollapsibleArea";

const meta: Meta<typeof CollapsibleArea> = {
	component: CollapsibleArea,
	decorators: [
		(Story) => (
			<div style={{backgroundColor: "#4a5676", color: "white", padding: "20px", maxWidth: "400px"}}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof CollapsibleArea>;

export const Default: Story = {
	args: {
		children: (
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a purus non nisl tristique eleifend non a mi. Quisque
				lectus nisl, tempus eu magna non, semper faucibus lorem. Donec venenatis turpis vitae sollicitudin maximus. Morbi
				laoreet dapibus quam, eget scelerisque leo interdum nec. Vivamus gravida orci id augue consequat, eu fringilla
				felis varius. Donec nec tincidunt neque, sed imperdiet mi. Nullam porttitor pretium sapien eget vestibulum. Morbi
				nunc erat, iaculis a dapibus ut, cursus in orci. Nam vitae nulla nisi. Class aptent taciti sociosqu ad litora
				torquent per conubia nostra, per inceptos himenaeos.
			</p>
		),
	},
};
