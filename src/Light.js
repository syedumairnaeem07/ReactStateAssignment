import React, { useState } from "react";
import "./Light.css";

function Light() {
    let [isLit, setLit] = useState(true);
	return (
		<div>
			<h1>React State Assignment 2</h1>
			<div className={`${isLit?"divlighton":"divlightoff"}`}>
				<h3 className={`${isLit?"h3lighton":"h3lightoff"}`}>The Light is {isLit ? "ON" : "OFF"}</h3>
			</div>
			<button className="buttonlight buttonon" onClick={() => setLit(isLit=true)}>ON</button>
			<button className="buttonlight buttonoff" onClick={() => setLit(isLit=false)}>OFF</button>
		</div>
	);
}

export default Light;
