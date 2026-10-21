export const BUSINESS = {
  name: 'Ultimate Green Electric, Inc.',
  shortName: 'Ultimate Green Electric',
  domain: 'www.ultimategreenelectric.com',
  baseUrl: 'https://www.ultimategreenelectric.com',
  phone: '+1 (949) 312-6033',
  phoneRaw: '+19493126033',
  phoneDisplay: '(949) 312-6033',
  email: 'admin@msqelectric.com',
  license: '999000',
  street: '27525 Puerta Real Ste 300-140',
  city: 'Mission Viejo',
  state: 'CA',
  zip: '92692',
  hours: {
    weekdays: '7:00 AM - 5:00 PM',
    weekend: 'By Appointment Only',
    emergency: '24/7 Emergency Services Available',
  },
  mapsEmbedUrl: 'https://maps.app.goo.gl/v8HRfX9n4Vvpm19X8',
  mapsLink: 'https://maps.app.goo.gl/v8HRfX9n4Vvpm19X8',
};

export const MAIN_LOCATION = 'mission-viejo';

export const SERVICE_LOCATIONS = [
  { slug: 'mission-viejo', name: 'Mission Viejo', zip: '92692' },
  { slug: 'irvine', name: 'Irvine', zip: '92620' },
  { slug: 'dana-point', name: 'Dana Point', zip: '92629' },
  { slug: 'laguna-hills', name: 'Laguna Hills', zip: '92653' },
  { slug: 'laguna-niguel', name: 'Laguna Niguel', zip: '92677' },
  { slug: 'lake-forest', name: 'Lake Forest', zip: '92630' },
  { slug: 'aliso-viejo', name: 'Aliso Viejo', zip: '92656' },
  { slug: 'san-juan-capistrano', name: 'San Juan Capistrano', zip: '92675' },
  { slug: 'rancho-santa-margarita', name: 'Rancho Santa Margarita', zip: '92688' },
  { slug: 'newport-beach', name: 'Newport Beach', zip: '92660' },
];

