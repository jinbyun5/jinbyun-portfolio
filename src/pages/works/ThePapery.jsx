import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { ArrowLeftIcon, ArrowsInIcon, BookmarksIcon, GpsSlashIcon, CheckIcon, CursorClickIcon, TimerIcon, FigmaLogoIcon, SparkleIcon, NetworkIcon, WavesIcon } from '@phosphor-icons/react';

import FadeUp from '../../components/FadeUp';
import ZoomImage from '../../components/ZoomImage';
import ProjectHeader from '../../components/ProjectHeader';
import StickyNavLayout from '../../components/StickyNavLayout';
import WorkSectionLayout from '../../components/WorkSectionLayout';
import HighlightCard from '../../components/HighlightCard';
import StatCard from '../../components/StatCard';
import ToggleTabs from '../../components/ToggleTabs';
import SolutionCard from '../../components/SolutionCard';
import FigmaEmbed from '../../components/FigmaEmbed';
import ProjectCard from '../../components/ProjectCard';

import { projects } from '../../data/projects';

import heroImage from '../../assets/the-papery/hero-image.webp';
import persona from '../../assets/the-papery/user-persona.webp';
import empathyMap from '../../assets/the-papery/empathy-map.webp';
import journeyMap from '../../assets/the-papery/journey-map.webp';
import bookmarkFlow from '../../assets/the-papery/userflow-bookmark.webp';
import checkoutFlow from '../../assets/the-papery/userflow-checkout.webp';
import initialfiWireframes from '../../assets/the-papery/initial-wireframes2.webp';
import styleguide from '../../assets/the-papery/style-guide.webp';
import solution1 from '../../assets/the-papery/solution-1.webp';
import solution2 from '../../assets/the-papery/solution-2.webp';
import solution3 from '../../assets/the-papery/solution-3.webp';

