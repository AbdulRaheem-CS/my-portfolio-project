// src/pages/index.tsx
import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      {/* <div className="w-full h-1 bg-gradient-to-r from-black via-gray-800 to-black my-8"></div> */}
      <Projects />
      <Skills />
      <Contact />
    </MainLayout>
  );
};

export default HomePage;
