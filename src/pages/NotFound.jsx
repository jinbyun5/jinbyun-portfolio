import { useNavigate } from 'react-router-dom';

import { HouseLineIcon } from '@phosphor-icons/react';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-[20vh] text-center gap-4 mt-28">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-2xl font-medium">Page Not Found</p>
        <p className="text-jb-blue/60">Sorry, the page you are looking for could not be found.</p>
        <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 mt-4 px-6 py-3 border bg-jb-blue text-jb-white rounded-oval hover:border-jb-blue hover:bg-jb-blue/30 hover:text-jb-blue transition-colors"
        >
            <HouseLineIcon/>Return Home
        </button>
        </div>
    );
}

export default NotFound;