import { Card, CardContent } from "@/components/ui/card";
import { Award, ClipboardCheck, BarChart3, Download } from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Penilaian Digital",
    description: "Sistem penilaian real-time dengan 7 kriteria berbobot untuk akurasi maksimal.",
  },
  {
    icon: Award,
    title: "Multi Kelas",
    description: "Kompetisi terbagi dalam beberapa kelas berdasarkan jenis dan ukuran bonsai.",
  },
  {
    icon: BarChart3,
    title: "Peringkat Transparan",
    description: "Hasil perhitungan otomatis dan ranking publik yang dapat diakses semua orang.",
  },
  {
    icon: Download,
    title: "Ekspor Hasil",
    description: "Unduh hasil kompetisi dalam format PDF dan CSV untuk dokumentasi resmi.",
  },
];

const EventInfoSection = () => (
  <section className="py-16 md:py-24">
    <div className="container">
      <div className="mb-12 text-center">
        <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">
          Sistem Penilaian Modern
        </h2>
        <p className="mx-auto max-w-xl font-body text-muted-foreground">
          Platform digital pertama di Indonesia untuk kompetisi bonsai nasional
          dengan standar penilaian internasional.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <Card key={f.title} className="shadow-card border-border/50 transition-shadow hover:shadow-elevated">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{f.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default EventInfoSection;
