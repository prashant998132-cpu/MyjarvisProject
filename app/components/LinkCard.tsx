'use client';
import { motion } from "framer-motion";
import { useState } from "react";

// Tool Card with hover effects and category filter
const toolVariants = {
  rest: { scale: 1, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" },
  hover: { scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", transition: { type: "spring", stiffness: 300 } },
};

// Tool Card Component
interface LinkCardProps {
  name: string;
  category: string;
  url: string;
  description: string;
}

const LinkCard = ({ name, category, url, description }: LinkCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  // Category colors
  const categoryColors: { [key: string]: string } = {
    "Image Generation": "bg-purple-900",
    "Image Editing": "bg-yellow-900",
    "Image Upscaling": "bg-orange-900",
    "Text Generation": "bg-green-900",
    "Text Editing": "bg-pink-900",
    "Text to Visual": "bg-indigo-900",
    "Video Generation": "bg-blue-900",
    "Music Generation": "bg-red-900",
    "Voice/TTS": "bg-cyan-900",
  };
  
  return (
    <motion.div
      className="bg-gray-800/40 backdrop-blur-sm p-5 mb-4 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-colors"
      variants={toolVariants}
      initial="rest"
      whileHover="hover"
      onHoverStart={() => setShowDetails(true)}
      onHoverEnd={() => setShowDetails(false)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-white group-hover:text-pink-400 transition-colors">{name}</h3>
            <p className="text-sm text-gray-400 mt-1 line-clamp-1">{category}</p>
          </div>
          <span className={`px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-bold rounded-full text-white shadow-sm ${categoryColors[category] || 'bg-gray-600'}`}>
            {category}
          </span>
        </div>
        
        <div className={`mt-3 transition-all duration-300 overflow-hidden ${showDetails ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="text-sm text-gray-300 leading-relaxed border-t border-gray-700 pt-2">{description}</p>
        </div>
        
        {!showDetails && (
          <div className="mt-2 text-xs text-pink-500 font-medium flex items-center gap-1">
            View Tool <span className="text-[10px]">↗</span>
          </div>
        )}
      </a>
    </motion.div>
  );
};

export default LinkCard;
