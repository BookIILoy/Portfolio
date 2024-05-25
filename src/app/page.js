"use client"
import InfoSection from "./components/infosection";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/About/About";
import AchievementsSection from "./components/AchievenebtsSection";
import ProjectsSection from "./components/Project/ProjectsSection";
import ContactSection from "./components/Contact/ContactSection";
import ContactLink from "./components/Contact/ContactLink";
import { Element } from 'react-scroll';
import VisibilitySensor from "./components/Animation/VisibilitySensor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <VisibilitySensor>
          <Element name="home" className="section animate-slideInLeft">
            <InfoSection />
          </Element>
        </VisibilitySensor>
        <VisibilitySensor>
        <Element name="achievements" className="section animate-slideInLeft">
          <AchievementsSection />
        </Element>
        </VisibilitySensor>
        <VisibilitySensor>
        <Element name="about" className="section animate-slideInLeft">
          <AboutSection />
        </Element>
        </VisibilitySensor>
        <VisibilitySensor>
        <Element name="projects" className="section animate-slideInLeft">
          <ProjectsSection />
        </Element>
        </VisibilitySensor>
        <VisibilitySensor>
        <Element name="contact" className="section animate-slideInLeft">
          <ContactSection />
        </Element>
        </VisibilitySensor>
      </div>
    </main>
  );
}