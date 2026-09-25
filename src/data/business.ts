export const BUSINESS = {
  name: 'Ultimate Green Electric, Inc.',
  shortName: 'Ultimate Green Electric',
  domain: 'ultimategreenelectric.com',
  phone: '+1 (949) 312-6033',
  phoneRaw: '+19493126033',
  phoneDisplay: '(949) 312-6033',
  secondaryPhone: '(800) 663-1966',
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
  icon: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: 'residential-electrician',
    title: 'Residential Electrician',
    shortTitle: 'Residential',
    icon: 'Home',
    image: 'https://images.pexels.com/photos/8961701/pexels-photo-8961701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician installing wiring in a Mission Viejo home',
    metaTitle: 'Residential Electrician Mission Viejo CA | Ultimate Green Electric',
    metaDescription: 'Trusted residential electrician in Mission Viejo, CA. Wiring, lighting, panel upgrades, outlets & more. Licensed, bonded, insured. Call (949) 312-6033.',
    h1: 'Residential Electrician in Mission Viejo, CA',
    summary: 'Dependable home electrical services for Mission Viejo families — from repairs and installations to full rewiring.',
    intro: 'When you need a residential electrician in Mission Viejo, Ultimate Green Electric, Inc. delivers fast, reliable service at fair prices. Our licensed electricians handle everything from minor outlet repairs to complete home rewiring, always with a focus on safety and clean workmanship.',
    sections: [
      {
        heading: 'Whole-Home Electrical Solutions',
        body: 'Your home\'s electrical system powers everything you do. Whether you\'re remodeling a kitchen, adding a new appliance, or troubleshooting flickering lights, our residential electricians have the training and tools to get the job done right the first time. We work on homes of every age — from newer builds in Mission Viejo to older properties that need careful panel and wiring upgrades to meet current code.',
      },
      {
        heading: 'Safety First, Always',
        body: 'Electrical problems in a home are not just inconvenient — they can be dangerous. Faulty wiring is one of the leading causes of house fires. That\'s why every residential service call includes a visual safety inspection of your panel, outlets, and visible wiring. We\'ll flag any hazards we see and give you honest recommendations, never up-selling work you don\'t need.',
      },
      {
        heading: 'Transparent Pricing & Clean Work',
        body: 'We provide free estimates on most residential projects and stand behind every job. Our electricians wear shoe covers, lay down drop cloths, and clean up thoroughly before leaving. You\'ll know the cost before we start, and there are no surprise fees on the final invoice.',
      },
    ],
    faqs: [
      { question: 'Do you offer free estimates for residential electrical work?', answer: 'Yes, we provide free estimates on most residential projects. Call (949) 312-6033 to schedule a visit from one of our Mission Viejo electricians.' },
      { question: 'Are your electricians licensed and insured?', answer: 'Absolutely. All of our electricians are licensed (CA Lic #999000), bonded, and insured for your protection and peace of mind.' },
      { question: 'Can you work on older homes in Mission Viejo?', answer: 'Yes. We frequently service older Mission Viejo homes, including panel upgrades, rewiring, and bringing systems up to current electrical code.' },
    ],
  },
  {
    slug: 'commercial-electrician',
    title: 'Commercial Electrician',
    shortTitle: 'Commercial',
    icon: 'Building2',
    image: 'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Commercial electrician working on electrical wiring in a building',
    metaTitle: 'Commercial Electrician Mission Viejo CA | Ultimate Green Electric',
    metaDescription: 'Reliable commercial electrician in Mission Viejo, CA. Tenant improvements, lighting, panel upgrades & emergency repair. Call (949) 312-6033.',
    h1: 'Commercial Electrician in Mission Viejo, CA',
    summary: 'Electrical contracting for Mission Viejo businesses — tenant build-outs, lighting retrofits, panel upgrades, and fast emergency repair.',
    intro: 'Downtime costs your business money. Ultimate Green Electric, Inc. provides commercial electrical services in Mission Viejo that keep your operations running. From office tenant improvements to retail lighting upgrades and industrial wiring, our commercial electricians deliver code-compliant work on schedule and on budget.',
    sections: [
      {
        heading: 'Tenant Improvements & Build-Outs',
        body: 'Moving into a new commercial space or renovating an existing one? We handle complete electrical build-outs including new circuits, lighting design, data cabling support, and panel upgrades. We coordinate with your general contractor and city inspectors so the project stays on track.',
      },
      {
        heading: 'Lighting Retrofits & Energy Savings',
        body: 'Upgrading to LED lighting is one of the fastest-payback investments a business can make. We retrofit office suites, warehouses, retail stores, and restaurants throughout Mission Viejo with energy-efficient lighting that slashes electricity bills and improves light quality.',
      },
      {
        heading: 'Minimizing Business Disruption',
        body: 'We schedule commercial work around your hours of operation whenever possible — evenings, early mornings, or weekends by appointment. Our goal is to get your business back to full power with minimal disruption to your customers and staff.',
      },
    ],
    faqs: [
      { question: 'Can you work after business hours to avoid downtime?', answer: 'Yes. We offer flexible scheduling including evenings and weekend appointments for commercial clients in Mission Viejo. Call (949) 312-6033 to arrange a time that works for your business.' },
      { question: 'Do you handle large commercial projects?', answer: 'We do. From single-office tenant improvements to multi-unit retail and industrial wiring projects, our team has the capacity and licensing to handle commercial work of any size.' },
      { question: 'Can you help with energy-efficiency upgrades?', answer: 'Yes. We specialize in LED lighting retrofits and energy-saving electrical upgrades that reduce operating costs for Mission Viejo businesses.' },
    ],
  },
  {
    slug: 'electrical-repair',
    title: 'Electrical Repair',
    shortTitle: 'Repairs',
    icon: 'Wrench',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician repairing circuit breaker panel with colorful wires',
    metaTitle: 'Electrical Repair Mission Viejo CA | Fast & Reliable | Ultimate Green Electric',
    metaDescription: 'Fast electrical repair in Mission Viejo, CA. Flickering lights, tripping breakers, dead outlets & more. Licensed electricians. Call (949) 312-6033.',
    h1: 'Electrical Repair in Mission Viejo, CA',
    summary: 'From tripping breakers to dead outlets, our Mission Viejo electricians diagnose and fix electrical problems fast.',
    intro: 'Electrical problems rarely happen at a convenient time. Whether your breaker keeps tripping, an outlet has gone dead, or your lights are flickering, Ultimate Green Electric, Inc. provides prompt electrical repair service throughout Mission Viejo. Our electricians diagnose the root cause — not just the symptom — and fix it safely to code.',
    sections: [
      {
        heading: 'Common Electrical Repairs We Handle',
        body: 'Tripping breakers, dead outlets, flickering or dimming lights, warm switch plates, burning smells from outlets, sparking, outdated aluminum wiring, damaged wiring from rodents or water, and GFCI failures. If something seems off with your electrical system, don\'t wait — small problems can become serious hazards quickly.',
      },
      {
        heading: 'Honest Diagnosis, Lasting Fixes',
        body: 'We never guess. Our electricians use professional diagnostic equipment to trace the actual cause of your problem, then explain it in plain language before any work begins. You\'ll get a clear scope of work and upfront pricing. We fix it right the first time so the same issue doesn\'t come back next month.',
      },
      {
        heading: 'Same-Day Service Available',
        body: 'Many electrical repairs in Mission Viejo can be completed the same day you call. We keep our service vehicles fully stocked with common parts so we can resolve most issues in a single visit. Call (949) 312-6033 and we\'ll dispatch an electrician to your door.',
      },
    ],
    faqs: [
      { question: 'How quickly can you respond to a repair call?', answer: 'We offer same-day service for most electrical repairs in Mission Viejo. Call (949) 312-6033 and we\'ll send an electrician as quickly as possible.' },
      { question: 'Is flickering a light an emergency?', answer: 'Flickering can indicate a loose connection or overloaded circuit. If only one light flickers, it may be a simple fix. If multiple lights flicker throughout the house, call us right away — it could signal a serious wiring or panel problem.' },
      { question: 'Do you charge for travel time within Mission Viejo?', answer: 'We do not charge extra travel fees for service calls within our Mission Viejo service area. You\'ll know all costs before we begin any repair work.' },
    ],
  },
  {
    slug: 'emergency-electrician',
    title: 'Emergency Electrician',
    shortTitle: '24/7 Emergency',
    icon: 'Zap',
    image: 'https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Emergency electrician working on an outdoor electrical panel',
    metaTitle: 'Emergency Electrician Mission Viejo CA | 24/7 Fast Response | Ultimate Green Electric',
    metaDescription: '24/7 emergency electrician in Mission Viejo, CA. Power outages, sparking, burning smell — call (949) 312-6033 for fast emergency electrical service.',
    h1: 'Emergency Electrician in Mission Viejo, CA',
    summary: 'Electrical emergency in Mission Viejo? We respond fast — sparking, burning smells, power outages, and more. Call (949) 312-6033.',
    intro: 'An electrical emergency can happen at any hour. Ultimate Green Electric, Inc. offers emergency electrician service in Mission Viejo for situations that can\'t wait — sparking outlets, burning smells, sudden power loss, and other urgent hazards. Our electricians are ready to respond quickly and make your property safe again.',
    sections: [
      {
        heading: 'When to Call an Emergency Electrician',
        body: 'Call us immediately if you experience: sparking from an outlet or switch, a burning plastic smell near electrical panels or outlets, buzzing or humming from your panel, a breaker that won\'t stay reset, water damage near wiring, or a complete power outage that isn\'t a utility company issue. These situations are fire hazards and need professional attention right away.',
      },
      {
        heading: 'Fast Response in Mission Viejo',
        body: 'Because we\'re based in Mission Viejo, we can reach most local addresses quickly. Our emergency electricians arrive in fully stocked vehicles ready to stabilize the situation, identify the hazard, and perform immediate repairs or safe temporary fixes until a permanent solution can be completed.',
      },
      {
        heading: 'Safety First — What to Do While You Wait',
        body: 'If you smell burning or see sparks, turn off power at the main breaker if you can do so safely. Do not touch any affected outlets or switches. Evacuate the area if the smell is strong. Then call (949) 312-6033 and we\'ll guide you through next steps while an electrician is on the way.',
      },
    ],
    faqs: [
      { question: 'Do you offer 24/7 emergency electrical service?', answer: 'Yes. Emergency electrical services are available in Mission Viejo and surrounding areas. Call (949) 312-6033 any time, day or night.' },
      { question: 'What counts as an electrical emergency?', answer: 'Sparking, burning smells, buzzing from your panel, repeated breaker tripping, water near wiring, and total power loss are all emergencies. When in doubt, call — it\'s better to be safe.' },
      { question: 'How fast can an emergency electrician get to my Mission Viejo home?', answer: 'Because we are based in Mission Viejo, response times are typically very fast. We\'ll give you an estimated arrival time when you call (949) 312-6033.' },
    ],
  },
  {
    slug: 'panel-upgrade',
    title: 'Panel Upgrade',
    shortTitle: 'Panel Upgrades',
    icon: 'LayoutGrid',
    image: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician installing a new electrical panel in Mission Viejo',
    metaTitle: 'Electrical Panel Upgrade Mission Viejo CA | Ultimate Green Electric',
    metaDescription: 'Electrical panel upgrade in Mission Viejo, CA. Replace outdated 100A panels, add capacity for EV chargers & additions. Call (949) 312-6033.',
    h1: 'Electrical Panel Upgrade in Mission Viejo, CA',
    summary: 'Upgrade your Mission Viejo home\'s electrical panel for safety, capacity, and code compliance. Free estimates available.',
    intro: 'If your home still has a 100-amp panel — or worse, an outdated fuse box — it may not handle the demands of modern life. Ultimate Green Electric, Inc. performs electrical panel upgrades in Mission Viejo to bring your home up to code, add capacity for new appliances or EV chargers, and eliminate the fire risk of aging panels.',
    sections: [
      {
        heading: 'Signs You Need a Panel Upgrade',
        body: 'Your breaker trips frequently. You\'ve added a major appliance, EV charger, or AC unit. Your lights dim when large loads turn on. Your panel is more than 25 years old. You still have a fuse box. You\'re planning a home addition or remodel. Any of these means it\'s time to have a licensed electrician evaluate your panel capacity.',
      },
      {
        heading: '200-Amp and 400-Amp Upgrades',
        body: 'We upgrade Mission Viejo homes from 100-amp to 200-amp or 400-amp service, including new meter bases, grounding, bonding, and all required permitting and inspection. Modern panels give you headroom for EV chargers, tankless water heaters, solar tie-ins, home additions, and any future electrical expansion.',
      },
      {
        heading: 'Permitting & Inspection Handled For You',
        body: 'Every panel upgrade we do in Mission Viejo is fully permitted and inspected by the city. We handle all paperwork and coordinate with the inspector so you don\'t have to. You get documentation that proves the work was done to code — important for insurance and resale.',
      },
    ],
    faqs: [
      { question: 'How long does a panel upgrade take?', answer: 'Most residential panel upgrades in Mission Viejo are completed in one day. Larger 400-amp upgrades or service relocations may take longer. We\'ll give you a clear timeline during your free estimate.' },
      { question: 'Do I need a permit for a panel upgrade?', answer: 'Yes, panel upgrades require a city permit and inspection in Mission Viejo. We handle all permitting and inspection coordination for you.' },
      { question: 'How much does a panel upgrade cost?', answer: 'Costs vary based on amperage and whether your meter base or service entrance also needs upgrading. Call (949) 312-6033 for a free estimate tailored to your home.' },
    ],
  },
  {
    slug: 'ev-charger-installation',
    title: 'EV Charger Installation',
    shortTitle: 'EV Chargers',
    icon: 'BatteryCharging',
    image: 'https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Wall-mounted EV charger installed at a Mission Viejo home',
    metaTitle: 'EV Charger Installation Mission Viejo CA | Ultimate Green Electric',
    metaDescription: 'Expert EV charger installation in Mission Viejo, CA. Tesla, ChargePoint, JuiceBox & more. Level 2 home charging stations. Call (949) 312-6033.',
    h1: 'EV Charger Installation in Mission Viejo, CA',
    summary: 'Level 2 home EV charger installation in Mission Viejo. Tesla, ChargePoint, JuiceBox — we install all major brands safely and to code.',
    intro: 'More Mission Viejo residents are driving electric, and a dedicated Level 2 home charger is the best way to keep your vehicle ready to go. Ultimate Green Electric, Inc. installs EV charging stations from all major brands — Tesla, ChargePoint, JuiceBox, Grizzl-E, and more — with the proper dedicated circuit, breaker, and safety components your vehicle requires.',
    sections: [
      {
        heading: 'Level 2 Home Charging — What You Need',
        body: 'A Level 2 EV charger needs a dedicated 240V circuit, typically 40 to 60 amps, run from your electrical panel to your garage or driveway. If your panel doesn\'t have the capacity, we can perform a panel upgrade at the same time. We\'ll assess your panel, recommend the right charger and circuit size, and give you an upfront price for the complete installation.',
      },
      {
        heading: 'All Major Brands Supported',
        body: 'We install Tesla Wall Connectors, ChargePoint Home Flex, JuiceBox Pro, Grizzl-E, Autel, and other leading EV chargers. Not sure which charger is right for your vehicle? We\'ll help you choose based on your car\'s charging rate, your panel capacity, and your daily driving needs.',
      },
      {
        heading: 'Outdoor & Multi-Charger Installations',
        body: 'Need a charger mounted outdoors or in a carport? We use weather-rated enclosures and conduit for safe outdoor installations. If you have two EVs, we can install multiple chargers with load-sharing so they work within your panel\'s capacity. Every installation is permitted and inspected.',
      },
    ],
    faqs: [
      { question: 'How much does EV charger installation cost in Mission Viejo?', answer: 'Cost depends on your panel capacity, the distance from the panel to the charger location, and whether a panel upgrade is needed. Call (949) 312-6033 for a free estimate.' },
      { question: 'Can you install a Tesla Wall Connector?', answer: 'Yes. We install Tesla Wall Connectors and all other major Level 2 EV charger brands for Mission Viejo residents.' },
      { question: 'Do I need a panel upgrade for an EV charger?', answer: 'It depends on your panel\'s available capacity. We\'ll inspect your panel during the estimate and let you know if an upgrade is needed before any work begins.' },
    ],
  },
  {
    slug: 'lighting-installation',
    title: 'Lighting Installation',
    shortTitle: 'Lighting',
    icon: 'Lightbulb',
    image: 'https://images.pexels.com/photos/1253128/pexels-photo-1253128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Modern lighting installation in a Mission Viejo home',
    metaTitle: 'Lighting Installation Mission Viejo CA | Ultimate Green Electric',
    metaDescription: 'Professional lighting installation in Mission Viejo, CA. Recessed lighting, LED retrofit, outdoor & landscape lighting. Call (949) 312-6033.',
    h1: 'Lighting Installation in Mission Viejo, CA',
    summary: 'Recessed lighting, LED retrofits, outdoor and landscape lighting — installed by licensed Mission Viejo electricians.',
    intro: 'The right lighting transforms a space. Ultimate Green Electric, Inc. provides professional lighting installation in Mission Viejo for homes and businesses — from recessed can lighting and LED retrofits to outdoor security and landscape lighting. Our electricians handle the wiring, switches, dimmers, and fixtures so everything works beautifully and safely.',
    sections: [
      {
        heading: 'Recessed & Interior Lighting',
        body: 'Recessed lighting is one of the most popular upgrades in Mission Viejo homes. It brightens kitchens, living rooms, and hallways while making ceilings look cleaner and higher. We install new recessed fixtures, convert old cans to LED, and add dimmer switches for perfect light control in every room.',
      },
      {
        heading: 'LED Retrofits That Save Money',
        body: 'Switching to LED can cut your lighting energy use by up to 80%. We retrofit existing fixtures with LED bulbs, drivers, or full replacement fixtures in homes and commercial spaces throughout Mission Viejo. Most retrofits pay for themselves in energy savings within one to two years.',
      },
      {
        heading: 'Outdoor, Security & Landscape Lighting',
        body: 'Illuminate your home\'s exterior for safety, curb appeal, and security. We install pathway lights, uplighting for trees and architecture, motion-sensor security lights, and deck lighting. All outdoor fixtures are properly rated for wet locations and wired with weather-safe conduit.',
      },
    ],
    faqs: [
      { question: 'Can you install dimmer switches with my new lighting?', answer: 'Yes. We install compatible dimmer switches with all lighting installations. We\'ll make sure the dimmer is rated for the specific fixture and bulb type you choose.' },
      { question: 'Do you install outdoor and landscape lighting?', answer: 'Absolutely. We install pathway, security, and landscape lighting throughout Mission Viejo using weather-rated fixtures and proper outdoor wiring methods.' },
      { question: 'Can you retrofit my existing fixtures to LED?', answer: 'Yes. We convert existing fixtures to LED in homes and businesses, which can reduce lighting energy costs by up to 80%.' },
    ],
  },
  {
    slug: 'outlet-switch-repair',
    title: 'Outlet & Switch Repair',
    shortTitle: 'Outlets & Switches',
    icon: 'Plug',
    image: 'https://images.pexels.com/photos/5691494/pexels-photo-5691494.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician installing a new electrical outlet on a wall',
    metaTitle: 'Outlet & Switch Repair Mission Viejo CA | Ultimate Green Electric',
    metaDescription: 'Outlet and switch repair in Mission Viejo, CA. Dead outlets, GFCI repair, dimmer installation & more. Licensed electricians. Call (949) 312-6033.',
    h1: 'Outlet & Switch Repair in Mission Viejo, CA',
    summary: 'Dead outlets, faulty switches, GFCI troubleshooting, and new installations — handled by Mission Viejo\'s trusted electricians.',
    intro: 'Outlets and switches are the points where you interact with your electrical system every day. When one fails, it\'s more than an inconvenience — it can be a safety hazard. Ultimate Green Electric, Inc. repairs and replaces outlets, switches, and GFCIs throughout Mission Viejo, bringing your system up to code and restoring safe, reliable power.',
    sections: [
      {
        heading: 'GFCI Outlets — Code & Safety',
        body: 'Ground Fault Circuit Interrupter (GFCI) outlets are required by code in kitchens, bathrooms, garages, and outdoor areas. If your GFCI keeps tripping or won\'t reset, it may be worn out or there may be a ground fault on the circuit. We test, diagnose, and replace GFCI outlets to keep your Mission Viejo home safe and compliant.',
      },
      {
        heading: 'New Outlets & Relocations',
        body: 'Need an outlet where there isn\'t one? We install new outlets for TVs, appliances, home offices, and EV chargers. We also relocate outlets during remodels and add dedicated circuits for high-draw appliances like refrigerators, microwaves, and window AC units.',
      },
      {
        heading: 'Switch Repair & Smart Switches',
        body: 'A switch that feels warm, makes a popping sound, or doesn\'t always work needs attention. We repair and replace single-pole, 3-way, and 4-way switches. We also install smart switches and dimmers that work with home automation systems — ask us about upgrading your Mission Viejo home.',
      },
    ],
    faqs: [
      { question: 'Why is my GFCI outlet keeps tripping?', answer: 'A tripping GFCI can indicate a ground fault on the circuit, moisture in the box, or a worn-out GFCI. Our Mission Viejo electricians can diagnose the exact cause and repair or replace the outlet.' },
      { question: 'Can you add an outlet where there isn\'t one?', answer: 'Yes. We install new outlets in any room, including dedicated circuits for appliances, home offices, and EV chargers. Call (949) 312-6033 to schedule.' },
      { question: 'Do you install smart switches?', answer: 'Yes. We install smart switches and dimmers that integrate with home automation systems, including Wi-Fi and Z-Wave compatible models.' },
    ],
  },
  {
    slug: 'ceiling-fan-installation',
    title: 'Ceiling Fan Installation',
    shortTitle: 'Ceiling Fans',
    icon: 'Fan',
    image: 'https://images.pexels.com/photos/3990590/pexels-photo-3990590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Ceiling fan installed in a Mission Viejo living room',
    metaTitle: 'Ceiling Fan Installation Mission Viejo CA | Ultimate Green Electric',
    metaDescription: 'Ceiling fan installation in Mission Viejo, CA. Indoor, outdoor, dual-fan setups & fan/light combos. Licensed electricians. Call (949) 312-6033.',
    h1: 'Ceiling Fan Installation in Mission Viejo, CA',
    summary: 'Safe, professional ceiling fan installation in Mission Viejo — including outdoor-rated fans, fan/light combos, and ceiling box upgrades.',
    intro: 'A ceiling fan improves comfort and reduces energy costs, but only if it\'s installed correctly. Ultimate Green Electric, Inc. provides ceiling fan installation in Mission Viejo for homes of every type. We ensure the ceiling box is properly rated and supported, the wiring is safe, and the fan is balanced and secure.',
    sections: [
      {
        heading: 'Proper Support Matters',
        body: 'A ceiling fan weighs far more than a light fixture and vibrates while running. Standard light boxes are not rated for fans and can work loose over time — a serious safety risk. We replace standard boxes with fan-rated, brace-supported boxes so your ceiling fan stays secure for years.',
      },
      {
        heading: 'Indoor & Outdoor Fans',
        body: 'We install ceiling fans in bedrooms, living rooms, patios, and gazebos throughout Mission Viejo. For outdoor locations, we use wet-rated fans and weather-safe wiring. We also install fan/light combos with remote controls and wall switches, including dual-fan and dual-light control setups.',
      },
      {
        heading: 'Existing Wiring & Remote Controls',
        body: 'If your ceiling has existing wiring but no wall switch, we can add a wall switch or set up a remote control system. We also replace old fans with new ones, including proper disconnection, box inspection, and balanced reinstallation.',
      },
    ],
    faqs: [
      { question: 'Can you install a ceiling fan where there\'s only a light fixture now?', answer: 'Yes. We replace the existing light box with a fan-rated box and use the existing wiring if it\'s in good condition. We\'ll inspect everything before installation.' },
      { question: 'Do you install outdoor ceiling fans?', answer: 'Absolutely. We install wet-rated ceiling fans on patios and in outdoor living spaces using proper weather-safe wiring and fixtures.' },
      { question: 'How long does ceiling fan installation take?', answer: 'Most ceiling fan installations in Mission Viejo take 1 to 2 hours, including box replacement and wiring. We\'ll give you a time estimate when you call (949) 312-6033.' },
    ],
  },
  {
    slug: 'electrical-inspection',
    title: 'Electrical Inspection',
    shortTitle: 'Inspections',
    icon: 'ClipboardCheck',
    image: 'https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician inspecting a residential electrical panel in Mission Viejo',
    metaTitle: 'Electrical Inspection Mission Viejo CA | Ultimate Green Electric',
    metaDescription: 'Professional electrical inspection in Mission Viejo, CA. Home sale, insurance, safety inspections. Licensed electricians. Call (949) 312-6033.',
    h1: 'Electrical Inspection in Mission Viejo, CA',
    summary: 'Comprehensive electrical inspections for home sales, insurance, and safety — performed by licensed Mission Viejo electricians.',
    intro: 'Whether you\'re buying a home, selling one, or just want peace of mind, a professional electrical inspection is one of the smartest investments you can make. Ultimate Green Electric, Inc. provides thorough electrical inspections in Mission Viejo, documenting the condition of your panel, wiring, outlets, grounding, and more.',
    sections: [
      {
        heading: 'Home Sale & Real Estate Inspections',
        body: 'If you\'re buying or selling a home in Mission Viejo, an electrical inspection reveals the true condition of the system — not just what a general home inspector can see. We check the panel for proper sizing and labeling, test outlets and GFCIs, inspect visible wiring for age or damage, verify grounding and bonding, and flag any code violations or safety hazards.',
      },
      {
        heading: 'Insurance & Safety Inspections',
        body: 'Some insurance companies require an electrical inspection before writing or renewing a policy, especially for older homes. We provide the detailed written inspection reports insurers need. Even if you\'re not required to get one, a safety inspection is worthwhile for any Mission Viejo home over 25 years old.',
      },
      {
        heading: 'What Our Inspection Includes',
        body: 'Panel and subpanel condition, breaker type and age, main service amperage, grounding and bonding, GFCI/AFCI coverage, outlet and switch condition, visible wiring inspection, smoke detector check, surge protection status, and a written report with photos and prioritized recommendations.',
      },
    ],
    faqs: [
      { question: 'How much does an electrical inspection cost?', answer: 'Inspection costs vary based on the size and age of your home. Call (949) 312-6033 for a quote. If you proceed with recommended repairs, the inspection fee is often credited toward the work.' },
      { question: 'Do you provide a written report?', answer: 'Yes. Every electrical inspection includes a detailed written report with photos and prioritized recommendations that you can share with your real estate agent or insurance company.' },
      { question: 'Should I get an inspection if I\'m not selling?', answer: 'Yes, especially if your Mission Viejo home is over 25 years old. An inspection catches hazards before they become emergencies and gives you peace of mind.' },
    ],
  },
];

