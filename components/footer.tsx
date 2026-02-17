import { Separator } from "@/components/ui/separator";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pb-10 pt-4">
      <div className="mx-auto max-w-[52rem]">
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-semibold text-sm tracking-tight mb-1">
              Modern Designs Co
            </p>
            <p className="text-xs text-muted-foreground">
              © {year} · All rights reserved
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
