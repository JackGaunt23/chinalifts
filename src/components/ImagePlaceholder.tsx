import { ReactNode } from 'react';

export function ImagePlaceholder({
  label = 'TODO: Add image',
  aspect = 'video',
  className = '',
  overlay,
}: {
  label?: string;
  aspect?: 'square' | 'video' | 'portrait' | 'wide';
  className?: string;
  overlay?: ReactNode;
}) {
  const aspectClass =
    aspect === 'square'
      ? 'aspect-square'
      : aspect === 'portrait'
        ? 'aspect-[3/4]'
        : aspect === 'wide'
          ? 'aspect-[21/9]'
          : 'aspect-video';

  return (
    <div
      className={[
        'relative overflow-hidden rounded-2xl border border-neutral-800',
        'bg-neutral-950/60',
        aspectClass,
        className,
      ].join(' ')}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_55%)]" />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="text-center">
          <div className="font-[family-name:var(--font-oswald)] font-bold uppercase tracking-wider text-white">
            {label}
          </div>
          <div className="mt-1 text-xs md:text-sm text-neutral-400">Replace this placeholder with a real photo/graphic.</div>
        </div>
      </div>
      {overlay && <div className="absolute inset-x-0 bottom-0 p-4">{overlay}</div>}
    </div>
  );
}
