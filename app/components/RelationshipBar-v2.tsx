'use client';
import { motion } from "framer-motion";

// Relationship level system (5 levels)
const levels = [
  { name: "Stranger", emoji: "👋", color: "#666" },
  { name: "Acquaintance", emoji: "🤝", color: "#4CAF50" },
  { name: "Friend", emoji: "😊", color: "#2196F3" },
  { name: "Best Friend", emoji: "🔥", color: "#FF9800" },
  { name: "JARVIS Mode", emoji: "🤖", color: "#ff1a88" },
];

// Animated progress bar
const progressVariants = {
  initial: { width: 0 },
  animate: (customWidth: string) => ({ 
    width: customWidth, 
    transition: { duration: 1, ease: "easeOut" } 
  }),
};

// Relationship Bar Component
interface RelationshipBarProps {
  level?: number;
}

const RelationshipBar = ({ level = 1 }: RelationshipBarProps) => {
  // Ensure level is between 1 and 5
  const safeLevel = Math.max(1, Math.min(5, level));
  const currentLevel = levels[safeLevel - 1];
  const widthPercentage = `${(safeLevel / 5) * 100}%`;

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-md p-4 mb-6 rounded-xl border border-gray-700"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        Relationship Level: <span style={{ color: currentLevel.color }}>{currentLevel.name} {currentLevel.emoji}</span>
      </h3>
      <div className="h-3 bg-gray-700 rounded-full mt-3 overflow-hidden">
        <motion.div
          className="h-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ backgroundColor: currentLevel.color }}
          variants={progressVariants}
          custom={widthPercentage}
          initial="initial"
          animate="animate"
        />
      </div>
    </motion.div>
  );
};

export default RelationshipBar;
