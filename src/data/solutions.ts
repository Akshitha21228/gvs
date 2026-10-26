// import { images, type SiteImage } from "./images";

// export type Solution = {
//   id: string;
//   title: string;
//   body: string;
//   image: SiteImage;
//   productSlugs: string[];
// };

// /** Descriptions are drawn from the activities listed in the company document. */
// export const solutions: Solution[] = [
//   {
//     id: "vr-ar-training",
//     title: "VR and AR Training",
//     body: "Design and development of Virtual Reality (VR), Augmented Reality (AR) and simulation-based combat training systems, mission rehearsal systems and immersive training solutions.",
//     image: images.bunker,
//     productSlugs: ["vr-bunker-defence-simulator", "vr-3d-terrain-simulator", "vr-sniper-simulator"],
//   },
//   {
//     id: "infantry-weapon-training",
//     title: "Infantry Weapon Training",
//     body: "Design, development and manufacture of Infantry Weapon Training Simulators, together with defence mockups, laser-based firing systems and weapon-mounted training systems.",
//     image: images.tetherless,
//     productSlugs: ["tetherless-infantry-weapon-training-simulator", "replica-weapons", "vr-rocket-launcher-simulator"],
//   },
//   {
//     id: "atgm-training",
//     title: "ATGM Training Simulation",
//     body: "Design, development and manufacture of Anti-Tank Guided Missile (ATGM) simulators.",
//     image: images.atgm,
//     productSlugs: ["atgm-ground-launcher-simulator"],
//   },
//   {
//     id: "tactical-battlefield",
//     title: "Tactical and Battlefield Simulation",
//     body: "Tactical training simulators and battlefield simulation systems, target systems and associated accessories.",
//     image: images.tank,
//     productSlugs: ["tank-troop-tactical-training-simulator", "mechanized-infantry-tactical-training-simulator", "81mm-mortar-firing-simulator", "carrier-mortar-tracker-simulator"],
//   },
//   {
//     id: "observation-equipment",
//     title: "Observation Equipment Simulation",
//     body: "Design, development and manufacture of TIIOE and LORROS simulators for observation equipment training.",
//     image: images.vrop,
//     productSlugs: ["vrop-tiioe-simulator", "lorros-simulator"],
//   },
//   {
//     id: "combat-medical",
//     title: "Combat Medical Training",
//     body: "Design and development of combat medical care simulators, including VR-based combat medical care training.",
//     image: images.medical,
//     productSlugs: ["vr-combat-medical-care-simulator"],
//   },
//   {
//     id: "defence-electronics",
//     title: "Defence Electronics",
//     body: "Development and manufacture of defence electronics, electro-optical devices, communication systems and allied military applications.",
//     image: images.electronicsLab,
//     productSlugs: ["radio-telephony-simulator"],
//   },
//   {
//     id: "sensor-surveillance",
//     title: "Sensor-Based and Surveillance Systems",
//     body: "Development and manufacture of surveillance systems, tracking systems and sensor-based systems.",
//     image: images.sa,
//     productSlugs: ["situational-awareness-system", "cuas-simulator"],
//   },
//   {
//     id: "system-integration",
//     title: "System Integration",
//     body: "Manufacture and integration of defence mockups, battlefield simulation systems and associated accessories, and system integration services for defence and simulation equipment.",
//     image: images.mechInf,
//     productSlugs: [],
//   },
//   {
//     id: "maintenance-upgrades",
//     title: "Maintenance, Repair and Upgrades",
//     body: "Training, consultancy, technical support, annual maintenance contracts (AMC), repair and upgrade services for defence and simulation equipment.",
//     image: images.radio,
//     productSlugs: [],
//   },
// ];

// /** Homepage capability cards — each links into the Solutions page. */
// export const capabilities: { title: string; solutionId: string; image: SiteImage }[] = [
//   { title: "Infantry Weapon Training Simulators", solutionId: "infantry-weapon-training", image: images.tetherless },
//   { title: "ATGM Training Simulators", solutionId: "atgm-training", image: images.atgm },
//   { title: "VR and AR Simulation", solutionId: "vr-ar-training", image: images.terrain },
//   { title: "Battlefield and Tactical Training", solutionId: "tactical-battlefield", image: images.tank },
//   { title: "Observation and Surveillance Simulators", solutionId: "observation-equipment", image: images.lorros },
//   { title: "Combat Medical Care Training", solutionId: "combat-medical", image: images.medical },
//   { title: "Defence Electronics and Sensor-Based Systems", solutionId: "defence-electronics", image: images.electronicsLab },
//   { title: "System Integration, Maintenance and Upgrades", solutionId: "system-integration", image: images.sa },
// ];
// import { images, type SiteImage } from "./images";

// export type Solution = {
//   id: string;
//   title: string;
//   body: string;
//   image: SiteImage;
//   productSlugs: string[];
// };

// export const solutions: Solution[] = [
//   {
//     id: "vr-ar-training",
//     title: "VR and AR Training",
//     body: "Design and development of Virtual Reality (VR), Augmented Reality (AR) and simulation-based combat training systems, mission rehearsal systems and immersive training solutions.",
//     image: images.bunker,
//     productSlugs: ["vr-bunker-defence-simulator", "vr-3d-terrain-simulator", "vr-sniper-simulator"],
//   },
//   {
//     id: "infantry-weapon-training",
//     title: "Infantry Weapon Training",
//     body: `Advanced Simulation Technology for Modern Defence Forces.

// Green Vision Solutions (GVS) designs, develops, and manufactures innovative Infantry Weapon Training Simulators, defence training replicas, laser-based firing systems, and weapon-mounted training technologies.

// Our solutions combine precision engineering with immersive simulation to support realistic, safe, and effective training experiences for defence and security personnel.

// Our Expertise:
// • Infantry Weapon Training Simulators: Simulation platforms designed for weapon familiarization, marksmanship training, and performance assessment in controlled environments.
// • Laser-Based Training Systems: Laser-enabled simulation solutions supporting safe firing practice, accuracy feedback, and structured training exercises.
// • Replica Weapons and Training Equipment: Purpose-designed weapon replicas and associated training equipment for realistic handling and simulator integration.
// • Virtual Reality Training Solutions: Immersive VR-based training systems supporting procedural learning, equipment familiarization, and scenario-based exercises.

