import { useState } from "react";
import CardForWork from "../components/CardsForWork";
import Modal from "../components/ModalForWork";
import Card from "../components/Cards";

// Define the structure for project data
interface Project {
  id: string;
  title: string;
  text: string;
  frontend: string;
  backend: string;
  functionalities: string;
  projetURL: string;
  backgroundImage: string;
}

export default function Work() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); 

  const openModal = (project: Project) => {
    setSelectedProject(project); // Update selected project
    setIsModalOpen(true);
  };

  const projects: Project[] = [
    {
      id: "dogAround",
      title: "Dog Around",
      text: "Dog Around is a mobile application that allows users to schedule dog walks. It features a messaging system for communication between users, a geolocation feature to find nearby walks, and a location filtering system to help users select the best spots for their pets, creating a community of dog lovers.",
      frontend: "React Native, Expo, Redux Persist",
      backend: "Express.js, Node.js, Mongoose",
      functionalities:
        "Scheduled dog walks, Messaging system, Geolocation feature, Location filtering",
      projetURL:
        "https://expo.dev/preview/update?message=add%20vercel.json%20for%20deploy&updateRuntimeVersion=1.0.0&createdAt=2024-10-31T16%3A46%3A10.216Z&slug=exp&projectId=47fbcdfe-2ba4-46d5-afa7-f7840c4f9631&group=80a6fc39-96a9-4010-a174-341e5329c01c",
      backgroundImage: "./assets/dog-around.png", // Add backgroundImage for this project
    },
    {
      id: "SongIQ",
      title: "SongIQ",
      text: "SongIQ is a web application that challenges users’ knowledge of music through a blind test game format. It features an interactive leaderboard, secure user login, and integration with the Spotify API to retrieve and filter tracks by genre, providing an immersive and customized musical experience.",
      frontend: "Next.js, React, Redux Persist, Tailwind",
      backend: "Express.js, Node.js, Mongoose",
      functionalities:
        "Music blind test, Player leaderboard, User authentication, Spotify API integration, Genre-based filtering",
      projetURL: "https://song-iq-front.vercel.app/",
      backgroundImage: "./assets/GTM.png", // Add backgroundImage for this project
    },
    {
      id: "netflux",
      title: "NETFLUX",
      text: "Movies is a web application that allows users to view real-time movie listings at cinemas, leveraging the Movie/TMDB API. Developed with React, the app provides features for liking and rating movies, viewing user reviews, and accessing comprehensive movie ratings. The backend is built with Node.js, Express.js, and Mongoose, ensuring a smooth and responsive user experience.",
      frontend: "React",
      backend: "Node.js, Express, Mongoose",
      functionalities:
        "Real-time movie listings, Like and rate movies, View reviews and ratings",
      projetURL: "https://netflux-frontend.vercel.app/",
      backgroundImage: "./assets/NETFLUXX.png",
    },
    {
      id: "flowStudio",
      title: "Flow Studio",
      text: "FlowStudio is a website for a Pole Dance studio, designed with Figma and developed with WordPress. The site features a modern interface with functionalities such as online booking, course listings, pricing details, and an overview of the studio and its team",
      frontend: "WordPress",
      backend: "WordPress",
      functionalities:
        "Online booking, Course listings, Pricing lists, Studio and team presentation",
      projetURL: "https://poledancewithme.wordpress.com/",
      backgroundImage: "./assets/FLOW.png",
    },
    {
      id: "HackaTweet",
      title: "HackaTweet",
      text: "HackaTweet is a dynamic web application inspired by Twitter, developed with React and Next.js. It features account creation, the ability to post tweets, and support for hashtags, all powered by a robust backend using Express.js, Node.js, and Mongoose for database management.",
      frontend: "React, Next.js, Redux Persist",
      backend: "Express.js, Node.js, Mongoose",
      functionalities: "Account creation, Tweeting, Hashtag support",
      projetURL: "https://hacka-tweet-front.vercel.app/",
      backgroundImage: "./assets/twitter.avif",
    },
    {
      id: "Morning News",
      title: "Morning News",
      text: "Morning News is a comprehensive web application designed for news enthusiasts. Developed with React, Redux, and Next.js, it allows users to read articles, create accounts, and add articles to their favorites. The app is powered by a Node.js and Express.js backend, with Mongoose managing the database and Jest used for testing. It also integrates with the NEWAPI to deliver up-to-date news content.",
      frontend: "React, Redux, Next.js",
      backend: "Node.js, Express.js, Mongoose, Jest",
      functionalities: "Article reading, Account creation, Add to favorites",
      projetURL: "https://morning-news-front-beige.vercel.app/",
      backgroundImage: "./assets/TMN.avif",
    },
    {
      id: "WeatherApp",
      title: "WeatherApp",
      text: "WeatherApp is a user-friendly web application that provides real-time weather updates using the OpenWeatherApp API. Developed in Vanilla JavaScript, the app allows users to create accounts, add or remove cities from their weather dashboard, and view accurate, up-to-date weather data. The backend is powered by Node.js, Express.js, and Mongoose for efficient data management.",
      frontend: "Vanilla JavaScript, HTML, CSS",
      backend: "Express.js, Node.js, Mongoose",
      functionalities:
        "Account creation, Add/Remove cities, Real-time weather updates",
      projetURL: "https://weather-front-six.vercel.app/",
      backgroundImage: "./assets/weather.avif",
    },
    {
      id: "Portfolio",
      title: "Portfolio v1",
      text: "My frist Portfolio",
      frontend: "React, Tailwind",
      backend: "No Back",
      functionalities: "",
      projetURL: "https://portfolio-lilac-kappa-24.vercel.app/",
      backgroundImage: "./assets/hey.png",

    },
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
            
          />
        ))}
      </div>
      {/* Modal */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          title={selectedProject.title}
          text={selectedProject.text}
          frontend={selectedProject.frontend}
          backend={selectedProject.backend}
          functionalities={selectedProject.functionalities}
          projetURL={selectedProject.projetURL}
        />
      )}
    </div>
  );
}
