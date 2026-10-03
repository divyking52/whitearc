import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAPABILITIES } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function Capabilities({ onOpenProposal }) {
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);

  const activeCap = CAPABILITIES[activeCapabilityIndex];

  return (
    <section id="capabilities" className="relative w-full bg-[#FAF5EE] hairline-b py-24 lg:py-36 overflow-hidden">
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
                03 / CAPABILITIES
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-medium tracking-tight text-[#2A1614] uppercase">
              ENGINEERING <br />
              <span className="text-[#7E6360]">WITHOUT COMPROMISE.</span>
            </h2>
          </div>

          {/* Quick Switcher Controls */}
          <div className="flex items-center gap-2">
            {CAPABILITIES.map((cap, idx) => (
              <button
                key={cap.id}
                onClick={() => setActiveCapabilityIndex(idx)}
                className={`px-3 py-1 text-xs font-mono tracking-widest transition-all ${
                  activeCapabilityIndex === idx
                    ? 'bg-[#BA4332] text-[#FFFFFF] font-semibold'
                    : 'bg-[#F4EAE0] text-[#7E6360] border border-[#E4D5C5] hover:text-[#2A1614]'
                }`}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Essential Titles, Clean Tags, Minimal Metrics (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Tag & Massive Number */}
            <div className="flex items-baseline justify-between hairline-b pb-3">
              <span className="text-[10px] font-mono tracking-widest text-[#BA4332] font-semibold">
                {activeCap.tag}
              </span>
              <span className="text-5xl font-serif font-bold text-[#D99480]">
                {activeCap.id}
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h3 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#2A1614] uppercase">
                {activeCap.title}
              </h3>
              <p className="text-sm font-mono text-[#7E6360]">
                {activeCap.subtitle}
              </p>
            </div>

            {/* Concise Key Scopes */}
            <div className="space-y-2 pt-4 hairline-t">
              <div className="text-[10px] font-mono tracking-widest text-[#BA4332] uppercase mb-2 font-semibold">
                CORE METHODS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#2A1614]">
                {activeCap.deliverables.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-[#F4EAE0] border border-[#E4D5C5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BA4332]" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compact Metrics Row */}
            <div className="grid grid-cols-3 gap-2.5 pt-4 hairline-t">
              {Object.entries(activeCap.metrics).map(([mKey, mVal]) => (
                <div key={mKey} className="p-2.5 bg-[#F4EAE0] border border-[#E4D5C5]">
                  <div className="text-[8px] font-mono uppercase tracking-wider text-[#7E6360]">
                    {mKey.replace(/([A-Z])/g, ' $1')}
                  </div>
                  <div className="text-xs font-mono font-medium text-[#2A1614] mt-0.5">
                    {mVal}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={onOpenProposal}
                className="px-7 py-3.5 bg-[#BA4332] text-[#FFFFFF] text-xs font-mono tracking-widest font-semibold flex items-center gap-2 hover:bg-[#2A1614] transition-all shadow-sm"
              >
                <span>SPECIFY DISCIPLINE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Sliding Image Window (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="sticky top-28">
              
              <div className="relative aspect-[4/4.2] bg-[#F4EAE0] border border-[#E4D5C5] overflow-hidden group shadow-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCap.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={activeCap.image}
                      alt={activeCap.title}
                      className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05] grayscale-[15%] transition-transform duration-700 group-hover:scale-105"
                      data-cursor="view"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A1614]/75 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 left-4 p-2 bg-[#FAF5EE]/90 backdrop-blur-md border border-[#D99480] text-[9px] font-mono text-[#BA4332] font-semibold">
                      {activeCap.tag}
                    </div>

                    <div className="absolute bottom-4 right-4 p-2 bg-[#FAF5EE]/90 backdrop-blur-md border border-[#D99480] text-[9px] font-mono text-[#2A1614]">
                      100% REGIONAL SLA
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Minimal Tabs Indicator */}
              <div className="mt-3 grid grid-cols-4 gap-2">
                {CAPABILITIES.map((cap, idx) => (
                  <button
                    key={cap.id}
                    onClick={() => setActiveCapabilityIndex(idx)}
                    className={`p-2 text-left border transition-all ${
                      activeCapabilityIndex === idx
                        ? 'border-[#BA4332] bg-[#FAF5EE]'
                        : 'border-[#E4D5C5] bg-[#F4EAE0]/70 hover:border-[#BA4332]'
                    }`}
                  >
                    <div className="text-[9px] font-mono text-[#7E6360]">0{idx + 1}</div>
                    <div className="text-[11px] font-mono text-[#2A1614] truncate mt-0.5">
                      {cap.title.split('&')[0]}
                    </div>
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
