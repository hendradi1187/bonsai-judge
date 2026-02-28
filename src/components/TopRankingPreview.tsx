import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { mockParticipantsA } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

const medals = ["🥇", "🥈", "🥉"];

const TopRankingPreview = () => {
  const top5 = mockParticipantsA.slice(0, 5);

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="container">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="mb-2 font-heading text-3xl font-bold text-foreground">
              <Trophy className="mb-1 mr-2 inline h-7 w-7 text-accent" />
              Peringkat Sementara
            </h2>
            <p className="font-body text-muted-foreground">
              Kelas A - Bonsai Besar
            </p>
          </div>
          <Link to="/rankings" className="hidden md:block">
            <Button variant="outline" className="font-body">
              Lihat Semua <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="space-y-3">
          {top5.map((p) => (
            <Card
              key={p.id}
              className={`shadow-card transition-shadow hover:shadow-elevated ${
                p.rank <= 3 ? "border-accent/30" : ""
              }`}
            >
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-bold text-primary">
                  {p.rank <= 3 ? medals[p.rank - 1] : p.rank}
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

        <Link to="/rankings" className="mt-6 block md:hidden">
          <Button variant="outline" className="w-full font-body">
            Lihat Semua Peringkat <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default TopRankingPreview;
