import Head from 'next/head';
import React from 'react';
import About from '../components/About';
import AnimationHero from '../components/AnimationHero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import PageTransition from '../components/PageTransition';
import Portfolio from '../components/Portfolio';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

const App = () => (
    <div>
        <CustomCursor
            targets={['.link', '.your-css-selector']}
            customClass='custom-cursor'
            dimensions={60}
            fill='#FC0E49'
            opacity={0.4}
            smoothness={{
                movement: 0.1,
                scale: 0.1,
                opacity: 0.4,
            }}
            targetOpacity={0.5}
        />
    </div>
);

export default function Projects() {
  return (
    <>
        <App/>
      <Meta />
      <Contact />
      <Footer />
    </>
  );
}