function ThePapery() {

    const [activeUserflow, setActiveUserflow] = useState('bookmark');
    
    const project = projects.find(p => p.slug === 'the-papery');
    const otherProjects = projects.filter(p => p.slug !== 'the-papery');

    return (
        <FadeUp>
            <section className="w-full py-16 text-jb-brown">
                <div className="grid grid-cols-4 md:grid-cols-12">

                    {/* Link to All Works */}
                    <nav className="col-span-4 md:col-span-12 mb-10">
                        <Link 
                            to="/works" 
                            className="group flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-all hover:text-jb-blue"
                        >
                            <ArrowLeftIcon size={20}/>
                            <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-1">All Works</span>
                        </Link>
                    </nav>

                    {/* Header */}
                    <ProjectHeader {...project} />

                    {/* Thumbnail Image */}
                    <figure className="col-span-4 md:col-span-12 pt-16 md:pt-20">
                        <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden">
                            <img 
                                src={heroImage}
                                alt="The Papery Website Design Overview" 
                                className="w-full h-full object-cover object-center" 
                            />
                        </div>
                    </figure>

                    <div className="col-span-4 md:col-span-12 flex items-center justify-center py-16">
                        <a 
                            href="https://embed.figma.com/proto/htjDnzk9yXggt7GvEzx23P/The-Papery--Revision-?page-id=2258%3A3440&node-id=2258-3441&p=f&viewport=-7%2C166%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2258%3A3441&embed-host=share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-jb-white border border-jb-blue text-jb-blue text-lg rounded-full py-2 px-5 whitespace-nowrap transition-all duration-300 hover:bg-jb-blue hover:text-jb-white shadow-lg flex items-center gap-2"
                        >
                            <FigmaLogoIcon size={20} />
                            View in Figma
                        </a>
                    </div>
                </div>

                {/* Project Content */}
                <div className="border border-dashed border-jb-blue/50 bg-jb-white rounded-2xl -mx-5 md:-mx-12 lg:-mx-[6.25rem] px-5 md:px-12 lg:px-[6.25rem]">
                    <StickyNavLayout>

                        {/* 01 Project Overview */}
                        <WorkSectionLayout number="01" title="Project Overview">
                            <div className="space-y-8">
                                <h2>Turning usability insights into a seamless shopping experience</h2>
                                <p>The Papery is a concept e-commerce website for a stationery brand designed to demonstrate the full UX design process, from initial research to iterative improvement through usability testing. The primary goal is to design a complete end-to-end shopping flow, from product discovery to checkout, and learn how to make informed design decisions based on real user feedback.</p>
                            </div>
                        </WorkSectionLayout>

                        {/* 02 The Challenge */}
                        <WorkSectionLayout number="02" title="The Challenge">
                            <div className="space-y-8">
                                <h2>Overloaded pages turned simple shopping into a struggle</h2>
                                <p>Based on my research on existing stationery platforms such as Muji and Indigo, I identified several pain points that disrupt the shopping experience despite their success. Pages were overloaded with information, making it hard to know where to focus. Visual hierarchy was unclear, and unnecessary extra steps interrupted the natural user flow.</p>
                                <h3 className="font-sans text-xl font-medium md:text-2xl md:leading-9 py-6">"How might we design a seamless shopping flow that minimizes friction and supports confident purchasing decisions?"</h3>
                                <p>To address these issues, I defined three key goals:</p>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <HighlightCard 
                                        icon={<SparkleIcon size={24} />}
                                        title="Clarity"
                                        content="Simplify information by prioritizing content to reduce visual noise"
                                    />
                                    <HighlightCard
                                        icon={<NetworkIcon size={24} />}
                                        title="Hierarchy"
                                        content="Guide users to key actions through clear visual hierarchy"
                                    />
                                    <HighlightCard  
                                        icon={<WavesIcon size={24} />}
                                        title="Flow"
                                        content="Streamline the shopping path with minimal interruptions"
                                    />
                                </div>
                            </div>
                        </WorkSectionLayout>

                        {/* 03 User Research */}
                        <WorkSectionLayout number="03" title="User Research">
                            <div className="space-y-8">
                                <h2>Understanding the user</h2>
                                <p>To ground my design decisions in real user needs, I conducted user research through a persona, scenario, empathy map, and journey map.</p>
                                <p className="italic">"Olivia Bennett is a 22-year-old university student in Vancouver who wants to refresh her stationery collection after finishing her final exams. While browsing Pinterest, she discovers The Papery through a moodboard and is drawn in by the clean layout and calming product photos. She explores curated categories, bookmarks a few items, and checks reviews and lifestyle photos. Reassured by the brand story and aesthetic values, she adds three items to her cart and checks out easily using Apple Pay."</p>
                                <div className="flex flex-col md:flex-row gap-[2%]">
                                    <ZoomImage src={persona} wrapperClassName="w-full md:w-[49%]" className="w-full rounded-xl aspect-[4/3]" alt="User Persona" />
                                    <ZoomImage src={empathyMap} wrapperClassName="w-full md:w-[49%]" className="w-full rounded-xl object-cover aspect-[4/3]" alt="Empathy Map" />
                                </div>
                                <ZoomImage src={journeyMap} wrapperClassName="w-full" className="rounded-xl" alt="User Journey Map" />
                            </div>
                            <div className="space-y-8">
                                <h2>Key insights</h2>
                                <p>Based on my analysis of user behavior and the pain points identified in competitor sites, I found three critical areas for improvement.</p>
                                <div className="flex gap-4">
                                    <HighlightCard
                                    icon={<ArrowsInIcon size={24} />}
                                    title="Information Overload" 
                                    content="Users feel frustrated when a website tries to show everything at once. They need a clean layout that helps them focus without visual distractions."
                                />
                                    <HighlightCard
                                        icon={<BookmarksIcon size={24} />}
                                        title="Bookmark Friction" 
                                        content="Many users like to bookmark items to decide later. However, if the process requires extra steps or forced logins, they often abandon the site before reaching the cart."
                                    />
                                    <HighlightCard
                                        icon={<GpsSlashIcon size={24} />}
                                        title="Navigation Fatigue" 
                                        content="When categories are poorly organized or buttons aren't clearly visible, users spend more energy searching for the path rather than choosing products."
                                    />
                                </div>
                            </div>
                        </WorkSectionLayout>

                        {/* 04 Design Process */}
                        <WorkSectionLayout number="04" title="Design Process">
                            <div className="space-y-8">
                                <h2>Mapping the flow</h2>
                                <p>Based on the research findings and user flow, I created low-fidelity wireframes to establish the layout and structure of each key screen.</p>
                                <ToggleTabs
                                    tabs={[
                                        { key: 'bookmark', label: 'Bookmark Flow' },
                                        { key: 'checkout', label: 'Checkout Flow' },
                                    ]}
                                    activeTab={activeUserflow}
                                    onTabChange={setActiveUserflow}
                                />
                                {activeUserflow === 'bookmark' 
                                    ? <ZoomImage src={bookmarkFlow} className="w-full rounded-xl" alt="Bookmark Flow" />
                                    : <ZoomImage src={checkoutFlow} className="w-full rounded-xl" alt="Checkout Flow" />
                                }
                            </div>
                            <div className="space-y-8">
                                <h2>Visual designs</h2>
                                <ZoomImage src={styleguide} className="w-full rounded-xl" alt="Style Guide" />
                            </div>
                            <div className="space-y-8">
                                <h2>Starting with initial drafts</h2>
                                <p>I started with early wireframes and prototypes, leaving room for iteration based on user testing findings.</p>
                                <ZoomImage src={initialfiWireframes} className="w-full rounded-xl" alt="Initial Wireframes" />
                            </div>
                        </WorkSectionLayout>

                        {/* 05 Usability Testing */}
                        <WorkSectionLayout number="05" title="Usability Testing">
                            <div className="space-y-8">
                                <h2>Validating my ideas</h2>
                                <p>To evaluate the design, I conducted an unmoderated usability testing using Maze with 13 participants. The test consisted of six screen-based tasks followed by an open-ended question to gather qualitative feedback.</p>
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="font-medium text-xl md:text-2xl">Test goals</h3>
                                        <ul className="list-disc list-outside ml-8 space-y-1">
                                            <li>Can users quickly find a specific product while browsing?</li>
                                            <li>Can users easily save items and access them later?</li>
                                            <li>Can users complete the checkout process without confusion?</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="font-medium text-xl md:text-2xl">Results overview</h3>
                                        <p>While all tasks were completed successfully, the high misclick rates revealed that users struggled to navigate to specific products and understand whether their actions had been completed.</p>
                                        <div className="flex flex-col md:flex-row gap-3 pt-2">
                                            <StatCard icon={<CheckIcon size={20} />} number="100%" description="Success rate across all tasks" />
                                            <StatCard icon={<CursorClickIcon size={20} />} number="63.7%" description="Misclick rate on Find a product" color="accent" />
                                            <StatCard icon={<CursorClickIcon size={20} />} number="74.5%" description="Misclick rate on Add to cart" color="accent" />
                                            <StatCard icon={<TimerIcon size={20} />} number="28.6s" description="Average duration on Find a product" color="accent" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </WorkSectionLayout>

                        {/* 06 Iterations */}
                        <WorkSectionLayout number="06" title="Iterations & Solutions">
                            <div className="space-y-8">
                                <h2>Reshaping the experience into solutions</h2>
                                <p>From the usability testing, key issues emerged. Beyond the test findings, I also revisited the save flow and identified additional areas for improvement. Based on all of this, I refined the shopping flow by improving navigation clarity, streamlining the save and checkout flow, and adding interaction feedback.</p>
                                <div className="space-y-10">
                                    <SolutionCard
                                        number="1"
                                        title="Restructured Category Navigation"
                                        before="In the initial design, the only navigation entry point was a stationery essentials section below the hero. While most users engaged with it, some still attempted to use the main navigation and hero CTA button, revealing that the design needed to support multiple entry points."
                                        after="To address this, I developed a more structured navigation by introducing subcategories and a dedicated category listing page with filtering options to help users find products that match their personal style. I also made the hero CTA button clickable to provide an additional entry point into the flow."
                                        image={solution1}
                                        alt="Solution 1"
                                    />
                                    <SolutionCard
                                        number="2"
                                        title="Guest-First Save & Checkout"
                                        before="When users tapped the save icon on a product detail page, a modal appeared asking them to log in or continue as a guest, with login set as the primary action. This introduced unnecessary friction at a moment when users simply wanted to save an item."
                                        after="I redesigned the flow around a guest-first approach by removing the login gate from the save action entirely. Instead, at checkout, users can choose to sign in or proceed instantly via Express Checkout options like PayPal or Apple Pay, which carry existing payment and shipping details. This surfaces login at the most relevant moment without forcing it earlier in the journey."
                                        image={solution2}
                                        alt="Solution 2"
                                    />
                                    <SolutionCard
                                        number="3"
                                        title="Clear Cart Confirmation"
                                        before="The only feedback after adding an item to the cart was a number update on the cart icon in the header, which was too subtle for users to notice. This left users uncertain whether the action was completed."
                                        after="To address this, I added a confirmation pop-up each time an item is added to the cart, so users always know the action was completed and can decide what to do next."
                                        image={solution3}
                                        alt="Solution 3"
                                    />
                                </div>
                            </div>
                        </WorkSectionLayout>

                        {/* 07 Final Design */}
                        <WorkSectionLayout number="07" title="Final Design">
                            <div className="space-y-8">
                                <h2>Interactive prototype</h2>
                                <FigmaEmbed
                                    src="https://embed.figma.com/proto/htjDnzk9yXggt7GvEzx23P/The-Papery--Revision-?page-id=2258%3A3440&node-id=2258-3441&p=f&viewport=-7%2C166%2C0.11&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2258%3A3441&embed-host=share"
                                    paddingBottom="90%"
                                    title="The Papery Interactive Prototype"
                                />
                            </div>
                        </WorkSectionLayout>

                        {/* 08 Reflection */}
                        <WorkSectionLayout number="08" title="Reflection">
                            <div className="space-y-8">
                                <h2>What I learned</h2>
                                <p>Through this project, I was able to apply the full UX design process from start to finish, and more importantly, learn from it. Testing revealed that even small mismatches between design and user expectations can cause friction and reduce confidence in completing an action.</p>
                                <p>What surprised me most was discovering issues in areas I hadn't anticipated, which reminded me that assumptions, no matter how reasonable, always need to be validated through real user feedback. Designing something that looks interactive creates a stronger expectation than I had anticipated, and clear feedback at every action point is just as important as the overall flow.</p>
                            </div>
                            <div className="space-y-8">
                                <h2>Next steps</h2>
                                <ul className="list-disc list-outside ml-8 space-y-1">
                                    <li>Designing for additional user flows, such as the search experience</li>
                                    <li>Expanding the prototype to cover more pages and interactions</li>
                                </ul>
                            </div>
                        </WorkSectionLayout>
                    </StickyNavLayout>
                </div>
            </section>
        </FadeUp>
    );
}

export default ThePapery;