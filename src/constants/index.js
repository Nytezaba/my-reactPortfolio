import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Welcome to my portfolio! As a recent graduate, I am excited to share my journey and showcase the skills and projects I have developed in the field of software development. Here, you'll find examples of my work and insights into my technical capabilities.`;

export const ABOUT_TEXT = `I am a recent graduate with a strong foundation in software development, specializing in PHP, Python, SQL, and JavaScript. My academic&Internship journey and hands-on projects have equipped me with experience in frameworks like CodeIgniter, Node.js, and React. I have also honed my skills in automation with basic Selenium, API testing using Postman, and version control with Git. I am passionate about developing innovative and efficient web applications, and I am eager to contribute to dynamic teams and continue growing in the tech industry.`;

export const SKILLS = [
  {
      icon: "FaPhp",
      color: "text-purple-600",
      text: "PHP"
  },
  {
      icon: "FaPython",
      color: "text-yellow-500",
      text: "Python"
  },
  {
      icon: "SiMysql",
      color: "text-blue-600",
      text: "MySql"
  },
  {
      icon: "SiMongodb",
      color: "text-blue-900",
      text: "MongoDB"
  },
  {
      icon: "SiJavascript",
      color: "text-yellow-400",
      text: "Javascript"
  },
  {
      icon: "SiCodeigniter",
      color: "text-red-600",
      text: "CodeIgniter"
  },
  {
      icon: "FaNodeJs",
      color: "text-green-600",
      text: "Node.js"
  },
  {
      icon: "RiReactjsLine",
      color: "text-blue-400",
      text: "React"
  },
  {
      icon: "SiPostman",
      color: "text-orange-500",
      text: "Postman"
  },
  {
      icon: "SiSelenium",
      color: "text-green-500",
      text: "Selenium"
  },
  {
      icon: "FaGit",
      color: "text-red-400",
      text: "Git"
  }
]

// export const SKILLS = [
//   "PHP",
//   "Python",
//   "MySQL",
//   "MongoDB",
//   "Javascript",
//   "CodeIgniter",
//   "Node.js",
//   "React",
//   "Postman",
//   "Selenium",
//   "Git"
// ]

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Internship",
    company: "UNICORD PUBLIC COMPANY LIMITED",
    description: `Designed and developed web applications using CodeIgniter. Worked closely with backend developers to integrate frontend components. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript", "PHP"],
  },
];

export const PROJECTS = [
  {
    title: "Legal document storage website",
    image: project1,
    description:
      "It is a website for storing company legal documents, featuring capabilities for creating, deleting, updating, and searching documents, along with user authentication and permission management.",
    technologies: ["HTML", "CSS", "Javascript", "PHP", "jQuery"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Google AppSheet"],
  },
  {
    title: "To-do list website",
    image: project2,
    description:
      "This to-do list application is a full-stack project designed to help users manage their tasks efficiently. It allows users to create, read, update, and delete (CRUD) tasks with ease.",
    technologies: ["HTML", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Tailwind CSS"],
  }
];

export const CONTACT = {
  address: "1/1 Village No.8 Phanthai Norasing Subdistrict, Mueang District, Samut Sakhon Province, Thailand",
  phoneNo: "+66 9 4641 5761",
  email: "ekkaphop.eppt@gmail.com",
};
