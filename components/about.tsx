"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <div className="">
        <p className="mb-3">
          Hello! I’m a passionate{" "}
          <span style={{ fontWeight: "bold" }}>Full Stack Developer</span> with
          a strong foundation in{" "}
          <span style={{ fontWeight: "bold" }}>problem-solving</span> and
          software engineering. I hold a{" "}
          <span style={{ fontWeight: "bold" }}>
            B.Tech in Information Technology
          </span>{" "}
          from the prestigious{" "}
          <span style={{ fontWeight: "bold" }}>
            National Institute of Technology, Srinagar
          </span>
          .
        </p>
        <p className="mb-3">
          My core expertise lies in the{" "}
          <span style={{ fontWeight: "bold" }}>
            MERN stack (MongoDB, Express.js, React, Node.js)
          </span>
          , where I enjoy building intuitive, scalable, and efficient web
          applications. As a{" "}
          <span style={{ fontWeight: "bold" }}>learning enthusiast</span>, I’m
          always on the lookout for new technologies and frameworks to enhance
          my skill set and deliver cutting-edge solutions.
        </p>
        <p className="mb-4">
          When I’m not coding, you’ll likely find me immersed in{" "}
          <span style={{ fontStyle: "italic" }}>video games</span>, catching up
          on my favorite <span style={{ fontStyle: "italic" }}>anime</span>, or
          exploring the mind-bending world of{" "}
          <span style={{ fontWeight: "bold" }}>quantum physics</span>. I believe
          in balancing creativity and logic, whether it’s in writing code or
          exploring hobbies.
        </p>

        <p className="">
          <span style={{ fontWeight: "bold" }}>
            Let’s create something amazing together!
          </span>
        </p>
      </div>

      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
