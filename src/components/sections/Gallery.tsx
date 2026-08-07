import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

// Gallery images array with high-resolution online architectural and luxury interior photos from Unsplash
export const galleryImages: string[] = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
];

export default function Gallery() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
      <SectionLabel number="11" label="Gallery" />
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-text tracking-tight">
          A Glimpse of <span className="text-gold italic font-normal">Our Work</span>
        </h2>
        <Button variant="outline" className="hidden sm:inline-flex text-xs font-semibold tracking-wider uppercase border-border/80 hover:border-gold hover:text-gold transition-all">
          View Full Gallery
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="group relative aspect-square rounded-2xl bg-surface border border-border/80 overflow-hidden shadow-xl cursor-pointer hover:border-gold/60 transition-all duration-500"
          >
            {/* Top Illumination Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

            {/* Image with Smooth Zoom */}
            <img
              src={img}
              alt={`Gallery Work ${idx + 1}`}
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 group-hover:brightness-100 transition-transform duration-700 ease-out"
            />

            {/* Cinematic Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-xs font-serif text-gold tracking-widest uppercase font-medium flex items-center gap-1.5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span>View Project</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View Full Gallery Button */}
      <div className="text-center mt-8 sm:hidden">
        <Button variant="outline" className="text-xs font-semibold tracking-wider uppercase border-border/80 hover:border-gold hover:text-gold transition-all">
          View Full Gallery
        </Button>
      </div>
    </section>
  );
}