"use client";
import React from "react";
import FlipLink from "./FlipLink";

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToWork: () => void;
  scrollToContact: () => void;
}

const RevealLinks: React.FC<HeaderProps> = ({
  scrollToAbout,
  scrollToWork,
  scrollToContact,
}) => {
  return (
    <section className="grid place-content-center gap-2 px-8 py-24 text-[#EAEAEA]">
      <FlipLink onClick={scrollToAbout}>
        ABOUT
      </FlipLink>
      <FlipLink  onClick={scrollToWork}>
        WORK
      </FlipLink>
      <FlipLink  onClick={scrollToContact}>
        CONTACT
      </FlipLink>
    </section>
  );
};

export default RevealLinks;
