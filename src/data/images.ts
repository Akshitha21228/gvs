// /**
//  * CENTRAL IMAGE MAP — replace any image here and it updates across the site.
//  *
//  * `illustrative: true` means the picture is a conceptual illustration of the
//  * training application, NOT a photograph of genuine GVS equipment. The site
//  * shows an "Illustrative image" label on every such image. When GVS supplies an
//  * approved product photograph, import it here and set `illustrative: false`.
//  * Set `src: null` to show a clearly labelled "photograph awaited" placeholder.
//  */
// import hero from "@/assets/hero.jpg";
// import electronicsLab from "@/assets/electronics-lab.jpg";
// import vrop from "@/assets/products/vrop-tiioe.jpg";
// import rocket from "@/assets/products/rocket-launcher.jpg";
// import sniper from "@/assets/products/sniper.jpg";
// import bunker from "@/assets/products/bunker.jpg";
// import terrain from "@/assets/products/terrain.jpg";
// import tetherless from "@/assets/products/tetherless.jpg";
// import replicas from "@/assets/products/replica-weapons.jpg";
// import atgm from "@/assets/products/atgm.jpg";
// import tank from "@/assets/products/tank-troop.jpg";
// import mechInf from "@/assets/products/mech-infantry.jpg";
// import carrierMortar from "@/assets/products/carrier-mortar.jpg";
// import mortar from "@/assets/products/mortar-81mm.jpg";
// import lorros from "@/assets/products/lorros.jpg";
// import medical from "@/assets/products/combat-medical.jpg";
// import radio from "@/assets/products/radio-telephony.jpg";
// import sa from "@/assets/products/situational-awareness.jpg";
// import cuas from "@/assets/products/cuas.jpg";

// export type SiteImage = {
//   src: string | null;
//   alt: string;
//   illustrative: boolean;
// };

// const illus = (src: string, alt: string): SiteImage => ({ src, alt, illustrative: true });

// export const images = {
//   hero: illus(hero, "Trainees at weapon-training simulator stations facing a large screen showing Himalayan terrain"),
//   electronicsLab: illus(electronicsLab, "Engineers assembling and testing circuit boards and a ruggedised electronics enclosure"),
//   vrop: illus(vrop, "Trainee using tripod-mounted observation equipment in front of a thermal battlefield display"),
//   rocket: illus(rocket, "Trainee wearing a VR headset with a launcher training mockup while an instructor monitors"),
//   sniper: illus(sniper, "Precision marksmanship simulator bay with training replica and virtual range screen"),
//   bunker: illus(bunker, "Sandbag bunker training set-up with trainees in VR headsets and a mountain scene beyond"),
//   terrain: illus(terrain, "Officers studying a 3D digital terrain model of mountain ranges on a touch table"),
//   tetherless: illus(tetherless, "Trainees with wireless training replicas and VR headsets moving freely in a lab"),
//   replicas: illus(replicas, "Inert training replicas arranged on a display stand"),
//   atgm: illus(atgm, "Trainee kneeling behind a tripod-mounted ground launcher training mockup linked to a simulator"),
//   tank: illus(tank, "Crew training cubicles with control panels and a wall screen showing a tank troop in desert terrain"),
//   mechInf: illus(mechInf, "Tactical training room with workstations and a wall map showing unit symbols"),
//   carrierMortar: illus(carrierMortar, "Trainee operating a crew-compartment style simulator workstation with an instructor"),
//   mortar: illus(mortar, "Two trainees setting up a mortar training mockup linked to a laptop and range screen"),
//   lorros: illus(lorros, "Operator controlling a long-range pan-tilt camera with a joystick and rugged laptop"),
//   medical: illus(medical, "Trainees in VR headsets practising casualty care on a training mannequin"),
//   radio: illus(radio, "Classroom of trainees with headsets practising on field radio sets"),
//   sa: illus(sa, "Operations room video wall with a topographic map, sensor feeds and status panels"),
//   cuas: illus(cuas, "Operators at drone-monitoring consoles with a demonstration quadcopter on the desk"),
//   drona: { src: null, alt: "Drona Simulator — approved photograph awaited", illustrative: false } as SiteImage,
// } satisfies Record<string, SiteImage>;
// export type SiteImage = {
//   src: string | null;
//   alt: string;
//   illustrative: boolean;
// };

// const illus = (src: string, alt: string): SiteImage => ({ src, alt, illustrative: true });

