import Image from "next/image";
import React from "react";

export default function AboutUs() {
  const items = [
    { icon: "Group 39.svg", description: "Sed ut perspiciatis unde omnis" },
    { icon: "Group 40.svg", description: "Ut enim ad minima veniam" },
    { icon: "Group 41.svg", description: "Lorem Ipsum dolare sit amet el" },
  ];
  return (
    <div className="about-continer ">
      <div>
        <h1 className="about-us-title">Who we are</h1>
        <p className="text-continer p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-continer p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugia. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium.
        </p>
        <p className="text-continer p">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos:{" "}
        </p>

        {items.map((item, index) => (
          <div className="text-continer p icon" key={index}>
            {" "}
            <Image src={item.icon} width={30} height={30} alt="" />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div>
        <Image width={848} height={557} alt="." src="/Rectangle 83 (1).png" />
      </div>
    </div>
  );
}
