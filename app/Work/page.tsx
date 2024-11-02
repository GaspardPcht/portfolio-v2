import { useState } from "react";
import CardForWork from "../components/CardsForWork";
import Modal from "../components/ModalForWork";

// Define the structure for project data
interface Project {
  id: string;
  title: string;
  text: string;
  link: string;
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
      text: "Dog Around is a mobile application that allows users to schedule dog walks.",
      link: "https://example.com/dogaround",
      frontend: "React Native, Expo, Redux Persist",
      backend: "Express.js, Node.js, Mongoose",
      functionalities:
        "Scheduled dog walks, Messaging system, Geolocation feature",
      projetURL: "https://expo.dev/preview/dogaround",
      backgroundImage: "./assets/dog-around.png", // Add backgroundImage for this project
    },
    {
      id: "netflux",
      title: "NETFLUX",
      text: "NETFLUX is a streaming service that provides a wide range of movies and TV shows.",
      link: "https://example.com/netflux",
      frontend: "React, Tailwind",
      backend: "Node.js, Express",
      functionalities: "Streaming, Search, User Authentication",
      projetURL: "https://www.example.com/netflux",
      backgroundImage: "./assets/NETFLUX.png",
    },
    {
      id: "flowStudio",
      title: "Flow Studio",
      text: "Flow Studio is a creative application designed for artists and designers.",
      link: "https://example.com/flowstudio",
      frontend: "React, Redux",
      backend: "Express, MongoDB",
      functionalities: "Collaboration, File Sharing, Real-time Editing",
      projetURL: "https://www.example.com/flowstudio",
      backgroundImage: "./assets/flowStudio.png",
    },
    {
      id: "SongIQ",
      title: "SongIQ",
      text: "Dog Around is a mobile application that allows users to schedule dog walks.",
      link: "https://example.com/dogaround",
      frontend: "React Native, Expo, Redux Persist",
      backend: "Express.js, Node.js, Mongoose",
      functionalities:
        "Scheduled dog walks, Messaging system, Geolocation feature",
      projetURL: "https://expo.dev/preview/dogaround",
      backgroundImage: "./assets/songIQ.png", // Add backgroundImage for this project
    },
    {
      id: "HackaTweet",
      title: "HackaTweet",
      text: "Dog Around is a mobile application that allows users to schedule dog walks.",
      link: "https://example.com/dogaround",
      frontend: "React Native, Expo, Redux Persist",
      backend: "Express.js, Node.js, Mongoose",
      functionalities:
        "Scheduled dog walks, Messaging system, Geolocation feature",
      projetURL: "https://expo.dev/preview/dogaround",
      backgroundImage: "./assets/twitter.avif",
    },
    {
      id: "Morning News",
      title: "Morning News",
      text: "Dog Around is a mobile application that allows users to schedule dog walks.",
      link: "https://example.com/dogaround",
      frontend: "React Native, Expo, Redux Persist",
      backend: "Express.js, Node.js, Mongoose",
      functionalities:
        "Scheduled dog walks, Messaging system, Geolocation feature",
      projetURL: "https://expo.dev/preview/dogaround",
      backgroundImage: "./assets/NewYorkTimes.avif", // Add backgroundImage for this project
    },
    {
      id: "WeatherApp",
      title: "WeatherApp",
      text: "Dog Around is a mobile application that allows users to schedule dog walks.",
      link: "https://example.com/dogaround",
      frontend: "React Native, Expo, Redux Persist",
      backend: "Express.js, Node.js, Mongoose",
      functionalities:
        "Scheduled dog walks, Messaging system, Geolocation feature",
      projetURL: "https://expo.dev/preview/dogaround",
      backgroundImage: "./assets/weather.avif", // Add backgroundImage for this project
    },
    {
      id: "Portfolio",
      title: "Portfolio v1",
      text: "Dog Around is a mobile application that allows users to schedule dog walks.",
      link: "https://example.com/dogaround",
      frontend: "React Native, Expo, Redux Persist",
      backend: "Express.js, Node.js, Mongoose",
      functionalities:
        "Scheduled dog walks, Messaging system, Geolocation feature",
      projetURL: "https://expo.dev/preview/dogaround",
      backgroundImage: "./assets/hey.png", // Add backgroundImage for this project
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {projects.map((project) => (
          <CardForWork
            key={project.id}
            onClick={() => openModal(project)} // Pass the project as an argument
            backgroundImage={project.backgroundImage}
            title={project.title}
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
          link={selectedProject.link}
          frontend={selectedProject.frontend}
          backend={selectedProject.backend}
          functionalities={selectedProject.functionalities}
          projetURL={selectedProject.projetURL}
        />
      )}
    </div>
  );
}
