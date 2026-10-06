import React from 'react';
import { X, Ruler, HelpCircle } from 'lucide-react';

const SIZE_CHART = [
  { uk: "7.0", eu: "41.0", us: "8.0", cm: "25.4" },
  { uk: "7.5", eu: "41.5", us: "8.5", cm: "25.8" },
  { uk: "8.0", eu: "42.0", us: "9.0", cm: "26.3" },
  { uk: "8.5", eu: "42.5", us: "9.5", cm: "26.7" },
  { uk: "9.0", eu: "43.0", us: "10.0", cm: "27.1" },
  { uk: "9.5", eu: "43.5", us: "10.5", cm: "27.5" },
  { uk: "10.0", eu: "44.0", us: "11.0", cm: "28.0" },
  { uk: "10.5", eu: "44.5", us: "11.5", cm: "28.4" },
  { uk: "11.0", eu: "45.0", us: "12.0", cm: "28.8" },
  { uk: "12.0", eu: "46.0", us: "13.0", cm: "29.7" }
];

export function SizeGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fade-in"
      />

      <div className="relative w-full max-w-2xl bg-[#121216] rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-2xl z-10 animate-fade-in">
        <div className="flex justify-between items-center border-b border-stone-800 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif-title font-bold text-stone-100">Bespoke Shoe Sizing Guide</h3>
              <p className="text-xs text-amber-400 font-mono">UK / EU / US / Foot Length (CM)</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* How to Measure Banner */}
        <div className="p-4 bg-stone-900/80 rounded-2xl border border-stone-800 mb-6 flex items-start space-x-3">
          <HelpCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-stone-300 font-light space-y-1">
            <p className="font-bold text-stone-100 uppercase tracking-wider font-mono">How to Measure Your Foot:</p>
            <p className="text-amber-300 font-medium">Measure from heel to longest toe while standing firmly on a piece of paper.</p>
            <p className="text-stone-400">If your measurement falls between sizes, we recommend selecting the half-size up for Goodyear welted footwear.</p>
          </div>
        </div>

        {/* Size Chart Table */}
        <div className="overflow-x-auto rounded-2xl border border-stone-800">
          <table className="w-full text-left border-collapse font-mono text-xs">
            <thead>
              <tr className="bg-stone-900 text-amber-400 border-b border-stone-800 uppercase tracking-wider">
                <th className="p-3">UK / IN</th>
                <th className="p-3">EU</th>
                <th className="p-3">US</th>
                <th className="p-3">Foot Length (CM)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/80 text-stone-200">
              {SIZE_CHART.map((row, idx) => (
                <tr key={idx} className="hover:bg-amber-500/10 transition-colors">
                  <td className="p-3 font-bold text-amber-300">{row.uk}</td>
                  <td className="p-3">{row.eu}</td>
                  <td className="p-3">{row.us}</td>
                  <td className="p-3">{row.cm} cm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
