import ProjectCard from "./ProjectCard";
import compilerThumb from "../assets/images/Rapid mockup.jpg";
import movieThumb from "../assets/images/movieApp.jpg";
import foodCheetahThumb from "../assets/images/Food Cheetah.png";

function Projects() {
  const project1Skills = [
    "Next Js",
    "Typescript",
    "TailwindCSS",
    "MongoDB",
    "NextAuth",
    "Shadcn",
    "Cloudinary",
    "Tanstack query",
    "React Hook form",
  ];
  const project2Skills = [
    "React",
    "TailwindCSS",
    "Rapid Api",
    "React-Router-Dom",
  ];
  const project3Skills = ["React", "TailwindCSS", "TMDB API"];

  return (
    <div className="mt-16 w-full text-white dark:text-[#2D2E32] pt-2 px-3 flex flex-col items-center justify-center md:mt-40">
      <h1 className="text-3xl font-semibold lg:text-4xl ">
        Some Things I've Built.
      </h1>

      <div className="flex flex-col gap-10 lg:items-center lg:justify-center">
        <ProjectCard
          thumbNail={foodCheetahThumb}
          projectName={"Food Cheetah."}
          description={
            <p>
              Developed a food panda inspired food ordering app with modern tech
              stack like NextJs, Typescript, Tailwind CSS and Shadcn.This app is
              a full-stack Next.js application designed to provide users with an
              engaging and seamless restaurant experience. The app features
              secure user authentication through NextAuth, ensuring that only
              logged-in users can access certain functionalities like checkout,
              creating your own restaurant and ordering from a variety of
              restaurants.
            </p>
          }
          liveLink={"https://food-cheetah.vercel.app/"}
          repoLink={"https://github.com/SianAliMalik2418/Food-Cheeeetah"}
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
