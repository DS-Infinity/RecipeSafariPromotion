// Import
import business_plan_list from "../public/buisness_plan";
import Image from "next/image";

// Export About
export default function About() {
  return (
    <section id="about">
      <div id="business_plan">
        <h1>Business Plan</h1>

        {business_plan_list.map((item, i) => {
          return (
            <div key={i} className="business_plan_item">
              <h1>{i + 1}</h1>

              <div className="business_plan_content">
                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <h1 id="creators-heading">Creators</h1>

      <div id="creators">
        <div className="creator-box">
          <Image
            className="creator-img"
            src="/Aahan.png"
            width="300px"
            height="300px"
          />
          <h3>Aahan Agarwal</h3>
        </div>

        <div className="creator-box">
          <Image
            className="creator-img"
            src="/Shivanya.png"
            width="300px"
            height="300px"
          />
          <h3>Shivanya Chandra</h3>
        </div>

        <div className="creator-box">
          <Image
            className="creator-img"
            src="/Daksh.png"
            width="300px"
            height="300px"
          />
          <h3>Daksh Srivasta</h3>
        </div>
      </div>

      <div id="footer">
        <p>
          Copyright © <span>Recipe Safari</span> | Made with
          <span id="heart">❤</span> by <span>eSpice</span>
        </p>
      </div>
    </section>
  );
}
