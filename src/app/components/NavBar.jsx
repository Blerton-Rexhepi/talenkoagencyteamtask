import React from "react";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="navbar">
      <Image width={108} height={86} alt="/" src="/Group 37.svg" />
      <div className="menu">
        <Image width={19} height={11} alt="/" src="/Group 38.svg" />
        <p>Menu</p>
      </div>
    </div>
  );
}
