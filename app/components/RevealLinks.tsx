'use client'
import React from "react";
import  FlipLink  from "./FlipLink";

const RevealLinks = () => {
  return (
    <section className="grid place-content-center gap-2 px-8 py-24 text-[#EAEAEA]">
      <FlipLink href="#">ABOUT</FlipLink>
      <FlipLink href="#">WORK</FlipLink>
      <FlipLink href="#">CONTACT</FlipLink>
    </section>
  );
};

export default RevealLinks;



