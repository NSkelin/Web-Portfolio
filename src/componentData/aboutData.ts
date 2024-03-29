/**
 * This file contains the data needed to render the about section / component(s) for the portfolio.
 *
 * All the data is in this separate file to make it easier to update the portfolio contents without needing
 * to fish through tons of components.
 */

import type {AboutProps} from "@/components/About";
import {CSS3, Git, HTML5, JavaScript, MySQLMark, Next, NodeMark, React, TypeScript} from "public/icons";
import pfp from "public/pfp2.jpg";

const skillData: AboutProps = {
	description: [
		"Hi, I'm Nick, a creative and passionate full stack web developer who graduated from BCIT with a diploma in Computer Science. \
	With one year of experience under my belt, I'm excited to continue developing my skills and building innovative websites that meet user needs.",
		"When I'm not busy with website development, I like to stay up-to-date with the\
	latest tech and explore new technologies. In my free time I enjoy playing with my rabbits and exploring new video games. My favourite genres\
	include sandbox, story, and base building.",
		"As a full stack web developer, I'm dedicated to delivering high-quality products that meet business\
	objectives while providing an enjoyable user experience. I have a keen eye for UI and am skilled in CSS, which allows me to create visually\
	stunning websites that are both functional and aesthetically pleasing. And with my communication skills I can work collaboratively with other\
	developers and stakeholders.",
		"I'm always eager to connect with other web developers and learn from experienced professionals in the field, so\
	please don't hesitate to reach out to me if you're interested in connecting or discussing potential opportunities.",
	],
	imageProps: {
		src: pfp,
		alt: "Picture of the author",
	},

	skillIconSources: [
		[
			{Icon: HTML5, text: "HTML 5"},
			{Icon: JavaScript, text: "JavaScript"},
			{Icon: CSS3, text: "CSS3"},
			{Icon: TypeScript, text: "TypeScript"},
		],
		[
			{Icon: NodeMark, text: "Node.js"},
			{Icon: React, text: "React"},
			{Icon: Next, text: "Next"},
			{Icon: MySQLMark, text: "MySql"},
			{Icon: Git, text: "Git"},
		],
	],
	interests: ["Rabbits", "PC building", "Video games", ["Sand Box", "Story", "Base building"]],
};

export default skillData;
