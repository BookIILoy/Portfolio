"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 flex flex-wrap">
        <li className="w-1/3">Node.js</li>
        <li className="w-1/3">React.js</li>
        <li className="w-1/3">Next.js</li>
        <li className="w-1/3">Express.js</li>
        <li className="w-1/3">MySQL</li>
        <li className="w-1/3">JavaScript</li>
        <li className="w-1/3">MongoDB</li>
        <li className="w-1/3">Django</li>
        <li className="w-1/3">GoLang</li>
        <li className="w-1/3">HTML</li>
        <li className="w-1/3">CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>King Mongkut's University of Technology Thonburi</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Meta Back-End Developer Specialization (coursera)</li>
        <li>Meta Front-End Developer Specialization (coursera)</li>
        <li>IBM Data Science Specialization (coursera)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/image/about-image.jpeg" alt="about image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a FullStack Developer. I have experience
            working on projects with JavaScript, React, Next, Node.js, Express, MySQL,
            MongoDB, Django, GoLang, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-5">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;