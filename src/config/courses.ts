import type { Course } from "../models/course";

export const courses: Course[] = [
  {
    slug: "formation-astro-js",
    title: "Formation complète pour Astro JS",
    image: {
      src: "/images/astro-course.webp",
      alt: "Cours Astro JS",
    },
    price: 19.99,
    description:
      "Plongez dans le monde d'Astro JS avec notre formation complète, conçue pour vous transformer en expert de ce framework révolutionnaire. Que vous soyez un développeur débutant ou expérimenté, cette formation vous guidera à travers toutes les fonctionnalités et les meilleures pratiques d'Astro JS, vous permettant de créer des sites web rapides, réactifs et optimisés pour le SEO."
  },
  {
    slug: "formation-next-js",
    title: "Formation complète Next JS",
    image: {
      src: "/images/nextjs-course.jpg",
      alt: "Cours Next JS",
    },
    price: 30.99,
    description:
      "Découvrez les capacités infinies de Next.js dans notre formation accélérée. Conçue pour les développeurs aspirants et expérimentés, cette formation vous propulse dans l'univers de Next.js, vous équipant pour construire des sites web performants et SEO-friendly.",
  },
  {
    slug: "formation-react-js",
    title: "Formation complète React JS",
    image: {
      src: "/images/react-course.png",
      alt: "Cours React JS",
    },
    price: 15.99,
    description:
      "Rejoignez notre formation intensive React JS et devenez un expert en création d'interfaces utilisateur dynamiques et réactives. Cette formation est conçue pour vous fournir une compréhension profonde et pratique de React, un des frameworks front-end les plus demandés.",
  },
  {
    slug: "formation-vue-js",
    title: "Formation complète Vue JS",
    image: {
      src: "/images/vue-course.png",
      alt: "Cours Vue JS",
    },
    price: 18.99,
    description:
      "Plongez au cœur de Vue JS avec notre formation complète, conçue pour vous équiper des compétences nécessaires pour créer des interfaces utilisateur élégantes et efficaces. Cette formation est idéale pour ceux qui souhaitent exceller dans l'utilisation de Vue, un framework JavaScript progressif et versatile.",
  },
  {
    slug: "formation-angular-js",
    title: "Formation complète Angular",
    image: {
      src: "/images/angular-course.png",
      alt: "Cours Angular",
    },
    price: 27.99,
    description:
      "Découvrez la puissance et la flexibilité d'Angular dans notre formation complète, conçue pour transformer les développeurs de tous niveaux en experts de ce framework puissant et largement utilisé.",
  },
];
