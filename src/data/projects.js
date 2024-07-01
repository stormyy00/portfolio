import PAD from "@/public/PAD.png";
import HISS from "@/public/HISS.png";
import Gals from "@/public/galspress.png";
import hack from "@/public/hackathon.png";
import tools from "@/public/rtools.png";
import design from "@/public/designverse.png";
import val from "@/public/val.png";
import art from "@/public/art3.png";
import mood from "@/public/mood.png";
import db from "@/public/db.png";
import load from "@/public/load.jpg";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const projects = [
  {
    title: "Pending...",
    description: "Please comeback at a later date to see the next project...",
    techStack: ["Next.Js", "Self hosted server"],
    link: "https://github.com/stormyy00",
    image: load,
    links: [
      {
        text: <FaGlobeAmericas />,
        url: "https://downloadmoreram.com/download.html",
      },
      {
        text: <FaGithub />,
        url: "https://www.youtube.com/watch?v=ze-POGS94-k",
      },
    ],
  },
  {
    title: "Gals Press",
    description: "Discover the how much bias an article contains",
    techStack: ["Next.Js", "Tailwind", "Flask", "Google Colab"],
    link: "https://github.com/rfairooz/GalsPress",
    image: Gals,
    links: [
      // {
      //   text: <FaGlobeAmericas />,
      //   url: "https://www.designverseucr.org/",
      // },
      {
        text: <FaGithub />,
        url: "https://github.com/rfairooz/GalsPress",
      },
    ],
  },
  {
    title: "Mood",
    description:
      "Inspired by BeReal and Life360, a homegrown community where checking in on your friends' mental health is as easy as 1, 2, 3.",
    techStack: ["React Native", "Tailwind", "Firebase", "OpenAI", "Flask"],
    link: "https://github.com/acm-ucr/r-tools",
    image: mood,
    links: [
      // {
      //   text: <FaGlobeAmericas />,
      //   url: "https://rtools.ucrhighlanders.org/",
      // },
      {
        text: <FaGithub />,
        url: "https://github.com/stormyy00/HackTech2024",
      },
    ],
  },
  {
    title: "R'Tools",
    description:
      "A site where students can run the essential algorithms with visualizations and logical expression",
    techStack: ["Next.js", "Tailwind", "Prettier"],
    link: "https://github.com/acm-ucr/r-tools",
    image: tools,
    links: [
      {
        text: <FaGlobeAmericas />,
        url: "https://rtools.ucrhighlanders.org/",
      },
      {
        text: <FaGithub />,
        url: "https://github.com/acm-ucr/r-tools",
      },
    ],
  },
  {
    title: "Game Rental Store",
    description:
      "A site where you can rent out your favorite games at the lowest price",
    techStack: ["Next.js", "Java", "PostgreSQL", "Redux", "Prisma", "Tailwind"],
    link: "https://github.com/stormyy00/valentine",
    image: db,
    links: [
      {
        text: <FaGlobeAmericas />,
        url: "https://cs166-frontend.vercel.app/table/catalog",
      },
      {
        text: <FaGithub />,
        url: "hhttps://github.com/stormyy00/cs166-frontend",
      },
      {
        text: <FaGithub />,
        url: "https://github.com/stormyy00/cs166",
      },
    ],
  },
  {
    title: "Art Factory",
    description:
      "Leading a group of 6 people to create a website for UCR's Art Factory Club",
    techStack: ["Next.Js", "Tailwind", "Figma"],
    link: "https://github.com/stormyy00",
    image: art,
    links: [
      {
        text: <FaGlobeAmericas />,
        url: "https://artfactory.ucrhighlanders.org/",
      },
      {
        text: <FaGithub />,
        url: "https://github.com/acm-ucr/art-factory-website",
      },
    ],
  },
  {
    title: "Be my Valentine",
    description:
      "Ask out your dream girl with my this webisite, they will not say no",
    techStack: ["Next.js", "Tailwind", "Prettier"],
    link: "https://github.com/stormyy00/valentine",
    image: val,
    links: [
      {
        text: <FaGlobeAmericas />,
        url: "https://wyubmv.vercel.app/",
      },
      {
        text: <FaGithub />,
        url: "https://github.com/stormyy00/valentine",
      },
    ],
  },
  {
    title: "Design Verse",
    description: "Hackathon catered towards UI/UX designers",
    techStack: ["Next.js", "Tailwind", "Cypress", "Prettier"],
    link: "https://github.com/designatucr/designverse2024",
    image: design,
    links: [
      {
        text: <FaGlobeAmericas />,
        url: "https://www.designverseucr.org/",
      },
      {
        text: <FaGithub />,
        url: "https://github.com/designatucr/designverse2024",
      },
    ],
  },
  {
    title: "PC Cooling System",
    description: "Embedded System using a Arduino Microcontroller",
    techStack: ["Arduino", "C++"],
    link: "https://github.com/stormyy00/PC-Cooling-System",
    image: PAD,
    links: [
      // {
      //   text: <FaGlobeAmericas />,
      //   url: "https://www.designverseucr.org/"
      // },
      {
        text: <FaGithub />,
        url: "https://github.com/stormyy00/PC-Cooling-System",
      },
    ],
  },
  {
    title: "Hackathon Website",
    description: "The hackathon user portal and admin dashboard used",
    techStack: ["Next.js", "Tailwind", "Cypress", "NextAuth", "Firebase"],
    link: "https://github.com/acm-ucr/hackathon-website",
    image: hack,
    links: [
      // {
      //   text: <FaGlobeAmericas />,
      //   url: "https://www.designverseucr.org/"
      // },
      {
        text: <FaGithub />,
        url: "https://github.com/designatucr/designverse2024",
      },
    ],
  },
  {
    title: "Phi Alpha Delta",
    description:
      "The offical website for professional law and fraternity club at UCR",
    techStack: ["Next.js", "Tailwind", "Cypress", "Prettier"],
    link: "https://github.com/acm-ucr/pad-website",
    image: PAD,
    links: [
      {
        text: <FaGlobeAmericas />,
        url: "https://pad.ucrhighlanders.org/",
      },
      {
        text: <FaGithub />,
        url: "https://github.com/acm-ucr/pad-website",
      },
    ],
  },
  {
    title: "Highlander Stats Society",
    description: "The offical website for Highland Statistic Society at UCR",
    techStack: ["Next.js", "Tailwind", "Prettier"],
    link: "https://github.com/acm-ucr/hiss-website",
    image: HISS,
    links: [
      {
        text: <FaGlobeAmericas />,
        url: "https://hiss.ucrhighlanders.org/",
      },
      {
        text: <FaGithub />,
        url: "https://github.com/acm-ucr/hiss-website",
      },
    ],
  },
];
