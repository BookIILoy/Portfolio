
import InfoSection from "./components/infosection";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/About/About";
import AchievementsSection from "./components/AchievenebtsSection";
import ProjectsSection from "./components/Project/ProjectsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <InfoSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
