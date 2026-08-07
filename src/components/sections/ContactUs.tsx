import SectionLabel from "@/components/ui/SectionLabel";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const contactDetails = [
  { icon: <MapPin className="w-4 h-4 text-gold" />, label: "Bhubaneswar, Odisha, India" },
  { icon: <Phone className="w-4 h-4 text-gold" />, label: "+91 98765 43210" },
  { icon: <Mail className="w-4 h-4 text-gold" />, label: "info@evioelevator.com" },
  { icon: <Clock className="w-4 h-4 text-gold" />, label: "Mon - Sat: 9:00 AM - 7:00 PM" },
];

export default function ContactUs() {
  return (
    <section id="contact" className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Contact Details Cards */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-surface backdrop-blur-xl border border-border/80 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-2xl">
          
          {/* Top Illumination Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-100 z-20" />

          <div>
            <SectionLabel number="19" label="Contact Us" />
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text tracking-tight mt-3 mb-6">
              Let&apos;s Elevate <span className="text-gold italic font-normal">Together</span>
            </h2>
            
            <p className="text-text-muted text-sm font-light mb-8 max-w-md">
              Connect with our regional experts in Bhubaneswar or reach out via phone and email to schedule your exclusive elevator consultation.
            </p>

            <ul className="space-y-4">
              {contactDetails.map((item, index) => (
                <li
                  key={item.label}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border/80 hover:border-gold/50 transition-all duration-300 shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  
                  <span className="text-sm font-medium text-text group-hover:text-gold transition-colors duration-300 tracking-wide">
                    {item.label}
                  </span>

                  <span className="ml-auto text-xs text-text-muted font-serif font-semibold tracking-widest">
                    0{index + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-text-muted font-light">
            <span>Official Evio Elevator Experience Center</span>
            <span className="text-gold flex items-center gap-1 font-semibold tracking-wider uppercase cursor-pointer hover:underline">
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Right Column: Premium Styled Map / Interactive Frame */}
        <div className="lg:col-span-6 rounded-3xl bg-surface border border-border/80 min-h-[360px] lg:min-h-full overflow-hidden relative shadow-2xl group">
          
          {/* Simulated Map Background Image / Styled View */}
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
            alt="Location Map Bhubaneswar"
            className="absolute inset-0 w-full h-full object-cover filter brightness-75 contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent pointer-events-none" />

          {/* Map Pin Floating Badge */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="px-5 py-3 rounded-2xl bg-dark/85 backdrop-blur-md border border-gold/60 text-white shadow-2xl flex items-center gap-3 animate-bounce">
              <div className="w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-bold">
                📍
              </div>
              <div>
                <p className="font-serif font-bold text-xs text-gold-light uppercase tracking-wider">Evio Elevator</p>
                <p className="text-[11px] text-white/70">Bhubaneswar Studio</p>
              </div>
            </div>
          </div>

          {/* Bottom Info Banner */}
          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            <div className="px-4 py-3 rounded-xl bg-dark/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/70 font-light">Open for private architectural walkthroughs</span>
              <span className="text-xs text-gold-light font-semibold uppercase tracking-wider">Book Visit</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}