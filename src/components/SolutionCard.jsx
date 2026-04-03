import ZoomImage from "./ZoomImage";

function SolutionCard({ number, title, before, after, image, alt, imageClassName, zoom = true }) {
    return (
        <div className="rounded-xl border border-jb-blue/10 bg-jb-white shadow-inner overflow-hidden">
            {/* Title */}
            <div className="flex items-center gap-3 px-7 py-5 border-b border-jb-blue/10">
                <div className="w-7 h-7 rounded-full bg-jb-blue flex items-center justify-center flex-shrink-0">
                    <span className="text-jb-white text-xs font-bold">{number}</span>
                </div>
                <h5 className="b5 md:b4">{title}</h5>
            </div>

            {/* Content */}
            <div className="px-7 py-5 flex flex-col gap-4">
                {before && <p>{before}</p>}
                <p>{after}</p>
                {image && zoom ? (
                    <ZoomImage src={image} className={imageClassName || "w-full rounded-xl"} alt={alt} />
                ) : (
                    <img src={image} className={imageClassName || "w-full rounded-xl"} alt={alt} />
                )}
            </div>
        </div>
    );
}

export default SolutionCard;