import { TreePine } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card py-8">
    <div className="container flex flex-col items-center gap-4 md:flex-row md:justify-between">
      <div className="flex items-center gap-2">
        <TreePine className="h-5 w-5 text-primary" />
        <span className="font-heading text-sm font-semibold text-foreground">
          Bonsai National Judging Platform
        </span>
      </div>
      <p className="text-xs text-muted-foreground">
        © 2026 PT Bonsai NJP Indonesia. Hak cipta dilindungi.
      </p>
    </div>
  </footer>
);

export default Footer;
