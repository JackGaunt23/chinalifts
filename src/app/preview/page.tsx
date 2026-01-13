import { Badge, Button, CalloutBox, DividerWithLabel, Footer, Heading, Paragraph, Section, WorkoutTable } from '@/components';
import { guideContent } from '@/data/guideContent';

export default function PreviewPage() {
  const previewWorkouts = guideContent.filter((s) => s.type === 'workout');

  return (
    <main className="bg-black text-white">
      <Section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">Preview</Badge>
          <Badge variant="accent">Ungated</Badge>
        </div>

        <Heading as="h1" className="mt-4">Preview the Guide</Heading>
        <Paragraph className="mt-2 max-w-2xl">
          This is an intro-style preview plus a couple of full sample workouts.
          <span className="text-neutral-500"> TODO: Replace this intro with the PDF’s actual preview/intro wording.</span>
        </Paragraph>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="/guide" variant="primary" size="lg" fullWidth>
            Continue to Full Guide
          </Button>
          <Button href="/" variant="ghost" size="lg" fullWidth>
            Back Home
          </Button>
        </div>
      </Section>

      <DividerWithLabel>Intro</DividerWithLabel>

      <Section>
        <Heading as="h2">The China Effect Method</Heading>
        <Paragraph className="mt-2">
          TODO: Paste the exact intro pages from the PDF here (or break into multiple sections).
        </Paragraph>

        <div className="mt-6">
          <CalloutBox title="What to focus on" variant="tip">
            Consistency, clean reps, and progression. Don’t chase novelty.
            <span className="text-neutral-500"> TODO: Replace with exact PDF callout text.</span>
          </CalloutBox>
        </div>
      </Section>

      <DividerWithLabel>Sample Workouts</DividerWithLabel>

      <Section>
        <div className="space-y-10">
          {previewWorkouts.map((w, i) => (
            <div key={i}>
              <WorkoutTable title={w.title} rows={w.rows} />
              {w.notes?.length ? (
                <div className="mt-4 space-y-2">
                  {w.notes.map((n, idx) => (
                    <Paragraph key={idx} size="sm" className="text-neutral-400">
                      {n}
                    </Paragraph>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-neutral-900 bg-neutral-950/40 p-5">
          <Heading as="h3">Want the full program?</Heading>
          <Paragraph className="mt-2 max-w-2xl">
            Get the entire guide with the full section order and all workouts.
            <span className="text-neutral-500"> TODO: Ensure the promise matches what the PDF actually includes.</span>
          </Paragraph>
          <div className="mt-5">
            <Button href="/guide" variant="primary" size="lg" fullWidth>
              Continue to Full Guide
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