// export const images = {
//   hero: illus("/hero.jpg", "Trainees at weapon-training simulator stations"),
  
//   // Working Images
//   tetherless: illus("/wep.jpg", "Trainees with wireless training replicas"),
//   atgm: illus("/atgm1.jpg", "Trainee kneeling behind a tripod-mounted ground launcher training mockup"),
//   vrop: illus("/vrop.png", "Trainee using tripod-mounted observation equipment"),
//   medical: illus("/medical.png", "Trainees in VR headsets practising casualty care"),
//   tank: illus("/tankcrew.png", "Crew training cubicles with control panels"),
//   mortar: illus("/80mm.png", "Two trainees setting up a mortar training mockup"),
//   lorros: illus("/lorrs.png", "Operator controlling a long-range pan-tilt camera"),
//   replicas: illus("/weapons.png", "Inert training replicas arranged on a display stand"),

//   // FIXED: Pointing these to existing images so they don't break
//   terrain: illus("/vrop.png", "VR and AR Simulation"), // Points to VROP for now
//   bunker: illus("/wep.jpg", "Bunker defence simulation"), // Points to wep for now
//   electronicsLab: illus("/weapons.png", "Engineers assembling and testing circuit boards"), // Points to weapons for now
//   sa: illus("/vrop.png", "Operations room video wall"), // Points to VROP for now
//   mechInf: illus("/tankcrew.png", "Tactical training room"), // Points to tankcrew for now
//   rocket: illus("/atgm1.jpg", "Rocket launcher simulator"), // Points to atgm for now
//   sniper: illus("/wep.jpg", "Sniper simulator"),
//   carrierMortar: illus("/tankcrew.png", "Carrier Mortar Tracker Simulator"),
//   radio: illus("/vrop.png", "Radio telephony simulator"),
//   cuas: illus("/vrop.png", "CUAS Simulator"),
  
//   // Drona has no image yet
//   drona: { src: null, alt: "Drona Simulator — approved photograph awaited", illustrative: false } as SiteImage,
// } satisfies Record<string, SiteImage>;

// export type SiteImage = {
//   src: string | null;
//   alt: string;
//   illustrative: boolean;
// };

// const illus = (src: string, alt: string): SiteImage => ({ src, alt, illustrative: true });

// export const images = {
//   // --- HERO IMAGE (Now loading from public folder) ---
//   hero: illus("/hero.jpg", "Trainees at weapon-training simulator stations facing a large screen showing Himalayan terrain"),

//   // --- YOUR SPECIFIC PRODUCT & CARD IMAGES ---
//   tetherless: illus("/wep.jpg", "Infantry Weapon Training Simulators"),
//   atgm: illus("/atgm1.jpg", "ATGM Training Simulators"),
//   vrop: illus("/vrop.png", "VROP and TIIOE Simulator"),
//   medical: illus("/medical.png", "VR Combat Medical Care Simulator"),
//   tank: illus("/tankcrew.png", "Tank Troop Tactical Training Simulator"),
//   mortar: illus("/80mm.png", "81mm Mortar Firing Simulator"),
//   lorros: illus("/lorrs.png", "LORROS Simulator"),
//   replicas: illus("/weapons.png", "Inert training replicas arranged on a display stand"),

//   // --- OTHER IMAGES (Pointing to safe fallbacks so nothing breaks) ---
//   terrain: illus("/vrop.png", "VR and AR Simulation"), 
//   bunker: illus("/wep.jpg", "Bunker defence simulation"), 
//   electronicsLab: illus("/weapons.png", "Defence Electronics"), 
//   sa: illus("/vrop.png", "Situational Awareness System"), 
//   mechInf: illus("/tankcrew.png", "Mechanized Infantry Simulator"), 
//   rocket: illus("/atgm1.jpg", "Rocket Launcher Simulator"), 
//   sniper: illus("/wep.jpg", "Sniper Simulator"),
//   carrierMortar: illus("/tankcrew.png", "Carrier Mortar Tracker Simulator"),
//   radio: illus("/vrop.png", "Radio Telephony Simulator"),
//   cuas: illus("/vrop.png", "CUAS Simulator"),
  
//   // Drona has no image
//   drona: { src: null, alt: "Drona Simulator — approved photograph awaited", illustrative: false } as SiteImage,
// } satisfies Record<string, SiteImage>;
// export type SiteImage = {
//   src: string | null;
//   alt: string;
//   illustrative: boolean;
// };

