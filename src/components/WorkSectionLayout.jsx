function WorkSectionLayout({ number, title, children }) {
    const id = `section-${number}`;

    return (
        <section
            id={id}
            data-section={id}
        >
            <span className="inline-block bg-jb-blue text-jb-white text-sm font-medium px-3 py-1 rounded-lg mb-6">
                {title}
            </span>
            <div className="space-y-24">
                {children}
            </div>
        </section>
    );
}

export default WorkSectionLayout;