export interface StrengthCard {
  id: string;
  title: string;
  description: string;
  iconName: 'network' | 'users' | 'clipboard-check' | 'briefcase' | 'award';
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location?: string;
  duration: string;
  period: string;
  current?: boolean;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  location: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  levelTag: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  phoneDisplay: string;
  phoneFormatted?: string;
  whatsappNumber?: string;
  whatsappUrl?: string;
  location: string;
}
