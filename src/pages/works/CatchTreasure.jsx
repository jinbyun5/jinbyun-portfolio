import { Link } from 'react-router-dom';

import { ArrowLeftIcon, GameControllerIcon } from '@phosphor-icons/react';

import FadeUp from "../../components/FadeUp";
import ZoomImage from '../../components/ZoomImage';
import ProjectHeader from '../../components/ProjectHeader';
import StickyNavLayout from '../../components/StickyNavLayout';
import WorkSectionLayout from '../../components/WorkSectionLayout';
import ProjectCard from '../../components/ProjectCard';
import SolutionCard from '../../components/SolutionCard';

import { projects } from '../../data/projects';

import heroImage from '../../assets/catch-treasure/hero-image.webp';
import solution1 from '../../assets/catch-treasure/solution-1.mp4';
import solution2 from '../../assets/catch-treasure/solution-2.mp4';
import solution3 from '../../assets/catch-treasure/solution-3.mp4';
import research1 from '../../assets/catch-treasure/research-1.webp';
import research2 from '../../assets/catch-treasure/research-2.webp';
import sketch1 from '../../assets/catch-treasure/sketch-1.webp';
import sketch2 from '../../assets/catch-treasure/sketch-2.webp';
import sketch3 from '../../assets/catch-treasure/sketch-3.webp';
import sketch4 from '../../assets/catch-treasure/sketch-4.webp';
import designConcept from '../../assets/catch-treasure/design-concept.webp';
import oceanWaste from '../../assets/catch-treasure/ocean-waste.webp';
import turtle from '../../assets/catch-treasure/turtle.webp';
import userFlow from '../../assets/catch-treasure/user-flow.webp';

import gameScreen1 from '../../assets/catch-treasure/game-screen-1.webp';
import gameScreen2 from '../../assets/catch-treasure/game-screen-2.webp';
import gameScreen3 from '../../assets/catch-treasure/game-screen-3.webp';
import gameScreen4 from '../../assets/catch-treasure/game-screen-4.webp';
import gameScreen5 from '../../assets/catch-treasure/game-screen-5.webp';
import gameScreen6 from '../../assets/catch-treasure/game-screen-6.webp';
import gameScreen7 from '../../assets/catch-treasure/game-screen-7.webp';
import gameScreen8 from '../../assets/catch-treasure/game-screen-8.webp';
import gameScreen9 from '../../assets/catch-treasure/game-screen-9.webp';
import gameScreen10 from '../../assets/catch-treasure/game-screen-10.webp';
import gameScreen11 from '../../assets/catch-treasure/game-screen-11.webp';
import gameScreen12 from '../../assets/catch-treasure/game-screen-12.webp';

import landingPage1 from '../../assets/catch-treasure/landing-page-1.webp';
import landingPage2 from '../../assets/catch-treasure/landing-page-2.webp';


