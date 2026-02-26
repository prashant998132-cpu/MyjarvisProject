import { motion } from "framer-motion";
import { useState } from "react";

// Tool Card with hover effects and category filter
const toolVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
};

// Tool Card Component
const ToolCard = ({ name, category, url, description }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  // Category colors
  const categoryColors = {
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
      className="glassmorphic p-4 mb-3 rounded-lg"
      variants={toolVariants}
      initial="rest"
      whileHover="hover"
      onHoverStart={() => setShowDetails(true)}
      onHoverEnd={() => setShowDetails(false)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm text-gray-300">{category}</p>
          </div>
          <span className={`px-2 py-1 text-xs rounded-full ${categoryColors[category] || 'bg-gray-900'}`}>
            {category}
          </span>
        </div>
        {showDetails && (
          <p className="mt-2 text-sm text-gray-400">{description}</p>
        )}
      </a>
    </motion.div>
  );
};

export default ToolCard;