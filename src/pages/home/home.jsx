import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./header";
import Footer from "./footer";
import MyPicture from "/src/assets/my_picture.jpg";
import SectionBg from "/src/assets/section_bg.gif";
// import { Card, CardContent } from "@mui/material";

export default function Home() {
  return (
    <motion.div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 min-h-screen text-white"
        style={{
          background:
            `url(${SectionBg}) center/cover no-repeat`,
        }}
      >
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            Hi, I’m Dolunay, a software engineer.
          </motion.h2>
          <p className="aboutme mb-6 text-gray-200">
            A whimsical tech gal who enjoys coding, artificial intelligence and
            pseudo-science.
          </p>
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.8)",
            }}
            transition={{ duration: 0.3 }}
            className="mt-4 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold"
          >
            Explore my work
          </motion.button>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex justify-center relative z-10"
        >
          <img
            src={MyPicture}
            alt="Luna"
            className="rounded-full w-120 shadow-2xl"
          />
        </motion.div>

        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* Projects Section */}
      {/* <motion.section
        id="projects"
        className="p-8 bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundColor: "#040436",
          padding: "5rem 2rem",
        }}
      >
        <motion.h3
          whileHover={{
            scale: 1.1,
          }}
          transition={{ duration: 0.3 }}
          className="text-2xl font-semibold mb-6"
        >
          My Projects
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent>
              <h4 className="font-bold mb-2">In Progress Projects</h4>
              <p>Hosted projects currently being built and iterated on.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4 className="font-bold mb-2">Tarot App (GPT)</h4>
              <p>AI-powered tarot reading tool with custom spreads.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4 className="font-bold mb-2">Horary Astrology App (GPT)</h4>
              <p>Get instant horary chart interpretations using GPT models.</p>
            </CardContent>
          </Card>
        </div>
      </motion.section> */}

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
