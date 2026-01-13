import type { WorkoutRow } from '@/components/WorkoutTable';

export type GuideSection =
  | {
      type: 'hero';
      title: string;
      subtitle?: string;
      chinese?: string;
    }
  | {
      type: 'text';
      title?: string;
      body: string[];
      callout?: {
        variant?: 'default' | 'tip' | 'warning' | 'note';
        title?: string;
        body: string;
      };
    }
  | {
      type: 'workout';
      title: string;
      meta?: {
        frequency?: string;
        duration?: string;
        intensity?: string;
      };
      rows: WorkoutRow[];
      notes?: string[];
    };

/**
 * IMPORTANT
 * - This content file is intentionally conservative.
 * - Replace TODO blocks with exact PDF text (do not invent major claims).
 * - Keep section order aligned to the PDF pages.
 */
export const guideContent: GuideSection[] = [
  {
    type: 'hero',
    title: 'The China Effect',
    subtitle: 'Elite-inspired strength + hypertrophy training, formatted for clarity and execution.',
    chinese: '中国效应',
  },
  {
    type: 'text',
    title: 'How to Use This Guide',
    body: [
      'TODO: Replace with exact instructions from the PDF intro pages.',
      'Use the tables to track sets, reps, and rest. Focus on clean execution, intent, and progression.',
    ],
    callout: {
      variant: 'note',
      title: 'Execution > Ego',
      body: 'Train hard, but keep reps honest. If form breaks, reduce load and finish the work.',
    },
  },
  {
    type: 'text',
    title: 'The Method (Overview)',
    body: [
      'TODO: Summarize the program philosophy using exact language from the PDF (or paste it verbatim where allowed).',
      'Expect disciplined structure, big lifts first, then targeted accessories.',
    ],
  },
  {
    type: 'workout',
    title: 'Sample Workout — Day 1 (Preview)',
    meta: {
      duration: '60–75 min (TODO verify)',
      intensity: 'Moderate → Hard (TODO verify)',
    },
    rows: [
      {
        exercise: 'Back Squat',
        sets: '5',
        reps: '5',
        rest: '2–3 min',
        notes: 'TODO: Add exact loading/progression notes from PDF.',
      },
      {
        exercise: 'Romanian Deadlift',
        sets: '4',
        reps: '8',
        rest: '90–120s',
        notes: 'Control the eccentric; aim for tension.',
      },
      {
        exercise: 'Leg Press',
        sets: '3',
        reps: '10–12',
        rest: '90s',
        notes: 'Full range, no bouncing.',
      },
      {
        exercise: 'Calf Raises',
        sets: '4',
        reps: '12–15',
        rest: '60–90s',
        notes: 'Pause at stretch + peak.',
      },
    ],
    notes: [
      'TODO: Add warm-up scheme and progression rules from PDF.',
    ],
  },
  {
    type: 'workout',
    title: 'Sample Workout — Day 2 (Preview)',
    rows: [
      {
        exercise: 'Bench Press',
        sets: '5',
        reps: '5',
        rest: '2–3 min',
        notes: 'TODO: Add exact tempo/cues from PDF.',
      },
      {
        exercise: 'Incline Dumbbell Press',
        sets: '4',
        reps: '8–10',
        rest: '90s',
        notes: 'Drive up, control down.',
      },
      {
        exercise: 'Cable Row',
        sets: '4',
        reps: '10–12',
        rest: '90s',
        notes: 'Elbows back, chest up.',
      },
      {
        exercise: 'Lateral Raise',
        sets: '4',
        reps: '12–15',
        rest: '60s',
        notes: 'Constant tension.',
      },
    ],
    notes: ['TODO: Add accessories and finisher details shown in the PDF.'],
  },
];

/**
 * Full guide sections.
 * Add all PDF pages here, either as additional sections or a richer structure.
 */
export const fullGuideContent: GuideSection[] = [
  ...guideContent,
  {
    type: 'text',
    title: 'Full Program (TODO)',
    body: [
      'TODO: Add the full program content page-by-page from the PDF.',
      'Recommendation: break into Week 1–X sections, each with Day A/B/C/D workouts and callouts.',
    ],
  },
];
