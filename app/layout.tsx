import {Analytics} from "@vercel/analytics/react";
import {Aleo} from "next/font/google";
import "./globalStyle.scss";

const aleo = Aleo({
	subsets: ["latin"],
	weight: "400",
});

interface RootLayoutProps {
	/** Layouts must accept a children prop. This will be populated with nested layouts or pages */
	children: React.ReactNode;
}
export default function RootLayout({children}: RootLayoutProps) {
	return (
		<html lang="en" className={aleo.className}>
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
