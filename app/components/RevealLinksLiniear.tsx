"use client";
import React from "react";
import FlipLink from "./FlipLink";
import FlipLinkLinear from "./FlipLinksLinear";

interface HeaderProps {
  scrollToAbout: () => void;
  scrollToWork: () => void;
  scrollToContact: () => void;
}

const RevealLinksLinear: React.FC<HeaderProps> = ({
  scrollToAbout,
  scrollToWork,
  scrollToContact,
}) => {
  return (
    <section className="flex justify-center gap-14 text-[#EAEAEA]">
      <FlipLinkLinear onClick={scrollToAbout}>
        ABOUT
      </FlipLinkLinear>
      <FlipLinkLinear onClick={scrollToWork}>
        WORK
      </FlipLinkLinear>
      <FlipLinkLinear onClick={scrollToContact}>
        CONTACT
      </FlipLinkLinear>
    </section>
  );
};

export default RevealLinksLinear;