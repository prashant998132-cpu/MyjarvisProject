'use client';
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

// Liquid Glassmorphism UI with dark pink theme
const glassStyle = {
  background: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  color: "#ff1a88", // Dark pink theme
};

// Framer Motion animations for chat bubbles
const bubbleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

// Main Chat Interface
const ChatInterface = () => {
  const openToolsPanel = () => {
    console.log("Tools panel opened");
  };

  const startVoiceInput = () => {
    console.log("Voice input started");
  };

  // Mobile swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => openToolsPanel(),
    onSwipedUp: () => startVoiceInput(),
  });

  return (
    <div {...handlers} className="m-4">
      <motion.div
        style={glassStyle}
        initial="hidden"
        animate="visible"
        className="p-4"
      >
        <motion.div variants={bubbleVariants} className="mb-2">
          <p className="font-semibold">Hello, I'm JARVIS v4.0! 🤖</p>
        </motion.div>
        <motion.div variants={bubbleVariants} className="mb-2">
          <p>Swipe left for tools, swipe up for voice! 🎤</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ChatInterface;
