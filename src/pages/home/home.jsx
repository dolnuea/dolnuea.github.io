import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./header";
import Footer from "./footer";
import MyPicture from "../../assets/my_picture.jpg";
import SectionBg from "../../assets/section_bg.gif";

export default function Home() {
  return (
    <motion.div>
      <Header />

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
            Hi, I’m Luna, a software engineer.
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

        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      <Footer />
    </motion.div>
  );
}
