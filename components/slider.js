import React from "react";
import AwesomeSlider from "react-awesome-slider";
import audience from "../public/target_audience";

export default function Slider() {
	const slider = (
		<AwesomeSlider>
			{audience.map(({ img, name, desig, comments }) => {
				return (
					<div className="slider">
						<span className="slider__target-audience">
							<img src={img} alt="" />
							<h1 className="slider__target-audience-heading">{name}</h1>
							<h3 className="slider__target-audience-sub-heading">{desig}</h3>
						</span>
						<span className="slider__comments">
							<span className="comma">“</span>
							<p>{comments}</p>
						</span>
					</div>
				);
			})}
		</AwesomeSlider>
	);
	return slider;
}
