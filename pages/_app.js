import "./globalStyle.scss";
import {Aleo} from "next/font/google";

const aleo = Aleo({
	subsets: ["latin"],
	weight: "400",
});

function MyApp({Component, pageProps}) {
	return (
		<main className={aleo.className}>
			<Component {...pageProps} />
		</main>
	);
}

export default MyApp;
