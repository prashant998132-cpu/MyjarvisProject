'use client';
import { useState } from 'react';
import LinkCard from './LinkCard';
import { tools } from '../lib/links';

const LinkManager = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  // Filter tools
  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) ||
                         tool.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || tool.category === category;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories using Array.from to avoid TS errors with spread on Set
  const categories = ['All', ...Array.from(new Set(tools.map((tool) => tool.category)))];

  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <span className="w-2 h-8 bg-pink-600 rounded-full"></span>
          AI Tools Library ({tools.length}+)
        </h2>
        
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search 140+ tools..."
            className="w-full bg-gray-800/50 border border-gray-700 text-white pl-10 pr-4 py-2.5 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
              category === cat 
                ? 'bg-pink-600 border-pink-500 text-white shadow-[0_0_15px_rgba(219,39,119,0.4)] scale-105'
                : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

      {filteredTools.length === 0 && (
        <div className="text-center py-20 bg-gray-800/20 rounded-3xl border border-dashed border-gray-700">
          <p className="text-gray-500 italic text-lg">No tools match your search or category.</p>
        </div>
      )}
    </div>
  );
};

export default LinkManager;
