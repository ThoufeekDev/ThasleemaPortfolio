import { StrengthCard, ExperienceItem, SkillCategory, EducationItem, LanguageItem, ContactInfo } from '../types';

export const personalDetails = {
  name: "THASLEEMA N",
  title: "Front Office & Business Support Professional",
  tagline: "Front Office Operations · Business Support Coordination · Administration · Customer Experience",
  heroDescription: "Experienced in front office operations, business coordination, customer relationship management, administrative support, and daily business operations. Passionate about creating organized workflows and delivering professional customer experiences.",
  location: "Kochi, Kerala, India",
  email: "bythasleeman@gmail.com",
  phone: "+91 99469 03376",
  phoneDisplay: "+91 99469 03376",
  whatsappUrl: "https://wa.me/919946903376?text=Hi%20Thasleema%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.",
  resumePath: "/THASLEEMA Resume.pdf",
};

export const aboutContent = {
  paragraph1: "Thasleema N is a professional with experience in front office operations, business support coordination, customer service, and administration in fast-paced environments. Her background includes delegate and visitor handling, business coordination, customer relationship management, staff supervision, billing, inventory control, and administrative documentation.",
  paragraph2: "She brings a service-oriented approach to professional interactions and has experience supporting daily business operations, coordinating with internal teams and vendors, and maintaining organized office workflows.",
};

export const professionalStrengths: StrengthCard[] = [
  {
    id: "strength-1",
    title: "Business Coordination",
    description: "Aligning cross-functional communication, scheduling, and vendor relationships to maintain uninterrupted workflow efficiency.",
    iconName: "network"
  },
  {
    id: "strength-2",
    title: "Customer Relationship Management",
    description: "Delivering empathetic, professional customer service, managing inquiries, and resolving issues with a service-oriented mindset.",
    iconName: "users"
  },
  {
    id: "strength-3",
    title: "Administrative Operations",
    description: "Executing front office operations, visitor management, record-keeping, and structured documentation standards.",
    iconName: "clipboard-check"
  },
  {
    id: "strength-4",
    title: "Team Supervision",
    description: "Guiding frontline staff, overseeing daily operational shifts, and ensuring consistent service quality and accountability.",
    iconName: "briefcase"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Business Support Coordinator / Front Office",
    company: "Derrick Jones Management",
    duration: "January 2026 – July 2026",
    period: "Jan 2026 – Jul 2026",
    current: true,
    responsibilities: [
      "Coordinated daily front office operations and business support activities.",
      "Handled foreign delegates and supported smooth communication and coordination.",
      "Managed professional client interactions and visitor management.",
      "Supported administrative tasks, scheduling, and internal coordination.",
      "Maintained records, reports, and office documentation."
    ]
  },
  {
    id: "exp-2",
    title: "Manager – Cafe",
    company: "Cafe, Bangalore",
    location: "Bangalore, India",
    duration: "January 2024 – December 2025",
    period: "Jan 2024 – Dec 2025",
    responsibilities: [
      "Supervised daily cafe operations and staff to maintain smooth workflows.",
      "Handled billing, account management, and inventory control.",
      "Maintained customer relationships and resolved customer issues.",
      "Coordinated with vendors and managed supply requirements.",
      "Supported sales growth and operational efficiency."
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Administration & Operations",
    description: "Core organizational and operational capabilities that keep front offices and administrative functions running seamlessly.",
    skills: [
      "Front Office Management",
      "Administrative Coordination",
      "Delegate & Visitor Handling",
      "MS Office & Computer Proficiency"
    ]
  },
  {
    category: "Customer & Business Support",
    description: "Client-focused strengths essential for high-touch customer relationships, client satisfaction, and business growth.",
    skills: [
      "Customer Relationship Management",
      "Sales Support & Target Handling",
      "Communication & Interpersonal Skills"
    ]
  },
  {
    category: "Management & Reporting",
    description: "Leadership and operational oversight skills driving team productivity, compliance, and accurate financial reporting.",
    skills: [
      "Team Leadership",
      "Basic Accounting & Reporting"
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Annamalai University",
    duration: "October 2019",
    location: "Tamil Nadu, India"
  }
];

export const languagesData: LanguageItem[] = [
  {
    language: "Malayalam",
    proficiency: "Native",
    levelTag: "Primary Language"
  },
  {
    language: "English",
    proficiency: "Fluent",
    levelTag: "Professional Working Proficiency"
  },
  {
    language: "Hindi",
    proficiency: "B2",
    levelTag: "Intermediate / Conversational"
  },
  {
    language: "Tamil",
    proficiency: "Fluent",
    levelTag: "Professional Working Proficiency"
  }
];

export const contactInfo: ContactInfo = {
  email: "bythasleeman@gmail.com",
  phone: "+91 99469 03376",
  phoneDisplay: "+91 99469 03376",
  phoneFormatted: "+91 99469 03376",
  whatsappNumber: "919946903376",
  whatsappUrl: "https://wa.me/919946903376?text=Hi%20Thasleema%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20an%20opportunity.",
  location: "Kochi, Kerala, India"
};
