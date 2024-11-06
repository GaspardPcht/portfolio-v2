import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";

interface CardProps {
  backgroundImage: string;
  title: string;
  text: string;
  width?: string;
  height?: string;
  genres: string[];
  opacity?: number;
  link: string;
}

const Card: React.FC<CardProps> = ({
  backgroundImage,
  title,
  text,
  width = "w-60",
  height = "h-80",
  genres,
  opacity = 0.35,
  link,
}) => {
  // Function to group genres by three
  const groupGenres = (genres: string[]) => {
    const grouped: string[][] = [];
    for (let i = 0; i < genres.length; i += 3) {
      grouped.push(genres.slice(i, i + 3));
    }
    return grouped;
  };

  return (
    <div
      className={`border-[1px] border-[#2C2C2C] hover:border-[#FF8C00] card ${width} ${height} group relative flex justify-end flex-col p-[0.3em] z-[1] overflow-hidden`}
    >
      {/* Background image container with opacity */}
      <div
        className="absolute top-0 left-0 h-full w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: opacity,
          zIndex: -1,
        }}
      ></div>

      {/* Default backdrop blur container */}
      <div className="absolute top-0 left-0 h-full w-full backdrop-blur-lg transition-all hover:backdrop-blur-lg"></div>

      <div className="container text-[#EAEAEA] relative font-khula flex flex-col gap-[0.5em]">
        <div className="h-12 w-full flex items-center">
          <h1 className="font-khula text-[#EAEAEA] font-bold text-[1.5em] ">
            {title}
          </h1>
        </div>

        {/* Conteneur de genres avec hauteur fixe */}
        <div className="h-14 overflow-hidden">
          {groupGenres(genres).map((group, index) => (
            <div
              key={index}
              className="flex justify-start items-center h-fit gap-[0.3em] mb-1"
            >
              {group.map((genre) => (
                <div
                  key={genre}
                  className="border border-[#EAEAEA] rounded-md text-[#EAEAEA] font-khula text-[15px] font-normal px-[0.5em] py-[0.05em] opacity-70 hover:bg-[#FF8C00] hover:text-[#222222] duration-300 cursor-pointer"
                >
                  <p>{genre}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <p className="font-khula block text-[#EAEAEA] relative h-[0em] group-hover:h-[275px] leading-[1.2em] duration-500 overflow-hidden mt-3">
        {text}
      </p>

      <a
        href={link}
        className="font-khula flex text-[#EAEAEA] justify-center relative top-10 h-[0em] group-hover:h-[275px] leading-[1.2em] duration-500 overflow-hidden"
      >
        <div className="text-mg gap-1 flex items-center mb-10 hover:text-[#FF8C00] ">
          <p>View</p>
          <HiOutlineArrowSmRight size={20} />
        </div>
      </a>
    </div>
  );
};

export default Card;
