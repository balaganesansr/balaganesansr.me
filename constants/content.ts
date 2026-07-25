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
  role: "IT & Technical Support · Software Developer",
  tagline:
    "Diagnosing and fixing issues across live apps, servers, networks and hardware.",
  availability: "Available immediately - open to relocation",
  location: "Karaikudi, Tamil Nadu, India",
  email: "balaganesansr@gmail.com",
  phone: "+91 90257 88989",
  phoneHref: "tel:+919025788989",
  github: "https://github.com/balaganesansr",
  linkedin: "https://linkedin.com/in/balaganesansr",
  site: "https://balaganesansr.me",
  resume: "/Balaganesan-SR-Resume.pdf",
  locationLine:
    "Karaikudi, Tamil Nadu, India · IST (UTC+5:30) · Immediate availability · Open to relocation",
  about:
    "I handle the full technical support side of every project I work on: Windows and Linux administration, cloud server management, user accounts for 55+ platform users, and day-to-day support for clients and interns. I also build production software end to end - 7 Android apps live on Google Play - so when something breaks, I can trace it from the user's screen down to the server and fix it.",
  biodataRequest:
    "mailto:balaganesansr@gmail.com?subject=Biodata%20request&body=Hi%20Balaganesan%2C%0A%0AWe%20reviewed%20your%20portfolio%20and%20would%20like%20your%20detailed%20biodata.%0A%0AThanks",
};

export const STATS: Stat[] = [
  { value: 2, suffix: ".5", label: "Years Hands-on Experience" },
  { value: 55, suffix: "+", label: "Platform Users Supported" },
  { value: 7, suffix: "", label: "Live Apps Maintained" },
  { value: 10, suffix: "+", label: "Client Projects Delivered" },
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
    title: "Flutter Developer",
    org: "Quix Graphix",
    location: "Remote",
    kind: "role",
    summary:
      "Developed and delivered mobile applications and websites for agency clients - and owned the support side: client communication, issue resolution and ongoing updates on everything shipped.",
    highlights: [
      "Handled client communication, issue resolution and ongoing updates",
      "Built Fortune Digit - a numerology engine app (Pythagorean & Chaldean systems)",
      "Developed a sensor-driven Vastu compass app (gyroscope, accelerometer, magnetometer)",
    ],
    tags: ["Flutter", "Client Support", "Issue Resolution", "Firebase"],
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
      "Taken alongside the Quix Graphix engagement, during the final year of my degree. Built MegaMart - a full-stack e-commerce platform with React and Django, featuring OTP-verified login, an admin panel, and real-time order tracking.",
    highlights: [
      "OTP-verified login with payments and order tracking",
      "Full admin dashboard for catalogue and order management",
    ],
    tags: ["React.js", "Django", "PostgreSQL"],
  },
  {
    id: "zedindex",
    period: "MAR 2025 - PRESENT",
    year: "2025",
    title: "Software Developer & IT Support",
    org: "ZedIndex",
    location: "Karaikudi",
    kind: "role",
    summary:
      "First-line technical support for interns, clients and end users, alongside software delivery. Windows and Linux administration, OS deployment including network (PXE) boot, live cloud servers on DigitalOcean and AWS Lightsail, office IT from printers to firewall rules, and 7 live Android apps maintained on Google Play.",
    highlights: [
      "First-line support for interns, clients and end users - accounts, access, installation and usage issues",
      "OS installation and deployment on Windows & Linux, including network (PXE) boot",
      "Live cloud VMs (DigitalOcean, AWS Lightsail) - deployment, DNS, SSL, monitoring",
      "Office IT: printers, routers & Wi-Fi, LAN cabling, firewall rules, remote support (AnyDesk, TeamViewer)",
      "User accounts, approvals and credentials for a 55+ user internship platform",
    ],
    tags: ["IT Support", "Windows & Linux", "Networking", "Cloud VMs", "Play Store"],
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
      "Certifications: DevOps Internship (ISAN), Python & C (Sololearn), AI for India 2.0 (GUVI), Claude Code in Action (Anthropic)",
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
    id: "interns",
    name: "ZedIndex Interns",
    url: "https://interns.zedindex.com",
    urlLabel: "interns.zedindex.com",
    sector: "Internal Platform",
    role: "Build, deploy & support",
    built:
      "Internship management platform (Laravel, MySQL) used by 55+ interns - accounts, approvals and credentials managed end to end.",
    stack: ["Laravel", "MySQL", "User Management"],
  },
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
];

