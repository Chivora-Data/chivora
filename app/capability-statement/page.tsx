import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CapabilityStatementForm } from "@/components/forms/CapabilityStatementForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Capability Statement | Chivora — D365 Data Migration Specialists",
  description:
    "Request Chivora's capability statement and get a concise overview of our Dynamics 365 data migration services, methodology, and source systems covered.",
  alternates: { canonical: "/capability-statement" },
  openGraph: {
    title: "Capability Statement | Chivora",
    description:
      "A compact overview of Chivora's D365 data migration services, methodology, source systems and typical engagement scope.",
    url: "/capability-statement",
    type: "website",
  },
};

export default function CapabilityStatementPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <Eyebrow>Capability Statement</Eyebrow>
              <h1 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
                Get the one-pager.
              </h1>
              <p className="mt-4 max-w-[60ch] text-[var(--text-body)] leading-[1.7] text-ink-soft">
                If you&apos;re considering Chivora for a Dynamics 365 migration, this
                is the fastest way to get a concise overview of what we do,
                the systems we cover, and the kinds of engagements we take on.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-[var(--radius-card)] border border-line bg-white p-5 shadow-[var(--shadow-card)]">
                  <p className="font-mono-chivora text-xs tracking-[0.08em] text-blue uppercase">
                    What&apos;s inside
                  </p>
                  <p className="mt-2 text-sm leading-[1.65] text-ink-soft">
                    A compact summary of our services, methodology, source systems,
                    and the kinds of migration problems we solve.
                  </p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-line bg-white p-5 shadow-[var(--shadow-card)]">
                  <p className="font-mono-chivora text-xs tracking-[0.08em] text-blue uppercase">
                    How it works
                  </p>
                  <p className="mt-2 text-sm leading-[1.65] text-ink-soft">
                    Fill in your details and we&apos;ll store your request, then
                    follow up with the capability statement by email.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button href="/contact" variant="secondary">
                  Prefer to talk first?
                </Button>
              </div>
            </div>

            <div>
              <CapabilityStatementForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
