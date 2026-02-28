import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Save, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { mockCriteria } from "@/lib/mock-data";
import { useState } from "react";

const Scoring = () => {
  const [scores, setScores] = useState<number[]>(mockCriteria.map(() => 75));
  const [currentTable, setCurrentTable] = useState(1);
  const [isDraft, setIsDraft] = useState(true);

  const weightedTotal = scores.reduce(
    (sum, score, i) => sum + (score * mockCriteria[i].weight) / 100,
    0
  );

  const updateScore = (index: number, value: number[]) => {
    const next = [...scores];
    next[index] = value[0];
    setScores(next);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container max-w-3xl py-8">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
              Penilaian Juri
            </h1>
            <p className="mt-1 font-body text-muted-foreground">Kelas A - Bonsai Besar</p>
          </div>
          <Badge variant={isDraft ? "secondary" : "default"} className="font-body text-sm">
            {isDraft ? "Draft" : "Terkunci"}
          </Badge>
        </div>

        {/* Navigation */}
        <div className="mb-6 flex items-center justify-between rounded-lg border bg-card p-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentTable(Math.max(1, currentTable - 1))}
          >
            <ChevronLeft className="mr-1 h-4 w-4" /> Sebelumnya
          </Button>
          <div className="text-center">
            <div className="font-heading text-lg font-bold text-foreground">
              Meja #{currentTable}
            </div>
            <div className="font-body text-xs text-muted-foreground">Serut · Peserta {currentTable}</div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCurrentTable(Math.min(52, currentTable + 1))}
          >
            Berikutnya <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Photo placeholder */}
        <Card className="mb-6 shadow-card">
          <CardContent className="p-0">
            <div className="flex h-48 items-center justify-center rounded-t-lg bg-muted">
              <span className="font-body text-muted-foreground">Foto Bonsai</span>
            </div>
          </CardContent>
        </Card>

        {/* Scoring sliders */}
        <Card className="mb-6 shadow-card">
          <CardHeader>
            <CardTitle className="font-heading text-lg">Kriteria Penilaian</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {mockCriteria.map((c, i) => (
              <div key={c.criteriaName}>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-sm font-medium text-foreground">
                      {c.criteriaName}
                    </span>
                    {c.isPrimary && (
                      <Badge variant="outline" className="font-body text-[10px]">
                        Utama
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-body text-xs text-muted-foreground">
                      Bobot {c.weight}%
                    </span>
                    <span className="min-w-[3ch] text-right font-heading text-lg font-bold text-foreground">
                      {scores[i]}
                    </span>
                  </div>
                </div>
                <Slider
                  value={[scores[i]]}
                  onValueChange={(v) => updateScore(i, v)}
                  max={100}
                  min={0}
                  step={1}
                  disabled={!isDraft}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Total & actions */}
        <Card className="shadow-elevated border-primary/20 bg-primary/5">
          <CardContent className="flex items-center justify-between p-5">
            <div>
              <div className="font-body text-sm text-muted-foreground">Total Nilai Tertimbang</div>
              <div className="font-heading text-3xl font-bold text-foreground">
                {weightedTotal.toFixed(2)}
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => setIsDraft(true)}
                disabled={isDraft}
                className="font-body"
              >
                <Save className="mr-2 h-4 w-4" /> Simpan Draft
              </Button>
              <Button
                onClick={() => setIsDraft(false)}
                disabled={!isDraft}
                className="font-body"
              >
                <Lock className="mr-2 h-4 w-4" /> Kunci Nilai
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Scoring;