export const SKILL_DOMAINS: SkillDomain[] = [
  { id: "systems", label: "Systems & Hardware", ring: 1 },
  { id: "network", label: "Networking", ring: 2 },
  { id: "support", label: "User & Remote Support", ring: 3 },
  { id: "cloud", label: "Servers & Cloud", ring: 4 },
  { id: "dev", label: "Development & Automation", ring: 5 },
];

export const SKILLS: SkillNode[] = [
  { id: "windows", label: "Windows 10/11", domain: "systems", usedIn: ["Installation, configuration & troubleshooting"] },
  { id: "linux", label: "Ubuntu Linux Server", domain: "systems", usedIn: ["Live server administration at ZedIndex"] },
  { id: "pxe", label: "OS Deployment / PXE Boot", domain: "systems", usedIn: ["Network-boot OS installs at ZedIndex"] },
  { id: "pcbuild", label: "PC Building & Laptop Repair", domain: "systems", usedIn: ["RAM, SSD, motherboard & display replacement"] },
  { id: "printers", label: "Printer Setup & Support", domain: "systems", usedIn: ["Office IT at ZedIndex"] },
  { id: "iot", label: "ESP32 / IoT Devices", domain: "systems", usedIn: ["Device assembly & debugging"] },
  { id: "tcpip", label: "TCP/IP Fundamentals", domain: "network", usedIn: ["Office & server networking"] },
  { id: "wifi", label: "Router & Wi-Fi Setup", domain: "network", usedIn: ["Office IT at ZedIndex"] },
  { id: "lan", label: "LAN Cabling", domain: "network", usedIn: ["Office network setup"] },
  { id: "firewall", label: "Firewall Configuration", domain: "network", usedIn: ["Windows Firewall", "Linux & cloud firewalls"] },
  { id: "dns", label: "DNS & SSL", domain: "network", usedIn: ["Live domains for client sites"] },
  { id: "remote", label: "AnyDesk / TeamViewer", domain: "support", usedIn: ["Remote user support"] },
  { id: "rdp", label: "RustDesk / RDP / Chrome Remote", domain: "support", usedIn: ["Remote troubleshooting"] },
  { id: "accounts", label: "Account & Access Management", domain: "support", usedIn: ["55+ user internship platform"] },
  { id: "office", label: "Microsoft Office Support", domain: "support", usedIn: ["End-user support"] },
  { id: "docean", label: "DigitalOcean / AWS Lightsail", domain: "cloud", usedIn: ["Live cloud VMs - deploy, monitor, maintain"] },
  { id: "docker", label: "Docker & CI/CD", domain: "cloud", usedIn: ["ISAN internship", "App release pipelines"] },
  { id: "livesites", label: "Live Site Maintenance", domain: "cloud", usedIn: ["Client websites & web apps in production"] },
  { id: "flutter", label: "Flutter & Dart", domain: "dev", usedIn: ["All 7 Play Store apps"] },
  { id: "webstack", label: "React.js / Node.js", domain: "dev", usedIn: ["MegaMart", "Quick Chat"] },
  { id: "backend", label: "Django / Laravel / MySQL", domain: "dev", usedIn: ["MegaMart", "interns.zedindex.com"] },
  { id: "python", label: "Python & Windows Scripting", domain: "dev", usedIn: ["Automation & tooling"] },
  { id: "git", label: "Git / GitHub", domain: "dev", usedIn: ["All projects"] },
  { id: "aitools", label: "AI-Assisted Troubleshooting", domain: "dev", usedIn: ["Claude Code", "Cursor"] },
];

export const NAV_LINKS = [
  { href: "#journey", label: "Journey" },
  { href: "#apps", label: "Apps" },
  { href: "#work", label: "Web Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const SITE_META = {
  title: "Balaganesan SR - IT & Technical Support",
  description:
    "IT & technical support professional with 2.5 years of hands-on experience: Windows & Linux administration, networking, hardware troubleshooting, cloud servers and user support - plus 7 Android apps live on Google Play.",
  url: "https://balaganesansr.me",
};
