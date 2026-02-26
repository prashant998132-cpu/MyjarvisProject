'use client';
import ChatInterface from "./components/ChatInterface-v4";
import RelationshipBar from "./components/RelationshipBar-v2";
import LinkManager from "./components/LinkManager";

// Main Page
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-8 font-sans">
      <header className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tighter mb-4" style={{ color: "#ff1a88", textShadow: "0 0 20px rgba(255, 26, 136, 0.3)" }}>
          JARVIS v4.0 🤖
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your personal AI tools dashboard. Explore over 140+ free AI resources curated for creators.
        </p>
      </header>

      <main className="max-w-7xl mx-auto space-y-12">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 sticky top-8">
            <RelationshipBar level={5} />
            <ChatInterface />
          </div>

          <div className="lg:col-span-2">
            <LinkManager />
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; 2026 JARVIS v4.0. Built for the future of AI interaction.</p>
      </footer>
    </div>
  );
};

export default HomePage;
