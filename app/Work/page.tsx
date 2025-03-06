import ProjectGrid from '../components/ProjectGrid';

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
      id: "NOVA",
      title: "NOVA",
      frontend: "React, Redux, Next.js",
      backend: "Node, Express, Mongoose",
      functionalities: "User authentication, Shopping cart, Secure payment, Product catalog, Category filtering, Order management",
      projetURL: "https://nova-front-pi.vercel.app/",
      backgroundImage: "/assets/4.png",
    },
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
      
      <ProjectGrid projects={projects} />
    </div>
  );
}
