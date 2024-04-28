import { M_PLUS_1 } from "next/font/google";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const navigation = [
    { id: 1, name: "Home" },
    { id: 2, name: "AboutUs" },
    { id: 3, name: "Explore" },
    { id: 4, name: "Gallery" },
    { id: 5, name: "Blogs" },
    { id: 6, name: "Contact" },
  ];
  const socialMedia = [
    {
      id: 1,
      name: "Facebook",
      img: "Facebook.svg",
      link: "https://www.facebook.com/",
    },
    {
      id: 2,
      name: "Instagram",
      img: "Instagram.svg",
      link: "https://www.instagram.com/",
    },
    {
      id: 3,
      name: "LinkedIn",
      img: "LinkedIn.svg",
      link: "https://www.linkedin.com/",
    },
  ];
  return (
    <div className="footer">
      <div>
        <div>
          <Image width={108} height={86} alt="/" src="/logo.svg" />

          <p className="footer-title">Newsletter</p>
          <h1 className="footer-h1">
            {" "}
            Subscribe to stay updated with our latest trips and experiences
          </h1>
          <input className="input" type="text" placeholder="Email Address" />
          <button className="input-button">Confirm</button>
        </div>
      </div>
      <div className="footer-items">
        <div>
          <p className="footer-title">Navigation</p>
          {navigation.map((nav, id) => (
            <div key={id} className="footer-text">
              {nav.name}
            </div>
          ))}
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <p className="footer-text">T: +383 45 111 222</p>
          <p className="footer-text">E: info@trvlstudio.com</p>
        </div>
        <div>
          <p className="footer-title">Address</p>
          <p className="footer-text">trvl.studio</p>
          <p className="footer-text">KAWA Group, Rruga B, Prishtina 10000</p>
        </div>
        <div>
          <p className="footer-title">Social Media </p>
          <div className="icon">
            {socialMedia.map((item, id) => (
              <div key={id}>
                <Link href={item.link}>
                  <Image width={24} height={24} alt="" src={`/${item.img}`} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
