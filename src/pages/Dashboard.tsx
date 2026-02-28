import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Trophy,
  ClipboardCheck,
  CalendarDays,
  Plus,
  Settings,
  BarChart3,
} from "lucide-react";
import { mockClasses } from "@/lib/mock-data";

const stats = [
  { icon: CalendarDays, label: "Event Aktif", value: "1", color: "text-primary" },
  { icon: Users, label: "Total Peserta", value: "200", color: "text-primary" },
  { icon: ClipboardCheck, label: "Nilai Masuk", value: "1,247 / 1,400", color: "text-accent" },
  { icon: Trophy, label: "Kelas", value: "4", color: "text-primary" },
];

const Dashboard = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Dashboard Admin</h1>
          <p className="mt-1 font-body text-muted-foreground">Piala Walikota Depok 2026</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="font-body">
            <Settings className="mr-2 h-4 w-4" /> Pengaturan
          </Button>
          <Button size="sm" className="font-body">
            <Plus className="mr-2 h-4 w-4" /> Event Baru
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="shadow-card">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className={`h-6 w-6 ${s.color}`} />
              </div>
              <div>
                <div className="font-body text-sm text-muted-foreground">{s.label}</div>
                <div className="font-heading text-2xl font-bold text-foreground">{s.value}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Classes overview */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading">
              <BarChart3 className="h-5 w-5 text-primary" />
              Progress Penilaian
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockClasses.map((c) => {
              const progress = Math.floor(60 + Math.random() * 35);
              return (
                <div key={c.id}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="font-body text-sm font-medium text-foreground">{c.name}</span>
                    <Badge variant={progress === 100 ? "default" : "secondary"} className="font-body">
                      {progress}%
                    </Badge>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading">
              <Users className="h-5 w-5 text-primary" />
              Juri Aktif
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {["Ir. Bambang Supriyadi", "Dr. Siti Nurhaliza", "H. Ahmad Fauzi"].map((name, i) => (
              <div key={name} className="flex items-center gap-3 rounded-lg border p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                  J{i + 1}
                </div>
                <div className="flex-1">
                  <div className="font-body font-medium text-foreground">{name}</div>
                  <div className="font-body text-xs text-muted-foreground">
                    {45 + Math.floor(Math.random() * 15)} nilai diserahkan
                  </div>
                </div>
                <Badge variant="secondary" className="font-body text-xs">
                  Online
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Dashboard;
