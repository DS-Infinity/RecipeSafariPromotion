// Import
import Navbar from "./Navbar";
// import styles from "../styles/Home.css"

// Export Home
export default function HomeSection() {
	return (
		<div>
			<Navbar />
			<div className="home">
				<img className="home-image" src="/splash.png"></img>
				<div id="splash-text">
					<h1 className="title">
						Presenting <span className="pacifico_title">Recipe Safari</span>
					</h1>
					<p className="description">
						An easy way to find and share recipes with people around the world.
					</p>
				</div>

				<img
					id="search-ui-img"
					src="https://via.placeholder.com/1280x720"></img>

				<div className="feature-box">
					<div className="feature-details">
						<h1>Save your favourite recipes.</h1>
						<p>
							Bookmark the recipes you like with the magic of a single click.
						</p>
					</div>
					<img
						className="feature-img"
						src="https://via.placeholder.com/500x360"></img>
				</div>

				<div className="feature-box">
					<img
						className="feature-img"
						src="https://via.placeholder.com/500x360"></img>
					<div className="feature-details">
						<h1>Discover new recipes everyday.</h1>
						<p>Try out the recipe of the day and compete in challanges to get your's one the top.</p>
					</div>
				</div>

				<div className="feature-share">
					<h1>Share your recipes and get feedback.</h1>
					<p>
						Add new recipes and get suggestions and reviews on that half-burned potato.
					</p>
				</div>

				<img id="add-ui-img" src="https://via.placeholder.com/1280x720" />
			</div>
		</div>
	);
}