// Innovation Together. Training for Tomorrow.
// GVS is committed to developing advanced simulation technologies that support training effectiveness, operational preparedness, and the evolving requirements of defence organizations.`,
//     image: images.tetherless,
//     productSlugs: ["tetherless-infantry-weapon-training-simulator", "replica-weapons", "vr-rocket-launcher-simulator"],
//   },
//   {
//     id: "atgm-training",
//     title: "ATGM Training Simulation",
//     body: "Design, development and manufacture of Anti-Tank Guided Missile (ATGM) simulators.",
//     image: images.atgm,
//     productSlugs: ["atgm-ground-launcher-simulator"],
//   },
//   {
//     id: "tactical-battlefield",
//     title: "Tactical and Battlefield Simulation",
//     body: "Tactical training simulators and battlefield simulation systems, target systems and associated accessories.",
//     image: images.tank,
//     productSlugs: ["tank-troop-tactical-training-simulator", "mechanized-infantry-tactical-training-simulator", "81mm-mortar-firing-simulator", "carrier-mortar-tracker-simulator"],
//   },
//   {
//     id: "observation-equipment",
//     title: "Observation Equipment Simulation",
//     body: "Design, development and manufacture of TIIOE and LORROS simulators for observation equipment training.",
//     image: images.vrop,
//     productSlugs: ["vrop-tiioe-simulator", "lorros-simulator"],
//   },
//   {
//     id: "combat-medical",
//     title: "Combat Medical Training",
//     body: "Design and development of combat medical care simulators, including VR-based combat medical care training.",
//     image: images.medical,
//     productSlugs: ["vr-combat-medical-care-simulator"],
//   },
//   {
//     id: "defence-electronics",
//     title: "Defence Electronics",
//     body: "Development and manufacture of defence electronics, electro-optical devices, communication systems and allied military applications.",
//     image: images.electronicsLab,
//     productSlugs: ["radio-telephony-simulator"],
//   },
//   {
//     id: "sensor-surveillance",
//     title: "Sensor-Based and Surveillance Systems",
//     body: "Development and manufacture of surveillance systems, tracking systems and sensor-based systems.",
//     image: images.sa,
//     productSlugs: ["situational-awareness-system", "cuas-simulator"],
//   },
//   {
//     id: "system-integration",
//     title: "System Integration",
//     body: "Manufacture and integration of defence mockups, battlefield simulation systems and associated accessories, and system integration services for defence and simulation equipment.",
//     image: images.mechInf,
//     productSlugs: [],
//   },
//   {
//     id: "maintenance-upgrades",
//     title: "Maintenance, Repair and Upgrades",
//     body: "Training, consultancy, technical support, annual maintenance contracts (AMC), repair and upgrade services for defence and simulation equipment.",
//     image: images.radio,
//     productSlugs: [],
//   },
// ];

// import { images, type SiteImage } from "./images";

// export type Solution = {
//   id: string;
//   title: string;
//   body: string;
//   list?: string[]; 
//   image: SiteImage | { src: string; alt: string };
//   secondImage?: { src: string; alt: string }; 
//   productSlugs: string[];
// };

// export const solutions: Solution[] = [
//   {
//     id: "vr-ar-training",
//     title: "VR and AR Training",
//     body: "Design and development of Virtual Reality (VR), Augmented Reality (AR) and simulation-based combat training systems, mission rehearsal systems and immersive training solutions.",
//     image: images.bunker,
//     productSlugs: ["vr-bunker-defence-simulator", "vr-3d-terrain-simulator", "vr-sniper-simulator"],
//   },
//   {
//     id: "infantry-weapon-training",
//     title: "Infantry Weapon Training",
//     body: `Advanced Simulation Technology for Modern Defence Forces.

// Green Vision Solutions (GVS) designs, develops, and manufactures innovative Infantry Weapon Training Simulators, defence training replicas, laser-based firing systems, and weapon-mounted training technologies.

// Our solutions combine precision engineering with immersive simulation to support realistic, safe, and effective training experiences for defence and security personnel.

// Innovation Together. Training for Tomorrow.
// GVS is committed to developing advanced simulation technologies that support training effectiveness, operational preparedness, and the evolving requirements of defence organizations.`,
//     list: [
//       "Infantry Weapon Training Simulators: Simulation platforms designed for weapon familiarization, marksmanship training, and performance assessment in controlled environments.",
//       "Laser-Based Training Systems: Laser-enabled simulation solutions supporting safe firing practice, accuracy feedback, and structured training exercises.",
//       "Replica Weapons and Training Equipment: Purpose-designed weapon replicas and associated training equipment for realistic handling and simulator integration.",
//       "Virtual Reality Training Solutions: Immersive VR-based training systems supporting procedural learning, equipment familiarization, and scenario-based exercises."
//     ],
//     image: { src: "/wep.jpg", alt: "Infantry Weapon Training" }, 
//     secondImage: { src: "/weapons.png", alt: "Collection of Infantry Weapons and Replicas" },
//     productSlugs: ["tetherless-infantry-weapon-training-simulator", "replica-weapons", "vr-rocket-launcher-simulator"],
//   },
//   {
//     id: "atgm-training",
//     title: "ATGM Training Simulation",
//     body: "Design, development and manufacture of Anti-Tank Guided Missile (ATGM) simulators.",
//     image: images.atgm,
//     productSlugs: ["atgm-ground-launcher-simulator"],
//   },
//   {
//     id: "tactical-battlefield",
//     title: "Tactical and Battlefield Simulation",
//     body: "Tactical training simulators and battlefield simulation systems, target systems and associated accessories.",
//     image: images.tank,
//     productSlugs: ["tank-troop-tactical-training-simulator", "mechanized-infantry-tactical-training-simulator", "81mm-mortar-firing-simulator", "carrier-mortar-tracker-simulator"],
//   },
//   {
//     id: "observation-equipment",
//     title: "Observation Equipment Simulation",
//     body: "Design, development and manufacture of TIIOE and LORROS simulators for observation equipment training.",
//     image: images.vrop,
//     productSlugs: ["vrop-tiioe-simulator", "lorros-simulator"],
//   },
//   {
//     id: "combat-medical",
//     title: "Combat Medical Training",
//     body: "Design and development of combat medical care simulators, including VR-based combat medical care training.",
//     image: images.medical,
//     productSlugs: ["vr-combat-medical-care-simulator"],
//   },
//   {
//     id: "defence-electronics",
//     title: "Defence Electronics",
//     body: "Development and manufacture of defence electronics, electro-optical devices, communication systems and allied military applications.",
//     image: images.electronicsLab,
//     productSlugs: ["radio-telephony-simulator"],
//   },
//   {
//     id: "sensor-surveillance",
//     title: "Sensor-Based and Surveillance Systems",
//     body: "Development and manufacture of surveillance systems, tracking systems and sensor-based systems.",
//     image: images.sa,
//     productSlugs: ["situational-awareness-system", "cuas-simulator"],
//   },
//   {
//     id: "system-integration",
//     title: "System Integration",
//     body: "Manufacture and integration of defence mockups, battlefield simulation systems and associated accessories, and system integration services for defence and simulation equipment.",
//     image: images.mechInf,
//     productSlugs: [],
//   },
//   {
//     id: "maintenance-upgrades",
//     title: "Maintenance, Repair and Upgrades",
//     body: "Training, consultancy, technical support, annual maintenance contracts (AMC), repair and upgrade services for defence and simulation equipment.",
//     image: images.radio,
//     productSlugs: [],
//   },
// ];

