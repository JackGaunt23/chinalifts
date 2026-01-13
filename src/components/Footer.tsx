import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-black">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-[family-name:var(--font-oswald)] font-bold uppercase tracking-wider text-white">
              The China Effect
            </div>
            <div className="mt-1 text-sm text-neutral-500">Training guide • Mobile-first • No paywall (yet)</div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/preview" className="text-neutral-400 hover:text-white transition-colors">
              Preview
            </Link>
            <Link href="/guide" className="text-neutral-400 hover:text-white transition-colors">
              Full Guide
            </Link>
          </nav>
        </div>

        <div className="mt-8 text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} The China Effect. All rights reserved.</p>
          <p className="mt-2">TODO: Add legal disclaimer + contact email.</p>
        </div>
      </div>
    </footer>
  );
}
