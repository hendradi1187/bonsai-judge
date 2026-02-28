import { Button } from "@/components/ui/button";
import { CalendarDays, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroBonsai from "@/assets/hero-bonsai.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Hero image background */}
    <div className="absolute inset-0">
      <img
        src={heroBonsai}
        alt="Bonsai dalam taman Jepang"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
    </div>

    <div className="container relative z-10 py-20 md:py-32">
      <div className="max-w-2xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground">
          <CalendarDays className="h-4 w-4" />
          <span className="font-body">Juni 2026 · Depok, Jawa Barat</span>
        </div>

        <h1 className="mb-4 font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-6xl">
          Piala Walikota
          <br />
          <span className="text-gradient-gold">Depok 2026</span>
        </h1>

        <p className="mb-8 max-w-lg font-body text-lg text-primary-foreground/80">
          Kompetisi bonsai nasional dengan sistem penilaian digital transparan.
          Saksikan keindahan seni bonsai terbaik Indonesia.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link to="/rankings">
            <Button size="lg" variant="secondary" className="font-body font-semibold">
              <Trophy className="mr-2 h-5 w-5" />
              Lihat Peringkat
            </Button>
          </Link>
          <Link to="/login">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 font-body font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Users className="mr-2 h-5 w-5" />
              Portal Juri
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-16 grid grid-cols-3 gap-4 md:max-w-lg">
        {[
          { value: "200+", label: "Peserta" },
          { value: "7", label: "Kriteria" },
          { value: "3", label: "Juri Ahli" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              {stat.value}
            </div>
            <div className="font-body text-sm text-primary-foreground/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
