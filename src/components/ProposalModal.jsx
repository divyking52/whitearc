import React, { useState } from 'react';
import { X, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function ProposalModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedDisciplines, setSelectedDisciplines] = useState(['HVAC & Central Chiller Plants']);
  const [location, setLocation] = useState('Riyadh Metro / Central Province');
  const [scale, setScale] = useState('10,000 – 50,000 sqm (Mid-Large Campus)');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    projectScope: ''
  });
  const [submittedCode, setSubmittedCode] = useState(null);

  if (!isOpen) return null;

  const disciplinesList = [
    'HVAC & Central Chiller Plants',
    'Specialized Pipe Freezing & Hot Tapping',
    'Medium Voltage (13.8kV) & Electrical MEP',
    'Tier III/IV Data Centre Infrastructure',
    'Testing, Adjusting & Balancing (NEBB/TAB)',
    'Fire Suppression & Smoke Management'
  ];

  const locationsList = [
    'Riyadh Metro / Central Province',
    'Dammam / Eastern Province / Jubail',
    'Jeddah / Western Region / Red Sea',
    'Neom / Tabuk Region',
    'Kingdom-Wide Mobile Deployment'
  ];

  const scalesList = [
    'Under 5,000 sqm (Specialized Facility)',
    '5,000 – 25,000 sqm (Commercial / Hospital)',
    '25,000 – 100,000+ sqm (Giga / Campus / District)',
    'Mission-Critical Data Center (1 MW - 50+ MW)'
  ];

  const toggleDiscipline = (disc) => {
    if (selectedDisciplines.includes(disc)) {
      if (selectedDisciplines.length > 1) {
        setSelectedDisciplines(selectedDisciplines.filter(d => d !== disc));
      }
    } else {
      setSelectedDisciplines([...selectedDisciplines, disc]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomCode = `WA-RFP-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    setSubmittedCode(randomCode);
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2A1614]/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FAF5EE] border border-[#D99480] text-[#2A1614] p-6 sm:p-10 my-8 shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between hairline-b pb-6 mb-8 border-[#E4D5C5]">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#BA4332] uppercase font-semibold">
              <span className="w-1.5 h-1.5 bg-[#BA4332]" />
              <span>TECHNICAL CONSULTATION // INITIATE PROPOSAL</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight mt-1 text-[#2A1614]">
              {step === 3 ? "PROPOSAL INITIATED" : "SPECIFY PROJECT SCOPE"}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-[#E4D5C5] text-[#7E6360] hover:text-[#2A1614] hover:border-[#BA4332] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 3 && (
          <div className="flex items-center justify-between text-[10px] font-mono text-[#7E6360] mb-8 hairline-b border-[#E4D5C5] pb-3">
            <span className={step === 1 ? "text-[#BA4332] font-semibold" : "text-[#7E6360]"}>
              01 // DISCIPLINES & LOCATION
            </span>
            <span>→</span>
            <span className={step === 2 ? "text-[#BA4332] font-semibold" : "text-[#7E6360]"}>
              02 // PROJECT DETAILS & CONTACT
            </span>
          </div>
        )}

        {/* STEP 1: Disciplines, Location & Scale */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-[11px] font-mono tracking-wider text-[#452A27] uppercase mb-3 font-medium">
                1. SELECT REQUIRED ENGINEERING DISCIPLINES
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {disciplinesList.map((disc) => {
                  const isChecked = selectedDisciplines.includes(disc);
                  return (
                    <button
                      type="button"
                      key={disc}
                      onClick={() => toggleDiscipline(disc)}
                      className={`p-3 text-left border text-xs font-mono transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-[#BA4332] bg-[#BA4332] text-[#FFFFFF] font-semibold shadow-sm'
                          : 'border-[#E4D5C5] bg-[#F4EAE0] text-[#452A27] hover:border-[#BA4332]'
                      }`}
                    >
                      <span>{disc}</span>
                      {isChecked && <span className="w-1.5 h-1.5 bg-[#FFFFFF]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-[11px] font-mono tracking-wider text-[#452A27] uppercase mb-2 font-medium">
                  2. PROJECT LOCATION (KSA / GCC)
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#F4EAE0] border border-[#E4D5C5] p-3 text-xs font-mono text-[#2A1614] focus:outline-none focus:border-[#BA4332]"
                >
                  {locationsList.map((loc) => (
                    <option key={loc} value={loc} className="bg-[#FAF5EE]">{loc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono tracking-wider text-[#452A27] uppercase mb-2 font-medium">
                  3. PROJECT SCALE / FOOTPRINT
                </label>
                <select
                  value={scale}
                  onChange={(e) => setScale(e.target.value)}
                  className="w-full bg-[#F4EAE0] border border-[#E4D5C5] p-3 text-xs font-mono text-[#2A1614] focus:outline-none focus:border-[#BA4332]"
                >
                  {scalesList.map((sc) => (
                    <option key={sc} value={sc} className="bg-[#FAF5EE]">{sc}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="hairline-t border-[#E4D5C5] pt-6 flex justify-between items-center">
              <span className="text-[10px] font-mono text-[#7E6360]">
                ISO 9001 / ARAMCO VENDOR COMPLIANT RFP
              </span>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-7 py-3 bg-[#BA4332] text-[#FFFFFF] text-xs font-mono tracking-widest font-semibold flex items-center gap-2 hover:bg-[#2A1614] transition-all shadow-sm"
              >
                <span>CONTINUE TO DETAILS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Client Credentials & Scope Brief */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono tracking-wider text-[#452A27] uppercase mb-1.5 font-medium">
                  CONTACT NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Eng. Abdullah Al-Otaibi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#F4EAE0] border border-[#E4D5C5] p-3 text-xs font-mono text-[#2A1614] placeholder-[#7E6360] focus:outline-none focus:border-[#BA4332]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-wider text-[#452A27] uppercase mb-1.5 font-medium">
                  COMPANY / ENTITY *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Organization or Authority Name"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-[#F4EAE0] border border-[#E4D5C5] p-3 text-xs font-mono text-[#2A1614] placeholder-[#7E6360] focus:outline-none focus:border-[#BA4332]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-wider text-[#452A27] uppercase mb-1.5 font-medium">
                  CORPORATE EMAIL *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com.sa"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#F4EAE0] border border-[#E4D5C5] p-3 text-xs font-mono text-[#2A1614] placeholder-[#7E6360] focus:outline-none focus:border-[#BA4332]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono tracking-wider text-[#452A27] uppercase mb-1.5 font-medium">
                  PHONE / WHATSAPP (+966) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+966 5X XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#F4EAE0] border border-[#E4D5C5] p-3 text-xs font-mono text-[#2A1614] placeholder-[#7E6360] focus:outline-none focus:border-[#BA4332]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono tracking-wider text-[#452A27] uppercase mb-1.5 font-medium">
                BRIEF SCOPE OR TECHNICAL CHALLENGE (OPTIONAL)
              </label>
              <textarea
                rows="3"
                placeholder="Mention chilled-water capacity, pipe size for live freeze, electrical load, or tender reference..."
                value={formData.projectScope}
                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                className="w-full bg-[#F4EAE0] border border-[#E4D5C5] p-3 text-xs font-mono text-[#2A1614] placeholder-[#7E6360] focus:outline-none focus:border-[#BA4332]"
              />
            </div>

            <div className="hairline-t border-[#E4D5C5] pt-6 flex justify-between items-center">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-mono text-[#7E6360] hover:text-[#2A1614]"
              >
                ← BACK TO SCOPE
              </button>

              <button
                type="submit"
                className="px-8 py-3.5 bg-[#BA4332] text-[#FFFFFF] text-xs font-mono tracking-widest font-semibold flex items-center gap-2 hover:bg-[#2A1614] transition-all shadow-sm"
              >
                <span>TRANSMIT TECHNICAL RFP</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Submission Confirmation */}
        {step === 3 && (
          <div className="space-y-6 text-center py-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#BA4332]/10 border border-[#BA4332] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#BA4332]" />
            </div>

            <div>
              <div className="text-xs font-mono text-[#7E6360] tracking-widest uppercase">
                REFERENCE CODE GENERATED
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-[#BA4332] mt-1 tracking-wider">
                {submittedCode}
              </div>
            </div>

            <p className="text-sm font-light text-[#452A27] max-w-md mx-auto leading-relaxed">
              Your technical dossier has been logged into our engineering dispatch queue in Dammam / Riyadh. Our lead discipline director will contact you within 4 hours.
            </p>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#BA4332] text-[#FFFFFF] text-xs font-mono font-semibold tracking-widest hover:bg-[#2A1614] transition-all shadow-sm"
              >
                RETURN TO EXPERIENCE
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
