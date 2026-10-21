export interface CityProject {
  title: string;
  category: string;
  description: string;
  specs: string[];
  image: string;
  imageAlt: string;
}

export interface LocationContent {
  slug: string;
  name: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  zipCodes: string[];
  permitAuthority: string;
  buildingCharacteristics: string;
  intro: string;
  servicesIntro: string;
  residential: string;
  commercial: string;
  emergency: string;
  panel: string;
  ev: string;
  whyChoose: string;
  areasNear: string;
  localProject: CityProject;
  faqs: { question: string; answer: string }[];
}

export const LOCATION_CONTENTS: Record<string, LocationContent> = {
  'mission-viejo': {
    slug: 'mission-viejo',
    name: 'Mission Viejo',
    primaryKeyword: 'Electrician in Mission Viejo, CA',
    metaTitle: 'Electrician in Mission Viejo, CA | Ultimate Green Electric',
    metaDescription: 'Top-rated licensed electrician in Mission Viejo, CA (Lic #999000). Residential rewiring, 200A panel upgrades, EV chargers & emergency repairs. Call (949) 312-6033.',
    zipCodes: ['92691', '92692'],
    permitAuthority: 'City of Mission Viejo Building Services Division',
    buildingCharacteristics: 'Established 1970s-1980s single-family homes, original 100-amp panels, aluminum branch wiring in select tracts, and modern master-planned neighborhoods around Lake Mission Viejo.',
    intro: "As our primary headquarters city in South Orange County, Mission Viejo is known for its tree-lined master-planned neighborhoods and thriving commercial centers along Marguerite Parkway and Puerta Real. However, many homes built here in the 1970s and 1980s still operate on original 100-amp electrical panels and outdated Zinsco or Federal Pacific breakers that cannot safely support modern electrical loads. Ultimate Green Electric, Inc. provides fast, code-compliant residential and commercial electrical services directly from our Mission Viejo office.",
    servicesIntro: "From homes bordering Lake Mission Viejo and Casta del Sol to corporate offices near Crown Valley Parkway, our licensed electricians handle everything from diagnosing flickering circuits to permitted 200A panel upgrades and Tesla EV charger installations.",
    residential: "We help Mission Viejo homeowners modernize their electrical systems with whole-home rewiring, dedicated kitchen small-appliance circuits, architectural recessed LED lighting, and arc-fault/GFCI breaker protection. Our technicians treat your property with meticulous care, always wearing protective shoe covers and vacuuming work areas thoroughly.",
    commercial: "We support Mission Viejo medical offices, retail storefronts, and restaurants with dependable commercial electrical contracting. Our services include tenant build-outs, Title 24 compliant commercial lighting retrofits, dedicated 3-phase machinery circuits, and preventative electrical maintenance scheduled to avoid business downtime.",
    emergency: "Electrical emergencies require immediate professional attention. If you detect a burning plastic odor, hear buzzing from your breaker box, or experience sudden loss of power on one phase, our Mission Viejo emergency electricians respond quickly with fully equipped service vehicles.",
    panel: "Many original Mission Viejo properties still run on outdated 100A panels that struggle when central air conditioners or electric vehicle chargers turn on. We specialize in 200-amp and 400-amp main service panel upgrades, coordinating municipal permits directly with City of Mission Viejo Building Services.",
    ev: "With electric vehicle adoption climbing across Mission Viejo, a dedicated Level 2 home charging station is essential. We install Tesla Wall Connectors, ChargePoint, and universal EV chargers with heavy-duty conduit runs and precise load calculations.",
    whyChoose: "Our central office is located right here at 27525 Puerta Real in Mission Viejo. We know local neighborhood architectural guidelines, HOA requirements, and municipal building codes inside and out, delivering honest assessments and transparent upfront pricing.",
    areasNear: "From our Mission Viejo dispatch hub, we also provide rapid service to neighboring communities including Lake Forest, Laguna Hills, Aliso Viejo, and Rancho Santa Margarita.",
    localProject: {
      title: '200A Main Service Panel Upgrade',
      category: 'Panel Upgrade',
      description: 'Replaced an original 100-amp Zinsco panel on a 1978 Mission Viejo single-family home with a modern Square D 200A panel and whole-home surge protector. Fully permitted and approved by the City of Mission Viejo.',
      specs: ['200A Main Breaker', 'Whole-Home Surge Protector', 'City of Mission Viejo Permitted', '1-Day Completion'],
      image: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: '200-amp main service panel replacement in Mission Viejo'
    },
    faqs: [
      {
        question: "Do you pull permits with the City of Mission Viejo?",
        answer: "Yes. All major electrical work — including service panel upgrades, subpanels, and EV charger installations — requires a permit from the City of Mission Viejo Building Services Division. We handle all paperwork, permit fees, and inspector walk-throughs for you."
      },
      {
        question: "Is aluminum wiring common in older Mission Viejo homes?",
        answer: "Yes, many tract homes constructed in Mission Viejo between 1968 and the mid-1970s were wired with aluminum conductors. Over time, loose connections can cause dangerous overheating. We provide comprehensive safety inspections and safe COPALUM or AlumiConn pigtailing to secure your circuits."
      },
      {
        question: "How fast can you dispatch an electrician in Mission Viejo?",
        answer: "Because our central dispatch office is located at 27525 Puerta Real in Mission Viejo, we can often arrive for emergency calls in under 30 minutes, and same-day service is available for standard repairs."
      }
    ]
  },
  'irvine': {
    slug: 'irvine',
    name: 'Irvine',
    primaryKeyword: 'Electrician in Irvine, CA',
    metaTitle: 'Electrician in Irvine, CA | Ultimate Green Electric',
    metaDescription: 'Trusted licensed electrician in Irvine, CA (Lic #999000). Commercial tenant buildouts, residential rewiring, Level 2 EV chargers & panel upgrades. Call (949) 312-6033.',
    zipCodes: ['92602', '92603', '92604', '92606', '92612', '92614', '92618', '92620'],
    permitAuthority: 'City of Irvine Community Development Department',
    buildingCharacteristics: 'High concentration of technology parks, modern planned villages (Woodbridge, Turtle Rock, Westpark, Portola Springs), strict Title 24 energy compliance, and widespread EV adoption.',
    intro: "Irvine is a premier master-planned city in Southern California, renowned for cutting-edge technology companies, the Irvine Spectrum Center, and meticulously designed residential villages. Properties in Irvine demand high-performance, energy-efficient electrical solutions that strictly adhere to California Title 24 standards. Ultimate Green Electric, Inc. provides licensed residential and commercial electrical contracting services to Irvine homeowners and businesses.",
    servicesIntro: "From established homes in Woodbridge and Turtle Rock to modern developments in Great Park and commercial corporate suites in the Irvine Business Complex (IBC), our certified electricians deliver precision installations and prompt diagnostic repairs.",
    residential: "We assist Irvine homeowners with smart home automation wiring (Lutron Caséta), ultra-thin architectural recessed lighting, dedicated circuits for high-draw appliances, and home office electrical distribution. We respect your living spaces with meticulous drop-cloth protection and shoe covers.",
    commercial: "Irvine's extensive commercial complexes require dependable electrical contractors. We provide commercial tenant improvements, Title 24 commercial lighting retrofits with automated daylight harvesting, backup generator interlocks, and dedicated 3-phase circuits for industrial manufacturing and server rooms.",
    emergency: "When an electrical fault disrupts your home or office, our mobile Irvine service team is dispatched promptly to troubleshoot tripping circuit breakers, diagnose main panel hot spots, and restore power safely.",
    panel: "Many Irvine properties adding solar batteries, heat pump water heaters, or dual EV chargers require panel capacity upgrades. We evaluate whole-home electrical load calculations and perform seamless 200A or 400A service upgrades permitted through the City of Irvine.",
    ev: "Irvine leads Orange County in electric vehicle adoption. We install Level 2 Tesla Wall Connectors, ChargePoint Home Flex, and Rivian chargers with clean, concealed conduit runs and dedicated 50A/60A breakers.",
    whyChoose: "We combine 20+ years of technical electrical expertise with honest communication and upfront pricing. As a licensed California C-10 contractor, we ensure every Irvine installation is code-compliant and safely permitted.",
    areasNear: "Beyond Irvine, our electricians regularly service neighboring communities including Tustin, Newport Beach, Lake Forest, and Costa Mesa.",
    localProject: {
      title: 'Commercial Office LED Title 24 Retrofit',
      category: 'Commercial',
      description: 'Upgraded an 8,500 sq ft technology suite in the Irvine Business Complex with Title 24 compliant LED flat-panel troffers, multi-zone automated daylight sensors, and digital dimming controls.',
      specs: ['California Title 24 Compliant', 'Daylight Harvesting Sensors', '65% Lighting Energy Reduction', 'After-Hours Scheduling'],
      image: 'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Commercial LED lighting installation in Irvine office'
    },
    faqs: [
      {
        question: "How do you handle Irvine Company and HOA approval for EV charger installation?",
        answer: "Many Irvine villages and condo associations have specific conduit routing and aesthetic guidelines. We provide detailed installation specifications and load calculation reports to help you obtain fast HOA or Irvine Company approval before installation."
      },
      {
        question: "Are your commercial lighting retrofits Title 24 compliant in Irvine?",
        answer: "Yes, all commercial lighting work performed by Ultimate Green Electric strictly adheres to the 2026 California Title 24 Building Energy Efficiency Standards, including required occupancy sensors and daylight harvesting controls."
      },
      {
        question: "Do you service commercial properties in the Irvine Spectrum and IBC?",
        answer: "Yes. We offer commercial electrical services across Irvine with flexible after-hours and weekend scheduling to ensure zero disruption to your employees and clients."
      }
    ]
  },
  'dana-point': {
    slug: 'dana-point',
    name: 'Dana Point',
    primaryKeyword: 'Electrician in Dana Point, CA',
    metaTitle: 'Electrician in Dana Point, CA | Ultimate Green Electric',
    metaDescription: 'Coastal licensed electrician in Dana Point, CA (Lic #999000). Salt-air corrosion repairs, panel upgrades, marine-grade lighting & EV chargers. Call (949) 312-6033.',
    zipCodes: ['92624', '92629'],
    permitAuthority: 'City of Dana Point Community Development Department',
    buildingCharacteristics: 'Oceanfront bluff estates, harbor-adjacent commercial dining and retail, exposure to marine salt-spray that accelerates exterior panel and fixture corrosion.',
    intro: "Dana Point is famous for its picturesque harbor, dramatic coastal bluffs, and ocean-view properties. However, living along the Pacific coast exposes electrical systems to high humidity and corrosive salt air. Exterior electrical panels, meter mains, and outdoor lighting fixtures in Dana Point deteriorate much faster than inland systems. Ultimate Green Electric, Inc. provides weather-resistant, coastal-grade electrical installations and repairs throughout Dana Point.",
    servicesIntro: "From Monarch Beach and the Lantern District to Capistrano Beach, our licensed electricians install marine-rated enclosures, weather-sealed GFCI outlets, and corrosion-resistant landscape lighting systems designed to endure coastal elements.",
    residential: "We provide comprehensive residential electrical repairs, custom indoor lighting design, ceiling fan installations to circulate coastal ocean breezes, and thermal inspections to detect salt-air corrosion in exterior main panels.",
    commercial: "We service Dana Point's waterfront restaurants, boutique shops, and marina businesses. From commercial kitchen dedicated circuits and patio heaters to safety disconnects, we keep coastal businesses operating safely.",
    emergency: "Severe coastal wind and rainstorms can trigger sudden shorts and moisture intrusion in outdoor electrical boxes. Our Dana Point emergency electricians respond quickly to isolate hazards and restore power.",
    panel: "Replacing an aging or salt-corroded electrical panel in Dana Point is crucial for preventing electrical fires. We install NEMA 3R weather-tight panels with copper bussing and corrosion-inhibiting compounds that pass City of Dana Point building inspections.",
    ev: "Drive electric along Pacific Coast Highway? We install Level 2 EV charging stations with weather-rated enclosures and stainless-steel hardware engineered to withstand coastal marine fog.",
    whyChoose: "We understand the specific environmental conditions affecting Dana Point properties. Our focus on marine-grade materials and code compliance guarantees long-term durability and safety for your home.",
    areasNear: "Our service corridor connects Dana Point with neighboring San Juan Capistrano, Laguna Niguel, and San Clemente.",
    localProject: {
      title: 'Corrosion-Resistant Exterior Panel Replacement',
      category: 'Panel Upgrade',
      description: 'Replaced a salt-damaged, corroded 100A meter main in a Dana Point coastal home with a weather-sealed NEMA 3R 200-amp copper-bus panel and marine-rated weatherhead.',
      specs: ['NEMA 3R Weather-Tight Enclosure', 'Copper Bussing', 'City of Dana Point Permitted', 'Corrosion-Inhibiting Sealants'],
      image: 'https://images.pexels.com/photos/17924298/pexels-photo-17924298.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Exterior electrical panel installation in Dana Point'
    },
    faqs: [
      {
        question: "How does coastal salt air affect electrical panels in Dana Point?",
        answer: "Airborne marine salts deposit onto breaker terminals and aluminum buss bars, causing oxidation, increased electrical resistance, and dangerous overheating. We recommend an annual visual and thermal inspection of all exterior panels in coastal Dana Point."
      },
      {
        question: "What outdoor lighting materials last longest in Dana Point?",
        answer: "Standard powder-coated aluminum fixtures often pit and corrode within 2-3 years near the ocean. We strongly recommend solid brass, copper, or marine-grade composite fixtures with sealed silicone gaskets for coastal Dana Point properties."
      },
      {
        question: "Do you install outdoor EV chargers that can withstand coastal rain and fog?",
        answer: "Yes, we use NEMA 4 or 4X rated weatherproof enclosures with watertight conduit fittings to ensure your EV charger operates reliably in damp coastal conditions."
      }
    ]
  },
  'laguna-hills': {
    slug: 'laguna-hills',
    name: 'Laguna Hills',
    primaryKeyword: 'Electrician in Laguna Hills, CA',
    metaTitle: 'Electrician in Laguna Hills, CA | Ultimate Green Electric',
    metaDescription: 'Top licensed electrician in Laguna Hills, CA (Lic #999000). 200A panel upgrades, surge protection, EV chargers & troubleshooting. Call (949) 312-6033.',
    zipCodes: ['92653', '92654'],
    permitAuthority: 'City of Laguna Hills Building Division',
    buildingCharacteristics: 'Custom equestrian estates in Nellie Gail Ranch, established suburban tract homes from the 1970s and 1980s, and commercial medical centers near Saddleback Medical Center.',
    intro: "Laguna Hills is a scenic South Orange County community blending custom equestrian estates in Nellie Gail Ranch with established residential neighborhoods and medical centers. As homes in Laguna Hills mature, their electrical systems often require modernization to keep up with high-wattage smart appliances, multi-zone HVAC units, and electric vehicle charging. Ultimate Green Electric, Inc. delivers dependable, licensed electrical contracting across Laguna Hills.",
    servicesIntro: "Whether your home is situated in the rolling hills of Nellie Gail or in a quiet neighborhood near Alicia Parkway, our licensed technicians deliver upfront estimates and top-tier workmanship.",
    residential: "We provide Laguna Hills homeowners with dedicated 240V appliance circuits, whole-home surge protection to guard expensive smart home electronics against voltage spikes, and LED recessed lighting conversions.",
    commercial: "We support Laguna Hills medical suites, offices, and retail centers with code-compliant commercial repairs, subpanel additions, and energy-saving lighting retrofits.",
    emergency: "If your breaker panel begins humming loudly, outlets stop working in vital rooms, or you smell scorched insulation, our emergency repair vehicles are dispatched promptly to secure your home.",
    panel: "Many homes in Laguna Hills still utilize original 100A or 125A electrical panels that trip frequently when high-load appliances activate. We specialize in permitted 200-amp and 400-amp panel upgrades that pass City of Laguna Hills building inspections.",
    ev: "We install Level 2 EV charging stations with dedicated 40A to 60A branch circuits, load monitoring, and permit acquisition handled from start to finish.",
    whyChoose: "Laguna Hills homeowners choose Ultimate Green Electric for our upfront pricing, 20+ years of verified contractor experience, and clean work etiquette.",
    areasNear: "Our technicians also routinely service neighboring Aliso Viejo, Mission Viejo, and Laguna Woods.",
    localProject: {
      title: 'Whole-Home Surge Protection & 200A Service Upgrade',
      category: 'Panel Upgrade',
      description: 'Upgraded an outdated 100A panel in a Laguna Hills home to a 200A service with Type 1 whole-home surge protection and dedicated subpanel for a newly installed pool heater.',
      specs: ['200A Main Service', 'Type 1 Whole-Home Surge Protection', 'Dedicated Pool Subpanel', 'City of Laguna Hills Approved'],
      image: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Panel upgrade and surge protection in Laguna Hills'
    },
    faqs: [
      {
        question: "Why should I install a whole-house surge protector in Laguna Hills?",
        answer: "Modern homes have thousands of dollars in sensitive microprocessors across smart TVs, refrigerators, computers, and EV chargers. Whole-home surge protectors absorb external utility surges and internal motor switching spikes before they damage your appliances."
      },
      {
        question: "Do you install dedicated circuits for high-end appliances in Nellie Gail Ranch?",
        answer: "Yes, we install dedicated 120V and 240V circuits for commercial-grade kitchen ranges, sub-zero refrigerators, wine cellars, pool equipment, and workshop tools."
      },
      {
        question: "How long does a 200-amp panel upgrade take in Laguna Hills?",
        answer: "Most residential panel upgrades are completed within a single day. Power is typically shut off in the morning and restored by late afternoon once our work passes initial inspection."
      }
    ]
  },
  'laguna-niguel': {
    slug: 'laguna-niguel',
    name: 'Laguna Niguel',
    primaryKeyword: 'Electrician in Laguna Niguel, CA',
    metaTitle: 'Electrician in Laguna Niguel, CA | Ultimate Green Electric',
    metaDescription: 'Premier licensed electrician in Laguna Niguel, CA (Lic #999000). Residential rewiring, 200A panel upgrades, EV chargers & lighting. Call (949) 312-6033.',
    zipCodes: ['92677'],
    permitAuthority: 'City of Laguna Niguel Building & Safety Division',
    buildingCharacteristics: 'Prominent master-planned neighborhoods, coastal ridge view properties, custom kitchen and bathroom remodels, and high demand for Level 2 EV home charging.',
    intro: "Laguna Niguel is renowned for its vast regional parks, scenic ridge-top vistas, and upscale residential communities. Homeowners here take immense pride in their properties, expecting precision craftsmanship and clean work etiquette from their electrical contractor. Ultimate Green Electric, Inc. delivers licensed residential and commercial electrical services tailored to Laguna Niguel's high standards.",
    servicesIntro: "From Marina Hills and Bear Brand Ranch to neighborhoods along Crown Valley and Golden Lantern, our licensed electricians handle everything from complex electrical remodels to Level 2 EV charging stations.",
    residential: "We assist Laguna Niguel homeowners with kitchen remodel electrical wiring, AFCI/GFCI code updates, custom low-voltage landscape lighting, and smart dimming systems that enhance interior aesthetics.",
    commercial: "We partner with local Laguna Niguel retail establishments, offices, and restaurants to provide dependable commercial maintenance, signage power repairs, and dedicated circuits for commercial equipment.",
    emergency: "When an electrical emergency arises — such as a sparking wall receptacle, partial power failure, or circuit breaker that will not reset — our emergency electricians respond fast to restore safety.",
    panel: "Ensure your home's electrical infrastructure can support modern additions. We install modern 200-amp and 400-amp electrical panels in Laguna Niguel, complete with whole-house surge protection and city permits.",
    ev: "We install Level 2 Tesla Wall Connectors and universal EV charging equipment in Laguna Niguel garages, carefully concealing conduit along baseboards and structural beams.",
    whyChoose: "We provide a 5-star customer experience with clean drop cloths, shoe covers, upfront written estimates, and a 100% code-compliance guarantee.",
    areasNear: "Our technicians frequently travel between Laguna Niguel, Dana Point, Aliso Viejo, and San Juan Capistrano.",
    localProject: {
      title: 'Tesla Wall Connector 60A Installation',
      category: 'EV Charger',
      description: 'Installed a dedicated 60A 240V circuit with EMT conduit and a Tesla Wall Connector in a Laguna Niguel garage, delivering maximum 48-amp continuous home charging.',
      specs: ['60A Dedicated Circuit', 'Concealed EMT Conduit Run', 'Wi-Fi Commissioned', 'City of Laguna Niguel Permitted'],
      image: 'https://images.pexels.com/photos/5391509/pexels-photo-5391509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Tesla EV charger installed in Laguna Niguel garage'
    },
    faqs: [
      {
        question: "Can my existing electrical panel in Laguna Niguel handle an EV charger?",
        answer: "We perform a thorough load calculation during our estimate. If your panel has sufficient remaining amperage, we can install the dedicated circuit immediately. If your panel is at capacity, we can upgrade it to 200 amps simultaneously."
      },
      {
        question: "Do you install landscape lighting for hillside properties in Laguna Niguel?",
        answer: "Yes, we design and install low-voltage LED landscape lighting systems that accentuate hillside terrain, pathways, and outdoor entertaining spaces with energy-efficient fixtures."
      },
      {
        question: "What permits are required for electrical work in Laguna Niguel?",
        answer: "The City of Laguna Niguel requires permits for panel replacements, new subpanels, dedicated 240V EV circuits, and major rewiring. We pull all permits directly through the City of Laguna Niguel Building & Safety Division."
      }
    ]
  },
  'lake-forest': {
    slug: 'lake-forest',
    name: 'Lake Forest',
    primaryKeyword: 'Electrician in Lake Forest, CA',
    metaTitle: 'Electrician in Lake Forest, CA | Ultimate Green Electric',
    metaDescription: 'Licensed electrician in Lake Forest, CA (Lic #999000). Panel upgrades, EV chargers, commercial electrical & fast repairs. Call (949) 312-6033 for a free quote.',
    zipCodes: ['92630'],
    permitAuthority: 'City of Lake Forest Building Division',
    buildingCharacteristics: 'Mix of established 1970s suburban neighborhoods around the Lake Forest Beach and Tennis Club, new developments in Baker Ranch, and commercial/industrial business centers in Foothill Ranch.',
    intro: "Framed by the Saddleback Mountains, Lake Forest is a vibrant community with a diverse mix of classic neighborhoods and expanding commercial business centers. Many older homes in the Woods and near the Beach and Tennis Club feature original 100-amp panels that need modernizing, while businesses in Foothill Ranch need reliable commercial electrical contracting. Ultimate Green Electric, Inc. delivers complete electrical solutions throughout Lake Forest.",
    servicesIntro: "From residential repairs in established Lake Forest neighborhoods to tenant buildouts and warehouse lighting in Foothill Ranch, our licensed electricians get the job done right the first time.",
    residential: "Our Lake Forest residential services encompass troubleshooting intermittent circuit faults, ceiling fan installations, recessed lighting conversions, and rewiring during room additions.",
    commercial: "We offer comprehensive commercial electrical services across Lake Forest business parks, including high-bay warehouse LED retrofits, machine disconnects, 3-phase power, and emergency exit lighting maintenance.",
    emergency: "Electrical hazards do not wait for business hours. Our emergency technicians are on standby 24/7 to address burning odors, arcing breakers, or sudden power loss in Lake Forest.",
    panel: "Upgrading to a 200-amp panel is the best way to prepare your Lake Forest home for central air conditioning, an EV charger, or a modern induction range. We handle the permit and inspection process with City of Lake Forest building officials.",
    ev: "We install Level 2 EV charging stations from Tesla, ChargePoint, and JuiceBox for Lake Forest homeowners, ensuring safe load distribution and clean conduit routing.",
    whyChoose: "We are a locally based contractor with 20+ years of field experience in South Orange County. We offer transparent upfront pricing and guaranteed code compliance.",
    areasNear: "We also provide fast electrical dispatch to Foothill Ranch, Portola Hills, Irvine, and Mission Viejo.",
    localProject: {
      title: 'Emergency Feeder Cable & Subpanel Repair',
      category: 'Repairs',
      description: 'Responded same-day to an arcing subpanel feeder lug in a Lake Forest home, replaced damaged copper cables, torqued connections to manufacturer specifications, and restored power safely.',
      specs: ['Same-Day Emergency Dispatch', 'Thermal Camera Diagnosis', 'Torque-to-Spec Connections', 'Safe Power Restoration'],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Emergency subpanel repair in Lake Forest'
    },
    faqs: [
      {
        question: "Do you install dedicated 240V circuits for spas and hot tubs in Lake Forest?",
        answer: "Yes. Hot tubs require a dedicated 50A or 60A 240V circuit with an outdoor GFCI emergency disconnect located within sight of the spa, fully adhering to Lake Forest municipal building codes."
      },
      {
        question: "Can you retrofit commercial warehouse lighting in Foothill Ranch?",
        answer: "Yes, we replace outdated metal-halide and fluorescent high-bay fixtures with high-efficiency commercial LED fixtures that reduce electricity consumption by up to 70%."
      },
      {
        question: "Are estimates free for Lake Forest residential projects?",
        answer: "Yes, we provide free upfront estimates on all standard residential and commercial electrical installations in Lake Forest."
      }
    ]
  },
  'aliso-viejo': {
    slug: 'aliso-viejo',
    name: 'Aliso Viejo',
    primaryKeyword: 'Electrician in Aliso Viejo, CA',
    metaTitle: 'Electrician in Aliso Viejo, CA | Ultimate Green Electric',
    metaDescription: 'Top-rated licensed electrician in Aliso Viejo, CA (Lic #999000). Smart home wiring, EV charger installations, panel upgrades & repairs. Call (949) 312-6033.',
    zipCodes: ['92656'],
    permitAuthority: 'City of Aliso Viejo Building Services',
    buildingCharacteristics: 'Master-planned communities built predominantly in the 1990s and 2000s, active Homeowners Associations (HOAs), high-tech corporate campus parks near Pacific Park Dr.',
    intro: "Aliso Viejo is a master-planned community nestled in the San Joaquin Hills, characterized by modern residential developments, active community associations, and corporate tech parks. While homes in Aliso Viejo are newer than those in surrounding cities, electrical needs continue to evolve with the rapid adoption of electric vehicles, smart home automation, and home office power requirements. Ultimate Green Electric, Inc. delivers premium electrical contracting services across Aliso Viejo.",
    servicesIntro: "From hillside homes near Grand Avenue to commercial office suites near the Aliso Viejo Town Center, our licensed electricians provide cutting-edge installations and precision troubleshooting.",
    residential: "We help Aliso Viejo homeowners install Lutron smart dimmers, architectural LED recessed lighting, home theater dedicated circuits, and whole-home surge suppressors.",
    commercial: "We service corporate tech facilities and retail businesses in Aliso Viejo with commercial lighting optimization, dedicated server circuits, Title 24 compliance, and routine electrical safety checks.",
    emergency: "When an unexpected electrical fault threatens your safety or business operations in Aliso Viejo, our licensed technicians are on call 24 hours a day to isolate and repair the issue.",
    panel: "If your Aliso Viejo property is adding heavy electrical loads like a high-output EV charger, pool pump, or induction cooktop, we perform load calculations and subpanel/main panel upgrades.",
    ev: "We are EV charging installation specialists in Aliso Viejo. We install Level 2 chargers in single-family garages and assist condo owners with HOA-approved charging solutions.",
    whyChoose: "We provide modern, clean, and courteous electrical services. Aliso Viejo homeowners appreciate our punctuality, transparent pricing, and thorough cleanup.",
    areasNear: "Our technicians also service nearby Laguna Niguel, Laguna Hills, and Laguna Beach.",
    localProject: {
      title: 'Architectural Wafer LED Recessed Lighting',
      category: 'Residential',
      description: 'Installed 16 ultra-thin wafer LED recessed lights with Lutron Caséta smart dimmers and personalized scenes in an Aliso Viejo two-story living room and kitchen.',
      specs: ['Lutron Caséta Smart Dimmers', 'Ultra-Thin Wafer LEDs', 'Zero Ceiling Damage', 'App & Voice Control'],
      image: 'https://images.pexels.com/photos/1253128/pexels-photo-1253128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Recessed lighting installation in Aliso Viejo'
    },
    faqs: [
      {
        question: "Can you install an EV charger in an Aliso Viejo condominium or townhome?",
        answer: "Yes, under California Civil Code Section 4745 (the EV Charging Open Access Act), HOAs cannot unreasonably prohibit EV charger installations. We provide the load calculations, conduit diagrams, and insurance documentation required by Aliso Viejo HOAs."
      },
      {
        question: "Why do my lights flicker in my Aliso Viejo home?",
        answer: "Flickering lights typically point to loose neutral wiring, incompatible LED dimmer switches, or large appliances causing transient voltage drops on shared branch circuits. We diagnose and eliminate flickering promptly."
      },
      {
        question: "Do you install smart lighting and automation switches?",
        answer: "Yes, we install and configure smart switches, dimmers, and hubs from leading brands including Lutron Caséta, Leviton, and TP-Link Kasa."
      }
    ]
  },
  'san-juan-capistrano': {
    slug: 'san-juan-capistrano',
    name: 'San Juan Capistrano',
    primaryKeyword: 'Electrician in San Juan Capistrano, CA',
    metaTitle: 'Electrician in San Juan Capistrano, CA | Ultimate Green Electric',
    metaDescription: 'Licensed electrician in San Juan Capistrano, CA (Lic #999000). Historic home rewiring, 200A panel upgrades, EV chargers & repairs. Call (949) 312-6033.',
    zipCodes: ['92675'],
    permitAuthority: 'City of San Juan Capistrano Development Services Department',
    buildingCharacteristics: 'Historic adobe and Spanish revival homes, large equestrian ranches in the rolling hills, and modern luxury estate developments requiring specialized non-destructive rewiring techniques.',
    intro: "San Juan Capistrano is one of California's most historic communities, famous for its historic Mission, Spanish colonial architecture, and picturesque equestrian estates. Working on historic and custom properties in San Juan Capistrano requires specialized electrical expertise to ensure modern safety without disturbing historic structural elements. Ultimate Green Electric, Inc. provides careful, code-compliant electrical contracting throughout San Juan Capistrano.",
    servicesIntro: "From historic adobe properties near the Los Rios Historic District to modern luxury ranches in Hunt Club and Marbella, our electricians deliver respectful, high-caliber electrical work.",
    residential: "We specialize in non-destructive rewiring of older residences, replacing ungrounded cloth-insulated wiring, upgrading outdated circuit breakers, and installing custom Spanish-revival architectural lighting.",
    commercial: "We service San Juan Capistrano's boutique wineries, restaurants, and equestrian boarding facilities with agricultural power distribution, commercial kitchen wiring, and outdoor arena floodlighting.",
    emergency: "Aging wiring can fail without warning. If you experience burning smells, arcing outlets, or sudden phase failure in San Juan Capistrano, our emergency technicians respond promptly.",
    panel: "Upgrading to a modern 200-amp electrical panel is essential for older San Juan Capistrano homes adding modern appliances or solar. We coordinate permit approval with City of San Juan Capistrano Development Services.",
    ev: "We install Level 2 EV chargers, carefully concealing conduit along exterior eaves and landscaping to preserve the aesthetic charm of your San Juan Capistrano estate.",
    whyChoose: "We possess the technical knowledge and delicate touch required to work in historic and custom homes. We never rush, guaranteeing safe and immaculate electrical installations.",
    areasNear: "Our service corridor connects San Juan Capistrano with Dana Point, San Clemente, and Mission Viejo.",
    localProject: {
      title: 'Kitchen Remodel Rewiring & Code Compliance',
      category: 'Residential',
      description: 'Completed full electrical rewiring for a major kitchen remodel in San Juan Capistrano, adding dedicated dual 20A small-appliance circuits, island GFCIs, and under-cabinet LED illumination.',
      specs: ['Dual 20A Kitchen Circuits', 'AFCI / GFCI Protection', 'Clean Drywall Preservation', 'City of San Juan Capistrano Permitted'],
      image: 'https://images.pexels.com/photos/8961701/pexels-photo-8961701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Kitchen remodel electrical rewiring in San Juan Capistrano'
    },
    faqs: [
      {
        question: "Can you rewire an older home in San Juan Capistrano without damaging plaster or adobe walls?",
        answer: "Yes, our electricians use specialized flexible drill bits, fish tapes, and attic/crawlspace access techniques to route modern Romex wiring through existing walls with minimal or zero drywall damage."
      },
      {
        question: "Are original two-prong ungrounded outlets safe?",
        answer: "Two-prong outlets lack an equipment ground wire, exposing modern computers and sensitive appliances to shock and surge hazards. We can retrofit these circuits with modern GFCI protection or rewire them to code."
      },
      {
        question: "Do you install electrical systems for equestrian barns and arenas?",
        answer: "Yes, we install dust-tight and moisture-resistant conduit, outdoor arena floodlights, and GFCI-protected circuits for equestrian barns throughout San Juan Capistrano."
      }
    ]
  },
  'rancho-santa-margarita': {
    slug: 'rancho-santa-margarita',
    name: 'Rancho Santa Margarita',
    primaryKeyword: 'Electrician in Rancho Santa Margarita, CA',
    metaTitle: 'Electrician in Rancho Santa Margarita, CA | Ultimate Green Electric',
    metaDescription: 'Trusted licensed electrician in Rancho Santa Margarita, CA (Lic #999000). 200A panel upgrades, EV chargers, patio lighting & repairs. Call (949) 312-6033.',
    zipCodes: ['92688'],
    permitAuthority: 'City of Rancho Santa Margarita Building Division',
    buildingCharacteristics: 'Family-friendly master-planned communities developed in the late 1980s and 1990s against the Santa Ana Mountains, with extensive HOA neighborhoods and outdoor living spaces.',
    intro: "Rancho Santa Margarita (RSM) is a picturesque, family-centric master-planned community tucked against the foothills of the Santa Ana Mountains. With homes constructed primarily in the late 1980s and 1990s, many properties are reaching the age where main panels, outdoor GFCI circuits, and original lighting require professional updates. Ultimate Green Electric, Inc. delivers dependable, top-tier electrical services across Rancho Santa Margarita.",
    servicesIntro: "From homes bordering Lago Santa Margarita and Robinson Ranch to businesses in the RSM commercial business park, our licensed electricians provide upfront pricing and reliable service.",
    residential: "We help RSM families enhance their homes with outdoor patio lighting, ceiling fans to keep cool during warm valley summers, kitchen circuit upgrades, and GFCI repairs.",
    commercial: "We support RSM business owners with commercial electrical maintenance, retail display lighting, dedicated machine circuits, and prompt troubleshooting.",
    emergency: "When an electrical emergency strikes in Rancho Santa Margarita, our technicians are dispatched promptly to secure your home against fire and shock hazards.",
    panel: "Many original RSM homes feature 100A or 125A panels that are now maxed out. We upgrade your electrical service to a modern 200A panel with City of Rancho Santa Margarita permits.",
    ev: "We install Level 2 EV charging stations with dedicated 240V circuits and proper breaker sizing, allowing RSM commuters to charge overnight safely.",
    whyChoose: "We are a trusted local contractor in South Orange County with an unblemished licensing record and a commitment to clean, honest workmanship.",
    areasNear: "Our technicians also provide rapid service to Coto de Caza, Dove Canyon, Trabuco Canyon, and Mission Viejo.",
    localProject: {
      title: '200A Panel Replacement & EV Ready Circuit',
      category: 'Panel Upgrade',
      description: 'Upgraded a maxed-out 125A panel on a Rancho Santa Margarita home to a 200A main service panel, adding a pre-wired 50A circuit for a future Level 2 EV charger.',
      specs: ['200A Service Upgrade', '50A EV-Ready Prewire', 'City of RSM Permitted & Inspected', '1-Day Power Restoration'],
      image: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: 'Electrical panel upgrade in Rancho Santa Margarita'
    },
    faqs: [
      {
        question: "Why do outdoor GFCI outlets trip frequently in Rancho Santa Margarita?",
        answer: "Outdoor GFCIs in RSM are exposed to seasonal mountain rains and lawn sprinklers. If the weatherproof in-use cover fails, moisture causes ground faults. We replace damaged units with commercial-grade weather-resistant (WR) GFCIs and heavy-duty bubble covers."
      },
      {
        question: "Do you pull electrical permits with the City of Rancho Santa Margarita?",
        answer: "Yes, we handle all permit applications and inspections through the City of Rancho Santa Margarita Building Division for panel upgrades and EV charging circuits."
      },
      {
        question: "Can you install outdoor patio and string lighting for RSM backyards?",
        answer: "Yes, we install custom outdoor low-voltage landscape lighting, security floodlights, and dedicated GFCI-switched circuits for patio string lights and heaters."
      }
    ]
  },
  'newport-beach': {
    slug: 'newport-beach',
    name: 'Newport Beach',
    primaryKeyword: 'Electrician in Newport Beach, CA',
    metaTitle: 'Electrician in Newport Beach, CA | Ultimate Green Electric',
    metaDescription: 'Premier licensed electrician in Newport Beach, CA (Lic #999000). 320A/400A panel upgrades, luxury lighting, boat dock power & EV chargers. Call (949) 312-6033.',
    zipCodes: ['92660', '92661', '92662', '92663'],
    permitAuthority: 'City of Newport Beach Community Development Department',
    buildingCharacteristics: 'High-end coastal estates in Newport Coast, historic island residences on Balboa Island and Peninsula, luxury marinas, and commercial waterfront retail requiring coastal marine-rated materials.',
    intro: "Newport Beach represents the pinnacle of Southern California luxury coastal living. From the grand estates of Newport Coast and Pelican Hill to charming waterfront cottages on Balboa Island, properties in Newport Beach demand the highest echelon of electrical craftsmanship, discretion, and marine-grade materials. Ultimate Green Electric, Inc. provides high-end residential and commercial electrical contracting tailored to Newport Beach's exacting standards.",
    servicesIntro: "We provide meticulous electrical installations, architectural lighting design, smart home automation, and heavy electrical service upgrades across Newport Coast, Corona del Mar, and the Balboa Peninsula.",
    residential: "Our Newport Beach residential services include heavy chandelier ceiling bracing and hanging, Lutron Caséta/RadioRA 3 smart home automation, architectural recessed lighting, and full coastal rewiring.",
    commercial: "We service high-end retail boutiques in Fashion Island, fine dining restaurants, and commercial marinas with code-compliant electrical maintenance, showcase lighting, and dedicated commercial power.",
    emergency: "Electrical disruptions should never interrupt your lifestyle. Our Newport Beach emergency electricians provide rapid, discreet service to resolve electrical failures safely.",
    panel: "Luxury homes with extensive HVAC, wine cellars, pool equipment, and EV fleets require substantial electrical capacity. We install 320-amp and 400-amp main service panels engineered for high-demand coastal estates.",
    ev: "We install multi-vehicle Level 2 EV charging systems in Newport Beach garages, utilizing intelligent load-sharing to charge multiple vehicles simultaneously without overloading the service.",
    whyChoose: "Newport Beach clients demand absolute perfection. We are known for our white-glove cleanliness, precision conduit craftsmanship, and deep expertise in coastal electrical codes.",
    areasNear: "Our service corridor covers all of Newport Beach, Corona del Mar, Newport Coast, Costa Mesa, and Irvine.",
    localProject: {
      title: '400A Service Heavy-Up & Dual EV Charging System',
      category: 'Panel Upgrade',
      description: 'Upgraded a Newport Coast estate to a 400-amp dual-panel service with intelligent load-sharing Tesla Wall Connectors and whole-property surge suppression.',
      specs: ['400A Heavy-Up Service', 'Dual Tesla Wall Connectors', 'Whole-Home Surge Suppression', 'City of Newport Beach Permitted'],
      image: 'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      imageAlt: '400-amp service upgrade in Newport Coast'
    },
    faqs: [
      {
        question: "Can you install electrical power pedestals for private boat docks in Newport Beach?",
        answer: "Yes, we install and service marine-grade shore power pedestals, dock lighting, and boat lift circuits in full compliance with National Electrical Code (NEC) Article 555 for marinas and boatyards."
      },
      {
        question: "Can you brace and hang heavy crystal chandeliers in high-ceiling Newport Beach homes?",
        answer: "Yes, we install heavy-duty structural steel fan/chandelier braces rated for fixtures up to 150+ lbs, and we also install motorized chandelier lifts for effortless ground-level cleaning and bulb replacement."
      },
      {
        question: "How do you protect luxury electrical panels from coastal corrosion in Newport Beach?",
        answer: "We install NEMA 3R weather-tight stainless steel or powder-coated enclosures, use 100% copper bussing, apply anti-oxidant joint compounds on all terminations, and install internal moisture desiccants."
      }
    ]
  }
};
