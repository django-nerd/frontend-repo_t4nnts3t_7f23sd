import React from 'react';
import { Users, Heart, Share2 } from 'lucide-react';

const builds = [
  {
    id: 1,
    user: '@vega',
    title: 'Stealth Nova GT',
    likes: 1_294,
    gradient: 'from-zinc-900 to-zinc-800',
    badge: 'Stealth'
  },
  {
    id: 2,
    user: '@atlas',
    title: 'Trackday Phantom',
    likes: 982,
    gradient: 'from-slate-900 to-slate-800',
    badge: 'Track'
  },
  {
    id: 3,
    user: '@ariel',
    title: 'Luxury Eclipse',
    likes: 1_431,
    gradient: 'from-stone-900 to-stone-800',
    badge: 'Luxury'
  }
];

export default function CommunityShowcase() {
  return (
    <section className="w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl flex items-center gap-2">
            <Users className="h-6 w-6 text-emerald-300" /> Community builds
          </h2>
          <button className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">View all</button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {builds.map((b) => (
            <div key={b.id} className="group overflow-hidden rounded-2xl border border-white/10">
              <div className={`relative h-48 w-full bg-gradient-to-br ${b.gradient}`}>
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.08),transparent_40%)]" />
                <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/40 px-2 py-1 text-xs">{b.badge}</div>
              </div>
              <div className="border-t border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/60">{b.user}</div>
                    <div className="text-base font-medium">{b.title}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs hover:bg-white/20">
                      <Heart className="h-4 w-4 text-rose-300" /> {b.likes.toLocaleString()}
                    </button>
                    <button className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs hover:bg-white/20">
                      <Share2 className="h-4 w-4 text-emerald-300" /> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
