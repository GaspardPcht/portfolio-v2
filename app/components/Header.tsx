import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div>
      <header className="absolute top-0 right-0 md:right-[-10px] m-8 flex items-center justify-between w-full">
        {/* GASPARDPCHT Text */}
        <div className="flex items-center justify-start font-khula font-extrabold opacity-30 text-3xl text-[#EAEAEA] text-left ml-10">
          GASPARDPCHT
        </div>

        {/* Navigation Links */}
        <div className="sm:flex gap-5 hidden md:flex items-center flex-1 justify-end md:mr-4">
          <div className="flex items-center justify-start font-khula font-extrabold opacity-30 text-3xl text-[#EAEAEA] lg:ml-10">
            ABOUT
          </div>
          <div className="flex items-center justify-start font-khula font-extrabold opacity-30 text-3xl text-[#EAEAEA] lg:ml-10">
            WORK
          </div>
          <div className="flex items-center justify-start font-khula font-extrabold opacity-30 text-3xl text-[#EAEAEA] lg:ml-10">
            CONTACT
          </div>
        </div>
      </header>
    </div>
  );
}