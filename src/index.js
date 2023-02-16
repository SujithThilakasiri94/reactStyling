import React from "react";
import ReactDOM from "react-dom";

const time = new Date().getHours();
// const time = 19;
let greeting;

const innerStyle = {
  color: "red"
};

if (time > 12 && time <= 18) {
  greeting = "Good Afternoon";
  innerStyle.color = "green";
} else if (time > 18 && time < 24) {
  greeting = "Good Night";
  innerStyle.color = "blue";
} else {
  greeting = "Good Morning";
  innerStyle.color = "red";
}

ReactDOM.render(
  <h1 className="heading" style={innerStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
