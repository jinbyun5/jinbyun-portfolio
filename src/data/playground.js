import figma from '../assets/tools/figma.webp';
import photoshop from '../assets/tools/photoshop.webp';
import illustrator from '../assets/tools/illustrator.webp';
import css from '../assets/tools/css.webp';
import html from '../assets/tools/html.webp';
import js from '../assets/tools/javascript.webp';
import gsap from '../assets/tools/gsap.webp';
import indesign from '../assets/tools/indesign.webp';

import postcardPattern from '../assets/playground/postcard-abstract-pattern.webp';
import memopad from '../assets/playground/memopad.webp';
import moviePoster from '../assets/playground/let-the-right-one-in.svg';
import posterCollage from '../assets/playground/poster-collage.jpg';
import ceramicsFairPoster from '../assets/playground/ceramics-fair-poster.webp';
import horrormovieAnimation from '../assets/playground/horrormovie-animation.mp4';
import ceramicsFairCatalog from '../assets/playground/ceramics-fair-catalog.webp';
import orchestraBrochure from '../assets/playground/orchestra-brochure.webp';
import panda from '../assets/playground/panda.svg';
import dandelionsAnimation from '../assets/playground/dandelions-animation.mp4';
import flowerAnimation from '../assets/playground/flower-animation.mp4';

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
        image: ceramicsFairPoster,
        title: "Ceramics Fair Poster",
        category: ["Graphic Design", "Print"],
        description: "A poster design for a ceramics fair at Vancouver Art Gallery",
        ratio: "aspect-[4/3]",
        tools: [illustrator, indesign, photoshop]
    },
    {
        id: 6,
        video: horrormovieAnimation,
        title: "Horror Movie Animation",
        category: "Animation",
        description: "An animated landing page for a horror movie",
        ratio: "aspect-[4/3]",
        tools: [html, css, js, gsap, photoshop]
    },
    {
        id: 7,
        image: ceramicsFairCatalog,
        title: "Ceramics Fair Catalog",
        category: "Print",
        description: "A catalog design for a ceramics fair at Vancouver Art Gallery",
        ratio: "aspect-[4/3]",
        tools: [indesign, photoshop]
    },
    {
        id: 8,
        image: orchestraBrochure,
        title: "Orchestra Brochure Design",
        category: "Print",
        description: "A concert brochure for a classical music series",
        ratio: "aspect-[4/3]",
        tools: [indesign, photoshop]
    },
    {
        id: 9,
        image: panda,
        title: "Panda Illustration",
        category: "Illustration",
        description: "A panda illustration with bamboo",
        ratio: "aspect-[1/1]",
        tools: [illustrator]
    },
    {
        id: 10,
        video: dandelionsAnimation,
        title: "Dandelions Animation",
        category: "Animation",
        description: "An animation of dandelion seeds drifting through the air",
        ratio: "aspect-[4/3]",
        tools: [html, css, js, gsap, photoshop]
    },
    {
        id: 11,
        video: flowerAnimation,
        title: "Flower Animation",
        category: "Animation",
        description: "An animation of petals assembling into a single flower",
        ratio: "aspect-[1/1]",
        tools: [html, css, js, gsap, illustrator]
    },
];