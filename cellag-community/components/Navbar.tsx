"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav, exploreNav, site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [exploreOpen, setExploreOpen] = useState(false); // desktop dropdown

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-2xl italic tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          {site.logo}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          {/* Explore dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <button
              type="button"
              onClick={() => setExploreOpen((v) => !v)}
              className="flex items-center gap-1 text-sm font-medium text-white/80 transition hover:text-white"
              aria-expanded={exploreOpen}
            >
              Explore
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {exploreOpen && (
              <div className="absolute left-0 top-full w-44 pt-3">
                <div className="overflow-hidden rounded-lg border border-line bg-surface py-1 shadow-xl">
                  {exploreNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/about" className="btn-ghost">
            Sign up
          </Link>
          <Link href="/about" className="btn-primary">
            Join
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-line bg-bg md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {[...primaryNav, ...exploreNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/about" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Join
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
