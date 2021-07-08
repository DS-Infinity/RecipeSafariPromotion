// Import
import business_plan_list from "../public/buisness_plan";

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
    </section>
  );
}
