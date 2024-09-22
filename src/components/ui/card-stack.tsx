import React from "react";
import { motion } from "framer-motion";

// Define Highlight component
const Highlight: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <span
      className={`font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5 ${className}`}
    >
      {children}
    </span>
  );
};

// Card data
const CARDS = [
  {
    id: 1,
    name: "Idée du Client",
    designation: "Senior Shitposter",
    content: (
      <ol>
        <li style={{ marginBottom: "7px" }}>
          <Highlight>1- Analyse des Besoins</Highlight> Comprendre les souhaits
          du client en matière de décoration, relaxation ou point focal.{" "}
        </li>{" "}
        <li style={{ marginBottom: "7px" }}>
          <Highlight>2- Prise en Compte du Contexte</Highlight> Évaluer les
          conditions du site et le contexte socio-culturel.
        </li>
      </ol>
    ),
  },
  {
    id: 2,
    name: "Conception et Design (Architecture)",
    designation: "Manager Project Mayhem",
    content: (
      <ol>
        <li style={{ marginBottom: "7px" }}>
          <Highlight>1- Équipe de Conception</Highlight> Constituer une équipe
          d'ingénieurs et d'architectes pour élaborer des plans.
        </li>{" "}
        <li style={{ marginBottom: "7px" }}>
          <Highlight>2- Plans Architecturaux</Highlight> Créer des dessins
          détaillés incluant dimensions, matériaux, et mécanismes.
        </li>{" "}
        <li style={{ marginBottom: "7px" }}>
          <Highlight>3- Sélection des Matériaux</Highlight> Choisir des
          matériaux de haute qualité (pierre naturelle, béton, acier
          inoxydable).
        </li>{" "}
        <li style={{ marginBottom: "7px" }}>
          <Highlight>4- Systèmes Techniques</Highlight> Développer l'étude
          mécanique et électronique, intégrant les composants spéciaux.
        </li>
      </ol>
    ),
  },
  {
    id: 3,
    name: "Atelier",
    designation: "Manager Project Mayhem",
    content: (
      <ol>
        <li style={{ marginBottom: "7px" }}>
          <Highlight>1- Assemblage d'équipement</Highlight> Produire les
          différents éléments de la fontaine dans un atelier spécialisé.
        </li>{" "}
        <li style={{ marginBottom: "7px" }}>
          <Highlight>2- Contrôle de Qualité</Highlight> Vérifier que chaque
          composant respecte les normes de qualité avant l'expédition.
        </li>
      </ol>
    ),
  },
  {
    id: 4,
    name: "Installation",
    designation: "Manager Project Mayhem",
    content: (
      <ol>
        <li style={{ marginBottom: "7px" }}>
          <Highlight>1- Préparation du Site</Highlight> Effectuer le
          terrassement et préparer les fondations selon les plans.
        </li>{" "}
        <li style={{ marginBottom: "7px" }}>
          <Highlight>2- Montage</Highlight> Installer les systèmes de plomberie,
          d'électricité et assembler les structures.
        </li>{" "}
        <li style={{ marginBottom: "7px" }}>
          <Highlight>3- Tests de Fonctionnement</Highlight> Vérifier le bon
          fonctionnement du système d'eau et des éclairages avant la réception
          finale.
        </li>
      </ol>
    ),
  },
  {
    id: 5,
    name: "Service Après-Vente",
    designation: "Manager Project Mayhem",
    content: (
      <ol>
        <li style={{ marginBottom: "7px" }}>
          <Highlight>1- Formation de l'Exploitation</Highlight> Former le
          personnel sur le fonctionnement de l'installation.
        </li>
        <li style={{ marginBottom: "7px" }}>
          <Highlight>2- Entretien Professionnel</Highlight> Assurer un service
          après-vente de qualité, garantissant le bon fonctionnement et la
          durabilité de la fontaine.
        </li>
        <li style={{ marginBottom: "7px" }}>
          <Highlight>3- Suivi et Inspections</Highlight> Effectuer des
          inspections régulières et des réparations si nécessaires.
        </li>
      </ol>
    ),
  },
];

export const CardStack: React.FC<{
  items?: typeof CARDS;
  currentCardIndex: number;
  offset?: number;
  scaleFactor?: number;
}> = ({ items = CARDS, currentCardIndex, offset, scaleFactor }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;

  // Sort the items array based on their id
  const sortedItems = [...items].sort((a, b) => a.id - b.id);

  // Reorder items to put the current card on top
  const reorderedItems = [
    ...sortedItems.filter((card) => card.id === currentCardIndex),
    ...sortedItems.filter((card) => card.id !== currentCardIndex),
  ];

  return (
    <div
      className="relative h-[91vh] w-60 md:h-60 md:w-96 flex justify-center"
      style={{
        width: "100%",
      }}
    >
      {reorderedItems.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute dark:bg-black bg-white w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
            margin: "auto",
          }}
          id="progress-content-section"
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: reorderedItems.length - index,
          }}
        >
          {(reorderedItems[index].id === currentCardIndex ||
            index === currentCardIndex) && (
            <>
              <div
                className="w-full"
                style={{
                  textAlign: "center",
                  fontSize: "19px",
                  fontWeight: "700",
                  marginBottom: "12px",
                  paddingTop: "2rem",
                }}
              >
                {card.name}
              </div>
              <div className="font-normal ">{card.content}</div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
};
