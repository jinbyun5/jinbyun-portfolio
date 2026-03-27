import { useState } from 'react';
import { Link } from 'react-router-dom';

import RotatingStar from './RotatingStar';

function Footer() {

    const [isCopied, setCopied] = useState(false);
    const emailAddress = 'hyunjin8818@gmail.com';

    const handleCopy = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <footer className="flex flex-col gap-12 pt-64">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 md:px-12 lg:px-[6.25rem] max-w-[1440px] mx-auto w-full">
                <p className="font-caslon leading-[3rem] tracking-normal text-[2rem] md:text-[2.5rem] md:leading-snug">Let’s bring<br/>better ideas to life</p>

                <div className="flex justify-center items-center gap-20 lg:justify-start md:gap-40 lg:gap-32">
                    <button
                        onClick={handleCopy}
                        className="group relative border border-jb-blue rounded-oval py-2 w-32 text-center emphasis md:text-xl md:py-3 md:w-36">
                            <RotatingStar start={17}/>
                            <span className="inline-block group-hover:scale-105 group-hover:drop-shadow-[0_2px_4px_rgba(0,0,255,0.3)]">{isCopied ? "copied!" : "email"}</span>
                    </button>
                    <a
                        href="https://www.linkedin.com/in/jin-byun-b8b541322/"
                        target="_blank"
                        className="group relative border border-jb-blue rounded-oval py-2 w-32 text-center emphasis md:text-xl md:py-3 md:w-36">
                            <RotatingStar start={63}/>
                            <span className="inline-block group-hover:scale-105 group-hover:drop-shadow-[0_2px_4px_rgba(0,0,255,0.3)]">linkedin</span>
                    </a>
                </div>
            </div>

            <div className="bg-jb-blue text-jb-white font-mono py-6">
                <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center px-5 md:px-12 lg:px-[6.25rem] lg:flex-row lg:justify-between">
                    <div className="flex flex-1 justify-center items-center gap-20 uppercase text-sm tracking-wider mb-6 lg:gap-16 lg:mb-0">
                        <Link to="/about">About</Link>
                        <a href="/resume.pdf" target="_blank">Resume</a>
                        <a href="mailto:hyunjin8818@gmail.com">Contact</a>
                    </div>
                    <div className="flex-1 text-xs text-center lg:text-end">© 2026 Jin Byun</div>
                    <div className="flex-1 text-xs text-center lg:order-first lg:text-start">Built with React & Tailwind CSS</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;