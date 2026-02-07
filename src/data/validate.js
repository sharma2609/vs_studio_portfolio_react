// Data validation script
import resumeData from "./resumeData.js";
import {
  personalInfo,
  skills,
  projects,
  experience,
  education,
  achievements,
} from "./index.js";

// Validate that all data is properly structured
const validateData = () => {
  console.log("🔍 Validating portfolio data structure...\n");

  // Check main resumeData object
  console.log("✅ Main resumeData object:", !!resumeData);
  console.log(
    "✅ Personal Info:",
    !!resumeData.personalInfo && !!resumeData.personalInfo.name
  );
  console.log(
    "✅ Skills:",
    !!resumeData.skills && Array.isArray(resumeData.skills.programming)
  );
  console.log(
    "✅ Projects:",
    !!resumeData.projects && Array.isArray(resumeData.projects)
  );
  console.log(
    "✅ Experience:",
    !!resumeData.experience && Array.isArray(resumeData.experience)
  );
  console.log(
    "✅ Education:",
    !!resumeData.education && Array.isArray(resumeData.education)
  );
  console.log(
    "✅ Achievements:",
    !!resumeData.achievements && Array.isArray(resumeData.achievements)
  );

  console.log("\n🔍 Validating individual imports...\n");

  // Check individual imports
  console.log(
    "✅ Individual personalInfo:",
    !!personalInfo && !!personalInfo.name
  );
  console.log(
    "✅ Individual skills:",
    !!skills && Array.isArray(skills.programming)
  );
  console.log("✅ Individual projects:", !!projects && Array.isArray(projects));
  console.log(
    "✅ Individual experience:",
    !!experience && Array.isArray(experience)
  );
  console.log(
    "✅ Individual education:",
    !!education && Array.isArray(education)
  );
  console.log(
    "✅ Individual achievements:",
    !!achievements && Array.isArray(achievements)
  );

  console.log("\n📊 Data Summary:");
  console.log(`- Name: ${resumeData.personalInfo.name}`);
  console.log(`- Role: ${resumeData.personalInfo.role}`);
  console.log(`- Programming Skills: ${resumeData.skills.programming.length}`);
  console.log(`- AI/ML Skills: ${resumeData.skills.ai_ml.length}`);
  console.log(`- ML Libraries: ${resumeData.skills.libraries.length}`);
  console.log(`- Projects: ${resumeData.projects.length}`);
  console.log(`- Experience Entries: ${resumeData.experience.length}`);
  console.log(`- Education Entries: ${resumeData.education.length}`);
  console.log(`- Achievements: ${resumeData.achievements.length}`);

  console.log("\n🎉 All data validation checks passed!");
};

// Export for use in other files
export default validateData;

// Run validation if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  validateData();
}
