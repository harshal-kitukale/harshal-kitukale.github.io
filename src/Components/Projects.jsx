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
    image: "https://camo.githubusercontent.com/aa7203108f52f0ddc4666c61c14594584e80872c5be63107c2dcfcf5e7a8de54/68747470733a2f2f692e6962622e636f2f687964686b68432f53637265656e73686f742d323032332d30342d30332d3132303534362e706e67",
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
