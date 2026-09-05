import type {
  StatItem,
  LiftCategory,
  LiftModel,
  FeatureItem,
  ProcessStep,
  Testimonial,
  Project,
  BlogPost,
  Certification,
} from "@/types";

export interface SubNavLink {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: SubNavLink[];
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { title: "R6051 - Automatic Elevator", description: "Auto passenger lift for commercial & residential buildings", href: "/products", icon: "Home" },
      { title: "R6052 - Manual Elevator", description: "Manual passenger lift for low-rise buildings", href: "/products", icon: "Building2" },
      { title: "R6053 - Hospital Elevator", description: "Stretcher lift built for healthcare environments", href: "/products", icon: "Maximize2" },
      { title: "R6054 - Goods Elevator", description: "Heavy-duty lift for cargo & industrial use", href: "/products", icon: "Wind" },
      { title: "R6061 - MRL Auto Elevator", description: "Machine Room-Less elevator for modern buildings", href: "/products", icon: "Crown" },
      { title: "R7066 - Home / Villa Elevator", description: "Compact, stylish elevator for residential interiors", href: "/products", icon: "Sparkles" },
    ]
  },
  {
    label: "Technology",
    href: "/technology",
    children: [
      { title: "PMSG Gearless Traction Motor", description: "Up to 40% energy savings with smooth, reliable performance", href: "/technology", icon: "Wind" },
      { title: "Advanced Control System", description: "Micro-controller technology with real-time diagnostics", href: "/technology", icon: "Cpu" },
      { title: "Smart Safety Features", description: "ERD, overload system, over-speed governor & fireman switch", href: "/technology", icon: "ShieldCheck" },
    ]
  },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const heroStats: StatItem[] = [
  { value: "20+", label: "Years of Excellence" },
  { value: "7", label: "Branch Locations" },
  { value: "6", label: "Consecutive Years Top 10" },
  { value: "100%", label: "Safety Assured" },
];

export const trustedBrands: string[] = [
  "AIDC",
  "Ahmedabad Municipal Corporation",
  "MSME / Govt. of India",
  "Elevator & Escalator Expo",
  "Make In India",
  "ISO Certified",
];

export const whyChooseUs: FeatureItem[] = [
  { icon: "cpu", title: "PMSG Gearless Technology" },
  { icon: "volume", title: "Silent & Smooth Operation" },
  { icon: "clock", title: "Quick Installation" },
  { icon: "lifebuoy", title: "Pan-India Service Support" },
];

export const liftCategories: LiftCategory[] = [
  {
    name: "Automatic Passenger Lift",
    tagline: "EVIO R6051 - Smooth & Reliable",
    image: "/images/lift-r6051.jpg",
    href: "#"
  },
  {
    name: "Hospital / Stretcher Lift",
    tagline: "EVIO R6053 - Built for Healthcare",
    image: "/images/lift-r6053.jpg",
    href: "#"
  },
  {
    name: "MRL Auto Elevator",
    tagline: "EVIO R6061 - Machine Room-Less",
    image: "/images/lift-r6061.jpg",
    href: "#"
  },
  {
    name: "Home / Villa Elevator",
    tagline: "EVIO R7066 - Compact & Stylish",
    image: "/images/lift-r7066.jpg",
    href: "#"
  },
];

export const aboutStats: StatItem[] = [
  { value: "2005", label: "Founded In" },
  { value: "18", label: "Years Top Supplier" },
  { value: "7", label: "Branches Across India" },
  { value: "24x7", label: "Customer Support" },
];

export const experienceTestimonials: Testimonial[] = [
  {
    name: "Rakesh Sharma",
    location: "Bhubaneswar",
    quote:
      "The EVIO elevator has completely transformed our building. The quality and smooth ride is beyond exceptional.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Priya Nair",
    location: "Ahmedabad",
    quote:
      "Excellent product and even better service. Installation was quick and hassle free.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Anirudh Mehta",
    location: "Kolkata",
    quote:
      "We love the elegant cabin design and the silent gearless operation. Highly recommended.",
    avatar: "/images/avatar-3.jpg",
  },
];

