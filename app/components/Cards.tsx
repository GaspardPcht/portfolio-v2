export default function Card() {
  return (
    <div
      className="border-[1px] border-[#2C2C2C] hover:border-[#FF8C00] card h-[300px] w-[270px] group relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden"
      style={{
        backgroundImage: "url(./assets/NETFLUXX.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Conteneur avec flou par défaut */}
      <div className="absolute top-0 left-0 h-full w-full backdrop-blur-lg transition-all hover:backdrop-blur-lg"></div>

      <div className="container text-white z-[2] relative font-khula flex flex-col gap-[0.5em]">
        <div className="h-fit w-full">
          <h1 className="card_heading text-[1.5em]">SongIQ</h1>
        </div>

        <div className="flex justify-center items-center h-fit w-fit gap-[0.5em]">
          {["React", "Node", "Next"].map((genre) => (
            <div
              key={genre}
              className="border border-[#EAEAEA] rounded-md text-[#EAEAEA] font-khula text-[1em] font-normal px-[0.5em] py-[0.05em] hover:bg-white hover:text-[#222222] duration-300 cursor-pointer"
            >
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="font-nunito block text-white font-light relative h-[0em] group-hover:h-[275px] leading-[1.2em] duration-500 overflow-hidden">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
        officiis, dolorem ab animi magnam culpa fugit error voluptates adipisci,
        debitis ut fuga at nisi laborum suscipit a eos similique unde
      </p>
    </div>
  );
}
