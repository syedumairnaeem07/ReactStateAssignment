import React, { useState } from "react";
import "./Temperature.css"
function Temperature() {
	let [temp, setTemp] = useState(72);
	let [updown, setUpdown] = useState(true);
	return (
		<div>
			<div className="divtemperature">
				<h3 className={`${updown?"h3temperatureincrease":"h3temperaturedecrease"}`}>Current Temperature: {temp}</h3>
			</div>
            <button className=" buttontemperature buttonincrease" onClick={()=> {
                setUpdown(updown=true)
                setTemp(temp+1)
            }}
            >+</button>
            <button className="buttontemperature buttondecrease" onClick={()=> {
                setUpdown(updown=false)
                setTemp(temp-1)
                }}
                >-</button>
		</div>
	);
}

export default Temperature;
