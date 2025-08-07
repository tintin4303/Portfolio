import React from 'react';
import ProjectCard from './ProjectCard';
import AniBaseImage from '../assets/images/project_logos/AniBase.png';
import PressNGoImage from '../assets/images/project_logos/Press&GO.png';
import AUFitnessImage from '../assets/images/project_logos/au_logo.png';
import SpendWiseImage from '../assets/images/project_logos/SpendWise.png';


const projectList = [
  {
    title: "AniBase",
    description: "Anime info viewer using Jikan API and EJS on the backend. Deployed with Vercel.",
    image: AniBaseImage,
    code: "https://github.com/yourusername/anibase",
    live: "https://ani-base-five.vercel.app"
  },
  {
    title: "Press&Go",
    description: "Figma-designed interactive laundry P2P platform for users to do side hustles and earn money.",
    image: PressNGoImage,
    code: "https://www.figma.com/design/9vnHtFaxFNKquaeArCSln6/Press-Go?node-id=0-1&t=ItvUj9X94LPPthkO-1",
    live: "https://www.figma.com/proto/9vnHtFaxFNKquaeArCSln6/Press-Go?page-id=0%3A1&node-id=35-66&p=f&viewport=340%2C256%2C0.15&t=AIkEAijwl8lN3NuX-1&scaling=contain&content-scaling=fixed&starting-point-node-id=35%3A66"
  },
  {
    title: "AU Fitness",
    description: "Fitness center management system built with Java and PostgreSQL for students to track their bookings of the gym and sports facilities at Assumption University.",
    image: AUFitnessImage,
    code: "https://github.com/tintin4303/AU_FitnessCenterManagementSystem",
    live: ""
    },
    {
    title: "SpendWise",
    description: "Spending Tracker React.js app to help users manage their finances effectively.",
    image: SpendWiseImage,
    code: "https://github.com/tinthegoat/spending-tracker",
    live: "https://tinthegoat.github.io/spending-tracker/#/dashboard"
    }
];


function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <ProjectCard key={index} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
