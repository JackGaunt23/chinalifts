'use client';

import { useId, useState } from 'react';

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ({
  items,
  className = '',
}: {
  items: FAQItem[];
  className?: string;
}) {
  const baseId = useId();

  return (
    <div className={['space-y-3', className].join(' ')}>
      {items.map((item, idx) => (
        <FAQRow key={`${baseId}-${idx}`} item={item} />
      ))}
    </div>
  );
}

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950/50 overflow-hidden">
      <button
        type="button"
        className="w-full text-left px-4 py-4 md:px-6 flex items-start gap-3"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={contentId}
      >
        <span
          className={[
            'mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border',
            open ? 'border-red-600/50 bg-red-600/10 text-red-300' : 'border-neutral-700 bg-neutral-900 text-neutral-300',
          ].join(' ')}
          aria-hidden
        >
          {open ? '−' : '+'}
        </span>
        <span className="font-[family-name:var(--font-oswald)] font-semibold uppercase tracking-wide text-white">
          {item.question}
        </span>
      </button>

      {open && (
        <div id={contentId} className="px-4 pb-5 md:px-6 text-sm md:text-base text-neutral-300 leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}
