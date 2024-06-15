import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student Coordinator",
    company_name: "Business Consultancy Club",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "Organized TED Talks on business-related topics, fostering knowledge sharing and engagement among students.",
      "Led a team of 10+ volunteers to plan and execute workshops, enhancing teamwork and communication skills.",
      "Successfully spearheaded the college’s mega-event “AWSAR” coordinating various activities like hackathons with participation from diverse departments.",
      "Managed two sub-teams within the club, delegating tasks and ensuring seamless event execution.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Led a team of 6 members to qualify for the first round of the Smart India Hackathon(SIH)",
    name: "Sara Lee",
    designation: "",
    company: "Smart India Hackathon ",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTci8CqodFnE1KI65IeL_Fs9xPbG8QsHcGmfA&s",
  },
  {
    testimonial:
      " Successfully completed the Java Programming: Solving Problems with Software course on Coursera, demonstrating my ability to design, develop, and debug Java programs.",
    name: "Chris Brown",
    designation: "COO",
    company: "Coursera",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4DHizsuJ9Tr85EwJ1MWLLuQod3njbO7BPA&s",
    //"https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Launched my web development journey with Dr. Angela Yu's Udemy course. Explore my portfolio to see the skills I've gained!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Udemy",
    image:
      "https://w7.pngwing.com/pngs/299/56/png-transparent-udemy-logo-thumbnail-tech-companies-thumbnail.png",
    //"https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IMAGINIFY",
    description:
      "IMAGINIFY | AI SaaS Platform (Next.js, TypeScript)  - Developed an AI-powered image editing platform with features like reviving old photos, recoloring objects, and inpainting. Implemented user authentication (registration, login, and route protection) with secure credit purchases via Stripe for image transformations. Built for scalability with reusable code and features like image exploration with pagination and detailed image management. ",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Shadcn",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Clerk",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/saurabh0346/imaginify",
  },
  {
    name: "Travel-Website",
    description:
      "Developed a travel website using HTML, CSS, and Javascript for a user-friendly travel planning experience.Implemented interactive features with Javascript to enhance user experience (e.g. search functionality, dynamic content, image sliders).Ensured responsive design across various devices using appropriate frameworks or techniques for optimal user experience",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/saurabh0346/Travel-Website",
    //"https://github.com/",
  },
  {
    name: "Tic-Tac-Toe",
    description:
      "Developed a fully functional Tic-Tac-Toe game using HTML, CSS, and Javascript. Implemented a user-friendly game board layout with HTML elements. Styled the game board and individual cells using CSS for a visually appealing design. Programmed game logic with Javascript, including turn tracking, win condition checking, and user interaction.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/saurabh0346/Tic-Tac-Toe",
    //"https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
