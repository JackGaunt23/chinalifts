import Link from 'next/link';

import { Badge, Button, Card, CardBody, CardTitle, CTAButton, Divider, FAQ, Footer, Heading, ImagePlaceholder, Paragraph, Section, Subheading } from '@/components';
import { faqItems } from '@/data/faqData';
import { testimonials } from '@/data/testimonialsData';

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-14 pb-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.20),transparent_55%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex flex-col gap-4">
            <Badge variant="accent" className="w-fit">New • Mobile-first guide</Badge>

            <Heading as="h1" className="leading-[0.95]">
              The China Effect
            </Heading>

            <div className="text-2xl md:text-3xl text-neutral-300 font-[family-name:var(--font-noto-sans-sc)]">
              中国效应
            </div>

            <Subheading className="max-w-2xl">
              Elite-inspired strength + hypertrophy training, rebuilt for clarity.
            </Subheading>

            <Paragraph className="max-w-2xl">
              A clean, no-fluff training guide with PDF-style structure: big lifts first, accessories second, and execution that actually drives progress.
              <span className="text-neutral-500"> TODO: Replace this paragraph with exact cover/intro copy from the PDF.</span>
            </Paragraph>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button href="/preview" variant="outline" size="lg" fullWidth>
                Preview the Guide
              </Button>
              <CTAButton href="/guide" className="w-full">Buy Now</CTAButton>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>4 Days / Week (TODO verify)</Badge>
              <Badge variant="gold">Strength + Size</Badge>
              <Badge variant="outline">Gym-based</Badge>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Key benefits */}
      <Section>
        <Heading as="h2">What You Get</Heading>
        <div className="mt-6 grid gap-4">
          <Card>
            <CardTitle>PDF-like structure</CardTitle>
            <CardBody>Clear sections, tables, and callouts—optimized for reading on your phone.</CardBody>
          </Card>
          <Card>
            <CardTitle>Progress-first training</CardTitle>
            <CardBody>Simple progression rules and high-quality volume. No gimmicks.</CardBody>
          </Card>
          <Card>
            <CardTitle>Execution cues</CardTitle>
            <CardBody>Technique reminders to keep reps honest and joints happy.</CardBody>
          </Card>
          <div className="text-sm text-neutral-500">TODO: Replace these points with benefits explicitly supported by the PDF.</div>
        </div>
      </Section>

      {/* Social proof */}
      <Section className="bg-neutral-950/30 border-y border-neutral-900">
        <Heading as="h2">Results People Talk About</Heading>
        <Paragraph className="mt-2">Placeholder testimonials until real ones are supplied.</Paragraph>

        <div className="mt-6 grid gap-4">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <CardTitle>{t.name} {t.handle ? <span className="text-neutral-500">({t.handle})</span> : null}</CardTitle>
              <CardBody>
                <p className="text-neutral-200">“{t.quote}”</p>
                {t.result ? <p className="mt-2 text-neutral-500">{t.result}</p> : null}
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* Preview CTA */}
      <Section>
        <Heading as="h2">See It Before You Commit</Heading>
        <Paragraph className="mt-2 max-w-2xl">
          Open the preview for the intro pages and a couple of full workouts.
        </Paragraph>

        <div className="mt-6">
          <ImagePlaceholder label="TODO: Add cover/hero image from PDF" aspect="wide" />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button href="/preview" variant="primary" size="lg" fullWidth>
            Go to Preview
          </Button>
          <Button href="/guide" variant="outline" size="lg" fullWidth>
            Skip to Full Guide
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-neutral-950/30 border-y border-neutral-900">
        <Heading as="h2">FAQ</Heading>
        <div className="mt-6">
          <FAQ items={faqItems} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <Heading as="h2">Ready to Train</Heading>
        <Paragraph className="mt-2 max-w-2xl">
          Buy Now currently takes you straight to the full guide (no payment / no lock). Perfect for testing the flow from a TikTok bio link.
        </Paragraph>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button href="/preview" variant="outline" size="lg" fullWidth>
            Preview
          </Button>
          <CTAButton href="/guide" className="w-full">Buy Now → Full Guide</CTAButton>
        </div>

        <div className="mt-4 text-xs text-neutral-600">
          TODO: Add a real pricing block later (Stripe/etc). For now the site is ungated by request.
        </div>
      </Section>

      <Footer />
    </main>
  );
}
