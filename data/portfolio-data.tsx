export interface PersonalInfo {
  name: string
  title: string
  summary: string
  about: string
  email: string
  phone: string
  location: string
  website: string
  linkedin: string
  github: string
  profileImage: string
}

export interface Skill {
  name: string
  category: "programming" | "framework" | "database" | "tool" | "platform"
}

export interface Experience {
  company: string
  position: string
  duration: string
  location: string
  achievements: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  longDescription: string
  tech: string[]
  platforms: string[]
  type: string
  projectIcon?: string
  storeLinks: {
    platform: string  // e.g., "Android", "iOS", "Web"
    url: string
    store: string   // e.g., "Google Play", "App Store", "Web"
  }[]
  github?: string
  website?: string
  bannerImage?: string
  screenshots?: {
    [platform: string]: string[]
  }
  createdDate?: string
  releasedDate?: string
  featured: boolean
  stats?: {
    downloads?: string
    rating?: number
    reviews?: string
  }
  company: string
}

export interface OpenSourceProject {
  name: string
  description: string
  url: string
  type: string
  github?: string
}

export interface Education {
  degree: string
  institution: string
  year: string
  location?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Achievement {
  title: string
  description: string
  date?: string
  icon: string
}

export interface Certification {
  name: string
  issuer: string
  date: string
  url?: string
  icon: string
}

// Update the Skill interface to include icon
export interface Skill {
  name: string
  category: "programming" | "framework" | "database" | "tool" | "platform"
  icon: string
}

export const personalInfo: PersonalInfo = {
  name: "Muhammad Zeeshan",
  title: "Software Engineer & Mobile App Specialist",
  summary: "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with Flutter, React Native and Native Android Platform and some other cool libraries and frameworks.",
  about:
    "An innovative software developer with 5+ years of experience with expertise in Mobile Application Development. Passionate about developing software programs that expedite the efficiency and effectiveness of organisational success. With my leadership skills, I can manage teams to build software programs. Critical thinker, problem solver, and innovative creator to develop software that is customized to meet a company's organizational needs and success.",
  email: "zeeshanayaz1@gmail.com",
  phone: "(+92) 312 2309493",
  location: "Karachi, Pakistan",
  website: "https://zeeshan-ayaz.web.app/",
  linkedin: "https://www.linkedin.com/in/zeeshanayaz/",
  github: "https://github.com/zeeshanayaz",
  profileImage: "/images/profile.jpeg",
}

export const skills: Skill[] = [
  { name: "Java/Kotlin", category: "programming", icon: "Code" },
  { name: "Flutter/Dart", category: "framework", icon: "Code" },
  { name: "React Native", category: "framework", icon: "Code" },
  { name: "Python", category: "framework", icon: "Code" },
  { name: "SQL", category: "database", icon: "Database" },
  { name: "Firebase", category: "database", icon: "Flame" },
  { name: "Supabase", category: "database", icon: "Zap" },
  { name: "Git", category: "tool", icon: "GitBranch" },
  { name: "Android Development", category: "platform", icon: "Smartphone" },
  { name: "iOS Development", category: "platform", icon: "Smartphone" },
  { name: "REST APIs", category: "tool", icon: "Globe" },
  { name: "Postman", category: "tool", icon: "Zap" },
  { name: "Figma", category: "tool", icon: "Palette" },
  { name: "Adobe XD", category: "tool", icon: "Palette" },
  { name: "Cross-platform Development", category: "framework", icon: "Monitor" },
  { name: "Play Store Deployment", category: "platform", icon: "Upload" },
  { name: "App Store Deployment", category: "platform", icon: "Upload" },
  { name: "Jira", category: "tool", icon: "GitBranch" },
  { name: "Basecamp", category: "tool", icon: "GitBranch" },
]

export const experiences: Experience[] = [
  {
    company: "Genetech Solutions",
    position: "Software Developer (Tier III)",
    duration: "October 2023 - Present",
    location: "Pakistan",
    achievements: [
      "Launched 5+ apps on both Google Play Store and Apple App Store, each receiving an average rating of 4.5+",
      "Developed and maintained mobile applications for Android using native platform with Kotlin",
      "Successfully integrated third-party services, resulting in increased app engagement",
      "Collaborated with UI/UX designers to create responsive and user-friendly mobile interfaces",
      "Streamlined API integration that improved app performance and reduced load times",
      "Mentored junior developers, helping them improve their code quality and efficiency",
      "Enhanced app performance by optimizing code and implementing efficient algorithms",
      "Collaborated with the QA team to implement automated testing, resulting in a 50% reduction in post-release bugs",
    ],
  },
  {
    company: "Genetech Solutions",
    position: "Software Developer (Tier I)",
    duration: "May 2023 - September 2023",
    location: "Pakistan",
    achievements: [
      "Launched 5+ apps on both Google Play Store and Apple App Store, each receiving an average rating of 4.5+",
      "Assisted in building and maintaining robust Android applications",
      "Developed UI components and integrated RESTful APIs to ensure seamless user experiences",
      "Collaborated with senior developers to enhance skills in mobile app development using both Flutter and Java/Kotlin",
      "Performed testing, debugging, and optimization to ensure smooth app performance",
      "Participated in code reviews and contributed to the improvement of coding standards",
    ],
  },
  {
    company: "Genetech Solutions",
    position: "Associate Software Developer",
    duration: "April 2021 - April 2023",
    location: "Pakistan",
    achievements: [
      "Developed and maintained mobile applications for Android using Java/Kotlin",
      "Gained proficiency in Flutter, contributing to cross-platform mobile application development",
      "Assisted in integrating RESTful APIs and third-party services into mobile apps",
      "Worked collaboratively with the development team to implement new features",
      "Contributed in debugging and troubleshooting to resolve application issues",
      "Engaged in code reviews, continuously improving coding practices",
    ],
  },
  {
    company: "Minhasoft",
    position: "Android Developer",
    duration: "Dec 2019 - April 2021",
    location: "Karachi",
    achievements: [
      "Developed and maintained Android applications using Kotlin and Java",
      "Designed and implemented user interfaces using XML",
      "Collaborated with cross-functional teams to gather requirements",
      "Integrated RESTful APIs and third-party libraries to enhance app functionality",
      "Debugged and resolved issues during development and testing phases",
      "Supported deployment of applications to Google Play Store",
    ],
  },
]

export const projects: Project[] = [
  {
    id: "empire-developments",
    name: "Empire Developments",
    description: "Where Uniqueness Redefines Luxurious Living",
    longDescription: "Experience the pinnacle of extravagance with Empire Development, Dubai, UAE, a premier luxury real estate developer. Immerse yourself in the epitome of opulence with our luxurious living spaces. Each residence is a testament to exquisite craftsmanship and meticulous attention to detail. From sprawling penthouses with panoramic views to lavish estates nestled in serene landscapes, we redefine what it means to live in luxury. At Empire Development, we specialize in crafting bespoke homes that cater to the most discerning tastes, ensuring an unparalleled lifestyle of sophistication and indulgence.",
    tech: ["Kotlin", "XML", "REST APIs", "Firebase", "SqlLite", "Room"],
    platforms: ["Android", "iOS"],
    company: "Freelance Client",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fempire_developments.png?alt=media",
    bannerImage: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fbanner%2Fempire_developments.jpg?alt=media",
    storeLinks: [],
    type: "Real Estate",
    screenshots: {},
    createdDate: "2025",
    featured: true,
  },
  {
    id: "portfolio-app",
    name: "Portfolio App",
    description: "A clean, beautiful and responsive portfolio template for all!",
    longDescription: "A clean, beautiful and responsive portfolio template for all available for mobile, windows and web.",
    tech: ["Flutter", "Dart", "Android", "iOS", "GIT", "Firebase"],
    platforms: ["Android", "iOS", "Web"],
    type: "Portfolio",
    company: "Personal Project",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fportfolio_app.png?alt=media",
    bannerImage: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fbanner%2Fportfolio_app.png?alt=media",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.zeeshan.portfolio&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
      {
        platform: "web",
        url: "https://zeeshan-ayaz.web.app/?utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Web",
      },
    ],
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fportfolio_app_1.jpeg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fportfolio_app_2.jpeg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fportfolio_app_3.jpeg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fportfolio_app_4.jpeg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fportfolio_app_5.jpeg?alt=media",
      ],
      iOS: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fportfolio_app_1.jpeg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fportfolio_app_2.jpeg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fportfolio_app_3.jpeg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fportfolio_app_4.jpeg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fportfolio_app_5.jpeg?alt=media",
      ],
    },
    createdDate: "Jan, 2024",
    releasedDate: "Mar, 2024",
    stats: {
      downloads: "50+",
      rating: 5,
      reviews: "10+",
    },
    featured: true,
  },
  {
    id: "padzee",
    name: "Padzee - Online Clipboard",
    description: "Online portable clipboard to help you take notes on the go. No Login, No Hassle!",
    longDescription:
      "Padzee is your pocket-sized digital notepad. This free online clipboard lets you jot down ideas, reminders, and anything else that pops into your head – instantly. Capture Thoughts: Quickly save notes, big or small.",
    tech: ["Flutter", "Dart", "Android", "iOS", "REST APIs", "Firebase"],
    platforms: ["Android", "iOS", "Web"],
    type: "Clipboard, Online Notepad",
    company: "Genetech Solutions",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fpadzee.png?alt=media",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.padzee.bit14&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/us/app/padzee-online-clipboard/id6743198785?utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "App Store",
      },
      {
        platform: "web",
        url: "https://padzee.com/?utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Web",
      },
    ],
    bannerImage: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fbanner%2Fpadzee.png?alt=media",

    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fpadzee_1.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fpadzee_2.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fpadzee_3.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fpadzee_4.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fpadzee_5.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fpadzee_6.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fpadzee_7.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fpadzee_8.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fpadzee_9.png?alt=media",
      ],
      iOS: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_2.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_4.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_5.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_6.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_7.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_8.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fpadzee_9.jpg?alt=media",
      ],
    },
    createdDate: "Jan, 2024",
    releasedDate: "Mar, 2024",
    stats: {
      downloads: "50+",
      rating: 5,
      reviews: "10+",
    },
    featured: true,
  },
  {
    id: "ai-photobooth",
    name: "AI Photobooth",
    description: "Reimagine yourself. Generate AI-enhanced avatars with ease.",
    longDescription:
      "AI Photobooth is an innovative mobile application that combines cutting-edge AI technology with photo capturing. The app allows users to take pictures using their device’s camera and then processes the images to generate AI-enhanced avatars and photos. By leveraging advanced image processing algorithms and AI models, the app transforms ordinary photos into visually appealing, AI-generated artwork.",
    tech: ["Flutter", "Dart", "REST APIs", "AI Integration", "Camera", "Image Processing"],
    platforms: ["Android", "iOS"],
    type: "AI/Photo App",
    company: "Genetech Solutions",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fai_photobooth.png?alt=media",
    bannerImage: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fbanner%2Fai_photobooth.png?alt=media",
    storeLinks: [],
    screenshots: {
      iOS: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fai_photobooth_1.jpeg?alt=media&token=9fb4165d-e319-4afa-afb2-75b013a55ddd",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fai_photobooth_2.jpeg?alt=media&token=9fb4165d-e319-4afa-afb2-75b013a55ddd",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fai_photobooth_3.jpeg?alt=media&token=9fb4165d-e319-4afa-afb2-75b013a55ddd",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fai_photobooth_4.jpeg?alt=media&token=9fb4165d-e319-4afa-afb2-75b013a55ddd",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fai_photobooth_5.jpeg?alt=media&token=9fb4165d-e319-4afa-afb2-75b013a55ddd",
      ],
    },
    createdDate: "Jan, 2024",
    releasedDate: "Mar, 2024",
    stats: {
      downloads: "5K+",
      rating: 4.8,
      reviews: "120+",
    },
    featured: true,
  },
  {
    id: "340b-price-guide",
    name: "340B The Price Guide",
    description: "340B Price Guide mobile is an application for HRSA 340B covered entities.",
    longDescription: "340B Price Guide is an app that helps to estimate the price a patient will pay at a pharmacy. It is designed for clinical staff use rather than patients. It is free for staff members of CEs who have already enrolled online on behalf of their company.",
    tech: ["Flutter", "Dart", "REST APIs", "Healthcare", "Pricing Engine"],
    platforms: ["Android", "iOS"],
    company: "Genetech Solutions",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2F340b_price_guide.png?alt=media",
    bannerImage: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fbanner%2F340b.png?alt=media",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=us.rx340b.the_340b_price_guide",
        store: "Google Play",
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/us/app/340b-price-guide/id1076084307",
        store: "App Store",
      },
    ],
    type: "Healthcare App",
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2F340b_1.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2F340b_2.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2F340b_3.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2F340b_4.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2F340b_5.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2F340b_6.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2F340b_7.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2F340b_8.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2F340b_9.png?alt=media",
      ],
    },
    createdDate: "Sep, 2023",
    releasedDate: "Nov, 2023",
    stats: {
      downloads: "10K+",
      rating: 4.6,
      reviews: "250+",
    },
    featured: true,
  },
  {
    id: "write",
    name: "Write - Daily Note Organizer",
    description: "Organize daily notes easily.",
    longDescription: "Write is more than just a note-taking app; it\'s your digital notebook, designed to effortlessly capture your thoughts, ideas, and inspirations whenever they strike. With its intuitive interface and powerful features, Write empowers you to organize your life, unleash your creativity, and collaborate seamlessly with others.",
    tech: ["Flutter", "Dart", "Android", "iOS", "Firebase"],
    platforms: ["Android", "iOS", "Web"],
    type: "Clipboard, Online Notepad",
    company: "Personal Project",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fwrite.png?alt=media",
    bannerImage: "https://lh3.googleusercontent.com/PFv3nC4ZBf4QKbQswnw7EFp9mxYMQRFb-VlDWGhgbMr6THMOFIb8KQJl0mhy1muFbuk",
    storeLinks: [
      {
        platform: "web",
        url: "https://write-note-app.web.app/",
        store: "Web",
      },
    ],
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fwrite_1.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fwrite_2.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fwrite_3.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fwrite_4.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fwrite_5.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fwrite_6.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fwrite_7.png?alt=media",
      ],
    },
    createdDate: "Jan, 2024",
    releasedDate: "Mar, 2024",
    stats: {
      downloads: "50+",
      rating: 5,
      reviews: "10+",
    },
    featured: true,
  },
  {
    id: "nutri-west",
    name: "Nutri-west",
    description: "E-commerce app that offers various healthcare products.",
    longDescription:
      "Nutri-west is an e-commerce website that offers various Herbal, homeopathic, and general healthcare products to improve health and overall well-being. The Nutri-West App allows both patients and providers to login, purchase products, and manage their profiles.",
    tech: ["Flutter", "Dart", "REST APIs", "E-commerce"],
    platforms: ["Android", "iOS"],
    company: "Genetech Solutions",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.nutriwest.app",
        store: "Google Play",
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/us/app/nutri-west/id6476763673",
        store: "App Store",
      },
    ],
    type: "E-commerce App",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fnutriwest.png?alt=media",
    bannerImage: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fbanner%2Fnutriwest.webp?alt=media",
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fnutriwest_1.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fnutriwest_2.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fnutriwest_3.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fnutriwest_4.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fnutriwest_5.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fnutriwest_6.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fnutriwest_7.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fnutriwest_8.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fnutriwest_9.png?alt=media",
      ],
      iOS: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fnutriwest_1.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fnutriwest_2.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fnutriwest_3.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fnutriwest_4.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fnutriwest_5.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fnutriwest_6.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fnutriwest_7.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fnutriwest_8.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fnutriwest_9.png?alt=media",
      ],
    },
    createdDate: "Jun, 2023",
    releasedDate: "Aug, 2023",
    featured: true,
  },
  {
    id: "brokerware",
    name: "Brokerware, 3pl Systems Inc",
    description: "Brokerware is a world-class TMS platform that now has a native mobile app.",
    longDescription: "Revolutionizing the global transportation landscape with autonomous solutions, aiming to foster a more efficient, and sustainable future, where seamless integration is accessible to all.",
    tech: ["Flutter", "Dart", "REST APIs", "Real-time Tracking"],
    platforms: ["Android", "iOS"],
    company: "Genetech Solutions",
    type: "Logistics",
    bannerImage: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fbanner%2Fbrokerware.png?alt=media",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fbrokerware.png?alt=media",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.brokerware.app",
        store: "Google Play",
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/us/app/brokerware-mobile/id1612396311",
        store: "App Store",
      },
    ],
    screenshots: {
      android: [

      ],
    },
    createdDate: "Mar, 2023",
    releasedDate: "May, 2023",
    featured: true,
  },
  {
    id: "thaqalayn-kids",
    name: "Thaqalayn Kids",
    description: "An animated story application for children with educational content and games.",
    longDescription: "Thaqalayn Kids is an animated story application for children where they can listen to animated videos to build their character and play multiple games.",
    tech: ["Flutter", "Dart", "REST APIs", "Animation", "Games"],
    platforms: ["Android", "iOS"],
    company: "Freelance Client",
    type: "Educational App",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fthaqalayn_kids.png?alt=media",
    bannerImage: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fbanner%2Fthaqalayn_kids.png?alt=media",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.thaqalaynkids.app",
        store: "Google Play",
      },
      {
        platform: "iOS",
        url: "https://apps.apple.com/us/app/thaqalayn-kids/id1623543255",
        store: "App Store",
      },
    ],
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fkids_app_1.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fkids_app_2.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fkids_app_3.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fkids_app_4.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fkids_app_5.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fkids_app_6.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fkids_app_7.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fkids_app_8.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fkids_app_9.png?alt=media",
      ],
      iOS: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fkids_app_1.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fkids_app_2.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fkids_app_3.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fkids_app_4.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fkids_app_5.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fkids_app_6.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fkids_app_7.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fkids_app_8.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fios%2Fkids_app_9.png?alt=media",
      ],
    },
    createdDate: "Jan, 2023",
    releasedDate: "Mar, 2023",
    featured: true,
  },
  {
    id: "multi-timer-stopwatch",
    name: "Multi Timer Stopwatch",
    description: "Multi Timer Stopwatch. Create and use multiple timers simultaneously.",
    longDescription: "Multi Timer Stopwatch. Create and use multiple timers simultaneously.",
    tech: ["Android", "Kotlin", "XML", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Genetech Solutions",
    type: "Stopwatch",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fmulti_timer.png?alt=media",
    bannerImage: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fbanner%2Fmulti_timer.jpg?alt=media",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.bit14.multicountdowntimer&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
    ],
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmct_1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmct_2.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmct_3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmct_4.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmct_5.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmct_6.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmct_7.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmct_8.jpg?alt=media",
      ],
    },
    createdDate: "Jan, 2023",
    releasedDate: "Mar, 2023",
    featured: true,
  },
  {
    id: "amfs-online-mobile",
    name: "AMFS Online Mobile Application",
    description: "An educational app for students of Al Musleh Foundation School.",
    longDescription: "AMFS Online is an educational app where students can sharpen their skills, practice exercise and test themselves. Use can simply sign-in it with your GR #. It is designed for our kids to stay connected with their teachers while remaining at home.",
    tech: ["Android", "Kotlin", "XML", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Freelance Client",
    type: "Education",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Famfs.png?alt=media",
    bannerImage: "https://lh3.googleusercontent.com/wtA8W-WbkhAzJz6BX0RciTBwQEAQdW3OMi_WM36wev9tWaSCS3Q7v-t3CD6zo3PFU1I",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.zeeshan.amfsonline&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
    ],
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Famfs_online_1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Famfs_online_2.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Famfs_online_3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Famfs_online_4.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Famfs_online_5.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Famfs_online_6.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Famfs_online_7.jpg?alt=media",
      ],
    },
    stats: {
      downloads: "500+",
      rating: 5,
      reviews: "21+",
    },
    createdDate: "Mar, 2020",
    releasedDate: "Jul, 2020",
    featured: true,
  },
  {
    id: "pocket-mpos",
    name: "Pocket MPOS",
    description: "Customized POS software solution for current business need.",
    longDescription: "Pocket MPOS is the customized software solution for current business needs. This application is especially designed for small and medium enterprises. It includes the complete solution for business management. From purchase to sales, inventory management to finance management.",
    tech: ["Kotlin", "XML", "REST APIs", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Minhasoft",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fpocket_pos.png?alt=media",
    bannerImage: "https://lh3.googleusercontent.com/VsTaZBeR3kuFlyfZJwthqorH4jw4Z0S1kRfHQh6Y4EPu4b9KO2qIIt5fU7g7PW0_GCPN",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.minhasoft.mpos",
        store: "Google Play",
      },
    ],
    type: "POS",
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmpos_1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmpos_2.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmpos_3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmpos_4.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmpos_5.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fmpos_6.jpg?alt=media",
      ],
    },
    stats: {
      downloads: "100+"
    },
    createdDate: "Oct, 2022",
    releasedDate: "Dec, 2022",
    featured: true,
  },
  {
    id: "protein-district",
    name: "Protein District",
    description: "Your friendly neighborhood nutrition store! The first guilt-free concept store in GCC! Anything nutrition? We've got you!",
    longDescription: "Protein District is a newly established company striving to keep you healthy. We are the UAE first ever to bring you all your favorite healthy high protein snacks and the best healthy alternatives to achieve your fitness goals, pretty much in one place. Enjoy our range of products that help you to get fit and guilt free.",
    tech: ["Kotlin", "XML", "REST APIs", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Minhasoft",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fprotein_district.png?alt=media",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=pd.app&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
    ],
    type: "E-Commerce",
    screenshots: {},
    stats: {
      downloads: "100+"
    },
    createdDate: "Oct, 2022",
    releasedDate: "Dec, 2022",
    featured: true,
  },
  {
    id: "branddose",
    name: "Branddose",
    description: "An online retailer of high-end perfumes and other luxurious commodities",
    longDescription: "Branddose aims to offer the best in original brands, through a service that has the interest of our customers at heart. We strive for high quality combined with low prices. Our staff members are highly trained and able to answer any questions you might have with regards to our service or your orders.",
    tech: ["Kotlin", "XML", "REST APIs", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Minhasoft",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Fbranddose.png?alt=media",
    bannerImage: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fbanner%2Fbranddose.png?alt=media",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.branddose.app&utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
        store: "Google Play",
      },
    ],
    type: "E-Commerce",
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_1.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_2.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_3.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_4.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_5.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_6.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_7.jpg?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Fbranddose_8.jpg?alt=media",
      ],
    },
    stats: {
      downloads: "100+"
    },
    createdDate: "Oct, 2022",
    releasedDate: "Dec, 2022",
    featured: true,
  },
  {
    id: "razpay",
    name: "Razpay Digital Wallet",
    description: "",
    longDescription: "Introducing Razpay, your all-in-one solution for seamlessly managing and safeguarding your cryptocurrency assets. Razpay redefines the crypto wallet experience with its user-friendly interface, robust security features, and unparalleled functionality. Whether you're a seasoned crypto enthusiast or just venturing into the world of digital currencies, Razpay is designed to make your cryptocurrency transactions secure, efficient, and stress-free.",
    tech: ["Kotlin", "XML", "REST APIs", "Firebase", "SqlLite", "Room"],
    platforms: ["Android"],
    company: "Freelance Client",
    projectIcon: "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/project_thumbnails%2Frazpay_wallet.png?alt=media",
    storeLinks: [],
    github: "https://github.com/zeeshanayaz/razpay-wallet-app?utm_source=muhammad_zeeshan_portfolio&utm_medium=app&utm_campaign=marketing",
    type: "E-Commerce",
    screenshots: {
      Android: [
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Frazpay_1.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Frazpay_2.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Frazpay_3.png?alt=media",
        "https://firebasestorage.googleapis.com/v0/b/zeeshan-ayaz.appspot.com/o/mockups%2Fandroid%2Frazpay_4.jpg?alt=media",
      ],
    },
    createdDate: "2024",
    featured: true,
  },
]

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: "Custom Accordion",
    description:
      "A Flutter package that allows you to create an Expandable widget where each item can be expanded or collapsed by clicking on the header.",
    url: "https://pub.dev/packages/custom_accordion",
    type: "Flutter Package",
    github: "https://github.com/zeeshanayaz/custom_accordion",
  },
  {
    name: "Text Scaling Widget",
    description:
      "A versatile Flutter widget designed to dynamically scale text sizes based on customizable scaling factors for better accessibility and responsive design.",
    url: "https://github.com/zeeshanayaz/text_scaling_example",
    type: "Flutter Widget",
    github: "https://github.com/zeeshanayaz/text_scaling_example",
  },
]

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Software Engineering (BSSE)",
    institution: "University of Karachi",
    year: "2018",
    location: "Karachi, Pakistan",
  },
  {
    degree: "Intermediate",
    institution: "S.M Govt Science College",
    year: "2013",
  },
  {
    degree: "Matriculation",
    institution: "Jenning's Private Secondary School",
    year: "2011",
  },
]

