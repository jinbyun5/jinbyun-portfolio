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
                <p className="font-caslon leading-[3rem] tracking-normal text-[2.4rem] md:text-[3rem] md:leading-snug">Let’s bring<br/>better ideas to life</p>

                <div className="flex justify-center items-center gap-20 lg:justify-start md:gap-40">
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
                <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center px-5 md:px-12 lg:px-[6.25rem] lg:flex-row lg:justify-between gap-4">
                    <div className="flex flex-1 justify-center items-center gap-20 uppercase text-sm tracking-wider lg:gap-16">
                        <Link to="/about">About</Link>
                        <a href="/resume.pdf" target="_blank">Resume</a>
                        <a href="mailto:hyunjin8818@gmail.com">Contact</a>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <a href="https://github.com/jinbyun5" target="_blank" rel="noopener noreferrer">
                            <svg
                                viewBox="0 0 1024 1024"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 p-0.5 fill-current border-[0.5px] border-jb-white text-jb-blue bg-jb-white rounded-md hover:text-jb-white hover:bg-jb-blue transition-all duration-200"
                            >
                                <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                                transform="scale(64)"
                                />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/jin-byun-b8b541322/" target="_blank" rel="noopener noreferrer">
                            <svg
                                viewBox="0 0 310 310"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 p-1 fill-current border-[0.5px] border-jb-white text-jb-blue bg-jb-white rounded-md hover:text-jb-white hover:bg-jb-blue transition-all duration-200"
                            >
                                <g id="XMLID_801_">
                                <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73C77.16,101.969,74.922,99.73,72.16,99.73z"/>
                                <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"/>
                                <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995C310,145.43,300.549,94.761,230.454,94.761z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-col items-center lg:items-start justify-center lg:order-first">
                        <div className="text-xs">© 2026 Jin Byun</div>
                        <div className="text-xs">Built with React & Tailwind</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;