export interface ServiceInfo {
  slug: string;
  title: string;
  shortTitle: string;
  primaryKeyword: string;
  icon: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  intro: string;
  whatIncluded: string[];
  whenNeeded: { title: string; desc: string }[];
  procedure: { step: number; title: string; desc: string }[];
  safetyAndPermits: { heading: string; body: string; highlights: string[] };
  projectHighlight: {
    title: string;
    location: string;
    description: string;
    specs: string[];
    image: string;
    imageAlt: string;
  };
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: 'residential-electrician',
    title: 'Residential Electrician',
    shortTitle: 'Residential',
    primaryKeyword: 'Residential electrician',
    icon: 'Home',
    image: 'https://images.pexels.com/photos/8961701/pexels-photo-8961701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Residential electrician installing copper wiring in an Orange County home',
    metaTitle: 'Residential Electrician | Ultimate Green Electric',
    metaDescription: 'Trusted residential electrician serving Mission Viejo & South Orange County. Licensed, bonded & insured. Home rewiring, panels, EV chargers & repairs. Call (949) 312-6033.',
    h1: 'Residential Electrician in Mission Viejo & South Orange County',
    summary: 'Dependable, code-compliant home electrical services — from complete kitchen rewiring and panel upgrades to EV chargers and safety inspections.',
    intro: 'Your home\'s electrical system powers your daily family life, modern electronics, and home comfort. Ultimate Green Electric, Inc. provides licensed residential electrical contracting across Mission Viejo and South Orange County. Whether you are modernizing an established 1970s tract home or completing a custom remodel, our certified technicians deliver clean, safe, and code-compliant installations with upfront itemized pricing.',
    whatIncluded: [
      'Complete and partial home rewiring & circuit additions',
      'Dedicated 120V & 240V circuits for appliances & heat pumps',
      'Recessed LED lighting, chandeliers & smart dimmer switches',
      'Whole-home electrical safety inspections & load calculations',
      'Tamper-resistant GFCI & AFCI circuit breaker installations',
      'Whole-house surge protection & panel capacity upgrades'
    ],
    whenNeeded: [
      {
        title: 'Remodeling Kitchens or Bathrooms',
        desc: 'Modern code requires dedicated 20-amp small appliance branch circuits and GFCI protection in wet areas.'
      },
      {
        title: 'Frequent Breaker Trips or Dimming Lights',
        desc: 'Tripping breakers or lights that dim when microwaves or vacuum cleaners start indicate overloaded circuits.'
      },
      {
        title: 'Ungrounded Two-Prong Outlets',
        desc: 'Homes built before the mid-1960s often have ungrounded receptacles that cannot safely protect modern electronics.'
      },
      {
        title: 'Adding Modern High-Draw Appliances',
        desc: 'Induction ranges, sub-zero refrigerators, and central air systems demand dedicated, properly sized wiring runs.'
      }
    ],
    procedure: [
      {
        step: 1,
        title: 'Initial Consultation & Electrical Assessment',
        desc: 'We review your project goals, perform an on-site evaluation of your current panel capacity, and inspect existing branch circuits.'
      },
      {
        step: 2,
        title: 'Detailed Itemized Estimate',
        desc: 'You receive a transparent quote outlining exact materials, labor, and municipal permit fees before any work begins.'
      },
      {
        step: 3,
        title: 'Clean, Code-Compliant Installation',
        desc: 'Our certified electricians wear shoe covers, protect your furnishings with drop cloths, and route wiring cleanly to code.'
      },
      {
        step: 4,
        title: 'Testing, Cleanup & City Inspection',
        desc: 'We test every circuit with polarity and load analyzers, clean the work area thoroughly, and coordinate city building inspections.'
      }
    ],
    safetyAndPermits: {
      heading: 'Residential Permitting & Electrical Safety Considerations',
      body: 'In California, residential electrical work must comply with the 2026 California Electrical Code (Title 24) and local municipal guidelines. Work involving new branch circuits, panel replacements, or major rewiring requires building permits pulled through your local city building department (e.g. City of Mission Viejo, City of Irvine). We pull all required permits and schedule official inspections to ensure your homeowners insurance remains fully protected.',
      highlights: [
        'Compliant with 2026 California Electrical Code (Title 24)',
        'AFCI protection required on all bedroom, family room & living room circuits',
        'Tamper-resistant receptacles installed to protect children from shock hazards'
      ]
    },
    projectHighlight: {
      title: 'Whole-Home Rewiring & Kitchen Remodel',
      location: 'Laguna Niguel, CA',
      description: 'Completed comprehensive electrical rewiring for a major residential kitchen renovation, adding dual 20A appliance circuits, island GFCI protection, and under-cabinet LED illumination.',
      specs: ['Dual 20A Small Appliance Circuits', 'AFCI/GFCI Protection', 'Clean Drywall Preservation', 'City Permitted & Inspected'],
      image: 'https://images.pexels.com/photos/8961701/pexels-photo-8961701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Residential kitchen electrical rewiring in Laguna Niguel'
    },
    sections: [
      {
        heading: 'Whole-Home Electrical Solutions',
        body: 'Whether you\'re remodeling a kitchen, adding a new appliance, or troubleshooting flickering lights, our residential electricians have the training and tools to get the job done right the first time. We work on homes of every age — from newer builds in Irvine to older properties in Mission Viejo and San Juan Capistrano that need careful panel and wiring upgrades to meet current code.'
      },
      {
        heading: 'Safety First, Always',
        body: 'Electrical problems in a home are dangerous fire hazards. That\'s why every residential service call includes a visual safety inspection of your panel, outlets, and visible wiring. We\'ll flag hazards and give you honest recommendations, never up-selling work you don\'t need.'
      },
      {
        heading: 'Transparent Pricing & Clean Workmanship',
        body: 'We provide free estimates on most residential projects and stand behind every job. Our electricians wear shoe covers, lay down drop cloths, and clean up thoroughly before leaving. You\'ll know the cost before we start, and there are no surprise fees on the final invoice.'
      }
    ],
    faqs: [
      { question: 'Do you offer free estimates for residential electrical work?', answer: 'Yes, we provide free estimates on most residential projects in Mission Viejo and South Orange County. Call (949) 312-6033 to schedule an on-site visit.' },
      { question: 'Are your residential electricians licensed and insured?', answer: 'Yes. Ultimate Green Electric, Inc. is a licensed California C-10 Electrical Contractor (Lic #999000), bonded for $25,000, and carrying $2,000,000 in general liability plus full workers\' compensation.' },
      { question: 'Can you work on older homes with aluminum wiring?', answer: 'Yes. We frequently service older South Orange County homes with aluminum branch circuits, installing safe COPALUM or AlumiConn compression connectors to eliminate fire hazards.' }
    ]
  },
  {
    slug: 'commercial-electrician',
    title: 'Commercial Electrical Contractor',
    shortTitle: 'Commercial',
    primaryKeyword: 'Commercial electrical contractor',
    icon: 'Building2',
    image: 'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Commercial electrical contractor working on commercial facility wiring',
    metaTitle: 'Commercial Electrical Contractor | Ultimate Green Electric',
    metaDescription: 'Licensed commercial electrical contractor in Orange County, CA. Tenant improvements, 3-phase power, Title 24 LED retrofits & scheduled maintenance. Call (949) 312-6033.',
    h1: 'Commercial Electrical Contractor in Orange County, CA',
    summary: 'Reliable commercial electrical contracting for Orange County businesses — tenant buildouts, 3-phase power, Title 24 retrofits, and scheduled maintenance.',
    intro: 'Downtime costs commercial businesses money and damages client trust. Ultimate Green Electric, Inc. delivers commercial electrical contracting services across South Orange County that keep your operations running safely. From office tenant buildouts in the Irvine Business Complex to retail lighting upgrades in Mission Viejo, our commercial electricians deliver code-compliant work on schedule and on budget.',
    whatIncluded: [
      'Commercial tenant improvements, office buildouts & renovations',
      '3-phase electrical distribution panels, switchgear & subpanels',
      'California Title 24 commercial LED retrofits with occupancy sensors',
      'Dedicated machinery circuits, motor disconnects & server room power',
      'Emergency egress lighting, illuminated exit signs & battery backups',
      'Preventative electrical maintenance & annual infrared safety audits'
    ],
    whenNeeded: [
      {
        title: 'Commercial Lease Tenant Improvements',
        desc: 'Relocating or configuring commercial suites requires modifying circuits, lighting zones, and dedicated equipment lines.'
      },
      {
        title: 'Fulfilling California Title 24 Energy Standards',
        desc: 'Commercial building renovations trigger Title 24 energy mandates requiring daylight harvesting and automatic shutoff sensors.'
      },
      {
        title: 'Tripping Machinery Breakers',
        desc: 'Industrial tools, restaurant refrigeration, or medical devices drawing excessive continuous current require dedicated branch circuits.'
      },
      {
        title: 'High Commercial Electricity Bills',
        desc: 'Retrofitting old fluorescent troffers and metal halides with commercial LEDs can reduce power usage by 60% or more.'
      }
    ],
    procedure: [
      {
        step: 1,
        title: 'Plan Review & Load Calculation',
        desc: 'We examine your architectural blueprints, electrical schematics, and utility capacity to design an optimal, code-compliant layout.'
      },
      {
        step: 2,
        title: 'Permit & Inspection Coordination',
        desc: 'We submit electrical plans and pull commercial permits through municipal building and fire safety departments.'
      },
      {
        step: 3,
        title: 'Conduit & Distribution Installation',
        desc: 'Our commercial crews install EMT conduit runs, 3-phase subpanels, lighting controls, and dedicated machinery disconnects.'
      },
      {
        step: 4,
        title: 'Commissioning & Inspection Walk-Through',
        desc: 'We perform complete circuit verification, Title 24 lighting control commissioning, and coordinate the final inspector sign-off.'
      }
    ],
    safetyAndPermits: {
      heading: 'Commercial Permitting & Safety Standards',
      body: 'Commercial installations involve higher voltages (208V, 240V, and 480V 3-phase) and stricter safety oversight under OSHA, NFPA 70E, and California Title 24. Municipal building and fire inspectors rigorously verify emergency egress lighting run times, proper conduit grounding, and disconnect labeling before signing off on a Certificate of Occupancy. We manage this entire process for you.',
      highlights: [
        'Adherence to NFPA 70E Electrical Safety in the Workplace',
        'Title 24 mandatory lighting controls & acceptance testing',
        'Flexible after-hours and weekend scheduling to eliminate downtime'
      ]
    },
    projectHighlight: {
      title: 'Commercial Office LED Title 24 Retrofit',
      location: 'Irvine, CA',
      description: 'Upgraded an 8,500 sq ft technology suite in the Irvine Business Complex with Title 24 compliant LED flat-panel troffers, multi-zone automated daylight sensors, and digital dimming controls.',
      specs: ['California Title 24 Compliant', 'Daylight Harvesting Sensors', '65% Energy Reduction', 'After-Hours Scheduling'],
      image: 'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Commercial LED lighting installation in Irvine office'
    },
    sections: [
      {
        heading: 'Tenant Improvements & Build-Outs',
        body: 'Moving into a new commercial space or renovating an existing one? We handle complete electrical build-outs including new circuits, lighting design, data cabling support, and panel upgrades. We coordinate with your general contractor and city inspectors so the project stays on track.'
      },
      {
        heading: 'Lighting Retrofits & Energy Savings',
        body: 'Upgrading to LED lighting is one of the fastest-payback investments a business can make. We retrofit office suites, warehouses, retail stores, and restaurants throughout Orange County with energy-efficient lighting that slashes electricity bills and improves light quality.'
      },
      {
        heading: 'Minimizing Business Disruption',
        body: 'We schedule commercial work around your hours of operation whenever possible — evenings, early mornings, or weekends by appointment. Our goal is to get your business back to full power with minimal disruption to your customers and staff.'
      }
    ],
    faqs: [
      { question: 'Can you work after business hours to avoid commercial downtime?', answer: 'Yes. We offer flexible scheduling including evenings and weekend appointments for commercial clients across Orange County. Call (949) 312-6033 to arrange a schedule that works for your business.' },
      { question: 'Do you handle 3-phase power installations?', answer: 'Yes, our certified electricians are experienced with 120/208V and 277/480V 3-phase commercial electrical systems, heavy equipment disconnects, and transformer tie-ins.' },
      { question: 'Can you help our business comply with California Title 24?', answer: 'Yes. We specialize in Title 24 compliant commercial LED lighting retrofits, daylight harvesting sensors, and automated controls required by California building codes.' }
    ]
  },
  {
    slug: 'electrical-repair',
    title: 'Electrical Repair Service',
    shortTitle: 'Repairs',
    primaryKeyword: 'Electrical repair service',
    icon: 'Wrench',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician diagnosing and repairing circuit breaker panel',
    metaTitle: 'Electrical Repair Services | Ultimate Green Electric',
    metaDescription: 'Fast electrical repair service in Mission Viejo & South Orange County. Tripping breakers, dead outlets, flickering lights & wiring faults. Call (949) 312-6033.',
    h1: 'Electrical Repair Service in Orange County, CA',
    summary: 'From tripping breakers and dead outlets to complex wiring diagnostics, our licensed electricians diagnose root causes and fix problems fast.',
    intro: 'Electrical malfunctions rarely occur at a convenient time. Whether a circuit breaker continuously trips, an entire room loses power, or a wall switch emits a burning odor, Ultimate Green Electric, Inc. delivers prompt, dependable electrical repair services throughout South Orange County. We never guess; our electricians use calibrated thermal cameras and diagnostic circuit analyzers to locate the true root cause and fix it permanently to code.',
    whatIncluded: [
      'Circuit breaker troubleshooting, testing & replacement',
      'Dead outlet, faulty switch & GFCI receptacle diagnosis and repair',
      'Flickering, buzzing or dimming light circuit repairs',
      'Aluminum wiring remediation & loose neutral connection repairs',
      'Overheated panel buss bar inspection & electrical lug torque-to-spec',
      'Short circuit and ground fault isolation in residential & commercial lines'
    ],
    whenNeeded: [
      {
        title: 'Breakers Tripping Repeatedly',
        desc: 'A breaker that immediately snaps back when reset indicates a dangerous direct short circuit or severe overload.'
      },
      {
        title: 'Burning Plastic or Fishy Odors',
        desc: 'Overheating wire insulation or melting receptacle plastics emit distinct odors that demand immediate attention before fire starts.'
      },
      {
        title: 'Warm or Discolored Switch Plates',
        desc: 'Wall plates that feel warm to the touch or show brown scorch marks signify high electrical resistance and loose connections.'
      },
      {
        title: 'Partial Power Loss / One Phase Dead',
        desc: 'When half of the 120V circuits in your building die simultaneously, a utility feeder phase or main breaker pole has failed.'
      }
    ],
    procedure: [
      {
        step: 1,
        title: 'Diagnostic Isolation & Thermal Scan',
        desc: 'We test circuit continuity, measure voltage drops under load, and scan breaker connections with thermal imaging to pinpoint the exact failure point.'
      },
      {
        step: 2,
        title: 'Plain-English Explanation & Upfront Quote',
        desc: 'We explain what caused the fault and present an itemized written quote before any physical repairs begin.'
      },
      {
        step: 3,
        title: 'Precision Code-Compliant Repair',
        desc: 'We replace damaged breakers, re-pull compromised conductors, or rewire junctions to manufacturer torque specifications.'
      },
      {
        step: 4,
        title: 'Load Testing & Safety Verification',
        desc: 'We verify proper voltage, polarity, and grounding on the affected branch circuit to guarantee lasting safety and reliability.'
      }
    ],
    safetyAndPermits: {
      heading: 'Safety Considerations for Electrical Repairs',
      body: 'Attempting DIY repairs on live electrical circuits or repeatedly resetting a tripping breaker can cause dangerous electrical arcing and structural fires. Under California safety guidelines, faulty wiring must be repaired with code-approved materials and proper wire gauges matching breaker amperages. Minor repairs and component replacements generally do not require permits, but any altered or newly extended branch circuits must comply with current NEC safety standards.',
      highlights: [
        'Never force or tape a tripped circuit breaker into the ON position',
        'All component replacements use UL-listed, commercial-grade hardware',
        'Same-day service available with fully stocked mobile repair vehicles'
      ]
    },
    projectHighlight: {
      title: 'Emergency Feeder Cable & Subpanel Repair',
      location: 'Lake Forest, CA',
      description: 'Same-day emergency response to replace a burned feeder lug and restore lost power phases to a residential home within 3 hours of customer call.',
      specs: ['Same-Day Emergency Dispatch', 'Thermal Camera Diagnosis', 'Torque-to-Spec Connections', 'Safe Power Restoration'],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Emergency subpanel repair in Lake Forest'
    },
    sections: [
      {
        heading: 'Common Electrical Repairs We Handle',
        body: 'Tripping breakers, dead outlets, flickering or dimming lights, warm switch plates, burning smells from outlets, sparking, outdated aluminum wiring, damaged wiring from rodents or water, and GFCI failures. If something seems off with your electrical system, don\'t wait — small problems can become serious hazards quickly.'
      },
      {
        heading: 'Honest Diagnosis, Lasting Fixes',
        body: 'We never guess. Our electricians use professional diagnostic equipment to trace the actual cause of your problem, then explain it in plain language before any work begins. You\'ll get a clear scope of work and upfront pricing. We fix it right the first time so the same issue doesn\'t come back next month.'
      },
      {
        heading: 'Same-Day Service Available',
        body: 'Many electrical repairs in Orange County can be completed the same day you call. We keep our service vehicles fully stocked with common parts so we can resolve most issues in a single visit. Call (949) 312-6033 and we\'ll dispatch an electrician to your door.'
      }
    ],
    faqs: [
      { question: 'How quickly can you respond to an electrical repair call?', answer: 'We offer same-day service for most electrical repairs in Mission Viejo and South Orange County. Call (949) 312-6033 and we\'ll dispatch a mobile unit as quickly as possible.' },
      { question: 'Is flickering light considered an electrical emergency?', answer: 'If only one lamp flickers, the bulb or fixture socket may be loose. If multiple lights throughout the home flicker or dim when major appliances turn on, call us right away — it could signal a dangerous loose neutral or main service panel failure.' },
      { question: 'Do you charge travel fees in South Orange County?', answer: 'No, we do not charge extra travel fees within our verified South Orange County service area. All pricing is upfront and transparent.' }
    ]
  },
  {
    slug: 'emergency-electrician',
    title: 'Emergency Electrician',
    shortTitle: '24/7 Emergency',
    primaryKeyword: 'Emergency electrician',
    icon: 'Zap',
    image: 'https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Emergency electrician working on outdoor main electrical panel at night',
    metaTitle: 'Emergency Electrician | Ultimate Green Electric',
    metaDescription: '24/7 emergency electrician in Mission Viejo & South Orange County. Power outages, arcing, burning smells & panel failures. Call (949) 312-6033 immediately.',
    h1: '24/7 Emergency Electrician in Orange County, CA',
    summary: 'Electrical emergency? We respond 24/7 to sparking, burning smells, buzzing panels, and sudden outages throughout South Orange County.',
    intro: 'An electrical emergency is an immediate threat to your property and your family\'s safety. Arcing wires, glowing breakers, or hot electrical panels can ignite a structural fire in minutes. Ultimate Green Electric, Inc. provides 24/7 emergency electrical dispatch across South Orange County. Our licensed emergency electricians arrive in fully stocked mobile vehicles prepared to stabilize hazardous conditions and restore safe power.',
    whatIncluded: [
      '24/7 immediate phone triage & emergency mobile dispatch',
      'Rapid isolation of arcing, smoking or sparking electrical components',
      'Main breaker failure and total power outage restoration',
      'Water intrusion containment in electrical panels & meters',
      'Emergency temporary bypass wiring to restore vital medical/refrigeration circuits',
      'Permanent code-compliant repairs and utility coordination'
    ],
    whenNeeded: [
      {
        title: 'Sparking or Arcing from Outlets or Breakers',
        desc: 'Visible sparks or popping noises indicate immediate electrical breakdown and a severe fire hazard.'
      },
      {
        title: 'Acrid Burning Smell Near Electrical Boxes',
        desc: 'A distinct smell of burning fish or melting plastic near switches or panels requires prompt emergency shutdown.'
      },
      {
        title: 'Loud Buzzing or Humming from Main Panel',
        desc: 'Loud vibration sounds from circuit breakers mean a breaker has failed to trip under extreme internal overload.'
      },
      {
        title: 'Water Contacting Live Electrical Equipment',
        desc: 'Flooding, roof leaks, or broken pipes dripping onto breaker panels or outlets require emergency power isolation.'
      }
    ],
    procedure: [
      {
        step: 1,
        title: 'Immediate Phone Triage & Safety Guidance',
        desc: 'When you call (949) 312-6033, our on-call coordinator instructs you on safely shutting off your main breaker if safe to do so.'
      },
      {
        step: 2,
        title: 'Rapid Mobile Unit Dispatch',
        desc: 'Our nearest on-duty electrician is dispatched directly to your property with full diagnostic and replacement parts.'
      },
      {
        step: 3,
        title: 'Hazard Containment & Thermal Imaging',
        desc: 'We locate the fault, neutralize fire and shock hazards, and assess the extent of thermal damage.'
      },
      {
        step: 4,
        title: 'Safe Restoration & Permanent Repair',
        desc: 'We perform immediate code-compliant component replacements or safe temporary isolation until permanent repairs are finalized.'
      }
    ],
    safetyAndPermits: {
      heading: 'Critical Safety Steps While Waiting for an Emergency Electrician',
      body: 'If you see sparks or smell smoke, turn off power at your main electrical breaker immediately ONLY if you can access it safely without standing in water. If the panel itself is smoking or arcing, evacuate the property and dial 911 immediately, then contact our emergency dispatch at (949) 312-6033. Never attempt to extinguish an electrical fire with water.',
      highlights: [
        'Available 24 hours a day, 7 days a week, 365 days a year',
        'Direct dispatch across Mission Viejo, Irvine, Laguna Niguel & South OC',
        'Coordination with local utilities (SCE / SDG&E) when service drops are compromised'
      ]
    },
    projectHighlight: {
      title: '24/7 Emergency Main Panel Stabilization',
      location: 'Mission Viejo, CA',
      description: 'Dispatched within 35 minutes on a Sunday evening to isolate a failed, smoking 200A main service disconnect, safely restoring critical circuits until replacement the next morning.',
      specs: ['35-Minute Arrival Time', 'Thermal Hazard Neutralization', 'Emergency Circuit Isolation', 'Safe Family Power Restored'],
      image: 'https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Emergency electrician stabilizing electrical panel in Mission Viejo'
    },
    sections: [
      {
        heading: 'When to Call an Emergency Electrician',
        body: 'Call us immediately if you experience: sparking from an outlet or switch, a burning plastic smell near electrical panels or outlets, buzzing or humming from your panel, a breaker that won\'t stay reset, water damage near wiring, or a complete power outage that isn\'t a utility company issue. These situations are fire hazards and need professional attention right away.'
      },
      {
        heading: 'Fast Response in Orange County',
        body: 'Because we\'re based in Orange County, we can reach most local addresses quickly. Our emergency electricians arrive in fully stocked vehicles ready to stabilize the situation, identify the hazard, and perform immediate repairs or safe temporary fixes until a permanent solution can be completed.'
      },
      {
        heading: 'Safety First — What to Do While You Wait',
        body: 'If you smell burning or see sparks, turn off power at the main breaker if you can do so safely. Do not touch any affected outlets or switches. Evacuate the area if the smell is strong. Then call (949) 312-6033 and we\'ll guide you through next steps while an electrician is on the way.'
      }
    ],
    faqs: [
      { question: 'Do you offer real 24/7 emergency electrical service?', answer: 'Yes. Our emergency electrical line is monitored 24/7. Call (949) 312-6033 any time, day or night, for rapid dispatch across South Orange County.' },
      { question: 'What counts as an electrical emergency?', answer: 'Sparking, burning odors, hot switch plates, breaker humming, water near wiring, and sudden partial or total power outages are all critical emergencies.' },
      { question: 'How fast can an emergency electrician reach my home?', answer: 'Because our dispatch hub is in Mission Viejo, average response times across South Orange County are under 45 minutes.' }
    ]
  },
  {
    slug: 'panel-upgrade',
    title: 'Electrical Panel Upgrade',
    shortTitle: 'Panel Upgrades',
    primaryKeyword: 'Electrical panel upgrade',
    icon: 'LayoutGrid',
    image: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician installing a new 200-amp electrical panel in Orange County',
    metaTitle: 'Electrical Panel Upgrades | Ultimate Green Electric',
    metaDescription: 'Expert electrical panel upgrade in Orange County, CA. Replace outdated 100A panels with safe 200A/400A service. Permits handled. Call (949) 312-6033.',
    h1: 'Electrical Panel Upgrade in Orange County, CA',
    summary: 'Modernize your home\'s electrical capacity with a safe 200-amp or 400-amp panel upgrade. Permits, inspections & whole-home surge protection included.',
    intro: 'If your home was built more than 25 years ago, it likely runs on a 100-amp electrical panel — or worse, a hazardous Zinsco, Federal Pacific Electric (FPE), or Challenger breaker box. Today\'s households draw significantly more power with central AC, Level 2 EV chargers, induction cooking, and pool pumps. Ultimate Green Electric, Inc. specializes in turnkey 200-amp and 400-amp main service panel upgrades throughout South Orange County, pulling city permits and completing most installations in a single day.',
    whatIncluded: [
      'Removal and safe disposal of outdated 100A/125A or hazardous fuse panels',
      'Installation of modern 200A or 400A commercial-grade copper-bus service panels',
      'New utility meter socket, service entrance cables & weatherhead assembly',
      'Dual copper grounding rod installation & water pipe bond verification to code',
      'Integrated Type 1 or Type 2 whole-home surge protection',
      'Complete municipal permit acquisition & utility coordination (SCE / SDG&E)'
    ],
    whenNeeded: [
      {
        title: 'Installing an EV Charger or Solar Battery',
        desc: 'Level 2 EV chargers draw 32A to 48A continuous power, requiring a minimum 200-amp service to prevent overloading.'
      },
      {
        title: 'Outdated Zinsco, Federal Pacific or Challenger Panel',
        desc: 'These obsolete brands have documented failure rates where breakers fail to trip under dead shorts, creating major fire risks.'
      },
      {
        title: 'Frequent Breaker Trips When Multiple Appliances Run',
        desc: 'If running your microwave while your AC is on trips your main breaker, your panel has reached its maximum service capacity.'
      },
      {
        title: 'Insurance Carrier Mandates Replacement',
        desc: 'Many California homeowners insurance companies refuse coverage or issue cancellations until 100A or Zinsco panels are upgraded.'
      }
    ],
    procedure: [
      {
        step: 1,
        title: 'Whole-Home Load Calculation',
        desc: 'We calculate your property\'s square footage and connected electrical loads (HVAC, kitchen appliances, EV chargers) according to NEC Article 220.'
      },
      {
        step: 2,
        title: 'Municipal Permit Submission & Utility Coordination',
        desc: 'We draft electrical line diagrams, submit permit applications to your city building department, and coordinate power disconnect with SCE/SDG&E.'
      },
      {
        step: 3,
        title: 'One-Day Service Panel Replacement',
        desc: 'Power is disconnected in the morning; our crew mounts the new weather-tight panel, re-terminates all circuits, and installs grounding rods.'
      },
      {
        step: 4,
        title: 'City Inspection & Power Reconnection',
        desc: 'The city building inspector reviews the work, issues meter release to the utility, and power is fully restored the same afternoon.'
      }
    ],
    safetyAndPermits: {
      heading: 'Permitting, City Inspection & Code Requirements',
      body: 'Every electrical panel upgrade in California requires a municipal building permit and formal utility coordination. The 2026 California Electrical Code mandates that new service panels have external emergency disconnects accessible to firefighters, dedicated dual grounding rods driven a minimum of 6 feet apart, and whole-home surge protection. We handle 100% of the permitting paperwork and walk through the inspection with the city inspector on your behalf.',
      highlights: [
        '100% permitted through your local city building department',
        'Full utility disconnect/reconnect coordination with Southern California Edison',
        'Completed in a single day with power restored by late afternoon'
      ]
    },
    projectHighlight: {
      title: '200A Main Service Panel Upgrade',
      location: 'Mission Viejo, CA',
      description: 'Replaced an original 100-amp Zinsco panel on a 1978 Mission Viejo home with a modern Square D QO 200-amp panel, dual grounding rods, and whole-home surge protection.',
      specs: ['200A Main Breaker', 'Whole-Home Surge Protector', 'City of Mission Viejo Permitted', '1-Day Completion'],
      image: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: '200-amp main service panel replacement in Mission Viejo'
    },
    sections: [
      {
        heading: 'Signs You Need a Panel Upgrade',
        body: 'Your breaker trips frequently. You\'ve added a major appliance, EV charger, or AC unit. Your lights dim when large loads turn on. Your panel is more than 25 years old. You still have a fuse box. You\'re planning a home addition or remodel. Any of these means it\'s time to have a licensed electrician evaluate your panel capacity.'
      },
      {
        heading: '200-Amp and 400-Amp Upgrades',
        body: 'We upgrade Orange County homes from 100-amp to 200-amp or 400-amp service, including new meter bases, grounding, bonding, and all required permitting and inspection. Modern panels give you headroom for EV chargers, tankless water heaters, solar tie-ins, home additions, and any future electrical expansion.'
      },
      {
        heading: 'Permitting & Inspection Handled For You',
        body: 'Every panel upgrade we do in Orange County is fully permitted and inspected by the city. We handle all paperwork and coordinate with the inspector so you don\'t have to. You get documentation that proves the work was done to code — important for insurance and resale.'
      }
    ],
    faqs: [
      { question: 'How long does an electrical panel upgrade take?', answer: 'Most residential panel upgrades in South Orange County are completed in a single day. Power is disconnected in the morning and restored by afternoon once the city inspection and utility meter release are completed.' },
      { question: 'Do I need a city permit to upgrade my panel?', answer: 'Yes, California law and municipal building codes require permits and inspections for all service panel upgrades. We manage the entire permitting process for you.' },
      { question: 'How much does a 200-amp panel upgrade cost?', answer: 'Cost depends on whether your meter base, service riser conduit, or main utility entrance cable also requires replacement. Call (949) 312-6033 for a free upfront on-site estimate.' }
    ]
  },
  {
    slug: 'ev-charger-installation',
    title: 'EV Charger Installation',
    shortTitle: 'EV Chargers',
    primaryKeyword: 'EV charger installation',
    icon: 'BatteryCharging',
    image: 'https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Wall-mounted Level 2 EV charging station installed in residential garage',
    metaTitle: 'EV Charger Installation | Ultimate Green Electric',
    metaDescription: 'Expert Level 2 EV charger installation in Orange County, CA. Tesla Wall Connector, ChargePoint & JuiceBox. Load calculations & permits handled. Call (949) 312-6033.',
    h1: 'Level 2 EV Charger Installation in Orange County, CA',
    summary: 'Charge your electric vehicle up to 6x faster at home with a dedicated Level 2 EV charger installation. Tesla, ChargePoint, Rivian & all universal brands.',
    intro: 'Relying on standard 120V wall outlets (Level 1) yields only 3 to 5 miles of range per hour of charging. A dedicated 240V Level 2 charging station delivers up to 44 miles of range per charging hour, ensuring your vehicle is fully topped up every morning. Ultimate Green Electric, Inc. installs Level 2 charging stations from all major manufacturers throughout South Orange County, providing accurate panel load calculations, clean conduit runs, and municipal permitting.',
    whatIncluded: [
      'Dedicated 240V circuit installation (40-amp, 50-amp, or 60-amp)',
      'Installation of Tesla Wall Connectors, ChargePoint Home Flex, Rivian & JuiceBox',
      'Whole-home panel load calculation under NEC 220 to prevent service overloads',
      'Heavy-duty EMT or PVC conduit routing, baseboard concealment & wire pulling',
      'NEMA 14-50 receptacle or hardwired connection for maximum charging speed',
      'Wi-Fi network commissioning, smartphone app pairing & charge verification'
    ],
    whenNeeded: [
      {
        title: 'Purchased a New Electric Vehicle',
        desc: 'New EVs require Level 2 charging to fully recharge large battery packs overnight.'
      },
      {
        title: 'Slow Level 1 Wall Outlet Charging',
        desc: 'Standard 120V wall plugs can take 24 to 40+ hours to recharge a modern long-range EV.'
      },
      {
        title: 'Adding a Second EV to the Household',
        desc: 'Multiple electric vehicles may require dual charging stations with intelligent power-sharing to stay within panel capacity.'
      },
      {
        title: 'Condominium or HOA Charging Compliance',
        desc: 'Installing a charger in a condo or townhouse garage requires formal architectural documentation under CA Civil Code 4745.'
      }
    ],
    procedure: [
      {
        step: 1,
        title: 'Panel Load Calculation & Site Evaluation',
        desc: 'We assess your main electrical panel capacity and determine the optimal mounting location and conduit route in your garage or carport.'
      },
      {
        step: 2,
        title: 'Permit Acquisition',
        desc: 'We submit electrical plans to your city building department to ensure full compliance with municipal building and fire safety codes.'
      },
      {
        step: 3,
        title: 'Circuit Installation & Hardware Mounting',
        desc: 'We run heavy-duty commercial-grade wiring inside protective conduit, install a dedicated double-pole breaker, and secure the charger unit.'
      },
      {
        step: 4,
        title: 'Testing, Commissioning & Final Sign-Off',
        desc: 'We configure internal DIP switches/software for maximum safe amperage, verify grounding, conduct a live charge test, and manage final inspection.'
      }
    ],
    safetyAndPermits: {
      heading: 'Electrical Capacity, Continuous Load & Permit Regulations',
      body: 'Under National Electrical Code (NEC Article 625), EV chargers are classified as continuous electrical loads. This means the branch circuit must be rated for 125% of the charger\'s output (e.g., a 48-amp charger requires a dedicated 60-amp circuit). Installing an EV charger without a permit can void vehicle warranties, fail home insurance audits, or overload existing electrical panels. We ensure every installation is sized correctly and permitted.',
      highlights: [
        'Adheres to the continuous load 80% rule under NEC Article 625',
        'Support for Tesla Universal Wall Connector, ChargePoint, Autel, JuiceBox & Grizzl-E',
        'City permit acquisition and HOA architectural compliance documentation provided'
      ]
    },
    projectHighlight: {
      title: 'Tesla Wall Connector Level 2 EV Charger',
      location: 'Mission Viejo, CA',
      description: 'Installed a dedicated 60A 240V circuit with EMT conduit run for a Tesla Wall Connector in a residential garage, providing 44 miles of range per charging hour.',
      specs: ['60A Dedicated Circuit', '240V Heavy-Duty Conduit', 'Wi-Fi Commissioned', 'Full Load Calculation'],
      image: 'https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Tesla Wall Connector Level 2 charger installed in garage in Mission Viejo'
    },
    sections: [
      {
        heading: 'Level 2 Home Charging — What You Need',
        body: 'A Level 2 EV charger needs a dedicated 240V circuit, typically 40 to 60 amps, run from your electrical panel to your garage or driveway. If your panel doesn\'t have the capacity, we can perform a panel upgrade at the same time. We\'ll assess your panel, recommend the right charger and circuit size, and give you an upfront price for the complete installation.'
      },
      {
        heading: 'All Major Brands Supported',
        body: 'We install Tesla Wall Connectors, ChargePoint Home Flex, JuiceBox Pro, Grizzl-E, Autel, and other leading EV chargers. Not sure which charger is right for your vehicle? We\'ll help you choose based on your car\'s charging rate, your panel capacity, and your daily driving needs.'
      },
      {
        heading: 'Outdoor & Multi-Charger Installations',
        body: 'Need a charger mounted outdoors or in a carport? We use weather-rated enclosures and conduit for safe outdoor installations. If you have two EVs, we can install multiple chargers with load-sharing so they work within your panel\'s capacity. Every installation is permitted and inspected.'
      }
    ],
    faqs: [
      { question: 'Do I need an electrical panel upgrade to install an EV charger?', answer: 'It depends on your current panel capacity and existing electrical loads. During your free estimate, we perform a load calculation. If your panel has adequate headroom, no upgrade is necessary.' },
      { question: 'What is the difference between a hardwired charger and a NEMA 14-50 plug?', answer: 'Hardwired chargers support up to 48-amp charging (on a 60A circuit) for faster speeds and eliminate plug degradation. NEMA 14-50 plugs cap at 40-amp continuous charging (on a 50A circuit) and require a GFCI breaker.' },
      { question: 'Can you install a charger in a condo with an HOA in Orange County?', answer: 'Yes. Under California Civil Code 4745, HOAs must allow EV charger installations. We provide the technical diagrams and load calculations your HOA board requires for approval.' }
    ]
  },
  {
    slug: 'lighting-installation',
    title: 'Lighting Installation',
    shortTitle: 'Lighting',
    primaryKeyword: 'Lighting installation',
    icon: 'Lightbulb',
    image: 'https://images.pexels.com/photos/1253128/pexels-photo-1253128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern recessed LED wafer lighting installation in residential living room',
    metaTitle: 'Lighting Installation | Ultimate Green Electric',
    metaDescription: 'Professional lighting installation in Orange County, CA. Recessed wafer LED lighting, chandeliers, outdoor landscape & smart dimmers. Call (949) 312-6033.',
    h1: 'Lighting Installation in Orange County, CA',
    summary: 'Transform your living spaces with recessed canless LEDs, custom chandeliers, under-cabinet lighting, and outdoor landscape illumination.',
    intro: 'Thoughtfully designed lighting enhances home comfort, accentuates interior architecture, and boosts nighttime security. Ultimate Green Electric, Inc. delivers professional lighting installation for residential homes and commercial properties throughout South Orange County. From ultra-thin wafer LED recessed lights and smart Lutron Caséta dimmer systems to weatherproof outdoor landscape lighting, our electricians handle the wiring, switching, and fixture mounting with pristine craftsmanship.',
    whatIncluded: [
      'Recessed canless ultra-thin LED wafer downlights with selectable color temperatures',
      'Heavy chandelier ceiling box bracing & motorized chandelier lift installations',
      'Under-cabinet, toe-kick & cove architectural LED strip lighting',
      'Lutron Caséta and smart lighting automation with app and voice control',
      'Low-voltage outdoor landscape, pathway & architectural accent lighting',
      'Motion-sensor exterior floodlights & commercial perimeter security lighting'
    ],
    whenNeeded: [
      {
        title: 'Dark or Shadowy Living Areas',
        desc: 'Older homes often lack overhead lighting, relying on table lamps that leave rooms dim and shadowy.'
      },
      {
        title: 'Outdated, High-Heat Incandescent or Can Cans',
        desc: 'Old recessed cans waste energy, generate excess heat, and leak conditioned air into attics.'
      },
      {
        title: 'Kitchen Remodeling Projects',
        desc: 'Task lighting over islands and under cabinets is vital for safe food preparation and modern aesthetics.'
      },
      {
        title: 'Boosting Nighttime Home Security & Curb Appeal',
        desc: 'Illuminating walkways, entryways, and exterior architecture deters intruders and enhances property value.'
      }
    ],
    procedure: [
      {
        step: 1,
        title: 'Lighting Layout & Beam Spread Planning',
        desc: 'We map out fixture spacing, beam angles, and color temperatures (2700K warm white to 4000K clean white) to eliminate glare and dark spots.'
      },
      {
        step: 2,
        title: 'Clean Non-Destructive Wire Routing',
        desc: 'Our electricians route wiring through attics and joists using specialized flex bits, preserving your drywall and ceilings.'
      },
      {
        step: 3,
        title: 'Precision Fixture Mounting & Dimmers',
        desc: 'We cut clean holes with dust-collection shrouds, mount IC-rated airtight fixtures, and install compatible digital dimmers.'
      },
      {
        step: 4,
        title: 'Tuning, Scene Setup & Site Cleanup',
        desc: 'We calibrate dimming thresholds to eliminate LED flicker, configure smart phone scenes, and leave the workspace spotless.'
      }
    ],
    safetyAndPermits: {
      heading: 'Thermal Safety, Insulation Contact (IC) & Title 24 Compliance',
      body: 'Recessed lighting fixtures installed in ceilings beneath attics must be rated IC (Insulation Contact) and airtight to prevent thermal heat transfer and moisture migration into roofing spaces. In California, residential lighting must comply with California Title 24 high-efficacy standards. When hanging heavy chandeliers exceeding 50 lbs, standard plastic boxes must be replaced with heavy-duty steel fan/fixture braces to avoid catastrophic ceiling collapses.',
      highlights: [
        'Airtight IC-rated LED fixtures compliant with California Title 24',
        'Structural steel ceiling bracing for chandeliers up to 150+ lbs',
        'Flicker-free digital dimmers matched to specific LED driver loads'
      ]
    },
    projectHighlight: {
      title: 'Architectural Wafer LED Recessed Lighting',
      location: 'Aliso Viejo, CA',
      description: 'Installed 16 ultra-thin wafer LED recessed lights with Lutron Caséta smart dimmers, customizable color temperatures (3000K warm white), and app integration.',
      specs: ['Lutron Caséta Smart Dimmers', 'Ultra-Thin Wafer LEDs', 'Zero Ceiling Damage', 'App & Voice Compatible'],
      image: 'https://images.pexels.com/photos/1253128/pexels-photo-1253128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Modern recessed lighting in living room ceiling in Aliso Viejo'
    },
    sections: [
      {
        heading: 'Recessed & Interior Lighting',
        body: 'Recessed lighting is one of the most popular upgrades in Orange County homes. It brightens kitchens, living rooms, and hallways while making ceilings look cleaner and higher. We install new recessed fixtures, convert old cans to LED, and add dimmer switches for perfect light control in every room.'
      },
      {
        heading: 'LED Retrofits That Save Money',
        body: 'Switching to LED can cut your lighting energy use by up to 80%. We retrofit existing fixtures with LED bulbs, drivers, or full replacement fixtures in homes and commercial spaces throughout Orange County. Most retrofits pay for themselves in energy savings within one to two years.'
      },
      {
        heading: 'Outdoor, Security & Landscape Lighting',
        body: 'Illuminate your home\'s exterior for safety, curb appeal, and security. We install pathway lights, uplighting for trees and architecture, motion-sensor security lights, and deck lighting. All outdoor fixtures are properly rated for wet locations and wired with weather-safe conduit.'
      }
    ],
    faqs: [
      { question: 'Why do my LED lights buzz or flicker when dimmed?', answer: 'Flickering and buzzing occur when LED bulbs are paired with incompatible older incandescent dimmer switches. We install modern digital LED reverse-phase dimmers that ensure silent, smooth dimming down to 1%.' },
      { question: 'Can you install recessed lighting in rooms without an attic above?', answer: 'Yes! Ultra-thin canless wafer LEDs require only 2 inches of ceiling clearance and can be easily installed between floor joists in two-story homes without bulky metal can housings.' },
      { question: 'Do you install outdoor landscape lighting in coastal Orange County?', answer: 'Yes, we use solid brass and marine-grade copper low-voltage fixtures with sealed LED modules that resist coastal salt-air corrosion.' }
    ]
  },
  {
    slug: 'outlet-switch-repair',
    title: 'Electrical Outlet and Switch Repair',
    shortTitle: 'Outlets & Switches',
    primaryKeyword: 'Electrical outlet and switch repair',
    icon: 'Plug',
    image: 'https://images.pexels.com/photos/5691494/pexels-photo-5691494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Licensed electrician installing commercial-grade tamper-resistant wall outlet',
    metaTitle: 'Electrical Outlet and Switch Repair | Ultimate Green Electric',
    metaDescription: 'Reliable electrical outlet and switch repair in Orange County, CA. GFCI receptacles, 3-prong grounded upgrades, smart dimmers & dedicated lines. Call (949) 312-6033.',
    h1: 'Electrical Outlet and Switch Repair in Orange County, CA',
    summary: 'Dead outlets, tripping GFCIs, loose plugs, and warm switches repaired fast by licensed Orange County electricians.',
    intro: 'Wall outlets and switches are your primary daily connection points to high-voltage electricity. When an outlet buzzes, feels loose, or trips repeatedly, it is more than an inconvenience — it is a serious shock and fire hazard. Ultimate Green Electric, Inc. repairs and replaces outlets, switches, and GFCI/AFCI devices throughout South Orange County, modernizing older systems to code and restoring safe, reliable power.',
    whatIncluded: [
      'GFCI (Ground Fault Circuit Interrupter) testing, repair & replacements',
      'Tamper-Resistant (TR) safety outlet installations for child safety',
      'Upgrading ungrounded two-prong outlets to safe 3-prong grounded circuits',
      'Smart switch, timer & dimmer installations (Lutron, Leviton, Wi-Fi)',
      '3-way and 4-way hallway and staircase multi-switch circuit wiring',
      'Dedicated 20A appliance circuits for refrigerators, microwaves & home offices'
    ],
    whenNeeded: [
      {
        title: 'Plugs Fall Out of Outlets Easily',
        desc: 'Worn internal contact tension creates arcing and resistive heat buildup behind the wall.'
      },
      {
        title: 'GFCI Outlets That Will Not Reset',
        desc: 'A GFCI that trips and will not reset has detected a dangerous ground fault or its internal sensor has failed.'
      },
      {
        title: 'Switch Plates That Feel Warm or Hum',
        desc: 'Switches that feel warm or make crackling sounds indicate arcing conductors that can ignite nearby wall studs.'
      },
      {
        title: 'Two-Prong Ungrounded Outlets in Older Homes',
        desc: 'Two-prong outlets leave modern computers, TVs, and appliances vulnerable to power surges and electrical shocks.'
      }
    ],
    procedure: [
      {
        step: 1,
        title: 'Circuit De-Energization & Polarity Testing',
        desc: 'We safely de-energize the circuit, test with digital multimeters, and check line-to-neutral and neutral-to-ground voltage.'
      },
      {
        step: 2,
        title: 'Junction Box & Conductor Inspection',
        desc: 'We inspect wire gauge, box fill capacity, insulation integrity, and verify that copper connections are secure.'
      },
      {
        step: 3,
        title: 'Commercial-Grade Hardware Replacement',
        desc: 'We install heavy-duty, tamper-resistant receptacles or electronic switches with side-screw terminations torqued to specification.'
      },
      {
        step: 4,
        title: 'GFCI Trip & Load Testing',
        desc: 'We test GFCI trip thresholds using calibrated circuit analyzers to guarantee immediate millisecond shock protection.'
      }
    ],
    safetyAndPermits: {
      heading: 'Code Requirements: Tamper-Resistant & GFCI Protection',
      body: 'Under the National Electrical Code and California Electrical Code, all replacement receptacles in dwelling units must be Tamper-Resistant (TR) to prevent children from inserting foreign objects. Ground Fault Circuit Interrupters (GFCI) are strictly required in all kitchens, bathrooms, laundry rooms, garages, basements, and exterior locations. Arc-Fault Circuit Interrupters (AFCI) are required to safeguard bedrooms and living areas against hidden arcing.',
      highlights: [
        'Tamper-resistant shutters prevent electrical shock injuries',
        'GFCI shock protection installed in all code-mandated wet locations',
        'Safe aluminum-to-copper pigtailing using AlumiConn or COPALUM connectors'
      ]
    },
    projectHighlight: {
      title: 'Tamper-Resistant GFCI & Dedicated Circuit Upgrade',
      location: 'Rancho Santa Margarita, CA',
      description: 'Replaced failing outdoor and kitchen receptacles with commercial-grade weather-resistant (WR) GFCIs and added dedicated 20A home office circuit.',
      specs: ['WR GFCIs with In-Use Bubble Covers', 'Tamper-Resistant Outlets', 'Dedicated 20A Home Office Circuit', 'Full Polarity Testing'],
      image: 'https://images.pexels.com/photos/5691494/pexels-photo-5691494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Electrician replacing electrical outlet and switch'
    },
    sections: [
      {
        heading: 'GFCI Outlets — Code & Safety',
        body: 'Ground Fault Circuit Interrupter (GFCI) outlets are required by code in kitchens, bathrooms, garages, and outdoor areas. If your GFCI keeps tripping or won\'t reset, it may be worn out or there may be a ground fault on the circuit. We test, diagnose, and replace GFCI outlets to keep your Orange County home safe and compliant.'
      },
      {
        heading: 'New Outlets & Relocations',
        body: 'Need an outlet where there isn\'t one? We install new outlets for TVs, appliances, home offices, and EV chargers. We also relocate outlets during remodels and add dedicated circuits for high-draw appliances like refrigerators, microwaves, and window AC units.'
      },
      {
        heading: 'Switch Repair & Smart Switches',
        body: 'A switch that feels warm, makes a popping sound, or doesn\'t always work needs attention. We repair and replace single-pole, 3-way, and 4-way switches. We also install smart switches and dimmers that work with home automation systems — ask us about upgrading your Orange County home.'
      }
    ],
    faqs: [
      { question: 'Why does my GFCI outlet trip when it rains?', answer: 'Outdoor GFCIs trip during rain if moisture penetrates an aging weather cover or if exterior string lights have a ground fault. We install heavy-duty, code-compliant "in-use" weatherproof bubble covers to keep moisture out.' },
      { question: 'Can you install a new outlet where none exists?', answer: 'Yes. We routinely route new wiring through walls and attics to install new outlets for wall-mounted TVs, home offices, bidet seats, and kitchen islands.' },
      { question: 'How do you convert ungrounded 2-prong outlets to 3-prong?', answer: 'We can either pull a dedicated equipment ground wire from the panel or install a GFCI receptacle at the beginning of the circuit, which provides approved shock protection under NEC 406.4(D)(2).' }
    ]
  },
  {
    slug: 'ceiling-fan-installation',
    title: 'Ceiling Fan Installation',
    shortTitle: 'Ceiling Fans',
    primaryKeyword: 'Ceiling fan installation',
    icon: 'Fan',
    image: 'https://images.pexels.com/photos/3990590/pexels-photo-3990590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Ceiling fan installed in residential living room with high ceilings',
    metaTitle: 'Ceiling Fan Installation | Ultimate Green Electric',
    metaDescription: 'Professional ceiling fan installation in Orange County, CA. Structural box bracing, dual switch controls, patio wet-rated fans & balancing. Call (949) 312-6033.',
    h1: 'Ceiling Fan Installation in Orange County, CA',
    summary: 'Stay cool and lower AC energy bills with professionally braced, balanced indoor and outdoor ceiling fan installations.',
    intro: 'A ceiling fan improves room comfort and reduces air conditioning costs, but only when installed with proper structural support and balanced wiring. Ceiling fans weigh significantly more than standard lighting fixtures and generate continuous dynamic vibration during operation. Ultimate Green Electric, Inc. provides professional ceiling fan installations throughout South Orange County, ensuring structural junction box bracing, safe wiring, and silent, wobble-free operation.',
    whatIncluded: [
      'Removal of old light fixtures and replacement with fan-rated structural steel boxes',
      'Heavy-duty expander brace installations for secure mounting between ceiling joists',
      'Indoor ceiling fan assembly, motor mounting & precision blade balancing',
      'Outdoor patio wet-rated & damp-rated ceiling fan installations',
      'Dual wall switch wiring to control fan speed and light kit independently',
      'Handheld wireless remote control receiver wiring and wall cradle setup'
    ],
    whenNeeded: [
      {
        title: 'Replacing a Standard Light with a Ceiling Fan',
        desc: 'Standard plastic or sheet metal light boxes are NOT rated for fan vibration and can pull out of the ceiling over time.'
      },
      {
        title: 'Reducing Summer Air Conditioning Bills',
        desc: 'Ceiling fans create a wind-chill effect that makes rooms feel 4 degrees cooler, allowing you to raise your AC thermostat.'
      },
      {
        title: 'Existing Fan Wobbles, Squeaks or Clicks',
        desc: 'Wobbling fans indicate loose ceiling mounting boxes or unbalanced blades that place severe stress on mounting hardware.'
      },
      {
        title: 'Outdoor Patio & Covered Gazebo Comfort',
        desc: 'Wet-rated outdoor ceiling fans keep covered patios cool and deter flying insects during warm California evenings.'
      }
    ],
    procedure: [
      {
        step: 1,
        title: 'Ceiling Structure Inspection & Box Removal',
        desc: 'We inspect ceiling joist spacing and remove existing unrated junction boxes to access the structural ceiling framing.'
      },
      {
        step: 2,
        title: 'Fan-Rated Steel Expander Brace Installation',
        desc: 'We install a heavy-duty steel expander bracket that anchors into adjacent ceiling joists, rated to support 70+ lbs of dynamic load.'
      },
      {
        step: 3,
        title: 'Motor Mounting & Electrical Termination',
        desc: 'We secure the fan hanging bracket, wire motor leads and remote receivers, and connect proper equipment grounding.'
      },
      {
        step: 4,
        title: 'Blade Assembly & Precision Dynamic Balancing',
        desc: 'We attach fan blades with thread-locking hardware and test at all speed settings, balancing blades to eliminate wobble and noise.'
      }
    ],
    safetyAndPermits: {
      heading: 'Structural Support & Clearance Safety Regulations',
      body: 'National Electrical Code (NEC Article 314.27) explicitly prohibits mounting ceiling fans to standard electrical boxes. Fan boxes must be UL-listed as "Acceptable for Fan Support" and rated for the fan\'s weight. Building safety codes also mandate that ceiling fan blades maintain a minimum clearance of 7 feet above the finished floor, and outdoor fans must be certified UL Wet or Damp location rated.',
      highlights: [
        'UL-listed steel expander braces anchored directly to wood ceiling joists',
        'Minimum 7-foot blade clearance maintained from the finished floor',
        'UL Wet-Location rated fixtures installed on open patios and gazebos'
      ]
    },
    projectHighlight: {
      title: 'Heavy-Duty Brace Ceiling Fan & Dual Switch Install',
      location: 'Lake Forest, CA',
      description: 'Replaced a builder-grade light fixture with a steel-braced Hunter fan, adding a new 14/3 wire run for independent wall switches controlling fan speed and light kit.',
      specs: ['Steel Expander Box Brace', 'Separate Fan/Light Wall Controls', 'Zero-Wobble Dynamic Balancing', 'Clean Attic Wire Routing'],
      image: 'https://images.pexels.com/photos/3990590/pexels-photo-3990590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Ceiling fan installed in living room in Lake Forest'
    },
    sections: [
      {
        heading: 'Proper Support Matters',
        body: 'A ceiling fan weighs far more than a light fixture and vibrates while running. Standard light boxes are not rated for fans and can work loose over time — a serious safety risk. We replace standard boxes with fan-rated, brace-supported boxes so your ceiling fan stays secure for years.'
      },
      {
        heading: 'Indoor & Outdoor Fans',
        body: 'We install ceiling fans in bedrooms, living rooms, patios, and gazebos throughout Orange County. For outdoor locations, we use wet-rated fans and weather-safe wiring. We also install fan/light combos with remote controls and wall switches, including dual-fan and dual-light control setups.'
      },
      {
        heading: 'Existing Wiring & Remote Controls',
        body: 'If your ceiling has existing wiring but no wall switch, we can add a wall switch or set up a remote control system. We also replace old fans with new ones, including proper disconnection, box inspection, and balanced reinstallation.'
      }
    ],
    faqs: [
      { question: 'Can you install a ceiling fan where there is only a light fixture now?', answer: 'Yes. We remove the existing light box and install a heavy-duty steel fan-rated expander brace between the ceiling joists through the existing hole without damaging your ceiling.' },
      { question: 'Can you wire separate wall switches for the fan and the light?', answer: 'Yes! If your home has standard 2-wire cable, we can either pull a 3-wire cable for dual wall switches or install a wireless digital wall control that operates both without tearing up drywall.' },
      { question: 'Do you install outdoor ceiling fans on covered patios in Orange County?', answer: 'Yes, we install UL Wet-Rated ceiling fans equipped with sealed motor housings and weather-resistant blades designed for exterior patio environments.' }
    ]
  },
  {
    slug: 'electrical-inspection',
    title: 'Electrical Inspection',
    shortTitle: 'Inspections',
    primaryKeyword: 'Electrical inspection',
    icon: 'ClipboardCheck',
    image: 'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician performing electrical panel safety inspection with digital multimeter',
    metaTitle: 'Electrical Inspection | Ultimate Green Electric',
    metaDescription: 'Comprehensive electrical inspection in Orange County, CA. Real estate home sales, insurance certifications & thermal safety scans. Call (949) 312-6033.',
    h1: 'Professional Electrical Inspection in Orange County, CA',
    summary: 'Comprehensive residential & commercial electrical safety inspections for home sales, insurance renewals, and peace of mind.',
    intro: 'Whether purchasing a new home, renovating an established property, or resolving recurring breaker issues, a certified electrical inspection reveals the true safety and capacity of your electrical system. General home inspectors often lack the specialized diagnostic equipment needed to evaluate internal panel connections. Ultimate Green Electric, Inc. delivers thorough electrical inspections throughout South Orange County, providing clear, itemized written reports with infrared thermal imaging.',
    whatIncluded: [
      'Main service panel and subpanel capacity, age, and breaker sizing evaluation',
      'Infrared thermal imaging scan to detect hidden hot spots & loose bus connections',
      'Branch circuit wiring evaluation (identifying cloth, knob-and-tube, or aluminum wires)',
      'Grounding electrode and bonding system verification (water pipes, gas lines, ground rods)',
      'Comprehensive testing of GFCI and AFCI life-safety receptacles and breakers',
      'Written inspection report with high-resolution photos and prioritized repair estimates'
    ],
    whenNeeded: [
      {
        title: 'Buying or Selling a Home (Real Estate Escrow)',
        desc: 'Uncovers hidden ungrounded circuits, overloaded panels, or unpermitted DIY electrical additions before closing escrow.'
      },
      {
        title: 'Homeowners Insurance Certification',
        desc: 'Insurance carriers frequently require a 4-point electrical certification before writing or renewing policies on older homes.'
      },
      {
        title: 'Home is Over 25 Years Old',
        desc: 'Aging insulation, loose terminations, and outdated panel brands (Zinsco, FPE) develop fire risks over decades of use.'
      },
      {
        title: 'Before Major Remodeling or Solar Additions',
        desc: 'Determines whether your current electrical service entrance has sufficient amperage to support heat pumps, EV chargers, or additions.'
      }
    ],
    procedure: [
      {
        step: 1,
        title: 'Exterior Service Drop & Meter Base Examination',
        desc: 'We inspect overhead service drops, meter bases, grounding rods, and weatherheads for physical wear or weather corrosion.'
      },
      {
        step: 2,
        title: 'Main Panel Dead-Front Removal & Thermal Scan',
        desc: 'With safety gear, we remove panel covers, measure line voltages, torque-check terminations, and scan with infrared thermal cameras.'
      },
      {
        step: 3,
        title: 'Branch Circuit, Outlet & Safety Device Testing',
        desc: 'We test receptacles throughout the building for correct polarity, functional grounding, and GFCI/AFCI millisecond response times.'
      },
      {
        step: 4,
        title: 'Detailed Written Inspection Report Delivery',
        desc: 'We deliver an illustrated inspection report detailing code compliance status, categorized safety hazards, and upfront cost estimates.'
      }
    ],
    safetyAndPermits: {
      heading: 'Objective Electrical Safety Standards & Insurance Acceptance',
      body: 'Our electrical safety inspections strictly follow National Fire Protection Association (NFPA 73) guidelines for existing residential dwellings. Our detailed written reports are accepted by California real estate escrow companies, title firms, and major property insurance underwriters (including State Farm, Farmers, and AAA) when documenting panel condition or certifying aluminum wiring pigtailing.',
      highlights: [
        'Conducted by California state-certified electricians with thermal imaging tools',
        'Detailed PDF report delivered with photos and prioritized safety recommendations',
        'Inspection fees credited toward recommended electrical repairs upon approval'
      ]
    },
    projectHighlight: {
      title: 'Pre-Purchase Real Estate Electrical Inspection',
      location: 'San Juan Capistrano, CA',
      description: 'Performed comprehensive pre-purchase safety inspection on a 1974 residential estate, discovering hidden ungrounded branch circuits, overloaded neutral bars, and hazardous Zinsco subpanel.',
      specs: ['Infrared Thermal Scan', 'Full Branch Polarity Audit', 'Detailed Escrow PDF Report', 'Repair Cost Estimate Included'],
      image: 'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Electrician performing electrical panel safety inspection in San Juan Capistrano'
    },
    sections: [
      {
        heading: 'Home Sale & Real Estate Inspections',
        body: 'If you\'re buying or selling a home in Orange County, an electrical inspection reveals the true condition of the system — not just what a general home inspector can see. We check the panel for proper sizing and labeling, test outlets and GFCIs, inspect visible wiring for age or damage, verify grounding and bonding, and flag any code violations or safety hazards.'
      },
      {
        heading: 'Insurance & Safety Inspections',
        body: 'Some insurance companies require an electrical inspection before writing or renewing a policy, especially for older homes. We provide the detailed written inspection reports insurers need. Even if you\'re not required to get one, a safety inspection is worthwhile for any Orange County home over 25 years old.'
      },
      {
        heading: 'What Our Inspection Includes',
        body: 'Panel and subpanel condition, breaker type and age, main service amperage, grounding and bonding, GFCI/AFCI coverage, outlet and switch condition, visible wiring inspection, smoke detector check, surge protection status, and a written report with photos and prioritized recommendations.'
      }
    ],
    faqs: [
      { question: 'How much does an electrical safety inspection cost?', answer: 'Inspection costs vary based on home square footage and number of subpanels. Call (949) 312-6033 for a fast quote. If you choose Ultimate Green Electric to complete recommended repairs, the inspection fee is often credited.' },
      { question: 'Will your inspection report be accepted by my insurance company?', answer: 'Yes. Our licensed C-10 contractor inspection reports include high-resolution photos, component ratings, and official license credentials accepted by all major California insurance carriers.' },
      { question: 'What is the difference between a general home inspection and your electrical inspection?', answer: 'General home inspectors only check basic visible outlets and breaker labels. As licensed electricians, we remove panel dead-fronts, measure live voltage drops under load, and use infrared thermal cameras to detect internal arcing.' }
    ]
  }
];


