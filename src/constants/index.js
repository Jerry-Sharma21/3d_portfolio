import {  logo314e, ederlogo } from "../assets/images";
import {
    contact,
    css,
    chat,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    nextjs,
    nodejs,
    react,
    redux,
    netflix,
    tailwindcss,
    twitterx,
    typescript,
    vuejs,
    reactNative,
    portfolio,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: vuejs,
        name: "Vue",
        type: "Frontend",
    },
    {
        imageUrl: reactNative,
        name: "React Native",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
        {
        title: "React Native Developer",
        company_name: "Eder Labs",
        icon: ederlogo,
        iconBg: "#fbc3bc",
        date: "June 2023 - Jan 2024",
        points: [
            "Led the migration from Vue.js to React Native.",
            "Leveraged Lighthouse audits to enhance UI performance and implement new responsive designs in React Native, achieving a reduction in First Contentful Paint (FCP) from 4 seconds to 2.4 seconds and an improvement in Largest Contentful Paint (LCP) from 6 seconds to 3.9 seconds by optimizing image loading and streamlining CSS.",
            "Improved Time to Interactive (TTI) by 50% and decreased Total Blocking Time (TBT) by 60% through code splitting, deferring non-critical JavaScript.",
            "Revamped the entire UI with new, responsive designs in React, ensuring near-zero Cumulative Layout Shift (CLS) by adhering to best practices for layout stability and optimizing asset loading.",
            "Hand-Coded the embedded stylesheets into 10+ React interfaces and reduced load time by 60%.",
            "Maintained a flawless track record by resolving 100% of reported bugs in production, ensuring a reliable user experience."
        ],
    },
    {
        title: "React.js Developer",
        company_name: "314e corp",
        icon: logo314e,
        iconBg: "#accbe1",
        date: "July 2021 - May 2023",
        points: [
            "Played a key role in the design and development of an advanced Applicant Tracking System (ATS) and Customer Relationship Management (CRM) product using React. Implementing 10+ new features.",
            "Implemented functional components in React and streamlined CSS based on wireframes and UI/UX guidelines, contributing to a cleaner and more efficient codebase.",
            "Wrote 70+ comprehensive unit test cases for the UI, which increased coverage by 40%.",
            "Independently integrated essential components such as APIs, Auth0 authentication, Redux, and critical libraries, enhancing functionality and security measures.",
            "Actively participated in bug fixing endeavors, achieving approximately 8% monthly reduction in user-reported bugs.",
        ],
    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Jerry-Sharma21',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/abhijeet-sharma-468b00234',
    }
];

export const projects = [
    {
        iconUrl: portfolio,
        theme: 'btn-back-red',
        name: 'Personal Portfolio Of UI/UX Developer',
        description: 'This UI/UX Developer Portfolio, crafted with Next.js, seamlessly showcases innovative design prowess, interactive elements, and project highlights, offering a compelling glimpse into the developer skills and expertise. With the inclusion of light and dark mode options, users can enjoy a customizable and visually comfortable browsing experience, enhancing accessibility and user satisfaction.',
        link: 'https://github.com/Jerry-Sharma21/personal_portfolio',
    },
    {
        iconUrl: twitterx,
        theme: 'btn-back-green',
        name: 'Full Stack X (formerly Twitter) Clone',
        description: 'Created a full-stack replica of the popular discussion platform "X (formerly Twitter)" enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/Jerry-Sharma21/twitter_clone',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-pink',
        name: 'Full Stack Netflix Clone',
        description: 'The Netflix Clone project replicates Netflix user interface and features using React.js, allowing users to browse, search, and watch content in a visually similar environment, enhancing their streaming experience.',
        link: 'https://github.com/Jerry-Sharma21/netflix_clone',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-black',
        name: 'Chat-A-Tale',
        description: 'The MERN stack-powered Chat App integrates Socket.io for real-time communication, enabling users to engage in seamless, instant messaging and group chats with features like typing indicators and message history.',
        link: 'https://github.com/Jerry-Sharma21/chat_app_new',
    },
];