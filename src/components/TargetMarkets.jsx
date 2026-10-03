import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TARGET_MARKETS } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function TargetMarkets({ onOpenProposal }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const activeMarket = TARGET_MARKETS[hoveredIndex] || TARGET_MARKETS[0];

  return (
    <section id="markets" className="relative w-full bg-[#F4EAE0] hairline-b py-24 lg:py-36 overflow-hidden">
      {/* Precision grid background line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[92vw] max-w-[1720px] mx-auto h-full border-x border-[#D99480]/30" />
      </div>

      <div className="w-[92vw] max-w-[1720px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="hairline-b pb-4 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1.5 h-1.5 bg-[#BA4332]" />
              <span className="text-[11px] font-mono tracking-widest text-[#BA4332] uppercase font-semibold">
                SECTORS
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#2A1614] uppercase">
              ENGINEERED FOR <br />
              <span className="text-[#7E6360]">CRITICAL ENVIRONMENTS.</span>
            </h2>
          </div>

          <div className="text-[10px] font-mono tracking-widest text-[#7E6360]">
            MISSION-CRITICAL INFRASTRUCTURE
          </div>
        </div>

        {/* Minimal Refined List & Image Projection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Rows (7 Cols) */}
          <div className="lg:col-span-7 divide-y divide-[#E4D5C5]">
            {TARGET_MARKETS.map((market, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={market.id}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={onOpenProposal}
                  className="group py-6 cursor-pointer transition-all duration-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className={`text-xs font-mono font-medium transition-colors ${
                      isHovered ? 'text-[#BA4332]' : 'text-[#7E6360]'
                    }`}>
                      {market.id}
                    </span>

                    <div>
                      <h3 className={`font-serif text-xl sm:text-2xl font-normal tracking-tight uppercase transition-all duration-300 ${
                        isHovered ? 'text-[#BA4332] translate-x-1' : 'text-[#2A1614]'
                      }`}>
                        {market.name}
                      </h3>
                      <div className="text-[10px] font-mono text-[#7E6360] mt-1 tracking-wider">
                        {market.classification}
                      </div>
                    </div>
                  </div>

                  <div className={`p-2 border transition-all duration-300 ${
                    isHovered
                      ? 'border-[#BA4332] bg-[#BA4332] text-[#FFFFFF]'
                      : 'border-[#E4D5C5] text-[#7E6360]'
                  }`}>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Projected Image (5 Cols) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative aspect-[4/4] bg-[#FAF5EE] border border-[#E4D5C5] overflow-hidden shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMarket.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full relative"
                >
                  <img
                    src={activeMarket.image}
                    alt={activeMarket.name}
                    className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] grayscale-[15%]"
                    data-cursor="view"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A1614]/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4 p-2 bg-[#FAF5EE]/95 backdrop-blur-md border border-[#D99480] text-[9px] font-mono text-[#BA4332] font-semibold">
                    {activeMarket.name} // {activeMarket.classification}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