export const HOME_FAQS = [
  { question: 'What areas does Ultimate Green Electric serve?', answer: 'We are based in Orange County and serve all of South Orange County, including Irvine, Dana Point, Laguna Hills, Laguna Niguel, Lake Forest, Aliso Viejo, San Juan Capistrano, Rancho Santa Margarita, and Newport Beach.' },
  { question: 'Are you licensed and insured?', answer: 'Yes. Ultimate Green Electric, Inc. is fully licensed (CA Lic #999000), bonded, and insured. All of our electricians hold current certifications and receive ongoing training.' },
  { question: 'Do you offer free estimates?', answer: 'Yes, we provide free estimates on most residential and commercial electrical projects. Call (949) 312-6033 to schedule a visit from one of our electricians.' },
  { question: 'Do you provide emergency electrical service?', answer: 'Yes. Emergency electrical services are available for Orange County and surrounding areas. Call (949) 312-6033 any time, day or night.' },
  { question: 'What are your business hours?', answer: 'Our regular hours are Monday through Friday, 7:00 AM to 5:00 PM. Saturday and Sunday are by appointment only. Emergency service is available outside regular hours.' },
];

export const GENERAL_FAQS = [
  { question: 'Do you offer free estimates?', answer: 'Yes, we provide free estimates on most electrical projects. Call (949) 312-6033 to schedule a visit from one of our licensed electricians.' },
  { question: 'Are you licensed and insured?', answer: 'Yes. Ultimate Green Electric, Inc. is fully licensed (CA Lic #999000), bonded, and insured for your protection.' },
  { question: 'Do you serve my area?', answer: 'We are based in Orange County and serve all of South Orange County, including Irvine, Dana Point, Laguna Hills, Laguna Niguel, Lake Forest, Aliso Viejo, and surrounding communities.' },
  { question: 'Do you provide emergency service?', answer: 'Yes. Emergency electrical services are available. Call (949) 312-6033 any time, day or night.' },
];

