export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  center = false,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}) {
  const hasHeader = eyebrow || title || intro;
  return (
    <section className={`container-page py-16 sm:py-24 ${className}`}>
      {hasHeader && (
        <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className="display mt-4 text-3xl text-white sm:text-5xl">{title}</h2>}
          {intro && <p className="mt-4 text-lg leading-relaxed text-white/70">{intro}</p>}
        </div>
      )}
      <div className={hasHeader ? "mt-12" : ""}>{children}</div>
    </section>
  );
}

// Reusable image placeholder matching the wireframe grey boxes.
export function MediaPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div className={`placeholder-media ${className}`}>
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="1.8" fill="currentColor" />
        <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
