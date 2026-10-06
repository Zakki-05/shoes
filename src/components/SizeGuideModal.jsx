import React, { useState } from 'react';
import { X, Ruler, Sparkles, Check, Info, ArrowRight, ShieldCheck } from 'lucide-react';

const SIZE_CHART = [
  { uk: "6.0", eu: "39.0", us: "7.0", cm: "24.5", inches: "9.6\"" },
  { uk: "6.5", eu: "40.0", us: "7.5", cm: "25.0", inches: "9.8\"" },
  { uk: "7.0", eu: "41.0", us: "8.0", cm: "25.4", inches: "10.0\"" },
  { uk: "7.5", eu: "41.5", us: "8.5", cm: "25.8", inches: "10.1\"" },
  { uk: "8.0", eu: "42.0", us: "9.0", cm: "26.3", inches: "10.35\"" },
  { uk: "8.5", eu: "42.5", us: "9.5", cm: "26.7", inches: "10.5\"" },
  { uk: "9.0", eu: "43.0", us: "10.0", cm: "27.1", inches: "10.65\"" },
  { uk: "9.5", eu: "43.5", us: "10.5", cm: "27.5", inches: "10.8\"" },
  { uk: "10.0", eu: "44.0", us: "11.0", cm: "28.0", inches: "11.0\"" },
  { uk: "10.5", eu: "44.5", us: "11.5", cm: "28.4", inches: "11.2\"" },
  { uk: "11.0", eu: "45.0", us: "12.0", cm: "28.8", inches: "11.35\"" },
  { uk: "12.0", eu: "46.0", us: "13.0", cm: "29.7", inches: "11.7\"" }
];

export function SizeGuideModal({ isOpen, onClose }) {
  const [footCm, setFootCm] = useState('27.1');
  const [footWidth, setFootWidth] = useState('standard');
  const [unit, setUnit] = useState('cm');

  if (!isOpen) return null;

  // Calculate perfect recommended size based on CM input & width preference
  const numCm = parseFloat(footCm) || 27.1;
  
  // Find matching size row
  let recommended = SIZE_CHART.find((row) => parseFloat(row.cm) >= numCm) || SIZE_CHART[6];

  // Adjust for wide feet
  let adjustedUk = parseFloat(recommended.uk);
  if (footWidth === 'wide') {
    adjustedUk = (adjustedUk + 0.5);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fade-in"
      />

      <div className="relative w-full max-w-3xl bg-[#121216] rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl z-10 animate-fade-in max-h-[90vh] overflow-y-auto">
        
        {/* Header Bar */}
        <div className="flex justify-between items-center border-b border-stone-800 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif-title font-bold text-stone-100">Bespoke Fit & Size Calculator</h3>
              <p className="text-xs text-amber-400 font-mono uppercase tracking-wider">Perfect Shoe Fitting Engine</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SECTION 1: Interactive Perfect Size Finder Calculator */}
        <div className="p-6 glass-panel-gold rounded-3xl border border-amber-500/40 mb-8 shadow-xl">
          <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Interactive Fit Calculator</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Input Controls */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1.5 font-mono text-xs">
                  <label className="text-stone-300">Enter Foot Length ({unit.toUpperCase()}):</label>
                  <div className="flex space-x-1 bg-stone-900 p-0.5 rounded-lg border border-stone-800">
                    <button
                      onClick={() => setUnit('cm')}
                      className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono ${unit === 'cm' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400'}`}
                    >
                      CM
                    </button>
                    <button
                      onClick={() => setUnit('in')}
                      className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono ${unit === 'in' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-400'}`}
                    >
                      INCH
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="number"
                    step="0.1"
                    min="20"
                    max="35"
                    value={footCm}
                    onChange={(e) => setFootCm(e.target.value)}
                    placeholder="e.g. 27.1"
                    className="w-full py-3 px-4 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 font-mono text-sm focus:outline-none focus:border-amber-400"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-xs text-amber-400 font-bold">
                    {unit.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Foot Width Selector */}
              <div>
                <label className="text-xs font-mono text-stone-300 block mb-1.5">Foot Width Profile:</label>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  {[
                    { id: 'slim', label: 'Slim / Narrow' },
                    { id: 'standard', label: 'Standard / Regular' },
                    { id: 'wide', label: 'Wide / High Instep' }
                  ].map((w) => (
                    <button
                      key={w.id}
                      onClick={() => setFootWidth(w.id)}
                      className={`py-2 px-2 rounded-xl transition-all border text-center text-[11px] ${
                        footWidth === w.id
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold shadow-md'
                          : 'bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      {w.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculated Result Display Card */}
            <div className="md:col-span-5 p-5 bg-[#0B0B0B] rounded-2xl border border-amber-500/30 text-center flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-1">Your Perfect Recommended Fit:</span>
                <div className="text-4xl font-serif-title font-extrabold text-amber-400 my-1">
                  UK {adjustedUk.toFixed(1)}
                </div>
                <p className="text-xs font-mono text-stone-300">
                  EU {recommended.eu} • US {recommended.us}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-stone-800/80 text-[11px] font-mono text-stone-400 flex items-center justify-center space-x-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>
                  {footWidth === 'wide' ? 'Includes +0.5 size width allowance' : '100% True-to-Size Precision Fit'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: How to Measure Heel-To-Toe Guide */}
        <div className="p-4 bg-stone-900/60 rounded-2xl border border-stone-800 mb-8 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold flex items-center space-x-1.5">
            <Info className="w-4 h-4" />
            <span>3-Step Heel-to-Toe Measurement Technique:</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-light text-stone-300">
            <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
              <span className="font-mono font-bold text-amber-400 block mb-1">Step 1</span>
              <p>Place a paper sheet flat against a vertical wall. Stand firmly barefoot with your heel touching the wall.</p>
            </div>
            <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
              <span className="font-mono font-bold text-amber-400 block mb-1">Step 2</span>
              <p>Mark the tip of your longest toe on the paper with a pencil held straight upright.</p>
            </div>
            <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
              <span className="font-mono font-bold text-amber-400 block mb-1">Step 3</span>
              <p>Measure the distance from the edge of the paper to your mark in centimeters and enter it above.</p>
            </div>
          </div>
        </div>

        {/* SECTION 3: Complete Conversion Table */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-stone-300 font-bold mb-2">
            Complete International Conversion Table:
          </h4>
          <div className="overflow-x-auto rounded-2xl border border-stone-800">
            <table className="w-full text-left border-collapse font-mono text-xs">
              <thead>
                <tr className="bg-stone-900 text-amber-400 border-b border-stone-800 uppercase tracking-wider">
                  <th className="p-3">UK / IN</th>
                  <th className="p-3">EU</th>
                  <th className="p-3">US</th>
                  <th className="p-3">Length (CM)</th>
                  <th className="p-3">Length (Inches)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/80 text-stone-200">
                {SIZE_CHART.map((row, idx) => {
                  const isMatch = row.uk === String(adjustedUk.toFixed(1)) || row.uk === recommended.uk;
                  return (
                    <tr
                      key={idx}
                      className={`transition-colors ${
                        isMatch ? 'bg-amber-500/20 text-amber-300 font-bold border-l-4 border-l-amber-400' : 'hover:bg-amber-500/10'
                      }`}
                    >
                      <td className="p-3 font-bold text-amber-300">UK {row.uk}</td>
                      <td className="p-3">{row.eu}</td>
                      <td className="p-3">{row.us}</td>
                      <td className="p-3">{row.cm} cm</td>
                      <td className="p-3">{row.inches}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