// const illus = (src: string, alt: string): SiteImage => ({ src, alt, illustrative: true });

// export const images = {
//   // --- HERO IMAGE (Now loading from public folder) ---
//   hero: illus("/hero.jpg", "Trainees at weapon-training simulator stations facing a large screen showing Himalayan terrain"),

//   // --- YOUR SPECIFIC PRODUCT & CARD IMAGES ---
//   tetherless: illus("/wep.jpg", "Infantry Weapon Training Simulators"),
//   atgm: illus("/atgm1.jpg", "ATGM Training Simulators"),
//   vrop: illus("/vrop.png", "VROP and TIIOE Simulator"),
//   medical: illus("/medical.png", "VR Combat Medical Care Simulator"),
//   tank: illus("/tankcrew.png", "Tank Troop Tactical Training Simulator"),
//   mortar: illus("/80mm.png", "81mm Mortar Firing Simulator"),
//   lorros: illus("/lorrs.png", "LORROS Simulator"),
//   replicas: illus("/weapons.png", "Inert training replicas arranged on a display stand"),

//   // --- OTHER IMAGES (Pointing to safe fallbacks so nothing breaks) ---
//   terrain: illus("/vrop.png", "VR and AR Simulation"), 
//   bunker: illus("/wep.jpg", "Bunker defence simulation"), 
  
//   // UPDATED: Electronics Card & Page
//   electronicsLab: illus("/electronics-lab.jpg", "Engineers assembling and testing circuit boards"), 
  
//   // UPDATED: System Integration Card & Page
//   sa: illus("/systeminteg.png", "System Integration and Situational Awareness"), 
  
//   mechInf: illus("/tankcrew.png", "Mechanized Infantry Simulator"), 
//   rocket: illus("/atgm1.jpg", "Rocket Launcher Simulator"), 
//   sniper: illus("/wep.jpg", "Sniper Simulator"),
//   carrierMortar: illus("/tankcrew.png", "Carrier Mortar Tracker Simulator"),
//   radio: illus("/vrop.png", "Radio Telephony Simulator"),
//   cuas: illus("/vrop.png", "CUAS Simulator"),
  
//   // Drona has no image
//   drona: { src: null, alt: "Drona Simulator — approved photograph awaited", illustrative: false } as SiteImage,
// } satisfies Record<string, SiteImage>;
// export type SiteImage = {
//   src: string | null;
//   alt: string;
//   illustrative: boolean;
// };

// const illus = (src: string, alt: string): SiteImage => ({ src, alt, illustrative: true });

// export const images = {
//   // --- HERO IMAGE ---
//   hero: illus("/hero.jpg", "Trainees at weapon-training simulator stations facing a large screen showing Himalayan terrain"),

//   // --- HOMEPAGE CARDS ---
//   tetherless: illus("/infantary.png", "Infantry Weapon Training Simulators"),
//   atgm: illus("/agtm1.png", "ATGM Training Simulators"),
//   terrain: illus("/vr1.png", "VR and AR Simulation"), 
//   tank: illus("/battlefeild.png", "Battlefield and Tactical Training"),
//   lorros: illus("/observation1.png", "Observation and Surveillance Simulators"),
//   medical: illus("/medical1.png", "Combat Medical Care Training"),
//   electronicsLab: illus("/defineelec.png", "Defence Electronics and Sensor-Based Systems"),
  
//   // FIXED: Corrected spelling to match your file 'systeminteg1.png'
//   sa: illus("/systeminteg1.png", "System Integration, Maintenance and Upgrades"),

//   // --- PRODUCT PAGES ---
//   vrop: illus("/observation1.png", "VROP and TIIOE Simulator"),
  
//   // --- OTHER PLACEHOLDERS ---
//   bunker: illus("/battlefeild.png", "Bunker defence simulation"), 
//   mechInf: illus("/systeminteg1.png", "Mechanized Infantry Simulator"), 
//   rocket: illus("/agtm1.png", "Rocket Launcher Simulator"), 
//   sniper: illus("/infantary.png", "Sniper Simulator"),
//   carrierMortar: illus("/battlefeild.png", "Carrier Mortar Tracker Simulator"),
//   radio: illus("/defineelec.png", "Radio Telephony Simulator"),
//   cuas: illus("/observation1.png", "CUAS Simulator"),
//   replicas: illus("/weapons.png", "Inert training replicas arranged on a display stand"),
//   mortar: illus("/80mm.png", "81mm Mortar Firing Simulator"),
  
