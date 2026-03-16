function HighlightCard({ icon, title, content }) {
    return (
        <div className="flex-1 p-7 md:p-8 bg-[#efeff3] rounded-xl border border-jb-blue/5 space-y-5 shadow-md">
            {/* Title */}
            <div className="flex items-end gap-3">
                {icon && (
                    <div className="text-jb-accent opacity-80 border border-jb-blue/20 rounded-md p-0.5">
                        {icon}
                    </div>
                )}
                <h5 className="font-sans text-sm font-bold uppercase tracking-[0.15em] text-jb-blue border-b-2 border-jb-blue/30 w-fit pb-1.5">
                    {title}
                </h5>
            </div>

            {/* Content */}
            <p className="md:text-lg">{content}</p>
        </div>
    );
}

export default HighlightCard;