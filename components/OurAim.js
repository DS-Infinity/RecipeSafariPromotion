import React, { useEffect } from "react";

export default function OurAim() {
  useEffect(() => {
    function qs(selector, all = false) {
      return all
        ? document.querySelectorAll(selector)
        : document.querySelector(selector);
    }
    const sections = qs(".ouraim__main", true);
    const timeline = qs(".ouraim__time-line");
    const line = qs(".line");
    line.style.bottom = `calc(100% - 20px)`;
    let prevScrollY = window.scrollY;
    let up, down;
    let full = false;
    let set = 0;
    const targetY = window.innerHeight * 0.8;

    function scrollHandler(e) {
      const { scrollY } = window;
      up = scrollY < prevScrollY;
      down = !up;
      const timelineRect = timeline.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect();
      const lineHeight = lineRect.bottom - lineRect.top;

      const dist = targetY - timelineRect.top;
      console.log(dist);

      if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
      }

      if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
      }

      sections.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add("show-me");
        }
      });

      prevScrollY = window.scrollY;
    }

    scrollHandler();
    line.style.display = "block";
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="ouraim">
      <div className="ouraim__time-line">
        <div className="line"></div>
        <div className="ouraim__main">
          <div className="bead"></div>
          <div className="ouraim__text">
            <h2>Our Aim</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              culpa ducimus ipsa doloribus atque inventore deserunt ea assumenda
              minima architecto.
            </p>
          </div>
        </div>
        <div className="ouraim__main">
          <div className="bead"></div>
          <div className="ouraim__text">
            <h2>Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              culpa ducimus ipsa doloribus atque inventore deserunt ea assumenda
              minima architecto.
            </p>
          </div>
        </div>
        <div className="ouraim__main">
          <div className="bead"></div>
          <div className="ouraim__text">
            <h2>Our Purpose</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              culpa ducimus ipsa doloribus atque inventore deserunt ea assumenda
              minima architecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
