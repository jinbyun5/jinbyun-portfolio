const ToggleTabs = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="border border-jb-blue/10 shadow-inner rounded-full p-1 md:p-1.5 w-fit mx-auto">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    onClick={() => onTabChange(tab.key)}
                    className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-200
                        ${activeTab === tab.key
                            ? 'bg-jb-blue text-jb-white'
                            : 'text-jb-blue'}`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default ToggleTabs;