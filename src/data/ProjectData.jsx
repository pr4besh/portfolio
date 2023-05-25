// !Import images for Projjects section
import calorimeter from "../assets/calorimeter.png";
import manual from "../assets/javascript-manual.png";
import project2 from "../assets/project_2.png";
import project3 from "../assets/project_3.png";

// !Import Images for Skills Section
import css from "../assets/skills/css3.svg";
import git from "../assets/skills/git.svg";
import html from "../assets/skills/html5.svg";
import tailwind from "../assets/skills/tailwind.svg";
import js from "../assets/skills/javascript.svg";
import nodejs from "../assets/skills/nodejs.svg";
import react from "../assets/skills/react.svg";
import responsive from "../assets/skills/responsive.svg";

// --------------------------------------- Project List
export const ProjectList = [
  {
    img: calorimeter,
    title: "Calorimeter",
    description:
      "Calorimeter helps you to set your daily calories limit and track your calories gained or loss during your meals and workouts.",
    tech_stack: "HTML, CSS, JavaScript",
    github_url: "https://github.com/pr4besh/calorimeter",
    demo_url: "https://calorimeter.vercel.app",
  },
  {
    img: manual,
    title: "JavaScript Manual",
    description:
      "JavaScript Manual is where I have documented all my learning throughout my journey of learning JavaScript. I believe this website can be helpful for anyone as a refresher or a guide.",
    tech_stack: "CMS, Hugo",
    github_url: "https://github.com/pr4besh/javascript-manual",
    demo_url: "https://javascript-manual.netlify.app/",
  },
  {
    img: project2,
    title: "Pending",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repudiandae delectus ex voluptas ipsum architecto.",
    tech_stack: "Pending",
    github_url: "#",
    demo_url: "#",
  },
  {
    img: project3,
    title: "Pending",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur, cumque facilis perspiciatis aspernatur consequatur.",
    tech_stack: "Pending",
    github_url: "#",
    demo_url: "#",
  },
];

// --------------------------------------- Skills

export const stackList = [
  {
    img: html,
    name: "HTML",
  },
  {
    img: css,
    name: "CSS",
  },
  {
    img: js,
    name: "JavaScript",
  },
  {
    img: nodejs,
    name: "NodeJS",
  },
  {
    img: react,
    name: "ReactJS",
  },
  {
    img: tailwind,
    name: "Tailwind",
  },
  {
    img: git,
    name: "Git",
  },
  {
    img: responsive,
    name: "Responsive",
  },
];
