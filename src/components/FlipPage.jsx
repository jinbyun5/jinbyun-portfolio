import { forwardRef } from 'react';

import { motion } from 'motion/react';

import { CaretDoubleLeftIcon, CaretDoubleRightIcon } from '@phosphor-icons/react';

const FlipPage = forwardRef(({ image, title, text, isLeft, isLast, isTwoPage }, ref) => {

    return (
        <div ref={ref} className={`bg-white border-gray-200 overflow-hidden flex flex-col rounded-xl md:rounded-none ${isLeft ? 'md:rounded-l-xl' : 'md:rounded-r-xl'}`}>
            <img src={image} className="w-full aspect-[4/3] object-cover mb-6" />
            <div className="px-6 flex flex-col gap-2">
                <p className="d6 text-xs  tracking-widest underline underline-offset-2">{title}</p>
                <p className="d6 text-sm text-jb-brown leading-relaxed">{text}</p>
                {(!isTwoPage || (!isLeft && !isLast) || (isTwoPage && isLast && isLeft)) && (
                <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute bottom-6 left-6 right-6 flex items-center gap-2 text-xs font-mono tracking-widest mt-2 ${isLast ? 'justify-start' : 'justify-end'}`}
                >
                    {isLast ? (
                        <>
                            <CaretDoubleLeftIcon />
                            <p className="d6 text-xs">click to flip</p>
                        </>
                    ) : (
                        <>
                            <p className="d6 text-xs">click to flip</p>
                            <CaretDoubleRightIcon />
                        </>
                    )}
                </motion.div>
                )}
            </div>
        </div>
    );
});

FlipPage.displayName = 'FlipPage';

export default FlipPage;
