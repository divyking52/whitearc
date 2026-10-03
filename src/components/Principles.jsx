import React, { useState } from 'react';

export default function Principles() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const principles = [
    {
      number: "01",
      label: "TRUST",
      headline: "ENGINEERED THROUGH CONSISTENT DELIVERY."
    },
    {
      number: "02",
      label: "PEOPLE",
      headline: "TECHNICAL RIGOR BEHIND EVERY SYSTEM."
    },
    {
      number: "03",
      label: "PROGRESS",
      headline: "BUILDING FOR A STRONGER REGION."
    }
  ];

  return (
    <section className="relative w-full bg-[#F4EAE0] hairline-b py-20 lg:py-28 overflow-hidden">
      {/* Precision grid background line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[92vw] max-w-[1720px] mx-auto h-full border-x border-[#D99480]/30" />
      </div>

      <div className="w-[92vw] max-w-[1720px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="hairline-b pb-4 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#BA4332]" />
            <span className="text-[11px] font-mono tracking-widest text-[#BA4332] uppercase font-semibold">
              FOUNDATIONAL PILLARS
            </span>
          </div>
          <div className="text-[10px] font-mono tracking-widest text-[#7E6360]">
            01 — 03
          </div>
        </div>

        {/* Minimal Full-Width Typography Rows */}
        <div className="divide-y divide-[#E4D5C5]">
          {principles.map((principle, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={principle.number}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative py-10 lg:py-14 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Accent line on hover in Bridge Rust */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-[#BA4332] transition-all duration-300 ${
                    isHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                  }`}
                />

                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6">
                  
                  {/* Number & Tag */}
                  <div className="flex items-baseline gap-4 md:w-1/4">
                    <span
                      className={`text-4xl lg:text-6xl font-serif font-medium transition-all duration-300 ${
                        isHovered ? 'text-[#BA4332] translate-x-1' : 'text-[#D99480]'
                      }`}
                    >
                      {principle.number}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-[#7E6360] uppercase">
                      / {principle.label}
                    </span>
                  </div>

                  {/* Headline Statement */}
                  <div className="md:w-3/4">
                    <h3
                      className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight uppercase transition-all duration-300 ${
                        isHovered ? 'text-[#2A1614] translate-x-2' : 'text-[#7E6360]'
                      }`}
                    >
                      {principle.headline}
                    </h3>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
