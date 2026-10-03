import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare } from 'lucide-react';

export default function FinalCta({ onOpenProposal }) {
  const whatsappUrl = "https://wa.me/966500000000?text=White%20Arch%20Engineering%20Inquiry%3A%20Requesting%20technical%20consultation%20for%20project%20infrastructure.";

  return (
    <section className="relative w-full bg-[#FAF5EE] hairline-b py-36 lg:py-52 overflow-hidden">
      {/* Background with subtle Bridge the Gap silhouette in the mist */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <img
          src="/bridge-bg.png"
          alt="Bridge Background Atmosphere"
          className="w-full h-full object-cover object-bottom filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5EE] via-[#FAF5EE]/70 to-[#FAF5EE]" />
      </div>

      {/* Precision grid background line */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="w-[92vw] max-w-[1720px] mx-auto h-full border-x border-[#D99480]/30" />
      </div>

      <div className="w-[92vw] max-w-[1720px] mx-auto relative z-20">
        
        {/* Subtle Index */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-1.5 h-1.5 bg-[#BA4332]" />
          <span className="text-[11px] font-mono tracking-widest text-[#BA4332] uppercase font-semibold">
            07 / NEXT — INITIATE CONSULTATION
          </span>
        </div>

        {/* Huge Headline in Vast Negative Space */}
        <div className="max-w-[1400px]">
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] text-[#2A1614] uppercase tracking-tight leading-[0.90] select-none">
            LET'S <br />
            ENGINEER <br />
            WHAT COMES <br />
            NEXT<span className="text-[#BA4332]">.</span>
          </h2>
        </div>

        {/* Supporting Line & Rectangular Refined Buttons */}
        <div className="mt-16 lg:mt-24 pt-8 hairline-t grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          <div className="lg:col-span-6">
            <p className="text-lg sm:text-2xl font-light text-[#452A27] max-w-xl leading-relaxed">
              Share your project scope, drawings or operational challenge.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap items-center gap-4 lg:justify-end">
            
            {/* Primary Solid Rectangular Button in Bridge Rust */}
            <button
              onClick={onOpenProposal}
              className="group relative px-8 py-4 bg-[#BA4332] text-[#FFFFFF] text-xs font-mono tracking-[0.16em] font-semibold flex items-center gap-3 hover:bg-[#2A1614] transition-all duration-300 shadow-md"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                REQUEST TECHNICAL PROPOSAL
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            {/* Secondary Outline Rectangular Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-[#FAF5EE] text-[#2A1614] text-xs font-mono tracking-[0.16em] border border-[#D99480] hover:border-[#BA4332] hover:text-[#BA4332] flex items-center gap-3 transition-all duration-300 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#BA4332]" />
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                WHATSAPP CONSULTATION
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#7E6360] group-hover:text-[#BA4332] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
