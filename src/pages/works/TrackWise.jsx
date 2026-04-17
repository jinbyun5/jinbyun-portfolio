import { Link } from 'react-router-dom';

import { ArrowLeftIcon, FigmaLogoIcon, EyeIcon, PaperclipIcon, TrendUpIcon } from '@phosphor-icons/react';

import FadeUp from "../../components/FadeUp";
import ZoomImage from '../../components/ZoomImage';
import ProjectHeader from '../../components/ProjectHeader';
import StickyNavLayout from '../../components/StickyNavLayout';
import WorkSectionLayout from '../../components/WorkSectionLayout';
import HighlightCard from '../../components/HighlightCard';
import SolutionCard from '../../components/SolutionCard';
import SurveyChart from '../../components/SurveyChart';
import FigmaEmbed from '../../components/FigmaEmbed';
import MoreWork from '../../components/MoreWork';

import { projects } from '../../data/projects';

import heroImage from '../../assets/track-wise/hero-image.webp';
import journeyMap from '../../assets/track-wise/user-journey-map.webp';
import designSystem1 from '../../assets/track-wise/design-system-1.webp';
import designSystem2 from '../../assets/track-wise/design-system-2.webp';
import visualization from '../../assets/track-wise/visualization.webp';
import solution1 from '../../assets/track-wise/solution-1.webp';
import solution2 from '../../assets/track-wise/solution-2.webp';
import solution3 from '../../assets/track-wise/solution-3.webp';
import solution4 from '../../assets/track-wise/solution-4.webp';

