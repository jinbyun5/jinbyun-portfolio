function HighlightCard({ title, content }) {
    return (
        <div className="p-8 bg-jb-blue/5 rounded-xl border border-jb-blue/10 space-y-5">
            {/* Title */}
            <h5 className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-jb-blue border-b-2 border-jb-blue/30 w-fit pb-1">
                {title}
            </h5>
            
            <p className="md:text-lg">{content}</p>
      </div>
    );
  }

  export default HighlightCard;
