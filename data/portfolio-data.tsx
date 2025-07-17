export interface PersonalInfo {
  name: string
  title: string
  summary: string
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
  storeLinks: {
    platform: "Android" | "iOS"
    url: string
    store: "Google Play" | "App Store"
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
  company: "Genetech Solutions" | "Minhasoft" | "Freelance Client"
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
  title: "Software Developer & Mobile App Specialist",
  summary:
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
  { name: "Flutter/Dart", category: "framework", icon: "Smartphone" },
  { name: "SQL", category: "database", icon: "Database" },
  { name: "Firebase", category: "database", icon: "Flame" },
  { name: "Supabase", category: "database", icon: "Zap" },
  { name: "Git", category: "tool", icon: "GitBranch" },
  { name: "Android Development", category: "platform", icon: "Smartphone" },
  { name: "iOS Development", category: "platform", icon: "Smartphone" },
  { name: "REST APIs", category: "tool", icon: "Globe" },
  { name: "UI/UX Design", category: "tool", icon: "Palette" },
  { name: "Cross-platform Development", category: "framework", icon: "Monitor" },
  { name: "App Store Deployment", category: "platform", icon: "Upload" },
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
    id: "ai-photobooth",
    name: "AI Photobooth",
    description: "An innovative mobile application that combines cutting-edge AI technology with photo capturing.",
    longDescription:
      "Introducing AI Photobooth, your all-in-one solution for creating stunning AI-enhanced photos and avatars. AI Photobooth redefines the photo editing experience with its user-friendly interface, robust AI features, and unparalleled functionality. Whether you're a seasoned photography enthusiast or just venturing into the world of AI-enhanced images, AI Photobooth is designed to make your photo transformations secure, efficient, and stress-free.",
    tech: ["Flutter", "Dart", "REST APIs", "AI Integration", "Camera", "Image Processing"],
    platforms: ["Android", "iOS"],
    type: "AI/Photo App",
    company: "Genetech Solutions",
    storeLinks: [],
    bannerImage: "/placeholder.svg?height=200&width=400",
    screenshots: {
      Android: [
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
      ],
      iOS: [
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
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
    description: "An app that helps estimate the price a patient will pay at a pharmacy.",
    longDescription:
      "340B Price Guide is a comprehensive application designed specifically for clinical staff to estimate patient pharmacy costs. The app provides accurate pricing information for 340B covered entities and includes features for staff enrollment, price calculations, and patient cost estimates. It's designed for healthcare professionals to streamline the pricing process and improve patient care.",
    tech: ["Flutter", "Dart", "REST APIs", "Healthcare", "Pricing Engine"],
    platforms: ["Android", "iOS"],
    company: "Genetech Solutions",
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
    bannerImage: "/placeholder.svg?height=200&width=400",
    screenshots: {
      Android: [
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
      ],
      iOS: [
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
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
    id: "nutri-west",
    name: "Nutri-west",
    description: "An e-commerce platform offering herbal, homeopathic, and general healthcare products.",
    longDescription:
      "Nutri-west is a comprehensive e-commerce platform that offers various herbal, homeopathic, and general healthcare products to improve health and overall well-being. The Nutri-West App allows both patients and providers to login, purchase products, manage their profiles, and access a wide range of health supplements and wellness products.",
    tech: ["Flutter", "Dart", "REST APIs", "E-commerce", "Payment Gateway", "User Management"],
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
    bannerImage: "/placeholder.svg?height=200&width=400",
    screenshots: {
      Android: [
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
      ],
      iOS: [], // Assuming no specific iOS screenshots were provided for this project
    },
    createdDate: "Jun, 2023",
    releasedDate: "Aug, 2023",
    featured: true,
  },
  {
    id: "brokerware",
    name: "Brokerware",
    description: "Revolutionizing the global transportation landscape with autonomous solutions.",
    longDescription:
      "Brokerware is transforming the transportation industry by providing cutting-edge solutions for logistics and freight management. The platform aims to foster a more efficient and sustainable future where seamless integration of transportation services is accessible to all stakeholders in the supply chain.",
    tech: ["Flutter", "Dart", "REST APIs", "GPS", "Real-time Tracking"],
    platforms: ["Android", "iOS"],
    company: "Genetech Solutions",
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
    type: "Transportation App",
    bannerImage: "/placeholder.svg?height=200&width=400",
    screenshots: {
      Android: [
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
      ],
      iOS: [], // Assuming no specific iOS screenshots were provided for this project
    },
    createdDate: "Mar, 2023",
    releasedDate: "May, 2023",
    featured: true,
  },
  {
    id: "thaqalayn-kids",
    name: "Thaqalayn Kids",
    description: "An animated story application for children with educational content and games.",
    longDescription:
      "Thaqalayn Kids is an engaging animated story application designed specifically for children. The app features interactive animated videos that help build character and moral values, along with multiple educational games that make learning fun and engaging for young minds.",
    tech: ["Flutter", "Dart", "REST APIs", "Animation", "Video Streaming", "Games"],
    platforms: ["Android", "iOS"],
    company: "Freelance Client",
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
    type: "Educational App",
    bannerImage: "/placeholder.svg?height=200&width=400",
    screenshots: {
      Android: [
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
      ],
      iOS: [], // Assuming no specific iOS screenshots were provided for this project
    },
    createdDate: "Jan, 2023",
    releasedDate: "Mar, 2023",
    featured: false,
  },
  {
    id: "pocket-mpos",
    name: "Pocket MPOS",
    description: "Customized software solution for small and medium enterprises business management.",
    longDescription:
      "Pocket MPOS is a comprehensive business management solution designed specifically for small and medium enterprises. The application includes complete solutions for business management, from purchase to sales, inventory management to finance management, providing everything needed to run a successful business.",
    tech: ["Kotlin", "XML", "REST APIs", "Firebase", "Business Logic"],
    platforms: ["Android"],
    company: "Minhasoft",
    storeLinks: [
      {
        platform: "Android",
        url: "https://play.google.com/store/apps/details?id=com.minhasoft.mpos",
        store: "Google Play",
      },
    ],
    type: "Business App",
    bannerImage: "/placeholder.svg?height=200&width=400",
    screenshots: {
      Android: [
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
        "/placeholder.svg?height=600&width=300",
      ],
    },
    createdDate: "Oct, 2022",
    releasedDate: "Dec, 2022",
    featured: false,
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
  "Launched 5+ apps with 4.5+ average rating on both app stores",
  "Expert in both Android and iOS development",
  "Proficient in multiple programming languages and frameworks",
  "Successfully mentored junior developers",
  "Reduced post-release bugs by 50% through automated testing",
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
      "Cross-platform Development (Flutter)",
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
    title: "5+ Apps Published",
    description:
      "Successfully launched and published over 5 mobile applications on both Google Play Store and Apple App Store",
    icon: "Trophy",
  },
  {
    title: "4.5+ Average Rating",
    description: "Maintained an average rating of 4.5+ stars across all published applications",
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
