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

  // Get unique categories
  const categories = ['All', ...new Set(tools.map((tool) => tool.category))];

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Link Manager (140+ Tools)</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tools..."
          className="bg-gray-800 text-white p-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 rounded-full text-sm ${
              category === cat ? 'bg-pink-600' : 'bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
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
  );
};

export default LinkManager;