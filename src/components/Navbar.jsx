import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoWhite from '../assets/logo-white.svg';
import logoBlue from '../assets/logo-blue.svg';

import { ListIcon, XIcon } from '@phosphor-icons/react';

function Navbar() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setVisible(false);
                setIsOpen(false);
            } else {
                setVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 left-0 right-0 mx-auto w-full z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="px-5 md:px-12 lg:px-[6.25rem] flex justify-between items-start py-6 md:py-10 md:max-w-[1440px] md:mx-auto" >
                <Link to="/" onClick={() => setIsOpen(false)} className="group relative w-14 md:w-20">
                    <img src={logoWhite} className="transition-opacity duration-300 group-hover:opacity-0" alt="Jin Byun Logo" />
                    <img src={logoBlue} className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="Jin Byun Logo" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-12 items-center d6 uppercase">
                    <li><Link to="/about" className="relative group py-1">About<span className="nav-desktop-hover"></span></Link></li>
                    <li><Link to="/works" className="relative group py-1">Works<span className="nav-desktop-hover"></span></Link></li>
                    <li><Link to="/play" className="relative group py-1">Play!<span className="nav-desktop-hover"></span></Link></li>
                    <li><a href="/resume.pdf" target="_blank" className="border border-jb-blue bg-jb-white rounded-oval px-4 py-2 hover:bg-jb-blue hover:text-jb-white transition-all duration-300 ease-out">Resume</a></li>
                </ul>
                
                <button
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden w-10 h-10 flex justify-center items-center rounded-full border border-jb-blue"
                >
                    {isOpen ? <XIcon size={24}/> : <ListIcon size={22}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute w-full px-5 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="bg-jb-blue py-8 transition-all duration-300 ease-out shadow-2xl rounded-3xl" onClick={(e) => e.stopPropagation()}>
                    <ul className="w-full flex flex-col items-center justify-center text-jb-white uppercase gap-4 d3">
                        <li><Link to="/about" onClick={() => setIsOpen(false)} className="nav-mobile-hover">About</Link></li>
                        <li><Link to="/works" onClick={() => setIsOpen(false)} className="nav-mobile-hover">Works</Link></li>
                        <li><Link to="/play" onClick={() => setIsOpen(false)} className="nav-mobile-hover">Play!</Link></li>
                        <li className="pt-4 pb-2"><a href="/resume.pdf" target="_blank" onClick={() => setIsOpen(false)} className="d4 border border-jb-white rounded-oval px-4 py-2 hover:bg-jb-white hover:text-jb-blue transition-all duration-300 ease-out">Resume</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;