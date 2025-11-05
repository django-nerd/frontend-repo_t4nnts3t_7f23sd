import React, { useMemo, useState } from 'react';
import { Wand2, ShieldCheck, DollarSign, Sparkles } from 'lucide-react';

const styles = ['Stealth', 'Track', 'Luxury', 'Off-road'];
const regions = ['California, USA', 'Ontario, Canada', 'Berlin, Germany', 'Dubai, UAE'];

function getSuggestions(style) {
  const base = {
    Stealth: ['Satin black wrap', 'Forged 19" wheels', 'Smoked lights', 'Lowered 20mm'],
    Track: ['Semi-slick tires', 'Aero kit', 'Big brake kit', 'Bucket seats'],
    Luxury: ['Pearl tri-coat paint', '20" chrome wheels', 'Ambient interior', 'Acoustic tint'],
    'Off-road': ['All-terrain tires', '2" lift kit', 'Roof rack', 'Aux lighting']
  };
  return base[style] || base.Stealth;
}

function getLegalNotes(region) {
  const notes = {
    'California, USA': ['Window tint VLT ≥ 70% (front)', 'Exhaust within 95 dB', 'No red/blue front lights'],
    'Ontario, Canada': ['No underglow blue/red', 'Bumper height within spec', 'DOT-approved headlights'],
    'Berlin, Germany': ['ABE/TÜV certification required', 'No sharp aero edges', 'Headlight washers for HID'],
    'Dubai, UAE': ['No reflective wraps', 'Tint up to 50% (front)', 'Plate visibility mandatory']
  };
  return notes[region] || [];
}

export default function AIInsightsPanel() {
  const [model, setModel] = useState('2020 Nova GT');
  const [style, setStyle] = useState('Stealth');
  const [region, setRegion] = useState('California, USA');

  const suggestions = useMemo(() => getSuggestions(style), [style]);
  const legal = useMemo(() => getLegalNotes(region), [region]);

  const estCost = useMemo(() => {
    const base = { Stealth: 3200, Track: 7800, Luxury: 5400, 'Off-road': 6000 };
    return base[style];
  }, [style]);

  const legalScore = useMemo(() => {
    // playful pseudo-score out of 100
    const map = { Stealth: 92, Track: 76, Luxury: 88, 'Off-road': 84 };
    return map[style];
  }, [style]);

  return (
    <section className="w-full bg-neutral-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold md:text-3xl flex items-center gap-2">
            <Wand2 className="h-6 w-6 text-emerald-300" /> AI recommendations & legal insights
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Car model</label>
                <input
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-emerald-400/30 placeholder:text-white/40 focus:ring"
                  placeholder="Enter your car model"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/70">Build style</label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-emerald-400/30 focus:ring"
                >
                  {styles.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-sm text-white/70">Region</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-emerald-400/30 focus:ring"
                >
                  {regions.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>

            <button className="mt-2 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-400">
              <Sparkles className="h-4 w-4" /> Refresh ideas
            </button>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-3 text-lg font-medium">Suggested mod pack</h3>
            <ul className="space-y-2">
              {suggestions.map((item) => (
                <li key={item} className="flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-3 py-2">
                  <span className="text-sm">{item}</span>
                  <span className="text-xs text-white/60">for {model}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-black/40 p-3">
              <div className="flex items-center gap-2 text-emerald-300"><DollarSign className="h-4 w-4" /> Estimated</div>
              <div className="text-lg font-semibold">${estCost.toLocaleString()}</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-3 text-lg font-medium flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-emerald-300" /> Compliance highlights</h3>
            <ul className="space-y-2">
              {legal.map((rule) => (
                <li key={rule} className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm">{rule}</li>
              ))}
            </ul>
            <div className="mt-4 rounded-xl bg-black/40 p-4 text-center">
              <div className="text-sm text-white/70">Legal score</div>
              <div className="mt-1 text-3xl font-semibold text-emerald-300">{legalScore}/100</div>
              <p className="mt-1 text-xs text-white/60">Higher is better. Always verify with local authorities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
