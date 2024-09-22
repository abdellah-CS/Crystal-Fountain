export type TMaterial = {
  materialImages: string[];
  name: string;
  materialExamples: string[];
  caracterestiques: string[];
  category: "Les Ajutages" | "Projecteurs";
};

export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;

export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
} & Required<Pick<TCommonProps, "name">>;

export type TProject = {
  images: string[];
  description: string;
  materiaux: TMaterial[];
  lieux: string;
  category: TCategory;
  googleMapsUrl: string;
  video: string;
} & Required<Pick<TCommonProps, "name">>;

export type TTechnology = Required<Omit<TCommonProps, "title">>;

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = {
  title?: string;
  image?: string;
};

export type TCategory = {
  name?: string;
  image?: string;
};

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
