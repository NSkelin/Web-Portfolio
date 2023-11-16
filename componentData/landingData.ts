/**
 * This file contains the data needed to render the landing section / component(s) for the portfolio.
 *
 * All the data is in this separate file to make it easier to update the portfolio contents without needing
 * to fish through tons of components.
 */

import {LandingProps} from "../components/Landing/Landing";
import pfp from "../public/pfp1.jpg";

const landingData: LandingProps = {
	imageSrc: pfp,
	title: "Hey, I'm Nick!",
	subtitle: "I develop websites.",
};

export default landingData;
