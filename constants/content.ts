import type {
  JourneyChapter,
  PlayApp,
  SkillDomain,
  SkillNode,
  Stat,
  WebProject,
} from "@/types/content";

/* ------------------------------------------------------------------ */
/* Every value in this file is sourced from the existing portfolio     */
/* (index.html), the verified biodata, or this candidate's documents.  */
/* Nothing here is invented.                                           */
/* ------------------------------------------------------------------ */

export const IDENTITY = {
  name: "Balaganesan SR",
  firstName: "Balaganesan",
  lastName: "SR",
  role: "Mobile & Full Stack Developer",
  tagline:
    "Building production-grade apps from architecture to deployment, end-to-end.",
  availability: "Available for opportunities worldwide",
  location: "Karaikudi, Tamil Nadu, India",
  email: "balaganesansr@gmail.com",
  phone: "+91 90257 88989",
  phoneHref: "tel:+919025788989",
  github: "https://github.com/balaganesansr",
  linkedin: "https://linkedin.com/in/balaganesansr",
  site: "https://balaganesansr.me",
  resume: "/Balaganesan-SR-Resume.pdf",
  locationLine:
    "Karaikudi, Tamil Nadu, India · IST (UTC+5:30) · Open to remote & relocation",
  about:
    "I started shipping real products in my second year of engineering - every role here ran alongside or straight out of my degree. What I'm looking for next: a team with senior engineers to learn from, building products bigger than one person can ship alone.",
  biodataRequest:
    "mailto:balaganesansr@gmail.com?subject=Biodata%20request&body=Hi%20Balaganesan%2C%0A%0AWe%20reviewed%20your%20portfolio%20and%20would%20like%20your%20detailed%20biodata.%0A%0AThanks",
};

export const STATS: Stat[] = [
  { value: 10, suffix: "+", label: "Live Products" },
  { value: 7, suffix: "", label: "Play Store Releases" },
  { value: 3, suffix: "", label: "B2B Clients" },
  { value: 2, suffix: "+", label: "Years Building" },
];

export const JOURNEY: JourneyChapter[] = [
  {
    id: "foundation",
    period: "JUL 2023 - AUG 2023",
    year: "2023",
    title: "API & DevOps Internships",
    org: "Fizon Tech · ISAN Data Systems",
    location: "India",
    kind: "internship",
    summary:
      "Two back-to-back internships that set the foundation: shipping REST APIs for a production OTA travel platform at Fizon Tech, then working with CI/CD pipelines, Docker and cloud deployment workflows at ISAN Data Systems.",
    highlights: [
      "Designed and developed REST APIs for an OTA (Online Travel Agency) platform",
      "Hands-on CI/CD pipelines, Docker containerisation and cloud deployment",
    ],
    tags: ["REST APIs", "Docker", "CI/CD", "Cloud"],
  },
  {
    id: "quix",
    period: "JAN 2024 - MAR 2025",
    year: "2024",
    title: "Lead Flutter Developer",
    org: "Quix Graphix",
    location: "Remote",
    kind: "role",
    summary:
      "Led client communications, technical scoping, and delivery of production Flutter and web applications. Built reusable UI component libraries and shipped multiple client-facing apps across e-commerce, wellness, and hospitality.",
    highlights: [
      "Built Fortune Digit - a numerology engine app (Pythagorean & Chaldean systems)",
      "Developed a sensor-driven Vastu compass app (gyroscope, accelerometer, magnetometer)",
      "Delivered client websites and a reusable Flutter UI component library",
    ],
    tags: ["Flutter", "BLoC", "REST APIs", "Firebase", "Client Delivery"],
  },
  {
    id: "oneyes",
    period: "JUL 2024 - AUG 2024",
    year: "2024",
    title: "Full Stack Developer Intern",
    org: "OneYes Infotech Solutions",
    location: "Chennai",
    kind: "internship",
    summary:
      "Taken alongside the Quix Graphix engagement, during the final year of my degree, to build full-stack depth beyond mobile. Built MegaMart - a full-stack e-commerce platform with React and Django, featuring Stripe payments, OTP email verification, an admin panel, and real-time order tracking.",
    highlights: [
      "Stripe payments with OTP-verified login and order tracking",
      "Full admin dashboard for catalogue and order management",
    ],
    tags: ["React.js", "Django", "Stripe", "PostgreSQL"],
  },
  {
    id: "zedindex",
    period: "MAR 2025 - PRESENT",
    year: "2025",
    title: "Software Developer & Trainer",
    org: "ZedIndex",
    location: "Karaikudi",
    kind: "role",
    summary:
      "Delivering B2B software solutions across education, wellness, and e-commerce. Published and maintain 7 Flutter apps on the Google Play Store - owning pipelines from architecture to live deployment - and training learners through course-based applications.",
    highlights: [
      "7 Flutter apps published and maintained on Google Play Store",
      "White-label course platform running in production for 3 separate clients",
      "Training learners through course-based applications",
    ],
    tags: ["Flutter", "Play Store", "B2B", "CI/CD", "White-label", "Training"],
  },
  {
    id: "education",
    period: "2021 - 2025",
    year: "2025",
    title: "B.E. Computer Science & Engineering",
    org: "Mount Zion College of Engineering & Technology · Anna University",
    location: "Tamil Nadu",
    kind: "education",
    summary:
      "First Class, CGPA 7.73/10 - a CS foundation built alongside real-world product development throughout the degree. Final-year project work graded O (Outstanding, 10/10).",
    highlights: [
      "Coursework: AI & ML, Cryptography & Cyber Security, Cloud Services, Embedded Systems & IoT, Web Application Security",
      "Guinness World Record participant - largest online programming lesson",
    ],
    tags: ["AI for India 2.0", "React Essentials", "Python Core"],
  },
];

