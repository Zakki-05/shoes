import React from 'react';
import { Star, ShieldCheck, ThumbsUp } from 'lucide-react';

const REVIEWS_DATA = [
  {
    id: 1,
    author: "Richard Sterling",
    location: "London, UK",
    rating: 5,
    date: "September 24, 2026",
    title: "Unmatched Leather Quality & Arch Ergonomics",
    comment: "The Goodyear welt craftsmanship is evident from the first wear. The French calfskin has a deep patina that looks far superior to standard off-the-rack shoes. Zero break-in pain.",
    verified: true
  },
  {
    id: 2,
    author: "Marcus Vance",
    location: "Milan, Italy",
    rating: 5,
    date: "August 12, 2026",
    title: "A Masterpiece of Sleek Italian Design",
    comment: "Subtle burnishing around the toe and flawless bevelled waist. Fits true to UK sizing. Worth every rupee for true craftsmanship.",
    verified: true
  },
  {
    id: 3,
    author: "David K. Henderson",
    location: "New York, USA",
    rating: 5,
    date: "July 08, 2026",
    title: "Pristine Packaging & Exceptional Service",
    comment: "Received the shoe with velvet dust bags and wooden last supports. The 3D inspector online represented the actual finish in real life with 100% accuracy.",
    verified: true
  }
];

export function CustomerReviews({ product }) {
  return (
    <section className="pt-16 border-t border-stone-800">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
            Client Feedback & Verification
          </span>
          <h3 className="text-2xl font-serif-title font-bold text-stone-100">
            VERIFIED CLIENT <span className="gold-gradient-text">REVIEWS</span>
          </h3>
        </div>

        <div className="flex items-center space-x-3 mt-4 md:mt-0 glass-panel px-4 py-2 rounded-2xl border border-stone-800">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-sm font-serif-title font-bold text-stone-100">{product?.rating || 4.9} / 5.0</span>
          <span className="text-xs font-mono text-stone-400">({product?.reviewsCount || 128} reviews)</span>
        </div>
      </div>

      {/* Reviews Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS_DATA.map((rev) => (
          <div
            key={rev.id}
            className="p-6 bg-[#121216] rounded-3xl border border-stone-800 flex flex-col justify-between space-y-4 shadow-xl"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-stone-500">{rev.date}</span>
              </div>

              <h4 className="text-sm font-serif-title font-bold text-stone-100 mb-2">
                "{rev.title}"
              </h4>

              <p className="text-xs text-stone-400 font-light leading-relaxed">
                {rev.comment}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
              <div>
                <span className="font-serif-title font-bold text-stone-200 block">{rev.author}</span>
                <span className="text-[10px] font-mono text-stone-500">{rev.location}</span>
              </div>

              {rev.verified && (
                <span className="inline-flex items-center space-x-1 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified Buyer</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
