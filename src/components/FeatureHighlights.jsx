import React from 'react';
import { Car, Paintbrush, ShieldCheck, ShoppingCart, Gauge, Users, Save, Wand2 } from 'lucide-react';

const features = [
  {
    icon: Car,
    title: 'Scan or Select',
    desc: 'Scan your real car or start from our high-fidelity library of popular models.'
  },
  {
    icon: Paintbrush,
    title: 'Live AR Customization',
    desc: 'Swap colors, rims, body kits, decals, lights, and interiors in real-time AR.'
  },
  {
    icon: Wand2,
    title: 'AI Suggestions',
    desc: 'Personalized mod packs based on your style, trends, and local regulations.'
  },
  {
    icon: ShieldCheck,
    title: 'Legality Check',
    desc: 'Instant compliance checks against regional road safety standards.'
  },
  {
    icon: ShoppingCart,
    title: 'Built-in Store',
    desc: 'Buy verified, compatible parts — matched to your exact model and build.'
  },
  {
    icon: Gauge,
    title: 'Smart Compare',
    desc: 'Evaluate looks, cost, and legal score across multiple design options.'
  },
  {
    icon: Users,
    title: 'Community Feed',
    desc: 'Share builds, get feedback, and follow creators you love.'
  },
  {
    icon: Save,
    title: 'Your Garage',
    desc: 'Save, edit, and share your 3D builds across devices.'
  }
];

export default function FeatureHighlights() {
  return (
    <section className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Everything you need to build fearlessly</h2>
            <p className="mt-2 max-w-2xl text-white/70">Premium visuals, reliable legal checks, and AI that understands your taste.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                <f.icon className="h-5 w-5 text-emerald-300" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-500/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
