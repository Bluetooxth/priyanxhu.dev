import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
const projexts = [
  {
    name: "Lynktree",
    tech: [<SiNextdotjs />, <FaNodeJs />, <SiExpress />, <SiMongodb />],
    desc: "Organize and share multiple links through a single URL.",
    link: "https://lynktree.vercel.app",
    github: "https://github.com/Bluetooxth/Lynktree",
  },
  {
    name: "Forkit",
    tech: [
      <SiNextdotjs />,
      <SiTailwindcss />,
      <FaNodeJs />,
      <SiExpress />,
      <SiMongodb />,
    ],
    desc: "Blog platform for developers to share thoughts and ideas.",
    link: "https://forkit.vercel.app",
    github: "https://github.com/Bluetooxth/Forkit",
  },
  {
    name: "CollegeJockey",
    tech: [
      <SiNextdotjs />,
      <SiTailwindcss />,
      <FaNodeJs />,
      <SiExpress />,
      <SiMongodb />,
    ],
    desc: "Platform for finding colleges, universities, and coachings.",
    link: "https://collegejockey.vercel.app",
    github: "https://github.com/Bluetooxth/CollegeJockey",
  },
  {
    name: "Real Estate",
    tech: [<SiNextdotjs />, <SiTailwindcss />, <SiMongodb />],
    desc: "Real estate listing platform for showcasing properties and scheduling visits.",
    link: "https://realxestate.vercel.app",
    github: "https://github.com/Bluetooxth/Real-Estate",
  },
  {
    name: "Dokxy",
    tech: [
      <SiNextdotjs />,
      <SiTailwindcss />,
      <SiMongodb />,
      <FaNodeJs />,
      <SiExpress />,
    ],
    desc: "Doctor-patient appointment system for easy scheduling and management.",
    link: "https://dokxy.vercel.app",
    github: "https://github.com/Bluetooxth/healthcare",
  },
];

export default projexts;