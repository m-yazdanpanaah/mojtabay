import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { AiFillSafetyCertificate, AiOutlineCodepen } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { SiTypescript } from 'react-icons/si';
import { containerVariant, listItem, slideVariant } from '../utils/utils';
import AnimationRef from './AnimationRef';
import { useWindowSize } from './UseWindow';
import Wrapper from './Wrapper';

interface IPriority {
  Icon: IconType;
  title: string;
  body: string;
}

const Priority: React.FC<IPriority> = ({ Icon, title, body }) => {
  return (
    <div className="flex flex-col pb-16 bg-moonlight items-center">
      <div className="mb-3 rounded-full h-24 w-24 bg-evening flex items-center justify-center">
        <Icon color="white" size="3rem" />
      </div>
      <p className="text-xl bg-moonlight font-medium tracking-wide text-hearth xl:text-xl">
        {title}
      </p>
    </div>
  );
};

const priorities: Array<IPriority> = [
  {
    Icon: SiTypescript,
    title: 'User Interface Design',
    body:
      'I’m a big proponent of always writing typesafe code. Needless to say, I love Typescript!',
  },
  {
    Icon: AiOutlineCodepen,
    title: 'User Experience Design',
    body:
      'Code shouldn’t just be easy to read, it should be just as efficent  of serving clients as performing background tasks.',
  },
  {
    Icon: AiFillSafetyCertificate,
    title: 'Web Developement',
    body:
      'Security in applications to ensure safety and prevent unauthorized access is one of my greatest priorities. ',
  },
  {
    Icon: FaGlobe,
    title: 'Social Marketing',
    body:
      'I strive towards always making sure the code I write is responsive for all types of layout to ensure accessibility for all users!',
  },
];

