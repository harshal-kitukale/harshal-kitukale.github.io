import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import HelperProject from "../Helper/HelperProject";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.
    <Box id="projects" textAlign={"center"} pt="130px" mt={"10"}>
      <Heading>
        {" "}
        <Fade bottom> Projects </Fade>
      </Heading>
      <SimpleGrid
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
        columns={{ base: "1", md: "2", xl: "3" }}
        spacing={{ base: "10px", md: "40px" }}
        w={{ base: "95%", md: "81%" }}
        marginTop="70px"
        marginBottom={"50px"}
      >
        {data.map((el, ind) => {
          return <HelperProject key={Date.now() + ind} {...el} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

let data = [
  {
    image: "/code convertor.PNG",
    desc: "A code convertor that convert code from one coding language to another coding language and also check quality and debug code using gemini api.",
    title: "Code Convertor",
    techStack: ["JavaScript","Gemini", "NodeJs", "ExpressJs","HTML","CSS","Git"],
    github: "https://github.com/harshal-kitukale/code-convertor",
    deploy: "https://code-convertor.netlify.app/",
    // ["React", "Chakra UI", "0Auth", "Express", "MongoDB"],
  },
  {
    image: "/content_generator.PNG",
    desc: "A content generator that generate content based on user prompt using gemini api. it also has some safety features that restrict explicit content.",
    title: "Code Convertor",
    techStack: ["React","Redux","Gemini", "NodeJs", "ExpressJs","Git"],
    github: "https://github.com/harshal-kitukale/content-generator",
    deploy: "https://66682b7d416cf1e78c35e8e3--fancy-daffodil-5bfa64.netlify.app/",
    // ["React", "Chakra UI", "0Auth", "Express", "MongoDB"],
  },
  {
    image: "/Ghost_Fashion.PNG",
    desc: "The Ghost Fashion is an e-commerce platform to buy clothes,beauty & Wellness,fashion,furniture and jewellery,etc. and it is clone of The Souled Store.",
    title: "Ghost Fashion",
    techStack: ["React", "Chakra UI", "FireBase", "Versel", "NPM"],
    github: "https://github.com/UmaSahni/truculent-creature-9857",
    deploy: "https://ghost-shop.vercel.app/",
    // ["React", "Chakra UI", "0Auth", "Express", "MongoDB"],
  },
  {
    image:
      "https://user-images.githubusercontent.com/60300103/213976351-d8755e21-a41b-434e-9def-f0c1b9976d2e.png",
    title: "Apna Mall",
    desc: "Apna Mall is an e-commerce platform to buy clothes,groceries,furniture and jewellery.",
    techStack: ["Next.JS","React", "Chakra UI", "FireBase", "Versel", "NPM","Material UI"],
    github: "https://github.com/bhav1kmaru/apnaMall",
    deploy: "https://apnamall.vercel.app/",
  },
  {
    image: "unit5project.png",
    desc: "Sunglow Fashion is an e-commerce platform to buy clothes and fashion products.",
    title: "Sunglow Fashion",
    techStack: [
      "Next.Js",
      "Chakra UI",
      "Google Authentication",
      "Redux",
      "JSON-Server",
    ],
    github: "https://github.com/ParbhatKataria1/responsible-act-7116",
    deploy: "https://unit-5-frontend-deployement.netlify.app",
  },
  {
    image:
      "https://user-images.githubusercontent.com/108014776/214233013-0d1c8346-be2c-4435-bfc1-4580947a95ae.png",
    desc: " Website provides basic advertizing about sevices, various services. A community platform to get to know about various workout plans.",
    title: "GymWolf Clone",
    techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
    github: "https://github.com/LokeshVyavhare/Gym-workout-tracker",
    deploy: "https://envious-cactus-6437.netlify.app/",
  },
  {
    image:
      "tripoto.png",
    desc: " Tripoto is social travel platform to share and discover travel experiences, stories, community, tourism guides, hotels, holidays, getaways, attractions and many more.",
    title: "Tripoto Clone",
    techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
    github: "https://github.com/jkumari25/Tripoto.com",
    deploy: "https://tripoto-clone-one.vercel.app/",
  },
  
];

export default Projects;