export const HOME_FAQS = [
  { question: 'What areas does Ultimate Green Electric serve?', answer: 'We are based in Mission Viejo and serve all of South Orange County, including Irvine, Dana Point, Laguna Hills, Laguna Niguel, Lake Forest, Aliso Viejo, San Juan Capistrano, Rancho Santa Margarita, and Newport Beach.' },
  { question: 'Are you licensed and insured?', answer: 'Yes. Ultimate Green Electric, Inc. is fully licensed (CA Lic #999000), bonded, and insured. All of our electricians hold current certifications and receive ongoing training.' },
  { question: 'Do you offer free estimates?', answer: 'Yes, we provide free estimates on most residential and commercial electrical projects. Call (949) 312-6033 to schedule a visit from one of our electricians.' },
  { question: 'Do you provide emergency electrical service?', answer: 'Yes. Emergency electrical services are available for Mission Viejo and surrounding areas. Call (949) 312-6033 any time, day or night.' },
  { question: 'What are your business hours?', answer: 'Our regular hours are Monday through Friday, 7:00 AM to 5:00 PM. Saturday and Sunday are by appointment only. Emergency service is available outside regular hours.' },
];

export const GENERAL_FAQS = [
  { question: 'Do you offer free estimates?', answer: 'Yes, we provide free estimates on most electrical projects. Call (949) 312-6033 to schedule a visit from one of our licensed electricians.' },
  { question: 'Are you licensed and insured?', answer: 'Yes. Ultimate Green Electric, Inc. is fully licensed (CA Lic #999000), bonded, and insured for your protection.' },
  { question: 'Do you serve my area?', answer: 'We are based in Mission Viejo and serve all of South Orange County, including Irvine, Dana Point, Laguna Hills, Laguna Niguel, Lake Forest, Aliso Viejo, and surrounding communities.' },
  { question: 'Do you provide emergency service?', answer: 'Yes. Emergency electrical services are available. Call (949) 312-6033 any time, day or night.' },
];

