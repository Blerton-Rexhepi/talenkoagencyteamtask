import React from "react";
import Image from "next/image";
export default function Galery() {
  const pictures = [
    {
      id: 1,
      link: "/Rectangle 113.png",
      class: "gallery__item gallery__item--1",
    },
    {
      id: 2,
      link: "/Rectangle 120.png",
      class: "gallery__item gallery__item--2",
    },
    {
      id: 3,
      link: "/Rectangle 118.png",
      class: "gallery__item gallery__item--3",
    },
    {
      id: 4,
      link: "/Rectangle 119.png",
      class: "gallery__item gallery__item--4",
    },
    {
      id: 5,
      link: "/Rectangle 117.png",
      class: "gallery__item gallery__item--5",
    },
    {
      id: 6,
      link: "/Rectangle 114.png",
      class: "gallery__item gallery__item--6",
    },
    {
      id: 7,
      link: "/Rectangle 116.png",
      class: "gallery__item gallery__item--7",
    },
  ];
  return (
    <div className="body-padding ">
      <div>
        <h1 className="about-us-title">Travelogue Captures</h1>
      </div>
      <div>
        <div className="gallery">
          {pictures.map((pic, id) => (
            <div key={id} className={`${pic.class}`}>
              <img alt="" src={pic.link} className="gallery__img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
