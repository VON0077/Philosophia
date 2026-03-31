import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/debates", label: "Debates" },
  { href: "/create", label: "Create" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Philiosophia
        </Link>

        <nav className="flex items-center gap-6 text-sm text-zinc-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
