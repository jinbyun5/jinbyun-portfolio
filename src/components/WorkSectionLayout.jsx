function WorkSectionLayout({ number, title, children }) {
    return (
        <section className="grid grid-cols-4 md:grid-cols-12 items-start space-y-8 md:space-y-4">
            {/* Sticky Heading */}
            <div className="col-span-4 md:col-span-3 sticky top-20">
                <h5 className="font-sans text-sm md:text-base font-bold uppercase tracking-[0.15em] text-jb-blue border-t border-dashed border-jb-blue/50 pt-4 flex md:flex-col gap-1">
                    <span>{number}</span>
                    <span className="-ml-0.5 md:hidden">.</span>
                    <span>{title}</span>
                </h5>
            </div>
  
            {/* Content */}
            <div className="col-span-4 md:col-span-8 md:col-start-5 space-y-8 [&_p]:md:text-lg [&_h4]:font-medium [&_h5]:font-medium ">
                {children}
            </div>
        </section>
    );
}

export default WorkSectionLayout;