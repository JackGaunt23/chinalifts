export type WorkoutRow = {
  exercise: string;
  sets?: string;
  reps?: string;
  rest?: string;
  notes?: string;
};

export function WorkoutTable({
  title,
  rows,
  className = '',
}: {
  title?: string;
  rows: WorkoutRow[];
  className?: string;
}) {
  return (
    <div className={['rounded-2xl border border-neutral-800 bg-neutral-950/60 overflow-hidden', className].join(' ')}>
      {title && (
        <div className="px-4 py-3 md:px-6 md:py-4 border-b border-neutral-800">
          <h3 className="font-[family-name:var(--font-oswald)] font-bold uppercase tracking-wide text-white">
            {title}
          </h3>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-[680px] w-full text-left">
          <thead>
            <tr className="bg-neutral-950">
              <th scope="col" className="px-4 py-3 md:px-6 text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Exercise
              </th>
              <th scope="col" className="px-4 py-3 text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Sets
              </th>
              <th scope="col" className="px-4 py-3 text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Reps
              </th>
              <th scope="col" className="px-4 py-3 text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Rest
              </th>
              <th scope="col" className="px-4 py-3 md:px-6 text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={`${row.exercise}-${i}`} className={i % 2 === 0 ? 'bg-neutral-950/40' : 'bg-neutral-950/20'}>
                <td className="px-4 py-3 md:px-6 text-sm md:text-base text-white font-medium whitespace-nowrap">
                  {row.exercise}
                </td>
                <td className="px-4 py-3 text-sm text-neutral-200 whitespace-nowrap">{row.sets ?? '—'}</td>
                <td className="px-4 py-3 text-sm text-neutral-200 whitespace-nowrap">{row.reps ?? '—'}</td>
                <td className="px-4 py-3 text-sm text-neutral-200 whitespace-nowrap">{row.rest ?? '—'}</td>
                <td className="px-4 py-3 md:px-6 text-sm text-neutral-300 min-w-[220px]">
                  {row.notes ?? ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
