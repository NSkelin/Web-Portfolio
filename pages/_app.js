import "./globalStyle.scss";
import {Aleo} from "next/font/google";
import {Analytics} from "@vercel/analytics";

const aleo = Aleo({
	subsets: ["latin"],
	weight: "400",
});

function MyApp({Component, pageProps}) {
	return (
		<main className={aleo.className}>
			<Component {...pageProps} />
			<Analytics />
		</main>
	);
}

export default MyApp;
