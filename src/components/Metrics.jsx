import React from 'react';

export default function Metrics() {
  const metrics = [
    { value: "18+", label: "YEARS EXPERIENCE" },
    { value: "1,500+", label: "PROJECTS DELIVERED" },
    { value: "24/7", label: "CRITICAL RESPONSE" },
    { value: "100%", label: "ACCOUNTABILITY" }
  ];

  return (
    <section className="relative w-full bg-[#FAF5EE] hairline-b py-20 lg:py-28 overflow-hidden">
      {/* Precision grid background line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[92vw] max-w-[1720px] mx-auto h-full border-x border-[#D99480]/30" />
      </div>

      <div className="w-[92vw] max-w-[1720px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between hairline-b pb-4 mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#BA4332]" />
            <span className="text-[11px] font-mono tracking-widest text-[#BA4332] uppercase font-semibold">
              PERFORMANCE & SCALE
            </span>
          </div>
          <div className="text-[10px] font-mono tracking-widest text-[#7E6360]">
            EST. 2008 – 2026
          </div>
        </div>

        {/* 4 Columns with Hairline Dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E4D5C5]">
          {metrics.map((stat, idx) => (
            <div
              key={stat.label}
              className={`py-6 sm:py-4 ${idx === 0 ? 'sm:pr-8' : idx === 3 ? 'sm:pl-8' : 'sm:px-8'} group`}
            >
              <div className="text-[10px] font-mono text-[#7E6360] mb-4">
                0{idx + 1}
              </div>

              {/* Giant Architectural Number */}
              <div className="font-serif text-5xl sm:text-7xl lg:text-[5.8rem] font-medium tracking-tight leading-none text-[#2A1614] group-hover:text-[#BA4332] transition-colors">
                {stat.value}
              </div>

              {/* Metric Label */}
              <div className="mt-4 pt-3 hairline-t">
                <div className="text-xs font-mono font-medium tracking-[0.16em] text-[#7E6360] uppercase">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
