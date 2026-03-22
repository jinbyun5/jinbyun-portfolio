import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

import { heroStickers, plateTools } from '../data/stickers';

import { HandTapIcon, CaretDoubleDownIcon } from '@phosphor-icons/react';

function playSound(src) {
    const audioRef = useRef(null);

    const play = () => {
        if (!src) return;
        audioRef.current = new Audio(src);
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch(() => {});
    };

    const stop = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current = null;
        }
    };

    return { play, stop };
}

// Stickers
function CameraSticker({ sticker }) {
    const [hovered, setHovered] = useState(false);
    const { play, stop } = playSound(sticker.audio);
    const [dragging, setDragging] = useState(false);

    return (
        <motion.div
            drag
            dragMomentum={false}
            className={`absolute ${sticker.className} cursor-grab active:cursor-grabbing select-none`}
            style={{ rotate: `${sticker.rotate}deg`, scale: hovered ? 1.05 : 1 }}
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
            onMouseEnter={() => { if (dragging) return; setHovered(true); play(); }}
            onMouseLeave={() => { setHovered(false); stop(); }}
        >
            <div className="relative flex flex-col items-start">
                <img
                    src={sticker.src}
                    alt="film camera"
                    className={`w-full drop-shadow-md transition-transform duration-300 ${hovered ? 'rotate-[-6deg]' : 'rotate-[-15deg]'}`}
                    draggable={false}
                />
                <img
                    src={sticker.filmSrc}
                    alt="film roll"
                    className={`w-1/2 drop-shadow-md transition-transform duration-300 -mt-8 -ml-8 ${hovered ? '-rotate-[8deg]' : 'rotate-0'}`}
                    draggable={false}
                />
            </div>
        </motion.div>
    );
}

