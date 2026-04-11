import { useState, useEffect, useRef } from 'react';

import { motion } from 'motion/react'

import HTMLFlipBook from 'react-pageflip';

import { ArrowBendDownRightIcon, ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';

import FadeUp from '../components/FadeUp';
import FlipPage from '../components/FlipPage';

import polaroid from '../assets/about/about-polaroid.webp';
import tulip from '../assets/about/white-tulip.webp';
import speechBubble from '../assets/about/speech-bubble.webp';
import memo from '../assets/about/about-memo.webp';
import cloud from '../assets/about/cloud.webp';

import resumeBlue from '../assets/about/resume-blue.webp';
import resumeWhite from '../assets/about/resume-white.webp';

import film1 from '../assets/about/film-1.webp';
import film2 from '../assets/about/film-2.webp';
import hiking1 from '../assets/about/hiking-1.webp';
import hiking2 from '../assets/about/hiking-2.webp';
import cooking1 from '../assets/about/cooking-1.webp';
import cooking2 from '../assets/about/cooking-2.webp';
import book from '../assets/about/book.webp';
import book2 from '../assets/about/book-2.webp';
import travel1 from '../assets/about/travel-1.webp';
import travel2 from '../assets/about/travel-2.webp';
import paddleboarding1 from '../assets/about/paddleboarding-1.webp';
import paddleboarding2 from '../assets/about/paddleboarding-2.webp';

function About() {

    const subHeading = "about  >>  me";

    const charVariants = {
        initial: { opacity: 0.15 },
        animate: { opacity: [1, 0.15, 1] },
    };

    const flipBookRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [isTwoPage, setIsTwoPage] = useState(window.innerWidth >= 768);
    const isTabClick = useRef(false);

    const joyList = [
        { 
            image: film1, 
            title: 'Film Photography', 
            text: 'I enjoy wandering through the streets, noticing quiet details and hidden beauty along the way.', 
            info: null
        },
        { 
            image: film2, 
            title: null, 
            text: null, 
            info: ['James Bay, Victoria, BC', 'Dallas Road, Victoria, BC'] 
        },
        { 
            image: hiking1, 
            title: 'Hiking', 
            text: 'I feel most grounded when I hike. Moving at my own pace clears my thoughts and keeps me steady.', 
            info: null 
        },
        { 
            image: hiking2, 
            title: null, 
            text: null, 
            info: ['A cold dip after a hike is the best!🐠', 'Joffre Lakes Park, BC'] 
        },
        { 
            image: cooking1, 
            title: 'Cooking', 
            text: 'I see cooking as a way of caring. I love preparing food for the people around me and seeing how something small can brighten someone’s day.', 
            info: null 
        },
        { 
            image: cooking2, 
            title: null, 
            text: null, 
            info: ['With one very special guest★', 'James Bay, Victoria, BC'] 
        },
        { 
            image: book, 
            title: 'Coffee & Books', 
            text: 'I love getting lost in another world through books, with ☕️ in hand. It helps me slow down and see the world a little differently.', 
            info: null 
        },
        { 
            image: book2, 
            title: null, 
            text: null, 
            info: ['...sometimes swapped for a glass of wine', 'Somewhere with a good view, 2025'] 
        },
        { 
            image: travel1, 
            title: 'Travel', 
            text: 'I am reminded how much there is to discover whenever I travel. Being in unfamiliar places keeps me curious and open to new perspectives.', 
            info: null 
        },
        { 
            image: travel2, 
            title: null, 
            text: null, 
            info: ['Kyoto, Japan, 2024', 'Bali, Indonesia, 2024']
        },
        { 
            image: paddleboarding1, 
            title: 'Paddleboarding', 
            text: 'I love heading out with the hope of spotting a seal, open to whatever the water brings.🌊🌊', 
            info: null 
        },
        { 
            image: paddleboarding2, 
            title: null, 
            text: null, 
            info: [ 'Once spotted seals napping on the rocks', '— so lucky!', 'Victoria Harbour, Victoria, BC']
        }
    ];

    const chapters = [
        { title: 'Film Photography', pageIndex: 0 },
        { title: 'Hiking', pageIndex: 2 },
        { title: 'Cooking', pageIndex: 4 },
        { title: 'Coffee & Books', pageIndex: 6 },
        { title: 'Travel', pageIndex: 8 },
        { title: 'Paddleboarding', pageIndex: 10 },
    ];

    useEffect(() => {
        const handleResize = () => {
            const newIsTwoPage = window.innerWidth >= 768;
            if (newIsTwoPage !== isTwoPage) {
                setCurrentPage(0);
            }
            setIsTwoPage(newIsTwoPage);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isTwoPage]);

    return (
        <>
            <FadeUp>
                <section className="grid grid-cols-4 lg:grid-cols-12 gap-4 items-center mt-10 lg:mt-20">

                    {/* Mobile Headings */}
                    <header className="col-span-4 lg:hidden flex flex-col items-center gap-6 border-b-[1px] border-dashed border-jb-blue/50 pb-2 lg:pb-12">
                        <h1 className="italic text-5xl font-medium">About me</h1>
                        <p className="font-caslon flex self-end tracking-tightest font-medium text-xl">
                            {subHeading.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={charVariants}
                                    initial="initial"
                                    animate="animate"
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: index * 0.15,
                                        repeatDelay: 2,
                                    }}
                                    className={char === " " ? "inline-block w-2" : "inline-block"}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </p>
                    </header>

                    {/* About Me Image */}
                    <div className="col-span-4 lg:col-span-5 lg:col-start-1 flex items-start justify-center py-10 md:py-6 lg:py-0 lg:-mt-28">
                        <div className="relative">
                            <img src={polaroid} alt="About Me Polaroid" className="relative w-[19rem] md:w-80 h-auto drop-shadow-2xl" />

                            <div className="absolute -top-1 left-10 w-7 h-7 bg-jb-blue rounded-full" />

                            <img src={speechBubble} alt="Nice to meet you!" className="absolute bottom-48 left-48 w-24 md:bottom-52 md:left-[12.25rem] md:w-28 h-auto -rotate-[32deg]" />

                            <div className="absolute -bottom-52 w-screen max-w-[135%] left-1/2 -translate-x-1/2 md:w-[135%] -rotate-6">
                                <img src={memo} alt="Memo" className="w-full h-auto"/>
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center gap-3 mt-8">
                                    <h2 className="text-xl">Hi there, this is Jin.</h2>
                                    <p className="text-sm font-mono leading-6">
                                        A Vancouver-based UX/UI designer with a front-end background and a passion for meaningful digital experiences.
                                    </p>
                                </div>
                            </div>

                            <img src={tulip} alt="Tulip" className="absolute -bottom-6 -left-10 w-32 md:-bottom-8 md:-left-12 md:w-36 h-auto -rotate-12" />

                            <img src={cloud} alt="Cloud" className="absolute -bottom-12 -left-6 w-14 md:-bottom-12 md:-left-6 h-auto -rotate-12" />
                        </div>
                    </div>

                    {/* Desktop Headings */}
                    <div className="col-span-4 lg:col-start-6 lg:col-span-7 mt-52 space-y-8 lg:mt-12 lg:flex lg:flex-col lg:justify-center lg:self-center">
                        <div className="hidden lg:flex flex-col gap-3 border-b border-dashed border-jb-blue/50 pb-4">
                            <h1 className="italic text-5xl font-medium">About me</h1>
                            <p className="font-caslon flex self-end tracking-tightest font-medium text-xl">
                                {subHeading.split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={charVariants}
                                        initial="initial"
                                        animate="animate"
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: "linear",
                                            delay: index * 0.15,
                                            repeatDelay: 2,
                                        }}
                                        className={char === " " ? "inline-block w-2" : "inline-block"}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </p>
                        </div>
                        <p className="text-jb-brown/90 md:text-lg">
                            My design journey began in web development, where I discovered not only the logic behind building things, but also a growing <span className="italic text-jb-blue font-semibold">curiosity</span> about how people feel when using them. This curiosity gradually led me toward designing experiences that make everyday interactions feel simpler and more enjoyable.
                        </p>

                        <p className="text-jb-brown/90 md:text-lg">
                            As I began living abroad, my way of thinking naturally broadened. It helped me see design as a way to connect different ideas, people, and cultures. I try to carry this perspective into my work by designing with <span className="italic text-jb-blue font-semibold">empathy</span>, <span className="italic text-jb-blue font-semibold">clarity</span>, and <span className="italic text-jb-blue font-semibold">intention</span>. With this mindset, I aim to keep growing as a designer who creates work that not only solves problems but also brings warmth and connection to everyday life.
                        </p>
                    </div>
                </section>
            </FadeUp>
            
            <FadeUp>
                {/* What I Do */}
                <section className="grid grid-cols-4 lg:grid-cols-12 gap-4 py-36 lg:mt-24">
        
                    <div className="col-span-4 lg:col-span-12 mb-12 lg:mb-0">
                        <div className="flex items-center gap-2">
                            <ArrowBendDownRightIcon size={20}/>                    
                            <h2 className="d6 md:d5 font-normal bg-jb-blue text-white px-4 py-1.5 tracking-widest uppercase">What I Do</h2>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-start-2 lg:col-span-4 self-end pb-20">
                        <div 
                            className="group relative w-full lg:w-3/4 rotate-6 drop-shadow-xl cursor-pointer hover:rotate-0 transition-transform duration-300"
                            onClick={() => window.open('/resume.pdf', '_blank')}
                        >
                            <img src={resumeBlue} alt="Resume" className="w-full transition-opacity duration-300 group-hover:opacity-0" />
                            <img src={resumeWhite} alt="Resume" className="absolute inset-0 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                    </div>

                    <div className="col-span-4 lg:col-span-8 lg:col-start-6 space-y-8">
                        {/* Design Skills */}
                        <div className="grid grid-cols-2 gap-4 border-b border-dashed border-jb-blue/50 pb-8">
                            <h3 className="col-span-1 text-lg italic">Design Skills</h3>
                            <ul className="col-span-1 list-disc space-y-1 text-jb-brown/90 b6 lg:b5">
                                <li>Wireframing</li>
                                <li>Prototyping</li>
                                <li>User Research</li>
                                <li>Usability Testing</li>
                                <li>Information Architecture</li>
                            </ul>
                        </div>

                        {/* Design Tools */}
                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 border-b border-dashed border-jb-blue/50 pb-8">
                            <h3 className="col-span-1 text-lg italic">Design Tools</h3>
                            <ul className="col-span-1 list-disc space-y-1 text-jb-brown/90 b6 lg:b5">
                                <li>Figma</li>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                                <li>Indesign</li>
                                <li>After Effects</li>
                                <li>CMS (WordPress, Wix)</li>
                            </ul>
                        </div>

                        {/* Web Tech */}
                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 border-b border-dashed border-jb-blue/50 pb-8">
                            <h3 className="col-span-1 text-lg italic">Web Tech</h3>
                            <ul className="col-span-1 list-disc space-y-1 text-jb-brown/90 b6 lg:b5">
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>GSAP</li>
                                <li>Tailwind CSS</li>
                                <li>GitHub</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </FadeUp>

            <FadeUp>
                {/* Little Joys */}
                <section className="grid grid-cols-4 lg:grid-cols-12 gap-4">
                    
                    <div className="col-span-4 lg:col-span-12 mb-12">
                        <div className="flex items-center gap-2">
                            <ArrowBendDownRightIcon size={20}/>                    
                            <h2 className="d6 md:d5 font-normal bg-jb-blue text-white px-4 py-1.5 tracking-widest uppercase">Little Joys</h2>
                        </div>
                    </div>

                    <div className="col-span-4 lg:col-span-12 flex flex-col items-center gap-10">

                        {/* Header */}
                        <div className="flex flex-col items-center gap-2 text-center">
                            <p className="font-mono text-sm tracking-wider">Flip through my</p>
                            <h3 className="italic">Photo Book</h3>
                        </div>

                        {/* Description */}
                        <p className="col-span-4 text-jb-brown/90 md:text-lg text-center">
                            This is a small collection of moments from my off-the-clock life. <br/>
                            These are the little things that slow me down, fill me up, and keep me going.
                        </p>

                        {/* Progress Tab Nav */}
                        <div className="hidden lg:flex items-start w-full py-6">
                            {chapters.map((chapter, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        isTabClick.current = true;
                                        flipBookRef.current?.pageFlip()?.turnToPage(chapter.pageIndex);
                                        setCurrentPage(index);
                                        setTimeout(() => {
                                            isTabClick.current = false;
                                        }, 500);
                                    }}
                                    className="flex-1 flex flex-col items-center gap-2 cursor-pointer relative"
                                >
                                    <div className="flex items-center w-full">
                                        <div className={`h-[1.5px] flex-1 transition-colors duration-300 ${index === 0 ? 'opacity-0' : index <= currentPage ? 'bg-jb-blue' : 'bg-jb-brown/20'}`} />
                                        <div className="px-2">
                                            <div className={`w-2.5 h-2.5 rounded-full border-2 flex-shrink-0 transition-all duration-300 ${index <= currentPage ? 'bg-jb-blue border-jb-blue' : 'bg-transparent border-jb-brown/30'}`} />
                                        </div>
                                        <div className={`h-[1.5px] flex-1 transition-colors duration-300 ${index === chapters.length - 1 ? 'opacity-0' : index < currentPage ? 'bg-jb-blue' : 'bg-jb-brown/20'}`} />
                                    </div>
                                    <span className={`text-xs font-mono text-center transition-colors duration-100 ${index <= currentPage ? 'text-jb-blue font-semibold' : 'text-jb-brown/60 hover:text-jb-blue/80'}`}>
                                        {chapter.title}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Book Flip */}
                        <div className="flex items-center justify-center gap-20">
                            <button className="hidden lg:flex w-12 h-12 items-center justify-center border border-dashed border-jb-blue/40 rounded-full hover:bg-jb-blue hover:text-white hover:border-jb-blue transition-all duration-200 cursor-pointer"
                                onClick={() => {
                                    flipBookRef.current?.pageFlip()?.flipPrev();
                                }}>
                                <ArrowLeftIcon size={18} />
                            </button>

                            <HTMLFlipBook 
                                key={isTwoPage ? 'two-page' : 'one-page'}
                                width={isTwoPage ? 360 : Math.min(400, window.innerWidth - 40)}
                                height={isTwoPage ? 460 : 490}
                                size="fixed"
                                maxShadowOpacity={0.5}
                                showCover={false}
                                startPortrait={false}
                                usePortrait={!isTwoPage}
                                className="drop-shadow-2xl mx-auto"
                                ref={flipBookRef}
                                onFlip={(e) => {
                                    if (isTabClick.current) return;
                                    const idx = chapters.findIndex((chapter, i) => {
                                        const next = chapters[i + 1]?.pageIndex ?? joyList.length;
                                        return e.data >= chapter.pageIndex && e.data < next;
                                    });
                                    setCurrentPage(idx);
                                }}
                            >
                                {joyList.map((joy, index) => (
                                    <FlipPage
                                        key={index}
                                        image={joy.image}
                                        alt={joy.title}
                                        title={joy.title}
                                        text={joy.text}
                                        info={joy.info}
                                        isLeft={index % 2 === 0}
                                        isLast={!isTwoPage ? index === joyList.length - 1 : index >= joyList.length - 2}
                                        isTwoPage={isTwoPage}
                                    />
                                ))}
                            </HTMLFlipBook>

                            <button className="hidden lg:flex w-12 h-12 items-center justify-center border border-dashed border-jb-blue/40 rounded-full hover:bg-jb-blue hover:text-white hover:border-jb-blue transition-all duration-200 cursor-pointer"
                                onClick={() => {
                                    flipBookRef.current?.pageFlip()?.flipNext();
                                }}>
                                <ArrowRightIcon size={18} />
                            </button>
                        </div>
                    </div>
                </section>
            </FadeUp>
        </>
    );
}

export default About;