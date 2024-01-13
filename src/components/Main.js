import React, { useState } from "react";
import date from "./please.gif";
import Yess from "./Yess.gif";
import "./main.css";
const Main = () => {
  const [Position, setPosition] = useState({ x: 0, y: 0 });
  const [image, setimage] = useState(date);
  const [header, setheader] = useState("Do You Wanna Go Out With Me")
  const yesClick = (e) => {
    setheader("AWWW! I LOVE YOU :)")
    setimage(Yess);
  }

  const handleMouseMove = (e) => {
    const wrapper = document.getElementById("wrapper");
    const wrapperB = wrapper.getBoundingClientRect();
    if (wrapper) {
      const newX = Math.random() * wrapperB.width - wrapperB.width;
      const newY = Math.random() * wrapperB.height- wrapperB.height;
      setPosition({ x: newX, y: newY });
    }
  };

  return (
    <div className="main_page">
      <div className="submain_page">
        <div id="wrapper">
          <h2 className="heading">{header}</h2>
          <img className="image" src={image} alt="" />
          <div className="button_div">
            <button id="yes" onClick={yesClick}>
              YES
            </button>
            <button
              id="no"
              style={{
                position: "relative",
                top: `${Position.y}px`,
                left: `${Position.x}px`,
              }}
              onMouseOver={handleMouseMove}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
