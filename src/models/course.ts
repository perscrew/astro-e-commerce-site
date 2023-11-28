export interface Course {
  slug: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  price: number;
  description: string;
}
