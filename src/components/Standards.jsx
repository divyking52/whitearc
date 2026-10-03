import React from 'react';
import { CERTIFICATIONS } from '../data/content';

export default function Standards() {
  const codes = [
    "ASHRAE 55 / 62.1 / 90.1",
    "SMACNA STANDARDS",
    "NFPA 13 / 20 / 72 / 2001",
    "SAUDI BUILDING CODE (SBC)"
  ];

  return (
    <section id="standards" className="relative w-full bg-[#F4EAE0] hairline-b py-20 lg:py-32 overflow-hidden">
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
                GOVERNANCE
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#2A1614] uppercase">
              PRECISION <br />
              <span className="text-[#7E6360]">REQUIRES DISCIPLINE.</span>
            </h2>
          </div>

          <div className="text-[10px] font-mono tracking-widest text-[#7E6360]">
            QA/QC PROTOCOLS
          </div>
        </div>

        {/* Monumental Typography for Certifications */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E4D5C5] hairline-b pb-12">
          {CERTIFICATIONS.map((cert, idx) => {
            const lines = cert.code.split(' ');
            return (
              <div
                key={cert.code}
                className={`py-6 ${idx === 0 ? 'sm:pr-8' : idx === 3 ? 'sm:pl-8' : 'sm:px-8'} group`}
              >
                <div className="text-[10px] font-mono tracking-widest text-[#7E6360] mb-4">
                  0{idx + 1}
                </div>

                <div className="font-serif text-4xl sm:text-5xl lg:text-[4.2rem] font-medium tracking-tight leading-[0.88] text-[#2A1614] group-hover:text-[#BA4332] transition-colors">
                  {lines.map((line, lIdx) => (
                    <div key={lIdx}>{line}</div>
                  ))}
                </div>

                <div className="mt-4 text-[11px] font-mono text-[#BA4332] tracking-widest uppercase font-semibold">
                  {cert.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Standard Codes Strip */}
        <div className="pt-8 flex flex-wrap justify-between items-center gap-4 text-xs font-mono text-[#452A27]">
          {codes.map((code) => (
            <div key={code} className="px-3 py-1.5 bg-[#FAF5EE] border border-[#E4D5C5]">
              {code}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
