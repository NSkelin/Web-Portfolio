import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"crossOrigin"} />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
