function SolutionCard({ title, before, after, image, alt }) {
    return (
        <div className="rounded-xl border border-jb-blue/10 p-7 md:p-8 flex flex-col gap-4 shadow-sm">
            <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-jb-blue flex-shrink-0" />
                <h5 className="b5 md:b4">{title}</h5>
            </div>
            {before && <p>{before}</p>}
            <p>{after}</p>
            {image && <img src={image} className="w-full rounded-xl" alt={alt} />}
        </div>
    );
}

export default SolutionCard;