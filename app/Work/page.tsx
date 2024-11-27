
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
      id: "dogAround",
      title: "DOGAROUND",
      frontend: "RN, Expo, Redux,",
      backend: "Express, Node, Mongoose",
      functionalities:
        "Scheduled dog walks, Messaging system, Geolocation feature, Location filtering",
      projetURL:
        "https://expo.dev/preview/update?message=add%20vercel.json%20for%20deploy&updateRuntimeVersion=1.0.0&createdAt=2024-10-31T16%3A46%3A10.216Z&slug=exp&projectId=47fbcdfe-2ba4-46d5-afa7-f7840c4f9631&group=80a6fc39-96a9-4010-a174-341e5329c01c",
      backgroundImage: "./assets/1.png", // Add backgroundImage for this project
    },
    {
      id: "AkRenov",
      title: "AkRenov",
      frontend: "React, Next.js, Tailwind",
      backend: "No Backend",
      functionalities:
     "Responsive design, Interactive project showcase, Dynamic project filtering, Contact form with validation",
      projetURL: "https://ak-renov.vercel.app/",
      backgroundImage: "./assets/7.png",
    },
    {
      id: "flowStudio",
      title: "FLOWSTUDIO",
      frontend: "WordPress",
      backend: " Elementor",
      functionalities:
        "Online booking, Course listings, Pricing lists, Studio and team presentation",
      projetURL: "https://poledancewithme.wordpress.com/",
      backgroundImage: "./assets/6.png",
    },
    {
      id: "netflux",
      title: "NETFLUX",
      frontend: "React, Next.js",
      backend: "Node, Express, Mongoose",
      functionalities:
        "Real-time movie listings, Like and rate movies, View reviews and ratings",
      projetURL: "https://netflux-frontend.vercel.app/",
      backgroundImage: "./assets/3.png",
    },
    {
      id: "HackaTweet",
      title: "HACKATWEET",
      frontend: "React, Next.js, Redux",
      backend: "Express, Node, Mongoose",
      functionalities: "Account creation, Tweeting, Hashtag support",
      projetURL: "https://hacka-tweet-front.vercel.app/",
      backgroundImage: "./assets/5.png",
    },
    {
      id: "songIQ",
      title: "SONGIQ",
    
      frontend: "React, Redux, Tailwind",
      backend: "Express, Node, Mongoose",
      functionalities:
        "Music blind test, Player leaderboard, User authentication, Spotify API integration, Genre-based filtering",
      projetURL: "https://song-iq-front.vercel.app/",
      backgroundImage: "./assets/2.png", // Add backgroundImage for this project
    },
    {
      id: "Morning News",
      title: "MORNINGNEWS",
      frontend: "React, Redux, Next.js",
      backend: "Node, Express, Mongoose",
      functionalities: "Article reading, Account creation, Add to favorites",
      projetURL: "https://morning-news-front-beige.vercel.app/",
      backgroundImage: "./assets/4.png",
    },
    {
      id: "PortfolioV1",
      title: "PORTFOLIO V1",
      frontend: "React, Next.js, Tailwind",
      backend: "No Backend",
      functionalities: "Responsive design, Project showcase, Contact form",
      projetURL: "https://portfolio-lilac-kappa-24.vercel.app/",
      backgroundImage: "./assets/8.png",
    }
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Main Text */}
      <div className="absolute left-[4vw] md:left-[4vw] lg:left-[2vw] top-[50%] transform -translate-y-1/2 -translate-x-1/2 pl-2">
        <span className="flex text-[64px] md:text-[96px] opacity-50 font-bold font-khula text-[#FF8C00] stroke-black stroke-1 rotate-90">
          WORK
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  p-4">
        {projects.map((project) => (
          <Card
            key={project.id} // Don't forget to add a key
            backgroundImage={project.backgroundImage}
            title={project.title}
            text={project.functionalities}
            genres={[
              ...project.frontend.split(", "),
              ...project.backend.split(", "),
            ]}
            href={project.projetURL}
          />
        ))}
      </div>
    </div>
  );
}
