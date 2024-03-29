"use client";
import Sidebar from "@/components/Sidebar";
import About from "../components/About";
import Experience from "../components/Experience";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <>
      <div>
        <Sidebar />
      </div>

      <div className="w-full md:w-9/12 flex flex-col items-center justify-center bg-blue-">
        <Navigation />
        <Landing />
        <About />
        <Projects />
        <Experience />
      </div>
    </>
  );
};
export default Home;
