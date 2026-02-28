import { Link, useLocation } from "react-router-dom";
import { TreePine, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Beranda" },
    { to: "/rankings", label: "Peringkat" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/scoring", label: "Penilaian" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <TreePine className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold leading-tight text-foreground">
              Bonsai NJP
            </span>
            <span className="text-[10px] font-body leading-tight text-muted-foreground">
              National Judging Platform
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              <Button
                variant={location.pathname === link.to ? "secondary" : "ghost"}
                size="sm"
                className="font-body"
              >
                {link.label}
              </Button>
            </Link>
          ))}
          <Link to="/login">
            <Button size="sm" className="ml-2 font-body">
              Masuk
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-background p-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}>
                <Button
                  variant={location.pathname === link.to ? "secondary" : "ghost"}
                  className="w-full justify-start font-body"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Link to="/login" onClick={() => setMobileOpen(false)}>
              <Button className="w-full font-body">Masuk</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
