import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Metrics from './components/Metrics';
import DigitalTwin from './components/DigitalTwin';
import Heritage from './components/Heritage';
import Principles from './components/Principles';
import Capabilities from './components/Capabilities';
import SaudiArabiaChapter from './components/SaudiArabiaChapter';
import TargetMarkets from './components/TargetMarkets';
import KingdomMap from './components/KingdomMap';
import Philosophy from './components/Philosophy';
import Standards from './components/Standards';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ProposalModal from './components/ProposalModal';

export default function App() {
  const [proposalOpen, setProposalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Minimal refined loader as requested in Section 27:
  // "WHITE ARCH / LOADING EXPERIENCE"
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF5EE] text-[#2A1614] selection:bg-[#BA4332] selection:text-[#FFFFFF]">
      {/* Minimal Architectural Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-[#FAF5EE] flex flex-col items-center justify-center transition-opacity duration-700">
          <div className="text-center space-y-3">
            <div className="font-serif text-lg font-semibold tracking-wider text-[#2A1614]">
              WHITE ARCH
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#7E6360]">
              /
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#BA4332] animate-pulse font-medium">
              BRIDGE THE GAP
            </div>
          </div>
        </div>
      )}

      {/* Desktop Precision Custom Cursor */}
      <CustomCursor />

      {/* Persistent Elegant Navigation */}
      <Navbar onOpenProposal={() => setProposalOpen(true)} />

      {/* Main Continuous Cinematic Story */}
      <main>
        {/* 01: Hero */}
        <Hero onOpenProposal={() => setProposalOpen(true)} />

        {/* 02: Manifesto (Opening Statement) */}
        <Manifesto />

        {/* 03: Engineering Performance (Metrics) */}
        <Metrics />

        {/* 04: Digital Twin Experience (Signature Interaction) */}
        <DigitalTwin onOpenProposal={() => setProposalOpen(true)} />

        {/* 05: About / Heritage (Origin) */}
        <Heritage />

        {/* 06: Foundational Principles */}
        <Principles />

        {/* 07: Capabilities & Image Transitions */}
        <Capabilities onOpenProposal={() => setProposalOpen(true)} />

        {/* 08: Saudi Arabia Chapter Break */}
        <SaudiArabiaChapter />

        {/* 09: Target Critical Markets */}
        <TargetMarkets onOpenProposal={() => setProposalOpen(true)} />

        {/* 10: Kingdom-Wide Presence & Geodetic Map */}
        <KingdomMap />

        {/* 11: Project Philosophy (Quiet Contrast) */}
        <Philosophy />

        {/* 12: Standards & Governance */}
        <Standards />

        {/* 13: Final CTA */}
        <FinalCta onOpenProposal={() => setProposalOpen(true)} />
      </main>

      {/* 14: Editorial Footer */}
      <Footer onOpenProposal={() => setProposalOpen(true)} />

      {/* Interactive Technical Proposal / RFP Modal Drawer */}
      <ProposalModal
        isOpen={proposalOpen}
        onClose={() => setProposalOpen(false)}
      />
    </div>
  );
}
