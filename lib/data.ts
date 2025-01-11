import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import contactApi from "@/public/contactApi.png";
import chatApp from "@/public/chatApp.png";
import blogPost from "@/public/blogpost.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's Degree in Information Technology",
    location: "NIT Srinagar",
    description:
      "Graduated with a Bachelor's degree in Information Technology. Gained a strong foundation in computer programming, data structures, algorithms, and software engineering principles.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2024",
  },
  {
    title: "Web Developer Intern",
    location: "Educonf Technologies",
    description:
      "Gained hands-on experience with React.js, JavaScript, and Mapbox GL JS during my internship. Built interactive maps and responsive web interfaces, enhancing my technical skills and problem-solving abilities.",
    icon: React.createElement(FaReact),
    date: "2022",
  },
  {
    title: "Software Developer",
    location: "L&T Technology Services",
    description:
      "Building scalable web applications using Node.js, React, and MongoDB. Responsible for developing efficient back-end APIs, dynamic front-end interfaces, and managing database integration to deliver seamless user experiences.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Blog Post Application",
    description:
      "Developed a MERN-based blogging platform with secure authentication, role-based access control, CRUD functionality, and image uploads. Ensured responsive design for seamless use across devices.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Multer"],
    imageUrl: blogPost,
  },
  {
    title: "Contact-App API",
    description:
      "Created a secure RESTful API for contact management with JWT authentication, bcrypt-secured passwords, and optimized CRUD operations.",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
    imageUrl: contactApi,
  },
  {
    title: "Web Chat Application",
    description:
      "Built a real-time chat application with Socket.io for seamless, low-latency multi-user communication. Designed efficient backend APIs to support smooth interactions.",
    tags: ["Node.js", "Socket.io", "Express", "JavaScript"],
    imageUrl: chatApp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Restful API",
  "C",
  "C++",
  "Python",
  "Socket.io",
  "JWT",
  "Bcrypt",
] as const;
