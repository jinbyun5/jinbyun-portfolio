const RotatingStar = ({start}) => {
    return (
        <svg 
            viewBox="0 0 128 44" 
            preserveAspectRatio="none" 
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
        >
            <text
                fontSize="14" 
                fill="#0000FF" 
                className="star-moving"
                style={{
                    '--start': `${start}%`,
                    '--end': `${start + 100}%`
                }}
                textAnchor="middle" 
                dominantBaseline="middle"
            >
                ★
            </text>
        </svg>
    );
};

export default RotatingStar;