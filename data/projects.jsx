import D2StatMapImage from "../public/D2StatMap.png";
import PortfolioImage from "../public/Portfolio.png";
import SpotBotImage from "../public/Spotbot.png";
import CartCompanionImage from "../public/CartCompanion.png";
import EdifyLearningSpacesImage from "../public/EdifyLearningSpaces.png";

const ProjectData = {
	cards: [
		{
			cardType: "link",
			title: "D2StatMap",
			imageSource: D2StatMapImage,
			array: [
				{
					icon: {source: "akar-icons:github-fill", width: 40, height: 40, color: "white"},
					link: "https://github.com/NSkelin/d2statmap",
				},
			],
		},
		{
			cardType: "link",
			title: "Portfolio",
			imageSource: PortfolioImage,
			array: [
				{
					icon: {source: "akar-icons:github-fill", width: 40, height: 40, color: "white"},
					link: "https://github.com/NSkelin/Web-Portfolio",
				},
			],
		},
		{
			cardType: "link",
			title: "SpotBot",
			imageSource: SpotBotImage,
			array: [
				{
					icon: {source: "akar-icons:github-fill", width: 40, height: 40, color: "white"},
					link: "https://github.com/NSkelin/spotbot",
				},
			],
		},
		{
			cardType: "link",
			title: "CartCompanion",
			imageSource: CartCompanionImage,
			array: [
				{
					icon: {source: "akar-icons:github-fill", width: 40, height: 40, color: "white"},
					link: "https://github.com/NSkelin/Quicklists",
				},
			],
		},
		{
			cardType: "link",
			title: "Edify Learning Spaces",
			imageSource: EdifyLearningSpacesImage,
			array: [
				{
					icon: {source: "akar-icons:github-fill", width: 40, height: 40, color: "white"},
					link: "https://github.com/NSkelin/EdifyLearningSpacesWebApp",
				},
			],
		},
	],
};

export default ProjectData;