// /** Homepage capability cards — each links into the Solutions page. */
// export const capabilities: { title: string; solutionId: string; image: SiteImage }[] = [
//   { title: "Infantry Weapon Training Simulators", solutionId: "infantry-weapon-training", image: images.tetherless },
//   { title: "ATGM Training Simulators", solutionId: "atgm-training", image: images.atgm },
//   { title: "VR and AR Simulation", solutionId: "vr-ar-training", image: images.terrain },
//   { title: "Battlefield and Tactical Training", solutionId: "tactical-battlefield", image: images.tank },
//   { title: "Observation and Surveillance Simulators", solutionId: "observation-equipment", image: images.lorros },
//   { title: "Combat Medical Care Training", solutionId: "combat-medical", image: images.medical },
//   { title: "Defence Electronics and Sensor-Based Systems", solutionId: "defence-electronics", image: images.electronicsLab },
//   { title: "System Integration, Maintenance and Upgrades", solutionId: "system-integration", image: images.sa },
// ];
// import { images, type SiteImage } from "./images";

// export type Solution = {
//   id: string;
//   title: string;
//   body: string;
//   list?: string[]; 
//   image: SiteImage | { src: string; alt: string };
//   secondImage?: { src: string; alt: string }; 
//   productSlugs: string[];
// };

// export const solutions: Solution[] = [
//   {
//     id: "vr-ar-training",
//     title: "VR and AR Training",
//     body: `Design and development of Virtual Reality (VR), Augmented Reality (AR) and simulation-based combat training systems, mission rehearsal systems and immersive training solutions.

// GVS develops VR and AR training solutions that enable defence personnel to experience simulated operational environments and practise essential procedures in safe, controlled settings.

// Our simulation technologies can support virtual terrain exploration, bunker defence familiarization, observation exercises, and mission-oriented training scenarios, allowing trainees to engage with realistic digital environments.

// Designed to support repeatable exercises and instructor-led learning, these systems offer a flexible approach to training, helping personnel build confidence, improve coordination, and develop familiarity with challenging operational conditions.

// A VR-based training solution designed to support simulated observation, equipment familiarization, and structured marksmanship training in a controlled virtual environment.`,
//     image: { src: "/AR.png", alt: "VR and AR Training" }, 
//     secondImage: { src: "/vr.webp", alt: "VR-Based Sniper Simulator" },
//     productSlugs: ["vr-bunker-defence-simulator", "vr-3d-terrain-simulator", "vr-sniper-simulator"],
//   },
//   {
//     id: "infantry-weapon-training",
//     title: "Infantry Weapon Training",
//     body: `Advanced Simulation Technology for Modern Defence Forces.

// Green Vision Solutions (GVS) designs, develops, and manufactures innovative Infantry Weapon Training Simulators, defence training replicas, laser-based firing systems, and weapon-mounted training technologies.

// Our solutions combine precision engineering with immersive simulation to support realistic, safe, and effective training experiences for defence and security personnel.

// Innovation Together. Training for Tomorrow.
// GVS is committed to developing advanced simulation technologies that support training effectiveness, operational preparedness, and the evolving requirements of defence organizations.`,
//     list: [
//       "Infantry Weapon Training Simulators: Simulation platforms designed for weapon familiarization, marksmanship training, and performance assessment in controlled environments.",
//       "Laser-Based Training Systems: Laser-enabled simulation solutions supporting safe firing practice, accuracy feedback, and structured training exercises.",
//       "Replica Weapons and Training Equipment: Purpose-designed weapon replicas and associated training equipment for realistic handling and simulator integration.",
//       "Virtual Reality Training Solutions: Immersive VR-based training systems supporting procedural learning, equipment familiarization, and scenario-based exercises."
//     ],
//     image: { src: "/wep.jpg", alt: "Infantry Weapon Training" }, 
//     secondImage: { src: "/weapons.png", alt: "Collection of Infantry Weapons and Replicas" },
//     productSlugs: ["tetherless-infantry-weapon-training-simulator", "replica-weapons", "vr-rocket-launcher-simulator"],
//   },
//   {
//     id: "atgm-training",
//     title: "ATGM Training Simulation",
//     body: `Advanced Simulation Technology for Precision Training and Operational Readiness.

// Green Vision Solutions (GVS) specializes in the design, development, and manufacture of Anti-Tank Guided Missile (ATGM) training simulators, delivering realistic, immersive, and technology-driven training solutions for modern defence forces.

// Our simulation systems are designed to support operator familiarization, launcher-handling proficiency, target observation, and simulated engagement procedures within a safe, controlled training environment.

// By integrating advanced simulation technologies, realistic training interfaces, and structured performance assessment, GVS supports defence personnel in developing confidence, procedural accuracy, and operational preparedness through simulation-based training.

// Advanced Training Through Intelligent Simulation

// GVS develops ATGM training solutions that replicate key aspects of launcher operation and simulated engagement scenarios, enabling trainees to practise essential procedures in a controlled environment.

// Our simulators support repeatable training exercises, instructor-led evaluation, and progressive skill development, helping personnel improve equipment familiarity, coordination, and decision-making.

// Designed with flexibility and practical training requirements in mind, our systems provide a structured approach to developing operator proficiency while reducing dependence on live training resources.`,
//     image: { src: "/Atgm.webp", alt: "ATGM Ground Launcher Simulator" }, 
//     secondImage: { src: "/atgm1.jpg", alt: "ATGM Simulator in action" },
//     productSlugs: ["atgm-ground-launcher-simulator"],
//   },
//   {
//     id: "tactical-battlefield",
//     title: "Tactical & Battlefield Simulation",
//     body: `Advanced Tactical Training Solutions for Modern Defence Operations.

