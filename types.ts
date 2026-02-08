
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft-skills';
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
