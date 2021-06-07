import React from 'react';
import Project from './Project';

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = ({}) => {
  return (
    <>
      <div id="portfolio" className="p-8 pt-24">
        <div className="max-w-screen-2xl mx-auto mb-20">
          <h2 className="text-5xl mb-5 font-bold text-hearth text-center leading-tight md:leading-none">
            Some Projects
          </h2>
          <div className="h-1 w-1/2 md:w-100 bg-hearth mx-auto mb-12 rounded-md"></div>
          <section className="flex flex-col gap-20 lg:gap-32">
            <Project
              description="This is a 3D Game written in Three.js where you're a ball exploring the world, jumping over obstacles, and scoring points in 3 different maps, all the way until you reach the diamond at the end of the map."
              vision="The main goal of this project was to further my knowledge with Three.js aswell as exploring other techonologies such as Svelte. Typescript is used all throughout the entire stack to ensure typesafety. Socket.io was also utilized to make the last map a multiplayer map to spice things up even further."
              name="Shoor"
              img="/Shoor.png"
              alt="Shoor"
              github="https://github.com/Alegherix/world_explorer"
              href="https://mojtaba-blog.vercel.app/blog/project-case-studies/shoor-case-study"
            />
            <Project
                description="This is a 3D Game written in Three.js where you're a ball exploring the world, jumping over obstacles, and scoring points in 3 different maps, all the way until you reach the diamond at the end of the map."
                vision="The main goal of this project was to further my knowledge with Three.js aswell as exploring other techonologies such as Svelte. Typescript is used all throughout the entire stack to ensure typesafety. Socket.io was also utilized to make the last map a multiplayer map to spice things up even further."
                name="Shoor"
                img="/shoor-imagine.png"
                alt="Shoor"
                github="https://github.com/Alegherix/world_explorer"
                href="https://mojtaba-blog.vercel.app/blog/project-case-studies/shoor-case-study"
            />
            <Project
                description="This is a 3D Game written in Three.js where you're a ball exploring the world, jumping over obstacles, and scoring points in 3 different maps, all the way until you reach the diamond at the end of the map."
                vision="The main goal of this project was to further my knowledge with Three.js aswell as exploring other techonologies such as Svelte. Typescript is used all throughout the entire stack to ensure typesafety. Socket.io was also utilized to make the last map a multiplayer map to spice things up even further."
                name="Shoor"
                img="/shoor-songs.png"
                alt="Shoor"
                github="https://github.com/Alegherix/world_explorer"
                href="https://mojtaba-blog.vercel.app/blog/project-case-studies/shoor-case-study"
            />

            <Project
              description="This is a project with the purpose of making it easier to track locations of where you've found forages such as mushrooms, berries etc.. whenever you're out in the forrest."
              vision="The main goal was to make it easy to find your location of wherever you are, easily add the kind of forage you found, aswell as optionally adding images of the location for future reference, everything persisted in the cloud."
              name="Forager"
              img="/Housemart.png"
              alt="Example image of a project"
              github="https://github.com/Alegherix/forager"
              href="https://mojtaba-blog.vercel.app/blog/project-case-studies/housmart-case-study"
            />
            <Project
                description="This is a project with the purpose of making it easier to track locations of where you've found forages such as mushrooms, berries etc.. whenever you're out in the forrest."
                vision="The main goal was to make it easy to find your location of wherever you are, easily add the kind of forage you found, aswell as optionally adding images of the location for future reference, everything persisted in the cloud."
                name="Forager"
                img="/housmart-green.jpg"
                alt="Example image of a project"
                github="https://github.com/Alegherix/forager"
                href="https://mojtaba-blog.vercel.app/blog/project-case-studies/housmart-case-study"
            />
            <Project
                description="This is a project with the purpose of making it easier to track locations of where you've found forages such as mushrooms, berries etc.. whenever you're out in the forrest."
                vision="The main goal was to make it easy to find your location of wherever you are, easily add the kind of forage you found, aswell as optionally adding images of the location for future reference, everything persisted in the cloud."
                name="Forager"
                img="/housmart-hub.jpg"
                alt="Example image of a project"
                github="https://github.com/Alegherix/forager"
                href="https://mojtaba-blog.vercel.app/blog/project-case-studies/housmart-case-study"
            />

            <Project
              description='A website for the uppcoming event "Kul med djur", which is a fictional event aimed at inviting customers and potential customers to a day at delsjön to learn more about taking care of their pets.'
              vision="The vision of this project was to create something fun and exciting by using a layout with warm colors and wavy section separation."
              name="Kul med djur"
              img="/Exper.png"
              alt="Example image of trees from the project"
              github="https://github.com/Alegherix/wuip"
              href=""
            />
            {/* <Project
              description="This is a project for being able to safely create an account, add houses to a map, and persist it for other people to see."
              vision="The main idea behind this project was to get a deeper understanding of implementing Firebase Authentication aswell as persisting data with a GraphQL backed API."
              name="House Finder"
              img="/House.webp"
              alt="Example image of a project"
              technologies={[
                'Next.js',
                'TailwindCSS',
                'Typescript',
                'TypeGraphQL',
                'Apollo',
                'Prisma',
                'Firebase Authentication',
                'Mapbox',
                'Cloudinary',
              ]}
              github="https://github.com/Alegherix/house_project"
            /> */}

            <Project
              description="This was my first serious attempt at a portfolio written entirely in Gatsby. This Project leverages Static Site Generation to reduce loadtimes and improve Search Engine Optimization."
              name="Gatsby Portfolio"
              img="/Agah.png"
              alt="Example image of a project"
              github="https://github.com/Alegherix/Portfolio"
              href=""
            />

            <Project
              description="This was a School project made at Yrgo, to create a landing page for a fictional release of a new electric vehicle."
              name="Electric"
              img="/Coach.png"
              alt="Example image of a project"
              github="https://github.com/Alegherix/ElectricCar"
              href=""
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
