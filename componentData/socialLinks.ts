/**
 * This file contains the data for each link in contact section. Each object will render a new link under the social links section in contact.
 *
 * All the data is in this separate file to make it easier to update the portfolio contents without needing
 * to fish through tons of components.
 */

import {HyperLinkProps} from "../components/HyperLink/HyperLink";
import {GithubMark, LinkedIn} from "../public/icons";

const socialLinks: HyperLinkProps[] = [
	{
		Icon: GithubMark,
		text: "Github",
		href: "https://github.com/NSkelin",
	},
	{
		Icon: LinkedIn,
		text: "LinkedIn",
		href: "https://www.linkedin.com/in/nickskelin/",
	},
];

export default socialLinks;
