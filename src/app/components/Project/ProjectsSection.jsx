"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "GStore Website",
    description: "My Personal E-commerce Website Project",
    image: "/image/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BookIILoy/PracticeProject",
  },
  {
    id: 2,
    title: "RMDB Website",
    description: "This project is about movie reviews website.",
    image: "/image/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
  },
  {
    id: 3,
    title: "Little Lemon Restaurent",
    description: "Meta Frontend Project",
    image: "/image/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BookIILoy/Meta-Front-End-Capstone-Project",
  },
  {
    id: 4,
    title: "Twitter Toxic Tweets Sentiment",
    description: "Text Analysis Project",
    image: "/image/projects/4.png",
    tag: ["All", "Web", "ETC"],
    gitUrl: "https://github.com/BookIILoy/TextProj",
  },
  {
    id: 5,
    title: "IBM Data Science Project",
    description: "IMB Data Science Coursera Project",
    image: "/image/projects/5.png",
    tag: ["All", "ETC"],
    gitUrl: "https://github.com/BookIILoy/IBM-Data-Science-Project",
  },
  {
    id: 6,
    title: "Pizza Renger Website",
    description: "Database project about callcenter website",
    image: "/image/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/BookIILoy/Database-Project",
  },
  {
    id: 7,
    title: "Data Science Website with Streamlit",
    description: "Coursera Project",
    image: "/image/projects/7.png",
    tag: ["All", "ETC"],
    gitUrl: "https://github.com/BookIILoy/Build-a-Data-Science-Web-App-with-Streamlit-and-Python",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ETC"
          isSelected={tag === "ETC"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;