export const TESTIMONIALS = [
  {
    name: 'Mike Saghafi',
    location: 'Mission Viejo, CA · Google Review',
    text: 'Ultimate Green Electric did an outstanding job upgrading our 100-amp main service panel to 200 amps. The electrician was punctual, explained the permit process clearly, and finished in a single day. Passed city inspection with zero issues.',
    rating: 5,
    time: '2 years ago',
    ownerResponse: 'Thank you for your business Mike! We take pride in clean, code-compliant panel upgrades.'
  },
  {
    name: 'Gajanan M.',
    location: 'Mission Viejo, CA · Google Review · Local Guide',
    text: 'Highly professional and knowledgeable electricians. They diagnosed an elusive intermittent breaker tripping problem in our home office that another contractor could not solve. Fair pricing and respectful of our home.',
    rating: 5,
    time: '9 years ago',
    ownerResponse: 'Thanks for taking the time to rate our service Gajanan! Happy to keep your home running safely.'
  },
  {
    name: 'David R.',
    location: 'Irvine, CA · Verified Customer',
    text: 'Installed a Tesla Level 2 Wall Connector in our garage. Clean conduit run, properly sized circuit breaker, and tested everything before leaving. Cleanest electrical work I have seen in South Orange County.',
    rating: 5,
    time: '8 months ago',
  },
  {
    name: 'Elena S.',
    location: 'Laguna Niguel, CA · Verified Customer',
    text: 'Called them for an electrical emergency on a Sunday afternoon when our main breaker started buzzing and arcing. They arrived within 45 minutes, made the panel safe, and completed the repair the next morning. Lifesavers!',
    rating: 5,
    time: '5 months ago',
    ownerResponse: 'Glad we could resolve the emergency safely for your family Elena!'
  },
  {
    name: 'Robert K.',
    location: 'Lake Forest, CA · Commercial Property Manager',
    text: 'We use Ultimate Green Electric for all our commercial tenant build-outs and LED lighting retrofits. Always on schedule, code-compliant, and transparent with invoicing.',
    rating: 5,
    time: '1 year ago',
  },
  {
    name: 'Sarah M.',
    location: 'Aliso Viejo, CA · Homeowner',
    text: 'Had recessed LED lighting installed throughout our entire downstairs living and kitchen space. Beautiful dimming controls, no drywall damage, and they cleaned up spotless. Highly recommend!',
    rating: 5,
    time: '3 months ago',
  }
];

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Panel Upgrade' | 'EV Charger' | 'Repairs';
  location: string;
  image: string;
  imageAlt: string;
  description: string;
  specs: string[];
}

