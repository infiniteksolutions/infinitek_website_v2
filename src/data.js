import {
  Palette,
  Code2,
  Smartphone,
  Server,
  Zap,
  Eye,
  Cpu,
  Headphones,
} from "lucide-react";

export const NAV = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Work", "work"],
  ["Process", "process"],
  ["Pricing", "pricing"],
  ["FAQ", "faq"],
  ["Contact", "contact"],
];

export const SERVICES = [
  {
    no: "01",
    Icon: Palette,
    title: "Creative & Design",
    desc: "Brand identity, UI/UX, and visual design that sets you apart.",
    points: [
      "Brand Identity Design",
      "UI/UX Design",
      "Presentation Design",
      "3D Rendering",
    ],
  },
  {
    no: "02",
    Icon: Code2,
    title: "Web Development",
    desc: "Custom websites and full-stack web applications.",
    points: [
      "WordPress Development",
      "Shopify Stores",
      "Static HTML/CSS Websites",
      "Full-Stack Apps (MERN / Next.js)",
    ],
  },
  {
    no: "03",
    Icon: Smartphone,
    title: "Mobile & App Development",
    desc: "Cross-platform and native mobile applications.",
    points: [
      "Hybrid Apps (React Native)",
      "Native iOS & Android Apps",
    ],
  },
  {
    no: "04",
    Icon: Server,
    title: "Business & Infrastructure",
    desc: "CRM automation, server setup, and domain configuration.",
    points: [
      "GoHighLevel (GHL) CRM Setup",
      "VPS / Server Deployment",
      "GoDaddy Domain & SSL Config",
      "Hostinger Configuration",
      "Namecheap Configuration",
    ],
  },
];

export const PILLARS = [
  {
    Icon: Zap,
    title: "Result-Driven Builds",
    desc: "Every site and system is built around your business goals — not just how it looks.",
  },
  {
    Icon: Eye,
    title: "Full Transparency",
    desc: "Weekly progress updates so you always know exactly where your project stands.",
  },
  {
    Icon: Cpu,
    title: "Modern Tech Stack",
    desc: "React, Node.js, Express & MongoDB — engineered to scale as you grow.",
  },
  {
    Icon: Headphones,
    title: "Dedicated Support",
    desc: "Direct access to your development team, not a faceless ticket queue.",
  },
];

export const STEPS = [
  {
    no: "01",
    title: "Discovery & Planning",
    dur: "~1 week",
    desc: "We map your features, design preferences, and goals, then build wireframes and mockups so we're aligned before a single line of code.",
  },
  {
    no: "02",
    title: "Development",
    dur: "~4–5 weeks",
    desc: "We build your website and CRM in parallel, then integrate them so data flows seamlessly between the two.",
  },
  {
    no: "03",
    title: "Testing & QA",
    dur: "~1 week",
    desc: "Cross-browser, cross-device testing and bug fixes — everything gets checked before anything goes live.",
  },
  {
    no: "04",
    title: "Launch & Support",
    dur: "Ongoing",
    desc: "Deployment plus post-launch support to handle anything that comes up after you go live.",
  },
];

// NOTE: Example pricing — replace with your real figures before publishing.
export const PLANS = [
  {
    name: "Website Starter",
    best: "Brochure & portfolio sites",
    price: "$499",
    pop: false,
    feats: [
      "Up to 5 pages",
      "Fully responsive design",
      "Contact form",
      "Basic SEO setup",
      "1 round of revisions",
    ],
    cta: "Get Started",
  },
  {
    name: "Business Website",
    best: "Booking, galleries & V-Card",
    price: "$1,299",
    pop: true,
    feats: [
      "Everything in Starter",
      "Booking / request system",
      "Digital V-Card + QR",
      "Image & reels gallery",
      "Easy-edit content system",
    ],
    cta: "Get Started",
  },
  {
    name: "Website + CRM",
    best: "Full e-commerce + management",
    price: "$2,999",
    pop: false,
    feats: [
      "Everything in Business",
      "E-commerce storefront",
      "Custom CRM dashboard",
      "Order & dispatch tracking",
      "Role-based team access",
    ],
    cta: "Request Quote",
  },
];

export const FAQS = [
  {
    q: "What services do you offer?",
    a: "We build custom websites, e-commerce platforms, and CRM systems using React, Node.js, Express, and MongoDB — all tailored to your business processes rather than generic templates.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most websites take about 3 weeks; CRM systems take 4–5 weeks. Combined projects typically run around 8 weeks depending on scope.",
  },
  {
    q: "Will I get regular updates during development?",
    a: "Yes — we share progress updates throughout planning, development, and testing so you always know where things stand.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Absolutely. We provide post-launch support to handle bug fixes and adjustments once your project is live.",
  },
  {
    q: "Can I get a custom package outside these services?",
    a: "Of course — reach out with your requirements and we'll scope a custom quote built around exactly what you need.",
  },
];

export const CONTACT = {
  landline: "051-5147224",
  landlineHref: "tel:0515147224",
  hotline: "0333-444-6786",
  hotlineHref: "https://wa.me/923334446786",
  email: "info@infiniteksolutions.com",
  address: "38 Westeria Rd, DHA Phase II, Islamabad",
  website: "infiniteksolutions.com",
  websiteHref: "https://infiniteksolutions.com",
};

// ---- Work / Portfolio ----
export const workFilters = [
  { value: "all", label: "All Categories" },
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
];

export const works = [
  {
    cover: "/images/infingration.webp",
    title: "Infinigration CRM",
    description:
      "A custom CRM built for a visa immigration business, managing roles like sales, marketing, finance, operations, and admin. Designed for smooth workflow and role-based access.",
    preview: "",
    codeBase: "",
    category: ["all", "development", "custom crm"],
  },
  {
    cover: "/images/iqra.webp",
    title: "Iqra Quran Institute",
    description:
      "Designed and developed a clean, modern website for an international Quran teaching institute. Built to support students worldwide with an easy-to-navigate UI.",
    preview: "",
    codeBase: "",
    category: ["all", "design", "development"],
  },
  {
    cover: "/images/resourcify.webp",
    title: "Resourcify",
    description:
      "A university platform for booking discussion rooms, borrowing library items, and accessing lab software. Built for students and staff at COMSATS University.",
    preview: "",
    codeBase: "",
    category: ["all", "design", "development"],
  },
  {
    cover: "/images/sparkpro.webp",
    title: "Sparkpro",
    description:
      "Handled both design and development for this BPO company's website. Focused on clean visuals, service highlights, and a professional brand identity.",
    preview: "",
    codeBase: "",
    category: ["all", "design", "development"],
  },
];

// ---- Team ----
// Add a photo to /public/images/team/ and reference it here. If `photo` is
// empty (or the file is missing), the card shows an initials avatar instead.
export const team = [
  {
    photo: "/images/team/kashif.jpeg",
    name: "Kashif Iqbal",
    role: "CEO & Founder",
    intro:
      "Leads Infinitek's vision and client partnerships, making sure every build is grounded in how your business actually runs.",
  },
  {
    photo: "/images/team/maariyam.jpeg",
    name: "Mariyam Ghulam",
    role: "Co Founder",
    intro:
      "Short introduction goes here — what they specialize in and the value they bring to your projects.",
  },
  {
    photo: "/images/team/shahzaib.png",
    name: "Shahzaib Khan",
    role: "Full Stack Developer & Designer",
    intro:
      "Expert in creating smooth websites, mobile apps, and strong brands with 6+ years of experience.",
  },
];
