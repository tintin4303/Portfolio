import React from 'react';

function ProjectCard({ title, description, image, code, live }) {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        {live && <a href={live} target="_blank" rel="noreferrer">Live</a>}
        {code && <a href={code} target="_blank" rel="noreferrer">Code</a>}
      </div>
    </div>
  );
}

export default ProjectCard;