export const APPS: PlayApp[] = [
  {
    id: "kmart",
    name: "K Mart",
    url: "https://play.google.com/store/apps/details?id=in.kajamart.customer",
    tagline: "Groceries, delivered to the doorstep.",
    description:
      "Doorstep grocery delivery with real-time order tracking, cart management, and payment integration.",
    features: [
      "Real-time order tracking",
      "Cart & checkout flow",
      "Integrated online payments",
      "Push notifications",
    ],
    stack: ["Flutter", "BLoC", "Firebase", "Payments"],
    motif: "grocery",
    hue: "#15803d",
    hue2: "#0c7a58",
  },
  {
    id: "brihaspati",
    name: "Brihaspati Gurukula",
    url: "https://play.google.com/store/apps/details?id=com.brihaspatigurukula.course",
    tagline: "A full learning platform in your pocket.",
    description:
      "Full-featured learning platform with course management, video content, and progress tracking.",
    features: [
      "Course management",
      "Video content delivery",
      "Progress tracking",
    ],
    stack: ["Flutter", "Clean Architecture", "Firebase"],
    motif: "course",
    hue: "#f59e0b",
    hue2: "#b98a2f",
  },
  {
    id: "kalamsa",
    name: "Kalamsa Paddhatti",
    url: "https://play.google.com/store/apps/details?id=com.brahmavedagurukula.course",
    tagline: "White-label platform, deployment two of three.",
    description:
      "White-label course app for Brahmavedha Gurukula - one of three clients running on the same platform.",
    features: [
      "Rebranded white-label build",
      "Structured course content",
      "Shared scalable core",
    ],
    stack: ["Flutter", "White-label", "Firebase"],
    motif: "course",
    hue: "#f97316",
    hue2: "#0c7a58",
  },
  {
    id: "gurujothidam",
    name: "Gurujothidam",
    url: "https://play.google.com/store/apps/details?id=com.gurujothidam.student",
    tagline: "The same platform, scaled to a third client.",
    description:
      "Student learning app - third deployment of the scalable white-label course platform.",
    features: [
      "Student-facing learning flows",
      "Third white-label deployment",
      "Play Store release & maintenance",
    ],
    stack: ["Flutter", "White-label", "CI/CD"],
    motif: "course",
    hue: "#eab308",
    hue2: "#b98a2f",
  },
  {
    id: "fortunedigit",
    name: "Fortune Digit",
    url: "https://play.google.com/store/apps/details?id=com.brahmaved.numerology",
    tagline: "A numerology engine with two calculation systems.",
    description:
      "Complex numerology engine with Pythagorean & Chaldean systems. Calculates from name, DOB, phone & gender.",
    features: [
      "Pythagorean & Chaldean engines",
      "Name / DOB / phone / gender inputs",
      "Detailed report generation",
    ],
    stack: ["Flutter", "Dart", "Calculation Engine"],
    motif: "numerology",
    hue: "#0c7a58",
    hue2: "#b98a2f",
  },
  {
    id: "vastu",
    name: "Vastu App",
    url: "https://play.google.com/store/apps/details?id=com.brahmaved.vastushastra",
    tagline: "Direction analysis, driven by real sensors.",
    description:
      "Sensor-driven direction app using gyroscope, accelerometer & magnetometer in real-time.",
    features: [
      "Gyroscope + accelerometer + magnetometer fusion",
      "Real-time direction analysis",
      "Vastu-specific guidance",
    ],
    stack: ["Flutter", "Sensor APIs", "Dart"],
    motif: "compass",
    hue: "#e0c368",
    hue2: "#15803d",
  },
  {
    id: "tarabala",
    name: "Tarabala",
    url: "https://play.google.com/store/apps/details?id=com.brihaspatigurukula.tarabala",
    tagline: "Astrology, computed with clean architecture.",
    description:
      "Astrology companion app built with clean BLoC architecture and complex calculation logic.",
    features: [
      "Complex astrological calculations",
      "Clean BLoC architecture",
      "Companion experience",
    ],
    stack: ["Flutter", "BLoC", "Dart"],
    motif: "astrology",
    hue: "#b98a2f",
    hue2: "#0c7a58",
  },
];

