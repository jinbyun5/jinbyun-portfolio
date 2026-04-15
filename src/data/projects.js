import thumbHm from '../assets/thumb-hm.webp';
import thumbCatchTreasure from '../assets/thumb-catchtreaure.webp';
import thumbJobTracker from '../assets/thumb-trackwise.webp';
import thumbThePapery from '../assets/thumb-thepapery.webp';

export const projects = [
    {
        id: 1,
        image: thumbHm,
        title: "H&M App Redesign",
        tags: ["UX/UI", "Case Study"],
        description: "A redesign of the H&M mobile app with a smoother browsing experience.",
        slug: "hm-app-redesign",

        titleLine1: 'H&M App',
        titleLine2: 'Redesign',
        subtitle: 'Identifying usability issues and proposing improvements to create a clearer, more intuitive shopping experience.',
        tools: 'Figma, Photoshop',
        role: 'UX/UI Designer',
        timeline: '2 weeks',
        industry: 'E-commerce, Fashion Retail',
    },
    {
        id: 2,
        image: thumbCatchTreasure,
        title: "Catch Treasure",
        tags: ["UX/UI", "Case Study", "Web Dev", "WordPress"],
        description: "An interactive game turning ocean pollution awareness into an emotional experience.",
        slug: "catch-treasure",

        titleLine1: 'Catch',
        titleLine2: 'Treasure',
        subtitle: 'A web-based interactive game created for an ocean conservation non-profit, turning ocean pollution awareness into an emotional experience.',
        tools: 'JavaScript, GSAP, Photoshop, WordPress',
        role: 'UX/UI Designer, Web Developer',
        timeline: '3 weeks',
        industry: 'Environmental non-profit',
    },
    {
        id: 3,
        image: thumbJobTracker,
        title: "TrackWise",
        tags: ["UX/UI", "Case Study", "AI-Assisted"],
        description: "An AI-assisted job tracker that analyzes resume versions and application outcomes to help job seekers refine their strategy.",
        slug: "track-wise",
    },
    {
        id: 4,
        image: thumbThePapery,
        title: "The Papery ",
        tags: ["UX/UI", "Case Study", "Usability Testing"],
        description: "Refining the e-commerce shopping experience for a stationery brand through iterative UX design.",
        slug: "the-papery",

        titleLine1: 'The Papery',
        subtitle: 'A UX case study focused on designing and iterating a complete e-commerce shopping flow through usability testing.',
        tools: 'Figma, Maze',
        role: 'UX/UI Designer',
        timeline: '4 weeks',
        industry: 'E-commerce',
    },
];