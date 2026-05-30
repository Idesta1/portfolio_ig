import Hero from "../components/Hero/Hero";
import SkillsCard from "../components/Skills/SkillsCard";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <main>
      <Hero />
      <SkillsCard />
      <ProjectCard />
      <Footer />
    </main>
  );
}

export default Home;