// Green Vision Solutions (GVS) specializes in the design, development, and manufacture of advanced Tactical and Battlefield Training Simulators for modern defence forces.

// Our simulation solutions are designed to recreate complex operational environments, enabling military personnel to participate in realistic, scenario-based training exercises within safe and controlled settings.

// By integrating intelligent simulation technologies, interactive battlefield environments, and mission-oriented training systems, GVS supports tactical decision-making, team coordination, situational awareness, and operational preparedness across different levels of military training.

// Integrated Tactical and Battlefield Training Systems

// GVS develops tactical simulation systems designed to support individual, crew-level, and collective training across armoured, mechanized infantry, and mortar-related operations.

// Our training platforms provide simulated battlefield environments where personnel can practise operational procedures, communication, coordination, and decision-making through structured exercises.

// From tank troop training to mechanized infantry company-level simulations, our solutions support repeatable training scenarios, instructor-led evaluation, and mission rehearsal activities.

// With a focus on engineering innovation and practical training requirements, GVS aims to deliver adaptable simulation technologies that help defence organizations strengthen training effectiveness and operational readiness.`,
//     image: { src: "/ta.webp", alt: "Tactical Simulation" }, 
//     secondImage: { src: "/bo.webp", alt: "Battlefield Training" },
//     productSlugs: [
//       "tank-troop-tactical-training-simulator", 
//       "mechanized-infantry-tactical-training-simulator", 
//       "carrier-mortar-tracker-simulator",
//       "81mm-mortar-firing-simulator"
//     ],
//   },
//   {
//     id: "observation-equipment",
//     title: "Observation Equipment Simulation",
//     body: `Advanced Simulation Solutions for Surveillance and Observation Training.

// Green Vision Solutions (GVS) specializes in the design, development, and manufacture of TIIOE and LORROS simulators, delivering realistic training solutions for military observation and surveillance systems.

// Our simulators support equipment familiarization, target observation, terrain assessment, and situational awareness through safe, controlled, and technology-driven training environments.`,
//     image: { src: "/observation.png", alt: "Observation Equipment Simulation" },
//     productSlugs: ["vrop-tiioe-simulator", "lorros-simulator"],
//   },
//   {
//     id: "combat-medical",
//     title: "Combat Medical Training",
//     body: `Immersive VR-Based Simulation for Battlefield Medical Readiness.

// Green Vision Solutions (GVS) specializes in the design and development of advanced Combat Medical Care Simulators, including immersive Virtual Reality (VR) training solutions for defence personnel.

// Our simulation systems provide realistic battlefield medical scenarios, enabling trainees to practise emergency response, casualty assessment, first aid, and life-saving procedures in safe, controlled virtual environments, enhancing medical preparedness and emergency response capabilities.`,
//     image: { src: "/medical.png", alt: "Combat Medical Training" },
//     productSlugs: ["vr-combat-medical-care-simulator"],
//   },
//   {
//     id: "defence-electronics",
//     title: "Defence Electronics",
//     body: `Advanced Electronic and Communication Solutions for Modern Defence.

// Green Vision Solutions (GVS) specializes in the design, development, and manufacture of defence electronics, electro-optical devices, communication systems, and sensor-based technologies.

// Our solutions support reliable military communication, surveillance, situational awareness, and system integration, enhancing operational efficiency and defence readiness.`,
//     image: images.electronicsLab,
//     productSlugs: ["radio-telephony-simulator"],
//   },
//   {
//     id: "sensor-surveillance",
//     title: "Sensor-Based and Surveillance Systems",
//     body: "Development and manufacture of surveillance systems, tracking systems and sensor-based systems.",
//     image: images.sa,
//     productSlugs: ["situational-awareness-system", "cuas-simulator"],
//   },
//   {
//     id: "system-integration",
//     title: "System Integration",
//     body: `Integrated Defence Solutions for Advanced Training and Simulation.

// Green Vision Solutions (GVS) specializes in the manufacture, integration, and deployment of defence mockups, battlefield simulation systems, and associated training equipment.

// Our system integration services focus on combining advanced technologies, electronic components, and simulation platforms to deliver reliable, efficient, and customized solutions that support modern defence training and operational requirements.`,
//     image: { src: "/systeminteg.png", alt: "System Integration" },
//     productSlugs: [],
//   },
//   {
//     id: "maintenance-upgrades",
//     title: "Maintenance, Repair and Upgrades",
//     body: "Training, consultancy, technical support, annual maintenance contracts (AMC), repair and upgrade services for defence and simulation equipment.",
//     image: images.radio,
//     productSlugs: [],
//   },
// ];

// export const capabilities: { title: string; solutionId: string; image: SiteImage }[] = [
//   { title: "Infantry Weapon Training Simulators", solutionId: "infantry-weapon-training", image: images.tetherless },
//   { title: "ATGM Training Simulators", solutionId: "atgm-training", image: images.atgm },
//   { title: "VR and AR Simulation", solutionId: "vr-ar-training", image: images.terrain },
//   { title: "Battlefield and Tactical Training", solutionId: "tactical-battlefield", image: images.tank },
//   { title: "Observation and Surveillance Simulators", solutionId: "observation-equipment", image: images.lorros },
//   { title: "Combat Medical Care Training", solutionId: "combat-medical", image: images.medical },
//   { title: "Defence Electronics and Sensor-Based Systems", solutionId: "defence-electronics", image: images.electronicsLab },
//   { title: "System Integration, Maintenance and Upgrades", solutionId: "system-integration", image: images.sa },
// ];
// import { images, type SiteImage } from "./images";

// export type Solution = {
//   id: string;
//   title: string;
//   body: string;
//   customExpertise?: string;
//   image: SiteImage | { src: string; alt: string; illustrative?: boolean };
//   secondImage?: SiteImage | { src: string; alt: string; illustrative?: boolean };
//   productSlugs: string[];
// };

