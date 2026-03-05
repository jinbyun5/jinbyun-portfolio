function ProjectHeader({ titleLine1, titleLine2, subtitle, tags, tools, role, timeline, industry }) {
    return (
        // Header
        <header className="col-span-4 md:col-span-12 grid grid-cols-4 md:grid-cols-12 items-end gap-x-4">
            <div className="col-span-4 md:col-span-6">
                <div className="flex flex-col gap-6 text-center md:text-start">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="mobile-tag">{tag}</span>
                        ))}
                    </div>
                    <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl md:pb-4">
                        <span className="md:block">{titleLine1} </span>
                        <span className="md:block md:mt-2">{titleLine2}</span>
                    </h1>
                    <p className="text-gray-500 md:text-lg">{subtitle}</p>
                </div>
            </div>

            {/* Project Info */}
            <div className="col-span-4 md:col-span-5 md:col-start-8 md:mt-0 space-y-6 mt-12">
                {[
                    { label: 'TOOLS', value: tools },
                    { label: 'ROLE', value: role },
                    { label: 'TIMELINE', value: timeline },
                    { label: 'INDUSTRY', value: industry },
                ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between border-b border-gray-300 pb-2">
                        <h6 className="font-sans md:text-lg font-bold tracking-wider">{label}</h6>
                        <p>{value}</p>
                    </div>
                ))}
            </div>
        </header>
    );
}

export default ProjectHeader;