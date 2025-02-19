import Card from "../components/Cards";


// Define the structure for project data
interface Project {
  id: string;
  title: string;
  frontend: string;
  backend: string;
  functionalities: string;
  projetURL: string;
  backgroundImage: string;
}

export default function Work() {

  const projects: Project[] = [
    {
      id: "rendezio",
      title: "RENDEZIO",
      frontend: "React, Tailwind, Next.js",
      backend: "Express, Node, MongoDB",
      functionalities: "Système de réservation, Gestion de calendrier, Interface admin, Authentification utilisateur",
      projetURL: "https://rendezio-frontend.vercel.app/",
      backgroundImage: "/assets/5.png",
    },
    {
      id: "dogAround",
      title: "DOGAROUND",
      frontend: "RN, Expo, Redux,",
      backend: "Express, Node, Mongoose",
      functionalities:
        "Scheduled dog walks, Messaging system, Geolocation feature, Location filtering",
      projetURL:
        "https://expo.dev/preview/update?message=add%20vercel.json%20for%20deploy&updateRuntimeVersion=1.0.0&createdAt=2024-10-31T16%3A46%3A10.216Z&slug=exp&projectId=47fbcdfe-2ba4-46d5-afa7-f7840c4f9631&group=80a6fc39-96a9-4010-a174-341e5329c01c",
      backgroundImage: "/assets/1.png",
    },
    {
      id: "AkRenov",
      title: "AkRenov",
      frontend: "React, Next.js, Tailwind",
      backend: "No Backend",
      functionalities:
     "Responsive design, Interactive project showcase, Dynamic project filtering, Contact form with validation",
      projetURL: "https://ak-renov.vercel.app/",
      backgroundImage: "/assets/7.png",
    },
    {
      id: "flowStudio",
      title: "FLOWSTUDIO",
      frontend: "WordPress",
      backend: " Elementor",
      functionalities:
        "Online booking, Course listings, Pricing lists, Studio and team presentation",
      projetURL: "https://poledancewithme.wordpress.com/",
      backgroundImage: "/assets/6.png",
    },
    {
      id: "netflux",
      title: "NETFLUX",
      frontend: "React, Next.js",
      backend: "Node, Express, Mongoose",
      functionalities:
        "Real-time movie listings, Like and rate movies, View reviews and ratings",
      projetURL: "https://netflux-frontend.vercel.app/",
      backgroundImage: "/assets/3.png",
    },
    {
      id: "songIQ",
      title: "SONGIQ",
    
      frontend: "React, Redux, Tailwind",
      backend: "Express, Node, Mongoose",
      functionalities:
        "Music blind test, Player leaderboard, User authentication, Spotify API integration, Genre-based filtering",
      projetURL: "https://song-iq-front.vercel.app/",
      backgroundImage: "/assets/2.png",
    },
    {
      id: "Morning News",
      title: "MORNINGNEWS",
      frontend: "React, Redux, Next.js",
      backend: "Node, Express, Mongoose",
      functionalities: "Article reading, Account creation, Add to favorites",
      projetURL: "https://morning-news-front-beige.vercel.app/",
      backgroundImage: "/assets/4.png",
    },
    {
      id: "PortfolioV1",
      title: "PORTFOLIO V1",
      frontend: "React, Next.js, Tailwind",
      backend: "No Backend",
      functionalities: "Responsive design, Project showcase, Contact form",
      projetURL: "https://portfolio-lilac-kappa-24.vercel.app/",
      backgroundImage: "/assets/8.png",
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-12">
      {/* Titre WORK */}
      <div className="absolute left-[4vw] md:left-[4vw] lg:left-[2vw] top-[50%] transform -translate-y-1/2 -translate-x-1/2 pl-2">
        <span className="flex text-[64px] md:text-[96px] opacity-50 font-bold font-khula text-[#FF8C00] 
          stroke-black stroke-1 rotate-90 hover:opacity-75 transition-opacity duration-300">
          WORK
        </span>
      </div>
      
      {/* Grille de projets avec largeur maximale réduite */}
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="transform transition-all duration-300 hover:-translate-y-1 max-w-[280px] mx-auto w-full"
            >
              <Card
                backgroundImage={project.backgroundImage}
                title={project.title}
                text={project.functionalities}
                genres={[
                  ...project.frontend.split(", "),
                  ...project.backend.split(", "),
                ]}
                href={project.projetURL}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
