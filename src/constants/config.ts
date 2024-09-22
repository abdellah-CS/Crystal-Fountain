type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      phone: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    catalogue: Required<TSection>;
    equipements: Required<TSection>;
    fresque: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "Crystal Fountain",
    fullName: "Mahrez Khider",
    email: "crystalfountainalgerie@gmail.com",
  },
  hero: {
    name: "Crystal Fountain",
    p: [
      "Conception et Réalisation de Fontaines et Jets d'Eau Innovantes pour Tous Vos Besoins",
      "",
    ],
  },
  contact: {
    h2: "Réservez un Rendez-Vous",
    p: "Remplissez le formulaire et nous vous contacterons pour un devis personnalisé.",
    form: {
      name: {
        span: "Votre Nom Complet",
        placeholder: "Quel est ton nom?",
      },
      phone: {
        span: "Votre Numero de Telephone",
        placeholder: "Quel est ton numéro de téléphone?",
      },
      email: { span: "Votre Email", placeholder: "Quel est ton e-mail?" },
      message: {
        span: "Votre Message",
        placeholder: "Qu'est-ce que tu veux dire?",
      },
    },
  },
  sections: {
    fresque: {
      p: "Projets",
      h2: "Nos Fresques",
      content: `Les fresques sont des peintures murales monumentales réalisées à même le mur avec des pigments incorporés dans un enduit frais. Décoration ancestrale d'édifices importants, elles offrent une grande durabilité et permettent de représenter des scènes narratives sur de vastes surfaces. Chefs-d'œuvre de l'art mural, les fresques allient technicité picturale et dimension symbolique.`,
    },
    about: {
      p: "Introduction",
      h2: "à Propos Nous",
      content: `Depuis plus de 10 ans, Crystal Fountain crée des jets d'eau et des fontaines qui transforment les espaces en véritables havres de paix. Elle dispose d’un effectif fonctionnel et opérationnel pour donner la confiance appropriée en vue d’une satisfaction aux exigences données relatives à la qualité.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "Projets",
      h2: "Nos Realisations.",
      content: `Explorez nos réalisations : fontaines uniques, conçues sur mesure, illustrant notre savoir-faire et créativité.`,
    },
    catalogue: {
      p: "Catalogue",
      h2: "Notre Catalogue.",
      content: `Découvrez notre gamme complète de fontaines et de jets d’eau dans notre catalogue interactif. Chaque modèle est conçu pour allier esthétique et fonctionnalité, avec des options de personnalisation disponibles.`,
    },
    equipements: {
      p: "Materiaux",
      h2: "Nos Equipements.",
      content: `Nous utilisons uniquement les meilleurs matériaux pour garantir la durabilité et l'esthétique de nos fontaines. Chaque matériau est sélectionné pour ses propriétés uniques, assurant une performance optimale.`,
    },
  },
};
