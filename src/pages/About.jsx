import { useState, useEffect } from 'react';

import { motion } from 'motion/react'
import HTMLFlipBook from 'react-pageflip';

import { ArrowBendDownRightIcon } from '@phosphor-icons/react';

import FlipPage from '../components/FlipPage';

import polaroid from '../assets/about-polaroid-3.webp';
import tulip from '../assets/about-tulip.webp';
import speechBubble from '../assets/about-speech-bubble.webp';
import memo from '../assets/about-memo.webp';
import cloud from '../assets/graphic-cloud.svg';
import blueTape from '../assets/about-tape.webp';
import note from '../assets/about-note.webp';

import joy1 from '../assets/about-joy-1.jpg';
import joy2 from '../assets/about-joy-2.jpg';
import joy3 from '../assets/about-joy-3.jpg';
import joy4 from '../assets/about-joy-4.jpg';
import joy5 from '../assets/about-joy-5.jpg';
import joy6 from '../assets/about-joy-6.jpg';
import FadeUp from '../components/FadeUp';

function About() {

    const subHeading = "about  >>  me";

    const charVariants = {
        initial: { opacity: 0.15 },
        animate: { opacity: [1, 0.15, 1] },
    };

    const [isTwoPage, setIsTwoPage] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => setIsTwoPage(window.innerWidth >= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const joyList = [
        { image: joy1, title: 'film photography', text: 'I enjoy wandering through the streets, noticing quiet details and hidden beauty along the way.' },
        { image: joy2, title: 'hiking', text: 'I feel most grounded when I hike. Moving at my own pace clears my thoughts and keeps me steady.' },
        { image: joy3, title: 'cooking', text: 'I see cooking as a way of caring. I love preparing food for the people around me and seeing how something small can brighten someone’s day.' },
        { image: joy4, title: 'coffee & books', text: 'I love getting lost in another world through books, with ☕️ in hand. It helps me slow down and see the world a little differently.' },
        { image: joy5, title: 'travel', text: 'I am reminded how much there is to discover whenever I travel. Being in unfamiliar places keeps me curious and open to new perspectives.' },
        { image: joy6, title: 'paddleboarding', text: 'I love heading out with the hope of spotting a seal, open to whatever the water brings.🌊🌊' }
    ];

    return (
        <>
            <FadeUp>
                <section className="grid grid-cols-4 lg:grid-cols-12 gap-4 py-16">

                    {/* Mobile Headings */}
                    <header className="col-span-4 lg:hidden flex flex-col items-center gap-6 border-b-[1px] border-dashed border-jb-blue/50 pb-2 lg:pb-12">
                        <h3 className="italic text-5xl font-medium">About me</h3>
                        <h4 className="flex self-end tracking-tightest font-medium text-xl">
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
                        </h4>
                    </header>

                    {/* About Me */}
                    <div className="col-span-4 lg:col-span-5 lg:col-start-1 flex items-start justify-center py-10 md:py-6 lg:py-0 lg:-mt-9">
                        <div className="relative">
                            <img src={polaroid} alt="About Me Polaroid" className="relative w-80 h-auto drop-shadow-2xl md:w-[22rem]" />

                            <div className="absolute -top-3 left-7 w-10 h-10 md:-top-1 md:left-10 bg-jb-blue rounded-full" />

                            <img src={speechBubble} alt="Nice to meet you!" className="absolute bottom-48 left-52 w-28 h-auto -rotate-[32deg] md:w-32 md:bottom-56 md:left-56" />

                            <div className="absolute -bottom-52 left-1/2 -translate-x-1/2 w-[135%] -rotate-6 md:w-[118%] lg:w-[112%] md:-bottom-52 lg:-bottom-48">
                                <img src={memo} alt="Memo" className="w-full h-auto"/>
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center gap-3 mt-8">
                                    <h5>Hi there, this is Jin.</h5>
                                    <p className="text-sm font-mono leading-6">
                                        A Vancouver-based UX/UI designer with a front-end background and a passion for meaningful digital experiences.
                                    </p>
                                </div>
                            </div>

                            <img src={tulip} alt="Tulip" className="absolute -bottom-8 -left-12 w-36 h-auto -rotate-12 md:-bottom-4 md:-left-10" />

                            <img src={cloud} alt="Cloud" className="absolute -bottom-12 -left-10 w-16 h-auto -rotate-12 md:-left-5 md:-bottom-11" />
                        </div>
                    </div>

                    {/* Desktop Headings */}
                    <div className="col-span-4 lg:col-start-6 lg:col-span-7 mt-52 space-y-8 lg:mt-12 lg:flex lg:flex-col lg:justify-center lg:self-center">
                        <div className="hidden lg:flex flex-col gap-3 border-b border-dashed border-jb-blue/50 pb-4">
                            <h3 className="italic text-5xl font-medium">About me</h3>
                            <h4 className="flex self-end tracking-tightest font-medium text-xl">
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
                            </h4>
                        </div>
                        <p className="text-jb-brown md:text-lg">
                            My design journey began in web development, where I discovered not only the logic behind building things, but also a growing curiosity about how people feel when using them. This curiosity gradually led me toward designing experiences that make everyday interactions feel simpler and more enjoyable.
                        </p>

                        <p className="text-jb-brown md:text-lg">
                            As I began living abroad, my way of thinking naturally broadened. It helped me see design as a way to connect different ideas, people, and cultures. I try to carry this perspective into my work by designing with empathy, clarity, and intention. With this mindset, I aim to keep growing as a designer who creates work that not only solves problems but also brings warmth and connection to everyday life.
                        </p>
                    </div>
                </section>
            </FadeUp>
            
            <FadeUp>
                {/* What I Do */}
                <section className="grid grid-cols-4 lg:grid-cols-12 gap-4 py-20 lg:mt-20">
        
                    <div className="col-span-4 lg:col-span-12 mb-12 lg:mb-0">
                        <div className="flex items-center gap-2">
                            <ArrowBendDownRightIcon size={20}/>                    
                            <h3 className="d5 font-normal bg-jb-blue text-white px-4 py-1 tracking-widest uppercase">What I Do</h3>
                        </div>
                    </div>

                    <div className="col-span-4 lg:col-span-8 lg:col-start-6 space-y-10">
                        {/* Design Skills */}
                        <div className="grid grid-cols-2 gap-4 border-b border-gray-300 pb-10">
                            <h6 className="col-span-1 d6 font-semibold lg:d5">[DESIGN SKILLS]</h6>
                            <ul className="col-span-1 list-disc space-y-1 text-jb-brown b6 lg:b5 lg:space-y-1.5">
                                <li>Wireframing</li>
                                <li>Prototyping</li>
                                <li>User Research</li>
                                <li>Usability Testing</li>
                                <li>Information Architecture</li>
                            </ul>
                        </div>

                        {/* Design Tools */}
                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 border-b border-gray-300 pb-10">
                            <h4 className="col-span-1 d6 font-semibold lg:d5">[DESIGN TOOLS]</h4>
                            <ul className="col-span-1 list-disc space-y-1 text-jb-brown b6 lg:b5 lg:space-y-1.5">
                                <li>Figma</li>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                                <li>Indesign</li>
                                <li>After Effects</li>
                                <li>CMS (WordPress, Wix)</li>
                            </ul>
                        </div>

                        {/* Web Tech */}
                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 border-b border-gray-300 pb-10">
                            <h4 className="col-span-1 d6 font-semibold lg:d5">[WEB TECH]</h4>
                            <ul className="col-span-1 list-disc space-y-1 text-jb-brown b6 lg:b5 lg:space-y-1.5">
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>GSAP</li>
                                <li>TailwindCSS/Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </FadeUp>

            <FadeUp>
                {/* Little Joys */}
                <section className="grid grid-cols-4 lg:grid-cols-12 gap-4 py-12 border-b-[1px] border-dashed border-jb-blue/50">
                    
                    <div className="col-span-4 lg:col-span-12 mb-12">
                        <div className="flex items-center gap-2">
                            <ArrowBendDownRightIcon size={20}/>                    
                            <h3 className="d5 font-normal bg-jb-blue text-white px-4 py-1 tracking-widest uppercase">Little Joys</h3>
                        </div>
                    </div>

                    <div className="col-span-4 lg:col-start-1 lg:col-span-4 flex flex-col">
                        <div className="flex items-center justify-center gap-4">
                            <div className="relative w-[18%] min-w-[65px] max-w-[70px]"> 
                                <img src={blueTape} className="w-full h-auto rotate-1" />
                                <span className="absolute inset-0 flex items-center justify-center emphasis text-jb-white -rotate-90 whitespace-nowrap">Things I love</span>
                            </div>

                            <div className="relative w-[75%] min-w-[285px] max-w-[320px] rounded-r-lg overflow-hidden">
                                <img src={note} className="w-full h-auto drop-shadow-lg rounded-r-lg" />
                                <ul className="absolute inset-0 flex flex-col items-start justify-center text-jb-brown gap-1 list-disc font-mono text-sm pl-16">
                                    {joyList.map((joy, index) => (
                                        <li>{joy.title}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p className="col-span-4 text-jb-brown mt-12">
                            Off the clock, you’ll find me somewhere quiet — behind a film camera, on a trail, or curled up with a book and an almond latte. These are the moments that slow me down, fill me up, and remind me why I care about the details :)
                        </p>
                    </div>

                    {/* Book Flip */}
                    <div className="col-span-4 lg:col-start-5 lg:col-span-8 flex flex-col items-center justify-center lg:items-end py-12 lg:py-0 lg:-mt-10">
                        <h6 className="emphasis mb-4 self-center lg:pl-20">Take a closer look</h6>

                        <HTMLFlipBook 
                            key={isTwoPage ? 'two-page' : 'one-page'}
                            width={isTwoPage ? 360 : 400}
                            height={isTwoPage ? 460 : 490}
                            size="fixed"
                            maxShadowOpacity={0.5}
                            showCover={false}
                            startPortrait={false}
                            usePortrait={true}
                            className="drop-shadow-2xl"
                        >
                            {joyList.map((joy, index) => (
                                <FlipPage
                                    key={index}
                                    image={joy.image}
                                    title={joy.title}
                                    text={joy.text}
                                    isLeft={index % 2 === 0}
                                    isLast={!isTwoPage ? index === joyList.length - 1 : index >= joyList.length - 2}
                                    isTwoPage={isTwoPage}
                                />
                            ))}
                        </HTMLFlipBook>
                    </div>
                </section>
            </FadeUp>
        </>
    );
}

export default About;