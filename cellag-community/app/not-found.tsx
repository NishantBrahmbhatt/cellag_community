import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">404</span>
      <h1 className="display mt-4 text-5xl text-white">Page not found</h1>
      <p className="mt-4 max-w-md text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back home
      </Link>
    </section>
  );
}
