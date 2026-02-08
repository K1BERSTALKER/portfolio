
import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EcoSphere AI",
    description: "A sustainability tracking platform using real-time sensor data and machine learning for carbon footprint reduction.",
    tags: ["React", "TypeScript", "D3.js", "Gemini API"],
    imageUrl: "https://picsum.photos/seed/eco/600/400",
    link: "#"
  },
  {
    id: 2,
    title: "Lumina Dashboard",
    description: "Enterprise-grade analytics dashboard with customizable widgets and ultra-low latency data synchronization.",
    tags: ["Next.js", "Tailwind CSS", "Redux Toolkit"],
    imageUrl: "https://picsum.photos/seed/dashboard/600/400",
    link: "#"
  },
  {
    id: 3,
    title: "CryptoFlow Mobile",
    description: "Decentralized wallet management with integrated swapping and NFT gallery visualization.",
    tags: ["React Native", "Web3.js", "Framer Motion"],
    imageUrl: "https://picsum.photos/seed/crypto/600/400",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", category: "frontend", icon: "⚛️" },
  { name: "TypeScript", category: "frontend", icon: "📘" },
  { name: "Tailwind CSS", category: "frontend", icon: "🎨" },
  { name: "Node.js", category: "backend", icon: "🟢" },
  { name: "PostgreSQL", category: "backend", icon: "🐘" },
  { name: "Gemini / LLMs", category: "tools", icon: "✨" },
  { name: "Docker", category: "tools", icon: "🐳" },
  { name: "Unit Testing", category: "tools", icon: "🧪" }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "TechNova Solutions",
    role: "Senior Frontend Architect",
    period: "2021 - Present",
    description: "Leading a team of 12 engineers in building high-scale SaaS applications. Reduced bundle size by 40% using code splitting and modern build tools."
  },
  {
    company: "DesignLink",
    role: "Fullstack Developer",
    period: "2018 - 2021",
    description: "Developed and maintained several e-commerce platforms. Implemented a custom component library used across the entire organization."
  }
];