export const TESTIMONIALS = [
  { name: 'Robert M.', location: 'Mission Viejo, CA', text: 'Ultimate Green Electric upgraded our electrical panel from 100 to 200 amps. They were on time, professional, and the price was exactly what they quoted. Highly recommend.', rating: 5 },
  { name: 'Jennifer L.', location: 'Irvine, CA', text: 'We needed a Tesla charger installed in our garage. They assessed our panel, installed a dedicated circuit, and had it done in a few hours. Excellent work and clean.', rating: 5 },
  { name: 'David K.', location: 'Laguna Hills, CA', text: 'Our breaker kept tripping on a hot day. They came out the same afternoon, found a loose neutral wire, and fixed it. No upselling, just honest work. Will call again.', rating: 5 },
  { name: 'Maria S.', location: 'Dana Point, CA', text: 'Beautiful job installing recessed lighting throughout our living room and kitchen. They were careful with our furniture and cleaned up perfectly. Our home looks amazing.', rating: 5 },
  { name: 'Thomas R.', location: 'Lake Forest, CA', text: 'Commercial tenant improvement for our new office. They coordinated with our GC and the city inspector, finished on schedule, and passed inspection the first time.', rating: 5 },
  { name: 'Patricia H.', location: 'Laguna Niguel, CA', text: 'After a power surge fried several outlets, they came out quickly, replaced the damaged outlets and GFCIs, and installed a whole-house surge protector. Great service.', rating: 5 },
];
