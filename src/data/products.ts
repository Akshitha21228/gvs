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
//   image: SiteImage | { src: string; alt: string };
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
//     image: { src: "/vrop.png", alt: "VROP and TIIOE Simulator" }, // <-- UPDATED
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
//     image: { src: "/atmgsim.jpg", alt: "ATGM Ground Launcher Skill Development Simulator" }, // <-- UPDATED
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
//     image: { src: "/tankcrew.png", alt: "Tank Troop Tactical Training Simulator" }, // <-- UPDATED
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
//     image: { src: "/80mm.png", alt: "81mm Mortar Firing Simulator" }, // <-- UPDATED
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
//     image: { src: "/lorrs.png", alt: "LORROS Simulator" }, // <-- UPDATED
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
//     image: { src: "/medical.png", alt: "VR Combat Medical Care Simulator" }, // <-- UPDATED
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
//   image: SiteImage | { src: string; alt: string };
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
//     image: { src: "/vrop.png", alt: "VROP and TIIOE Simulator" }, // <-- UPDATED
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
//     image: images.tetherless, // <--- Links to wep.jpg
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
//     image: { src: "/at.png", alt: "ATGM Ground Launcher Skill Development Simulator" }, // <-- UPDATED TO at.png
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
//     image: { src: "/tankcrew.png", alt: "Tank Troop Tactical Training Simulator" }, // <-- UPDATED
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
//     image: { src: "/81.png", alt: "81mm Mortar Firing Simulator" }, // <-- UPDATED TO 81.png
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
//     image: { src: "/lorrs.png", alt: "LORROS Simulator" }, // <-- UPDATED
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
//     image: { src: "/medical.png", alt: "VR Combat Medical Care Simulator" }, // <-- UPDATED
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
// import { images, type SiteImage } from "./images";

// export type ProductCategory =
//   | "Weapon & Launcher Simulators"
//   | "VR & Immersive Training"
//   | "Tactical & Mortar Simulators"
//   | "Observation & Terrain Systems"
//   | "Training Equipment & Communications";

// export const productCategories: ProductCategory[] = [
//   "Weapon & Launcher Simulators",
//   "VR & Immersive Training",
//   "Tactical & Mortar Simulators",
//   "Observation & Terrain Systems",
//   "Training Equipment & Communications",
// ];

// export type Product = {
//   slug: string;
//   number: number;
//   name: string;
//   category: ProductCategory;
//   summary: string;
//   overview: string;
//   application: string;
//   features: string[];
//   delivered: boolean;
//   note?: string;
//   image: SiteImage | { src: string; alt: string };
// };

// export const products: Product[] = [
//   {
//     slug: "vrop-tiioe-simulator",
//     number: 1,
//     name: "VR-Based OP-End Battlefield Simulator (VROP)",
//     category: "Observation & Terrain Systems",
//     summary: "VR-based observation post battlefield simulator with an integrated TIIOE simulator.",
//     overview: "A VR-based battlefield simulator for the observation post end, which includes a Thermal Imaging Integrated Observation Equipment (TIIOE) simulator.",
//     application: "Intended for training personnel in observation-post duties within a virtual battlefield environment, including the use of thermal imaging observation equipment.",
//     features: [],
//     delivered: true,
//     image: { src: "/vrop.png", alt: "VROP Simulator" },
//   },
//   {
//     slug: "vr-rocket-launcher-simulator",
//     number: 2,
//     name: "VR-Based Rocket Launcher Simulator",
//     category: "Weapon & Launcher Simulators",
//     summary: "Virtual reality simulator for rocket launcher training.",
//     overview: "A virtual reality based simulator for rocket launcher training. The company's activities include design and manufacture of 84mm Rocket Launcher Simulators.",
//     application: "Intended for rocket launcher handling and engagement training in an immersive virtual environment, without live ammunition.",
//     features: [],
//     delivered: true,
//     image: { src: "/rocketlauncher.jpg", alt: "Rocket Launcher Simulator" },
//   },
//   {
//     slug: "vr-sniper-simulator",
//     number: 3,
//     name: "VR-Based Sniper Simulator",
//     category: "Weapon & Launcher Simulators",
//     summary: "Virtual reality simulator for sniper training on a virtual range.",
//     overview: "A virtual reality based simulator for sniper training.",
//     application: "Intended for precision marksmanship training on virtual ranges in a controlled indoor setting.",
//     features: [],
//     delivered: false,
//     note: "The image shown is illustrative and does not depict the specific replica models listed.",
//     image: { src: "/sniper.jpg", alt: "Sniper Simulator" },
//   },
//   {
//     slug: "vr-bunker-defence-simulator",
//     number: 4,
//     name: "VR-Based Bunker Defence Training Simulator",
//     category: "VR & Immersive Training",
//     summary: "VR-based training simulator for bunker defence.",
//     overview: "A VR-based training simulator focused on bunker defence.",
//     application: "Intended for training personnel in bunker defence drills within a virtual environment.",
//     features: [],
//     delivered: false,
//     image: { src: "/bunker.jpg", alt: "Bunker Defence Simulator" },
//   },
//   {
//     slug: "vr-3d-terrain-simulator",
//     number: 5,
//     name: "VR-Based 3D Terrain Simulator",
//     category: "Observation & Terrain Systems",
//     summary: "VR-based simulator presenting three-dimensional terrain.",
//     overview: "A VR-based simulator presenting three-dimensional terrain.",
//     application: "Intended to support terrain study and familiarisation using immersive 3D visualisation.",
//     features: [],
//     delivered: false,
//     image: { src: "/terrain.jpg", alt: "3D Terrain Simulator" },
//   },
//   {
//     slug: "tetherless-infantry-weapon-training-simulator",
//     number: 6,
//     name: "Infantry Weapon Training Simulator with Tetherless System",
//     category: "Weapon & Launcher Simulators",
//     summary: "Infantry weapon training simulator with tetherless (wireless) operation.",
//     overview: "An Infantry Weapon Training Simulator offered with tetherless capability. GVS has designed, developed and delivered Infantry Weapon Training Simulators.",
//     application: "Intended for infantry weapon training where trainees are not tethered to the simulator by cables.",
//     features: [],
//     delivered: true,
//     image: { src: "/infantary.png", alt: "Infantry Weapon Training Simulator" },
//   },
//   {
//     slug: "drona-simulator",
//     number: 7,
//     name: "Drona Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Part of the GVS simulator portfolio. Contact us for product details.",
//     overview: "The Drona Simulator is part of the product portfolio developed by GVS.",
//     application: "Please contact our team for information on the intended training application.",
//     features: [],
//     delivered: false,
//     note: "An approved photograph and product description for the Drona Simulator are awaited from GVS.",
//     image: { src: "/drona.jpg", alt: "Drona Simulator" },
//   },
//   {
//     slug: "replica-weapons",
//     number: 8,
//     name: "Replica Weapons — AK-47, AK-203, 9mm Beretta, Tavor and SIG Sauer",
//     category: "Weapon & Launcher Simulators",
//     summary: "Training replicas: AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer.",
//     overview: "Replica weapons for training use, covering the AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer. These are training replicas, not live weapons.",
//     application: "Intended for use with training and simulation systems. The company's activities include manufacture of defence mockups and weapon-mounted training systems.",
//     features: [],
//     delivered: false,
//     note: "The image shown is illustrative and does not depict the specific replica models listed.",
//     image: { src: "/weapons.png", alt: "Replica Weapons" },
//   },
//   {
//     slug: "atgm-ground-launcher-simulator",
//     number: 9,
//     name: "ATGM Ground Launcher Skill Development Simulator",
//     category: "Weapon & Launcher Simulators",
//     summary: "Skill development simulator for ATGM ground launcher operators.",
//     overview: "A skill development simulator for Anti-Tank Guided Missile (ATGM) ground launcher training. GVS has designed, developed and delivered ATGM Simulators.",
//     application: "Intended for developing ATGM ground launcher operator skills in a simulated environment.",
//     features: [],
//     delivered: true,
//     image: { src: "/at.png", alt: "ATGM Ground Launcher Simulator" },
//   },
//   {
//     slug: "tank-troop-tactical-training-simulator",
//     number: 10,
//     name: "Tank Troop Tactical Training Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Tactical training simulator at tank troop level.",
//     overview: "A tactical training simulator at tank troop level. GVS has designed, developed and delivered Tactical Tank Training Simulators.",
//     application: "Intended for troop-level tactical training of tank crews in a simulated environment.",
//     features: [],
//     delivered: true,
//     image: { src: "/tankcrew.png", alt: "Tank Troop Simulator" },
//   },
//   {
//     slug: "mechanized-infantry-tactical-training-simulator",
//     number: 11,
//     name: "Mechanized Infantry Company-Level Tactical Training Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Company-level tactical training simulator for mechanised infantry.",
//     overview: "A tactical training simulator for mechanised infantry at company level.",
//     application: "Intended for company-level tactical training of mechanised infantry in a simulated environment.",
//     features: [],
//     delivered: false,
//     image: { src: "/mech-inf.jpg", alt: "Mechanized Infantry Simulator" },
//   },
//   {
//     slug: "carrier-mortar-tracker-simulator",
//     number: 12,
//     name: "Carrier Mortar Tracker Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Simulator for Carrier Mortar Tracker training.",
//     overview: "A simulator for Carrier Mortar Tracker training.",
//     application: "Intended for crew training on the Carrier Mortar Tracker in a simulated setting.",
//     features: [],
//     delivered: false,
//     note: "The image shown is a generic illustration of a vehicle-crew simulator workstation, not the GVS Carrier Mortar Tracker Simulator.",
//     image: { src: "/carrier-mortar.jpg", alt: "Carrier Mortar Tracker Simulator" },
//   },
//   {
//     slug: "81mm-mortar-firing-simulator",
//     number: 13,
//     name: "81mm Mortar Firing Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Firing simulator for 81mm mortar training.",
//     overview: "A firing simulator for 81mm mortar training. GVS has designed, developed and delivered 81mm Mortar Simulators.",
//     application: "Intended for 81mm mortar crew firing drills without live ammunition.",
//     features: [],
//     delivered: true,
//     image: { src: "/81.png", alt: "81mm Mortar Simulator" },
//   },
//   {
//     slug: "lorros-simulator",
//     number: 14,
//     name: "LORROS Simulator",
//     category: "Observation & Terrain Systems",
//     summary: "Simulator for long-range reconnaissance and observation system (LORROS) training.",
//     overview: "A simulator for LORROS (long-range reconnaissance and observation system) training. GVS has designed, developed and delivered LORROS Simulators.",
//     application: "Intended for operator training on long-range observation and surveillance equipment.",
//     features: [],
//     delivered: true,
//     image: { src: "/lorrs.png", alt: "LORROS Simulator" },
//   },
//   {
//     slug: "vr-combat-medical-care-simulator",
//     number: 15,
//     name: "VR Combat Medical Care Simulator",
//     category: "VR & Immersive Training",
//     summary: "VR-based simulator for combat medical care training.",
//     overview: "A VR-based combat medical care simulator. GVS has designed, developed and delivered VR-based Combat Medical Care Simulators.",
//     application: "Intended for training personnel in combat medical care procedures using immersive VR.",
//     features: [],
//     delivered: true,
//     image: { src: "/medical.png", alt: "VR Combat Medical Simulator" },
//   },
//   {
//     slug: "radio-telephony-simulator",
//     number: 16,
//     name: "Radio Telephony Simulator",
//     category: "Training Equipment & Communications",
//     summary: "Simulator for radio telephony training.",
//     overview: "A simulator for radio telephony training.",
//     application: "Intended for training personnel in radio telephony procedures in a classroom setting.",
//     features: [],
//     delivered: false,
//     image: { src: "/radio.jpg", alt: "Radio Telephony Simulator" },
//   },
//   {
//     slug: "situational-awareness-system",
//     number: 17,
//     name: "Situational Awareness System",
//     category: "Training Equipment & Communications",
//     summary: "System for situational awareness.",
//     overview: "A situational awareness system developed by GVS.",
//     application: "Contact our team for information on the intended application and configuration.",
//     features: [],
//     delivered: false,
//     image: { src: "/situational-awareness.jpg", alt: "Situational Awareness System" },
//   },
//   {
//     slug: "cuas-simulator",
//     number: 18,
//     name: "CUAS Simulator",
//     category: "Training Equipment & Communications",
//     summary: "Simulator for counter-unmanned aircraft system (CUAS) training.",
//     overview: "A simulator for counter-unmanned aircraft system (CUAS) training.",
//     application: "Intended for CUAS operator training in a simulated environment.",
//     features: [],
//     delivered: false,
//     image: { src: "/cuas.jpg", alt: "CUAS Simulator" },
//   },
// ];

// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

// import { images, type SiteImage } from "./images";

// export type ProductCategory =
//   | "Weapon & Launcher Simulators"
//   | "VR & Immersive Training"
//   | "Tactical & Mortar Simulators"
//   | "Observation & Terrain Systems"
//   | "Training Equipment & Communications";

// export const productCategories: ProductCategory[] = [
//   "Weapon & Launcher Simulators",
//   "VR & Immersive Training",
//   "Tactical & Mortar Simulators",
//   "Observation & Terrain Systems",
//   "Training Equipment & Communications",
// ];

// export type Product = {
//   slug: string;
//   number: number;
//   name: string;
//   category: ProductCategory;
//   summary: string;
//   overview: string;
//   application: string;
//   features: string[];
//   delivered: boolean;
//   note?: string;
//   image: SiteImage | { src: string; alt: string };
// };

// export const products: Product[] = [
//   {
//     slug: "vrop-tiioe-simulator",
//     number: 1,
//     name: "VR-Based OP-End Battlefield Simulator (VROP)",
//     category: "Observation & Terrain Systems",
//     summary: "VR-based observation post battlefield simulator with an integrated TIIOE simulator.",
//     overview: "A VR-based battlefield simulator for the observation post end, which includes a Thermal Imaging Integrated Observation Equipment (TIIOE) simulator.",
//     application: "Intended for training personnel in observation-post duties within a virtual battlefield environment, including the use of thermal imaging observation equipment.",
//     features: [],
//     delivered: true,
//     image: { src: "/vrop.png", alt: "VROP Simulator" },
//   },
//   {
//     slug: "vr-rocket-launcher-simulator",
//     number: 2,
//     name: "VR-Based Rocket Launcher Simulator",
//     category: "Weapon & Launcher Simulators",
//     summary: "Virtual reality simulator for rocket launcher training.",
//     overview: "A virtual reality based simulator for rocket launcher training. The company's activities include design and manufacture of 84mm Rocket Launcher Simulators.",
//     application: "Intended for rocket launcher handling and engagement training in an immersive virtual environment, without live ammunition.",
//     features: [],
//     delivered: true,
//     image: { src: "/vrweapon.png", alt: "VR Rocket Launcher Simulator" },
//   },
//   {
//     slug: "vr-sniper-simulator",
//     number: 3,
//     name: "VR-Based Sniper Simulator",
//     category: "Weapon & Launcher Simulators",
//     summary: "Virtual reality simulator for sniper training on a virtual range.",
//     overview: "A virtual reality based simulator for sniper training.",
//     application: "Intended for precision marksmanship training on virtual ranges in a controlled indoor setting.",
//     features: [],
//     delivered: false,
//     note: "The image shown is illustrative and does not depict the specific replica models listed.",
//     image: { src: "/vrsnipperweapon.png", alt: "VR Sniper Simulator" },
//   },
//   {
//     slug: "vr-bunker-defence-simulator",
//     number: 4,
//     name: "VR-Based Bunker Defence Training Simulator",
//     category: "VR & Immersive Training",
//     summary: "VR-based training simulator for bunker defence.",
//     overview: "A VR-based training simulator focused on bunker defence.",
//     application: "Intended for training personnel in bunker defence drills within a virtual environment.",
//     features: [],
//     delivered: false,
//     image: { src: "/bunker.png", alt: "Bunker Defence Simulator" },
//   },
//   {
//     slug: "vr-3d-terrain-simulator",
//     number: 5,
//     name: "VR-Based 3D Terrain Simulator",
//     category: "Observation & Terrain Systems",
//     summary: "VR-based simulator presenting three-dimensional terrain.",
//     overview: "A VR-based simulator presenting three-dimensional terrain.",
//     application: "Intended to support terrain study and familiarisation using immersive 3D visualisation.",
//     features: [],
//     delivered: false,
//     image: { src: "/terrain.jpg", alt: "3D Terrain Simulator" },
//   },
//   {
//     slug: "tetherless-infantry-weapon-training-simulator",
//     number: 6,
//     name: "Infantry Weapon Training Simulator with Tetherless System",
//     category: "Weapon & Launcher Simulators",
//     summary: "Infantry weapon training simulator with tetherless (wireless) operation.",
//     overview: "An Infantry Weapon Training Simulator offered with tetherless capability. GVS has designed, developed and delivered Infantry Weapon Training Simulators.",
//     application: "Intended for infantry weapon training where trainees are not tethered to the simulator by cables.",
//     features: [],
//     delivered: true,
//     image: { src: "/infantary(2).png", alt: "Infantry Weapon Training Simulator" },
//   },
//   {
//     slug: "drona-simulator",
//     number: 7,
//     name: "Drona Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Part of the GVS simulator portfolio. Contact us for product details.",
//     overview: "The Drona Simulator is part of the product portfolio developed by GVS.",
//     application: "Please contact our team for information on the intended training application.",
//     features: [],
//     delivered: false,
//     note: "An approved photograph and product description for the Drona Simulator are awaited from GVS.",
//     image: { src: "/drone.png", alt: "Drona Simulator" }, // <-- Mapped to drone.png
//   },
//   {
//     slug: "replica-weapons",
//     number: 8,
//     name: "Replica Weapons — AK-47, AK-203, 9mm Beretta, Tavor and SIG Sauer",
//     category: "Weapon & Launcher Simulators",
//     summary: "Training replicas: AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer.",
//     overview: "Replica weapons for training use, covering the AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer. These are training replicas, not live weapons.",
//     application: "Intended for use with training and simulation systems. The company's activities include manufacture of defence mockups and weapon-mounted training systems.",
//     features: [],
//     delivered: false,
//     note: "The image shown is illustrative and does not depict the specific replica models listed.",
//     image: { src: "/replica.png", alt: "Replica Weapons" },
//   },
//   {
//     slug: "atgm-ground-launcher-simulator",
//     number: 9,
//     name: "ATGM Ground Launcher Skill Development Simulator",
//     category: "Weapon & Launcher Simulators",
//     summary: "Skill development simulator for ATGM ground launcher operators.",
//     overview: "A skill development simulator for Anti-Tank Guided Missile (ATGM) ground launcher training. GVS has designed, developed and delivered ATGM Simulators.",
//     application: "Intended for developing ATGM ground launcher operator skills in a simulated environment.",
//     features: [],
//     delivered: true,
//     image: { src: "/atgmsimulator.png", alt: "ATGM Ground Launcher Simulator" },
//   },
//   {
//     slug: "tank-troop-tactical-training-simulator",
//     number: 10,
//     name: "Tank Troop Tactical Training Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Tactical training simulator at tank troop level.",
//     overview: "A tactical training simulator at tank troop level. GVS has designed, developed and delivered Tactical Tank Training Simulators.",
//     application: "Intended for troop-level tactical training of tank crews in a simulated environment.",
//     features: [],
//     delivered: true,
//     image: { src: "/tan.png", alt: "Tank Troop Simulator" }, // <-- Mapped to tan.png
//   },
//   {
//     slug: "mechanized-infantry-tactical-training-simulator",
//     number: 11,
//     name: "Mechanized Infantry Company-Level Tactical Training Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Company-level tactical training simulator for mechanised infantry.",
//     overview: "A tactical training simulator for mechanised infantry at company level.",
//     application: "Intended for company-level tactical training of mechanised infantry in a simulated environment.",
//     features: [],
//     delivered: false,
//     image: { src: "/mechanized.png", alt: "Mechanized Infantry Simulator" }, // <-- Mapped to mechanized.png
//   },
//   {
//     slug: "carrier-mortar-tracker-simulator",
//     number: 12,
//     name: "Carrier Mortar Tracker Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Simulator for Carrier Mortar Tracker training.",
//     overview: "A simulator for Carrier Mortar Tracker training.",
//     application: "Intended for crew training on the Carrier Mortar Tracker in a simulated setting.",
//     features: [],
//     delivered: false,
//     note: "The image shown is a generic illustration of a vehicle-crew simulator workstation, not the GVS Carrier Mortar Tracker Simulator.",
//     image: { src: "/carrier.png", alt: "Carrier Mortar Tracker Simulator" }, // <-- Mapped to carrier.png
//   },
//   {
//     slug: "81mm-mortar-firing-simulator",
//     number: 13,
//     name: "81mm Mortar Firing Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Firing simulator for 81mm mortar training.",
//     overview: "A firing simulator for 81mm mortar training. GVS has designed, developed and delivered 81mm Mortar Simulators.",
//     application: "Intended for 81mm mortar crew firing drills without live ammunition.",
//     features: [],
//     delivered: true,
//     image: { src: "/81 (2).png", alt: "81mm Mortar Simulator" }, // <-- Mapped to 81 (2).png
//   },
//   {
//     slug: "lorros-simulator",
//     number: 14,
//     name: "LORROS Simulator",
//     category: "Observation & Terrain Systems",
//     summary: "Simulator for long-range reconnaissance and observation system (LORROS) training.",
//     overview: "A simulator for LORROS (long-range reconnaissance and observation system) training. GVS has designed, developed and delivered LORROS Simulators.",
//     application: "Intended for operator training on long-range observation and surveillance equipment.",
//     features: [],
//     delivered: true,
//     image: { src: "/lorrs.png", alt: "LORROS Simulator" },
//   },
//   {
//     slug: "vr-combat-medical-care-simulator",
//     number: 15,
//     name: "VR Combat Medical Care Simulator",
//     category: "VR & Immersive Training",
//     summary: "VR-based simulator for combat medical care training.",
//     overview: "A VR-based combat medical care simulator. GVS has designed, developed and delivered VR-based Combat Medical Care Simulators.",
//     application: "Intended for training personnel in combat medical care procedures using immersive VR.",
//     features: [],
//     delivered: true,
//     image: { src: "/hos.png", alt: "VR Combat Medical Simulator" },
//   },
//   {
//     slug: "radio-telephony-simulator",
//     number: 16,
//     name: "Radio Telephony Simulator",
//     category: "Training Equipment & Communications",
//     summary: "Simulator for radio telephony training.",
//     overview: "A simulator for radio telephony training.",
//     application: "Intended for training personnel in radio telephony procedures in a classroom setting.",
//     features: [],
//     delivered: false,
//     image: { src: "/radio.jpg", alt: "Radio Telephony Simulator" },
//   },
//   {
//     slug: "situational-awareness-system",
//     number: 17,
//     name: "Situational Awareness System",
//     category: "Training Equipment & Communications",
//     summary: "System for situational awareness.",
//     overview: "A situational awareness system developed by GVS.",
//     application: "Contact our team for information on the intended application and configuration.",
//     features: [],
//     delivered: false,
//     image: { src: "/situational-awareness.jpg", alt: "Situational Awareness System" },
//   },
//   {
//     slug: "cuas-simulator",
//     number: 18,
//     name: "CUAS Simulator",
//     category: "Training Equipment & Communications",
//     summary: "Simulator for counter-unmanned aircraft system (CUAS) training.",
//     overview: "A simulator for counter-unmanned aircraft system (CUAS) training.",
//     application: "Intended for CUAS operator training in a simulated environment.",
//     features: [],
//     delivered: false,
//     image: { src: "/cuas.jpg", alt: "CUAS Simulator" },
//   },
// ];

// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
// import { images, type SiteImage } from "./images";

// export type ProductCategory =
//   | "Weapon & Launcher Simulators"
//   | "VR & Immersive Training"
//   | "Tactical & Mortar Simulators"
//   | "Observation & Terrain Systems"
//   | "Training Equipment & Communications";

// export const productCategories: ProductCategory[] = [
//   "Weapon & Launcher Simulators",
//   "VR & Immersive Training",
//   "Tactical & Mortar Simulators",
//   "Observation & Terrain Systems",
//   "Training Equipment & Communications",
// ];

// export type Product = {
//   slug: string;
//   number: number;
//   name: string;
//   category: ProductCategory;
//   summary: string;
//   overview: string;
//   application: string;
//   features: string[];
//   delivered: boolean;
//   note?: string;
//   image: SiteImage | { src: string; alt: string };
// };

// export const products: Product[] = [
//   {
//     slug: "vrop-tiioe-simulator",
//     number: 1,
//     name: "VR-Based OP-End Battlefield Simulator (VROP)",
//     category: "Observation & Terrain Systems",
//     summary: "VR-based observation post battlefield simulator with an integrated TIIOE simulator.",
//     overview: "A VR-based battlefield simulator for the observation post end, which includes a Thermal Imaging Integrated Observation Equipment (TIIOE) simulator.",
//     application: "Intended for training personnel in observation-post duties within a virtual battlefield environment, including the use of thermal imaging observation equipment.",
//     features: [],
//     delivered: true,
//     image: { src: "/vrop.png", alt: "VROP Simulator" },
//   },
//   {
//     slug: "vr-rocket-launcher-simulator",
//     number: 2,
//     name: "VR-Based Rocket Launcher Simulator",
//     category: "Weapon & Launcher Simulators",
//     summary: "Virtual reality simulator for rocket launcher training.",
//     overview: "A virtual reality based simulator for rocket launcher training. The company's activities include design and manufacture of 84mm Rocket Launcher Simulators.",
//     application: "Intended for rocket launcher handling and engagement training in an immersive virtual environment, without live ammunition.",
//     features: [],
//     delivered: true,
//     image: { src: "/vrweapon.png", alt: "VR Rocket Launcher Simulator" },
//   },
//   {
//     slug: "vr-sniper-simulator",
//     number: 3,
//     name: "VR-Based Sniper Simulator",
//     category: "Weapon & Launcher Simulators",
//     summary: "Virtual reality simulator for sniper training on a virtual range.",
//     overview: "A virtual reality based simulator for sniper training.",
//     application: "Intended for precision marksmanship training on virtual ranges in a controlled indoor setting.",
//     features: [],
//     delivered: false,
//     note: "The image shown is illustrative and does not depict the specific replica models listed.",
//     image: { src: "/vrsnipperweapon.png", alt: "VR Sniper Simulator" },
//   },
//   {
//     slug: "vr-bunker-defence-simulator",
//     number: 4,
//     name: "VR-Based Bunker Defence Training Simulator",
//     category: "VR & Immersive Training",
//     summary: "VR-based training simulator for bunker defence.",
//     overview: "A VR-based training simulator focused on bunker defence.",
//     application: "Intended for training personnel in bunker defence drills within a virtual environment.",
//     features: [],
//     delivered: false,
//     image: { src: "/bunker.png", alt: "Bunker Defence Simulator" },
//   },
//   {
//     slug: "vr-3d-terrain-simulator",
//     number: 5,
//     name: "VR-Based 3D Terrain Simulator",
//     category: "Observation & Terrain Systems",
//     summary: "VR-based simulator presenting three-dimensional terrain.",
//     overview: "A VR-based simulator presenting three-dimensional terrain.",
//     application: "Intended to support terrain study and familiarisation using immersive 3D visualisation.",
//     features: [],
//     delivered: false,
//     image: { src: "/3d.png", alt: "3D Terrain Simulator" }, // <-- Mapped to 3d.png
//   },
//   {
//     slug: "tetherless-infantry-weapon-training-simulator",
//     number: 6,
//     name: "Infantry Weapon Training Simulator with Tetherless System",
//     category: "Weapon & Launcher Simulators",
//     summary: "Infantry weapon training simulator with tetherless (wireless) operation.",
//     overview: "An Infantry Weapon Training Simulator offered with tetherless capability. GVS has designed, developed and delivered Infantry Weapon Training Simulators.",
//     application: "Intended for infantry weapon training where trainees are not tethered to the simulator by cables.",
//     features: [],
//     delivered: true,
//     image: { src: "/infantary(2).png", alt: "Infantry Weapon Training Simulator" },
//   },
//   {
//     slug: "drona-simulator",
//     number: 7,
//     name: "Drona Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Part of the GVS simulator portfolio. Contact us for product details.",
//     overview: "The Drona Simulator is part of the product portfolio developed by GVS.",
//     application: "Please contact our team for information on the intended training application.",
//     features: [],
//     delivered: false,
//     note: "An approved photograph and product description for the Drona Simulator are awaited from GVS.",
//     image: { src: "/drone.png", alt: "Drona Simulator" },
//   },
//   {
//     slug: "replica-weapons",
//     number: 8,
//     name: "Replica Weapons — AK-47, AK-203, 9mm Beretta, Tavor and SIG Sauer",
//     category: "Weapon & Launcher Simulators",
//     summary: "Training replicas: AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer.",
//     overview: "Replica weapons for training use, covering the AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer. These are training replicas, not live weapons.",
//     application: "Intended for use with training and simulation systems. The company's activities include manufacture of defence mockups and weapon-mounted training systems.",
//     features: [],
//     delivered: false,
//     note: "The image shown is illustrative and does not depict the specific replica models listed.",
//     image: { src: "/replica.png", alt: "Replica Weapons" },
//   },
//   {
//     slug: "atgm-ground-launcher-simulator",
//     number: 9,
//     name: "ATGM Ground Launcher Skill Development Simulator",
//     category: "Weapon & Launcher Simulators",
//     summary: "Skill development simulator for ATGM ground launcher operators.",
//     overview: "A skill development simulator for Anti-Tank Guided Missile (ATGM) ground launcher training. GVS has designed, developed and delivered ATGM Simulators.",
//     application: "Intended for developing ATGM ground launcher operator skills in a simulated environment.",
//     features: [],
//     delivered: true,
//     image: { src: "/atgmsimulator.png", alt: "ATGM Ground Launcher Simulator" },
//   },
//   {
//     slug: "tank-troop-tactical-training-simulator",
//     number: 10,
//     name: "Tank Troop Tactical Training Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Tactical training simulator at tank troop level.",
//     overview: "A tactical training simulator at tank troop level. GVS has designed, developed and delivered Tactical Tank Training Simulators.",
//     application: "Intended for troop-level tactical training of tank crews in a simulated environment.",
//     features: [],
//     delivered: true,
//     image: { src: "/tan.png", alt: "Tank Troop Simulator" },
//   },
//   {
//     slug: "mechanized-infantry-tactical-training-simulator",
//     number: 11,
//     name: "Mechanized Infantry Company-Level Tactical Training Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Company-level tactical training simulator for mechanised infantry.",
//     overview: "A tactical training simulator for mechanised infantry at company level.",
//     application: "Intended for company-level tactical training of mechanised infantry in a simulated environment.",
//     features: [],
//     delivered: false,
//     image: { src: "/mechanized.png", alt: "Mechanized Infantry Simulator" },
//   },
//   {
//     slug: "carrier-mortar-tracker-simulator",
//     number: 12,
//     name: "Carrier Mortar Tracker Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Simulator for Carrier Mortar Tracker training.",
//     overview: "A simulator for Carrier Mortar Tracker training.",
//     application: "Intended for crew training on the Carrier Mortar Tracker in a simulated setting.",
//     features: [],
//     delivered: false,
//     note: "The image shown is a generic illustration of a vehicle-crew simulator workstation, not the GVS Carrier Mortar Tracker Simulator.",
//     image: { src: "/carrier.png", alt: "Carrier Mortar Tracker Simulator" },
//   },
//   {
//     slug: "81mm-mortar-firing-simulator",
//     number: 13,
//     name: "81mm Mortar Firing Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Firing simulator for 81mm mortar training.",
//     overview: "A firing simulator for 81mm mortar training. GVS has designed, developed and delivered 81mm Mortar Simulators.",
//     application: "Intended for 81mm mortar crew firing drills without live ammunition.",
//     features: [],
//     delivered: true,
//     image: { src: "/81 (2).png", alt: "81mm Mortar Simulator" },
//   },
//   {
//     slug: "lorros-simulator",
//     number: 14,
//     name: "LORROS Simulator",
//     category: "Observation & Terrain Systems",
//     summary: "Simulator for long-range reconnaissance and observation system (LORROS) training.",
//     overview: "A simulator for LORROS (long-range reconnaissance and observation system) training. GVS has designed, developed and delivered LORROS Simulators.",
//     application: "Intended for operator training on long-range observation and surveillance equipment.",
//     features: [],
//     delivered: true,
//     image: { src: "/lors.png", alt: "LORROS Simulator" }, // <-- Mapped to lors.png
//   },
//   {
//     slug: "vr-combat-medical-care-simulator",
//     number: 15,
//     name: "VR Combat Medical Care Simulator",
//     category: "VR & Immersive Training",
//     summary: "VR-based simulator for combat medical care training.",
//     overview: "A VR-based combat medical care simulator. GVS has designed, developed and delivered VR-based Combat Medical Care Simulators.",
//     application: "Intended for training personnel in combat medical care procedures using immersive VR.",
//     features: [],
//     delivered: true,
//     image: { src: "/hos.png", alt: "VR Combat Medical Simulator" },
//   },
//   {
//     slug: "radio-telephony-simulator",
//     number: 16,
//     name: "Radio Telephony Simulator",
//     category: "Training Equipment & Communications",
//     summary: "Simulator for radio telephony training.",
//     overview: "A simulator for radio telephony training.",
//     application: "Intended for training personnel in radio telephony procedures in a classroom setting.",
//     features: [],
//     delivered: false,
//     image: { src: "/radio.jpg", alt: "Radio Telephony Simulator" },
//   },
//   {
//     slug: "situational-awareness-system",
//     number: 17,
//     name: "Situational Awareness System",
//     category: "Training Equipment & Communications",
//     summary: "System for situational awareness.",
//     overview: "A situational awareness system developed by GVS.",
//     application: "Contact our team for information on the intended application and configuration.",
//     features: [],
//     delivered: false,
//     image: { src: "/situational-awareness.jpg", alt: "Situational Awareness System" },
//   },
//   {
//     slug: "cuas-simulator",
//     number: 18,
//     name: "CUAS Simulator",
//     category: "Training Equipment & Communications",
//     summary: "Simulator for counter-unmanned aircraft system (CUAS) training.",
//     overview: "A simulator for counter-unmanned aircraft system (CUAS) training.",
//     application: "Intended for CUAS operator training in a simulated environment.",
//     features: [],
//     delivered: false,
//     image: { src: "/cuas.jpg", alt: "CUAS Simulator" },
//   },
// ];

// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
// import { images, type SiteImage } from "./images";

// export type ProductCategory =
//   | "Weapon & Launcher Simulators"
//   | "VR & Immersive Training"
//   | "Tactical & Mortar Simulators"
//   | "Observation & Terrain Systems"
//   | "Training Equipment & Communications";

// export const productCategories: ProductCategory[] = [
//   "Weapon & Launcher Simulators",
//   "VR & Immersive Training",
//   "Tactical & Mortar Simulators",
//   "Observation & Terrain Systems",
//   "Training Equipment & Communications",
// ];

// export type Product = {
//   slug: string;
//   number: number;
//   name: string;
//   category: ProductCategory;
//   summary: string;
//   overview: string;
//   application: string;
//   features: string[];
//   delivered: boolean;
//   note?: string;
//   image: SiteImage | { src: string; alt: string };
// };

// export const products: Product[] = [
//   {
//     slug: "vrop-tiioe-simulator",
//     number: 1,
//     name: "VR-Based OP-End Battlefield Simulator (VROP)",
//     category: "Observation & Terrain Systems",
//     summary: "VR-based observation post battlefield simulator with an integrated TIIOE simulator.",
//     overview: "A VR-based battlefield simulator for the observation post end, which includes a Thermal Imaging Integrated Observation Equipment (TIIOE) simulator.",
//     application: "Intended for training personnel in observation-post duties within a virtual battlefield environment, including the use of thermal imaging observation equipment.",
//     features: [],
//     delivered: true,
//     image: { src: "/vrop.png", alt: "VROP Simulator" },
//   },
//   {
//     slug: "vr-rocket-launcher-simulator",
//     number: 2,
//     name: "VR-Based Rocket Launcher Simulator",
//     category: "Weapon & Launcher Simulators",
//     summary: "Virtual reality simulator for rocket launcher training.",
//     overview: "A virtual reality based simulator for rocket launcher training. The company's activities include design and manufacture of 84mm Rocket Launcher Simulators.",
//     application: "Intended for rocket launcher handling and engagement training in an immersive virtual environment, without live ammunition.",
//     features: [],
//     delivered: true,
//     image: { src: "/vrweapon.png", alt: "VR Rocket Launcher Simulator" },
//   },
//   {
//     slug: "vr-sniper-simulator",
//     number: 3,
//     name: "VR-Based Sniper Simulator",
//     category: "Weapon & Launcher Simulators",
//     summary: "Virtual reality simulator for sniper training on a virtual range.",
//     overview: "A virtual reality based simulator for sniper training.",
//     application: "Intended for precision marksmanship training on virtual ranges in a controlled indoor setting.",
//     features: [],
//     delivered: false,
//     note: "The image shown is illustrative and does not depict the specific replica models listed.",
//     image: { src: "/vrsnipperweapon.png", alt: "VR Sniper Simulator" },
//   },
//   {
//     slug: "vr-bunker-defence-simulator",
//     number: 4,
//     name: "VR-Based Bunker Defence Training Simulator",
//     category: "VR & Immersive Training",
//     summary: "VR-based training simulator for bunker defence.",
//     overview: "A VR-based training simulator focused on bunker defence.",
//     application: "Intended for training personnel in bunker defence drills within a virtual environment.",
//     features: [],
//     delivered: false,
//     image: { src: "/bunker.png", alt: "Bunker Defence Simulator" },
//   },
//   {
//     slug: "vr-3d-terrain-simulator",
//     number: 5,
//     name: "VR-Based 3D Terrain Simulator",
//     category: "Observation & Terrain Systems",
//     summary: "VR-based simulator presenting three-dimensional terrain.",
//     overview: "A VR-based simulator presenting three-dimensional terrain.",
//     application: "Intended to support terrain study and familiarisation using immersive 3D visualisation.",
//     features: [],
//     delivered: false,
//     image: { src: "/3d.png", alt: "3D Terrain Simulator" },
//   },
//   {
//     slug: "tetherless-infantry-weapon-training-simulator",
//     number: 6,
//     name: "Infantry Weapon Training Simulator with Tetherless System",
//     category: "Weapon & Launcher Simulators",
//     summary: "Infantry weapon training simulator with tetherless (wireless) operation.",
//     overview: "An Infantry Weapon Training Simulator offered with tetherless capability. GVS has designed, developed and delivered Infantry Weapon Training Simulators.",
//     application: "Intended for infantry weapon training where trainees are not tethered to the simulator by cables.",
//     features: [],
//     delivered: true,
//     image: { src: "/infantary (2).png", alt: "Infantry Weapon Training Simulator" },
//   },
//   {
//     slug: "drona-simulator",
//     number: 7,
//     name: "Drona Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Part of the GVS simulator portfolio. Contact us for product details.",
//     overview: "The Drona Simulator is part of the product portfolio developed by GVS.",
//     application: "Please contact our team for information on the intended training application.",
//     features: [],
//     delivered: false,
//     note: "An approved photograph and product description for the Drona Simulator are awaited from GVS.",
//     image: { src: "/drone.png", alt: "Drona Simulator" },
//   },
//   {
//     slug: "replica-weapons",
//     number: 8,
//     name: "Replica Weapons — AK-47, AK-203, 9mm Beretta, Tavor and SIG Sauer",
//     category: "Weapon & Launcher Simulators",
//     summary: "Training replicas: AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer.",
//     overview: "Replica weapons for training use, covering the AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer. These are training replicas, not live weapons.",
//     application: "Intended for use with training and simulation systems. The company's activities include manufacture of defence mockups and weapon-mounted training systems.",
//     features: [],
//     delivered: false,
//     note: "The image shown is illustrative and does not depict the specific replica models listed.",
//     image: { src: "/replica.png", alt: "Replica Weapons" },
//   },
//   {
//     slug: "atgm-ground-launcher-simulator",
//     number: 9,
//     name: "ATGM Ground Launcher Skill Development Simulator",
//     category: "Weapon & Launcher Simulators",
//     summary: "Skill development simulator for ATGM ground launcher operators.",
//     overview: "A skill development simulator for Anti-Tank Guided Missile (ATGM) ground launcher training. GVS has designed, developed and delivered ATGM Simulators.",
//     application: "Intended for developing ATGM ground launcher operator skills in a simulated environment.",
//     features: [],
//     delivered: true,
//     image: { src: "/atgmsimulator.png", alt: "ATGM Ground Launcher Simulator" },
//   },
//   {
//     slug: "tank-troop-tactical-training-simulator",
//     number: 10,
//     name: "Tank Troop Tactical Training Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Tactical training simulator at tank troop level.",
//     overview: "A tactical training simulator at tank troop level. GVS has designed, developed and delivered Tactical Tank Training Simulators.",
//     application: "Intended for troop-level tactical training of tank crews in a simulated environment.",
//     features: [],
//     delivered: true,
//     image: { src: "/tan.png", alt: "Tank Troop Simulator" },
//   },
//   {
//     slug: "mechanized-infantry-tactical-training-simulator",
//     number: 11,
//     name: "Mechanized Infantry Company-Level Tactical Training Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Company-level tactical training simulator for mechanised infantry.",
//     overview: "A tactical training simulator for mechanised infantry at company level.",
//     application: "Intended for company-level tactical training of mechanised infantry in a simulated environment.",
//     features: [],
//     delivered: false,
//     image: { src: "/mechanized.png", alt: "Mechanized Infantry Simulator" },
//   },
//   {
//     slug: "carrier-mortar-tracker-simulator",
//     number: 12,
//     name: "Carrier Mortar Tracker Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Simulator for Carrier Mortar Tracker training.",
//     overview: "A simulator for Carrier Mortar Tracker training.",
//     application: "Intended for crew training on the Carrier Mortar Tracker in a simulated setting.",
//     features: [],
//     delivered: false,
//     note: "The image shown is a generic illustration of a vehicle-crew simulator workstation, not the GVS Carrier Mortar Tracker Simulator.",
//     image: { src: "/carrier.png", alt: "Carrier Mortar Tracker Simulator" },
//   },
//   {
//     slug: "81mm-mortar-firing-simulator",
//     number: 13,
//     name: "81mm Mortar Firing Simulator",
//     category: "Tactical & Mortar Simulators",
//     summary: "Firing simulator for 81mm mortar training.",
//     overview: "A firing simulator for 81mm mortar training. GVS has designed, developed and delivered 81mm Mortar Simulators.",
//     application: "Intended for 81mm mortar crew firing drills without live ammunition.",
//     features: [],
//     delivered: true,
//     image: { src: "/81 (2).png", alt: "81mm Mortar Simulator" },
//   },
//   {
//     slug: "lorros-simulator",
//     number: 14,
//     name: "LORROS Simulator",
//     category: "Observation & Terrain Systems",
//     summary: "Simulator for long-range reconnaissance and observation system (LORROS) training.",
//     overview: "A simulator for LORROS (long-range reconnaissance and observation system) training. GVS has designed, developed and delivered LORROS Simulators.",
//     application: "Intended for operator training on long-range observation and surveillance equipment.",
//     features: [],
//     delivered: true,
//     image: { src: "/lors.png", alt: "LORROS Simulator" },
//   },
//   {
//     slug: "vr-combat-medical-care-simulator",
//     number: 15,
//     name: "VR Combat Medical Care Simulator",
//     category: "VR & Immersive Training",
//     summary: "VR-based simulator for combat medical care training.",
//     overview: "A VR-based combat medical care simulator. GVS has designed, developed and delivered VR-based Combat Medical Care Simulators.",
//     application: "Intended for training personnel in combat medical care procedures using immersive VR.",
//     features: [],
//     delivered: true,
//     image: { src: "/hos.png", alt: "VR Combat Medical Simulator" },
//   },
//   {
//     slug: "radio-telephony-simulator",
//     number: 16,
//     name: "Radio Telephony Simulator",
//     category: "Training Equipment & Communications",
//     summary: "Simulator for radio telephony training.",
//     overview: "A simulator for radio telephony training.",
//     application: "Intended for training personnel in radio telephony procedures in a classroom setting.",
//     features: [],
//     delivered: false,
//     image: { src: "/radio.png", alt: "Radio Telephony Simulator" }, // <-- Mapped to radio.png
//   },
//   {
//     slug: "situational-awareness-system",
//     number: 17,
//     name: "Situational Awareness System",
//     category: "Training Equipment & Communications",
//     summary: "System for situational awareness.",
//     overview: "A situational awareness system developed by GVS.",
//     application: "Contact our team for information on the intended application and configuration.",
//     features: [],
//     delivered: false,
//     image: { src: "/simulation.png", alt: "Situational Awareness System" }, // <-- Mapped to simulation.png
//   },
//   {
//     slug: "cuas-simulator",
//     number: 18,
//     name: "CUAS Simulator",
//     category: "Training Equipment & Communications",
//     summary: "Simulator for counter-unmanned aircraft system (CUAS) training.",
//     overview: "A simulator for counter-unmanned aircraft system (CUAS) training.",
//     application: "Intended for CUAS operator training in a simulated environment.",
//     features: [],
//     delivered: false,
//     image: { src: "/cuas.png", alt: "CUAS Simulator" }, // <-- Mapped to cuas.png
//   },
// ];

