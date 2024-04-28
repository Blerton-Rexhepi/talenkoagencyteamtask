import React from "react";
import NavBar from "./NavBar";
import Image from "next/image";
export default function LandingPage() {
  return (
    <div className="">
      <div className="containerHome">
        <h1 className="h1"> Your next adventure...</h1>
        <p className="text  text-continer">
          {`   Discover your next journey with us let's embark together where 
          adventures await. Explore enchanting places below.`}
        </p>
        <button className="button">See more</button>
      </div>
    </div>
  );
}
