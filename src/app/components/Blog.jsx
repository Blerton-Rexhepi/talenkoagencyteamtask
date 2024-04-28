import React from "react";
import Image from "next/image";
export default function Blog() {
  const blogs = [
    {
      id: "3",
      picture: "/Rectangle 103.png",
      date: "04/07/2023",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna dolare et aliqua sit...",
    },
    {
      id: "4",
      picture: "/Rectangle 104.png",
      date: "04/07/2023",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna dolare et aliqua sit...",
    },
  ];
  const blogTwo = [
    {
      id: "1",
      picture: "/Rectangle 101.png",
      date: "04/07/2023",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna dolare et aliqua sit...",
    },
    {
      id: "2",
      picture: "/Rectangle 102.png",
      date: "04/07/2023",
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna dolare et aliqua sit...",
    },
  ];
  return (
    <div>
      <div>
        <div className="navbar">
          <p className="about-us-title">Journal of adventures</p>
          <p className="p">View All</p>
        </div>
      </div>
      <div className="line" />
      <div className="grid-container">
        {blogs.map((blogs, id) => (
          <div key={id} className="grid-item">
            <div>
              <div className="icon">
                <div>
                  <Image src={blogs.picture} width={219} height={181} alt="" />
                </div>
                <div className="blog">
                  <p className="date">{blogs.date}</p>
                  <p className=" title-blog">{blogs.title}</p>
                  <p className="blog-text">{blogs.desc} </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      <div className="line" />
      <div className="grid-container">
        {blogs.map((blogs, id) => (
          <div key={id} className="grid-item">
            <div>
              <div className="icon">
                <div>
                  <Image src={blogs.picture} width={219} height={181} alt="" />
                </div>
                <div className="blog">
                  <p className="date">{blogs.date}</p>
                  <p className="  title-blog ">{blogs.title}</p>
                  <p className="  blog-text ">{blogs.desc} </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="line" />
    </div>
  );
}
