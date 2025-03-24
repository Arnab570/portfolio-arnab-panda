import React, { useState } from 'react';

const Projects = () => {
  const [showProject, setShowProject] = useState(false);

  return (
    <section id="projects" className="projects-section">
      <h2>Personal Projects</h2>
      <div>
        <button onClick={() => setShowProject(!showProject)}>
          Show Project Details
        </button>
        {showProject && (
          <div>
            <img src="your-project-screenshot-url" alt="Project Screenshot" />
            <p>Project Details</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
