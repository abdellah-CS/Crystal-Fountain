import type { TNavLink, TService, TCategory, TMaterial } from "../types";

import {
  bassin,
  piscine,
  waterJet,
  espaceVert,
  pergola,
  fakeStone,
  classique,
  seche,
  cybernetique,
  musical,
  stele,
  fresque,
  lame,
  mur,
  aquaNeige1,
  aquaNeige3,
  aquaNeige4,
  calis1,
  calis2,
  calis3,
  cascade4,
  cascade5,
  cascade6,
  comet1,
  comet2,
  comet3,
  crown3,
  crown4,
  crown5,
  eventail1,
  eventail2,
  geiser1,
  placetteKrimBelkacem1,
  geiser2,
  jumping1,
  jumping2,
  lame1,
  lame2,
  lame3,
  marsaElKbir1,
  marsaElKbir2,
  cascade,
  lava1,
  lava2,
  mur1,
  mur2,
  mur3,
  nailZakaria1,
  nailZakaria2,
  pulverisation1,
  pulverisation2,
  rotatif1,
  rotatif2,
  sphere1,
  sphere2,
  sphere3,
  spatul1,
  spatul2,
  volcan1,
  volcan2,
  jardinNovembreBiskra1,
  waterboy1,
  waterboy2,
  waterboy4,
  waterboy5,
  willow1,
  willow2,
  willow3,
  ainTimouchent1,
  projecteur1,
  aeroportOran1,
  aeroportOran2,
  projecteur2,
  projecteur4,
  projecteur5,
  jumping3,
  comet4,
  chlef1,
  chlef2,
  saadan1,
  saadan2,
  ghardaia1,
  saadan3,
  elBiar1,
  elBiar2,
  elTarf1,
  elTarf2,
  elTarf3,
  marine1,
  elTarf4,
  elTarf5,
  frontDeMer1,
  quran1,
  frontDeMer2,
  frontDeMer3,
  frontDeMer4,
  gareZeralda1,
  apcHssessna1,
  apcHssessna2,
  apcHssessna3,
  apcHssessna4,
  placetteNovembreBiskra1,
  placetteNovembreBiskra2,
  sidiBelAbess1,
  sidiBelAbess2,
  sidiBelAbess3,
  sidiBelAbess4,
  sortieTelemcen1,
  sortieTelemcen2,
  sortieTelemcen3,
  sortieTelemcen4,
  grandeMosquee1,
  grandeMosquee2,
  grandeMosquee3,
  grandeMosquee4,
  grandePoste1,
  hotelMeridian1,
  hotelMeridian2,
  cascadeGhardaia1,
  hotelMeridian3,
  instituteBordjelkiffan1,
  instituteBordjelkiffan2,
  madania1,
  madania2,
  madania3,
  magheniaTelemcen1,
  mascara1,
  mascara2,
  mascara3,
  mascara4,
  mascara5,
  mascara6,
  mascara7,
  medea1,
  medea2,
  medea3,
  ministereReligieux1,
  ministereReligieux2,
  ministereReligieux3,
  mostaganem1,
  mostaganem2,
  mostaganem3,
  mostaganem4,
  mostaland1,
  naama1,
  oran1,
  placette1erNovembre1,
  placette1erNovembre2,
  placette1erNovembre3,
  placette11Decembre1,
  placette11Decembre2,
  placetteAmirAbdelkader1,
  placetteAmirAbdelkader2,
  placetteAmirAbdelkader3,
  placetteBiskra1,
  placetteAmirAbdelkader4,
  placetteAmirAbdelkader5,
  placetteKhmisti1,
  placetteKhmisti2,
  biskra1,
  biskra2,
  biskra3,
  biskra4,
  biskra5,
  placetteKhmisti3,
  placetteTadhamon1,
  placetteTadhamon2,
  placetteTadhamon3,
  placetteTadhamon4,
  placetteTadhamon5,
  relizane1,
  rondDePointTenes1,
  rondDePointTenes2,
  rondDePointTenes3,
  rondDePointTenes4,
  rondDePointTenes5,
  rondDePointTenes6,
  saidHamdine1,
  saidHamdine2,
  sidiBelabess1,
  sidiBelabess2,
  telemcen1,
  tilimeli1,
  tissemsilt1,
  tissemsilt2,
  tissemsilt3,
  tiziOuzou1,
  bayadth1,
  entreeBiskra1,
} from "../assets/index";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
];

