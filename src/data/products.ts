// import { images, type SiteImage } from "./images";

// export type ProductCategory =
//   | "VR & Immersive"
//   | "Weapon Training"
//   | "Tactical Training"
//   | "Observation & Surveillance"
//   | "Medical Training"
//   | "Communication & C2";

// export const productCategories: ProductCategory[] = [
//   "VR & Immersive",
//   "Weapon Training",
//   "Tactical Training",
//   "Observation & Surveillance",
//   "Medical Training",
//   "Communication & C2",
// ];

// export type Product = {
//   slug: string;
//   number: number;
//   name: string;
//   officialName: string;
//   category: ProductCategory;
//   summary: string;
//   overview: string;
//   application: string;
//   /** Only verified capabilities. Empty = show "contact our team" message. */
//   features: string[];
//   /** Listed in the company document as designed, developed and delivered. */
//   delivered: boolean;
//   note?: string;
//   image: SiteImage;
// };

// export const products: Product[] = [
//   {
//     slug: "vrop-tiioe-simulator",
//     number: 1,
//     name: "VROP and TIIOE Simulator",
//     officialName:
//       "VR-Based OP-End (Observation Post End) Battlefield Simulator (VROP), including Thermal Imaging Integrated Observation Equipment (TIIOE) Simulator",
//     category: "Observation & Surveillance",
//     summary: "VR-based observation post battlefield simulator with an integrated TIIOE simulator.",
//     overview:
//       "A VR-based battlefield simulator for the observation post end, which includes a Thermal Imaging Integrated Observation Equipment (TIIOE) simulator.",
//     application:
//       "Intended for training personnel in observation-post duties within a virtual battlefield environment, including the use of thermal imaging observation equipment.",
//     features: [],
//     delivered: true,
//     image: images.vrop,
//   },
//   {
//     slug: "vr-rocket-launcher-simulator",
//     number: 2,
//     name: "VR-Based Rocket Launcher Simulator",
//     officialName: "Virtual Reality Based Rocket Launcher Simulator",
//     category: "Weapon Training",
//     summary: "Virtual reality simulator for rocket launcher training.",
//     overview:
//       "A virtual reality based simulator for rocket launcher training. The company's activities include design and manufacture of 84mm Rocket Launcher Simulators.",
//     application:
//       "Intended for rocket launcher handling and engagement training in an immersive virtual environment, without live ammunition.",
//     features: [],
//     delivered: true,
//     image: images.rocket,
//   },
//   {
//     slug: "vr-sniper-simulator",
//     number: 3,
//     name: "VR-Based Sniper Simulator",
//     officialName: "Virtual Reality Based Sniper Simulator",
//     category: "Weapon Training",
//     summary: "Virtual reality simulator for sniper training on a virtual range.",
//     overview: "A virtual reality based simulator for sniper training.",
//     application:
//       "Intended for precision marksmanship training on virtual ranges in a controlled indoor setting.",
//     features: [],
//     delivered: false,
//     image: images.sniper,
//   },
//   {
//     slug: "vr-bunker-defence-simulator",
//     number: 4,
//     name: "VR-Based Bunker Defence Training Simulator",
//     officialName: "VR-Based Bunker Defence Training Simulator",
//     category: "Tactical Training",
//     summary: "VR-based training simulator for bunker defence.",
//     overview: "A VR-based training simulator focused on bunker defence.",
//     application:
//       "Intended for training personnel in bunker defence drills within a virtual environment.",
//     features: [],
//     delivered: false,
//     image: images.bunker,
//   },
//   {
//     slug: "vr-3d-terrain-simulator",
//     number: 5,
//     name: "VR-Based 3D Terrain Simulator",
//     officialName: "VR Based 3D Terrain Simulator",
//     category: "VR & Immersive",
//     summary: "VR-based simulator presenting three-dimensional terrain.",
//     overview: "A VR-based simulator presenting three-dimensional terrain.",
//     application:
//       "Intended to support terrain study and familiarisation using immersive 3D visualisation.",
//     features: [],
//     delivered: false,
//     image: images.terrain,
//   },
//   {
//     slug: "tetherless-infantry-weapon-training-simulator",
//     number: 6,
//     name: "Infantry Weapon Training Simulator with Tetherless Capability",
//     officialName: "Infantry Weapon Training Simulator with Tetherless",
//     category: "Weapon Training",
//     summary: "Infantry weapon training simulator with tetherless (wireless) operation.",
//     overview:
//       "An Infantry Weapon Training Simulator offered with tetherless capability. GVS has designed, developed and delivered Infantry Weapon Training Simulators.",
//     application:
//       "Intended for infantry weapon training where trainees are not tethered to the simulator by cables.",
//     features: [],
//     delivered: true,
//     image: images.tetherless,
//   },
//   {
//     slug: "drona-simulator",
//     number: 7,
//     name: "Drona Simulator",
//     officialName: "Drona Simulator",
//     category: "Tactical Training",
//     summary: "Part of the GVS simulator portfolio. Contact us for product details.",
//     overview:
//       "The Drona Simulator is part of the product portfolio developed by GVS as a Joint Development Partner of the Simulator Development Division.",
//     application: "Please contact our team for information on the intended training application.",
//     features: [],
//     delivered: false,
//     note: "An approved photograph and product description for the Drona Simulator are awaited from GVS.",
//     image: images.drona,
//   },
//   {
//     slug: "replica-weapons",
//     number: 8,
//     name: "Replica Weapons",
//     officialName: "Replica Weapons — AK-47, AK-203, 9mm Pistol Beretta, Tavor, SIG Sauer",
//     category: "Weapon Training",
//     summary: "Training replicas: AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer.",
//     overview:
//       "Replica weapons for training use, covering the AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer. These are training replicas, not live weapons.",
//     application:
//       "Intended for use with training and simulation systems. The company's activities include manufacture of defence mockups and weapon-mounted training systems.",
//     features: [],
//     delivered: false,
//     note: "The image shown is illustrative and does not depict the specific replica models listed.",
//     image: images.replicas,
//   },
//   {
//     slug: "atgm-ground-launcher-simulator",
//     number: 9,
//     name: "ATGM Ground Launcher Skill Development Simulator",
//     officialName: "ATGM (Anti-Tank Guided Missile) Ground Launcher Skill Development Simulator",
//     category: "Weapon Training",
//     summary: "Skill development simulator for ATGM ground launcher operators.",
//     overview:
//       "A skill development simulator for Anti-Tank Guided Missile (ATGM) ground launcher training. GVS has designed, developed and delivered ATGM Simulators.",
//     application:
//       "Intended for developing ATGM ground launcher operator skills in a simulated environment.",
//     features: [],
//     delivered: true,
//     image: images.atgm,
//   },
//   {
//     slug: "tank-troop-tactical-training-simulator",
//     number: 10,
//     name: "Tank Troop Tactical Training Simulator",
//     officialName: "Tank Troop Tactical Training Simulator",
//     category: "Tactical Training",
//     summary: "Tactical training simulator at tank troop level.",
//     overview:
//       "A tactical training simulator at tank troop level. GVS has designed, developed and delivered Tactical Tank Training Simulators.",
//     application: "Intended for troop-level tactical training of tank crews in a simulated environment.",
//     features: [],
//     delivered: true,
//     image: images.tank,
//   },
//   {
//     slug: "mechanized-infantry-tactical-training-simulator",
//     number: 11,
//     name: "Mechanized Infantry Company-Level Tactical Training Simulator",
//     officialName: "Mechanized Infantry Company Level Tactical Training Simulator",
//     category: "Tactical Training",
//     summary: "Company-level tactical training simulator for mechanised infantry.",
//     overview: "A tactical training simulator for mechanised infantry at company level.",
//     application:
//       "Intended for company-level tactical training of mechanised infantry in a simulated environment.",
//     features: [],
//     delivered: false,
//     image: images.mechInf,
//   },
//   {
//     slug: "carrier-mortar-tracker-simulator",
//     number: 12,
//     name: "Carrier Mortar Tracker Simulator",
//     officialName: "Carrier Mortar Tracker Simulator",
//     category: "Weapon Training",
//     summary: "Simulator for Carrier Mortar Tracker training.",
//     overview: "A simulator for Carrier Mortar Tracker training.",
//     application: "Intended for crew training on the Carrier Mortar Tracker in a simulated setting.",
//     features: [],
//     delivered: false,
//     note: "The image shown is a generic illustration of a vehicle-crew simulator workstation, not the GVS Carrier Mortar Tracker Simulator.",
//     image: images.carrierMortar,
//   },
//   {
//     slug: "81mm-mortar-firing-simulator",
//     number: 13,
//     name: "81mm Mortar Firing Simulator",
//     officialName: "81mm Mortar Firing Simulator",
//     category: "Weapon Training",
//     summary: "Firing simulator for 81mm mortar training.",
//     overview:
//       "A firing simulator for 81mm mortar training. GVS has designed, developed and delivered 81mm Mortar Simulators.",
//     application: "Intended for 81mm mortar crew firing drills without live ammunition.",
//     features: [],
//     delivered: true,
//     image: images.mortar,
//   },
//   {
//     slug: "lorros-simulator",
//     number: 14,
//     name: "LORROS Simulator",
//     officialName: "LORROS Simulator",
//     category: "Observation & Surveillance",
//     summary: "Simulator for long-range reconnaissance and observation system (LORROS) training.",
//     overview:
//       "A simulator for LORROS (long-range reconnaissance and observation system) training. GVS has designed, developed and delivered LORROS Simulators.",
//     application: "Intended for operator training on long-range observation and surveillance equipment.",
//     features: [],
//     delivered: true,
//     image: images.lorros,
//   },
//   {
//     slug: "vr-combat-medical-care-simulator",
//     number: 15,
//     name: "VR Combat Medical Care Simulator",
//     officialName: "VR Combat Medical Care",
//     category: "Medical Training",
//     summary: "VR-based simulator for combat medical care training.",
//     overview:
//       "A VR-based combat medical care simulator. GVS has designed, developed and delivered VR-based Combat Medical Care Simulators.",
//     application: "Intended for training personnel in combat medical care procedures using immersive VR.",
//     features: [],
//     delivered: true,
//     image: images.medical,
//   },
//   {
//     slug: "radio-telephony-simulator",
//     number: 16,
//     name: "Radio Telephony Simulator",
//     officialName: "Radio Telephony Simulator",
//     category: "Communication & C2",
//     summary: "Simulator for radio telephony training.",
//     overview: "A simulator for radio telephony training.",
//     application: "Intended for training personnel in radio telephony procedures in a classroom setting.",
//     features: [],
//     delivered: false,
//     image: images.radio,
//   },
//   {
//     slug: "situational-awareness-system",
//     number: 17,
//     name: "Situational Awareness System",
//     officialName: "Situational Awareness System",
//     category: "Communication & C2",
//     summary: "System for situational awareness.",
//     overview: "A situational awareness system developed by GVS.",
//     application: "Contact our team for information on the intended application and configuration.",
//     features: [],
//     delivered: false,
//     image: images.sa,
//   },
//   {
//     slug: "cuas-simulator",
//     number: 18,
//     name: "CUAS Simulator",
//     officialName: "CUAS (Counter-Unmanned Aircraft System) Simulator",
//     category: "Observation & Surveillance",
//     summary: "Simulator for counter-unmanned aircraft system (CUAS) training.",
//     overview: "A simulator for counter-unmanned aircraft system (CUAS) training.",
//     application: "Intended for CUAS operator training in a simulated environment.",
//     features: [],
//     delivered: false,
//     image: images.cuas,
//   },
// ];

// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

// export const featuredSlugs = [
//   "vrop-tiioe-simulator",
//   "atgm-ground-launcher-simulator",
//   "vr-combat-medical-care-simulator",
//   "tank-troop-tactical-training-simulator",
//   "81mm-mortar-firing-simulator",
//   "lorros-simulator",
// ];
import { images, type SiteImage } from "./images";

export type ProductCategory =
  | "VR & Immersive"
  | "Weapon Training"
  | "Tactical Training"
  | "Observation & Surveillance"
  | "Medical Training"
  | "Communication & C2";

export const productCategories: ProductCategory[] = [
  "VR & Immersive",
  "Weapon Training",
  "Tactical Training",
  "Observation & Surveillance",
  "Medical Training",
  "Communication & C2",
];

export type Product = {
  slug: string;
  number: number;
  name: string;
  officialName: string;
  category: ProductCategory;
  summary: string;
  overview: string;
  application: string;
  /** Only verified capabilities. Empty = show "contact our team" message. */
  features: string[];
  /** Listed in the company document as designed, developed and delivered. */
  delivered: boolean;
  note?: string;
  image: SiteImage | { src: string; alt: string };
};

export const products: Product[] = [
  {
    slug: "vrop-tiioe-simulator",
    number: 1,
    name: "VROP and TIIOE Simulator",
    officialName:
      "VR-Based OP-End (Observation Post End) Battlefield Simulator (VROP), including Thermal Imaging Integrated Observation Equipment (TIIOE) Simulator",
    category: "Observation & Surveillance",
    summary: "VR-based observation post battlefield simulator with an integrated TIIOE simulator.",
    overview:
      "A VR-based battlefield simulator for the observation post end, which includes a Thermal Imaging Integrated Observation Equipment (TIIOE) simulator.",
    application:
      "Intended for training personnel in observation-post duties within a virtual battlefield environment, including the use of thermal imaging observation equipment.",
    features: [],
    delivered: true,
    image: { src: "/vrop.png", alt: "VROP and TIIOE Simulator" }, // <-- UPDATED
  },
  {
    slug: "vr-rocket-launcher-simulator",
    number: 2,
    name: "VR-Based Rocket Launcher Simulator",
    officialName: "Virtual Reality Based Rocket Launcher Simulator",
    category: "Weapon Training",
    summary: "Virtual reality simulator for rocket launcher training.",
    overview:
      "A virtual reality based simulator for rocket launcher training. The company's activities include design and manufacture of 84mm Rocket Launcher Simulators.",
    application:
      "Intended for rocket launcher handling and engagement training in an immersive virtual environment, without live ammunition.",
    features: [],
    delivered: true,
    image: images.rocket,
  },
  {
    slug: "vr-sniper-simulator",
    number: 3,
    name: "VR-Based Sniper Simulator",
    officialName: "Virtual Reality Based Sniper Simulator",
    category: "Weapon Training",
    summary: "Virtual reality simulator for sniper training on a virtual range.",
    overview: "A virtual reality based simulator for sniper training.",
    application:
      "Intended for precision marksmanship training on virtual ranges in a controlled indoor setting.",
    features: [],
    delivered: false,
    image: images.sniper,
  },
  {
    slug: "vr-bunker-defence-simulator",
    number: 4,
    name: "VR-Based Bunker Defence Training Simulator",
    officialName: "VR-Based Bunker Defence Training Simulator",
    category: "Tactical Training",
    summary: "VR-based training simulator for bunker defence.",
    overview: "A VR-based training simulator focused on bunker defence.",
    application:
      "Intended for training personnel in bunker defence drills within a virtual environment.",
    features: [],
    delivered: false,
    image: images.bunker,
  },
  {
    slug: "vr-3d-terrain-simulator",
    number: 5,
    name: "VR-Based 3D Terrain Simulator",
    officialName: "VR Based 3D Terrain Simulator",
    category: "VR & Immersive",
    summary: "VR-based simulator presenting three-dimensional terrain.",
    overview: "A VR-based simulator presenting three-dimensional terrain.",
    application:
      "Intended to support terrain study and familiarisation using immersive 3D visualisation.",
    features: [],
    delivered: false,
    image: images.terrain,
  },
  {
    slug: "tetherless-infantry-weapon-training-simulator",
    number: 6,
    name: "Infantry Weapon Training Simulator with Tetherless Capability",
    officialName: "Infantry Weapon Training Simulator with Tetherless",
    category: "Weapon Training",
    summary: "Infantry weapon training simulator with tetherless (wireless) operation.",
    overview:
      "An Infantry Weapon Training Simulator offered with tetherless capability. GVS has designed, developed and delivered Infantry Weapon Training Simulators.",
    application:
      "Intended for infantry weapon training where trainees are not tethered to the simulator by cables.",
    features: [],
    delivered: true,
    image: images.tetherless,
  },
  {
    slug: "drona-simulator",
    number: 7,
    name: "Drona Simulator",
    officialName: "Drona Simulator",
    category: "Tactical Training",
    summary: "Part of the GVS simulator portfolio. Contact us for product details.",
    overview:
      "The Drona Simulator is part of the product portfolio developed by GVS as a Joint Development Partner of the Simulator Development Division.",
    application: "Please contact our team for information on the intended training application.",
    features: [],
    delivered: false,
    note: "An approved photograph and product description for the Drona Simulator are awaited from GVS.",
    image: images.drona,
  },
  {
    slug: "replica-weapons",
    number: 8,
    name: "Replica Weapons",
    officialName: "Replica Weapons — AK-47, AK-203, 9mm Pistol Beretta, Tavor, SIG Sauer",
    category: "Weapon Training",
    summary: "Training replicas: AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer.",
    overview:
      "Replica weapons for training use, covering the AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer. These are training replicas, not live weapons.",
    application:
      "Intended for use with training and simulation systems. The company's activities include manufacture of defence mockups and weapon-mounted training systems.",
    features: [],
    delivered: false,
    note: "The image shown is illustrative and does not depict the specific replica models listed.",
    image: images.replicas,
  },
  {
    slug: "atgm-ground-launcher-simulator",
    number: 9,
    name: "ATGM Ground Launcher Skill Development Simulator",
    officialName: "ATGM (Anti-Tank Guided Missile) Ground Launcher Skill Development Simulator",
    category: "Weapon Training",
    summary: "Skill development simulator for ATGM ground launcher operators.",
    overview:
      "A skill development simulator for Anti-Tank Guided Missile (ATGM) ground launcher training. GVS has designed, developed and delivered ATGM Simulators.",
    application:
      "Intended for developing ATGM ground launcher operator skills in a simulated environment.",
    features: [],
    delivered: true,
    image: { src: "/atmgsim.jpg", alt: "ATGM Ground Launcher Skill Development Simulator" }, // <-- UPDATED
  },
  {
    slug: "tank-troop-tactical-training-simulator",
    number: 10,
    name: "Tank Troop Tactical Training Simulator",
    officialName: "Tank Troop Tactical Training Simulator",
    category: "Tactical Training",
    summary: "Tactical training simulator at tank troop level.",
    overview:
      "A tactical training simulator at tank troop level. GVS has designed, developed and delivered Tactical Tank Training Simulators.",
    application: "Intended for troop-level tactical training of tank crews in a simulated environment.",
    features: [],
    delivered: true,
    image: { src: "/tankcrew.png", alt: "Tank Troop Tactical Training Simulator" }, // <-- UPDATED
  },
  {
    slug: "mechanized-infantry-tactical-training-simulator",
    number: 11,
    name: "Mechanized Infantry Company-Level Tactical Training Simulator",
    officialName: "Mechanized Infantry Company Level Tactical Training Simulator",
    category: "Tactical Training",
    summary: "Company-level tactical training simulator for mechanised infantry.",
    overview: "A tactical training simulator for mechanised infantry at company level.",
    application:
      "Intended for company-level tactical training of mechanised infantry in a simulated environment.",
    features: [],
    delivered: false,
    image: images.mechInf,
  },
  {
    slug: "carrier-mortar-tracker-simulator",
    number: 12,
    name: "Carrier Mortar Tracker Simulator",
    officialName: "Carrier Mortar Tracker Simulator",
    category: "Weapon Training",
    summary: "Simulator for Carrier Mortar Tracker training.",
    overview: "A simulator for Carrier Mortar Tracker training.",
    application: "Intended for crew training on the Carrier Mortar Tracker in a simulated setting.",
    features: [],
    delivered: false,
    note: "The image shown is a generic illustration of a vehicle-crew simulator workstation, not the GVS Carrier Mortar Tracker Simulator.",
    image: images.carrierMortar,
  },
  {
    slug: "81mm-mortar-firing-simulator",
    number: 13,
    name: "81mm Mortar Firing Simulator",
    officialName: "81mm Mortar Firing Simulator",
    category: "Weapon Training",
    summary: "Firing simulator for 81mm mortar training.",
    overview:
      "A firing simulator for 81mm mortar training. GVS has designed, developed and delivered 81mm Mortar Simulators.",
    application: "Intended for 81mm mortar crew firing drills without live ammunition.",
    features: [],
    delivered: true,
    image: { src: "/80mm.png", alt: "81mm Mortar Firing Simulator" }, // <-- UPDATED
  },
  {
    slug: "lorros-simulator",
    number: 14,
    name: "LORROS Simulator",
    officialName: "LORROS Simulator",
    category: "Observation & Surveillance",
    summary: "Simulator for long-range reconnaissance and observation system (LORROS) training.",
    overview:
      "A simulator for LORROS (long-range reconnaissance and observation system) training. GVS has designed, developed and delivered LORROS Simulators.",
    application: "Intended for operator training on long-range observation and surveillance equipment.",
    features: [],
    delivered: true,
    image: { src: "/lorrs.png", alt: "LORROS Simulator" }, // <-- UPDATED
  },
  {
    slug: "vr-combat-medical-care-simulator",
    number: 15,
    name: "VR Combat Medical Care Simulator",
    officialName: "VR Combat Medical Care",
    category: "Medical Training",
    summary: "VR-based simulator for combat medical care training.",
    overview:
      "A VR-based combat medical care simulator. GVS has designed, developed and delivered VR-based Combat Medical Care Simulators.",
    application: "Intended for training personnel in combat medical care procedures using immersive VR.",
    features: [],
    delivered: true,
    image: { src: "/medical.png", alt: "VR Combat Medical Care Simulator" }, // <-- UPDATED
  },
  {
    slug: "radio-telephony-simulator",
    number: 16,
    name: "Radio Telephony Simulator",
    officialName: "Radio Telephony Simulator",
    category: "Communication & C2",
    summary: "Simulator for radio telephony training.",
    overview: "A simulator for radio telephony training.",
    application: "Intended for training personnel in radio telephony procedures in a classroom setting.",
    features: [],
    delivered: false,
    image: images.radio,
  },
  {
    slug: "situational-awareness-system",
    number: 17,
    name: "Situational Awareness System",
    officialName: "Situational Awareness System",
    category: "Communication & C2",
    summary: "System for situational awareness.",
    overview: "A situational awareness system developed by GVS.",
    application: "Contact our team for information on the intended application and configuration.",
    features: [],
    delivered: false,
    image: images.sa,
  },
  {
    slug: "cuas-simulator",
    number: 18,
    name: "CUAS Simulator",
    officialName: "CUAS (Counter-Unmanned Aircraft System) Simulator",
    category: "Observation & Surveillance",
    summary: "Simulator for counter-unmanned aircraft system (CUAS) training.",
    overview: "A simulator for counter-unmanned aircraft system (CUAS) training.",
    application: "Intended for CUAS operator training in a simulated environment.",
    features: [],
    delivered: false,
    image: images.cuas,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const featuredSlugs = [
  "vrop-tiioe-simulator",
  "atgm-ground-launcher-simulator",
  "vr-combat-medical-care-simulator",
  "tank-troop-tactical-training-simulator",
  "81mm-mortar-firing-simulator",
  "lorros-simulator",
];