import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function DigitalTwin({ onOpenProposal }) {
  const [activeSystemId, setActiveSystemId] = useState(1);
  const [hoveredSystemId, setHoveredSystemId] = useState(null);

  const effectiveId = hoveredSystemId !== null ? hoveredSystemId : activeSystemId;

  const slices = [
    {
      id: 1,
      tag: '01 · CHILLERS & COOLING',
      name: 'Chillers & cooling',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
      heightClass: 'h-24 sm:h-28 lg:h-32',
    },
    {
      id: 2,
      tag: '02 · HVAC DISTRIBUTION',
      name: 'HVAC distribution',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85',
      heightClass: 'h-20 sm:h-24 lg:h-28',
    },
    {
      id: 3,
      tag: '03 · ELECTRICAL SYSTEMS',
      name: 'Electrical systems',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=85',
      heightClass: 'h-20 sm:h-24 lg:h-28',
    },
    {
      id: 4,
      tag: '04 · DATA CENTRE',
      name: 'Data centre',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85',
      heightClass: 'h-20 sm:h-24 lg:h-28',
    },
    {
      id: 5,
      tag: '05 · FIRE PROTECTION',
      name: 'Fire protection',
      image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=85',
      heightClass: 'h-18 sm:h-20 lg:h-24',
    },
    {
      id: 6,
      tag: 'FOUNDATION & CENTRAL CHILLER YARD',
      name: 'Base infrastructure',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      heightClass: 'h-24 sm:h-28 lg:h-32',
      isBase: true
    }
  ];

  return (
    <section id="systems" className="relative w-full bg-[#FAF5EE] hairline-b py-24 lg:py-36 overflow-hidden">
      {/* Precision grid background line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[92vw] max-w-[1720px] mx-auto h-full border-x border-[#D99480]/30" />
      </div>

      <div className="w-[92vw] max-w-[1720px] mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: Editorial & System Index ================= */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Top Label */}
            <div className="flex items-center gap-3">
              <span className="w-4 h-[1px] bg-[#BA4332]" />
              <span className="text-[11px] font-mono tracking-widest text-[#BA4332] uppercase font-semibold">
                01 / 3D COORDINATED DIGITAL TWIN
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.8rem] font-medium tracking-tight text-[#2A1614] leading-[1.04]">
              One building.{' '}
              <span className="text-[#BA4332]">Five systems.</span>{' '}
              One accountable team.
            </h2>

            {/* Editorial Description */}
            <p className="text-sm sm:text-base text-[#452A27] font-light leading-relaxed max-w-xl">
              White Arch combines design coordination, procurement, installation, testing and commissioning under a single delivery framework. This reduces interface risk and gives clients a clear line of technical accountability.
            </p>

            {/* Systems List with Thin Dividers */}
            <div className="pt-4 divide-y divide-[#E4D5C5] hairline-t border-[#E4D5C5]">
              {slices.filter(s => !s.isBase).map((sys) => {
                const isSelected = effectiveId === sys.id;

                return (
                  <button
                    key={sys.id}
                    onClick={() => setActiveSystemId(sys.id)}
                    onMouseEnter={() => setHoveredSystemId(sys.id)}
                    onMouseLeave={() => setHoveredSystemId(null)}
                    className="w-full py-4 text-left flex items-center justify-between group transition-all duration-300"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className={`text-xs font-mono transition-colors ${
                        isSelected ? 'text-[#BA4332] font-semibold' : 'text-[#7E6360]'
                      }`}>
                        0{sys.id}
                      </span>
                      <span className={`text-base sm:text-lg font-medium transition-all ${
                        isSelected
                          ? 'text-[#2A1614] font-semibold translate-x-1'
                          : 'text-[#452A27] group-hover:text-[#BA4332]'
                      }`}>
                        {sys.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      {isSelected && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BA4332] animate-pulse" />
                      )}
                      <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                        isSelected
                          ? 'text-[#BA4332] translate-x-0.5 -translate-y-0.5'
                          : 'text-transparent group-hover:text-[#BA4332]'
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Status & Progress Indicator Bar */}
            <div className="pt-6 hairline-t border-[#E4D5C5] flex items-center gap-4">
              <span className="text-xs font-mono tracking-widest text-[#BA4332] font-semibold flex-shrink-0">
                SYS 0{effectiveId} / 05
              </span>
              <div className="flex-1 h-[2px] bg-[#E4D5C5] overflow-hidden">
                <div
                  className="h-full bg-[#BA4332] transition-all duration-500"
                  style={{ width: `${(effectiveId / 5) * 100}%` }}
                />
              </div>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: 3D Coordinated Model HUD ================= */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#1A282A] border border-[#2D4548] p-6 sm:p-10 overflow-hidden shadow-2xl text-[#FAF5EE]">
              
              {/* HUD Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 hairline-b border-[#2D4548] pb-4 mb-8 text-[11px] font-mono">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#48CCA3] animate-pulse" />
                  <span className="text-[#FAF5EE] tracking-wider uppercase font-medium">
                    3D - COORDINATED DIGITAL TWIN
                  </span>
                </div>
                <div className="text-[#9DB3B5] tracking-widest uppercase">
                  LIVE COORDINATION MODEL - <span className="text-[#F4A284] font-semibold">SYS / 05</span>
                </div>
              </div>

              {/* 3D Isometric Exploded Building Stack Canvas */}
              <div className="relative w-full py-4 min-h-[520px] flex flex-col items-center justify-center">
                
                {/* Visual Guidelines Background */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  <div className="w-full h-full border-x border-[#2D4548] flex justify-between">
                    <div className="w-1/4 border-r border-[#2D4548]" />
                    <div className="w-1/4 border-r border-[#2D4548]" />
                    <div className="w-1/4 border-r border-[#2D4548]" />
                  </div>
                </div>

                {/* Vertical Stack of Slices */}
                <div className="w-full max-w-[620px] space-y-3 sm:space-y-4 relative z-10">
                  {slices.map((slice) => {
                    const isSelected = effectiveId === slice.id;
                    const isBase = slice.isBase;

                    return (
                      <div
                        key={slice.id}
                        className="relative group cursor-pointer"
                        onClick={() => !isBase && setActiveSystemId(slice.id)}
                        onMouseEnter={() => !isBase && setHoveredSystemId(slice.id)}
                        onMouseLeave={() => !isBase && setHoveredSystemId(null)}
                      >
                        {/* Slice Image Container with Perspective Angles */}
                        <div
                          className={`relative w-[85%] sm:w-[82%] ${slice.heightClass} overflow-hidden transition-all duration-500 ease-out ${
                            isSelected
                              ? 'scale-[1.03] -translate-y-1 shadow-[0_0_30px_rgba(186,67,50,0.35)] border-2 border-[#BA4332]'
                              : isBase
                              ? 'border border-[#2D4548] opacity-75'
                              : 'border border-[#2D4548] opacity-85 hover:opacity-100 hover:border-[#F4A284]'
                          }`}
                          style={{
                            clipPath: 'polygon(0% 16%, 100% 0%, 100% 84%, 0% 100%)',
                            transform: isSelected
                              ? 'perspective(1000px) rotateX(6deg) rotateY(-4deg) translateY(-2px)'
                              : 'perspective(1000px) rotateX(6deg) rotateY(-4deg)',
                          }}
                        >
                          <img
                            src={slice.image}
                            alt={slice.name}
                            className={`w-full h-full object-cover filter transition-all duration-700 ${
                              isSelected
                                ? 'brightness-[0.98] contrast-[1.15] scale-105'
                                : 'brightness-[0.55] contrast-[1.1] grayscale-[25%] group-hover:brightness-[0.8]'
                            }`}
                          />

                          <div className="absolute inset-0 bg-gradient-to-r from-[#1A282A]/50 via-transparent to-[#1A282A]/40 pointer-events-none" />

                          {isSelected && (
                            <div className="absolute inset-0 bg-[#BA4332]/10 mix-blend-overlay pointer-events-none" />
                          )}
                        </div>

                        {/* Callout Pointer Line & Tag */}
                        {!isBase && (
                          <div
                            className={`absolute right-0 top-1/2 -translate-y-1/2 flex items-center transition-all duration-300 ${
                              isSelected ? 'opacity-100 translate-x-0' : 'opacity-70 group-hover:opacity-100'
                            }`}
                          >
                            <div
                              className={`w-6 sm:w-10 lg:w-14 h-[1px] transition-colors duration-300 ${
                                isSelected ? 'bg-[#BA4332]' : 'bg-[#2D4548] group-hover:bg-[#F4A284]'
                              }`}
                            />

                            <div
                              className={`px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase whitespace-nowrap transition-all duration-300 border ${
                                isSelected
                                  ? 'bg-[#251311] border-[#BA4332] text-[#FFFFFF] font-semibold shadow-lg'
                                  : 'bg-[#152325]/90 border-[#2D4548] text-[#9DB3B5] group-hover:text-[#FAF5EE] group-hover:border-[#F4A284]'
                              }`}
                            >
                              {slice.tag}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* HUD Footer Bar */}
              <div className="flex items-center justify-between hairline-t border-[#2D4548] pt-4 mt-6 text-[11px] font-mono text-[#9DB3B5]">
                <div className="text-[#FAF5EE] tracking-widest">
                  WHITE ARCH / KSA
                </div>
                <div className="flex items-center gap-4 text-[10px]">
                  <span>BIM LOD 500 AS-BUILT EXACT</span>
                  <span className="hidden sm:inline">·</span>
                  <span className="hidden sm:inline text-[#F4A284]">CLASH-FREE COORDINATION</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
