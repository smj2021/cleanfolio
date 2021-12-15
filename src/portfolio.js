const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://smj2021.github.io/cleanfolio',
  title: 'MS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Michael Schwartz',
  role: 'Full Stack Software Engineer',
  description:
    "I'm a problem solver; driven to create stunning, functional, enjoyable user interactions. I leverage my past as an intelligence officer, diplomat, and consulting manager to elicit user stories, then wireframe and map requirements to industry best practices using my training in human-centered design. I love to collaborate, share ideas, and work holistically to build resilient, scalable, engaging solutions to client challenges.",
  resume: 'https://schwartzbewithyou.com/wp-content/uploads/2021/12/Michael-Schwartz-CV.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/schwartzbewithyou/',
    github: 'https://github.com/smj2021',
  },
}

const educations = [
  // all props are optional
  {
    school: 'General Assembly',
    degree: 'Software Engineering Immersive Certificate',
    year: '2021',
  },
  {
  school: 'American University, School of International Service',
  degree: 'M.A. International Peace and Conflict Resolution',
  year: '2012',
  },
  {
    school: 'University of Pittsburgh',
    degree: 'B.A. Political Science (Cum Laude)',
    year: '2009',
  }
]

const experience = []

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'PUMP',
    description:
      'PUMP is a Python and Django web application which allows users to securely create and manage fitness routines and nutrition plans from their desktop or mobile device. Data storage is performed by the integration of a PostgreSQL database.',
    stack: ['Python', 'Django', 'PostgreSQL','HTML5', 'CSS3', 'Bootstrap'],
    sourceCode: 'https://github.com/fattony26/workout-city',
    livePreview: 'https://github.com',
  },
  {
    name: 'Anime City',
    description:
      'Anime City is a full-stack (MERN) web application utilizing the Jikan API to allow users to query and create lists of their favorite anime and manga series, as well as connecting them to platforms on which they are able to watch the items on their lists.',
    stack: ['JavaScript', 'ExpressJS', 'Node.js', 'React', 'MongoDB', 'HTML5', 'CSS3'],
    sourceCode: 'https://github.com/smj2021/anime_city',
    livePreview: 'https://github.com',
  },
  {
    name: "Chef's Corner",
    description:
      "Chef's Corner is a full-stack (MEN) web application built allowing users to add recipes to a database and build individualized cookbooks for storing their favorite recipes.",
    stack: ['JavaScript', 'ExpressJS', 'Node.js', 'MongoDB', 'HTML5', 'CSS3'],
    sourceCode: 'https://github.com/smj2021/foodbook',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'JavaScript',
  'Django',
  'React',
  'ExpressJS',
  'Node.js',
  'HTML',
  'CSS',
  'MongoDB',
  'PostgreSQL',
  'Google Cloud Platform',
  'Microsoft Azure',
  'RESTful APIs',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mjschwartz515@gmail.com',
}

export { header, about, educations, experience, projects, skills, contact }
