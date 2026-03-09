import { motion } from "motion/react";

function ProjectCard({image, title, tags, description, onClick}) {
    return (
        <motion.div 
        whileHover={{ 
            y: -10, 
            transition: { duration: 0.2 },
            boxShadow: "0px 10px 10px rgba(8, 29, 195, 0.12)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20 
        }}
        onClick={onClick}
        className="group bg-white rounded-2xl overflow-hidden border-jb-blue border-[0.5px] hover:shadow-md transition-shadow cursor-pointer"
        >
            <div className="p-2">
                <div className="aspect-[4/3] mb-4 md:mb-5 overflow-hidden rounded-t-xl">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                </div>
                <div className="flex flex-col gap-3 px-2 md:px-3">
                    <h5>{title}</h5>
                    <p className="text-gray-500 mb-1">{description}</p>
                    <div className="flex items-center pt-4 pb-3 flex-wrap gap-2 border-t-[1px] border-dashed border-jb-blue/50">
                        {tags.map((tag, index) => (
                             <span key={index} className="mobile-tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectCard;