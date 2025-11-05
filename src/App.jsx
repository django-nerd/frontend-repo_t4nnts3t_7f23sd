import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureHighlights from './components/FeatureHighlights';
import AIInsightsPanel from './components/AIInsightsPanel';
import CommunityShowcase from './components/CommunityShowcase';

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <HeroSection />
      <FeatureHighlights />
      <AIInsightsPanel />
      <CommunityShowcase />
      <footer className="border-t border-white/10 bg-black/70 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-lg font-semibold">FluxDrive</div>
              <p className="mt-1 text-sm text-white/60">AI-powered AR customization • Legal by design • Built for enthusiasts</p>
            </div>
            <div className="flex gap-3">
              <button className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Privacy</button>
              <button className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Terms</button>
              <button className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">Contact</button>
            </div>
          </div>
          <p className="mt-6 text-xs text-white/50">© {new Date().getFullYear()} FluxDrive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
