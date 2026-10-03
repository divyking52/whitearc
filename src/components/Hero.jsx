import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero({ onOpenProposal }) {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-28 pb-10 overflow-hidden bg-[#FAF5EE]">
      {/* Background: Pristine Clean Bridge Artwork (Text-Free) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <motion.div
          initial={{ scale: 1.06, opacity: 0.92 }}
          animate={{ scale: 1.0, opacity: 1.0 }}
          transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="/hero-bridge-clean.png"
            alt="Infrastructure Bridge Horizon"
            className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[1.01]"
          />
        </motion.div>

        {/* Soft misty gradient at the bottom dissolving naturally into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#FAF5EE] via-[#FAF5EE]/60 to-transparent z-10" />

        {/* Subtle top shade for navigation contrast */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAF5EE]/50 via-transparent to-transparent z-10" />

        {/* Precision hairline grid lines */}
        <div className="absolute inset-0 z-10">
          <div className="w-[92vw] max-w-[1720px] mx-auto h-full border-x border-[#D99480]/25" />
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 w-[92vw] max-w-[1720px] mx-auto flex-1 flex flex-col justify-between">
        
        {/* Top Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#BA4332]" />
            <span className="text-[11px] font-mono tracking-widest text-[#2A1614] uppercase font-semibold">
              WHITE ARCH // ELECTROMECHANICAL & INFRASTRUCTURE
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[10px] font-mono tracking-widest text-[#7E6360]">
            <span>KSA · GCC</span>
            <span>·</span>
            <span>EST. 2008</span>
          </div>
        </motion.div>

        {/* Centerpiece: "Bridge the Gap" Framed Over The Sun Glow */}
        <div className="my-auto py-8 sm:py-12 lg:py-16 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {/* Monumental Editorial Serif Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.4rem] font-medium tracking-tight text-[#2A1614] leading-[0.94] select-none drop-shadow-sm">
              Bridge <br />
              the Gap<span className="text-[#BA4332]">.</span>
            </h1>

            {/* Minimal Punchy Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl font-light text-[#452A27] max-w-xl mx-auto leading-relaxed pt-2">
              Bridging architectural ambition and electro-mechanical precision across Saudi Arabia and the GCC.
            </p>

            {/* Centered Actions */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenProposal}
                className="group px-7 py-3.5 bg-[#BA4332] text-[#FFFFFF] text-xs font-mono tracking-widest font-semibold flex items-center gap-2 hover:bg-[#2A1614] transition-all duration-300 shadow-md"
              >
                <span>REQUEST TECHNICAL PROPOSAL</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#systems"
                className="group px-7 py-3.5 bg-[#FAF5EE]/80 backdrop-blur-md text-[#2A1614] text-xs font-mono tracking-widest border border-[#D99480] hover:border-[#2A1614] flex items-center gap-2 transition-all duration-300 shadow-sm"
              >
                <span>EXPLORE 3D SYSTEMS</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#BA4332] transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metadata & Scroll Prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.8 }}
          className="hairline-t pt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-end border-[#D99480]/30"
        >
          <div>
            <div className="text-[10px] font-mono tracking-widest text-[#7E6360]">ORIGIN</div>
            <div className="text-xs font-mono tracking-wider text-[#2A1614] font-medium mt-1">EST. 2008</div>
          </div>

          <div>
            <div className="text-[10px] font-mono tracking-widest text-[#7E6360]">JURISDICTION</div>
            <div className="text-xs font-mono tracking-wider text-[#2A1614] font-medium mt-1">KSA · GCC</div>
          </div>

          <div>
            <div className="text-[10px] font-mono tracking-widest text-[#7E6360]">DELIVERED</div>
            <div className="text-xs font-mono tracking-wider text-[#2A1614] font-medium mt-1">1,500+ PROJECTS</div>
          </div>

          <div className="hidden md:block">
            <div className="text-[10px] font-mono tracking-widest text-[#7E6360]">CRITICAL RESPONSE</div>
            <div className="text-xs font-mono tracking-wider text-[#2A1614] font-medium mt-1">24/7 MOBILIZATION</div>
          </div>

          {/* Bottom-right Scroll Indicator */}
          <div className="col-span-2 sm:col-span-1 flex justify-end items-center">
            <a
              href="#manifesto"
              className="group flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#7E6360] hover:text-[#BA4332] transition-colors"
            >
              <span>SCROLL TO ENTER</span>
              <ArrowDown className="w-3 h-3 animate-bounce text-[#BA4332]" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
