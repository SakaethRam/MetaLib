import { LayoutTemplate } from "lucide-react";
import { MonitorSmartphone } from "lucide-react";
import { Eye } from "lucide-react";
import { Users } from "lucide-react";
import { BarChart3 } from "lucide-react";
import { Move3D } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "FEATURES", href: "#features" },
  { label: "WORKFLOW", href: "#workflow" },
  { label: "FORUM", href: "#forum" },
  { label: "BLOGS", href: "#articles" },
];

export const FORUM = [
  {
    user: "@sam0724",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `C++ enhances workflows by offering high-performance execution, reducing processing time for complex tasks. Its robust memory management and multi-threading capabilities optimize resource utilization, making applications more efficient. With STL and advanced libraries, C++ streamlines development, boosting productivity in real-world projects! `,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    user: "@charles4593",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Python automates repetitive tasks, reducing manual effort and boosting efficiency. Its vast libraries like Pandas, NumPy, and Selenium streamline data processing, analysis, and web automation. With simple scripting and AI integration, Python optimizes workflows across industries!`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    user: "@elizabeth75",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Node.js streamlines workflows by enabling asynchronous, non-blocking operations, reducing execution time for complex tasks. Its event-driven architecture enhances scalability, making it ideal for handling real-time applications and microservices. With a vast ecosystem of libraries, it accelerates development, allowing seamless automation and integration across various processes.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    user: "@tyla8976",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const BLOGS = [
  {
    user: "John Doe",
    company: "How MetaLib GPT Became My Personal AI Study Partner? ",
    image: user1,
    text: "Discover how MetaLib GPT helps professional quickly grasp complex topics by generating clear, real-time explanations for a query. ",
  },
  {
    user: "Jane Smith",
    company: "Boosting My Productivity with MetaLib GPT: A Developer’s Perspective",
    image: user2,
    text: "Learn how developers can use MetaLib GPT to generate code snippets, debug faster, and create technical documentation effortlessly.",
  },
  {
    user: "David Johnson",
    company: "Creating Smarter Content: Using MetaLib GPT for Blogging and Research",
    image: user3,
    text: "Explore how MetaLib GPT assists writers and bloggers in generating creative drafts, tech script, and research outlines within minutes.",
  },
  
  {
    user: "Michael Wilson",
    company: "Why MetaLib GPT’s Responsive UI Makes Learning Feel Effortless",
    image: user5,
    text: "An overview of how MetaLib GPT’s clean design, mobile-friendly interface, and smooth animations enhance the overall learning experience.",
  },
  {
    user: "Emily Davis",
    company: "From Idea to Execution: How I Built a Mini Project with MetaLib GPT",
    image: user6,
    text: "Hive Blockchain streamlines transactions with a fast, feeless, and decentralized structure, leveraging DPoS (Delegated Proof of Stake) for efficient scalability.",
  },
];

export const features = [
  {
    icon: <Move3D />, 
    text: "Real-Time AI Responses",
    description:
      "Instantly generate intelligent and context-aware replies using the Google Gemini API.",
  },
  {
    icon: <MonitorSmartphone />, 
    text: "Responsive and Animated UI",
    description:
      "Mobile-friendly, smooth, and interactive user interface built with React JS, Tailwind CSS, and Framer Motion.",
  },
  {
    icon: <LayoutTemplate />, 
    text: "Prompt and Response History",
    description:
      "Automatically save user prompts and AI responses, allowing users to revisit and manage past conversations.",
  },
  {
    icon: <Eye />, 
    text: "Secure User Authentication",
    description:
      " Seamless and secure login/signup through Firebase Authentication with session management."
  },
  {
    icon: <Users />, 
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <BarChart3 />, 
    text: "Scalable Cloud Hosting",
    description:
      "Deployed using Firebase Hosting for fast, scalable, and reliable web access with continuous deployment (CI/CD) setup.",
  },
];

export const checklistItems = [
  {
    title: "WatchTower: Zeek ML Pipeline",
    description:
      "It leverages the power of Zeek logs, machine learning, and the ELK stack to provide comprehensive threat detection and analysis.",
    zipUrl: "/Downloads/WatchTower.zip", 
  },
  {
    title: "GramEm: AI-Powered Grammar and Sentiment Enhancement API",
    description:
      "It is an advanced text processing API that corrects grammar and spelling errors while enhancing text with sentiment-based emoji suggestions. ",
    zipUrl: "/Downloads/GramEm.zip",
  },
  {
    title: "WingMan: AI Assistance to reduce time",
    description:
      "It is an AI-powered voice assistant designed to provide real-time speech recognition, language translation, and AI-generated responses using Google Gemini API. ",
    zipUrl: "/Downloads/WingMan.zip",
  },
  {
    title: "Visper: A Localization & transcription ML solution",
    description:
      "Upcoming ML Model",
    zipUrl: "",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