const services: TService[] = [
  {
    title:
      "Décoration et rénovation des terrasses, cour, mur intèrieur et bordure des jardins en fausse pierre ou en fausse roche.",
    image: fakeStone,
  },
  {
    title: "Bassin aquatique.",
    image: bassin,
  },
  {
    title: "Aménagement d’espace vert (plantes-gazon-décoration en pierre).",
    image: espaceVert,
  },
  {
    title:
      "Conception, fabrication, et installation de jets d'eau, cascades, lames d'eau, fontaines (sèche, classique, musicale), mur d'eau, sur commande.",
    image: waterJet,
  },
  {
    title: "Conception des piscines.",
    image: piscine,
  },
  {
    title: "Pergola.",
    image: pergola,
  },
];

const categories: TCategory[] = [
  {
    name: "Fontaine Classique",
    image: classique,
  },
  {
    name: "Fontaine Cybernetique",
    image: cybernetique,
  },
  {
    name: "Fontaine Sèche",
    image: seche,
  },
  {
    name: "Fontaine Musicale",
    image: musical,
  },
  {
    name: "Cascade D'eau",
    image: cascade,
  },
  {
    name: "Nos Steles",
    image: stele,
  },
  {
    name: "Nos Fresques",
    image: fresque,
  },
  {
    name: "Lame D'eau",
    image: lame,
  },
  {
    name: "Mur D'eau",
    image: mur,
  },
];

