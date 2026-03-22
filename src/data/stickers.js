import heroCamera from '../assets/hero/camera.webp';
import heroFilm from '../assets/hero/film.webp';
import heroPlate from '../assets/hero/plate.webp';
import heroBook from '../assets/hero/book.webp';
import heroMessage from '../assets/hero/imessage.webp';
import heroCat from '../assets/hero/cat.webp';
import heroVinyl from '../assets/hero/vinyl.webp';
import heroTurntable from '../assets/hero/vinyl-turntable.webp';
 
import toolFigma from '../assets/tools/figma.webp';
import toolPhotoshop from '../assets/tools/photoshop.webp';
import toolIllustrator from '../assets/tools/illustrator.webp';
import toolReact from '../assets/tools/react.webp';
import toolCss from '../assets/tools/css.webp';
import toolHtml from '../assets/tools/html.webp';
import toolCanva from '../assets/tools/canva.webp';
 
import sfxCamera from '../assets/audio/sfx-camera.mp3';
import sfxPlate from '../assets/audio/sfx-plate.mp3';
import sfxBook from '../assets/audio/sfx-book.mp3';
import sfxMessage from '../assets/audio/sfx-imessage.mp3';
import sfxCat from '../assets/audio/sfx-cat.mp3';
import vinylTurntable from '../assets/audio/vinyl-turntable.mp3';
 
export const plateTools = [
    { id: 'figma', src: toolFigma, label: 'Figma', x: -28, y: -18 },
    { id: 'photoshop', src: toolPhotoshop, label: 'Photoshop', x: 2, y: -32 },
    { id: 'illustrator', src: toolIllustrator, label: 'Illustrator', x: 36, y: -24 },
    { id: 'react', src: toolReact, label: 'React', x: -18, y: 10 },
    { id: 'css', src: toolCss, label: 'CSS', x: 10, y: 0 },
    { id: 'html', src: toolHtml, label: 'HTML', x: 40, y: 8 },
    { id: 'canva', src: toolCanva, label: 'Canva', x: 10, y: 32 },
];
 
export const heroStickers = [
    {
        id: 'camera',
        type: 'camera',
        src: heroCamera,
        filmSrc: heroFilm,
        audio: sfxCamera,
        className: 'hidden md:block top-[16%] left-[20%] w-24 md:w-36 lg:w-36',
        rotate: 15,
    },
    {
        id: 'plate',
        type: 'plate',
        src: heroPlate,
        audio: sfxPlate,
        className: 'top-[68%] left-[5%] md:top-[38%] md:left-[0%] w-36 lg:w-44',
        rotate: -8,
    },
    {
        id: 'message',
        type: 'message',
        src: heroMessage,
        audio: sfxMessage,
        className: 'bottom-[10%] md:bottom-[12%] md:left-[16%] w-32 md:w-36 lg:w-44',
        rotate: 0,
    },
    {
        id: 'book',
        type: 'book',
        src: heroBook,
        audio: sfxBook,
        className: 'hidden md:block bottom-[14%] left-[48%] w-24 md:w-40 lg:w-48',
        rotate: -2,
    },
    {
        id: 'vinyl',
        type: 'vinyl',
        src: heroVinyl,
        turntableSrc: heroTurntable,
        audio: vinylTurntable,
        className: 'hidden md:block top-[20%] right-[12%] w-24 md:w-44 lg:w-48',
        rotate: 0,
    },
    {
        id: 'cat',
        type: 'cat',
        src: heroCat,
        audio: sfxCat,
        className: 'bottom-[14%] right-[5%] md:bottom-[20%] md:right-[12%] w-40 lg:w-48',
        rotate: 0,
    },
];