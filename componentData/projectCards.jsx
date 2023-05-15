import {React, Next, JavaScript, HTML5, CSS3, AWS, Discord, NodeMark, MongoDB, Jest, Express} from "../public/icons";
import d2StatMap1 from "../public/d2statmap/D2StatMap-1.png";
import spotBot1 from "../public/spotbot/spotbot-1.png";
import cartCompanion1 from "../public/CartCompanion.png";

const ProjectCards = [
	{
		title: "D2StatMap",
		description: [
			"D2Statmap is a third party webapp for the videogame Destiny 2. In the game you can collect armor, each with their own unique stats.",
			"After signing in, you’ll be shown a unique heat map for each stat type based off of all your armor. You can then tell which stats you’re currently\
		lacking so you know what to prioritise in game.",
		],
		techIcons: [React, Next, JavaScript, HTML5, CSS3],
		image: d2StatMap1,
		githubURL: "https://github.com/NSkelin/d2statmap",
		liveURL: "https://d2statmap.vercel.app",
		demoURL: "https://d2statmap.vercel.app/demo",
	},
	{
		title: "Portfolio",
		description: [
			"This portfolio, the one your on, was designed and developed by me! It might seem redundant but I believe it to be a good example of what im capable of.",
			"My personal favourite feature is the project cards your currently looking at.",
		],
		techIcons: [React, Next, JavaScript, HTML5, CSS3],
		image: "",
		githubURL: "https://github.com/NSkelin/Web-Portfolio",
		liveURL: "https://www.nickskelin.ca",
	},
	{
		title: "SpotBot",
		description: [
			"Spotbot is a Discord bot that integrates with the Discord API & and the Amazon Web Services API. It allows you and anyone else with access to\
			the bot to automatically start EC2 instances in AWS with a simple command through Discord.",
		],
		techIcons: [JavaScript, AWS, Discord],
		image: spotBot1,
		githubURL: "https://github.com/NSkelin/spotbot",
	},
	{
		title: "Cart Companion",
		description: [
			"CartCompanion is a simple web application for keeping shopping lists online. It was made as part of our school curriculum, where we worked together as\
			small groups of six to each create a unique project.",
			"The goal was to gain experience in a work-like environment over the course of 4 weeks.",
		],
		techIcons: [MongoDB, NodeMark, JavaScript, Jest, Express, HTML5, CSS3],
		image: cartCompanion1,
		githubURL: "https://github.com/NSkelin/Quicklists",
	},
];

export default ProjectCards;
