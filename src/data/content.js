/**
 * WHITE ARCH — Core Corporate Engineering Content & Telemetry Data
 * Electromechanical, HVAC, MEP, Critical Infrastructure — KSA & GCC
 */

export const BRAND = {
  name: "WHITE ARCH",
  tagline: "PRECISION, MADE VISIBLE.",
  established: 2008,
  origin: "DMM / KSA",
  hq: "Dammam, Eastern Province, Kingdom of Saudi Arabia",
  status: "ONLINE",
  version: "REV / 2026.04",
  stats: [
    { value: "18+", label: "YEARS OF EXPERIENCE", sub: "Since 2008 in KSA & GCC" },
    { value: "1,500+", label: "PROJECTS DELIVERED", sub: "Mission-critical infrastructure" },
    { value: "24/7", label: "CRITICAL RESPONSE", sub: "Rapid engineering deployment" },
    { value: "100%", label: "SYSTEM ACCOUNTABILITY", sub: "End-to-end lifecycle integrity" }
  ]
};

export const DIGITAL_TWIN_SYSTEMS = [
  {
    id: "01",
    code: "SYS-CHL-01",
    name: "CHILLERS & COOLING",
    shortName: "Cooling Infrastructure",
    subtitle: "High-lift centrifugal and magnetic bearing chillers designed for 52°C ambient Gulf summers.",
    telemetry: {
      capacity: "14,800 TR",
      cop: "6.42 COP",
      chilledSupply: "4.4°C (40°F)",
      deltaT: "7.2°C ΔT",
      refrigerant: "R-1233zd(E) Low GWP",
      pumping: "Primary-Variable Flow"
    },
    specs: [
      { key: "COMPRESSOR TECH", value: "Magnetic Levitating Oil-Free Turbocor" },
      { key: "HEAT REJECTION", value: "Closed-Circuit Evaporative Towers with VFD" },
      { key: "THERMAL STORAGE", value: "Stratified Chilled-Water Tank Integration" },
      { key: "REDUNDANCY", value: "N+1 Central Plant Topology" }
    ],
    layers: ["Condenser Water Loops", "Primary Chilled Header", "VFD Plate Exchangers", "BMS BACnet IP"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85" // High-tech chiller / industrial mechanical room
  },
  {
    id: "02",
    code: "SYS-HVC-02",
    name: "HVAC DISTRIBUTION",
    shortName: "Air Systems & VRF",
    subtitle: "Aerodynamic low-leak ductwork, DOAS fresh air handlers, and zoned thermal conditioning.",
    telemetry: {
      airflow: "320,000 CFM",
      staticPressure: "3.5 in. w.g.",
      iaqIndex: "98.4% Clean",
      filtration: "MERV 14 + HEPA H14",
      heatRecovery: "82% Thermal Wheel Efficiency",
      soundRating: "NC-25 Compliance"
    },
    specs: [
      { key: "AIR HANDLERS", value: "Double-Skin Thermal Break Eurovent Class A1" },
      { key: "ZONING", value: "Pressure-Independent Control Valves (PICV)" },
      { key: "VARIABLE VOLUME", value: "VAV with Direct Digital Modulating Actuators" },
      { key: "DUCT STANDARDS", value: "SMACNA Class 3 High Pressure Fabricated" }
    ],
    layers: ["Supply Ducts (Insulated)", "Return Air Plenums", "Dedicated Outdoor Air (DOAS)", "VAV Modulation"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85" // High architecture ceiling / duct systems
  },
  {
    id: "03",
    code: "SYS-ELE-03",
    name: "ELECTRICAL SYSTEMS",
    shortName: "Power Infrastructure",
    subtitle: "Medium to low voltage power distribution, synchronized paralleling switchgear, and uninterrupted power.",
    telemetry: {
      connectedLoad: "18.5 MVA",
      powerFactor: "0.99 Active Corrected",
      thdCurrent: "< 3.0% Low Harmonics",
      generatorReserve: "4 × 2,500 kVA Standby",
      upsTopology: "2(N+1) Modular Flywheel/LiFePO4",
      busductRating: "4,000A Sandwich Copper"
    },
    specs: [
      { key: "MV SUBSTATION", value: "13.8 kV Gas-Insulated Switchgear (GIS)" },
      { key: "TRANSFORMERS", value: "Cast Resin Dry-Type Class F Insulation" },
      { key: "TRANSFER TIME", value: "< 12ms Automated Open/Closed ATS" },
      { key: "MONITORING", value: "Sub-Cycle Power Quality Metering (SCADA)" }
    ],
    layers: ["Medium Voltage Ring", "Sandwich Busduct Risers", "Isolated Ground Panels", "Emergency Generator Network"],
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=85" // Power distribution switchgear / architectural engineering
  },
  {
    id: "04",
    code: "SYS-DAT-04",
    name: "DATA CENTRE INFRASTRUCTURE",
    shortName: "Mission-Critical Cooling",
    subtitle: "Uptime Tier III/IV compliant containment, high sensible heat ratio CRAH units, and precision airflow.",
    telemetry: {
      pueTarget: "1.18 PUE Peak",
      rackDensity: "15 kW - 45 kW / Rack",
      uptimeTier: "Tier IV Fault Tolerant",
      inRowCooling: "Variable Speed ECM Fans",
      ambientTolerance: "Continuous Operation 55°C",
      thermalMass: "15-Minute Passive Cold Storage"
    },
    specs: [
      { key: "CONTAINMENT", value: "Aisle Modular Hard Containment with Pressure Relief" },
      { key: "COOLING ARCH", value: "Liquid-to-Chip Direct + In-Row CRAH Loop" },
      { key: "MONITORING", value: "DCIM Real-Time Computational Fluid Dynamics" },
      { key: "LEAK DETECTION", value: "Addressable Conductive Polymer Ribbon Array" }
    ],
    layers: ["Server Rack Containment", "Underfloor Supply Plenums", "Direct Liquid CDU Loops", "DCIM Telemetry Probes"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85" // High-tech server corridor / data center cooling
  },
  {
    id: "05",
    code: "SYS-FIR-05",
    name: "FIRE PROTECTION & LIFE SAFETY",
    shortName: "Active Life Safety",
    subtitle: "Early aspirating smoke detection (VESDA), clean agent gas suppression, and NFPA-compliant deluge.",
    telemetry: {
      detectionSpeed: "< 15s High Sensitivity VESDA",
      suppressionAgent: "FK-5-1-12 Clean Chemical Gas",
      firePumpCapacity: "2,500 GPM @ 185 PSI",
      waterStorage: "350,000 Gallon Dedicated Reservoir",
      smokeEvacuation: "12 Air Changes/Hr Stairwell Pressurization",
      certification: "UL Listed / FM Approved"
    },
    specs: [
      { key: "SPRINKLER TYPE", value: "Double Interlock Pre-Action & Fast Response ESFR" },
      { key: "PUMP SET", value: "Dual Diesel + Electric Jockey with FM Certification" },
      { key: "GAS SYSTEM", value: "Total Flooding 300 Bar Inert Gas & Novec Blend" },
      { key: "GOVERNANCE", value: "NFPA 13, 20, 72, 2001 & Saudi Civil Defense" }
    ],
    layers: ["Sprinkler Network", "Clean Agent Distribution", "VESDA Laser Aspirators", "Diesel Fire Pump Manifold"],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=85" // Industrial engineering piping and valves
  }
];

export const CAPABILITIES = [
  {
    id: "01",
    tag: "CAP-01 / THERMAL ARCHITECTURE",
    title: "HVAC SYSTEMS & CENTRAL PLANTS",
    subtitle: "Engineered for extreme desert ambient thermodynamics without parasitic efficiency loss.",
    description: "From massive district cooling interchanges to precision cleanroom environmental controls, White Arch designs, fabricates and installs industrial HVAC systems calibrated for continuous duty under 52°C ambient Gulf temperatures.",
    deliverables: [
      "Water-Cooled Centrifugal & Magnetic Chiller Plants",
      "District Cooling Substation & Energy Transfer Stations (ETS)",
      "Variable Refrigerant Flow (VRV / VRF) Multi-Split Topologies",
      "SMACNA-Certified Low-Leak Air Distribution Systems",
      "Dedicated Outdoor Air Systems (DOAS) with Enthalpy Energy Recovery"
    ],
    metrics: { efficiency: "Up to 34% Lower KW/TR", tolerance: "52°C Ambient Continuous", lifespan: "30-Year Plant Design" },
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "02",
    tag: "CAP-02 / LIVE INTERVENTIONS",
    title: "SPECIALIZED ENGINEERING",
    subtitle: "Zero-shutdown cryogenic pipe freezing, hot tapping, and high-risk live line intervention.",
    description: "When mission-critical facilities cannot afford a single second of plant shutdown, White Arch deploys specialized pipeline isolation engineering. We isolate, modify, and tie into active pressurized fluid lines with surgical precision.",
    deliverables: [
      "Cryogenic Liquid Nitrogen Pipe Freezing (-196°C) up to 36\" Diameter",
      "High-Pressure Under-Pressure Hot Tapping up to 48\" Mains",
      "Live Line Line Stopping & Bypass Diversion Systems",
      "Ultrasonic Wall Thickness & Non-Destructive Testing (NDT)",
      "24/7 Rapid Emergency Specialized Disaster Response Teams"
    ],
    metrics: { downtime: "0.00 Hours Facility Shutdown", pressure: "Up to 100 Bar Tested", safety: "Zero Incident Record" },
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "03",
    tag: "CAP-03 / POWER & HYDRAULICS",
    title: "ELECTRICAL & MEP INFRASTRUCTURE",
    subtitle: "End-to-end electro-mechanical integration for enterprise campuses, towers, and hospitals.",
    description: "Coordinated BIM Level 300-500 clash-free MEP execution. We unify heavy power transmission, sub-distribution, sanitary hydraulics, and automated life safety systems into one singular accountable engineering framework.",
    deliverables: [
      "13.8kV Medium Voltage Distribution & Substation Turnkey Packages",
      "Harmonic-Filtered Switchboards & 4000A Sandwich Copper Busducts",
      "Healthcare Isolated Power Systems (IPS) & Ultra-Clean Medical Gas (MGPS)",
      "Precision Booster Pump Skid Systems & Rainwater Retention",
      "Integrated BMS, SCADA & Industrial Modbus/BACnet Automation"
    ],
    metrics: { bimCoordination: "LOD 500 As-Built Exact", harmonics: "< 3% Total Distortion", delivery: "Turnkey Accountability" },
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "04",
    tag: "CAP-04 / PERFORMANCE AUDIT",
    title: "LIFECYCLE MANAGEMENT & COMMISSIONING",
    subtitle: "Testing, Adjusting, Balancing (TAB) and predictive condition-based asset optimization.",
    description: "Engineering does not terminate at handover. We manage the operational lifecycle of electromechanical assets, ensuring installed systems maintain peak design thermodynamic coefficient of performance throughout their operational lifespan.",
    deliverables: [
      "Independent Testing, Adjusting & Balancing (NEBB/AABC Standards)",
      "Comprehensive Building Commissioning (Cx) & Retro-Commissioning",
      "Thermographic Infrared & Ultrasonic Airborne Acoustic Leak Detection",
      "Vibration Analysis & Laser Dynamic Shaft Alignment",
      "Contractual Energy Optimization & Guaranteed Operational SLA"
    ],
    metrics: { verification: "100% Calibrated Instrumentation", auditStandard: "ASHRAE Guideline 0", compliance: "Saudi Building Code 601" },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85"
  }
];

export const PRINCIPLES = [
  {
    number: "01",
    label: "TRUST",
    headline: "ENGINEERED THROUGH CONSISTENT DELIVERY.",
    text: "Trust in electro-mechanical engineering cannot be marketed; it is forged across thousands of hours of uninterrupted plant uptime. When high-voltage switchgear engages and chillers shoulder full summer loads, our systems speak for our discipline."
  },
  {
    number: "02",
    label: "PEOPLE",
    headline: "EXPERTISE BEHIND EVERY SYSTEM.",
    text: "Behind every algorithmic BMS and every cryogenic pipe freeze is our senior team of licensed mechanical engineers, certified electrical technologists, and precision commissioning specialists who have dedicated careers to regional infrastructure."
  },
  {
    number: "03",
    label: "PROGRESS",
    headline: "BUILDING FOR A STRONGER REGION.",
    text: "As the Kingdom expands with monumental giga-projects, high-density data centres, and sustainable smart cities, White Arch provides the quiet electromechanical backbone that turns architectural blueprints into living, breathing reality."
  }
];

export const TARGET_MARKETS = [
  {
    id: "01",
    name: "HOSPITALS & CLEANROOMS",
    classification: "CLASS 1 CRITICAL / ISO 5 - ISO 8",
    description: "Positive/negative pressure isolation rooms, laminar flow surgical suites, 100% HEPA air filtration, uninterrupted isolated electrical supply (IPS), and medical gas distribution.",
    specs: "Air Changes: 25+ ACH · Temp Tolerance: ±0.5°C · Redundancy: 2N Power",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "02",
    name: "DATA CENTRES & TELECOM",
    classification: "UPTIME INSTITUTE TIER III & IV",
    description: "High sensible heat ratio CRAH cooling, aisle containment, liquid cooling manifolds, emergency generator synchronizing, and sub-cycle transient voltage protection.",
    specs: "Target PUE: 1.18 · Density: up to 45 kW/rack · Cold Storage: 15-min autonomous",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "03",
    name: "COMMERCIAL & FINANCIAL TOWERS",
    classification: "SUPER-TALL / GRADE-A MIXED USE",
    description: "High-pressure vertical chilled water risers, acoustic attenuation for low NC ratings, high-efficiency VAV airflow, smart BMS sub-metering, and smoke control.",
    specs: "Static Head: 45 Bar rated · NC Rating: NC-28 · Energy Standard: ASHRAE 90.1",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "04",
    name: "RETAIL & ENTERTAINMENT MEGA-DESTINATIONS",
    classification: "HIGH-OCCUPANCY DIVERSE LOAD",
    description: "Massive thermal storage integration, variable occupant CO2 demand ventilation, smoke management, and flexible tenant chilled-water metering infrastructure.",
    specs: "Cooling Scale: 12,000+ TR · Thermal Storage: Stratified Chill Tanks · IAQ: Real-time DCV",
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd301?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "05",
    name: "EDUCATION & RESEARCH CAMPUSES",
    classification: "DISTRICT NETWORKS / LABORATORY GRADE",
    description: "Central utility plant (CUP) integration, low-noise acoustic design, specialty chemical exhaust systems, variable air volume fume hood integration, and energy resilience.",
    specs: "District Piping: Pre-insulated HDPE/Steel · Fume Exhaust: Acid Resistant Polypropylene",
    image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=85"
  }
];

export const PRESENCE_LOCATIONS = [
  {
    city: "DAMMAM",
    region: "Eastern Province",
    type: "HEADQUARTERS & WORKSHOP",
    coords: "26.4207° N, 50.0888° E",
    projects: "620+ Projects",
    status: "PRIMARY HUB",
    details: "Central engineering headquarters, fabrication workshops for high-pressure ductwork, pre-insulated pipe spools, and cryogenic pipe freezing response center.",
    x: 78, // SVG percentage coordinates on stylized KSA map
    y: 42
  },
  {
    city: "RIYADH",
    region: "Central Province",
    type: "OPERATIONAL REGIONAL OFFICE",
    coords: "24.7136° N, 46.6753° E",
    projects: "540+ Projects",
    status: "GIGA-PROJECTS CELL",
    details: "Dedicated operations center supporting Vision 2030 developments, financial district commercial towers, Tier IV data centre clusters, and government complexes.",
    x: 62,
    y: 52
  },
  {
    city: "JEDDAH",
    region: "Western Region",
    type: "REGIONAL HUB",
    coords: "21.4858° N, 39.1925° E",
    projects: "310+ Projects",
    status: "COASTAL INFRASTRUCTURE",
    details: "Western province deployment supporting Red Sea corridor, hospitality masterplans, high-salinity corrosion-resistant coastal HVAC design, and seaport facilities.",
    x: 32,
    y: 65
  },
  {
    city: "KINGDOM-WIDE",
    region: "GCC Deployment",
    type: "RAPID SPECIALIZED RESPONSE",
    coords: "24.0000° N, 45.0000° E",
    projects: "1,500+ Total",
    status: "ACTIVE NETWORK",
    details: "Mobilized mobile teams for live pipe freezing, emergency hot tapping, and critical plant balancing deployed across all provinces and neighboring GCC territories.",
    x: 48,
    y: 35
  }
];

export const CERTIFICATIONS = [
  { code: "ISO 9001", title: "QUALITY MANAGEMENT SYSTEM", scope: "Comprehensive electromechanical design, procurement, execution & commissioning standards." },
  { code: "ISO 14001", title: "ENVIRONMENTAL MANAGEMENT", scope: "Low-GWP refrigerants, energy recovery, and minimized environmental footprint." },
  { code: "ISO 45001", title: "OCCUPATIONAL HEALTH & SAFETY", scope: "Zero-compromise high-voltage and high-pressure site safety protocols." },
  { code: "ARAMCO APPROVED", title: "VENDOR QUALIFICATION", scope: "Certified compliance with Saudi Aramco engineering and safety specifications." }
];

export const TECHNICAL_STANDARDS = [
  { name: "ASHRAE", desc: "American Society of Heating, Refrigerating and Air-Conditioning Engineers (55, 62.1, 90.1, 170)" },
  { name: "SMACNA", desc: "Sheet Metal and Air Conditioning Contractors' National Association (HVAC Duct Construction Standards)" },
  { name: "NFPA", desc: "National Fire Protection Association (NFPA 13, 14, 20, 72, 92, 2001)" },
  { name: "SAUDI BUILDING CODE", desc: "SBC 201 (General), SBC 501 (Mechanical), SBC 401 (Electrical), SBC 601 (Energy Conservation)" }
];