export const achievementsData = [
  "Launched 15+ apps with 4+ average rating on both app stores",
  "Expert in both Android and iOS development",
  "Proficient in multiple programming languages and frameworks",
  "Reduced post-release bugs by 50% through unit and manual testing",
  "Published open-source packages used by the Flutter community",
]

export const services: Service[] = [
  {
    id: "app-development",
    title: "App Development",
    description:
      "Full-stack mobile application development for Android and iOS platforms using modern technologies like Flutter, Kotlin, and Java.",
    icon: "Smartphone",
    features: [
      "Native Android Development (Kotlin/Java)",
      "Cross-platform Development (Flutter, React Native)",
      "iOS Development",
      "API Integration",
      "Database Design & Implementation",
      "Performance Optimization",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging user interfaces with focus on user experience and modern design principles.",
    icon: "Palette",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Responsive Design",
      "Design System Creation",
      "Usability Testing",
    ],
  },
  {
    id: "app-publishing",
    title: "App Publishing",
    description: "Complete app store optimization and publishing services for Google Play Store and Apple App Store.",
    icon: "Upload",
    features: [
      "Google Play Store Publishing",
      "Apple App Store Publishing",
      "App Store Optimization (ASO)",
      "App Metadata Optimization",
      "Release Management",
      "Post-launch Support",
    ],
  },
]

export const achievements: Achievement[] = [
  {
    title: "15+ Apps Published",
    description:
      "Successfully launched and published over 15 mobile applications on both Google Play Store and Apple App Store",
    icon: "Trophy",
  },
  {
    title: "4+ Average Rating",
    description: "Maintained an average rating of 4+ stars across all published applications",
    icon: "Star",
  },
  {
    title: "Team Leadership",
    description:
      "Successfully mentored junior developers and led development teams to deliver high-quality software solutions",
    icon: "Users",
  },
  {
    title: "50% Bug Reduction",
    description: "Implemented automated testing processes that resulted in 50% reduction in post-release bugs",
    icon: "Shield",
  },
  {
    title: "Open Source Contributor",
    description: "Published Flutter packages used by the developer community with positive feedback",
    icon: "GitBranch",
  },
]

export const certifications: Certification[] = [
  {
    name: "Version Control with Git",
    issuer: "Coursera",
    date: "2023",
    icon: "Award",
  },
  {
    name: "Mobile App Development Certification",
    issuer: "Self-Certified",
    date: "2022",
    icon: "Award",
  },
]
