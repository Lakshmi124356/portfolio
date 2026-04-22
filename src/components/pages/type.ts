export interface Profile {
  name: string;
  role: string;
  experience: string;
  description: string;
  resume: string;
  image: string;
  myImage: string;

  about: {
    intro: string;
    details: string;
  };

  work: {
    title: string;
    description: string;
  }[];

  skills: {
    category: string;
    items: string;
  }[];

  experienceDetails: string;
  achievements: string;
  education: string;
}