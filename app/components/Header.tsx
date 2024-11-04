"use client";
import { motion } from "framer-motion";

interface HeaderProps {
  readonly scrollToAbout: () => void;
  readonly scrollToWork: () => void;
  readonly scrollToContact: () => void;
}

export default function Header({
  scrollToAbout,
  scrollToWork,
  scrollToContact,
}: HeaderProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-gradient-to-b from-[#121212] to-transparent backdrop-blur-[2px] h-20 flex items-center justify-between w-full">
      <div
        className="flex items-center justify-start font-khula font-extrabold opacity-50 text-3xl text-[#EAEAEA] hover:opacity-100 cursor-pointer text-left ml-10"
        onClick={scrollToTop} // Add onClick to scroll to top
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>GASPARDPCHT</span>
        </motion.div>
      </div>

      {/* Navigation Links */}
      <div className="sm:flex gap-5 lg:gap-24 hidden md:flex items-center flex-1 justify-end md:mr-4">
        {["ABOUT", "WORK", "CONTACT"].map((item, index) => (
          <motion.div
            key={item}
            className="relative cursor-pointer w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#FF8C00] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            onClick={
              item === "ABOUT"
                ? scrollToAbout
                : item === "WORK"
                ? scrollToWork
                : scrollToContact
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <span className="flex items-center justify-start font-khula font-extrabold opacity-50 text-3xl  text-[#EAEAEA] hover:opacity-100">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </header>
  );
}
