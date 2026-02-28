import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { mockClasses, generateParticipants } from "@/lib/mock-data";
import { useState } from "react";

const medals = ["🥇", "🥈", "🥉"];

const Rankings = () => {
  const [search, setSearch] = useState("");
  const [activeClass, setActiveClass] = useState(mockClasses[0].id);

  const classData = mockClasses.find((c) => c.id === activeClass)!;
  const participants = generateParticipants(classData.name, classData.participantCount);

  const filtered = search
    ? participants.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.treeType.toLowerCase().includes(search.toLowerCase()) ||
          String(p.tableNumber).includes(search)
      )
    : participants;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container py-8 md:py-12">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Peringkat Kompetisi
            </h1>
            <p className="mt-1 font-body text-muted-foreground">
              Piala Walikota Depok 2026 — Hasil penilaian real-time
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="font-body">
              <Download className="mr-2 h-4 w-4" /> PDF
            </Button>
            <Button variant="outline" size="sm" className="font-body">
              <Download className="mr-2 h-4 w-4" /> CSV
            </Button>
          </div>
        </div>

        <Tabs value={activeClass} onValueChange={setActiveClass}>
          <TabsList className="mb-6 w-full justify-start overflow-x-auto">
            {mockClasses.map((c) => (
              <TabsTrigger key={c.id} value={c.id} className="font-body">
                {c.name.split(" - ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Cari peserta, jenis pohon, atau nomor meja..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 font-body"
            />
          </div>

          {mockClasses.map((c) => (
            <TabsContent key={c.id} value={c.id}>
              <div className="mb-4 font-body text-sm text-muted-foreground">
                {filtered.length} peserta · {c.name}
              </div>

              <div className="space-y-2">
                {filtered.map((p) => (
                  <Card
                    key={p.id}
                    className={`shadow-card transition-all hover:shadow-elevated ${
                      p.rank <= 3 ? "border-accent/30 bg-accent/5" : ""
                    }`}
                  >
                    <CardContent className="flex items-center gap-4 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-bold text-primary">
                        {p.rank <= 3 ? medals[p.rank - 1] : p.rank}
                      </div>

                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-muted">
                        <img
                          src={p.photoUrl}
                          alt={`Bonsai meja ${p.tableNumber}`}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-body font-semibold text-foreground">
                            Meja #{p.tableNumber}
                          </span>
                          <Badge variant="secondary" className="font-body text-xs">
                            {p.treeType}
                          </Badge>
                        </div>
                        <span className="font-body text-sm text-muted-foreground">{p.name}</span>
                      </div>

                      <div className="text-right">
                        <div className="font-heading text-xl font-bold text-foreground">
                          {p.averageScore.toFixed(2)}
                        </div>
                        <div className="font-body text-xs text-muted-foreground">Rata-rata</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Rankings;
