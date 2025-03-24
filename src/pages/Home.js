import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Power BI Developer & Data Analyst</p>
      <a href="/arnab_resume.pdf" download>
        <button>Download My CV</button>
      </a>
    </div>
  );
}

export default Home;