// export const solutions: Solution[] = [
//   {
//     id: "vr-ar-training",
//     title: "VR and AR Training",
//     body: `Design and development of Virtual Reality (VR), Augmented Reality (AR) and simulation-based combat training systems, mission rehearsal systems and immersive training solutions.`,
//     customExpertise: "GVS specialises in VR-Based Combat Training Simulators, AR Training Applications, 3D Terrain Simulation, and Immersive Mission Rehearsal Systems. Our solutions combine interactive virtual environments, real-time simulation, and advanced visualisation technologies to support safe, engaging, and repeatable training experiences.",
//     image: { src: "/AR.png", alt: "VR and AR Training", illustrative: true },
//     secondImage: { src: "/vr.webp", alt: "VR-Based Sniper Simulator", illustrative: true },
//     productSlugs: ["vr-bunker-defence-simulator", "vr-3d-terrain-simulator", "vr-sniper-simulator"],
//   },
//   {
//     id: "infantry-weapon-training",
//     title: "Infantry Weapon Training",
//     body: `Advanced Simulation Technology for Modern Defence Forces.

// Green Vision Solutions (GVS) designs, develops, and manufactures innovative Infantry Weapon Training Simulators, defence training replicas, laser-based firing systems, and weapon-mounted training technologies.

// Our solutions combine precision engineering with immersive simulation to support realistic, safe, and effective training experiences for defence and security personnel.`,
//     customExpertise: "GVS specialises in Infantry Weapon Training Simulators, Laser-Based Training Systems, Replica Weapons, and Virtual Reality Training Solutions. Our capabilities combine precision engineering, sensor-based technologies, and immersive simulation to deliver realistic weapon familiarisation, marksmanship practice, and interactive training experiences. These solutions support safe, effective skill development and performance assessment for defence and security personnel.",
//     image: { src: "/wep.jpg", alt: "Infantry Weapon Training", illustrative: true },
//     secondImage: { src: "/weapons.png", alt: "Collection of Infantry Weapons and Replicas", illustrative: true },
//     productSlugs: ["tetherless-infantry-weapon-training-simulator", "replica-weapons", "vr-rocket-launcher-simulator"],
//   },
//   {
//     id: "atgm-training",
//     title: "ATGM Training Simulation",
//     body: `Green Vision Solutions (GVS) develops Anti-Tank Guided Missile (ATGM) Training Simulators that combine realistic launcher mockups, digital targeting systems, and interactive simulation technologies to support safe and effective operator training.`,
//     customExpertise: "GVS specialises in ATGM Ground Launcher Simulators, Digital Targeting Interfaces, Sensor-Based Tracking, and Virtual Battlefield Simulation. Our solutions enable realistic equipment familiarisation, targeting practice, real-time feedback, and performance assessment in controlled training environments.",
//     image: { src: "/Atgm.webp", alt: "ATGM Ground Launcher Simulator", illustrative: true },
//     secondImage: { src: "/atgm1.jpg", alt: "ATGM Simulator in action", illustrative: true },
//     productSlugs: ["atgm-ground-launcher-simulator"],
//   },
//   {
//     id: "tactical-battlefield",
//     title: "Tactical & Battlefield Simulation",
//     body: `Green Vision Solutions (GVS) develops Tactical and Battlefield Simulation Systems designed to enhance situational awareness, tactical coordination, decision-making, and operational readiness through realistic virtual training environments.`,
//     customExpertise: "GVS specialises in Tank Troop Tactical Training Simulators, Mechanized Infantry Tactical Simulators, Battlefield Simulation Systems, and Mission Rehearsal Solutions. Our technologies integrate interactive battlefield scenarios, digital terrain visualisation, and real-time performance assessment to support coordinated and effective tactical training.",
//     image: { src: "/ta.webp", alt: "Tactical Simulation", illustrative: true },
//     secondImage: { src: "/bo.webp", alt: "Battlefield Training", illustrative: true },
//     productSlugs: [
//       "tank-troop-tactical-training-simulator",
//       "mechanized-infantry-tactical-training-simulator",
//       "carrier-mortar-tracker-simulator",
//       "81mm-mortar-firing-simulator"
//     ],
//   },
//   {
//     id: "observation-equipment",
//     title: "Observation Equipment Simulation",
//     body: `Green Vision Solutions (GVS) develops Observation Equipment Simulators that replicate surveillance and observation systems, enabling realistic equipment familiarisation, target identification, and situational awareness training.`,
//     customExpertise: "GVS specialises in Thermal Imaging Integrated Observation Equipment (TIIOE) Simulators, Long Range Reconnaissance and Observation Systems (LORROS) Simulators, and VR-Based Observation Post Training Systems. Our solutions combine electro-optical simulation, digital terrain visualisation, and interactive training scenarios to improve observation proficiency and operator readiness.",
//     image: { src: "/observation.png", alt: "Observation Equipment Simulation", illustrative: true },
//     productSlugs: ["vrop-tiioe-simulator", "lorros-simulator"],
//   },
//   {
//     id: "combat-medical",
//     title: "Combat Medical Training",
//     body: `Green Vision Solutions (GVS) develops Combat Medical Training Simulators that provide realistic virtual environments for practising emergency medical procedures, casualty assessment, and battlefield medical response.`,
//     customExpertise: "GVS specialises in VR-Based Combat Medical Care Simulators, Virtual Casualty Assessment, Emergency Response Training, and Interactive Medical Scenarios. Our solutions combine immersive simulation, realistic medical situations, and interactive learning to support decision-making, procedural skills, and medical preparedness in controlled training environments.",
//     image: { src: "/medical.png", alt: "Combat Medical Training", illustrative: true },
//     productSlugs: ["vr-combat-medical-care-simulator"],
//   },
//   {
//     id: "defence-electronics",
//     title: "Defence Electronics",
//     body: `Green Vision Solutions (GVS) develops Defence Electronics, Electro-Optical Devices, Communication Systems, and Sensor-Based Technologies to support reliable performance and modern defence applications.`,
//     customExpertise: "GVS specialises in Electronic System Integration, Military Communication Technologies, Electro-Optical Systems, and Sensor-Based Solutions, combining precision engineering with advanced technology to meet evolving defence requirements.",
//     image: images.electronicsLab,
//     productSlugs: ["radio-telephony-simulator"],
//   },
//   {
//     id: "sensor-surveillance",
//     title: "Sensor-Based and Surveillance Systems",
//     body: "Development and manufacture of surveillance systems, tracking systems and sensor-based systems.",
//     image: images.sa,
//     productSlugs: ["situational-awareness-system", "cuas-simulator"],
//   },
//   {
//     id: "system-integration",
//     title: "System Integration",
//     body: `Green Vision Solutions (GVS) provides System Integration and Engineering Solutions for defence training simulators, electronic equipment, and battlefield simulation systems, ensuring seamless functionality and reliable performance.`,
//     customExpertise: "GVS specialises in Defence Simulator Integration, Electronic and Sensor System Integration, Hardware–Software Integration, Defence Mockups, Testing, Maintenance, and System Upgrades. Our expertise combines mechanical, electronic, and software technologies to deliver adaptable and efficient defence training solutions.",
//     image: { src: "/systeminteg.png", alt: "System Integration", illustrative: true },
//     productSlugs: [],
//   },
//   {
//     id: "maintenance-upgrades",
//     title: "Maintenance, Repair and Upgrades",
//     body: "Training, consultancy, technical support, annual maintenance contracts (AMC), repair and upgrade services for defence and simulation equipment.",
//     image: images.radio,
//     productSlugs: [],
//   },
// ];

