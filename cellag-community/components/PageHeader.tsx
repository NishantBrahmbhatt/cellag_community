export function PageHeader({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <section className="border-b border-line bg-bg">
      <div className="container-page py-16 sm:py-24">
        <div className={`animate-fade-up ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="display mt-4 text-4xl text-white sm:text-6xl">{title}</h1>
          {intro && (
            <p className={`mt-5 text-lg leading-relaxed text-white/70 ${center ? "mx-auto max-w-2xl" : ""}`}>
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
