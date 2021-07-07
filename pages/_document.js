import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&family=Pacifico&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
						rel="stylesheet"></link>
					<meta name="description" content="" />
				</Head>
				<body>
					<Main />
				</body>
				<NextScript />
			</Html>
		);
	}
}