export const liftModels: LiftModel[] = [
  { name: "R6051 - Automatic Elevator", price: "4P to 26 Passenger", image: "/images/lift-r6051.jpg" },
  { name: "R6053 - Hospital Elevator", price: "13P to 26 Passenger", image: "/images/lift-r6053.jpg", featured: true },
  { name: "R6061 - MRL Auto Elevator", price: "4P to 26 Passenger", image: "/images/lift-r6061.jpg" },
];

export const technologyFeatures: string[] = [
  "Permanent Magnet Synchronous Gearless Traction Motor",
  "Up to 40% Energy Savings",
  "Advanced Micro-Controller Control System",
  "Real-Time Diagnostics & Remote Monitoring",
  "Top Advanced Door Operator System",
];

export const installationProcess: ProcessStep[] = [
  { step: "01", title: "Consultation", description: "Understand your building & needs" },
  { step: "02", title: "Site Visit", description: "Professional site assessment" },
  { step: "03", title: "Manufacturing", description: "Precision built at our Surat facility" },
  { step: "04", title: "Installation", description: "Quick & clean installation" },
  { step: "05", title: "Testing", description: "Multi-stage quality & safety checks" },
  { step: "06", title: "Handover", description: "Safe & secure delivery with AMC support" },
];

export const galleryImages: string[] = [
  "/images/lift-r6051.jpg",
  "/images/control-panel.jpg",
  "/images/door-operator.jpg",
  "/images/cop-panel.jpg",
  "/images/motor-heavy.jpg",
  "/images/factory-floor1.jpg",
  "/images/factory-floor2.jpg",
  "/images/lift-r7066.jpg",
];

export const safetyFeatures: string[] = [
  "ERD - EVIO Rescue Device",
  "Over Load System",
  "Over Speed Governor",
  "Infra Red Door Sensors",
  "Fireman Switch",
  "Advanced 3-Type Security (Card / Password / Biometric)",
];

export const certifications: Certification[] = [
  { name: "ISO 9001:2015 Quality Management", icon: "iso" },
  { name: "ISO 45001:2018 Occupational Health & Safety", icon: "ce" },
  { name: "Udyam Registered (MSME, Govt. of India)", icon: "quality" },
];

export const projectCategories: string[] = ["All", "Homes", "Villas", "Hospitals", "Commercial", "Hotels"];

export const projects: Project[] = [
  { name: "Bhubaneswar Residence", category: "Homes", image: "/images/lift-r7066.jpg" },
  { name: "Ahmedabad Villa Project", category: "Villas", image: "/images/lift-r6061.jpg" },
  { name: "City Hospital Elevator", category: "Hospitals", image: "/images/lift-r6053.jpg" },
  { name: "Grand Hotel Lobby", category: "Hotels", image: "/images/lift-r6051.jpg" },
];

export const customerReviews: Testimonial[] = [
  {
    name: "Rakesh Sharma",
    location: "Bhubaneswar",
    quote: "The EVIO elevator has completely transformed our building. The quality and smooth ride is beyond exceptional.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Priya Nair",
    location: "Ahmedabad",
    quote: "Excellent product and even better service. Installation was quick and hassle free.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Anirudh Mehta",
    location: "Kolkata",
    quote: "We love the elegant cabin design and the silent gearless operation. Highly recommended.",
    avatar: "/images/avatar-3.jpg",
  },
];

export const blogPosts: BlogPost[] = [
  { title: "Benefits of Machine Room-Less (MRL) Elevators", date: "25 Apr 2024", image: "/images/lift-r6061.jpg", href: "#" },
  { title: "How to Choose the Right Elevator for Your Building", date: "18 Apr 2024", image: "/images/lift-r6051.jpg", href: "#" },
  { title: "Why PMSG Gearless Motors Save Up to 40% Energy", date: "10 Apr 2024", image: "/images/motor-heavy.jpg", href: "#" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  ourProducts: [
    { label: "Automatic Elevator (R6051)", href: "#" },
    { label: "Manual Elevator (R6052)", href: "#" },
    { label: "Hospital Elevator (R6053)", href: "#" },
    { label: "Goods Elevator (R6054)", href: "#" },
    { label: "MRL Auto Elevator (R6061)", href: "#" },
    { label: "Home / Villa Elevator (R7066)", href: "#" },
  ],
  support: [
    { label: "Installation", href: "#" },
    { label: "AMC / Warranty", href: "#" },
    { label: "Maintenance", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Downloads", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};
