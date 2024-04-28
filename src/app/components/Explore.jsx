import React from "react";
import Image from "next/image";
export default function Explore() {
  const category = [
    { id: 1, title: "All" },
    {
      id: 2,
      title: "Beaches",
    },
    { id: 3, title: "Mountains" },
    { id: 4, title: "Upcoming events" },
  ];
  const pictures = [
    { id: 1, url: "Rectangle 68.png" },
    { id: 2, url: "Rectangle 69.png" },
    { id: 3, url: "Rectangle 70.png" },
    { id: 4, url: "Rectangle 71.png" },
    { id: 1, url: "Rectangle 72.png" },
  ];
  return (
    <div className="body-padding">
      <div>
        <h1 className="about-us-title">Explore the world</h1>
        <div className="buttons">
          {category.map((item, index) => (
            <div key={index}>
              <button className="button-explor">{item.title}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel">
        {pictures.map((item, index) => (
          <div key={index} className="slide">
            <img src={`/${item.url}`} alt="" />
          </div>
        ))}
      </div>
      <div className="icon">
        <div className="line" />
        <Image src="Group 43.svg" width={44} alt="" height={44} />{" "}
        <Image src="Group 42.svg" width={44} alt="" height={44} />{" "}
      </div>
    </div>
  );
}
