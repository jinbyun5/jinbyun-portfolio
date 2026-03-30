function HighlightCard({ icon, title, content }) {
    return (
        <div className="flex-1 bg-jb-blue/5 rounded-xl border border-jb-blue/10 shadow-md overflow-hidden">
            {/* Title */}
            <div className="flex items-center gap-2 px-7 py-3.5 border-b border-jb-blue/20">
                {icon && (
                    <div className="text-jb-accent opacity-80 border border-jb-blue/20 rounded-md p-0.5">
                        {icon}
                    </div>
                )}
                <h5 className="font-sans text-lg font-semibold text-jb-blue">
                    {title}
                </h5>
            </div>

            {/* Content */}
            <p className="px-7 py-5">{content}</p>
        </div>
    );
}

export default HighlightCard;