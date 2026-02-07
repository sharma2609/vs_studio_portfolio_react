// Main export - complete resume data
export { default as resumeData } from "./resumeData.js";

// Individual data modules for granular imports
export { default as personalInfo } from "./personalInfo.js";
export { default as experience } from "./experience.js";
export { default as projects } from "./projects.js";
export { default as education } from "./education.js";
export { default as skills } from "./skills.js";
export { default as achievements } from "./achievements.js";

// Default export for backward compatibility
export { default } from "./resumeData.js";
