import React from "react";
import "./Contents_css/skills.css";
import SkillLogo from "../Animated_components/skills_logo";
import DevLogo from "../utils/skills_data";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-header">
        <h1>Skills</h1>
        <hr></hr>
      </div>
      <div className="skill-content">
        {Object.keys(DevLogo).map((key, value) => {
          return (
            <SkillLogo
              key={key}
              img_path={DevLogo[key].image}
              path={DevLogo[key].path}
            ></SkillLogo>
          );
        })}
      </div>
    </section>
  );
};
export default Skills;
