import React from "react";

interface CardProps {
  backgroundImage: string;
  title: string;
  text: string;
  width?: string;
  height?: string;
  genres: string[];
  opacity?: number;
}

const Card: React.FC<CardProps> = ({
  backgroundImage,
  title,
  text,
  width = "w-60",
  height = "h-80",
  genres,
  opacity = 0.35,
}) => {
  // Fonction pour grouper les genres par trois
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
      {/* Conteneur pour l'image de fond avec opacité */}
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

      {/* Conteneur avec flou par défaut */}
      <div className="absolute top-0 left-0 h-full w-full backdrop-blur-lg transition-all hover:backdrop-blur-lg"></div>

      <div className="container text-[#EAEAEA] relative font-khula flex flex-col gap-[0.5em]">
        <div className="h-fit w-full">
          <h1 className="font-khula text-[#EAEAEA] font-bold text-[1.5em]">
            {title}
          </h1>
        </div>

        {/* Afficher les genres en groupes de 3 */}
        {groupGenres(genres).map((group, index) => (
          <div
            key={index}
            className="flex justify-start items-center h-fit gap-[0.2em]"
          >
            {group.map((genre) => (
              <div
                key={genre}
                className="border border-[#EAEAEA] rounded-md text-[#EAEAEA] font-khula text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-white hover:text-[#222222] duration-300 cursor-pointer"
              >
                <p>{genre}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className="font-khula block text-[#EAEAEA] relative h-[0em] group-hover:h-[275px] leading-[1.2em] duration-500 overflow-hidden mt-3">
        {text}
      </p>
      <button className="font-khula block text-[#EAEAEA] relative h-[0em] group-hover:h-[275px] leading-[1.2em] duration-500 overflow-hidden mt-3">
        <p>View All</p>
      </button>
    </div>
  );
};

export default Card;
