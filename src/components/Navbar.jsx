import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import AudioAtmosphere from './AudioAtmosphere';

export default function Navbar({ onOpenProposal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "CAPABILITIES", href: "#capabilities" },
    { label: "SYSTEMS", href: "#systems" },
    { label: "MARKETS", href: "#markets" },
    { label: "STANDARDS", href: "#standards" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF5EE]/90 backdrop-blur-md hairline-b py-3.5 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-[92vw] max-w-[1720px] mx-auto flex items-center justify-between">
          {/* Brand Wordmark & System Status */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="group flex items-baseline gap-2 text-sm tracking-[0.22em] font-semibold text-[#2A1614] hover:text-[#BA4332] transition-colors"
            >
              <span className="font-serif text-lg tracking-normal font-semibold">WHITE ARCH</span>
              <span className="text-[9px] font-mono text-[#7E6360] font-normal tracking-widest hidden sm:inline">
                / ENG.
              </span>
            </a>

            {/* Regional Status Indicator */}
            <div className="hidden lg:flex items-center gap-2 pl-4 hairline-l py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BA4332] animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#BA4332] -ml-3" />
              <span className="text-[10px] font-mono tracking-widest text-[#7E6360]">
                KSA / ONLINE
              </span>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-[11px] font-mono tracking-[0.18em] text-[#452A27] hover:text-[#BA4332] transition-all duration-300 flex items-center gap-1.5"
              >
                <span className="w-1 h-1 rounded-full bg-[#BA4332] opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0" />
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {item.label}
                </span>
                <span className="absolute -bottom-1 left-2.5 right-0 h-[1px] bg-[#BA4332]/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Sound & Proposal CTA */}
          <div className="flex items-center gap-3">
            <AudioAtmosphere isMuted={isMuted} setIsMuted={setIsMuted} />

            <button
              onClick={onOpenProposal}
              className="group relative hidden sm:flex items-center gap-2 px-5 py-2 text-[11px] font-mono tracking-[0.14em] text-[#FFFFFF] bg-[#BA4332] hover:bg-[#2A1614] transition-all duration-300 shadow-sm"
            >
              <span>REQUEST PROPOSAL</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FAF5EE] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center gap-2 text-xs font-mono tracking-widest text-[#2A1614] p-1.5"
              aria-label="Toggle menu"
            >
              <span className="text-[10px] text-[#7E6360]">MENU</span>
              {mobileMenuOpen ? <X className="w-4 h-4 text-[#BA4332]" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#FAF5EE]/98 backdrop-blur-xl md:hidden pt-28 px-6 flex flex-col justify-between pb-12 hairline-b">
          <div className="space-y-6">
            <div className="text-[10px] font-mono tracking-widest text-[#7E6360] hairline-b pb-3 flex justify-between">
              <span>INDEX / SECTIONS</span>
              <span>KSA · GCC</span>
            </div>

            <nav className="flex flex-col space-y-5">
              {navLinks.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-2xl font-serif text-[#2A1614] hover:text-[#BA4332] transition-colors py-1 hairline-b"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-[#7E6360]">0{idx + 1}</span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#7E636F]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full py-3.5 bg-[#BA4332] text-[#FFFFFF] text-xs font-mono font-medium tracking-widest flex items-center justify-center gap-2 shadow-sm"
            >
              <span>REQUEST PROPOSAL</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex justify-between text-[10px] font-mono text-[#7E636F] pt-2">
              <span>DAMMAM / RIYADH</span>
              <span>EST. 2008</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
