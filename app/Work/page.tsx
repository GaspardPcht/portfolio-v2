import { useRef } from "react";
import Header from "../components/Header";

export default function Work(){
       const sectionsRef = {
         ABOUT: useRef<HTMLDivElement>(null),
         WORK: useRef<HTMLDivElement>(null),
         CONTACT: useRef<HTMLDivElement>(null),
       };

       const scrollToSection = (section: keyof typeof sectionsRef) => {
         const ref = sectionsRef[section].current;
         if (ref) {
           window.scrollTo({
             top: ref.offsetTop,
             behavior: "smooth",
           });
         }
       };
    return (
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        {/* Main Text */}
        <div className="absolute left-[4vw] md:left-[4vw] lg:left-[2vw] top-[50%] transform -translate-y-1/2 -translate-x-1/2 pl-2">
          <span className="flex text-[64px] md:text-[96px] opacity-50 font-bold font-khula text-[#FF8C00] stroke-black stroke-1 rotate-90">
            WORK
          </span>
        </div>
      </div>
    );
}