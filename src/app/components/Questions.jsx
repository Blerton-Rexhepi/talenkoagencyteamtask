"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
export default function Questions() {
  const [show, setShow] = useState(false);
  const [desc, setDesc] = useState(0);
  const handleClick = () => {
    setShow(!show);
    console.log("SHOW" + show, "Id" + desc);
  };
  const faq = [
    {
      id: 1,
      name: "Lorem Ipsum dolare sit amet el det?",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
    },
    {
      id: 2,
      name: "Lorem Ipsum dolare sit amet el det?",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
    },
    {
      id: 3,
      name: "t vero eos et accusamus et iusto odio dignissimos ducimus qui?",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
    },
    {
      id: 4,
      name: "Sed ut perspiciatis unde omnis iste natus error sit?",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
    },
    { id: 5, name: "Consectetur adipiscing elit?", desc: "" },
    {
      id: 6,
      name: "Excepteur sint occaecat cupidatat non proident?",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
    },
  ];

  return (
    <div className="question-body">
      <div>
        <div>
          <h1 className="question-title ">Any Questions? Contact us here.</h1>
          <p className="text">Quis autem vel eum iure reprehenderit.</p>
        </div>
        <div className="icon">
          <button className="email ">
            <Image
              alt="/"
              width={20}
              height={20}
              src="/Group.svg"
              className="email-icon"
            />
            E-Mail
          </button>

          <button className="phone">
            <Image
              alt="/"
              width={20}
              height={20}
              src="/Group 48.svg"
              className="email-icon"
            />
            <p>Telephone </p>
          </button>
        </div>
      </div>
      <div onClick={() => setShow(!show)}>
        {faq.map((faq, id) => (
          <div key={id} className="question-faq">
            <div onClick={() => setDesc(faq.id)}>
              <div className="icon faq">
                <p>{faq.name}</p>
                <div>
                  {show && desc === faq.id ? (
                    <div>
                      <Image
                        src="/minus.svg"
                        width={20}
                        height={20}
                        alt="Minus"
                      />
                    </div>
                  ) : (
                    <div>
                      <Image
                        src="/plus.svg"
                        width={20}
                        height={20}
                        alt="Plus"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`description ${
                  show && desc === faq.id ? "show" : ""
                }`}
                onClick={() => setShow(false)}
              >
                <p>{faq.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
