// Import
import Navbar from './Navbar';
// import styles from "../styles/Home.css"

// Export Home
export default function HomeSection() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <img
          className="home-image"
          src="https://via.placeholder.com/512x512"
        ></img>
        <div>
          <h1 className="title">
            Presenting <span className="pacifico_title">Recipe Safari</span>
          </h1>
          <p className="description">
            An easy way to find and share recipes with people around the world.
          </p>
        </div>
        <img src="https://via.placeholder.com/1280x720"></img>
        <div className="feature-box">
          <div className="feature-details">
            <h1>Interact with other chefs.</h1>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
          <img
            className="feature-img"
            src="https://via.placeholder.com/500x360"
          ></img>
        </div>
        <div className="feature-box">
          <img
            className="feature-img"
            src="https://via.placeholder.com/500x360"
          ></img>
          <div className="feature-details">
            <h1>Discover new recipes everyday.</h1>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          </div>
        </div>
        <div className="feature-share">
          <h1>Share your recipes and get feedback.</h1>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
            ligula quis mi tincidunt tempus sit amet quis diam. quam.
            Suspendisse sodales massa nec ullamcorper sagittis.
          </p>
        </div>
        <img
          src="https://via.placeholder.com/1280x720"
        />
      </div>
    </div>
  );
}