// export const capabilities: { title: string; solutionId: string; image: SiteImage }[] = [
//   { title: "Infantry Weapon Training Simulators", solutionId: "infantry-weapon-training", image: images.tetherless },
//   { title: "ATGM Training Simulators", solutionId: "atgm-training", image: images.atgm },
//   { title: "VR and AR Simulation", solutionId: "vr-ar-training", image: images.terrain },
//   { title: "Battlefield and Tactical Training", solutionId: "tactical-battlefield", image: images.tank },
//   { title: "Observation and Surveillance Simulators", solutionId: "observation-equipment", image: images.lorros },
//   { title: "Combat Medical Care Training", solutionId: "combat-medical", image: images.medical },
//   { title: "Defence Electronics and Sensor-Based Systems", solutionId: "defence-electronics", image: images.electronicsLab },
//   { title: "System Integration, Maintenance and Upgrades", solutionId: "system-integration", image: images.sa },
// ];
// import { images, type SiteImage } from "./images";

// export type Solution = {
//   id: string;
//   title: string;
//   body: string;
//   customExpertise?: string;
//   image: SiteImage | { src: string; alt: string; illustrative?: boolean };
//   secondImage?: SiteImage | { src: string; alt: string; illustrative?: boolean };
//   productSlugs: string[];
// };

// export const solutions: Solution[] = [
//   {
//     id: "vr-ar-training",
//     title: "VR and AR Training",
//     body: `Design and development of Virtual Reality (VR), Augmented Reality (AR) and simulation-based combat training systems, mission rehearsal systems and immersive training solutions.`,
//     customExpertise: "GVS specialises in VR-Based Combat Training Simulators, AR Training Applications, 3D Terrain Simulation, and Immersive Mission Rehearsal Systems. Our solutions combine interactive virtual environments, real-time simulation, and advanced visualisation technologies to support safe, engaging, and repeatable training experiences.",
//     image: { src: "/AR.png", alt: "VR and AR Training", illustrative: true },
//     secondImage: { src: "/vr.webp", alt: "VR-Based Sniper Simulator", illustrative: true },
//     productSlugs: ["vr-bunker-defence-simulator", "vr-3d-terrain-simulator", "vr-sniper-simulator"],
//   },
//   {
//     id: "infantry-weapon-training",
//     title: "Infantry Weapon Training",
//     body: `Advanced Simulation Technology for Modern Defence Forces.

// Green Vision Solutions (GVS) designs, develops, and manufactures innovative Infantry Weapon Training Simulators, defence training replicas, laser-based firing systems, and weapon-mounted training technologies.

// Our solutions combine precision engineering with immersive simulation to support realistic, safe, and effective training experiences for defence and security personnel.`,
//     customExpertise: "GVS specialises in Infantry Weapon Training Simulators, Laser-Based Training Systems, Replica Weapons, and Virtual Reality Training Solutions. Our capabilities combine precision engineering, sensor-based technologies, and immersive simulation to deliver realistic weapon familiarisation, marksmanship practice, and interactive training experiences. These solutions support safe, effective skill development and performance assessment for defence and security personnel.",
//     image: { src: "/infantary.png", alt: "Infantry Weapon Training", illustrative: true }, // <-- FIXED TO MATCH HOME PAGE
//     secondImage: { src: "/weapons.png", alt: "Collection of Infantry Weapons and Replicas", illustrative: true },
//     productSlugs: ["tetherless-infantry-weapon-training-simulator", "replica-weapons", "vr-rocket-launcher-simulator"],
//   },
//   {
//     id: "atgm-training",
//     title: "ATGM Training Simulation",
//     body: `Green Vision Solutions (GVS) develops Anti-Tank Guided Missile (ATGM) Training Simulators that combine realistic launcher mockups, digital targeting systems, and interactive simulation technologies to support safe and effective operator training.`,
//     customExpertise: "GVS specialises in ATGM Ground Launcher Simulators, Digital Targeting Interfaces, Sensor-Based Tracking, and Virtual Battlefield Simulation. Our solutions enable realistic equipment familiarisation, targeting practice, real-time feedback, and performance assessment in controlled training environments.",
//     image: { src: "/at.png", alt: "ATGM Ground Launcher Simulator", illustrative: true },
//     secondImage: { src: "/atgm1.jpg", alt: "ATGM Simulator in action", illustrative: true },
//     productSlugs: ["atgm-ground-launcher-simulator"],
//   },
//   {
//     id: "tactical-battlefield",
//     title: "Tactical & Battlefield Simulation",
//     body: `Green Vision Solutions (GVS) develops Tactical and Battlefield Simulation Systems designed to enhance situational awareness, tactical coordination, decision-making, and operational readiness through realistic virtual training environments.`,
//     customExpertise: "GVS specialises in Tank Troop Tactical Training Simulators, Mechanized Infantry Tactical Simulators, Battlefield Simulation Systems, and Mission Rehearsal Solutions. Our technologies integrate interactive battlefield scenarios, digital terrain visualisation, and real-time performance assessment to support coordinated and effective tactical training.",
//     image: { src: "/battlefeild.png", alt: "Tactical Simulation", illustrative: true },
//     secondImage: { src: "/bo.webp", alt: "Battlefield Training", illustrative: true },
//     productSlugs: [
//       "tank-troop-tactical-training-simulator",
//       "mechanized-infantry-tactical-training-simulator",
//       "carrier-mortar-tracker-simulator",
//       "81mm-mortar-firing-simulator"
//     ],
//   },
//   {
//     id: "observation-equipment",
//     title: "Observation Equipment Simulation",
//     body: `Green Vision Solutions (GVS) develops Observation Equipment Simulators that replicate surveillance and observation systems, enabling realistic equipment familiarisation, target identification, and situational awareness training.`,
//     customExpertise: "GVS specialises in Thermal Imaging Integrated Observation Equipment (TIIOE) Simulators, Long Range Reconnaissance and Observation Systems (LORROS) Simulators, and VR-Based Observation Post Training Systems. Our solutions combine electro-optical simulation, digital terrain visualisation, and interactive training scenarios to improve observation proficiency and operator readiness.",
//     image: { src: "/observation1.png", alt: "Observation Equipment Simulation", illustrative: true },
//     productSlugs: ["vrop-tiioe-simulator", "lorros-simulator"],
//   },
//   {
//     id: "combat-medical",
//     title: "Combat Medical Training",
//     body: `Green Vision Solutions (GVS) develops Combat Medical Training Simulators that provide realistic virtual environments for practising emergency medical procedures, casualty assessment, and battlefield medical response.`,
//     customExpertise: "GVS specialises in VR-Based Combat Medical Care Simulators, Virtual Casualty Assessment, Emergency Response Training, and Interactive Medical Scenarios. Our solutions combine immersive simulation, realistic medical situations, and interactive learning to support decision-making, procedural skills, and medical preparedness in controlled training environments.",
//     image: { src: "/medical1.png", alt: "Combat Medical Training", illustrative: true },
//     productSlugs: ["vr-combat-medical-care-simulator"],
//   },
//   {
//     id: "defence-electronics",
//     title: "Defence Electronics",
//     body: `Green Vision Solutions (GVS) develops Defence Electronics, Electro-Optical Devices, Communication Systems, and Sensor-Based Technologies to support reliable performance and modern defence applications.`,
//     customExpertise: "GVS specialises in Electronic System Integration, Military Communication Technologies, Electro-Optical Systems, and Sensor-Based Solutions, combining precision engineering with advanced technology to meet evolving defence requirements.",
//     image: { src: "/defineelec.png", alt: "Defence Electronics", illustrative: true },
//     productSlugs: ["radio-telephony-simulator"],
//   },
//   {
//     id: "sensor-surveillance",
//     title: "Sensor-Based and Surveillance Systems",
//     body: "Development and manufacture of surveillance systems, tracking systems and sensor-based systems.",
//     image: images.sa,
//     productSlugs: ["situational-awareness-system", "cuas-simulator"],
//   },
//   {
//     id: "system-integration",
//     title: "System Integration",
//     body: `Green Vision Solutions (GVS) provides System Integration and Engineering Solutions for defence training simulators, electronic equipment, and battlefield simulation systems, ensuring seamless functionality and reliable performance.`,
//     customExpertise: "GVS specialises in Defence Simulator Integration, Electronic and Sensor System Integration, Hardware–Software Integration, Defence Mockups, Testing, Maintenance, and System Upgrades. Our expertise combines mechanical, electronic, and software technologies to deliver adaptable and efficient defence training solutions.",
//     image: { src: "/systeminteg1.png", alt: "System Integration", illustrative: true },
//     productSlugs: [],
//   },
//   {
//     id: "maintenance-upgrades",
//     title: "Maintenance, Repair and Upgrades",
//     body: "Training, consultancy, technical support, annual maintenance contracts (AMC), repair and upgrade services for defence and simulation equipment.",
//     image: images.radio,
//     productSlugs: [],
//   },
// ];

