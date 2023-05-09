import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Stats from "./Components/Stats";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
// import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Box } from "@chakra-ui/react";

function App() {
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.45,
  });
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, mirror: true });
  }, []);

  return (
    <div style={{backgroundColor: "white", color:"black" }}>
      <Box bg="white">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Contact />
      </Box>
    </div>
  );
}

export default App;