function TrackWise() {

    const project = projects.find(p => p.slug === 'track-wise');

    const surveyData = [
        { label: "Identifying patterns", count: 10, percent: "83.3%" },
        { label: "Application tracking", count: 9, percent: "75%" },
        { label: "Resume version control", count: 8, percent: "66.7%" },
        { label: "Networking management", count: 4, percent: "33.3%" },
        { label: "Follow-up deadlines", count: 3, percent: "25%" },
        { label: "No major frustrations", count: 1, percent: "8.3%" },
    ];

      const needsData = [
        { label: "Resume tracking", count: 8, percent: "66.7%" },
        { label: "Follow-up reminders", count: 5, percent: "41.7%" },
        { label: "Networking management", count: 5, percent: "41.7%" },
        { label: "Response analysis", count: 5, percent: "41.7%" },
        { label: "Centralized dashboard", count: 4, percent: "33.3%" },
        { label: "Keyword analysis", count: 3, percent: "25%" },
        { label: "Simple & easy to use", count: 3, percent: "25%" },
    ];

    return (
        <>
            <section className="w-full py-16 text-jb-brown">
                <FadeUp>
                    <div className="grid grid-cols-4 md:grid-cols-12">

                        {/* Link to All Works */}
                        <nav className="col-span-4 md:col-span-12 mb-10">
                            <Link
                                to="/works"
                                className="group flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-all hover:text-jb-blue"
                            >
                                <ArrowLeftIcon size={20} />
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
                                    alt="TrackWise Overview"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </figure>

                        <div className="col-span-4 md:col-span-12 flex items-center justify-center py-16">
                            <a 
                                href="https://www.figma.com/proto/rvBsUbDLHernqfxkXneznZ/TrackWise?page-id=15%3A21&node-id=42-4245&viewport=297%2C37%2C0.21&t=yFzRnDpQS4483z0j-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=42%3A4245"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-jb-white border border-jb-blue text-jb-blue text-lg rounded-full py-2 px-5 whitespace-nowrap transition-all duration-300 hover:bg-jb-blue hover:text-jb-white shadow-lg flex items-center gap-2"
                            >
                                <FigmaLogoIcon size={20} />
                                View in Figma
                            </a>
                        </div>
                    </div>
                </FadeUp>

                <FadeUp>
                    {/* Project Content */}
                    <div className="border border-dashed border-jb-blue/50 bg-jb-white rounded-2xl -mx-5 md:-mx-12 lg:-mx-[6.25rem] px-5 md:px-12 lg:px-[6.25rem]">
                        
                        <StickyNavLayout>

                            {/* 01 Project Overview */}
                            <WorkSectionLayout number="01" title="Project Overview">
                                <div className="space-y-8">
                                    <h2>Designing a strategy-driven job search tool for smarter application decisions</h2>
                                    <p>TrackWise is a desktop web app designed to help job seekers manage their applications and track which resume version they sent to each company, turning raw application data into actionable insights. The goal of this project was to design a strategy-driven tool that goes beyond simple tracking, helping users identify patterns in their job search and make informed decisions about their next application.</p>
                                </div>
                            </WorkSectionLayout>

                            {/* 02 Challenge */}
                            <WorkSectionLayout number="02" title="The Challenge">
                                <div className="space-y-8">
                                    <h2>Scattered resume versions make it impossible to identify what actually works.</h2>
                                    <p>Job seekers struggle to track which resume version they sent to each company, making it nearly impossible to identify what's working and what isn't. Without visibility into application history and outcomes, the job search becomes a repetitive guessing game rather than a strategy-driven process.</p>
                                </div>
                                <div className="space-y-8">
                                    <h3 className="text-jb-blue italic font-sans text-xl font-medium md:text-2xl md:leading-9">"How might we help job seekers connect their resume choices to application outcomes, so they can search smarter over time?"</h3>
                                </div>
                            </WorkSectionLayout>

                            {/* 03 Research */}
                            <WorkSectionLayout number="03" title="Research">
                                <div className="space-y-8">
                                    <h2>User Survey</h2>
                                    <p>Through a survey with 12 participants actively navigating their job search, I found that managing job applications is far more chaotic than it appears. Most respondents had no structured way to track which resume version they sent to each company, relying on memory, spreadsheets, or job board platforms instead. Without a clear connection between their resume choices and application outcomes, identifying what works becomes nearly impossible.</p>
                                
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                        <SurveyChart 
                                            question="What are the most frustrating parts of managing your job search?" 
                                            data={surveyData} 
                                        />
                                        <SurveyChart 
                                            question="What matters most to you in an ideal job search tool?" 
                                            data={needsData} 
                                        />
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <h2>Understanding the user</h2>
                                    <p>To translate research insights into a clear design direction, I mapped Grace's experience as an active job seeker navigating the full application cycle. By tracking her goals, actions, thoughts, and emotions across each stage, I identified key friction points around resume version tracking and outcome visibility that directly informed TrackWise's core features and flow.</p>
                                    <ZoomImage src={journeyMap} wrapperClassName="w-full" className="rounded-xl" alt="User Journey Map" />
                                </div>

                                <div className="space-y-8">
                                    <h2>Key insights</h2>
                                    <p>Based on these insights, I defined three core design goals for TrackWise.</p>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <HighlightCard
                                        icon={<EyeIcon size={24} />}
                                        title="Visibility" 
                                        content="View all applications and their status in one place at a glance"
                                    />
                                        <HighlightCard
                                            icon={<PaperclipIcon size={24} />}
                                            title="Version Clarity" 
                                            content="Know exactly which resume went to which company, every time"
                                        />
                                        <HighlightCard
                                            icon={<TrendUpIcon size={24} />}
                                            title="Strategic Insight" 
                                            content="Identify patterns and refine your strategy based on real outcomes"
                                        />
                                    </div>
                                </div>
                            </WorkSectionLayout>

                            {/* 04 Design Process */}
                            <WorkSectionLayout number="04" title="Design Process">
                                <div className="space-y-8">
                                    <h2>AI-assisted workflow</h2>
                                    <p>To accelerate the transition from insight to interface, I utilized a hybrid AI workflow. I collaborated with <strong>Claude AI</strong> to refine the information architecture and complex user flows, and used <strong>Figma Make</strong> to generate the design system and components. This allowed me to stay focused on design decisions rather than manual production, enabling me to critically evaluate and improve the design based on research data and established design systems.</p>
                                </div>

                                <div className="space-y-8">
                                    <h2>Efficiency in design system</h2>
                                    <p>Rather than building the design system from scratch, I tested both Claude AI and Figma Make for the initial setup. I ultimately went with Figma Make as it handled revisions and style adjustments more reliably. Since TrackWise is a dashboard-heavy product requiring a wide color palette and states, using AI to generate the system let me move through that phase quickly without losing consistency.</p>
                                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                                    <ZoomImage src={designSystem1} className="w-full rounded-xl" alt="Design System" />
                                    <ZoomImage src={designSystem2} className="w-full rounded-xl" alt="Design System" />
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <h2>Rapid visualization</h2>
                                    <p>I used Figma Make to generate early layouts quickly, focusing on validating the overall structure. The goal was to have something tangible early in the process, making layout decisions faster before moving into refinement.</p>
                                    <ZoomImage src={visualization} className="w-full rounded-xl" alt="Visualization" />
                                </div>
                            </WorkSectionLayout>

                            {/* 05 The Solution */}
                            <WorkSectionLayout number="05" title="The Solution">
                                <div className="space-y-8">
                                    <h2>Design decisions</h2>
                                    <p>To address the core pain points, I restructured key screens with a focus on data visibility, scalability, and actionable insights.</p>
                                    <div className="space-y-10">
                                        <SolutionCard 
                                            number="1" 
                                            title="Dashboard visibility" 
                                            after="The initial layout established the core structure, and I focused on making the data more meaningful. I replaced the plain application count with a donut chart to give a clearer breakdown of pipeline stages at a glance, and added average response time as a metric that better reflects job search momentum. The pipeline view was also refined for scannability, making it easier to track status across multiple applications without losing context."
                                            image={solution1}
                                            imageClassName="w-full !shadow-none !border-none mx-auto"
                                            alt="Key Design Concept" 
                                        />
                                        <SolutionCard 
                                            number="2" 
                                            title="Resume pattern analysis" 
                                            after={<>I restructured the analytics page to make resume performance immediately readable. The Top Performers section surfaces response rates upfront, while a full comparison table handles scalability as more versions are added.<br/><br/> For keyword matching, I used a horizontal bar chart to avoid horizontal scrolling as more resume versions are added. Each bar is color-coded by performance tier — excellent, good, and needs improvement — so users can assess resume strength without reading the numbers. I also added a highlight block that surfaces the resume with the highest keyword match rate, with a specific recommendation on which role types to prioritize it for.</>}
                                            image={solution2}
                                            imageClassName="w-full !shadow-none !border-none mx-auto"
                                            alt="Resume pattern analysis" 
                                        />
                                        <SolutionCard 
                                            number="3" 
                                            title="Automated tagging" 
                                            after="The original upload flow required users to manually enter tags for each resume version. I redesigned this to auto-generate tags on upload. The AI scans the resume and extracts relevant keywords, removing a friction point in the flow and keeping tags consistent across versions without any extra effort from the user."
                                            image={solution3}
                                            imageClassName="w-full !shadow-none !border-none mx-auto"
                                            alt="Automated tagging" 
                                        />
                                        <SolutionCard 
                                            number="4" 
                                            title="Contextual AI feedback" 
                                            after="The original feedback page showed a single score without accounting for multiple resumes. I redesigned it around selection first: users pick a version via dropdown before seeing results, which scales as resumes grow. Each selection also surfaces that version's application count and response rate alongside the score, so the feedback is grounded in actual performance data."
                                            image={solution4}
                                            imageClassName="w-full !shadow-none !border-none mx-auto"
                                            alt="Contextual AI feedback" 
                                        />
                                    </div>
                                </div>
                            </WorkSectionLayout>

                            {/* 06 Final Design */}
                            <WorkSectionLayout number="06" title="Final Design">
                                <div className="space-y-8">
                                    <h2>Interactive prototype</h2>
                                    <FigmaEmbed
                                        src="https://embed.figma.com/proto/rvBsUbDLHernqfxkXneznZ/TrackWise?page-id=15%3A21&node-id=42-4245&viewport=159%2C6%2C0.15&scaling=scale-down&content-scaling=fixed&starting-point-node-id=42%3A4245&embed-host=share"
                                        paddingBottom="90%"
                                        title="TrackWise Prototype"
                                    />
                                </div>
                            </WorkSectionLayout>

                            {/* 07 Reflection */}
                            <WorkSectionLayout number="07" title="Reflection">
                                <div className="space-y-8">
                                    <h2 className="md:text-3xl">What I learned</h2>
                                    <p>This project gave me a clearer sense of where AI fits in a design workflow. Tools like Claude and Figma Make genuinely accelerated production, but the quality of the final output still came down to design judgment: knowing what to change, what to cut, and why.                                    </p>
                                    <p>Working this way shifted my role from maker to editor. The repetitive groundwork was handled by AI, which freed me to focus on the decisions that actually mattered: understanding user pain points, thinking through scalability, and making sure every element served the product's core purpose.</p>
                                </div>
                                <div className="space-y-8">
                                    <h2 className="md:text-3xl">Next steps</h2>
                                    <ul className="list-disc list-outside ml-8 space-y-1">
                                        <li>Run usability testing with active job seekers to validate the core flows.</li>
                                        <li>Develop a mobile version, as quick status updates and application logging are tasks users would likely want to do on the go.</li>
                                    </ul>
                                </div>
                            </WorkSectionLayout>
                        </StickyNavLayout>
                    </div>
                </FadeUp>
            </section>

            <FadeUp>
                <MoreWork currentSlug="track-wise" />
            </FadeUp>
        </>
    );
}

export default TrackWise;