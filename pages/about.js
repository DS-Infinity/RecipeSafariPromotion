import styles from "../styles/about.module.css";
import Navbar from "../components/Navbar";

export default function About() {
	return (
		<>
			<Navbar />
			<main className={styles["about"]}>
				<div className={styles["about__our-aim-text"]}>
					<h1 className={styles["about__our-aim-heading"]}>Our Aim</h1>
					<p className={styles["about__our-aim-para"]}>
						Our Aim is to solve the everyday dilemma of people trying to find
						new recipes to make with just home spices, help each other to create
						some new dishes and save a little time with text to speech feature.
					</p>
				</div>
				<div className={styles["about__our-aim-illus"]}>
					<img src={`/undraw_online_test_gba7.svg`} alt="" />
				</div>
			</main>
		</>
	);
}