export const WEB_PROJECTS: WebProject[] = [
  {
    id: "balibkvilla",
    name: "Bali BK Villa",
    url: "https://balibkvilla.com",
    urlLabel: "balibkvilla.com",
    sector: "Hospitality",
    role: "Design & build - delivered at Quix Graphix",
    built:
      "Hospitality web application with a booking interface and backend service integration.",
    stack: ["Web", "Booking Flow", "Backend Integration"],
  },
  {
    id: "alphapromoters",
    name: "Alpha Promoters",
    url: "https://alphapromoters.in",
    urlLabel: "alphapromoters.in",
    sector: "Real Estate",
    role: "Design & build",
    built: "Real estate website with project showcases and lead capture.",
    stack: ["Web", "Lead Capture", "Showcase"],
  },
  {
    id: "artsyishu",
    name: "Artsy Ishu",
    url: "https://artsy.zedindex.com",
    urlLabel: "artsy.zedindex.com",
    sector: "Creative Portfolio",
    role: "Design & build - delivered at Quix Graphix",
    built:
      "Creative portfolio web app with dynamic galleries and content management.",
    stack: ["Web", "Galleries", "CMS"],
  },
  {
    id: "quixgraphix",
    name: "Quix Graphix",
    url: "https://quix.zedindex.com",
    urlLabel: "quix.zedindex.com",
    sector: "Agency",
    role: "Design & build",
    built:
      "Company portfolio showcasing Flutter UI components and project case studies.",
    stack: ["Web", "Component Showcase"],
  },
  {
    id: "padmavathy",
    name: "Padmavathy Crackers",
    url: "https://padmavathycrackers.com",
    urlLabel: "padmavathycrackers.com",
    sector: "E-commerce",
    role: "Design & build",
    built:
      "E-commerce platform for fireworks retail with catalogue and order management.",
    stack: ["Web", "E-commerce", "Order Management"],
  },
  {
    id: "quickchat",
    name: "Quick Chat",
    urlLabel: "Personal project",
    sector: "Realtime",
    role: "Personal project",
    built:
      "Real-time multi-user chat with online presence indicators, built with React.js, Node.js & WebSockets.",
    stack: ["React.js", "Node.js", "WebSockets"],
  },
  {
    id: "samriddhiglobal",
    name: "Samriddhi Global",
    url: "https://samriddhiglobal.in",
    urlLabel: "samriddhiglobal.in",
    sector: "HR & Staffing",
    role: "Design & build",
    built:
      "Corporate website for a global HR and workforce solutions firm - talent acquisition, staffing, RPO and executive search, with enquiry capture for hiring requests.",
    stack: ["Laravel", "Blade", "MySQL"],
  },
];

