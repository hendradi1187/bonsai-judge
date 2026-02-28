import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { TreePine } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => (
  <div className="flex min-h-screen items-center justify-center bg-background px-4">
    <Card className="w-full max-w-sm shadow-elevated">
      <CardHeader className="items-center text-center">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
          <TreePine className="h-6 w-6 text-primary-foreground" />
        </div>
        <CardTitle className="font-heading text-2xl">Masuk</CardTitle>
        <p className="font-body text-sm text-muted-foreground">
          Bonsai National Judging Platform
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label className="font-body">Email</Label>
          <Input type="email" placeholder="nama@email.com" className="font-body" />
        </div>
        <div className="space-y-2">
          <Label className="font-body">Password</Label>
          <Input type="password" placeholder="••••••••" className="font-body" />
        </div>
        <Button className="w-full font-body">Masuk</Button>
        <p className="text-center font-body text-xs text-muted-foreground">
          <Link to="/" className="text-primary hover:underline">
            ← Kembali ke Beranda
          </Link>
        </p>
      </CardContent>
    </Card>
  </div>
);

export default Login;