function PlateSticker({ sticker }) {
    const [hovered, setHovered] = useState(false);
    const { play, stop } = playSound(sticker.audio);
    const [dragging, setDragging] = useState(false);

    return (
        <motion.div
            drag
            dragMomentum={false}
            className={`absolute ${sticker.className} cursor-grab active:cursor-grabbing select-none`}
            style={{ rotate: `${sticker.rotate}deg` }}
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
            onMouseEnter={() => { if (dragging) return; setHovered(true); play(); }}
            onMouseLeave={() => { setHovered(false); stop(); }}
        >
            <div className={`relative transition-transform duration-200 ${hovered ? 'scale-105 rotate-6' : 'scale-100'}`}>
                <img
                    src={sticker.src}
                    alt="plate"
                    className="w-full drop-shadow-md"
                    draggable={false}
                />

                {plateTools.map((tool, i) => (
                    <div
                        key={tool.id}
                        className="absolute transition-all duration-500 ease-out"
                        style={{
                            left: `calc(50% - 14px)`,
                            top: `calc(50% - 14px)`,
                            transform: hovered
                                ? `translate(${tool.x * 1.6}px, ${tool.y * 1.6 - 24}px)`
                                : `translate(${tool.x}px, ${tool.y}px)`,
                            transitionDelay: `${i * 30}ms`,
                        }}
                    >
                        <img
                            src={tool.src}
                            alt={tool.label}
                            title={tool.label}
                            className="w-6 h-6 object-contain drop-shadow-sm"
                            draggable={false}
                        />
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

function MessageSticker({ sticker }) {
    const [hovered, setHovered] = useState(false);
    const { play, stop } = playSound(sticker.audio);
    const [dragging, setDragging] = useState(false);

    const Reactions = ['❤️', '👍', '😂', '✨', '🔥'];

    return (
        <motion.div
            drag
            dragMomentum={false}
            className={`absolute ${sticker.className} cursor-grab active:cursor-grabbing select-none`}
            style={{ rotate: `${sticker.rotate}deg` }}
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
            onMouseEnter={() => { if (dragging) return; setHovered(true); play(); }}
            onMouseLeave={() => { setHovered(false); stop(); }}
        >
            {/* iMessage reaction bubble */}
            <div className={`absolute -top-12 left-1/2 -translate-x-1/2 transition-all duration-300 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
                <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-2 flex gap-1.5 items-center shadow-xl">
                    {Reactions.map((emoji) => (
                        <span
                            key={emoji}
                            className="text-xl hover:scale-125 transition-transform duration-150 cursor-pointer"
                        >
                            {emoji}
                        </span>
                    ))}
                </div>
                {/* bubble tail */}
                <div className="w-2.5 h-2.5 bg-white/95 border-r border-b border-gray-200 rotate-45 mx-auto -mt-1.5"></div>
            </div>

            <div className={`transition-transform duration-300 ${hovered ? 'scale-105' : 'scale-100'}`}>
                <img
                    src={sticker.src}
                    alt="iMessage"
                    className="w-full drop-shadow-md"
                    draggable={false}
                />
            </div>
        </motion.div>
    );
}

function BookSticker({ sticker }) {
    const [hovered, setHovered] = useState(false);
    const { play, stop } = playSound(sticker.audio);
    const [dragging, setDragging] = useState(false);

    return (
        <motion.div
            drag
            dragMomentum={false}
            className={`absolute ${sticker.className} cursor-grab active:cursor-grabbing select-none`}
            style={{ rotate: `${sticker.rotate}deg` }}
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
            onMouseEnter={() => { if (dragging) return; setHovered(true); play(); }}
            onMouseLeave={() => { setHovered(false); stop(); }}
        >
            <div className={`transition-transform duration-300 ${hovered ? 'scale-105 -rotate-6' : 'scale-100'}`}>
                <img
                    src={sticker.src}
                    alt="open book"
                    className="w-full drop-shadow-md"
                    draggable={false}
                />
            </div>
        </motion.div>
    );
}

function VinylSticker({ sticker }) {
    const [hovered, setHovered] = useState(false);
    const { play, stop } = playSound(sticker.audio);
    const [dragging, setDragging] = useState(false);

    return (
        <motion.div
            drag
            dragMomentum={false}
            className={`absolute ${sticker.className} cursor-grab active:cursor-grabbing select-none`}
            style={{ rotate: `${sticker.rotate}deg` }}
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
            onMouseEnter={() => { if (dragging) return; setHovered(true); play(); }}
            onMouseLeave={() => { setHovered(false); stop(); }}
        >
            <div className={`transition-transform duration-300 ${hovered ? 'scale-105 rotate-6' : 'scale-100'}`}>
                <img
                    src={sticker.turntableSrc}
                    alt="turntable"
                    className="w-full drop-shadow-md"
                    draggable={false}
                />
                <img
                    src={sticker.src}
                    alt="vinyl"
                    className="absolute top-[7%] left-[4%] w-[71%] animate-spin-slow"
                    draggable={false}
                />
            </div>
        </motion.div>
    );
}

function CatSticker({ sticker }) {
    const [hovered, setHovered] = useState(false);
    const { play, stop } = playSound(sticker.audio);
    const [dragging, setDragging] = useState(false);

    return (
        <motion.div
            drag
            dragMomentum={false}
            className={`absolute ${sticker.className} cursor-grab active:cursor-grabbing select-none`}
            style={{ rotate: `${sticker.rotate}deg` }}
            onDragStart={() => setDragging(true)}
            onDragEnd={() => setDragging(false)}
            onMouseEnter={() => { if (dragging) return; setHovered(true); play(); }}
            onMouseLeave={() => { setHovered(false); stop(); }}
        >
            {/* open to work badge */}
            <div className={`absolute -top-10 left-10 md:left-20 whitespace-nowrap transition-all duration-300 ${hovered ? 'opacity-100 -translate-y-1' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <span className="bg-jb-blue text-jb-white text-xs font-mono px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block"></span>
                    Open to work
                </span>
            </div>

            <div className={`transition-transform duration-300 ${hovered ? 'scale-105' : 'scale-100'}`}>
                <img
                    src={sticker.src}
                    alt="cat sticker"
                    className="w-full drop-shadow-md rotate-[24deg]"
                    draggable={false}
                />
            </div>
        </motion.div>
    );
}

function StickerItem({ sticker }) {
    switch (sticker.type) {
        case 'camera':  return <CameraSticker  sticker={sticker} />;
        case 'plate':   return <PlateSticker   sticker={sticker} />;
        case 'message': return <MessageSticker sticker={sticker} />;
        case 'book':    return <BookSticker    sticker={sticker} />;
        case 'vinyl':   return <VinylSticker   sticker={sticker} />;
        case 'cat':     return <CatSticker     sticker={sticker} />;
        default:        return null;
    }
}

function HeroSection() {
    const [index, setIndex] = useState(0);
    const [nameHovered, setNameHovered] = useState(false);

    const keywords = ['ux/ui', 'product', 'interaction', 'visual', 'web'];

    // Change the keywords
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % keywords.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-screen h-screen flex flex-col justify-center items-center border-b border-dashed border-jb-blue/50 overflow-hidden pb-20 left-1/2 -translate-x-1/2">

            {heroStickers.map((sticker) => (
                <StickerItem key={sticker.id} sticker={sticker} />
            ))}

            <div className="flex flex-col justify-center items-center gap-6">
                <div className="hidden font-mono text-sm text-gray-400 md:flex items-center gap-1.5 tracking-wide">
                    <span><HandTapIcon size={18}/></span> click to play
                </div>
                <div className="flex flex-col justify-center items-center gap-10 text-center z-10 pointer-events-none">

                    <div
                        className="relative flex flex-col items-center gap-2 pointer-events-auto cursor-default"
                        onMouseEnter={() => setNameHovered(true)}
                        onMouseLeave={() => setNameHovered(false)}
                    >
                        <div className={`absolute -top-14 -left-12 z-20 font-mono text-xs md:text-sm bg-jb-blue text-jb-white py-1 px-3 md:px-4 -rotate-[8deg] w-fit transition-all duration-300 ease-out ${nameHovered ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0 md:opacity-0 md:translate-y-3 md:pointer-events-none'}`}>
                            Based in Vancouver
                        </div>

                        <h1 className={`emphasis font-medium text-4xl md:text-6xl transition-transform duration-200 ${nameHovered ? 'scale-105' : 'scale-100'}`}>Jin Byun</h1>
                    </div>

                    <p className="d6 leading-8 md:d5 md:leading-8 max-w-64 md:max-w-xl">
                        A UX/UI designer with a front-end background, creating practical and user-centered experiences.
                    </p>

                    <div className="d6 md:d5 flex justify-center items-center gap-4 md:gap-6 mt-2 pointer-events-auto">
                        <span>I'm a</span>
                        <span className="inline-flex items-center justify-center border border-jb-blue rounded-full w-32 h-9 leading-none md:w-32 md:h-10">
                            <span key={index} className="emphasis text-lg md:text-xl animate-fade-in-out">
                                {keywords[index]}
                            </span>
                        </span>
                        <span>designer.</span>
                    </div>
                </div>
            </div>

            {/* scroll chevron */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 animate-bounce opacity-40">
                <CaretDoubleDownIcon size={24}/>
            </div>
        </section>
    );
}

export default HeroSection;