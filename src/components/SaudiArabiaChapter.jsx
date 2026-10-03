import React from 'react';

export default function SaudiArabiaChapter() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center bg-[#2A1614] hairline-b overflow-hidden py-24 text-[#FAF5EE]">
      {/* Background Image with Warm Terracotta Dawn Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90"
          alt="Kingdom of Saudi Arabia Vision 2030 Infrastructure"
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.1] grayscale-[30%]"
          data-cursor="view"
        />
        {/* Warm Terracotta and Dawn Horizon Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A1614] via-[#2A1614]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1614] via-transparent to-[#2A1614] z-10" />
      </div>

      {/* Grid Guideline */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="w-[92vw] max-w-[1720px] mx-auto h-full border-x border-[#D99480]/20" />
      </div>

      {/* Monumental Minimalist Overlay Content */}
      <div className="w-[92vw] max-w-[1720px] mx-auto relative z-20">
        
        {/* Minimal Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 bg-[#BA4332]" />
          <span className="text-[11px] font-mono tracking-widest text-[#F4A284] uppercase font-semibold">
            04 / SAUDI ARABIA
          </span>
        </div>

        {/* Huge Architectural Headline with Serif Authority */}
        <div className="max-w-[1400px]">
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.6rem] text-[#FAF5EE] uppercase tracking-tight leading-[0.92]">
            BUILDING <br />
            THE NEXT <br />
            CHAPTER <br />
            OF THE <br />
            KINGDOM<span className="text-[#BA4332]">.</span>
          </h2>
        </div>

        {/* Vision 2030 Alignment */}
        <div className="mt-12 pt-8 hairline-t border-[#D99480]/30 max-w-xl">
          <p className="text-base sm:text-xl font-light text-[#D8BFA8] leading-relaxed">
            Aligned with the infrastructure, technology and ambition of Vision 2030.
          </p>
          <div className="mt-4 flex items-center gap-6 text-[10px] font-mono text-[#A88C78]">
            <span>RIYADH · NEOM · RED SEA · EASTERN PROVINCE</span>
            <span>·</span>
            <span className="text-[#F4A284]">LOCAL CONTENT COMPLIANT</span>
          </div>
        </div>

      </div>
    </section>
  );
}
