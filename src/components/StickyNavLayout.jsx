import { Children, useEffect, useRef, useState } from 'react';
import { CaretRightIcon } from '@phosphor-icons/react';

function StickyNavLayout({ children }) {
    const [activeSection, setActiveSection] = useState(null);
    const articleRef = useRef(null);

    const sections = Children.toArray(children).map(child => ({
        id: `section-${child.props.number}`,
        label: child.props.title,
    }));

    useEffect(() => {
        if (!articleRef.current) return;
        if (sections.length > 0) setActiveSection(sections[0].id);

        const els = articleRef.current.querySelectorAll('[data-section]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.dataset.section);
                    }
                });
            },
            { threshold: 0.2 }
        );

        els.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="grid grid-cols-4 md:grid-cols-12">
            {/* Sticky sidebar nav */}
            <aside className="hidden md:block md:col-span-3">
                <nav className="sticky top-20 py-32 space-y-5">
                    {sections.map(({ id, label }) => {
                        const isActive = activeSection === id;
                        return (
                            <button
                                key={id}
                                onClick={() => scrollTo(id)}
                                className="flex items-center gap-2 text-left w-fit"
                            >
                                <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-jb-white flex-shrink-0 transition-colors duration-200 ${isActive ? 'bg-jb-blue border-jb-blue' : 'bg-jb-blue/20 border-jb-blue/10'}`}>
                                    <CaretRightIcon
                                        size={12}
                                        className={`transition-colors duration-200 ${isActive ? 'text-white' : 'text-jb-blue/20'}`}
                                    />
                                </span>
                                <span className={`text-base font-semibold transition-colors duration-200 ${isActive ? 'text-jb-blue' : 'text-jb-blue/30'}`}>
                                    {label}
                                </span>
                            </button>
                        );
                    })}
                </nav>
            </aside>

            {/* Content */}
            <article
                ref={articleRef}
                className="col-span-4 md:col-span-9 space-y-32 py-32 [&_p]:md:text-lg [&_p]:md:text-jb-brown/80 [&_p]:md:leading-[1.875rem] [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-medium [&_li]:md:text-jb-brown/80 [&_img]:border [&_img]:border-jb-blue/5 [&_img]:shadow-md [&_li]:md:text-lg"
            >
                {children}
            </article>
        </div>
    );
}

export default StickyNavLayout;