//   // Drona has no image
//   drona: { src: null, alt: "Drona Simulator — approved photograph awaited", illustrative: false } as SiteImage,
// } satisfies Record<string, SiteImage>;
// export type SiteImage = {
//   src: string | null;
//   alt: string;
//   illustrative: boolean;
// };

// const illus = (src: string, alt: string): SiteImage => ({ src, alt, illustrative: true });

// export const images = {
//   hero: illus("/hero.jpg", "Trainees at weapon-training simulator stations"),
  
//   // Homepage Cards & Product Pages
//   tetherless: illus("/wep.jpg", "Infantry Weapon Training Simulators"),
//   atgm: illus("/atgm1.jpg", "ATGM Training Simulators"),
//   vrop: illus("/vrop.png", "VROP and TIIOE Simulator"),
//   medical: illus("/medical.png", "VR Combat Medical Care Simulator"),
//   tank: illus("/tankcrew.png", "Tank Troop Tactical Training Simulator"),
//   mortar: illus("/80mm.png", "81mm Mortar Firing Simulator"),
//   lorros: illus("/lorrs.png", "LORROS Simulator"),
//   replicas: illus("/weapons.png", "Inert training replicas arranged on a display stand"),
//   electronicsLab: illus("/electronics-lab.jpg", "Engineers assembling and testing circuit boards"),
//   sa: illus("/systeminteg.png", "System Integration"),
  
//   // Other placeholders
//   terrain: illus("/vrop.png", "VR and AR Simulation"),
//   bunker: illus("/wep.jpg", "Bunker defence simulation"),
//   mechInf: illus("/tankcrew.png", "Mechanized Infantry Simulator"),
//   rocket: illus("/atgm1.jpg", "Rocket Launcher Simulator"),
//   sniper: illus("/wep.jpg", "Sniper Simulator"),
//   carrierMortar: illus("/tankcrew.png", "Carrier Mortar Tracker Simulator"),
//   radio: illus("/vrop.png", "Radio Telephony Simulator"),
//   cuas: illus("/vrop.png", "CUAS Simulator"),
  
//   drona: { src: null, alt: "Drona Simulator — approved photograph awaited", illustrative: false } as SiteImage,
// } satisfies Record<string, SiteImage>;

export type SiteImage = {
  src: string | null;
  alt: string;
  illustrative: boolean;
};

const illus = (src: string, alt: string): SiteImage => ({ src, alt, illustrative: true });

export const images = {
  // --- HERO IMAGE ---
  hero: illus("/hero.jpg", "Trainees at weapon-training simulator stations facing a large screen showing Himalayan terrain"),

  // --- HOMEPAGE CARDS ---
  tetherless: illus("/infantary.png", "Infantry Weapon Training Simulators"),
  atgm: illus("/at.png", "ATGM Training Simulators"), // <-- Updated to at.png
  terrain: illus("/vr1.png", "VR and AR Simulation"), 
  tank: illus("/battlefeild.png", "Battlefield and Tactical Training"),
  
  lorros: illus("/observation1.png", "Observation and Surveillance Simulators"),
  medical: illus("/medical1.png", "Combat Medical Care Training"),
  electronicsLab: illus("/defineelec.png", "Defence Electronics and Sensor-Based Systems"),
  sa: illus("/systeminteg1.png", "System Integration, Maintenance and Upgrades"),

  // --- PRODUCT PAGES ---
  vrop: illus("/observation1.png", "VROP and TIIOE Simulator"),
  
  // --- OTHER PLACEHOLDERS ---
  bunker: illus("/battlefeild.png", "Bunker defence simulation"), 
  mechInf: illus("/systeminteg1.png", "Mechanized Infantry Simulator"), 
  rocket: illus("/at.png", "Rocket Launcher Simulator"), 
  sniper: illus("/infantary.png", "Sniper Simulator"),
  carrierMortar: illus("/battlefeild.png", "Carrier Mortar Tracker Simulator"),
  radio: illus("/defineelec.png", "Radio Telephony Simulator"),
  cuas: illus("/observation1.png", "CUAS Simulator"),
  replicas: illus("/weapons.png", "Inert training replicas arranged on a display stand"),
  mortar: illus("/81.png", "81mm Mortar Firing Simulator"), // <-- Updated to 81.png
  
  // Drona has no image
  drona: { src: null, alt: "Drona Simulator — approved photograph awaited", illustrative: false } as SiteImage,
} satisfies Record<string, SiteImage>;