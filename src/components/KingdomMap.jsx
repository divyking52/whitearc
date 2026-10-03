import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PRESENCE_LOCATIONS } from '../data/content';
import { Compass } from 'lucide-react';

export default function KingdomMap() {
  const [selectedCity, setSelectedCity] = useState(PRESENCE_LOCATIONS[0]);

  return (
    <section className="relative w-full bg-[#FAF5EE] hairline-b py-24 lg:py-36 overflow-hidden">
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
                05 / PRESENCE & LOGISTICS
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#2A1614] uppercase">
              ENGINEERED ACROSS <br />
              <span className="text-[#7E6360]">THE KINGDOM.</span>
            </h2>
          </div>

          <div className="flex items-center gap-6 text-[10px] font-mono text-[#7E6360]">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#BA4332]" />
              <span>GEODETIC NETWORK // WGS-84</span>
            </div>
            <span>TOTAL ASSETS // 1,500+</span>
          </div>
        </div>

        {/* Map & Logistics Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Dark Slate Vector Map (8 Cols) */}
          <div className="lg:col-span-8 bg-[#1A282A] border border-[#2D4548] p-4 sm:p-8 relative overflow-hidden shadow-2xl text-[#FAF5EE]">
            
            {/* Top Coordinate Hud */}
            <div className="flex justify-between items-center text-[10px] font-mono text-[#9DB3B5] hairline-b border-[#2D4548] pb-3 mb-4">
              <span>PROJECTION: MERCATOR KSA</span>
              <span>GRID INTERVAL: 2.0° LAT/LONG</span>
              <span className="text-[#F4A284]">TELEMETRY: LINKED</span>
            </div>

            {/* SVG Dark Vector Map */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full flex items-center justify-center">
              <svg viewBox="0 0 900 560" className="w-full h-full select-none">
                <defs>
                  <filter id="glowRust" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  <linearGradient id="arcRust" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#BA4332" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#F4A284" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Coordinate Grid Lines */}
                <g stroke="#2D4548" strokeWidth="0.5" strokeDasharray="3 3">
                  <line x1="50" y1="120" x2="850" y2="120" />
                  <line x1="50" y1="240" x2="850" y2="240" />
                  <line x1="50" y1="360" x2="850" y2="360" />
                  <line x1="50" y1="480" x2="850" y2="480" />

                  <line x1="180" y1="40" x2="180" y2="520" />
                  <line x1="360" y1="40" x2="360" y2="520" />
                  <line x1="540" y1="40" x2="540" y2="520" />
                  <line x1="720" y1="40" x2="720" y2="520" />
                </g>

                {/* Saudi Arabian Peninsula Land Boundary */}
                <path
                  d="M 190 120 
                     L 340 70 
                     L 460 70 
                     L 580 120 
                     L 730 180 
                     L 810 240 
                     L 820 310 
                     L 750 360 
                     L 720 440 
                     L 540 480 
                     L 390 490 
                     L 280 430 
                     L 240 330 
                     L 160 210 
                     Z"
                  fill="#142123"
                  stroke="#2D4548"
                  strokeWidth="1.5"
                />

                {/* Telemetry Geodesic Arcs */}
                <path
                  d="M 720 220 Q 620 200 520 270"
                  fill="none"
                  stroke="url(#arcRust)"
                  strokeWidth="1.5"
                  strokeDasharray="6 3"
                />

                <path
                  d="M 520 270 Q 380 280 270 350"
                  fill="none"
                  stroke="url(#arcRust)"
                  strokeWidth="1.5"
                  strokeDasharray="6 3"
                />

                {/* City Markers */}
                {/* 1. DAMMAM (HQ) */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedCity(PRESENCE_LOCATIONS[0])}
                >
                  <circle cx="720" cy="220" r="16" fill="none" stroke="#BA4332" strokeWidth="1" strokeOpacity="0.4" className="animate-ping" />
                  <circle cx="720" cy="220" r="6" fill="#BA4332" filter="url(#glowRust)" />
                  <circle cx="720" cy="220" r="2" fill="#FAF5EE" />
                  <text x="735" y="215" fill="#FAF5EE" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="600">
                    DAMMAM [HQ]
                  </text>
                  <text x="735" y="230" fill="#9DB3B5" fontSize="9" fontFamily="IBM Plex Mono">
                    26.42° N · 50.08° E
                  </text>
                </g>

                {/* 2. RIYADH */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedCity(PRESENCE_LOCATIONS[1])}
                >
                  <circle cx="520" cy="270" r="14" fill="none" stroke="#BA4332" strokeWidth="1" strokeOpacity="0.4" className="animate-ping" />
                  <circle cx="520" cy="270" r="5" fill="#BA4332" />
                  <circle cx="520" cy="270" r="2" fill="#FAF5EE" />
                  <text x="535" y="265" fill="#FAF5EE" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="600">
                    RIYADH
                  </text>
                  <text x="535" y="280" fill="#9DB3B5" fontSize="9" fontFamily="IBM Plex Mono">
                    24.71° N · 46.67° E
                  </text>
                </g>

                {/* 3. JEDDAH */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedCity(PRESENCE_LOCATIONS[2])}
                >
                  <circle cx="270" cy="350" r="5" fill="#BA4332" />
                  <text x="210" y="380" fill="#FAF5EE" fontSize="12" fontFamily="IBM Plex Mono" fontWeight="600">
                    JEDDAH
                  </text>
                  <text x="210" y="395" fill="#9DB3B5" fontSize="9" fontFamily="IBM Plex Mono">
                    21.48° N · 39.19° E
                  </text>
                </g>

                {/* 4. KINGDOM-WIDE */}
                <g
                  className="cursor-pointer"
                  onClick={() => setSelectedCity(PRESENCE_LOCATIONS[3])}
                >
                  <circle cx="390" cy="150" r="4" fill="#F4A284" />
                  <text x="310" y="140" fill="#FAF5EE" fontSize="11" fontFamily="IBM Plex Mono">
                    KINGDOM-WIDE
                  </text>
                </g>
              </svg>
            </div>

            {/* Bottom Status */}
            <div className="flex justify-between items-center text-[10px] font-mono text-[#9DB3B5] hairline-t border-[#2D4548] pt-3 mt-2">
              <span>MOBILIZATION: UNDER 2 HOURS IN METRO ZONES</span>
              <span className="text-[#F4A284]">SPECIALIZED UNITS ACTIVE</span>
            </div>
          </div>

          {/* Right Column: Station Selector (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="p-6 bg-[#F4EAE0] border border-[#E4D5C5] space-y-6 shadow-sm">
              <div className="flex justify-between items-baseline hairline-b pb-3">
                <span className="text-[10px] font-mono tracking-widest text-[#BA4332] font-semibold">
                  STATION TELEMETRY
                </span>
                <span className="text-xs font-mono text-[#7E6360]">
                  {selectedCity.status}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-medium text-[#2A1614] tracking-tight">
                  {selectedCity.city}
                </h3>
                <div className="text-xs font-mono text-[#7E6360] mt-1">
                  {selectedCity.region} // {selectedCity.type}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-[#FAF5EE] border border-[#E4D5C5]">
                  <div className="text-[9px] font-mono text-[#7E6360]">COORDINATES</div>
                  <div className="text-xs font-mono text-[#2A1614] mt-0.5">{selectedCity.coords}</div>
                </div>
                <div className="p-3 bg-[#FAF5EE] border border-[#E4D5C5]">
                  <div className="text-[9px] font-mono text-[#7E6360]">DELIVERIES</div>
                  <div className="text-xs font-mono text-[#BA4332] font-semibold mt-0.5">{selectedCity.projects}</div>
                </div>
              </div>
            </div>

            {/* City Selection Buttons */}
            <div className="grid grid-cols-2 gap-2">
              {PRESENCE_LOCATIONS.map((loc) => (
                <button
                  key={loc.city}
                  onClick={() => setSelectedCity(loc)}
                  className={`p-3 text-left border text-xs font-mono transition-all ${
                    selectedCity.city === loc.city
                      ? 'border-[#BA4332] bg-[#BA4332] text-[#FFFFFF]'
                      : 'border-[#E4D5C5] bg-[#F4EAE0] text-[#7E6360] hover:text-[#2A1614]'
                  }`}
                >
                  <div className="text-[9px] opacity-80">{loc.region}</div>
                  <div className="font-medium mt-0.5">{loc.city}</div>
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
