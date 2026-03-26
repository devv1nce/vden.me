export const SKILLS = [
  {
    title: "Game Development",
    icon: "./assets/images/frontend-icon.png",
    skills: [
      { skill: "Roblox Studio", percentage: "90%" },
      { skill: "Lua (Roblox Scripting)", percentage: "90%" },
      { skill: "Game System Design", percentage: "85%" },
      { skill: "UI / UX for Games", percentage: "80%" },
    ],
  },
  {
    title: "Programming",
    icon: "./assets/images/backend-icon.png",
    skills: [
      { skill: "Python", percentage: "85%" },
      { skill: "JavaScript", percentage: "75%" },
      { skill: "HTML / CSS", percentage: "80%" },
      { skill: "API Integration", percentage: "70%" },
    ],
  },
  {
    title: "Tools & Software",
    icon: "./assets/images/tools-icon.png",
    skills: [
      { skill: "Git / GitHub", percentage: "75%" },
      { skill: "VS Code", percentage: "90%" },
      { skill: "Aseprite / Pixel Art", percentage: "70%" },
      { skill: "Blender (Basic 3D)", percentage: "65%" },
    ],
  },
  {
    title: "Systems & Technical Skills",
    icon: "./assets/images/soft-skills-icon.png",
    skills: [
      { skill: "Game Economy Design", percentage: "80%" },
      { skill: "Automation & Bots", percentage: "85%" },
      { skill: "Debugging & Optimization", percentage: "85%" },
      { skill: "AI / Visual Recognition Systems", percentage: "70%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Student Developer – Mission Bit",
    date: "2023 - 2025",
    responsibilities: [
      "Completed multiple project-based computer science programs focused on real world software development.",
      "Collaborated in teams to design and build full applications using modern programming tools.",
      "Presented technical projects to engineers and tech professionals from companies like Notion and Meta.",
      "Gained experience in debugging, researching deprecated code, and improving application performance.",
    ],
  },
  {
    title: "Volunteer Developer – Heart in Motion",
    date: "2024 - Present",
    responsibilities: [
      "Assisted with reviewing and suggesting improvements to website UI and accessibility.",
      "Analyzed layout issues and proposed responsive design fixes for sponsor and internship pages.",
      "Communicated technical feedback clearly to improve readability and user experience.",
    ],
  },
  {
    title: "Independent Game Developer",
    date: "2022 - Present",
    responsibilities: [
      "Developed multiple Roblox games featuring custom gameplay systems, UI, and multiplayer mechanics.",
      "Designed in-game economies including currencies, shops, and upgrade systems.",
      "Implemented gameplay features such as day/night cycles, tools, weapons, and AI systems.",
      "Continuously prototype new ideas and publish devlogs and educational development content.",
    ],
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    title: "Cooking Chaos",
    genre: "Fast Paced Co-op Cooking Game",
    engine: "Roblox Studio",
    description:
      "A chaotic multiplayer cooking game inspired by Overcooked where players must coordinate to prepare meals under pressure with unpredictable mechanics.",
    tags: ["Roblox", "Lua", "Multiplayer", "Game Systems"],
    playType: "external",
    inDevelopment: true,
    image: "./assets/images/cookingmadness.png",
    playUrl: "https://roblox.com",
    color: "#3f7cac",
  },
  {
    title: "Ro Fall",
    genre: "Arcade / Physics Game",
    engine: "Roblox Studio",
    description:
      "Fast Paced, tower defense inspired game where players must plant seeds to grow weapons and defend their farm against waves of aliens",
    tags: ["Roblox", "Tower Defense", "Game Economy"],
    playType: "external",
    inDevelopment: true,
    image: "./assets/images/rofall.png",
    playUrl: "https://roblox.com",
    color: "#bdc4a7",
  },

];

export const SCHOOL_PROJECTS = [
  // {
  //   title: "Game Design Document",
  //   subject: "Game Design 101",
  //   description: "A full GDD for a 2D platformer concept including mechanics, level design, and art direction.",
  //   tags: ["GDD", "Game Design", "Documentation"],
  //   type: "pdf",
  //   // For PDF: drop your file in public/assets/docs/ and set the path below
  //   // fileUrl: "./assets/docs/game-design-doc.pdf",
  //   fileUrl: null,
  //   // For Google Doc: paste the share link (make sure sharing is set to "Anyone with the link")
  //   // fileUrl: "https://docs.google.com/document/d/YOUR_DOC_ID/preview",
  //   color: "#3f7cac",
  //   image: null,
  // },
  {
    title: "Sky High!",
    subject: "Game Development Final Project 2025",
    engine: "Roblox Studio",
    description:
      "Highschool Final Project 2025. Players float through the sky using balloons while collecting point orbs to earn currency used for skins, trails, and abilities.",
    tags: ["Roblox", "Physics", "UI Systems", "Game Economy"],
    playType: "external",
    inDevelopment: false,
    image: "./assets/images/skyhigh.png",
    playUrl: "https://roblox.com",
    color: "#bdc4a7",
  },
  {
    title: "Video Research Project",
    subject: "AP US History Video Research Project",
    description: "Informative Video about the civil rights movement in the 1960s.",
    tags: ["History", "Video", "Final Project"],
    type: "video",
    inDevelopment: false,
    image: null,
    playType: "external",
    playUrl: "https://itch.io",
    color: "#d5e1a3",
  },
];