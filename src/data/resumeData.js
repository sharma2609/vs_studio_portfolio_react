// Import individual data modules
import personalInfo from "./personalInfo.js";
import experience from "./experience.js";
import projects from "./projects.js";
import education from "./education.js";
import skills from "./skills.js";
import achievements from "./achievements.js";

// Combine all data into the main resumeData object
const resumeData = {
  personalInfo,
  experience,
  projects,
  education,
  skills,
  achievements,
};

export default resumeData;