export const PROJECT_GALLERY: ProjectItem[] = [
  {
    id: 'panel-upgrade-mission-viejo',
    title: '200A Main Service Panel Upgrade',
    category: 'Panel Upgrade',
    location: 'Mission Viejo, CA',
    image: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'New 200-amp electrical panel installation in Mission Viejo',
    description: 'Replaced an outdated 100-amp Zinsco electrical panel with a modern 200-amp Square D QO service panel with whole-home surge protection. Permitted and approved by the City of Mission Viejo.',
    specs: ['200A Main Breaker', 'Whole-Home Surge Protector', 'City Permitted & Inspected', '1-Day Completion']
  },
  {
    id: 'ev-charger-mission-viejo',
    title: 'Tesla Wall Connector Level 2 EV Charger',
    category: 'EV Charger',
    location: 'Mission Viejo, CA',
    image: 'https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Tesla Wall Connector Level 2 charger installed in garage in Mission Viejo',
    description: 'Installed a dedicated 60A 240V circuit with EMT conduit run for a Tesla Wall Connector in a residential garage, providing 44 miles of range per charging hour.',
    specs: ['60A Dedicated Circuit', '240V Heavy-Duty Conduit', 'Wi-Fi Commissioned', 'Full Load Calculation']
  },
  {
    id: 'commercial-lighting-irvine',
    title: 'Commercial Office LED Lighting Retrofit',
    category: 'Commercial',
    location: 'Irvine, CA',
    image: 'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Commercial office LED architectural lighting installation in Irvine',
    description: 'Upgraded 8,500 sq ft office facility with Title 24 compliant LED flat-panel troffers, daylight harvesting sensors, and automated multi-zone dimming controls.',
    specs: ['California Title 24 Compliant', 'Daylight Sensors', '65% Energy Reduction', 'After-Hours Installation']
  },
  {
    id: 'residential-rewiring-laguna-niguel',
    title: 'Whole-Home Rewiring & Kitchen Circuit Addition',
    category: 'Residential',
    location: 'Laguna Niguel, CA',
    image: 'https://images.pexels.com/photos/8961701/pexels-photo-8961701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician performing kitchen rewiring in Laguna Niguel',
    description: 'Full kitchen remodel rewiring including dedicated 20A small appliance branch circuits, island GFCI outlets, under-cabinet LED runs, and modern arc-fault protection.',
    specs: ['Dual 20A Kitchen Circuits', 'AFCI / GFCI Protection', 'Clean Drywall Preservation', 'Zero Code Violations']
  },
  {
    id: 'emergency-breaker-lake-forest',
    title: 'Emergency Subpanel & Feeder Cable Repair',
    category: 'Repairs',
    location: 'Lake Forest, CA',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Emergency subpanel repair with color coded copper wiring',
    description: 'Same-day emergency response to replace a burned feeder lug and restore lost power phases to a residential home in Lake Forest within 3 hours of customer call.',
    specs: ['Same-Day Emergency Dispatch', 'Thermal Camera Diagnosis', 'Torque-to-Spec Connections', 'Safe Power Restoration']
  },
  {
    id: 'architectural-recessed-aliso-viejo',
    title: 'Architectural Recessed Lighting & Smart Dimmers',
    category: 'Residential',
    location: 'Aliso Viejo, CA',
    image: 'https://images.pexels.com/photos/1253128/pexels-photo-1253128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern recessed lighting in living room ceiling in Aliso Viejo',
    description: 'Installed 16 ultra-thin wafer LED recessed lights with Lutron Caséta smart dimmers, customizable color temperatures (3000K warm white), and app integration.',
    specs: ['Lutron Caséta Smart Dimmers', 'Ultra-Thin Wafer LEDs', 'Zero Ceiling Damage', 'App & Voice Compatible']
  }
];

export const COMPANY_CREDENTIALS = {
  cslbLicense: '999000',
  classification: 'C-10 Electrical Contractor',
  state: 'California',
  bondedAmount: '$25,000 Contractor Bond',
  insuranceCoverage: '$2,000,000 General Liability + Workers Comp',
  establishedYear: '2005',
  yearsInBusiness: '20+',
  guarantee: '100% Satisfaction Guarantee & Code Compliance Warranty',
  emergencyResponseSla: 'Under 60 Minutes in South Orange County',
  standardResponseSla: 'Within 1 Business Hour'
};

