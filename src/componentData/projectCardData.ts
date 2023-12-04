/**
 * This file contains the data for each project to display under the projects section. Each object will create a new
 * project slide in the app.
 *
 * All the data is in this separate file to make it easier to update the portfolio contents without needing
 * to fish through tons of components.
 */

import {ProjectCardProps} from "@/components/ProjectCard";
import {AWS, CSS3, Discord, Express, HTML5, JavaScript, Jest, MongoDB, Next, NodeMark, React} from "public/icons";
import {cartcompanion1} from "public/projectImages/cartCompanion";
import {d2statmap1} from "public/projectImages/d2StatMap";
import {portfolio1} from "public/projectImages/portfolio";
import {spotbot1, spotbot2, spotbot3} from "public/projectImages/spotBot";

const projectCardData: ProjectCardProps[] = [
	{
		title: "D2StatMap",
		description: [
			"D2Statmap is a third party webapp for the videogame Destiny 2. In the game you can collect armor, each with their own unique stats.",
			"After signing in, you’ll be shown a unique heat map for each stat type based off of all your armor. You can then tell which stats you’re currently\
		lacking so you know what to prioritise in game.",
		],
		technologies: [
			{name: "React", Icon: React},
			{name: "NextJS", Icon: Next},
			{name: "JavaScript", Icon: JavaScript},
			{name: "HTML5", Icon: HTML5},
			{name: "CSS3", Icon: CSS3},
		],
		images: [
			{
				src: d2statmap1,
				alt: "The main page of the D2StatMap Project that users will interact with. It shows a heatmap for each stat type on armor\
			(Mobility, Resilience, Recovery, Discipline, Intellect, Strength). It has buttons for filtering the armor by class\
			(Warlock, Hunter, Titan) and slot type (helmet, legs, Arms, Chest, class item). And options that can be independantly\
			enabled / disabled.",
			},
		],
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
		technologies: [
			{name: "React", Icon: React},
			{name: "NextJS", Icon: Next},
			{name: "JavaScript", Icon: JavaScript},
			{name: "HTML5", Icon: HTML5},
			{name: "CSS3", Icon: CSS3},
		],
		images: [
			{
				src: portfolio1,
				alt: "The portfolios landing view. It includes a picture of the author, a call to action button to encourage users to continue downward,\
			And a short introduction.",
			},
		],
		githubRepoURL: "https://github.com/NSkelin/Web-Portfolio",
		liveSiteURL: "https://www.nickskelin.ca",
	},
	{
		title: "SpotBot",
		description: [
			"Spotbot is a Discord bot that integrates with the Discord API & and the Amazon Web Services API. It allows you and anyone else with access to\
			the bot to automatically start EC2 instances in AWS with a simple command through Discord.",
		],
		technologies: [
			{name: "JavaScript", Icon: JavaScript},
			{name: "Amazon Web Services", Icon: AWS},
			{name: "Discord API", Icon: Discord},
		],
		images: [
			{
				src: spotbot1,
				alt: "A logo image of the project which includes a name, the slogan, and a simple diagram explaining the basic functionality.",
			},
			{
				src: spotbot2,
				alt: "An example of a user calling the bots 'help start' command. The bot replies with useful information on how to use the command\
				such as the full command, its parameters, examples, and a description.",
			},
			{
				src: spotbot3,
				alt: "An example of calling the bots start command to start a server.",
			},
		],
		githubRepoURL: "https://github.com/NSkelin/spotbot",
	},
	{
		title: "Cart Companion",
		description: [
			"CartCompanion is a simple web application for keeping shopping lists online. It was made as part of our school curriculum, where we worked together as\
			small groups of six to each create a unique project.",
			"The goal was to gain experience in a work-like environment over the course of 4 weeks.",
		],
		technologies: [
			{name: "MongoDB", Icon: MongoDB},
			{name: "Node.js", Icon: NodeMark},
			{name: "JavaScript", Icon: JavaScript},
			{name: "Jest", Icon: Jest},
			{name: "Express", Icon: Express},
			{name: "HTML5", Icon: HTML5},
			{name: "CSS3", Icon: CSS3},
		],
		images: [
			{
				src: cartcompanion1,
				alt: "A representation of the projects main logo. The logo is two lists mirrored towards each other with a cart behind\
			each list mirrored away from each other, with the projects title 'Cart Compainion' in all uppercase underneath.",
			},
		],
		githubRepoURL: "https://github.com/NSkelin/Quicklists",
	},
];

export default projectCardData;
