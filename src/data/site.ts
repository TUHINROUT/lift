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
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  {
    label: "Products",
    href: "#products",
    children: [
      { title: "Home Lifts", description: "Compact & elegant lifts for residential spaces", href: "#products", icon: "Home" },
      { title: "Villa Lifts", description: "Luxury vertical transit tailored for villas", href: "#products", icon: "Building2" },
      { title: "Capsule Lifts", description: "Panoramic glass experiences with stunning views", href: "#products", icon: "Maximize2" },
      { title: "Model Air", description: "Pneumatic vacuum lift requiring zero pit or machine room", href: "#products", icon: "Wind" },
      { title: "Model Max", description: "Spacious luxury cabin designed for maximum comfort", href: "#products", icon: "Crown" },
      { title: "Model Ultra", description: "State-of-the-art engineering masterpiece", href: "#products", icon: "Sparkles" },
    ]
  },
  {
    label: "Technology",
    href: "#technology",
    children: [
      { title: "Pneumatic Vacuum System", description: "Air-driven technology requiring minimal maintenance", href: "#technology", icon: "Wind" },
      { title: "Gearless Technology", description: "Silent, smooth, and energy-efficient operation", href: "#technology", icon: "Cpu" },
      { title: "Smart Safety Features", description: "Automatic rescue device, overload protection & alarms", href: "#technology", icon: "ShieldCheck" },
    ]
  },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const heroStats: StatItem[] = [
  { value: "15+", label: "Years of Excellence" },
  { value: "5000+", label: "Happy Customers" },
  { value: "25+", label: "Countries" },
  { value: "100%", label: "Safety Assured" },
];

export const trustedBrands: string[] = [
  "DLF",
  "Godrej",
  "Prestige",
  "SOBHA",
  "BRIGADE",
  "OMAXE",
];

export const whyChooseUs: FeatureItem[] = [
  { icon: "cpu", title: "European Technology" },
  { icon: "volume", title: "Silent & Smooth Operation" },
  { icon: "clock", title: "Quick Installation" },
  { icon: "lifebuoy", title: "Lifetime Support" },
];

export const liftCategories: LiftCategory[] = [
  {
    name: "Home Lifts",
    tagline: "Compact & Elegant",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    href: "#"
  },
  {
    name: "Villa Lifts",
    tagline: "Luxury Redefined",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    href: "#"
  },
  {
    name: "Capsule Lifts",
    tagline: "Panoramic Experience",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    href: "#"
  },
  {
    name: "Panoramic Lifts",
    tagline: "See Beyond Limits",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    href: "#"
  },
];

export const aboutStats: StatItem[] = [
  { value: "15+", label: "Years of Excellence" },
  { value: "5000+", label: "Installations" },
  { value: "25+", label: "Countries" },
  { value: "24x7", label: "Customer Support" },
];

export const experienceTestimonials: Testimonial[] = [
  {
    name: "Rakesh Sharma",
    location: "Bangalore",
    quote:
      "The lift has completely transformed our home. The quality and smooth experience is beyond exceptional.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Priya Nair",
    location: "Mumbai",
    quote:
      "Excellent product and even better service. Installation was quick and hassle free.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Anirudh Mehta",
    location: "Hyderabad",
    quote:
      "We love the elegant design and the silent operation. Highly recommended.",
    avatar: "/images/avatar-3.jpg",
  },
];

export const liftModels: LiftModel[] = [
  { name: "Model Air", price: "₹ 12.5 Lakh*", image: "/images/model-air.jpg" },
  { name: "Model Max", price: "₹ 16.8 Lakh*", image: "/images/model-max.jpg", featured: true },
  { name: "Model Ultra", price: "₹ 21.5 Lakh*", image: "/images/model-ultra.jpg" },
];

export const technologyFeatures: string[] = [
  "Gearless Technology",
  "Pneumatic Vacuum System",
  "Smooth & Silent Ride",
  "Energy Efficient",
  "Low Maintenance",
];

export const installationProcess: ProcessStep[] = [
  { step: "01", title: "Consultation", description: "Understand your needs" },
  { step: "02", title: "Site Visit", description: "Professional site assessment" },
  { step: "03", title: "Manufacturing", description: "Precision built to perfection" },
  { step: "04", title: "Installation", description: "Quick & clean installation" },
  { step: "05", title: "Testing", description: "100+ quality checks" },
  { step: "06", title: "Handover", description: "Safe & secure delivery" },
];

export const galleryImages: string[] = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
];

export const safetyFeatures: string[] = [
  "Emergency Stop",
  "Auto Rescue Device",
  "Overload Protection",
  "Child Safety Lock",
  "Fire Resistant",
];

export const certifications: Certification[] = [
  { name: "ISO Certified", icon: "iso" },
  { name: "CE Certified", icon: "ce" },
  { name: "Quality Certified", icon: "quality" },
];

export const projectCategories: string[] = ["All", "Homes", "Villas", "Apartments", "Commercial", "Hotels"];

export const projects: Project[] = [
  { name: "Whitefield Residence", category: "Homes", image: "/images/project-1.jpg" },
  { name: "Palm Meadows Villa", category: "Villas", image: "/images/project-2.jpg" },
  { name: "Skyline Apartments", category: "Apartments", image: "/images/project-3.jpg" },
  { name: "Grand Hotel Lobby", category: "Hotels", image: "/images/project-4.jpg" },
];

export const customerReviews: Testimonial[] = [
  {
    name: "Rakesh Sharma",
    location: "Bangalore",
    quote: "The lift has completely transformed our home. The quality and smooth experience is beyond exceptional.",
    avatar: "/images/avatar-1.jpg",
  },
  {
    name: "Priya Nair",
    location: "Mumbai",
    quote: "Excellent product and even better service. Installation was quick and hassle free.",
    avatar: "/images/avatar-2.jpg",
  },
  {
    name: "Anirudh Mehta",
    location: "Hyderabad",
    quote: "We love the elegant design and the silent operation. Highly recommended.",
    avatar: "/images/avatar-3.jpg",
  },
];

export const blogPosts: BlogPost[] = [
  { title: "Benefits of Home Elevators", date: "25 Apr 2024", image: "/images/blog-1.jpg", href: "#" },
  { title: "How to Choose the Right Home Lift", date: "18 Apr 2024", image: "/images/blog-2.jpg", href: "#" },
  { title: "Future of Home Elevators", date: "10 Apr 2024", image: "/images/blog-3.jpg", href: "#" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  ourProducts: [
    { label: "Home Lifts", href: "#" },
    { label: "Villa Lifts", href: "#" },
    { label: "Capsule Lifts", href: "#" },
    { label: "Panoramic Lifts", href: "#" },
    { label: "Model Air", href: "#" },
    { label: "Model Max", href: "#" },
    { label: "Model Ultra", href: "#" },
  ],
  support: [
    { label: "Installation", href: "#" },
    { label: "Warranty", href: "#" },
    { label: "Maintenance", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Downloads", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};