// export const capabilities: { title: string; solutionId: string; image: SiteImage }[] = [
//   { title: "Infantry Weapon Training Simulators", solutionId: "infantry-weapon-training", image: images.tetherless },
//   { title: "ATGM Training Simulators", solutionId: "atgm-training", image: images.atgm },
//   { title: "VR and AR Simulation", solutionId: "vr-ar-training", image: images.terrain },
//   { title: "Battlefield and Tactical Training", solutionId: "tactical-battlefield", image: images.tank },
//   { title: "Observation and Surveillance Simulators", solutionId: "observation-equipment", image: images.lorros },
//   { title: "Combat Medical Care Training", solutionId: "combat-medical", image: images.medical },
//   { title: "Defence Electronics and Sensor-Based Systems", solutionId: "defence-electronics", image: images.electronicsLab },
//   { title: "System Integration, Maintenance and Upgrades", solutionId: "system-integration", image: images.sa },
// ];
import { images, type SiteImage } from "./images";

export type Solution = {
  id: string;
  title: string;
  body: string;
  customExpertise?: string;
  image: SiteImage | { src: string; alt: string; illustrative?: boolean };
  secondImage?: SiteImage | { src: string; alt: string; illustrative?: boolean };
  productSlugs: string[];
};

export const solutions: Solution[] = [
  {
    id: "vr-ar-training",
    title: "VR and AR Training",
    body: `Design and development of Virtual Reality (VR), Augmented Reality (AR) and simulation-based combat training systems, mission rehearsal systems and immersive training solutions.`,
    customExpertise: "GVS specialises in VR-Based Combat Training Simulators, AR Training Applications, 3D Terrain Simulation, and Immersive Mission Rehearsal Systems. Our solutions combine interactive virtual environments, real-time simulation, and advanced visualisation technologies to support safe, engaging, and repeatable training experiences.",
    image: { src: "/AR.png", alt: "VR and AR Training", illustrative: true },
    secondImage: { src: "/vr.webp", alt: "VR-Based Sniper Simulator", illustrative: true },
    productSlugs: ["vr-bunker-defence-simulator", "vr-3d-terrain-simulator", "vr-sniper-simulator"],
  },
  {
    id: "infantry-weapon-training",
    title: "Infantry Weapon Training",
    body: `Green Vision Solutions (GVS) develops innovative infantry weapon training solutions that combine precision engineering, digital simulation, and interactive technologies.

Our systems support safe, realistic, and effective training, helping defence and security personnel enhance their technical skills, accuracy, and operational preparedness.`,
    customExpertise: "GVS specialises in Infantry Weapon Training Simulators, Laser-Based Training Systems, Replica Weapons, and Virtual Reality Training Solutions. Our capabilities combine precision engineering, sensor-based technologies, and immersive simulation to deliver realistic weapon familiarisation, marksmanship practice, and interactive training experiences. These solutions support safe, effective skill development and performance assessment for defence and security personnel.",
    image: { src: "/infantary.png", alt: "Infantry Weapon Training", illustrative: true }, 
    secondImage: { src: "/weapons.png", alt: "Collection of Infantry Weapons and Replicas", illustrative: true },
    productSlugs: ["tetherless-infantry-weapon-training-simulator", "replica-weapons", "vr-rocket-launcher-simulator"],
  },
  {
    id: "atgm-training",
    title: "ATGM Training Simulation",
    body: `Green Vision Solutions (GVS) develops Anti-Tank Guided Missile (ATGM) Training Simulators that combine realistic launcher mockups, digital targeting systems, and interactive simulation technologies to support safe and effective operator training.`,
    customExpertise: "GVS specialises in ATGM Ground Launcher Simulators, Digital Targeting Interfaces, Sensor-Based Tracking, and Virtual Battlefield Simulation. Our solutions enable realistic equipment familiarisation, targeting practice, real-time feedback, and performance assessment in controlled training environments.",
    image: { src: "/at.png", alt: "ATGM Ground Launcher Simulator", illustrative: true },
    secondImage: { src: "/atgm1.jpg", alt: "ATGM Simulator in action", illustrative: true },
    productSlugs: ["atgm-ground-launcher-simulator"],
  },
  {
    id: "tactical-battlefield",
    title: "Tactical & Battlefield Simulation",
    body: `Green Vision Solutions (GVS) develops Tactical and Battlefield Simulation Systems designed to enhance situational awareness, tactical coordination, decision-making, and operational readiness through realistic virtual training environments.`,
    customExpertise: "GVS specialises in Tank Troop Tactical Training Simulators, Mechanized Infantry Tactical Simulators, Battlefield Simulation Systems, and Mission Rehearsal Solutions. Our technologies integrate interactive battlefield scenarios, digital terrain visualisation, and real-time performance assessment to support coordinated and effective tactical training.",
    image: { src: "/battlefeild.png", alt: "Tactical Simulation", illustrative: true },
    secondImage: { src: "/bo.webp", alt: "Battlefield Training", illustrative: true },
    productSlugs: [
      "tank-troop-tactical-training-simulator",
      "mechanized-infantry-tactical-training-simulator",
      "carrier-mortar-tracker-simulator",
      "81mm-mortar-firing-simulator"
    ],
  },
  {
    id: "observation-equipment",
    title: "Observation Equipment Simulation",
    body: `Green Vision Solutions (GVS) develops Observation Equipment Simulators that replicate surveillance and observation systems, enabling realistic equipment familiarisation, target identification, and situational awareness training.`,
    customExpertise: "GVS specialises in Thermal Imaging Integrated Observation Equipment (TIIOE) Simulators, Long Range Reconnaissance and Observation Systems (LORROS) Simulators, and VR-Based Observation Post Training Systems. Our solutions combine electro-optical simulation, digital terrain visualisation, and interactive training scenarios to improve observation proficiency and operator readiness.",
    image: { src: "/observation1.png", alt: "Observation Equipment Simulation", illustrative: true },
    productSlugs: ["vrop-tiioe-simulator", "lorros-simulator"],
  },
  {
    id: "combat-medical",
    title: "Combat Medical Training",
    body: `Green Vision Solutions (GVS) develops Combat Medical Training Simulators that provide realistic virtual environments for practising emergency medical procedures, casualty assessment, and battlefield medical response.`,
    customExpertise: "GVS specialises in VR-Based Combat Medical Care Simulators, Virtual Casualty Assessment, Emergency Response Training, and Interactive Medical Scenarios. Our solutions combine immersive simulation, realistic medical situations, and interactive learning to support decision-making, procedural skills, and medical preparedness in controlled training environments.",
    image: { src: "/medical1.png", alt: "Combat Medical Training", illustrative: true },
    productSlugs: ["vr-combat-medical-care-simulator"],
  },
  {
    id: "defence-electronics",
    title: "Defence Electronics",
    body: `Green Vision Solutions (GVS) develops Defence Electronics, Electro-Optical Devices, Communication Systems, and Sensor-Based Technologies to support reliable performance and modern defence applications.`,
    customExpertise: "GVS specialises in Electronic System Integration, Military Communication Technologies, Electro-Optical Systems, and Sensor-Based Solutions, combining precision engineering with advanced technology to meet evolving defence requirements.",
    image: { src: "/defineelec.png", alt: "Defence Electronics", illustrative: true },
    productSlugs: ["radio-telephony-simulator"],
  },
  {
    id: "sensor-surveillance",
    title: "Sensor-Based and Surveillance Systems",
    body: "Development and manufacture of surveillance systems, tracking systems and sensor-based systems.",
    image: images.sa,
    productSlugs: ["situational-awareness-system", "cuas-simulator"],
  },
  {
    id: "system-integration",
    title: "System Integration",
    body: `Green Vision Solutions (GVS) provides System Integration and Engineering Solutions for defence training simulators, electronic equipment, and battlefield simulation systems, ensuring seamless functionality and reliable performance.`,
    customExpertise: "GVS specialises in Defence Simulator Integration, Electronic and System Integration, Hardware–Software Integration, Defence Mockups, Testing, Maintenance, and System Upgrades. Our expertise combines mechanical, electronic, and software technologies to deliver adaptable and efficient defence training solutions.",
    image: { src: "/systeminteg1.png", alt: "System Integration", illustrative: true },
    productSlugs: [],
  },
  {
    id: "maintenance-upgrades",
    title: "Maintenance, Repair and Upgrades",
    body: "Training, consultancy, technical support, annual maintenance contracts (AMC), repair and upgrade services for defence and simulation equipment.",
    image: images.radio,
    productSlugs: [],
  },
];

export const capabilities: { title: string; description?: string; solutionId: string; image: SiteImage | { src: string; alt: string; illustrative?: boolean } }[] = [
  { title: "Infantry Weapon Training Simulators", description: "Advanced Simulation Technology for Modern Defence Forces.", solutionId: "infantry-weapon-training", image: { src: "/infantary.png", alt: "Infantry", illustrative: true } },
  { title: "ATGM Training Simulators", description: "Anti-Tank Guided Missile Training Simulators for safe and effective operator training.", solutionId: "atgm-training", image: { src: "/at.png", alt: "ATGM", illustrative: true } },
  { title: "VR and AR Simulation", solutionId: "vr-ar-training", image: images.terrain },
  { title: "Battlefield and Tactical Training", solutionId: "tactical-battlefield", image: images.tank },
  { title: "Observation and Surveillance Simulators", solutionId: "observation-equipment", image: images.lorros },
  { title: "Combat Medical Care Training", solutionId: "combat-medical", image: images.medical },
  { title: "Defence Electronics and Sensor-Based Systems", solutionId: "defence-electronics", image: images.electronicsLab },
  { title: "System Integration, Maintenance and Upgrades", solutionId: "system-integration", image: images.sa },
];