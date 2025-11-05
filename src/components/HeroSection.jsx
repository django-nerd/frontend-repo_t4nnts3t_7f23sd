import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Car, Camera, Share2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-16 pt-28 md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          <span className="text-white/80">AI x AR Vehicle Customization</span>
        </div>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Design, validate, and own your dream build in immersive 3D.
        </h1>
        <p className="max-w-2xl text-white/70 md:text-lg">
          Visualize real-time mods on your car, get AI recommendations, and ensure legal compliance
          before you buy. Built for enthusiasts, tuners, and creators.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-white/90">
            <Camera className="h-4 w-4" />
            Scan My Car
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-400">
            <Car className="h-4 w-4" />
            Try Demo Model
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">
            <Share2 className="h-4 w-4" />
            Explore Community
          </button>
        </div>
      </div>
    </section>
  );
}
