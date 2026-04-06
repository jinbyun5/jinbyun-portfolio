import figma from '../assets/tools/figma.webp';
import photoshop from '../assets/tools/photoshop.webp';
import illustrator from '../assets/tools/illustrator.webp';
import react from '../assets/tools/react.webp';
import css from '../assets/tools/css.webp';
import html from '../assets/tools/html.webp';
import js from '../assets/tools/javascript.webp';
import gsap from '../assets/tools/gsap.webp';
import indesign from '../assets/tools/indesign.webp';

import postcardPattern from '../assets/playground/postcard-abstract-pattern.webp';
import memopad from '../assets/playground/memopad.webp';
import posterCollage from '../assets/playground/poster-collage.jpg';
import moviePoster from '../assets/playground/let-the-right-one-in.svg';
import orchestraBrochure from '../assets/playground/orchestra-brochure.webp';
import horrormovieAnimation from '../assets/playground/horrormovie-animation.mp4';
import potteryCatalog from '../assets/playground/pottery-catalog.webp';
import panda from '../assets/playground/panda.svg';

export const playground = [
    {
        id: 1,
        image: postcardPattern,
        title: "Postcard Design",
        category: "Graphic Design",
        description: "A postcard design with abstract organic pattern",
        ratio: "aspect-[4/3]",
        tools: [indesign, photoshop]
    },
    {
        id: 2,
        image: memopad,
        title: "Memo Pad",
        category: "Graphic Design",
        description: "A minimal memo pad with soft color",
        ratio: "aspect-[4/3]",
        tools: [indesign, photoshop]
    },
    {
        id: 3,
        image: moviePoster,
        title: "Let the Right One In",
        category: "Illustration",
        description: "A fan movie poster illustration",
        ratio: "aspect-[4/5]",
        tools: [illustrator]
    },
    {
        id: 4,
        image: posterCollage,
        title: "Born to Bloom",
        category: "Graphic Design",
        description: "A collage-style poster",
        ratio: "aspect-[4/5]",
        tools: [indesign, photoshop]
    },
    {
        id: 5,
        image: orchestraBrochure,
        title: "Orchestra Brochure Design",
        category: "Graphic Design",
        description: "A concert brochure for a classical music series",
        ratio: "aspect-[4/3]",
        tools: [indesign, photoshop]
    },
    {
        id: 6,
        video: horrormovieAnimation,
        title: "Horror Movie Animation",
        category: "Animation",
        description: "A concert brochure for a classical music series",
        ratio: "aspect-[4/3]",
        tools: [html, css, js, gsap, photoshop]
    },
    {
        id: 7,
        image: potteryCatalog,
        title: "Artisan Ceramics Catalog",
        category: "Graphic Design",
        description: "A catalog design for a ceramics fair at Vancouver Art Gallery",
        ratio: "aspect-[4/3]",
        tools: [indesign, photoshop]
    },
    {
        id: 8,
        image: panda,
        title: "Panda Illustration",
        category: "Illustration",
        description: "A panda illustration with bamboo",
        ratio: "aspect-[1/1]",
        tools: [illustrator]
    },
];