const materiels: TMaterial[] = [
  {
    materialImages: [waterboy1, waterboy2],
    name: "Waterboy",
    materialExamples: [waterboy4, waterboy5],
    caracterestiques: [
      "Spécialement conçu pour l'installation à sec",
      "Résistant au vent",
      "Indépendant du niveau de l'eau",
      "Peut manipuler des particules jusqu'à 12 mm de taille",
      "Intelligente, conception éco énergétique",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [calis2],
    name: "Calis",
    materialExamples: [calis1, calis3],
    caracterestiques: [
      "Figure d'eau transparante",
      "Forme du calice réglable",
      "Independant du niveau de l'eau",
      "Avec bride d'ajustage",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [eventail1],
    name: "Eventail",
    materialExamples: [eventail2],
    caracterestiques: [
      "Ajutage à 11 jets",
      "Diametre du jet 10 mm",
      "Puissant jet insensible au vent",
      "Independant du niveau de l'eau",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [crown5],
    name: "Crown Nozzle",
    materialExamples: [crown3, crown4],
    caracterestiques: [
      "La gamme est composée de quatre tailles avec 16, 20, 50, 59 jets de fontaine",
      "Independant du niveau l'eau",
      "Apparence de l'eau Claire",
      "Moyenne resistance au vent",
      "Crown Nozzle pour eau de mer sur demande",
      "Fabriqué en laiton",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [cascade6],
    name: "Cascade 50T à 130T",
    materialExamples: [cascade4, cascade5],
    caracterestiques: [
      "Jeu d'eau vivant",
      "Effet moussant / écumant",
      "Apport d'oxygène",
      "Bride d'ajustage pour l'alignement",
      "La figure d'eau dépend du niveau de l'eau",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [geiser1],
    name: "GEISER 20T à 100T",
    materialExamples: [geiser2],
    caracterestiques: [
      "Jeu d'eau vivant",
      "Effet moussant / écumant",
      "Apport d'oxygène",
      "Bride d'ajustage pour l'alignement",
      "La figure d'eau dépend du niveau de l'eau",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [lame1],
    name: "Lame D'eau",
    materialExamples: [lame2, lame3],
    caracterestiques: [
      "Lame d'eau compacte et robuste en acier inoxidable",
      "Instalation comme élément encastré ou à visser au mur",
      "Aménagement facile grace aux trois largeurs: 300mm/600mm/900mm",
      "Comprend un orifice fieleté à l'arriere et en bas, un embout à olive et un bouchon",
      "Avec un bec rallongé pour faciliter la pose",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [spatul2],
    name: "Spatule",
    materialExamples: [spatul1],
    caracterestiques: [
      "Figure d'eau originale",
      "Résiste assez bien au vent",
      "Independants du niveau de l'eau",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [pulverisation2],
    name: "Pulverisateur",
    materialExamples: [pulverisation1],
    caracterestiques: [
      "Un grand volume de pulvérisation ou de brouillard d'eau",
      "Un grande visibilité",
      "Niveau sonore faible",
      "Ce jet d'eau pour fontaine n'est pas recommandé sur des sites trés ouverts, à moins de privilégier une hauteur limitée et de combiner son effet à d'autres effets principaux",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [willow1],
    name: "Willow",
    materialExamples: [willow2, willow3],
    caracterestiques: [
      "L'eau monte en parabole vers l'extérieur puis redescend en se souvenant de la forme",
      "Buse en laiton",
      "Independant du niveau de l'eau",
      "Apparence de l'eau Claire",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [volcan1],
    name: "Volcan",
    materialExamples: [volcan2],
    caracterestiques: [
      "Architecture séduisante de la figure d'eau",
      "Jets pleins précis, insensibles au vent",
      "Hauteur du jet à réglage continue",
      "L'angle des jets d'eau jaillissant des ajutages komet se régle séparément",
      "Indépendant du niveau de l'eau",
      "Facile à nettoyer",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [aquaNeige1],
    name: "Aqua-neige 35-10E à 55-15E",
    materialExamples: [aquaNeige3, aquaNeige4],
    caracterestiques: [
      "Figure d'eau vivante et contrastée",
      "Effet de mousse et d'écume",
      "Fonctionnement continu sans anomalie",
      "Apport d'oxygène",
      "Quasi insensible au vent",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [rotatif2],
    name: "Rotative",
    materialExamples: [rotatif1],
    caracterestiques: [
      "Figure d'eau tournant en spirale",
      "Jets pleins précis",
      "Independant du niveau l'eau",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [mur2],
    name: "Mur d'eau",
    materialExamples: [mur1, mur3],
    caracterestiques: [
      "Un produit multifonction qui peut étre utilisé tant pour des fountaines décoratives d'intérieur du fait de sa grande résistance au vent",
      "Un kit de fontaine facile à installer",
      "Ce mur d'eau est une fontaine à faible consommation énergétique",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [lava1],
    name: "LAVA",
    materialExamples: [lava2],
    caracterestiques: [
      "Figure d'eau transparente",
      "Diametre reglable de la cloche",
      "Independant de niveau de l'eau",
      "Fonctionnement silencieux",
      "Aspect contemporain en acier inox",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [sphere2],
    name: "SPHERE/ DEMI-SPHERE",
    materialExamples: [sphere1, sphere3],
    caracterestiques: [
      "Fascinante figure d'eau dans l'espace",
      "Sculpture décorative en acier inox",
      "Quasi insensible au vent",
      "Indépendant du niveau de l'eau",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [comet4, comet2],
    name: "Comet 3-3T à 15-20T",
    materialExamples: [comet1, comet3],
    caracterestiques: [
      "Puissant jet clair et resistant au vent",
      "Indépendant du niveau de l'eau",
      "Avec régulateur de flux avec joint à rotule",
      "Peut étre incliné 12° par rapport à la verticale",
      "Fontaine à hauteur de 0.5m à 14.0m",
      "Peuvent étre utilises seulsou en groupe",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [jumping2, jumping3],
    name: "Jumping-jet",
    materialExamples: [jumping1],
    caracterestiques: [
      "Installation particullierement simple grace à un set complet",
      "Télécommande avec combinaisons programmées de lumiere",
      "Figure d'eau et couleurs",
      "Possibilié de reglage individuel de l'amplitude et de la hauteur du jet",
      "Convient pour l'interieur ou pour l'exterieur",
    ],
    category: "Les Ajutages",
  },
  {
    materialImages: [projecteur1, projecteur2],
    name: "Projecteur LED de 3W à 18W",
    materialExamples: [projecteur4, projecteur5],
    caracterestiques: [
      "Projecteur LED-RGB avec performance énergétique et étrier de support de réglage précis",
      "LED de qualité superieur, asservie à la température pour une longue durée de vie",
      "Connecter 12-24V / A.C sans cable étanche à l'eau suivant IP 68 facile à connecter",
      "Etirement en acier inoxidable",
      "Support de projecteur et d'ajutage",
      "Destiné à un fonctionnement en eau fraiche, eau de piscine, eau de mer et eau de fontaines, d'une temperature de fonctionnement de -20c° à 50c°",
    ],
    category: "Projecteurs",
  },
];

const projects = [
  {
    name: "Fontaine Front de mer",
    images: [frontDeMer1, frontDeMer2],
    description:
      "Une fontaine majestueuse au cœur d'oran, combinant jets d'eau et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Oran, Algerie",
    category: "Fontaine Cybernetique",
    video: "https://www.youtube.com/embed/x60gUAg3i_M?si=E1reADGOx5sKJeJu",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12959.601764911904!2d-0.649192720411!3d35.70406750783679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e89395766cf5b%3A0x1583447e170d766c!2sFront%20De%20Mer!5e0!3m2!1sen!2sdz!4v1725742993092!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Mostaland",
    images: [mostaland1],
    description:
      "Une fontaine majestueuse au cœur de mostaland - mostaganem, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Mosataganem, Algerie",
    category: "Fontaine Musicale",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.746416846896!2d0.09481377423043988!3d35.953172814990175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128203bd774d9bc1%3A0x8f6268307708aca3!2sMostaland!5e0!3m2!1sen!2sdz!4v1725743709066!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Force Naval Zeralda",
    images: [marine1],
    description:
      "Une fontaine majestueuse a la force marine de zeralda , combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Classique",
    video: "https://www.youtube.com/embed/sLy6ZdQ7mAI?si=7_H-al-jNXpSryPI",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102390.55709109874!2d2.6399471624999915!3d36.68159550000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f98a00b53097f%3A0x32351b5ec6159998!2sDOUAOUDA%20MARINE!5e0!3m2!1sen!2sdz!4v1726140814793!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Placette Biskra",
    images: [placetteBiskra1],
    description:
      "Une fontaine majestueuse au coeur de biskra, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Biskra, Algerie",
    category: "Fontaine Séche",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.3516620209075!2d5.703331274165501!3d34.84739017533059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f5090043e7df7f%3A0x50aedc4377b3a5aa!2sPlacette!5e0!3m2!1sen!2sdz!4v1726146144816!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Placette 1er Novembre Biskra",
    images: [placetteNovembreBiskra1, placetteNovembreBiskra2],
    description:
      "Une fontaine majestueuse au coeur du Placette 1er Novembre, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Biskra, Algerie",
    category: "Fontaine Séche",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.115919494685!2d5.635303674162922!3d34.80302537771829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f50c0dcd36539b%3A0x6d17e393f793785a!2s1er%20Novembre!5e0!3m2!1sen!2sdz!4v1726153418689!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Placette Ghardaia",
    images: [ghardaia1],
    description:
      "Une fontaine majestueuse au coeur du Placette de Ghardaia, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Ghardaia, Algerie",
    category: "Fontaine Séche",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.115919494685!2d5.635303674162922!3d34.80302537771829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f50c0dcd36539b%3A0x6d17e393f793785a!2s1er%20Novembre!5e0!3m2!1sen!2sdz!4v1726153418689!5m2!1sen!2sdz",
  },
  {
    name: "Cascade Ghardaia",
    images: [cascadeGhardaia1],
    description:
      "Une fontaine majestueuse au coeur de Ghardaia, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Ghardaia, Algerie",
    category: "Cascade D'eau",
    video: "https://www.youtube.com/embed/npZ10PEvU34?si=_yEdIMlhCGXeHsl8",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215150.58647564388!2d3.5735488562012905!3d32.58677964037527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1264260535a026c3%3A0xc3b2db87d221aa04!2sGhardaia!5e0!3m2!1sen!2sdz!4v1726154374625!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Hotel Nail Zakaria",
    images: [nailZakaria1, nailZakaria2],
    description:
      "Une fontaine majestueuse a l'hotel Nail Zakaria, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Biskra, Algerie",
    category: "Fontaine Classique",
    video: "https://www.youtube.com/embed/h88RgyWKI50?si=Io8Ohv7pOMDaTbbZ",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.4073391275037!2d5.716164974166855!3d34.87111627405271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f5098bbaa64d27%3A0x8f7003d7c9edc4e4!2shotel%20nail%20zakaria!5e0!3m2!1sen!2sdz!4v1726146457349!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine d'entree de Biskra",
    images: [entreeBiskra1],
    description:
      "Une fontaine majestueuse a l'entree de Biskra, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Biskra, Algerie",
    category: "Fontaine Cybernetique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104779.94280404905!2d5.641158633271366!3d34.846848552002946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f509d451b5c1d1%3A0xfcee8b9bcabf4290!2sBiskra!5e0!3m2!1sen!2sdz!4v1726150384391!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Marsa El Kbir",
    images: [marsaElKbir1, marsaElKbir2],
    description:
      "Une fontaine majestueuse au coeur de marsa el kbir , combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Oran, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51828.593626017886!2d-0.7415975435395203!3d35.719157065943875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8f700bd1b3a7%3A0xdf2e901fcb9a626a!2sMers%20El%20K%C3%A9bir!5e0!3m2!1sen!2sdz!4v1726142311169!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine d'entré d'aeroport d'Oran",
    images: [aeroportOran1, aeroportOran2],
    description:
      "Une fontaine majestueuse a l'entré de l'aeroport d'Oran , combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Oran, Algerie",
    category: "Fontaine Cybernetique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.381384774259!2d-0.6134788257894718!3d35.61832333342982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8a6f2c91fde9%3A0x659b020229ee484e!2sOran%20Ahmed%20Ben%20Bella%20Airport!5e0!3m2!1sen!2sdz!4v1726142525104!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine De Bayadth",
    images: [bayadth1],
    description:
      "Une fontaine majestueuse en face de la Wilaya d'el Bayadth , combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Bayadth, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106243.49366070633!2d1.0206976!3d33.6802371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x127e8f1ff9407993%3A0x51ae33395d4121e0!2sFreedom%20Park!5e0!3m2!1sen!2sdz!4v1726143043591!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine sortie de Biskra vers Batna",
    images: [biskra1, biskra2, biskra3, biskra4, biskra5],
    description:
      "Une fontaine majestueuse au sorite de biskra vers Batna , combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Biskra, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.4720841065705!2d6.140812974213344!3d35.665376230847436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f40d5ccc5241ad%3A0xee4d3118aa4627a6!2z2LnZitmGINmE2YXYt9in2LHYp9iz!5e0!3m2!1sen!2sdz!4v1726144277411!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine sortie de Telemcen",
    images: [
      sortieTelemcen1,
      sortieTelemcen2,
      sortieTelemcen3,
      sortieTelemcen4,
    ],
    description:
      "Une fontaine majestueuse au sorite de Telemcen , combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Telemcen, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104783.37195324461!2d-1.4491222168918891!3d34.84415520758076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd78c994bc690749%3A0x824d845093c9ff4c!2sAventura%20club!5e0!3m2!1sen!2sdz!4v1726144759678!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Sphere Ain Timouchent",
    images: [ainTimouchent1],
    description:
      "Une fontaine majestueuse a Ain Timouchent, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Ain Timouchent, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104243.6446694052!2d-1.224561541185532!3d35.265860183451686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ed3f9fdf67937%3A0xc6ca759160b41101!2sAin%20Temouchent!5e0!3m2!1sen!2sdz!4v1726145029288!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Placette Krim Belkacem",
    images: [placetteKrimBelkacem1],
    description:
      "Une fontaine majestueuse au cœur de telimli , combinant des lame d'eau avec une stele pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Lame D'eau",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.30209585989!2d3.0416072742792117!3d36.76331966978026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb388b07cae0f%3A0x52cf6275a9352a1a!2sPlacette%20Krim%20Belkacem!5e0!3m2!1sen!2sdz!4v1726141767191!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Mostaganem center",
    images: [mostaganem1, mostaganem2, mostaganem3, mostaganem4],
    description:
      "Une fontaine majestueuse au cœur de Mostaganem, combinant jets d'eau et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Mosataganem, Algerie",
    category: "Fontaine Cybernetique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103328.86345460317!2d0.0317153024290175!3d35.97076576888853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1282023e8ae39497%3A0x69337c93a849fab2!2sMostaganem!5e0!3m2!1sen!2sdz!4v1725879738919!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Ministère des affaires religieuses et des wakfs",
    images: [ministereReligieux1, ministereReligieux2, ministereReligieux3],
    description:
      "Une fontaine majestueuse au Ministère des affaires religieuses et des wakfs, combinant jets d'eau et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1645770.6475608281!2d0.23438426330786036!3d36.32695622765169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2767a5813cd%3A0xf872a626356baf9d!2sMinistry%20of%20Religious%20Affairs%20and%20Endowments!5e0!3m2!1sen!2sdz!4v1725744568945!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Placette Khmisti",
    images: [placetteKhmisti1, placetteKhmisti2, placetteKhmisti3],
    description:
      "Une fontaine majestueuse au cœur d'alger centre, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102268.83393915363!2d2.958702620095013!3d36.77294091401167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb356cd12d527%3A0x35641fc29a1d9588!2sPetite%20placette!5e0!3m2!1sen!2sdz!4v1725744905626!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Placette Amir Abd Elkader",
    images: [
      placetteAmirAbdelkader1,
      placetteAmirAbdelkader2,
      placetteAmirAbdelkader3,
      placetteAmirAbdelkader4,
      placetteAmirAbdelkader5,
    ],
    description:
      "Une fontaine majestueuse au cœur d'alger centre, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Séche",
    video: "https://www.youtube.com/embed/KjuDNbtyDXo?si=PJ4N2wjz2KWb-ltA",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.7626835341075!2d3.055690524280032!3d36.77626021905129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2f812458561%3A0xf81638eaf9de777c!2sEmir%20Abdelkader%20square!5e0!3m2!1sen!2sdz!4v1725745228687!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine La grande Poste",
    images: [grandePoste1],
    description:
      "Une fontaine Classique au cœur d'alger centre, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.7626835341075!2d3.055690524280032!3d36.77626021905129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2f812458561%3A0xf81638eaf9de777c!2sEmir%20Abdelkader%20square!5e0!3m2!1sen!2sdz!4v1725745228687!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Placette Tadhamon",
    images: [
      placetteTadhamon1,
      placetteTadhamon2,
      placetteTadhamon3,
      placetteTadhamon4,
      placetteTadhamon5,
    ],
    description:
      "Une fontaine majestueuse au cœur de Tadhamon, combinant jets d'eau et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Chlef, Algerie",
    category: "Fontaine Cybernetique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206136.4571953874!2d1.062000355034307!3d36.1694224727725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12840e802595ec23%3A0x343dccf4a3049e3e!2sChlef!5e0!3m2!1sen!2sdz!4v1725745859401!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Naama",
    images: [naama1],
    description:
      "Une fontaine majestueuse au cœur de Naama, combinant jets d'eau et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Naama, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d426964.93378403556!2d-0.6536338939957808!3d33.2752995979387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd80c7e158fb1777%3A0xcfd3e2e039314f47!2sNaama!5e0!3m2!1sen!2sdz!4v1725748554450!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Rond Point Tenes",
    images: [
      rondDePointTenes1,
      rondDePointTenes2,
      rondDePointTenes3,
      rondDePointTenes4,
      rondDePointTenes5,
      rondDePointTenes6,
    ],
    description:
      "Une fontaine majestueuse au cœur de Tenes, combinant jets d'eau et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Chlef, Algerie",
    category: "Fontaine Cybernetique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51536.106728089246!2d1.2841716163773185!3d36.16639229999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12840f778bdaf1e5%3A0x2852314f65c02611!2sRond%20Point%20Hassiba%20Ben%20Bouali!5e0!3m2!1sen!2sdz!4v1725749195045!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Gare Zeralda",
    images: [gareZeralda1],
    description:
      "Une fontaine majestueuse au Gare  Ferroviair de zeralda, combinant jets d'eaux et stele pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Cybernetique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.8197051057427!2d2.8452077599810477!3d36.70287017877133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fa306a4ae4def%3A0x5c7f86ed0935ef5a!2sStation%20Garden!5e0!3m2!1sen!2sdz!4v1725749380396!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Institue Militaire Bordj El-kiffan",
    images: [instituteBordjelkiffan1, instituteBordjelkiffan2],
    description:
      "Une fontaine majestueuse a l'Institue Militaire Bordj El-kiffan, combinant jets d'eaux et stele pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Cybernetique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102297.46058929992!2d3.1234840516680795!3d36.75147599220259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e458641c84283%3A0x52501f4294709084!2sMilitary%20polytechnic%20school!5e0!3m2!1sen!2sdz!4v1725749737723!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Sidi Belabess",
    images: [sidiBelabess1, sidiBelabess2],
    description:
      "Une fontaine majestueuse au cœur de Sidi Belabess, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Sidi Belabess, Algerie",
    category: "Fontaine Cybernetique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104321.22320662475!2d-0.7137936448817194!3d35.20551680863021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7f0030b5f78f73%3A0x24600b519acfdc29!2sSidi%20Bel%20Abb%C3%A8s!5e0!3m2!1sen!2sdz!4v1725749865152!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Placette 11 decembre",
    images: [placette11Decembre1, placette11Decembre2],
    description:
      "Une fontaine majestueuse au cœur de Chlef, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Chlef, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.0336525699495!2d1.3274154742431392!3d36.16573570320981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12840f000913e613%3A0x89e7ceaaa43aa073!2s11%20D%C3%A9cembre%201960!5e0!3m2!1sen!2sdz!4v1725750060075!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Mascara",
    images: [
      mascara1,
      mascara2,
      mascara3,
      mascara4,
      mascara5,
      mascara6,
      mascara7,
    ],
    description:
      "Une fontaine majestueuse au cœur de Mascara, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Mascara, Algerie",
    category: "Fontaine Séche",
    video: "https://www.youtube.com/embed/6KYqfyx43MM?si=nGF9CZm8jPqWLh7P",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104092.88662112942!2d0.0714891659984151!3d35.3828689906346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1281daa55e78cd19%3A0x70aae4403ad6f0ac!2sMascara!5e0!3m2!1sen!2sdz!4v1725750306204!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine La grande Mosquee",
    images: [grandeMosquee1, grandeMosquee2, grandeMosquee3, grandeMosquee4],
    description:
      "Une fontaine majestueuse en face du Grande Mosquee d'alger, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51143.00359076815!2d3.061873572635418!3d36.76006531308642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e527ddd9ec26d%3A0xb13a579be89a8406!2sGreat%20Mosque%20of%20Algiers!5e0!3m2!1sen!2sdz!4v1725805610132!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine jardin 1er novembre",
    images: [jardinNovembreBiskra1],
    description:
      "Une fontaine majestueuse en face du Grande Mosquee d'alger, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Biskra, Algerie",
    category: "Fontaine Cybernetique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51143.00359076815!2d3.061873572635418!3d36.76006531308642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e527ddd9ec26d%3A0xb13a579be89a8406!2sGreat%20Mosque%20of%20Algiers!5e0!3m2!1sen!2sdz!4v1725805610132!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Hotel Meridian",
    images: [hotelMeridian1, hotelMeridian2, hotelMeridian3],
    description:
      "Une fontaine majestueuse a Hotel Meridian d'oran, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Oran, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.9888343173466!2d-0.5945060257830282!3d35.72649312748888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e88570d76d9cb%3A0x4f243c20bf8254a8!2sLe%20M%C3%A9ridien%20Oran%20Hotel%20%26%20Convention%20Centre!5e0!3m2!1sen!2sdz!4v1725805869747!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Chlef",
    images: [chlef1, chlef2],
    description:
      "Une fontaine majestueuse au cœur de Chlef, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Chlef, Algerie",
    category: "Fontaine Séche",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206136.4571953874!2d1.062000355034307!3d36.1694224727725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12840e802595ec23%3A0x343dccf4a3049e3e!2sChlef!5e0!3m2!1sen!2sdz!4v1725806114218!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Placette 1er Novermbre",
    images: [placette1erNovembre1, placette1erNovembre2, placette1erNovembre3],
    description:
      "Une fontaine majestueuse au cœur d'oran, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Oran, Algerie",
    category: "Fontaine Séche",
    video: "https://www.youtube.com/embed/v3Rf4rjZRxc?si=iQq2HIBoK7A_tGII",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.922523562044!2d-0.6511042257843955!3d35.70352412875174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e88e52a5802df%3A0x2238bee6758b0815!2sPlace%20du%201er%20Novembre!5e0!3m2!1sen!2sdz!4v1725806414196!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine El Biar",
    images: [elBiar1, elBiar2],
    description:
      "Une fontaine majestueuse au cœur d'el biar, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25569.132044760907!2d3.008862760546491!3d36.767172653296406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb23d11b3d111%3A0xa87c4eabe6d1acd4!2sEl%20Biar!5e0!3m2!1sen!2sdz!4v1725806597146!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Tissemsilt",
    images: [tissemsilt1, tissemsilt2, tissemsilt3],
    description:
      "Une fontaine majestueuse au cœur de Tissemsilt, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Tissemsilt, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207591.58311999167!2d1.66269004182327!3d35.61247642848369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12868a4266585eed%3A0xa46ae21abcc11c68!2sTissemsilt!5e0!3m2!1sen!2sdz!4v1725806879274!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Tizi-Ouzou",
    images: [tiziOuzou1],
    description:
      "Une fontaine majestueuse au cœur de Tizi-Ouzou, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Tizi-Ouzou, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102367.34367680365!2d3.9931167483297973!3d36.699030751621315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128dc7dfbffd090b%3A0x27cd9a20dc200804!2sTizi%20Ouzou!5e0!3m2!1sen!2sdz!4v1725807003593!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine El Tarf",
    images: [elTarf1, elTarf2, elTarf3, elTarf4, elTarf5],
    description:
      "Une fontaine majestueuse au cœur d'El Tarf, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "El Tarf, Algerie",
    category: "Fontaine Cybernetique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204589.21453705273!2d8.134706284946054!3d36.75361596094819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fadb4e5f51c91b%3A0x199ffd770f5bfdf0!2sEl%20Tarf!5e0!3m2!1sen!2sdz!4v1725807544026!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Relizane",
    images: [relizane1],
    description:
      "Une fontaine majestueuse au cœur de Relizane, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Relizane, Algerie",
    category: "Fontaine Cybernetique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103649.65991311074!2d0.4801140871279354!3d35.72494278009626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128179e1049e48a9%3A0x4ae51cea91762b26!2sRelizane!5e0!3m2!1sen!2sdz!4v1725807730508!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Maghenia",
    images: [magheniaTelemcen1],
    description:
      "Une fontaine majestueuse au cœur de Meghenia, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Telemcen, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209546.87401607708!2d-1.991782748675526!3d34.85195787645807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd788ccc3367338d%3A0xbabfbb93399f7d2!2sMaghnia!5e0!3m2!1sen!2sdz!4v1725807910793!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine d'APC Hssessna",
    images: [apcHssessna1, apcHssessna2, apcHssessna3, apcHssessna4],
    description:
      "Une fontaine majestueuse au cœur de Hssessna - Ain Timouchent, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Ain Timouchent, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1628.335496363196!2d-1.1430454999208417!3d35.28930548692915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ed40463d48a8f%3A0x65c157c930e4cd1!2sA.P.C%20A%C3%AFn%20T%C3%A9mouchent!5e0!3m2!1sen!2sdz!4v1726148094217!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine de l'entree de Sidi Belabess",
    images: [sidiBelAbess1, sidiBelAbess2, sidiBelAbess3, sidiBelAbess4],
    description:
      "Une fontaine majestueuse a l'entree de Sidi Belabess, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Sidi Belabess, Algerie",
    category: "Fontaine Cybernetique",
    video: "https://www.youtube.com/embed/sX9AEc4I-Qc?si=Xl9jENnhnIGSzxVC",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104321.22320662464!2d-0.7137936448817023!3d35.2055168086302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7f0030b5f78f73%3A0x24600b519acfdc29!2sSidi%20Bel%20Abb%C3%A8s!5e0!3m2!1sen!2sdz!4v1726149736576!5m2!1sen!2sdz",
  },
  {
    name: "Stele de Quran Beni Abess",
    images: [quran1],
    description: "Une stele de quran à Beni Abess",
    materiaux: [],
    lieux: "Beni Abess, Algerie",
    category: "Stele",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1767676.1562927659!2d-3.593927652322621!3d30.080078599379405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd8de0237eaebd35%3A0x80a82d752c0e3b8a!2zQsOpbmkgQWJiw6hz!5e0!3m2!1sen!2sdz!4v1726150012393!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Telemcen",
    images: [telemcen1],
    description:
      "Une fontaine majestueuse au cœur de Telemcen, combinant jets d'eaux et éclairage LED pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Telemcen, Algerie",
    category: "Fontaine Cybernetique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209546.87401607708!2d-1.991782748675526!3d34.85195787645807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd788ccc3367338d%3A0xbabfbb93399f7d2!2sMaghnia!5e0!3m2!1sen!2sdz!4v1725807910793!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Tilimeli",
    images: [tilimeli1],
    description:
      "Une fontaine majestueuse au cœur de Tilimeli, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6391.991119049569!2d3.045546388427439!3d36.77067398325938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb2595bb70bd3%3A0x5d33b377bdf552b8!2sTelemly%2C%20El%20Djazair!5e0!3m2!1sen!2sdz!4v1725810193065!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Oran",
    images: [oran1, frontDeMer3, frontDeMer4],
    description:
      "Une fontaine majestueuse au cœur d'Oran, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Oran, Algerie",
    category: "Fontaine Classique",
    video: "https://www.youtube.com/embed/zzTWgxUu0Iw?si=MQMnpZfRTJ5Zeeed",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103667.50180001698!2d-0.7205946137228745!3d35.711227708603275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e8854841f537d%3A0x4187f63762f7290f!2sOran!5e0!3m2!1sen!2sdz!4v1725810425707!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Said Hamdine",
    images: [saidHamdine1, saidHamdine2],
    description:
      "Une fontaine majestueuse au cœur de Said Hamdine, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12790.21388234391!2d3.0231444862920327!3d36.73328400317686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fadf3f419dd77%3A0x70641e703ce50a4a!2sSaid%20Hamdine%2C%20Bir%20Mourad%20Ra%C3%AFs!5e0!3m2!1sen!2sdz!4v1725810553667!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine DR Saadan",
    images: [saadan1, saadan2, saadan3],
    description:
      "Une fontaine majestueuse au cœur d'alger centre, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.8732362109627!2d3.054292374279839!3d36.773608369200666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb258154dafd5%3A0x7d87ca9961b5dc43!2sDr%20Ch.%20Saadane%20St%2C%20El%20Djazair!5e0!3m2!1sen!2sdz!4v1725810693796!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Madania",
    images: [madania1, madania2, madania3],
    description:
      "Une fontaine majestueuse au cœur de Madania, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Alger, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25577.421466949076!2d3.0486533104491644!3d36.74230591489827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad7d57b97221%3A0x6aa8f928b1a3af3a!2sEl%20Madania!5e0!3m2!1sen!2sdz!4v1725810973475!5m2!1sen!2sdz",
  },
  {
    name: "Fontaine Medea",
    images: [medea1, medea2, medea3],
    description:
      "Une fontaine majestueuse au cœur de Medea, combinant jets d'eaux pour un spectacle nocturne impressionnant.",
    materiaux: [],
    lieux: "Medea, Algerie",
    category: "Fontaine Classique",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102917.24371421561!2d2.690475272071757!3d36.284073666642016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f6ac2a7224223%3A0x150a7a4487ede93e!2zTcOpZMOpYQ!5e0!3m2!1sen!2sdz!4v1725811125915!5m2!1sen!2sdz",
  },
];

export { services, projects, materiels, categories };
