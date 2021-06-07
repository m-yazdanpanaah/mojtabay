import { motion } from 'framer-motion';
import { IoChevronDown } from 'react-icons/io5';
import defaultVariant from '../utils/utils';
import { SmoothScrollButton } from './SmoothScroll';
import React from "react";

function Hero() {
  return (
    <>
      <main
        className="rel flex flex-col justify-center items-center"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <i className="cursor"/>
        <div className="cursor"/>
        <div className="z-10">

          <motion.h1
            variants={defaultVariant()}
            initial="init"
            animate="end"
            className="title-motion text-4xl md:text-5xl lg:text-8xl sm:text-xl text-hearth mb-6 leading-tight"
          >
            Mojtaba Yazdanpanah
          </motion.h1>
          <motion.div
            variants={defaultVariant(25, 0.6, 0.4)}
            initial="init"
            animate="end"
          >
            <p className="text-lg">
              Hello, I'm <span className="text-hearth">Mojtaba</span>, Best
              Product Designer in the world.

            </p>
            <p className="mb-6 text-lg">
              {' '}
              I mean, one day.
            </p>

            <SmoothScrollButton
              text="My portfolio"
              to="portfolio"
              Icon={IoChevronDown}
            />
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default Hero;
