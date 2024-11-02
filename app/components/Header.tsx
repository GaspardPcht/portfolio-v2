'use client'
import { motion } from "framer-motion";

interface HeaderProps {
  readonly scrollToAbout: () => void;
  readonly scrollToProject: () => void;
  readonly scrollToContact: () => void;
}

export default function Header({
  scrollToAbout,
  scrollToProject,
  scrollToContact,
}: HeaderProps) {
  return (
    <div>
      <header className="absolute top-0 right-0 md:right-[-10px] m-8 flex items-center justify-between w-full">
        {/* GASPARDPCHT Text */}
        <div className="flex items-center justify-start font-khula font-extrabold opacity-30 text-3xl text-[#EAEAEA] hover:opacity-100 cursor-pointer text-left ml-10">
          GASPARDPCHT
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
                  ? scrollToProject
                  : scrollToContact
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className="flex items-center justify-start font-khula font-extrabold opacity-30 text-3xl text-[#EAEAEA] hover:opacity-100">
                {item}
              </span>
              {/* Barre animée en dessous */}
            </motion.div>
          ))}
        </div>
      </header>
    </div>
  );
}
