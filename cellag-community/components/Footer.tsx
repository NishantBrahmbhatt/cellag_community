import Link from "next/link";
import { footerNav, site } from "@/lib/site";

const socials = [
  { label: "Facebook", href: "#", path: "M13 10h2.5l.5-3H13V5.5c0-.9.3-1.5 1.6-1.5H16V1.4A21 21 0 0 0 13.7 1c-2.3 0-3.9 1.4-3.9 4v2H7v3h2.8v8H13z" },
  { label: "Instagram", href: "#", path: "M10 6.5A3.5 3.5 0 1 0 13.5 10 3.5 3.5 0 0 0 10 6.5m0 5.8A2.3 2.3 0 1 1 12.3 10 2.3 2.3 0 0 1 10 12.3M14.5 5a.8.8 0 1 0 .8.8.8.8 0 0 0-.8-.8M17.5 6.9a4.3 4.3 0 0 0-1.2-3A4.3 4.3 0 0 0 13.1 2.5C12 2.5 8 2.5 6.9 2.5a4.3 4.3 0 0 0-3 1.2 4.3 4.3 0 0 0-1.2 3C2.5 8 2.5 12 2.6 13.1a4.3 4.3 0 0 0 1.2 3 4.3 4.3 0 0 0 3 1.2c1.1.1 5.1.1 6.2 0a4.3 4.3 0 0 0 3-1.2 4.3 4.3 0 0 0 1.2-3c.1-1.1.1-5.1 0-6.2m-1.5 7.4a2.3 2.3 0 0 1-1.3 1.3c-.9.4-3 .3-4 .3s-3.1.1-4-.3a2.3 2.3 0 0 1-1.3-1.3c-.4-.9-.3-3-.3-4s-.1-3.1.3-4A2.3 2.3 0 0 1 5.7 4c.9-.4 3-.3 4-.3s3.1-.1 4 .3A2.3 2.3 0 0 1 15 5c.4.9.3 3 .3 4s.1 3.1-.3 4" },
  { label: "X", href: "#", path: "M14.2 3h2.3l-5 5.7L17.4 17h-4.6l-3.2-4.2L5.9 17H3.6l5.3-6L3 3h4.7l2.9 3.8zm-.8 12.6h1.3L7 4.3H5.6z" },
  { label: "LinkedIn", href: "#", path: "M6.1 17H3.3V8h2.8zM4.7 6.8a1.6 1.6 0 1 1 1.6-1.6 1.6 1.6 0 0 1-1.6 1.6M17 17h-2.8v-4.4c0-1 0-2.4-1.5-2.4s-1.7 1.2-1.7 2.4V17H8.3V8H11v1.2a3 3 0 0 1 2.7-1.5c2.9 0 3.4 1.9 3.4 4.3z" },
  { label: "YouTube", href: "#", path: "M18.2 6.2a2.3 2.3 0 0 0-1.6-1.6C15.2 4.2 10 4.2 10 4.2s-5.2 0-6.6.4A2.3 2.3 0 0 0 1.8 6.2 24 24 0 0 0 1.4 10a24 24 0 0 0 .4 3.8 2.3 2.3 0 0 0 1.6 1.6c1.4.4 6.6.4 6.6.4s5.2 0 6.6-.4a2.3 2.3 0 0 0 1.6-1.6 24 24 0 0 0 .4-3.8 24 24 0 0 0-.4-3.8M8.4 12.5v-5l4.3 2.5z" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="container-page py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Link href="/" className="font-serif text-2xl italic text-white">
            {site.logo}
          </Link>

          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-white/70 transition hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="transition hover:text-white">Privacy policy</a>
              <a href="#" className="transition hover:text-white">Terms of service</a>
              <a href="#" className="transition hover:text-white">Cookies settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
