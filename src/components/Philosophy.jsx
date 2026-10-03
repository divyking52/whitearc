import React from 'react';

export default function Philosophy() {
  return (
    <section className="relative w-full bg-[#FAF5EE] hairline-b py-28 lg:py-44 overflow-hidden">
      {/* Precision grid background line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[92vw] max-w-[1720px] mx-auto h-full border-x border-[#D99480]/30" />
      </div>

      <div className="w-[92vw] max-w-[1720px] mx-auto relative z-10">
        
        {/* Subtle Section Label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="w-1.5 h-1.5 bg-[#BA4332]" />
          <span className="text-[11px] font-mono tracking-widest text-[#BA4332] uppercase font-semibold">
            PHILOSOPHY // RESTRAINT
          </span>
        </div>

        {/* Monumental Typography In Vast Negative Space */}
        <div className="max-w-[1550px]">
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[6.8rem] font-normal tracking-tight leading-[0.92] text-[#2A1614] uppercase select-none">
            THE BEST <br />
            ENGINEERING <br />
            <span className="text-[#7E6360]">IS OFTEN</span> <br />
            THE ENGINEERING <br />
            <span className="text-[#BA4332] font-medium">YOU NEVER NOTICE.</span>
          </h2>
        </div>

      </div>
    </section>
  );
}
