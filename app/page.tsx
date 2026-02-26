'use client';
import { useState } from 'react';
import ChatInterface from "./components/ChatInterface-v4";
import RelationshipBar from "./components/RelationshipBar-v2";
import LinkCard from "./components/LinkCard";
import { tools } from "./lib/links";

// Main Page
const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Get unique categories
  const categories = ["All", ...new Set(tools.map((tool) => tool.category))];
  
  // Filter tools by category
  const filteredTools = selectedCategory === "All" 
    ? tools
    : tools.filter((tool) => tool.category === selectedCategory);

  // Category colors for UI
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
    <div className="min-h-screen bg-gray-900 p-4">
      <h1 className="text-3xl font-bold text-center mb-6" style={{ color: "#ff1a88" }}>
        JARVIS v4.0 🤖
      </h1>
      <RelationshipBar level={3} />
      <ChatInterface />
      
      {/* Category Filter */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-3">AI Tools (140+ Free)</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedCategory === category 
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <LinkCard
              key={tool.id}
              name={tool.name}
              category={tool.category}
              url={tool.url}
              description={tool.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;