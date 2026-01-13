import { Badge, CalloutBox, DividerWithLabel, Footer, Heading, Paragraph, Section, WorkoutTable } from '@/components';
import { fullGuideContent } from '@/data/guideContent';

export default function GuidePage() {
  return (
    <main className="bg-black text-white">
      <Section>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">Full Guide</Badge>
          <Badge variant="outline">No Paywall</Badge>
        </div>

        <Heading as="h1" className="mt-4">The China Effect — Full Guide</Heading>
        <Paragraph className="mt-2 max-w-2xl">
          Everything is visible on this route by design. Later you can add payments/gating.
          <span className="text-neutral-500"> TODO: Add exact PDF intro copy and section order.</span>
        </Paragraph>
      </Section>

      <DividerWithLabel>Guide Content</DividerWithLabel>

      <Section>
        <div className="space-y-12">
          {fullGuideContent.map((section, idx) => {
            if (section.type === 'hero') {
              return (
                <div key={idx} className="rounded-2xl border border-neutral-900 bg-neutral-950/30 p-6">
                  <div className="text-sm text-neutral-500 font-[family-name:var(--font-oswald)] uppercase tracking-wider">Program</div>
                  <Heading as="h2" className="mt-2">{section.title}</Heading>
                  {section.chinese ? (
                    <div className="mt-2 text-xl text-neutral-300 font-[family-name:var(--font-noto-sans-sc)]">{section.chinese}</div>
                  ) : null}
                  {section.subtitle ? <Paragraph className="mt-3">{section.subtitle}</Paragraph> : null}
                </div>
              );
            }

            if (section.type === 'text') {
              return (
                <div key={idx} className="space-y-4">
                  {section.title ? <Heading as="h2">{section.title}</Heading> : null}
                  <div className="space-y-3">
                    {section.body.map((p, i) => (
                      <Paragraph key={i}>{p}</Paragraph>
                    ))}
                  </div>
                  {section.callout ? (
                    <CalloutBox title={section.callout.title} variant={section.callout.variant ?? 'default'}>
                      {section.callout.body}
                    </CalloutBox>
                  ) : null}
                </div>
              );
            }

            if (section.type === 'workout') {
              return (
                <div key={idx} className="space-y-4">
                  <WorkoutTable title={section.title} rows={section.rows} />
                  {section.notes?.length ? (
                    <div className="space-y-2">
                      {section.notes.map((n, i) => (
                        <Paragraph key={i} size="sm" className="text-neutral-400">
                          {n}
                        </Paragraph>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            return null;
          })}
        </div>
      </Section>

      <Footer />
    </main>
  );
}
