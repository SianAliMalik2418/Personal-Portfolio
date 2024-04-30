import React from "react";
import ProjectCard from "./ProjectCard";
import compilerThumb from "../assets/images/Rapid mockup.jpg";
import movieThumb from "../assets/images/movieApp.jpg";
import furnItThumb from "../assets/images/furnit pic.jpeg";

function Projects() {

  const project1Skills = ["React","TailwindCSS"]
  const project2Skills = ["React","TailwindCSS","Rapid Api","React-Router-Dom"]
  const project3Skills = ["React","TailwindCSS","TMDB API"]

  return (
    <div className="mt-16 w-full text-white dark:text-[#2D2E32] pt-2 px-3 flex flex-col items-center justify-center md:mt-40">
      <h1 className="text-3xl font-semibold lg:text-4xl ">
        Some Things I've Built.
      </h1>

      <div className="flex flex-col gap-10 lg:items-center lg:justify-center">
        <ProjectCard
          thumbNail={furnItThumb}
          projectName={"furnIt."}
          description={
            <p>
             Developed a stylish frontend for a furniture showcase website, featuring a curated selection of modern furniture pieces. Designed with React.js and styled with Tailwind CSS for a polished and responsive layout. Implemented dynamic filtering by category to enhance user browsing experience.
            </p>
          }
          liveLink={"https://furn-it.netlify.app/"}
          repoLink={"https://github.com/SianAliMalik2418/FurnIt--Ecommerce-App"}
          techStacks={project1Skills}
        />

        <ProjectCard
          thumbNail={compilerThumb}
          projectName={"Rapid Compiler"}
          description={
            <p>
              The Rapid Compiler is a web platform facilitating{" "}
              <span className="font-bold">code compilation and execution</span>{" "}
              across various programming languages. Users can input code, choose
              a language, and instantly view the output. The interface,
              developed with <span className="font-bold">React,</span> features
              an intuitive code editor using CodeMirror. Utilizing external APIs
              like <span className="font-bold">Rapid Api</span>, the platform
              ensures efficient compilation processes. With support for 75+
              languages, it caters to diverse coding needs for both beginners
              and professionals.
            </p>
          }
          liveLink={"https://rapid-compiler.netlify.app/"}
          repoLink={"https://github.com/SianAliMalik2418/Rapid-Compiler"}
          techStacks={project2Skills}
        />

        <ProjectCard
          thumbNail={movieThumb}
          projectName={"MovieFlix"}
          description={
            <p>
              MovieFlix stands out with its intuitive design, allowing users to
              search for movies, view details, and watch trailers effortlessly.
              The integration of the TMDb API ensures a vast movie database,
              enabling users to stay informed about the latest releases and
              popular films. With a responsive and visually appealing UI,
              MovieFlix caters to movie buffs, providing an enjoyable and
              informative platform for exploring the world of cinema.
            </p>
          }
          liveLink={"https://movie-flix-rouge.vercel.app/"}
          repoLink={"https://github.com/SianAliMalik2418/MovieFlix"}
          techStacks={project3Skills}
        />
      </div>
    </div>
  );
}

export default Projects;
