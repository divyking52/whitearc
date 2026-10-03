import React from 'react';

export default function Heritage() {
  return (
    <section id="about" className="relative w-full bg-[#FAF5EE] hairline-b py-24 lg:py-36 overflow-hidden">
      {/* Precision grid background line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[92vw] max-w-[1720px] mx-auto h-full border-x border-[#D99480]/30" />
      </div>

      <div className="w-[92vw] max-w-[1720px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="hairline-b pb-4 mb-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#BA4332]" />
            <span className="text-[11px] font-mono tracking-widest text-[#BA4332] uppercase font-semibold">
              02 / ORIGIN
            </span>
          </div>
          <div className="text-[10px] font-mono tracking-widest text-[#7E6360]">
            EST. 2008 · DMM / KSA
          </div>
        </div>

        {/* Headline Architecture */}
        <div className="max-w-[1400px] mb-12 lg:mb-16">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[0.92] text-[#2A1614] uppercase">
            BUILT ON EXPERIENCE. <br />
            <span className="text-[#7E6360]">ENGINEERED FOR WHAT COMES NEXT.</span>
          </h2>
        </div>

        {/* Minimal High-End Architectural Photo */}
        <div className="relative w-full aspect-[16/8] lg:aspect-[21/8] bg-[#F4EAE0] overflow-hidden hairline border-[#E4D5C5] group">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90"
            alt="Corporate Engineering Architecture Dammam Riyadh"
            className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05] grayscale-[20%] transition-transform duration-1000 group-hover:scale-[1.02]"
            data-cursor="view"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2A1614]/70 via-transparent to-transparent opacity-80" />

          {/* Minimal Overlay Stamps */}
          <div className="absolute top-6 left-6 p-2.5 bg-[#FAF5EE]/90 backdrop-blur-md border border-[#D99480] text-[10px] font-mono text-[#2A1614]">
            <div className="text-[#BA4332] font-semibold">DMM / KSA</div>
            <div className="text-[#452A27]">ESTABLISHED 2008</div>
          </div>

          <div className="absolute bottom-6 right-6 p-2.5 bg-[#FAF5EE]/90 backdrop-blur-md border border-[#D99480] text-[10px] font-mono text-right hidden sm:block">
            <div className="text-[#2A1614] font-medium">18+ YEARS REGIONAL CONTINUITY</div>
          </div>
        </div>

        {/* Single Refined Statement */}
        <div className="mt-12 pt-6 hairline-t flex flex-col md:flex-row justify-between items-start md:items-baseline gap-6">
          <div className="text-xs font-mono tracking-widest text-[#BA4332] uppercase font-semibold">
            REGIONAL PROVENANCE
          </div>
          <p className="text-base sm:text-xl text-[#452A27] font-light max-w-2xl leading-relaxed">
            Delivering high-tolerance electromechanical and mission-critical engineering calibrated for the extreme ambient climates of Saudi Arabia and the GCC.
          </p>
        </div>

      </div>
    </section>
  );
}
