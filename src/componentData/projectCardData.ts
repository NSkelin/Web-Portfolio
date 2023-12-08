/**
 * This file contains the data for each project to display under the projects section. Each object will create a new
 * project slide in the app.
 *
 * All the data is in this separate file to make it easier to update the portfolio contents without needing
 * to fish through tons of components.
 */

import {ProjectCarouselProps} from "@/components/ProjectCarousel";
import {AWS, CSS3, Discord, Express, HTML5, JavaScript, Jest, MongoDB, Next, NodeMark, React, TypeScript} from "public/icons";
import {cartcompanion1, cartcompanion2, cartcompanion3, cartcompanion4} from "public/projectImages/cartCompanion";
import {d2statmap1, d2statmap2, d2statmap3, d2statmap4} from "public/projectImages/d2StatMap";
import {portfolio1, portfolio2, portfolio3} from "public/projectImages/portfolio";
import {spotbot1, spotbot2, spotbot3} from "public/projectImages/spotBot";

const projectCardData: ProjectCarouselProps["projectData"] = [
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
			{
				src: d2statmap2,
				alt: "The first thing you see when you visit the site. It shows a login button that will redirect you to the Bungie.net login page.",
			},
			{
				src: d2statmap3,
				alt: "The first step of authenticating with Bungie.net, choosing which platform you play on.",
			},
			{
				src: d2statmap4,
				alt: "Profile selection. If you have multiple accounts you can choose which one to use.",
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
			{name: "TypeScript", Icon: TypeScript},
			{name: "HTML5", Icon: HTML5},
			{name: "CSS3", Icon: CSS3},
		],
		images: [
			{
				src: portfolio1,
				alt: "The portfolios landing view. It includes a picture of the author, a call to action button to encourage users to continue downward,\
			And a short introduction.",
			},
			{
				src: portfolio2,
				alt: "The projects carousel. It shows a list of all the projects in the portfolio. The current project is highlighted and the user can swipe\
				to any of the other projects to view them.",
			},
			{
				src: portfolio3,
				alt: "The about me section. It includes a short description of the author, a list of skills, and a list of hobbies.",
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
			{
				src: cartcompanion2,
				alt: "The login form for the project. It includes a username and password field, a login button, and a signup button.",
			},
			{
				src: cartcompanion3,
				alt: "The main page of the project. It includes all the users lists, and button to create, rename, and delete a list.",
			},
			{
				src: cartcompanion4,
				alt: "The view for a specific list. It includes all the items in the list, a button to add a new item, and buttons to edit and delete each item.",
			},
		],
		githubRepoURL: "https://github.com/NSkelin/Quicklists",
	},
];

export default projectCardData;