const About: React.FC = () => {
  const { width } = useWindowSize();

  const priorityAnimation = useAnimation();
  const priorityRef = AnimationRef(priorityAnimation, 225);

  const underlineAnimation = useAnimation();
  const refers = AnimationRef(underlineAnimation, 150);

  return (
    <div id="about" className="bg-moonlight pt-16 pb-12 md:pt-12">
      <Wrapper color="bg-moonlight">
        <motion.div
          ref={refers}
          animate={underlineAnimation}
          initial="hidden"
          variants={slideVariant}
        >
          <div className="flex flex-row  pt-24 justify-center">
          <h2 className="text-center font-medium pb-8  text-9xl mb-3">Mojtabish</h2> <h3 className="text-center text-6xl mb-3">(adj.)</h3>
          </div>
          <div className="flex justify-center">
          <h3 className="text-center w-4/5 font-normal pb-16 text-3xl mb-3 leading-relaxed">Solved with <span className="text-hearth"> creativity </span> and <span className="text-hearth">eagerness</span>. An adjective for a task, or a project. If it's hard, <span className="text-hearth">challenging</span> and new for Mojtaba, It'll be done <span className="text-hearth">much faster</span>.</h3>
          </div>
        </motion.div>
        <motion.div
          ref={priorityRef}
          animate={priorityAnimation}
          initial="hidden"
          variants={containerVariant}
          className="grid grid-cols-2 gap-x-2 gap-y-8 justify-items-center lg:grid-cols-4 lg:gap-x-4"
        >
          {priorities.map(({ Icon, title, body }) => {
            return (
              <motion.div key={title} variants={listItem}>
                <Priority Icon={Icon} body={body} title={title} />
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
            ref={refers}
            animate={underlineAnimation}
            initial="hidden"
            variants={slideVariant}
        >
          <div className="flex justify-center pt-16">
            <h3 className="text-center w-4/5 font-normal text-2xl mb-3 leading-relaxed">A <span className="text-hearth"> 23 </span> year old  <span className="text-hearth">product designer</span> and <span className="text-hearth">web developer</span> with <span className="text-hearth">4 years</span> experience, Who is <span className="text-hearth">passionate</span> about life and specially, about
            his <span className="text-hearth"> career </span>. <br/> His main Specialty is <span className="text-hearth"> UI/UX design </span> but he is experiencing <span className="text-hearth"> web developement </span> using <span className="text-hearth"> Angular </span> and <span className="text-hearth"> React js </span>.  </h3>
          </div>
        </motion.div>
        <div className="flex flex-row pt-24">
        <div>
        <div className="relative m-8">
          <div className="border-r-2 border-gray-200 border-dotted absolute h-full top-0 z-0 left-1"></div>
          <ul className="list-none m-0 pt-4 p-0">
            <li className="mb-8">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 pb-2 font-bold text-hearth text-lg">March 2021 - Started my part-time job as a web developer</div>
              </div>
              <div className="ml-12">
                I had an interview in the I.T. section of religious schools at Qom and I got the job.
              </div>
            </li>
            <li className="mb-8">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 pb-2 font-bold text-hearth text-lg">Febuary 2021 - Start web developement with learning angular</div>
              </div>
              <div className="ml-12">
                I wanted to continue my journey to with learning angular. Because of my past learning from Javascript, I learned basics of angular
                very fast.
                I also learned tailwind to minimzie my time for styling.
              </div>
            </li>
            <li className="mb-8">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 pb-2 font-bold text-hearth text-lg">December 2020 - Ran an online course for UI/UX design</div>
              </div>
              <div className="ml-12">
                I love teaching and helping people. So for my digital brand I've started to teach UI/UX design.
              </div>
            </li>
            <li className="mb-8">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 pb-2 font-bold text-hearth text-lg">March 2019 - Joined Rasa Samaneh Co. as a UI/UX designer and wordpress developer</div>
              </div>
              <div className="ml-12">
                There was a company with some digital products like L.M.S, E.S.B. and Smart sensors that worked based on internet of things. They called me and
                invited me for an interview for UI/UX design position. Their websites built with wordpress so I've learned that and started to develop that.
              </div>
            </li>
            <li className="mb-8">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 pb-2 font-bold text-hearth text-lg">May 2018 - UI/UX design projects by freelancing</div>
              </div>
              <div className="ml-12">
                 After my UX course at Amanj academy, I've decided to work as a freelancing and solving problems as a designer.
              </div>
            </li>
            <li className="mb-8">
              <div className="flex items-center mb-1">
                <div className="flex-1 ml-4 pb-2 font-bold text-hearth text-lg">November 2017 - Learned the basics of web developement</div>
              </div>
              <div className="ml-12">
               The back-end was hard for me so at first I've started to learn front-end developement.
              </div>
            </li>
          </ul>
        </div>
        </div>
          <div>
            <div className="relative m-8">
              <ul className="list-none m-0 p-0">
                <li className="mb-8">
                  <div className="flex items-center mb-1">
                    <div className="flex-1 ml-4 pb-2 font-bold text-drapes text-lg">What are my superpowers?</div>
                  </div>
                  <div className="ml-4 flex flex-row flex-wrap">
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">Visual Design</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">Prototypes</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">UI Motions</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">Page Layouts</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">Colors</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">Figma</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">Adobe XD</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">wordpress</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">tailwind</p>
                  </div>
                </li>
                <li className="mb-8">
                  <div className="flex items-center mb-1">
                    <div className="flex-1 ml-4 pb-2 font-bold text-drapes text-lg">What things am I good at?</div>
                  </div>
                  <div className="ml-4 flex flex-row flex-wrap">
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">UX research</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">a/b testing</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">persona</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">php</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">web components</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">angular framework</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">scrum and planning</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">github version control</p>
                  </div>
                </li>
                <li className="mb-8">
                  <div className="flex items-center mb-1">
                    <div className="flex-1 ml-4 pb-2 font-bold text-drapes text-lg">what am i familiar with?</div>
                  </div>
                  <div className="ml-4 flex flex-row flex-wrap">
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">next js framework</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">react js framework</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">graphql</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">sql server</p>
                  </div>
                </li>
                <li className="mb-8">
                  <div className="flex items-center mb-1">
                    <div className="flex-1 ml-4 pb-2 font-bold text-drapes text-lg">What are my superpowers?</div>
                  </div>
                  <div className="ml-4 flex flex-row flex-wrap">
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">Visual Design</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">Prototypes</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">UI Motions</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">Page Layouts</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">Colors</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">Figma</p>
                    <p className="mr-6 mb-3 text-md uppercase font-bold text-hearth">Adobe XD</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>

    </div>
  );
};

export default About;
