import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/data/site";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-dark border-t border-gold/20 text-white/70 overflow-hidden">
      
      {/* Background Luxury Glow & Subtle Image Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Footer Background"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-transparent" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 z-10">
        
        {/* Brand Column (Span 4) */}
        <div className="md:col-span-4 space-y-6">
          <div className="inline-flex items-center rounded-xl px-3 py-2 bg-gradient-to-b from-[#fdfaf5] to-[#f3ede1] shadow-[0_2px_12px_rgba(212,31,138,0.18)] ring-1 ring-white/40 w-fit">
            <Image
              src="/images/logo.jpeg"
              alt="Evio Elevator"
              width={150}
              height={42}
              className="h-9 w-auto object-contain"
            />
          </div>

          <p className="text-sm text-white/70 font-light max-w-sm leading-relaxed">
            Elevating lifestyles with world-class engineering, absolute safety, and uncompromised luxury living.
          </p>

          <div className="flex items-center gap-3 pt-2">
            {[
              { label: "FB", href: "#" },
              { label: "TW", href: "#" },
              { label: "IN", href: "#" },
              { label: "IG", href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-xs font-semibold text-white/70 hover:text-gold-light hover:border-gold-light/60 transition-all duration-300 shadow-md"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Links Columns (Span 5 total) */}
        <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <FooterColumn title="Quick Links" links={footerLinks.quickLinks} />
          <FooterColumn title="Our Products" links={footerLinks.ourProducts} />
          <FooterColumn title="Support" links={footerLinks.support} />
        </div>

        {/* Newsletter Column (Span 3) */}
        <div className="md:col-span-3 space-y-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-gold-light/30 text-gold-light text-[10px] font-semibold tracking-widest uppercase mb-2">
              <Sparkles className="w-2.5 h-2.5" /> Stay Updated
            </div>
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">Newsletter</h3>
            <p className="text-xs text-white/70 font-light mt-1">Subscribe to get exclusive architectural updates &amp; offers.</p>
          </div>

          <form className="flex mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border border-white/15 rounded-l-2xl px-4 py-3 text-xs w-full text-white placeholder:text-white/50 outline-none focus:border-gold-light transition-colors"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-gold text-white rounded-r-2xl px-5 flex items-center justify-center hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative border-t border-white/10 py-6 text-center text-xs text-white/60 font-light flex flex-col md:flex-row items-center justify-between max-w-[1440px] mx-auto px-6 lg:px-10 gap-3 z-10">
        <p>&copy; {new Date().getFullYear()} EVIO ELEVATOR. All Rights Reserved.</p>
        <p className="text-gold-light font-serif italic">Designed with passion for luxury living.</p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="space-y-4">
      <p className="font-serif text-xs font-bold text-gold-light uppercase tracking-widest">{title}</p>
      <ul className="space-y-2.5 text-xs text-white/70 font-light">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-gold-light transition-colors block py-0.5">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