function CatchTreasure() {

    const gameScreens = [
        { src: gameScreen1, alt: 'Title screen' },
        { src: gameScreen2, alt: 'Game start' },
        { src: gameScreen3, alt: 'Missed screen' },
        { src: gameScreen4, alt: 'Catch screen' },
        { src: gameScreen5, alt: 'Treasure chest rotation 1' },
        { src: gameScreen6, alt: 'Treasure chest rotation 2' },
        { src: gameScreen7, alt: 'Treasure chest glowing' },
        { src: gameScreen8, alt: 'Bottle item' },
        { src: gameScreen9, alt: 'Broken bottle story' },
        { src: gameScreen10, alt: 'Net item' },
        { src: gameScreen11, alt: 'Debris item' },
        { src: gameScreen12, alt: 'Turtle scientist' },
    ]

    const project = projects.find(p => p.slug === 'catch-treasure');
    const otherProjects = projects.filter(p => p.slug !== 'catch-treasure');

    return (
        <FadeUp>
            <section className="w-full py-16 text-jb-brown">
                <div className="grid grid-cols-4 md:grid-cols-12">

                    {/* Link to All Works */}
                    <nav className="col-span-4 md:col-span-12 mb-10">
                        <Link
                            to="/works"
                            className="group flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-all hover:text-jb-blue"
                        >
                            <ArrowLeftIcon size={20} />
                            <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-1">All Works</span>
                        </Link>
                    </nav>

                    {/* Header */}
                    <ProjectHeader {...project} />

                    {/* Thumbnail Image */}
                    <figure className="col-span-4 md:col-span-12 pt-16 md:pt-20">
                        <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden">
                            <img
                                src={heroImage}
                                alt="Catch Treasure Overview"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </figure>

                    <div className="col-span-4 md:col-span-12 flex items-center justify-center py-16">
                        <a
                            href="https://catchtreasure.jinbyun.ca/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-jb-white border border-jb-blue text-jb-blue text-lg rounded-full py-2 px-5 whitespace-nowrap transition-all duration-300 hover:bg-jb-blue hover:text-jb-white shadow-lg flex items-center gap-2"
                        >
                            <GameControllerIcon size={20} />
                            Play the Game
                        </a>
                    </div>
                </div>

                {/* Project Content */}
                <div className="w-screen -ml-[calc((100vw-100%)/2)] border-y border-dashed border-jb-blue/50 bg-jb-white px-5 md:px-12 lg:px-[6.25rem]">
                    <StickyNavLayout>

                        {/* 01 Project Overview */}
                        <WorkSectionLayout number="01" title="Project Overview">
                            <div className="space-y-8">
                                <h2>Designing an interactive experience for ocean pollution awareness</h2>
                                <p>Catch Treasure is a web-based interactive game created for Deep Blue Rescue, a fictional ocean conservation non-profit. Players cast a line expecting to find treasure, only to pull up ocean waste instead. By turning expectation into surprise, the experience reveals the reality of ocean pollution. The goal was to introduce the issue through discovery rather than instruction.</p>
                            </div>
                        </WorkSectionLayout>

                        {/* 02 Challenge */}
                        <WorkSectionLayout number="02" title="The Challenge">
                            <div className="space-y-8">
                                <h2>The gap between awareness and action</h2>
                                <ul className="list-decimal list-outside ml-8 space-y-3">
                                    <li>Ocean pollution awareness campaigns often rely on statistics, news, and infographics. But even when people are aware of the issue, it rarely feels personal enough to inspire action.</li>
                                    <li>Environmental issues often feel heavy and overwhelming, making it easy for people to disengage or look away.</li>
                                </ul>
                            </div>
                            <div className="space-y-8">
                                <h3 className="font-sans text-xl font-medium md:text-2xl md:leading-9">"How might we design an experience that feels lighthearted at first, but leaves players with a lasting awareness of ocean pollution?"</h3>
                            </div>
                        </WorkSectionLayout>

                        {/* 03 Solution Highlights */}
                        <WorkSectionLayout number="03" title="Solution Highlights">
                            <div className="space-y-8">
                                <p>Instead of presenting environmental messaging upfront, the experience begins as a simple fishing game.</p>
                                <div className="flex items-center gap-12">
                                    <div className="flex-1">
                                        <h4 className="font-medium mb-4">Cast your line for treasure</h4>
                                        <p>Players cast a line into the deep ocean, expecting to reel in something valuable. So far, it feels like any other fishing game.</p>
                                    </div>
                                    <div className="flex-1 relative bg-black rounded-[2rem] p-3 shadow-xl border-4 border-gray-700">
                                        <div className="rounded-[1.5rem] overflow-hidden">
                                            <video
                                            src={solution1}
                                            className="w-full"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="flex items-center gap-12">
                                    <div className="flex-1 relative bg-black rounded-[2rem] p-3 shadow-xl border-4 border-gray-700">
                                        <div className="rounded-[1.5rem] overflow-hidden">
                                            <video
                                            src={solution2}
                                            className="w-full"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-medium mb-4">A different kind of catch
                                        </h4>
                                        <p>Instead of treasure, the chest reveals ocean waste. Each catch uncovers a different piece of pollution, shifting the meaning of the game.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="flex items-center gap-12">
                                    <div className="flex-1">
                                        <h4 className="font-medium mb-4">The truth behind the catch</h4>
                                        <p>After all three catches, a marine scientist turtle delivers the full picture of what’s really happening to the ocean and why it matters.</p>
                                    </div>
                                    <div className="flex-1 relative bg-black rounded-[2rem] p-3 shadow-xl border-4 border-gray-700">
                                        <div className="rounded-[1.5rem] overflow-hidden">
                                            <video
                                                src={solution3}
                                                className="w-full"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </WorkSectionLayout>

                        {/* 04 Research */}
                        <WorkSectionLayout number="04" title="Research">
                            <div className="space-y-8">
                                <h2>Method 1: Secondary Research</h2>
                                <div className="flex gap-20 [&_img]:shadow-none [&_img]:border-none">
                                    <img src={research1} className="w-[44%]" alt="Research 1" />
                                    <img src={research2} className="w-[44%]" alt="Research 2" />
                                </div>
                                <p>Research shows that environmental serious games significantly enhance players' environmental awareness by building a sense of personal ownership — driving real behavioral change more effectively than statistics or infographics alone.</p>
                            </div>
                            <div className="space-y-8">
                                {/* Competitive Analysis */}
                                <h2>Method 2: Competitive Analysis</h2>
                                <div className="w-full overflow-x-auto border border-jb-blue/10">
                                    <table className="w-full border-collapse text-sm">
                                        <thead>
                                            <tr>
                                                <th className="w-1/4 py-4 px-4" />
                                                {["Catch Treasure", "Dumb Ways to Kill Oceans", "Coral Greef"].map((name, i) => (
                                                <th key={i} className={`py-4 px-6 text-center font-semibold ${
                                                    i === 0 ? "text-jb-blue bg-jb-blue/10" : "text-gray-800"
                                                }`}>
                                                    {name}
                                                </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { label: "Format", values: ["Fishing game", "Mini-game", "Arcade game"] },
                                                { label: "Message delivery", values: ["Revealed through play", "Upfront", "Upfront"] },
                                                { label: "Emotional approach", values: ["Surprise/contrast", "Fun/educational", "Fun/action"] },
                                                { label: "Call to action", values: ["Visit website", "Pledge", "Donate"] },
                                            ].map((row, i) => (
                                                <tr key={i} className="border-t border-dashed border-jb-blue/30">
                                                <td className="py-4 px-4 font-semibold text-gray-800">{row.label}</td>
                                                {row.values.map((val, j) => (
                                                    <td key={j} className={`py-4 px-6 text-center font-medium ${
                                                    j === 0 ? "text-jb-blue bg-jb-blue/10" : "text-gray-600"
                                                    }`}>
                                                    {val}
                                                    </td>
                                                ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <p>Unlike most ocean awareness games that present their message upfront, <span className="italic">Catch Treasure</span> introduces the issue through discovery. Players begin expecting a simple fishing game, and awareness unfolds through the experience itself.</p>
                            </div>
                        </WorkSectionLayout>

                        {/* 05 Design Process */}
                        <WorkSectionLayout number="05" title="Design Process">
                            <div className="space-y-8">
                                <h2>Sketching the flow</h2>
                                <div className="flex gap-1">
                                    <img src={sketch1} alt="Sketch-1" className="w-1/4" />
                                    <img src={sketch2} alt="Sketch-1" className="w-1/4" />
                                    <img src={sketch3} alt="Sketch-1" className="w-1/4" />
                                    <img src={sketch4} alt="Sketch-1" className="w-1/4" />
                                </div>
                            </div>
                            <div className="space-y-10">
                                <h2>Design decision</h2>
                                <SolutionCard 
                                    number="1" 
                                    title="Key design concept" 
                                    after={<>Fishing naturally creates anticipation — you never know what you'll pull up. That uncertainty made it the perfect mechanic for this game, where the gap between expectation and reality carries the message. The overall experience is designed to move players from <strong>surprise → curiosity → understanding</strong>.</>}
                                    image={designConcept} 
                                    imageClassName="w-full rounded-xl !shadow-none !border-none mx-auto"
                                    alt="Key Design Concept" 
                                />
                                <SolutionCard 
                                    number="2" 
                                    title="Designing the reveal" 
                                    after={<>The twist is revealed after the very first catch, not at the end. If players collected all three chests without knowing the truth, they might lose interest before the message comes through. By revealing it early, players understand what kind of game this is and stay curious about what comes next.<br/><br/>Each catch reveals a different type of ocean waste along with a short explanation of where it commonly comes from. These short stories connect everyday human behavior with ocean pollution.</>} 
                                    image={oceanWaste} 
                                    alt="Ocean Waste"
                                    imageClassName="w-full md:w-3/5 !shadow-none !border-none mx-auto pt-8 pb-4"
                                    zoom={false}
                                />
                                <SolutionCard 
                                    number="3" 
                                    title="Educational layer" 
                                    after="After collecting three chests, a marine scientist turtle appears to provide the bigger picture. While each catch shows a small example of pollution, the turtle explains the broader impact on ocean ecosystems and why it matters."
                                    image={turtle} 
                                    alt="Turtle Scientist" 
                                    imageClassName="w-full md:w-3/5 !shadow-none !border-none mx-auto pt-8 pb-2"
                                />
                            </div>
                            <div className="space-y-8">
                                <h2>User flow</h2>
                                <ZoomImage src={userFlow} className="w-full rounded-xl" alt="User Flow" />
                            </div>
                            <div className="space-y-8">
                                <h2>Technical Implementation</h2>
                                <ul className="list-disc list-outside ml-8 space-y-1">
                                    <li>Built with HTML, CSS, and Vanilla JavaScript</li>
                                    <li>Animations handled with GSAP</li>
                                    <li>Narrative text sequences using Typed.js</li>
                                    <li>Pixel art assets created with AI tools and edited in Photoshop</li>
                                </ul>
                            </div>
                        </WorkSectionLayout>

                        {/* 06 Final Design */}
                        <WorkSectionLayout number="06" title="Final Design">
                            <div className="space-y-8">
                                <h2 className="md:text-3xl">Final look</h2>
                                <p>Unlike static mockups, this game required live interaction to validate the design, so the final screens were built and tested directly in the browser.</p>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    {gameScreens.map(({ src, alt }) => (
                                        <ZoomImage
                                            key={alt}
                                            src={src}
                                            alt={alt}
                                            className="w-full h-full object-cover rounded-xl"
                                            wrapperClassName="rounded-xl overflow-hidden"
                                        />
                                    ))}
                                </div>
                                <div className="py-4">
                                    <h4 className="font-medium mb-4">+) Bonus</h4>
                                    <p>After the turtle scientist delivers the final message, players are prompted with a "Learn More" button that links directly to Deep Blue Rescue's WordPress site, connecting the player's experience to real-world action.</p>
                                </div>
                                <div className="flex gap-4 justify-center">
                                    <ZoomImage src={landingPage1} alt="Landing Page 1" className="w-full rounded-xl" />
                                    <ZoomImage src={landingPage2} alt="Landing Page 2" className="w-full rounded-xl" />
                                </div>
                            </div>
                        </WorkSectionLayout>

                        {/* 07 Reflection */}
                        <WorkSectionLayout number="07" title="Reflection">
                            <div className="space-y-8">
                                <h2 className="md:text-3xl">What I learned</h2>
                                <p>One of the most rewarding parts of this project was connecting previous works into something new. Combining an earlier fishing game and an ocean cleanup website into a single narrative-driven experience felt natural, and the process of building a storyline around a design concept was something I genuinely enjoyed.</p>
                                <p>This project showed me that storytelling directly shapes UX decisions. Choosing when to reveal the twist, how the character delivers the message, and what each catch uncovers were all narrative decisions as much as design decisions. The story came first, and the interaction followed.</p>
                                <p>Working solo across both design and development was challenging at times. Managing both sides meant the process took longer than expected, and without user testing, it's hard to know if the twist lands the way I intended.</p>
                            </div>
                            <div className="space-y-8">
                                <h2 className="md:text-3xl">Next steps</h2>
                                <ul className="list-disc list-outside ml-8 space-y-1">
                                    <li>Optimizing the mobile experience as the current  game is responsive but not fully polished on smaller screens.</li>
                                    <li>Running usability testing with real players to validate whether the emotional contrast is actually working.</li>
                                    <li>Adding a skip interaction so players can click to complete the typing animation instantly, reducing wait time.</li>
                                </ul>
                            </div>
                        </WorkSectionLayout>

                    </StickyNavLayout>
                </div>
            </section>
        </FadeUp>
    );
}

export default CatchTreasure;