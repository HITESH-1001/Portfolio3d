
import {
    carrent,
    css,
    docker,
    figma,
    git,
    github,
    html,
    javascript,
    jobit,
    mongodb,
    nodejs,
    reactjs,
    redux,
    tailwind,
    threejs,
    tripguide,
    typescript,
} from "../assets/tech/";
const projects = [
    {
        name: "Frames Animation",
        description:
            "Frame animation on scrolling is a technique used to create a seamless and engaging user experience by animating elements on a webpage as the user scrolls. ",
        tags: [
            {
                name: "frames",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://hitesh-1001.github.io/Animation_Frames/",
    },
    {
        name: "EmployeeManagementSystem",
        description:
            "An Employee Management System (EMS) is a web-based application that allows organizations to manage their employee data, track attendance, and perform various HR-related tasks.",
        tags: [
            {
                name: "ems",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://hitesh-1001.github.io/employeemanagementsystem/",
    },
    {
        name: "Pinterest Clone",
        description:
            "Pinterest is a social media platform that allows users to discover, save, and share images and videos (called Pins) to virtual pinboards.",
        tags: [
            {
                name: "ejs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://in.pinterest.com/",
    },
];

export const navLinks = [
   
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
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



export { projects, technologies };

