"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        You can 
        <span className="text-purple"> also Visit</span>
      </h1>
      <br/>
      <br/>

      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
      {companies.map((company) => (
        <a 
          key={company.id}
          href={company.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex md:max-w-60 max-w-32 gap-2"
        >
          <img
            src={company.img}
            alt={company.name}
            className="md:w-10 w-5"
          />
          <img
            src={company.nameImg}
            alt={company.name}
            width={company.id === 4 || company.id === 5 ? 100 : 150}
            className="md:w-24 w-20"
          />
        </a>
      ))}
    </div>
    </section>
  );
};

export default Clients;