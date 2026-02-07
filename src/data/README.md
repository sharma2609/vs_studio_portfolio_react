# Portfolio Data Structure

This directory contains all the portfolio data organized into modular files for better maintainability.

## Files Overview

### Main Export

- **`resumeData.js`** - Main file that combines all data modules (backward compatible)
- **`index.js`** - Provides both individual and combined exports

### Individual Data Modules

- **`personalInfo.js`** - Personal details, contact info, and social links
- **`skills.js`** - Technical skills organized by category
- **`projects.js`** - Project portfolio with descriptions and tech stacks
- **`experience.js`** - Professional work experience
- **`education.js`** - Educational background and qualifications
- **`achievements.js`** - Awards, certifications, and accomplishments

## Usage Examples

### Import complete data (existing usage)

```javascript
import resumeData from "./data/resumeData.js";
// Access: resumeData.personalInfo, resumeData.skills, etc.
```

### Import individual modules

```javascript
import { skills, projects } from "./data/index.js";
// Or
import skills from "./data/skills.js";
import projects from "./data/projects.js";
```

### Import specific data

```javascript
import { personalInfo, experience } from "./data/index.js";
```

## Data Structure

### Personal Info

```javascript
{
  name: string,
  role: string,
  email: string,
  phone: string,
  location: string,
  socials: {
    linkedin: string,
    github: string,
    website: string
  }
}
```

### Skills

```javascript
{
  programming: string[],        // Programming languages
  ai_ml: string[],             // AI/ML technologies
  libraries: string[],         // ML libraries & frameworks
  tools: string[],             // Development tools
  webDev: string[],            // Web development technologies
  databases: string[],         // Database technologies
  core: string[]               // Core CS concepts
}
```

### Projects

```javascript
[{
  name: string,
  type: string,
  domain: string,              // New field for project domain
  description: string,
  techStack: string[],
  features: string[]
}]
```

### Experience

```javascript
[{
  title: string,
  company: string,
  period: string,
  description: string,
  skills: string[]
}]
```

### Education

```javascript
[
  {
    degree: string,
    institution: string,
    year: string,
    details: string,
  },
];
```

### Achievements

```javascript
string[] // Array of achievement descriptions
```

## Benefits of This Structure

1. **Modularity** - Each data type is in its own file
2. **Maintainability** - Easy to update specific sections
3. **Reusability** - Import only what you need
4. **Backward Compatibility** - Existing imports still work
5. **Type Safety** - Clear structure for each data type
6. **Scalability** - Easy to add new data categories

## Adding New Data

To add new data categories:

1. Create a new file in `/src/data/` (e.g., `certifications.js`)
2. Export the data as default
3. Add the import to `resumeData.js`
4. Add the export to `index.js`
5. Update this README with the new structure
