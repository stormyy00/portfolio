"use client";
import About from "../components/About";
import Experience from "../components/Experience";
import Landing from "../components/Landing";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Landing />
      <About />
      <Projects />
      <Experience />
    </div>
  );
};
export default Home;
