const SurveyChart = ({ question, data }) => {

    const maxCount = Math.max(...data.map((item) => item.count));
  
    return (
        <div className="bg-neutral-50 p-6 rounded-2xl">
            <h3 className="text-xl font-sans font-medium mb-8 flex gap-3">
                <span className="text-jb-blue">Q.</span>
                {question}
            </h3>
    
            <div className="space-y-3">
                {data.map((item, index) => {
                    const relativeWidth = (item.count / maxCount) * 100;
        
                    return (
                        <div key={index} className="flex items-center gap-3">
                            {/* Label */}
                            <div className="w-1/3 text-right text-xs md:text-sm font-medium leading-tight text-jb-brown/70 shrink-0">
                                {item.label}
                            </div>
            
                            {/* Bar Chart */}
                            <div className="flex-1">
                                <div
                                    className="bg-jb-brown/80 text-white flex items-center justify-end px-4 py-2 rounded-lg transition-all duration-1000 ease-out"
                                    style={{
                                        width: `${relativeWidth}%`,
                                        minWidth: "fit-content",
                                    }}
                                >
                                    <span className="text-[11px] md:text-xs font-light whitespace-nowrap">
                                        {item.count} ({item.percent})
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SurveyChart;