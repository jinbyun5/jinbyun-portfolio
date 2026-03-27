import { useState } from 'react';

import { CursorClickIcon } from '@phosphor-icons/react';

function FigmaEmbed({ src, paddingBottom }) {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative w-full bg-gray-100 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div style={{ paddingBottom }} className="relative">
                {loaded ? (
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={src}
                        allowFullScreen
                    />
                ) : (
                    <button
                        onClick={() => setLoaded(true)}
                        className="group absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-6 bg-jb-white border-2 border-dashed border-jb-brown/20 rounded-2xl cursor-pointer hover:bg-jb-blue/5 hover:border-jb-blue duration-300 transition-colors"
                    >
                        <div className="w-16 h-16 rounded-full bg-jb-blue/10 flex items-center justify-center">
                        <CursorClickIcon size={28} className="text-jb-brown/40 group-hover:text-jb-blue transition-colors" />
                        </div>
                        <p className="font-semibold text-center">Click to load prototype</p>
                    </button>
                )}
            </div>
        </div>
    );
}

export default FigmaEmbed;