// export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
import { images, type SiteImage } from "./images";

export type ProductCategory =
  | "Weapon & Launcher Simulators"
  | "VR & Immersive Training"
  | "Tactical & Mortar Simulators"
  | "Observation & Terrain Systems"
  | "Training Equipment & Communications";

export const productCategories: ProductCategory[] = [
  "Weapon & Launcher Simulators",
  "VR & Immersive Training",
  "Tactical & Mortar Simulators",
  "Observation & Terrain Systems",
  "Training Equipment & Communications",
];

export type Product = {
  slug: string;
  number: number;
  name: string;
  category: ProductCategory;
  summary: string;
  overview: string;
  application: string;
  features: string[];
  delivered: boolean;
  note?: string;
  image: SiteImage | { src: string; alt: string };
};

export const products: Product[] = [
  {
    slug: "vrop-tiioe-simulator",
    number: 1,
    name: "VR-Based OP-End Battlefield Simulator (VROP)",
    category: "Observation & Terrain Systems",
    summary: "VR-based observation post battlefield simulator with an integrated TIIOE simulator.",
    overview: "A virtual reality-based observation-post-end battlefield training simulator that includes a Thermal Imaging Integrated Observation Equipment (TIIOE) simulator. Designed to support simulated observation and scenario-based training.",
    application: "Intended for training personnel in observation-post duties within a virtual battlefield environment, including the use of thermal imaging observation equipment.",
    features: [
      "Restricted Access: Authorized Personnel Only. Comprehensive Training Program Featuring Three Unique Stations: Instructor-Stn, Mockup, and Virtual Reality (VR) Stations.",
      "6 diverse geo-specific terrains, each equipped with designated field firing ranges.",
      "TIIOE Mockup ensures trainee to develop critical skills in recognizing and engaging targets effectively in various operational scenarios.",
      "Placement of obstacles or military installations as targets ensures mission precision and enhances strategic decision-making on the battlefield.",
      "Realistic observation of targets and diverse ammunition effects—such as HE, ILL, and SMK—is enabled through the TIIOE mockup.",
      "Mockup designed closely to original system with key components like ARTIMLR, LRF, ANFM, Goniometer & Tripod.",
      "The VR station features integrated binoculars, compass, and laser rangefinder (LRF).",
      "Scalable and can be expanded to support up to two VR stations.",
      "Ease of installation, the system fits seamlessly within a standard 10 ft x 10 ft room."
    ],
    delivered: true,
    image: { src: "/vrop.png", alt: "VROP Simulator" },
  },
  {
    slug: "vr-rocket-launcher-simulator",
    number: 2,
    name: "VR-Based Rocket Launcher Simulator",
    category: "Weapon & Launcher Simulators",
    summary: "Virtual reality simulator for rocket launcher training.",
    overview: "An immersive VR-based training simulator for rocket launcher familiarization and simulated training activities.",
    application: "Intended for rocket launcher handling and engagement training in an immersive virtual environment, without live ammunition.",
    features: [
      "Restricted Access: Authorized Personnel Only.",
      "Experience next-level mission training with our VR station.",
      "Supplied with a strap on tracker kit mounted on any functional or non-functional rocket launcher, allowing users to see and interact with it in Virtual Reality.",
      "Train in five geo-specific environments: High Altitude, Mountain, Desert, Riverine, and Jungle.",
      "Realistic audio-integrated training settings crafted to sharpen tactical performance.",
      "Compact and easy to install, the system integrates smoothly into a 10 ft x 10 ft space."
    ],
    delivered: true,
    image: { src: "/vrweapon.png", alt: "VR Rocket Launcher Simulator" },
  },
  {
    slug: "vr-sniper-simulator",
    number: 3,
    name: "VR-Based Sniper Simulator",
    category: "Weapon & Launcher Simulators",
    summary: "Virtual reality simulator for sniper training on a virtual range.",
    overview: "A VR-based sniper training simulator intended to provide an immersive simulated environment for training activities.",
    application: "Intended for precision marksmanship training on virtual ranges in a controlled indoor setting.",
    features: [
      "Restricted Access: Authorized Personnel Only.",
      "Experience next-level mission training with our VR station.",
      "Supplied with a strap on tracker kit mounted on any functional or non-functional rocket launcher, allowing users to see and interact with it in Virtual Reality.",
      "Train in five geo-specific environments: High Altitude, Mountain, Desert, Riverine, and Jungle.",
      "Realistic audio-integrated training settings crafted to sharpen tactical performance."
    ],
    delivered: false,
    note: "The image shown is illustrative and does not depict the specific replica models listed.",
    image: { src: "/vrsnipperweapon.png", alt: "VR Sniper Simulator" },
  },
  {
    slug: "vr-bunker-defence-simulator",
    number: 4,
    name: "VR-Based Bunker Defence Training Simulator",
    category: "VR & Immersive Training",
    summary: "VR-based training simulator for bunker defence.",
    overview: "A virtual reality-based training system for simulated bunker defence scenarios. It can be presented as a platform for scenario-based familiarization and team training.",
    application: "Intended for training personnel in bunker defence drills within a virtual environment.",
    features: [],
    delivered: false,
    image: { src: "/bunker.png", alt: "Bunker Defence Simulator" },
  },
  {
    slug: "vr-3d-terrain-simulator",
    number: 5,
    name: "VR-Based 3D Terrain Simulator",
    category: "Observation & Terrain Systems",
    summary: "VR-based simulator presenting three-dimensional terrain.",
    overview: "A three-dimensional terrain simulation solution for visualizing simulated terrain environments and supporting training or planning scenarios.",
    application: "Intended to support terrain study and familiarisation using immersive 3D visualisation.",
    features: [],
    delivered: false,
    image: { src: "/3d.png", alt: "3D Terrain Simulator" },
  },
  {
    slug: "tetherless-infantry-weapon-training-simulator",
    number: 6,
    name: "Infantry Weapon Training Simulator with Tetherless System",
    category: "Weapon & Launcher Simulators",
    summary: "Infantry weapon training simulator with tetherless (wireless) operation.",
    overview: "An advanced, immersive infantry training solution featuring a fully tetherless weapon simulation system, realistic weapon replicas, simulated recoil, infrared laser-based hit detection and interactive virtual training environments.",
    application: "Intended for infantry weapon training where trainees are not tethered to the simulator by cables.",
    features: [
      "Tetherless Weapon Operation – Unrestricted movement and weapon handling without physical cables.",
      "Four-Lane Simultaneous Training – Supports four trainees per simulator.",
      "Realistic AK-47 Weapon Replicas – Replica rifles with near-actual dimensions and weight, simulated firing modes and pneumatic recoil mechanisms.",
      "Infrared Laser-Based Hit Detection – Camera-assisted infrared laser technology for shot detection.",
      "Large-Screen Projection System – Immersive, projection-based training environment.",
      "Multiple Firing Exercises – Supports static and moving targets, grouping exercises, zeroing practice and firing drills.",
      "Scenario-Based Tactical Training – Training in attack, defence, ambush, raid and patrolling scenarios.",
      "Performance Evaluation and Reporting – Analysis of hits, misses, shot grouping and firing performance.",
      "Configurable Training Environment – Customisation of training exercises, target movement, time and weather conditions.",
      "Integrated and Upgradeable Architecture – Provision for maintenance, software enhancement and future upgrades."
    ],
    delivered: true,
    image: { src: "/infantary (2).png", alt: "Infantry Weapon Training Simulator" },
  },
  {
    slug: "drona-simulator",
    number: 7,
    name: "Drona Simulator",
    category: "Tactical & Mortar Simulators",
    summary: "Computer-based small arms firing system.",
    overview: "Drona is a computer-based small arms firing system designed to train, monitor, and evaluate 4 trainees simultaneously under the supervision of a single instructor.",
    application: "Ideal for defence training centers, paramilitary forces, and police academies, offering a scalable, cost-effective, and realistic platform for modern infantry training.",
    features: [
      "Multi-Weapon Capability: Supports AK-47, INSAS, Light Machine Gun (LMG), Rocket Launcher (RL), and Carbine/Sub-Machine Gun.",
      "Realistic Virtual Environment: Projects high-fidelity 3D terrains, tactical targets, moving targets, and AI-driven reactive human models.",
      "Recoil Simulation: Equipped with tethered recoil kits to replicate the authentic recoil effect.",
      "Multi-Trainee Operation: Enables simultaneous training and evaluation of multiple personnel by a single instructor.",
      "Range Course Exercises: Accurately simulates all standard range courses up to 400 meters.",
      "Performance Monitoring & Assessment: Provides real-time tracking of firing accuracy, reaction time, and tactical behavior."
    ],
    delivered: false,
    note: "An approved photograph and product description for the Drona Simulator are awaited from GVS.",
    image: { src: "/drone.png", alt: "Drona Simulator" },
  },
  {
    slug: "replica-weapons",
    number: 8,
    name: "Replica Weapons — AK-47, AK-203, 9mm Beretta, Tavor and SIG Sauer",
    category: "Weapon & Launcher Simulators",
    summary: "Training replicas: AK-47, AK-203, 9mm Beretta pistol, Tavor and SIG Sauer.",
    overview: "Replica weapon equipment for training and familiarization applications.",
    application: "Intended for use with training and simulation systems. The company's activities include manufacture of defence mockups and weapon-mounted training systems.",
    features: [],
    delivered: false,
    note: "The image shown is illustrative and does not depict the specific replica models listed.",
    image: { src: "/replica.png", alt: "Replica Weapons" },
  },
  {
    slug: "atgm-ground-launcher-simulator",
    number: 9,
    name: "ATGM Ground Launcher Skill Development Simulator",
    category: "Weapon & Launcher Simulators",
    summary: "Skill development simulator for ATGM ground launcher operators.",
    overview: "A ground-launcher skill development simulator for Anti-Tank Guided Missile (ATGM) training.",
    application: "Intended for developing ATGM ground launcher operator skills in a simulated environment.",
    features: [
      "Restricted Access: Authorized Personnel Only.",
      "A streamlined training solution with a dedicated instructor console.",
      "Five varied terrains—Desert, Semi-Desert, Plains, High Altitude, and Riverine—each span 10x10 km.",
      "Simulate enemy presence with joystick-controlled AI, offering adjustable threat levels.",
      "Fault induction system empowers instructors to create complex, realistic failures.",
      "Integrated obstacles and target systems enhance situational judgment.",
      "Simulated Konkurs-M effects and realistic target observation.",
      "True-to-life back-blast simulation.",
      "Mockup features all critical components including Tripod, Fire Tube, Traverse and Elevation Assemblies, Swivel Body, Cradle, Guidance Box, Trigger Mechanism, Day Sight, and TI Sight.",
      "Compact and user-friendly, engineered for quick installation in standard-sized rooms."
    ],
    delivered: true,
    image: { src: "/atgmsimulator.png", alt: "ATGM Ground Launcher Simulator" },
  },
  {
    slug: "tank-troop-tactical-training-simulator",
    number: 10,
    name: "Tank Troop Tactical Training Simulator",
    category: "Tactical & Mortar Simulators",
    summary: "Tactical training simulator at tank troop level.",
    overview: "A tactical training simulator intended to support tank troop-level training scenarios.",
    application: "Intended for troop-level tactical training of tank crews in a simulated environment.",
    features: [],
    delivered: true,
    image: { src: "/tan.png", alt: "Tank Troop Simulator" },
  },
  {
    slug: "mechanized-infantry-tactical-training-simulator",
    number: 11,
    name: "Mechanized Infantry Company-Level Tactical Training Simulator",
    category: "Tactical & Mortar Simulators",
    summary: "Company-level tactical training simulator for mechanised infantry.",
    overview: "A company-level tactical training simulator for mechanized infantry training scenarios.",
    application: "Intended for company-level tactical training of mechanised infantry in a simulated environment.",
    features: [],
    delivered: false,
    image: { src: "/mechanized.png", alt: "Mechanized Infantry Simulator" },
  },
  {
    slug: "carrier-mortar-tracker-simulator",
    number: 12,
    name: "Carrier Mortar Tracker Simulator",
    category: "Tactical & Mortar Simulators",
    summary: "Simulator for Carrier Mortar Tracker training.",
    overview: "A simulator identified as Carrier Mortar Tracker Simulator.",
    application: "Intended for crew training on the Carrier Mortar Tracker in a simulated setting.",
    features: [],
    delivered: false,
    note: "The image shown is a generic illustration of a vehicle-crew simulator workstation, not the GVS Carrier Mortar Tracker Simulator.",
    image: { src: "/carrier.png", alt: "Carrier Mortar Tracker Simulator" },
  },
  {
    slug: "81mm-mortar-firing-simulator",
    number: 13,
    name: "81mm Mortar Firing Simulator",
    category: "Tactical & Mortar Simulators",
    summary: "Firing simulator for 81mm mortar training.",
    overview: "A mortar firing training simulator for 81mm mortar training applications.",
    application: "Intended for 81mm mortar crew firing drills without live ammunition.",
    features: [
      "Restricted Access: Authorized Personnel Only.",
      "A complete training solution equipped with a single instructor PC, offering MFC and Heli View capabilities.",
      "Features five diverse geo-specific terrains—Desert, Built-Up Area, Plains, High Altitude Area (HAA), and Glacier—each equipped with a dedicated 10x10 km field firing range.",
      "Real-Time Fault Injection to Strengthen Trainee Problem-Solving.",
      "Mockup enables realistic observation of targets and simulation of diverse bomb effects—including HE, Smoke, and Illumination.",
      "Closely modeled on the original system, includes essential components like the bipod, tube, baseplate, and various ammunition types.",
      "The MFC View delivers an advanced simulation experience through integrated binoculars, compass, and laser range finder.",
      "Extensive training is delivered through an Android tablet equipped with AMFDC and Plotter applications.",
      "Ease of installation, the system fits seamlessly within a standard 15 ft x 15 ft room."
    ],
    delivered: true,
    image: { src: "/81 (2).png", alt: "81mm Mortar Simulator" },
  },
  {
    slug: "lorros-simulator",
    number: 14,
    name: "LORROS Simulator",
    category: "Observation & Terrain Systems",
    summary: "Simulator for long-range reconnaissance and observation system (LORROS) training.",
    overview: "A simulator associated with LORROS equipment.",
    application: "Intended for operator training on long-range observation and surveillance equipment.",
    features: [],
    delivered: true,
    image: { src: "/lors.png", alt: "LORROS Simulator" },
  },
  {
    slug: "vr-combat-medical-care-simulator",
    number: 15,
    name: "VR Combat Medical Care Simulator",
    category: "VR & Immersive Training",
    summary: "VR-based simulator for combat medical care training.",
    overview: "The Virtual Reality Combat Medical Care (VR CMC) system is an advanced VR-based medical training simulator designed to train Medical Officers (MOs), Paramedics, and all ranks of the Indian Army in Combat Medical Care procedures within a highly immersive and interactive environment.",
    application: "Intended for training personnel in combat medical care procedures using immersive VR.",
    features: [
      "Familiarisation Module: (a) Human Anatomy and Physiology: Detailed study of the human body systems through 3D interactive visuals. (b) Patient Safety and Care: Training on essential safety protocols and patient handling procedures. (c) Critical Care Transport: Simulated scenarios for casualty evacuation and in-transit medical management. (d) CBRN: Specialized training for casualty care under CBRN exposure conditions.",
      "Scenario-Based First Aid Training: 21 unique combat medical scenarios across three operational terrains Desert, Jungle and Snow.",
      "Evaluation and Performance Monitoring.",
      "Enhance decision-making and prioritization skills under pressure.",
      "Standardize Combat Medical Care procedures across ranks.",
      "Provide a cost-effective, repeatable, and risk-free training environment."
    ],
    delivered: true,
    image: { src: "/hos.png", alt: "VR Combat Medical Simulator" },
  },
  {
    slug: "radio-telephony-simulator",
    number: 16,
    name: "Radio Telephony Simulator",
    category: "Training Equipment & Communications",
    summary: "Simulator for radio telephony training.",
    overview: "A radio telephony training simulator for simulated communication practice.",
    application: "Intended for training personnel in radio telephony procedures in a classroom setting.",
    features: [],
    delivered: false,
    image: { src: "/radio.png", alt: "Radio Telephony Simulator" },
  },
  {
    slug: "situational-awareness-system",
    number: 17,
    name: "Situational Awareness System",
    category: "Training Equipment & Communications",
    summary: "System for situational awareness.",
    overview: "A situational awareness system intended to present relevant simulated or system information to users.",
    application: "Contact our team for information on the intended application and configuration.",
    features: [],
    delivered: false,
    image: { src: "/simulation.png", alt: "Situational Awareness System" },
  },
  {
    slug: "cuas-simulator",
    number: 18,
    name: "CUAS Simulator",
    category: "Training Equipment & Communications",
    summary: "Simulator for counter-unmanned aircraft system (CUAS) training.",
    overview: "A counter-unmanned aircraft system (CUAS) simulator, subject to confirmation of the official product name and scope.",
    application: "Intended for CUAS operator training in a simulated environment.",
    features: [],
    delivered: false,
    image: { src: "/cuas.png", alt: "CUAS Simulator" },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);