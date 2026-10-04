import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Unlink, Link2, Sparkles } from 'lucide-react';

export default function Hero({ onOpenProposal }) {
  const containerRef = useRef(null);
  const [manualLock, setManualLock] = useState(null); // null = scroll-driven, true = locked, false = separated

  // Track scroll position
  const { scrollY } = useScroll();

  // Scroll mapping: from 0px to 350px scroll
  // At scrollY = 0: gap is 70px (separated)
  // At scrollY = 320: gap is 0px (joined)
  const rawGap = useTransform(scrollY, [0, 320], [68, 0]);
  const smoothGap = useSpring(rawGap, { stiffness: 120, damping: 24 });

  const [currentGap, setCurrentGap] = useState(68);

  useEffect(() => {
    if (manualLock !== null) {
      setCurrentGap(manualLock ? 0 : 68);
      return;
    }

    const unsubscribe = smoothGap.on('change', (latest) => {
      setCurrentGap(Math.max(0, latest));
    });

    return () => unsubscribe();
  }, [smoothGap, manualLock]);

  const isConnected = currentGap <= 2;
  const gapMeters = Math.round((currentGap / 68) * 120);

  const toggleManualGap = () => {
    setManualLock((prev) => (prev === null ? true : !prev));
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[105vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#FAF5EE]"
    >
      {/* ================= BACKGROUND: THE SEPARATING & JOINING BRIDGE + CLOUDS ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* 1. Underlying Sunset & Mountain Backdrop (Visible when bridge parts) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7A685] via-[#FDE8C7] to-[#FAF5EE]">
          {/* Celestial Rising Sun Disk */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[18%] sm:top-[20%] w-[340px] sm:w-[580px] lg:w-[720px] h-[220px] sm:h-[340px] lg:h-[400px] rounded-t-full bg-gradient-to-t from-[#FFF3D9] to-[#FCE5B5] opacity-95 blur-[0.5px]" />

          {/* Distant Mountain Peak Silhouettes */}
          <svg
            className="absolute left-0 right-0 top-[40%] sm:top-[42%] w-full h-44 text-[#507275]/80"
            viewBox="0 0 1440 220"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,120 L240,60 L480,110 L720,40 L960,90 L1200,50 L1440,100 L1440,220 L0,220 Z" />
          </svg>
        </div>

        {/* 2. LEFT BRIDGE SPAN (Left tower + cable + road deck) */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden transition-transform duration-300 ease-out z-10"
          style={{
            transform: `translate3d(-${currentGap}px, 0, 0)`,
          }}
        >
          <div className="relative w-[100vw] h-full">
            <img
              src="/hero-bridge-clean.png"
              alt="Left Bridge Span"
              className="w-full h-full object-cover object-left filter contrast-[1.03] brightness-[1.01]"
            />
          </div>

          {/* Precision Vertical Cut Line on Left Deck */}
          {!isConnected && (
            <div className="absolute right-0 top-[38%] bottom-[28%] w-[2px] bg-[#BA4332] shadow-[0_0_8px_#BA4332] opacity-80" />
          )}
        </div>

        {/* 3. RIGHT BRIDGE SPAN (Right tower + cable + road deck) */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden transition-transform duration-300 ease-out z-10"
          style={{
            transform: `translate3d(${currentGap}px, 0, 0)`,
          }}
        >
          <div className="relative w-[100vw] h-full" style={{ marginLeft: '-50vw' }}>
            <img
              src="/hero-bridge-clean.png"
              alt="Right Bridge Span"
              className="w-full h-full object-cover object-left filter contrast-[1.03] brightness-[1.01]"
            />
          </div>

          {/* Precision Vertical Cut Line on Right Deck */}
          {!isConnected && (
            <div className="absolute left-0 top-[38%] bottom-[28%] w-[2px] bg-[#BA4332] shadow-[0_0_8px_#BA4332] opacity-80" />
          )}
        </div>

        {/* 4. SEAM CONNECTION PULSE & LOCK EFFECT */}
        {isConnected && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0, 1, 0.4], scaleY: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 -translate-x-1/2 top-[34%] bottom-[32%] w-[3px] bg-gradient-to-b from-[#FFFDF9] via-[#BA4332] to-[#FFFDF9] shadow-[0_0_15px_#BA4332] z-20"
          />
        )}

        {/* 5. ANIMATED ROLLING CLOUD MIST LAYERS */}
        {/* Cloud Layer A: Left Cloud Bank */}
        <div
          className="absolute left-0 bottom-[5%] w-[65%] h-[45%] pointer-events-none transition-transform duration-300 ease-out z-10 opacity-90 animate-cloud-left"
          style={{
            transform: `translate3d(-${currentGap * 0.8}px, 0, 0)`,
          }}
        >
          <svg viewBox="0 0 800 350" fill="none" className="w-full h-full">
            <path
              d="M0,280 C120,240 220,270 340,230 C460,190 540,240 680,210 C760,195 800,240 800,350 L0,350 Z"
              fill="url(#cloudGrad1)"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="cloudGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF9F0" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#FAF5EE" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Cloud Layer B: Right Cloud Bank */}
        <div
          className="absolute right-0 bottom-[8%] w-[65%] h-[45%] pointer-events-none transition-transform duration-300 ease-out z-10 opacity-90 animate-cloud-right"
          style={{
            transform: `translate3d(${currentGap * 0.8}px, 0, 0)`,
          }}
        >
          <svg viewBox="0 0 800 350" fill="none" className="w-full h-full">
            <path
              d="M800,270 C680,230 580,260 460,220 C340,180 260,230 120,200 C40,190 0,230 0,350 L800,350 Z"
              fill="url(#cloudGrad2)"
              opacity="0.9"
            />
            <defs>
              <linearGradient id="cloudGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFF8EE" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#FAF5EE" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#FAF5EE" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Cloud Layer C: Center Chasm Cloud Mist (Parts when separated, billows together when closed) */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-[10%] w-[80%] max-w-[900px] h-[35%] pointer-events-none z-15 transition-all duration-500 ease-out animate-cloud-billow"
          style={{
            opacity: isConnected ? 0.95 : 0.45,
            transform: `translate(-50%, 0) scaleX(${isConnected ? 1.05 : 0.65})`,
          }}
        >
          <svg viewBox="0 0 900 300" fill="none" className="w-full h-full">
            <path
              d="M50,220 C180,160 320,200 450,150 C580,180 720,150 850,210 C900,230 900,300 900,300 L0,300 C0,300 0,240 50,220 Z"
              fill="#FAF5EE"
              fillOpacity="0.88"
              filter="blur(4px)"
            />
          </svg>
        </div>

        {/* Soft Bottom Fog Mask (Blends into following section) */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF5EE] via-[#FAF5EE]/80 to-transparent z-20" />

        {/* Precision Grid Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="w-[92vw] max-w-[1720px] mx-auto h-full border-x border-[#D99480]/20" />
        </div>
      </div>

      {/* ================= HERO CONTENT & HEADLINE ================= */}
      <div className="relative z-30 w-[92vw] max-w-[1720px] mx-auto flex-1 flex flex-col justify-between">
        
        {/* Top Tag & Telemetry Status */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-2 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#BA4332] animate-ping" />
            <span className="w-2 h-2 rounded-full bg-[#BA4332] -ml-4" />
            <span className="text-[11px] font-mono tracking-widest text-[#2A1614] uppercase font-semibold">
              WHITE ARCH // ELECTROMECHANICAL & INFRASTRUCTURE
            </span>
          </div>

          {/* Interactive Gap Status HUD Badge */}
          <div className="flex items-center gap-3 bg-[#FAF5EE]/80 backdrop-blur-md px-3.5 py-1.5 border border-[#D99480] shadow-sm text-[10px] font-mono">
            {isConnected ? (
              <>
                <Link2 className="w-3.5 h-3.5 text-[#BA4332]" />
                <span className="text-[#BA4332] font-semibold">STATUS: SPAN CONNECTED [0 M]</span>
              </>
            ) : (
              <>
                <Unlink className="w-3.5 h-3.5 text-[#7E6360] animate-pulse" />
                <span className="text-[#452A27]">
                  SPAN GAP: <strong className="text-[#BA4332]">{gapMeters} M</strong> (SCROLL TO BRIDGE)
                </span>
              </>
            )}

            <button
              onClick={toggleManualGap}
              className="ml-2 pl-2 border-l border-[#D99480] text-[#BA4332] hover:text-[#2A1614] font-semibold transition-colors pointer-events-auto"
              title="Click to simulate gap closure"
            >
              {isConnected ? "OPEN GAP" : "CONNECT"}
            </button>
          </div>
        </motion.div>

        {/* Centerpiece: "Bridge the Gap" Positioned in the Celestial Sun Glow */}
        <div className="my-auto py-6 sm:py-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Monumental Editorial Serif Headline */}
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7.6rem] font-medium tracking-tight text-[#2A1614] leading-[0.93] select-none drop-shadow-sm">
              Bridge <br />
              the Gap<span className="text-[#BA4332]">.</span>
            </h1>

            {/* Minimal Punchy Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl font-light text-[#452A27] max-w-xl mx-auto leading-relaxed pt-1">
              Bridging architectural ambition and electro-mechanical precision across Saudi Arabia and the GCC.
            </p>

            {/* Centered Actions */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4 pointer-events-auto">
              <button
                onClick={onOpenProposal}
                className="group px-7 py-3.5 bg-[#BA4332] text-[#FFFFFF] text-xs font-mono tracking-widest font-semibold flex items-center gap-2 hover:bg-[#2A1614] transition-all duration-300 shadow-md"
              >
                <span>REQUEST TECHNICAL PROPOSAL</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#systems"
                className="group px-7 py-3.5 bg-[#FAF5EE]/90 backdrop-blur-md text-[#2A1614] text-xs font-mono tracking-widest border border-[#D99480] hover:border-[#2A1614] flex items-center gap-2 transition-all duration-300 shadow-sm"
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
          transition={{ duration: 0.9, delay: 0.6 }}
          className="hairline-t pt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-end border-[#D99480]/30"
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

          {/* Bottom-right Interactive Scroll Indicator */}
          <div className="col-span-2 sm:col-span-1 flex justify-end items-center">
            <a
              href="#manifesto"
              className="group flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#7E6360] hover:text-[#BA4332] transition-colors pointer-events-auto"
            >
              <span>{isConnected ? "SCROLL TO EXPLORE" : "SCROLL TO JOIN SPAN"}</span>
              <ArrowDown className="w-3 h-3 animate-bounce text-[#BA4332]" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
