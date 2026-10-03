import React from 'react';

export default function Manifesto() {
  const statement1 = ["WE", "DO", "NOT", "JUST", "INSTALL", "SYSTEMS."];
  const statement2 = ["WE", "ENGINEER", "HOW", "BUILDINGS", "PERFORM."];

  return (
    <section
      id="manifesto"
      className="relative w-full py-28 md:py-40 lg:py-48 bg-[#F4EAE0] hairline-b overflow-hidden"
    >
      {/* Precision grid background line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[92vw] max-w-[1720px] mx-auto h-full border-x border-[#D99480]/30" />
      </div>

      <div className="w-[92vw] max-w-[1720px] mx-auto relative z-10">
        
        {/* Section Index Marker */}
        <div className="flex items-center justify-between hairline-b pb-4 mb-16 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#BA4332]" />
            <span className="text-[11px] font-mono tracking-widest text-[#BA4332] uppercase font-semibold">
              MANIFESTO // POSITION
            </span>
          </div>
          <div className="text-[10px] font-mono tracking-widest text-[#7E6360]">
            00 / THE PRINCIPLE
          </div>
        </div>

        {/* Pure Monumental Multi-Viewport Typography with Negative Space */}
        <div className="space-y-12 md:space-y-16 max-w-[1550px]">
          
          {/* Statement Part 1: Quiet Restraint */}
          <div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-normal tracking-tight leading-[0.96] text-[#7E6360]">
              {statement1.map((word, i) => (
                <span key={i} className="inline-block mr-[0.25em] transition-colors duration-300 hover:text-[#2A1614]">
                  {word}
                </span>
              ))}
            </h2>
          </div>

          {/* Statement Part 2: The Engineering Conviction */}
          <div className="pt-6 hairline-t">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-medium tracking-tight leading-[0.92] text-[#2A1614]">
              {statement2.map((word, i) => {
                const isHighlight = word === "ENGINEER" || word === "PERFORM.";
                return (
                  <span
                    key={i}
                    className={`inline-block mr-[0.22em] transition-colors duration-300 ${
                      isHighlight ? 'text-[#BA4332]' : 'text-[#2A1614]'
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </h2>
          </div>

        </div>

      </div>
    </section>
  );
}
