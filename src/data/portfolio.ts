export interface Skill {
    category: string;
    items: string[];
}

export interface Project {
    id: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    link?: string;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    dateRange: string;
    description: string;
    type: "full-time" | "part-time" | "freelance";
    link?: string;
}

export interface Post {
    id: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    readTime: string;
    link?: string;
}

export const skills: Skill[] = [
    {
        category: "Frontend",
        items: ["React", "Vue / Nuxt", "TypeScript", "Tailwind CSS", "GSAP", "GraphQL (Apollo client)"]
    },
    {
        category: "Backend",
        items: ["Express.js", "Nest.js", "SQL / PostgreSQL", "Drizzle ORM", "Builtmq", "minio (S3)"]
    },
    {
        category: "Others",
        items: ["JavaScript", "TypeScript", "C lang", "Lua", "Docker", "Git"]
    }
];

export const projects: Project[] = [
    {
        id: "1",
        title: "Sifat Mebel",
        date: "8th January 2025",
        description: "Simple landing page for local company Sifat Mebel who produces furniture. This business is not huge now, I designed logo and website then I coded website.",
        tags: ["Nuxt", "Figma", "Design"]
    },
    {
        id: "2",
        title: "Mutolaa",
        date: "24th July 2024",
        description: "It's like e-library that you can get information about books and you can read/listen for free in its app. Me and friend of mine did this project together. I mainly did the header, search, books & book pages with their SEO parts as well.",
        tags: ["Nuxt"]
    },
    {
        id: "3",
        title: "Premium Pro",
        date: "29th June 2024",
        description: "This is an e-commerce website that sells perfumes. You can simulate & make purchases with your credit card or bonuses. I did some refactoring and the scripting (functional) part of this platform.",
        tags: ["Nuxt", "e-commerce"]
    },
    {
        id: "4",
        title: "Jizzakh International School",
        date: "29th March 2024",
        description: "I did design, front-end and back-end (full project) sides of this project and also deployed to server. Also I did the Dashboard side it of it with my team Introdevs. We made a full school-dashboard for this private school.",
        tags: ["Nest", "Nuxt", "Design", "Dashboard", "Devops", "nginx"]
    },
    {
        id: "5",
        title: "Obyektivka.uz",
        date: "21st November 2023",
        description: "Generate a pdf file that contains information about yourself (kinda CV but it's standard in Uzbekistan). Analytics: counts of users reached 10K & more than 20K CVs generated within a month!",
        tags: ["pdfmake", "Vue", "JavaScript"]
    },
    {
        id: "6",
        title: "International Medical Services",
        date: "25th October 2023",
        description: "I was lead full-stack developer in this project. I did it with my team Introdevs. I designed this website, reviewed & helped all frontend's merge requests, and did the backend side of it. It has more than 4K successful applications/transactions.",
        tags: ["Nest", "Nuxt", "Design", "pdfmake", "Payeezy", "Clover", "Devops", "nginx"]
    },
    {
        id: "7",
        title: "Online learning platform",
        date: "16th September 2023",
        description: "I did the backend side of this project for IT Live Learning center. You can purchase online courses via Payme payment system & if you have an access, you can create your own courses.",
        tags: ["Nest", "Postgres", "Redis", "SMS API", "Payme", "Backend", "HLS", "Devops", "nginx"]
    },
    {
        id: "8",
        title: "Euro Study Info",
        date: "14th July 2022",
        description: "Landing page for Euro Study Info consulting agency. Discover and apply online for exciting educational opportunities in just a few clicks.",
        tags: ["HTML", "Bootstrap", "JavaScript"]
    },
    {
        id: "9",
        title: "Ako cars landing",
        date: "11st September 2021",
        description: "Landing page for Ako cars app. This was one of the first projects that I got from Upwork. The client was friendly and open-minded.",
        tags: ["Vue", "SCSS", "JavaScript"]
    }
];

export const experiences: Experience[] = [
    {
        id: "1",
        company: "Learnify",
        position: "Frontend developer - Full-time (remote)",
        dateRange: "March 2025 - April 2026 (1 yr & 1 mo)",
        description: "I've been working on a unicorn startup called Learnify. There are only 3 devs in our team: backend dev, mobile dev and me. For the first month, I did bugfixing because the Frontend part was written by unexperienced coders and there were infinite bugs that it's not even maintainable. So, I decided to rewrite the frontend from scratch and also project owner agreed.",
        type: "full-time",
        link: "https://learnify.example.com"
    },
    {
        id: "2",
        company: "Dadshop",
        position: "Backend developer - Part-time",
        dateRange: "Jan 2025 - Feb 2026 (1 yr & 1 mo)",
        description: "I've been working on new startup called Dadshop. Backend dev but also doing some frontend. It's new online shopping startup. To be honest, I like the owners of itself that's why I'm working here. There are things that are more important to me.",
        type: "part-time",
        link: "https://dadshop.example.com"
    },
    {
        id: "3",
        company: "FreeLance",
        position: "Full stack engineer - Full-time",
        dateRange: "Sep 2024 - Feb 2024 (4 mos)",
        description: "Not having a full-time job gives you big opportunity to work on yourself. I've worked on some projects with my team (Introdevs) and done some CRM systems from freelance.",
        type: "freelance"
    },
    {
        id: "4",
        company: "Urbandrive",
        position: "Full stack engineer - Full-time",
        dateRange: "June 2024 - Sep 2024 (4 mos)",
        description: "I worked at Urbandrive as a full stack engineer, mainly from scratch: Marketplace clients. Not a big team. The job is hybrid, mainly in office twice a week usually.",
        type: "full-time"
    }
];

export const posts: Post[] = [
    {
        id: "1",
        title: "Fixing my sleep schedule changed my year",
        date: "March 2025",
        description: "I spent months testing routines and ended up with a simple system that actually stuck. Here is the routine and why it worked.",
        tags: ["productivity", "habits"],
        readTime: "3 min read",
        link: "https://dev.to/yourname/sleep-schedule"
    },
    {
        id: "2",
        title: "How to secure your server in 30 minutes",
        date: "August 2024",
        description: "A practical checklist for a new VPS setup: firewall, SSH hardening, automatic updates, and monitoring basics.",
        tags: ["devops", "security", "linux"],
        readTime: "5 min read",
        link: "https://dev.to/yourname/server-hardening"
    },
    {
        id: "3",
        title: "Dockerize a NestJS app with Postgres",
        date: "June 2024",
        description: "Step-by-step docker-compose setup with Prisma migrations and environment management for a NestJS API.",
        tags: ["docker", "nestjs", "backend"],
        readTime: "6 min read",
        link: "https://dev.to/yourname/nestjs-docker"
    }
];

export const aboutText = "I am a software engineer with over a 5 years of experience. There are few things which I take seriously: keeping the project codebase clean & easy to maintain, productivity and time schedules so I was almost never late for work. I never stop learning and discovering new things especially in this programming world. Btw, I really love my neovim editor. Needless to say I like going out hiking with friends and spending time in nature.";
