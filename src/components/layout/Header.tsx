import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/site";
import Button from "@/components/ui/Button";
import { 
  ChevronDown, 
  Home, 
  Building2, 
  Maximize2, 
  Wind, 
  Crown, 
  Sparkles, 
  Cpu, 
  ShieldCheck 
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Building2,
  Maximize2,
  Wind,
  Crown,
  Sparkles,
  Cpu,
  ShieldCheck,
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg-alt/95 backdrop-blur border-b border-border">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        <Link href="#home" className="shrink-0 inline-flex items-center">
          <Image
            src="/images/logo.jpeg"
            alt="Evio Elevator"
            width={160}
            height={44}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-text-muted">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group py-2">
              <Link
                href={link.href}
                className="flex items-center gap-1 hover:text-gold transition-colors"
              >
                {link.label}
                {link.children && (
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                )}
              </Link>

              {/* Mega Menu Dropdown */}
              {link.children && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out">
                  <div className="w-[660px] bg-surface text-text shadow-2xl rounded-2xl p-4 border border-border grid grid-cols-2 gap-2 relative">
                    {/* Center Divider Line */}
                    <div className="absolute top-4 bottom-4 left-1/2 -translate-x-1/2 w-[1px] bg-gold/10 hidden sm:block" />

                    {link.children.map((child) => {
                      const IconComponent = child.icon ? iconMap[child.icon] || Home : Home;
                      return (
                        <Link
                          key={child.title}
                          href={child.href}
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-bg-alt transition-colors group/item"
                        >
                          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover/item:bg-gold group-hover/item:text-white transition-colors">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-text group-hover/item:text-gold transition-colors">
                              {child.title}
                            </p>
                            <p className="text-xs text-text-muted mt-0.5 line-clamp-2 leading-relaxed">
                              {child.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <Button variant="gold" className="hidden md:inline-flex text-xs px-5 py-2.5">
          Get a Free Quote
        </Button>
      </div>
    </header>
  );
}