export const SKILL_DOMAINS: SkillDomain[] = [
  { id: "mobile", label: "Mobile", ring: 1 },
  { id: "web", label: "Frontend & Backend", ring: 2 },
  { id: "cloud", label: "Cloud & Data", ring: 3 },
  { id: "security", label: "Payments & Security", ring: 4 },
  { id: "ai", label: "AI-Assisted Development", ring: 5 },
];

export const SKILLS: SkillNode[] = [
  { id: "flutter", label: "Flutter & Dart", domain: "mobile", usedIn: ["All 7 Play Store apps"] },
  { id: "bloc", label: "BLoC / Cubit", domain: "mobile", usedIn: ["K Mart", "Tarabala", "Fortune Digit"] },
  { id: "cleanarch", label: "Clean Architecture", domain: "mobile", usedIn: ["Brihaspati Gurukula", "Tarabala"] },
  { id: "playstore", label: "Play Store Deployment", domain: "mobile", usedIn: ["All 7 published apps"] },
  { id: "sensors", label: "Sensor APIs", domain: "mobile", usedIn: ["Vastu App"] },
  { id: "react", label: "React.js", domain: "web", usedIn: ["MegaMart", "Quick Chat"] },
  { id: "node", label: "Node.js", domain: "web", usedIn: ["Quick Chat"] },
  { id: "django", label: "Django", domain: "web", usedIn: ["MegaMart"] },
  { id: "rest", label: "REST APIs / WebSockets", domain: "web", usedIn: ["OTA Platform (Fizon)", "Quick Chat"] },
  { id: "htmlcss", label: "HTML / CSS", domain: "web", usedIn: ["Client websites"] },
  { id: "firebase", label: "Firebase", domain: "cloud", usedIn: ["K Mart", "Course platform apps"] },
  { id: "awsgcp", label: "AWS / GCP", domain: "cloud", usedIn: ["Production deployments"] },
  { id: "docker", label: "Docker & CI/CD", domain: "cloud", usedIn: ["ISAN internship", "App release pipelines"] },
  { id: "sql", label: "MySQL / PostgreSQL", domain: "cloud", usedIn: ["MegaMart"] },
  { id: "mongo", label: "MongoDB", domain: "cloud", usedIn: ["Backend services"] },
  { id: "stripe", label: "Stripe", domain: "security", usedIn: ["MegaMart"] },
  { id: "razorpay", label: "Razorpay", domain: "security", usedIn: ["Payment integrations"] },
  { id: "oauth", label: "OAuth / JWT", domain: "security", usedIn: ["Drug Dispenser panel", "App auth"] },
  { id: "fireauth", label: "Firebase Auth", domain: "security", usedIn: ["Play Store apps"] },
  { id: "rbac", label: "RBAC", domain: "security", usedIn: ["Admin dashboards"] },
  { id: "claudecode", label: "Claude Code", domain: "ai", usedIn: ["Daily workflow"] },
  { id: "opencode", label: "OpenCode", domain: "ai", usedIn: ["Daily workflow"] },
  { id: "cursor", label: "Cursor", domain: "ai", usedIn: ["Daily workflow"] },
  { id: "codex", label: "OpenAI Codex", domain: "ai", usedIn: ["Daily workflow"] },
  { id: "localllm", label: "Local LLMs", domain: "ai", usedIn: ["LM Studio · Ollama · llama.cpp"] },
];

export const NAV_LINKS = [
  { href: "#journey", label: "Journey" },
  { href: "#apps", label: "Apps" },
  { href: "#work", label: "Web Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const SITE_META = {
  title: "Balaganesan SR - Mobile & Full Stack Developer",
  description:
    "Mobile & Full Stack Developer building production-grade apps end-to-end. 7 Flutter apps live on Google Play, full-stack delivery with React, Node.js and Django.",
  url: "https://balaganesansr.me",
};
