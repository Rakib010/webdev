import React from "react";
import { motion } from "framer-motion";
import { easeOut } from "motion";
import team1 from "../../assets/photo1.jpg";
import team2 from "../../assets/photo2.avif";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              src={team1}
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="max-w-sm w-64 rounded-t-[40px] border-l-4 border-b-4 rounded-br-[40px] border-blue-400  shadow-2xl"
            />
            <motion.img
              src={team2}
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, delay: 5, repeat: Infinity }}
              className="max-w-sm w-64 rounded-t-[40px] border-l-4 border-b-4 rounded-br-[40px] border-blue-400  shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              /* animate={{ x: 50 }}
              transition={{
                duration: 2,
                delay: 1,
                ease: easeOut,
                repeat: Infinity,
              }} */
              className="text-5xl font-bold"
            >
              The Easiest Way to Get Your New Job
            </motion.h1>
            <p className="py-6">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
