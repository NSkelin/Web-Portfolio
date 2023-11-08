import {Analytics} from "@vercel/analytics/react";
import {Metadata} from "next";
import {Aleo} from "next/font/google";
import "./globalStyle.scss";

export const metadata: Metadata = {
	title: "Nicks Portfolio",
	description: "My portfolio made and designed by me - Nick Skelin",
};

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
