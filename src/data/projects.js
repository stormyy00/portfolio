import PAD from "../../public/PAD.png";
import HISS from "../../public/HISS.png";
import Gals from "../../public/galspress.png";
import hack from "../../public/hackathon.png";
import tools from "../../public/rtools.png";
import design from "../../public/designverse.png";
import val from "../../public/val.png";
import art from "../../public/art3.png";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const projects = [
  {
    title: "Art Factory (in Progress)",
    description:
      "Leading a group of 6 people to create a website for UCR's Art Factory Club",
    techStack: ["Next.Js", "Tailwind", "Figma", "Github Actions"],
    link: "https://github.com/stormyy00",
    image: art,
    icons: [<FaGlobeAmericas />, <FaGithub />],
    link: [
      "https://www.designverseucr.org/",
      "https://github.com/designatucr/designverse2024",
    ],
  },
  {
    title: "Gals Press",
    description: "Discover the how much bias an article contains",
    techStack: ["Next.Js", "Tailwind", "Flask", "Google Colab"],
    link: "https://github.com/rfairooz/GalsPress",
    image: Gals,
    icons: [<FaGlobeAmericas />, <FaGithub />],
    link: [
      "https://www.designverseucr.org/",
      "https://github.com/designatucr/designverse2024",
    ],
  },
  {
    title: "Be my Valentine",
    description:
      "Ask out your dream girl with my this webisite, they will not say no",
    techStack: ["Next.js", "Tailwind", "Prettier"],
    link: "https://github.com/acm-ucr/hiss-website",
    image: val,
    icons: [<FaGlobeAmericas />, <FaGithub />],
    link: [
      "https://www.designverseucr.org/",
      "https://github.com/designatucr/designverse2024",
    ],
  },
  {
    title: "R'Tools",
    description:
      "A site where students can run the essential algorithms with visualizations and logical expression",
    techStack: ["Next.js", "Tailwind", "Prettier"],
    link: "https://github.com/stormyy00/valentine",
    image: tools,
    icons: [<FaGlobeAmericas />, <FaGithub />],
    link: [
      "https://www.designverseucr.org/",
      "https://github.com/designatucr/designverse2024",
    ],
  },
  {
    title: "Design Verse",
    description: "Hackathon catered towards UI/UX designers",
    techStack: ["Next.js", "Tailwind", "Cypress", "Prettier"],
    link: "https://github.com/designatucr/designverse2024",
    image: design,
    icons: [<FaGlobeAmericas />, <FaGithub />],
    link: [
      "https://www.designverseucr.org/",
      "https://github.com/designatucr/designverse2024",
    ],
  },
  {
    title: "PC Cooling System",
    description: "Embedded System using a Arduino Microcontroller",
    techStack: ["Arduino", "C++"],
    link: "https://github.com/stormyy00/PC-Cooling-System",
    image: PAD,
    icons: [<FaGlobeAmericas />, <FaGithub />],
    link: [
      "https://www.designverseucr.org/",
      "https://github.com/designatucr/designverse2024",
    ],
  },
  {
    title: "Hackathon Website",
    description: "The hackathon user portal and admin dashboard used",
    techStack: ["Next.js", "Tailwind", "Cypress", "NextAuth", "Firebase"],
    link: "https://github.com/acm-ucr/hackathon-website",
    image: hack,
    icons: [<FaGlobeAmericas />, <FaGithub />],
    link: [
      "https://www.designverseucr.org/",
      "https://github.com/designatucr/designverse2024",
    ],
  },
  {
    title: "Phi Alpha Delta",
    description:
      "The offical website for professional law and fraternity club at UCR",
    techStack: ["Next.js", "Tailwind", "Cypress", "Prettier"],
    link: "https://github.com/acm-ucr/pad-website",
    image: PAD,
    icons: [<FaGlobeAmericas />, <FaGithub />],
    link: [
      "https://www.designverseucr.org/",
      "https://github.com/designatucr/designverse2024",
    ],
  },
  {
    title: "Highlander Stats Society",
    description: "The offical website for Highland Statistic Society at UCR",
    techStack: ["Next.js", "Tailwind", "Prettier"],
    link: "https://github.com/acm-ucr/hiss-website",
    image: HISS,
    icons: [<FaGlobeAmericas />, <FaGithub />],
    link: [
      "https://www.designverseucr.org/",
      "https://github.com/designatucr/designverse2024",
    ],
  },
];
