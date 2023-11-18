/**
 * This file contains the data for each project to display under the projects section. Each object will create a new
 * project slide in the app.
 *
 * All the data is in this separate file to make it easier to update the portfolio contents without needing
 * to fish through tons of components.
 */

import {AWS, CSS3, Discord, Express, HTML5, JavaScript, Jest, MongoDB, Next, NodeMark, React} from "public/icons";
import cartCompanion1 from "public/projectImages/cartCompanion/CartCompanion-1.png";
import d2StatMap1 from "public/projectImages/d2StatMap/D2StatMap-1.png";
import portfolio1 from "public/projectImages/portfolio/portfolio-1.png";
import spotBot1 from "public/projectImages/spotBot/spotbot-1.png";
import {ProjectSlideProps} from "../components/ProjectSlide/ProjectSlide";

const ProjectCards: ProjectSlideProps[] = [
	{
		title: "D2StatMap",
		description: [
			"D2Statmap is a third party webapp for the videogame Destiny 2. In the game you can collect armor, each with their own unique stats.",
			"After signing in, you’ll be shown a unique heat map for each stat type based off of all your armor. You can then tell which stats you’re currently\
		lacking so you know what to prioritise in game.",
		],
		technologies: [React, Next, JavaScript, HTML5, CSS3],
		imageSrc: d2StatMap1,
		imageAlt:
			"The main page of the D2StatMap Project that users will interact with. It shows a heatmap for each stat type on armor\
			(Mobility, Resilience, Recovery, Discipline, Intellect, Strength). It has buttons for filtering the armor by class\
			(Warlock, Hunter, Titan) and slot type (helmet, legs, Arms, Chest, class item). And options that can be independantly\
			enabled / disabled.",
		githubRepoURL: "https://github.com/NSkelin/d2statmap",
		liveSiteURL: "https://d2statmap.vercel.app",
		demoSiteURL: "https://d2statmap.vercel.app/demo",
	},
	{
		title: "Portfolio",
		description: [
			"This portfolio, the one your on, was designed and developed by me! It might seem redundant but I believe it to be a good example of what im capable of.",
			"My personal favourite feature is the project cards your currently looking at.",
		],
		technologies: [React, Next, JavaScript, HTML5, CSS3],
		imageSrc: portfolio1,
		imageAlt:
			"The portfolios landing view. It includes a picture of the author, a call to action button to encourage users to continue downward,\
			And a short introduction.",
		githubRepoURL: "https://github.com/NSkelin/Web-Portfolio",
		liveSiteURL: "https://www.nickskelin.ca",
	},
	{
		title: "SpotBot",
		description: [
			"Spotbot is a Discord bot that integrates with the Discord API & and the Amazon Web Services API. It allows you and anyone else with access to\
			the bot to automatically start EC2 instances in AWS with a simple command through Discord.",
		],
		technologies: [JavaScript, AWS, Discord],
		imageSrc: spotBot1,
		imageAlt:
			"An example of a user calling the bots 'help start' command. The bot replies with useful information on how to use the command\
			such as the full command, its parameters, examples, and a description.",
		githubRepoURL: "https://github.com/NSkelin/spotbot",
	},
	{
		title: "Cart Companion",
		description: [
			"CartCompanion is a simple web application for keeping shopping lists online. It was made as part of our school curriculum, where we worked together as\
			small groups of six to each create a unique project.",
			"The goal was to gain experience in a work-like environment over the course of 4 weeks.",
		],
		technologies: [MongoDB, NodeMark, JavaScript, Jest, Express, HTML5, CSS3],
		imageSrc: cartCompanion1,
		imageAlt:
			"A representation of the projects main logo. The logo is two lists mirrored towards each other with a cart behind\
			each list mirrored away from each other, with the projects title 'Cart Compainion' in all uppercase underneath.",
		githubRepoURL: "https://github.com/NSkelin/Quicklists",
	},
];

export default ProjectCards;
