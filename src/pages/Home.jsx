import { lazy, Suspense } from "react";
import Hero from "../components/Hero/Hero";

const SkillsCard = lazy(() => import("../components/Skills/SkillsCard"));
const ProjectCard = lazy(() => import("../components/ProjectCard/ProjectCard"));
const Footer = lazy(() => import("../components/Footer/Footer"));

function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={null}>
        <SkillsCard />
        <ProjectCard />
        <Footer />
      </Suspense>
    </main>
  );
}

export default Home;
