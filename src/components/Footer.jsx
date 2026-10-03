import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer({ onOpenProposal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#2A1614] text-[#FAF5EE] pt-24 pb-12 overflow-hidden">
      {/* Precision grid background line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[92vw] max-w-[1720px] mx-auto h-full border-x border-[#D99480]/20" />
      </div>

      <div className="w-[92vw] max-w-[1720px] mx-auto relative z-10">
        
        {/* Large Statement and Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 hairline-b border-[#D99480]/25 pb-20">
          
          {/* Left Column: Brand Statement (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-[10px] font-mono tracking-widest text-[#F4A284] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#BA4332]" />
              <span>DIGITAL HEADQUARTERS // KSA</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[0.96] text-[#FAF5EE] uppercase max-w-xl">
              ENGINEERING <br />
              THE INFRASTRUCTURE <br />
              <span className="text-[#D8BFA8]">BEHIND PROGRESS.</span>
            </h3>

            <p className="text-sm font-light text-[#D8BFA8] max-w-md">
              Specialized electromechanical, HVAC, MEP and mission-critical engineering solutions for the Kingdom of Saudi Arabia and the GCC.
            </p>
          </div>

          {/* Right Column: Editorial Navigation & Contacts (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-mono">
            
            <div className="space-y-3">
              <div className="text-[10px] tracking-widest text-[#A88C78] uppercase">STRUCTURE</div>
              <ul className="space-y-2 text-[#D8BFA8]">
                <li><a href="#about" className="hover:text-[#FAF5EE] transition-colors">ABOUT</a></li>
                <li><a href="#capabilities" className="hover:text-[#FAF5EE] transition-colors">CAPABILITIES</a></li>
                <li><a href="#systems" className="hover:text-[#FAF5EE] transition-colors">SYSTEMS</a></li>
                <li><a href="#markets" className="hover:text-[#FAF5EE] transition-colors">MARKETS</a></li>
                <li><a href="#standards" className="hover:text-[#FAF5EE] transition-colors">STANDARDS</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] tracking-widest text-[#A88C78] uppercase">DISCIPLINES</div>
              <ul className="space-y-2 text-[#D8BFA8]">
                <li><a href="#capabilities" className="hover:text-[#FAF5EE] transition-colors">CHILLER PLANTS</a></li>
                <li><a href="#capabilities" className="hover:text-[#FAF5EE] transition-colors">PIPE FREEZING</a></li>
                <li><a href="#capabilities" className="hover:text-[#FAF5EE] transition-colors">13.8kV SUBSTATIONS</a></li>
                <li><a href="#capabilities" className="hover:text-[#FAF5EE] transition-colors">DATA CENTRES</a></li>
                <li><a href="#capabilities" className="hover:text-[#FAF5EE] transition-colors">COMMISSIONING</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-[10px] tracking-widest text-[#A88C78] uppercase">LOCATIONS</div>
              <div className="text-[#D8BFA8] space-y-1 leading-relaxed">
                <div>DAMMAM (HQ)</div>
                <div>RIYADH</div>
                <div>JEDDAH</div>
                <div className="pt-2 text-[#F4A284]">SAUDI ARABIA</div>
              </div>
            </div>

          </div>

        </div>

        {/* Massive Editorial Wordmark */}
        <div className="py-12 lg:py-20 select-none overflow-hidden text-center">
          <h1 className="font-serif text-[13vw] font-medium tracking-tight leading-none text-[#3D221F] hover:text-[#4A2B27] transition-colors uppercase">
            WHITE ARCH
          </h1>
        </div>

        {/* Bottom Technical Metadata & Legal Bar */}
        <div className="hairline-t border-[#D99480]/20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] font-mono text-[#A88C78]">
          <div className="flex flex-wrap items-center gap-6">
            <span>© 2026 WHITE ARCH. ALL RIGHTS RESERVED.</span>
            <span>·</span>
            <span>CR-2050064912</span>
            <span>·</span>
            <span>SAUDI CONTRACTORS AUTHORITY</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[#D8BFA8]">
            <span>REV / 02</span>
            <span>BRIDGE THE GAP</span>
            <span>KSA / GCC</span>
            <button
              onClick={scrollToTop}
              className="text-[#F4A284] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>TOP</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
