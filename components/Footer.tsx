import React from 'react';
import { IconType } from 'react-icons';
import {
  FaChevronUp,
  FaCodepen,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaBehance,
  FaDribbble
} from 'react-icons/fa';

import { animateScroll as scroll } from 'react-scroll';

const icons: SocialMedia[] = [
  {
    Icon: FaBehance,
    url: '',
    label: 'LinkedIn',
  },
  {
    Icon: FaLinkedinIn,
    url: '',
    label: 'Github',
  },
  {
    Icon: FaInstagram,
    url: '',
    label: 'Instagram',
  },
  {
    Icon: FaDribbble,
    url: '',
    label: 'Codepen',
  },
  {
    Icon: FaGithub,
    url: '',
    label: 'Codepen',
  },
];

interface SocialMedia {
  Icon: IconType;
  url: string;
  label: string;
}

const Media: React.FC<SocialMedia> = ({ Icon, url, label }) => {
  return (
    <a
      className="transition duration-300 ease-out transform  hover:bg-ocean hover:scale-90"
      href={url}
      aria-label={label}
    >
      <div className="w-12 rounded-xl h-12 bg-evening flex items-center justify-center">
        {<Icon size="1.6rem" color="#243141" />}
      </div>
    </a>
  );
};

function scrollToTop() {
  scroll.scrollToTop();
}

const Footer: React.FC = () => {
  return (
    <div className="flex items-center rounded-t-3xl flex-col bg-blood relative">
      <button
        onClick={scrollToTop}
        aria-label="Back to Nav"
        className=" absolute -top-7 rounded-xl w-12 h-14 bg-giant flex items-center justify-center flex-col mb-8 transition duration-300 ease-in-out hover:bg-blood"
      >
        <FaChevronUp color="#fff" fontSize="1.2rem" />
        <FaChevronUp color="#fff" fontSize="1.2rem" />
      </button>
      <div className="flex gap-12 mb-12 mt-20 ">
        {icons.map((icon) => {
          return (
            <Media
              key={icon.url}
              Icon={icon.Icon}
              url={icon.url}
              label={icon.label}
            />
          );
        })}
      </div>
      <p className="text-center mb-4 text-white">
        Mojtaba Yazdanpanah &copy;{' '}
        <span className=" text-white font-normal"> {new Date().getFullYear()}</span>
      </p>
    </div>
  );
};

export default Footer;
