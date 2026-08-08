import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SourceSystemPageTemplate } from "@/components/source-system/SourceSystemPageTemplate";
import { SOURCE_SYSTEMS_CONTENT, getSourceSystemBySlug } from "@/lib/content/sourceSystems";

export function generateStaticParams() {
  return SOURCE_SYSTEMS_CONTENT.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const system = getSourceSystemBySlug(slug);
  if (!system) return {};

  return {
    title: `${system.name} to Dynamics 365 Data Migration | Chivora`,
    description: system.promise,
    alternates: { canonical: `/source-systems/${system.slug}` },
    openGraph: {
      title: `${system.name} to Dynamics 365 Data Migration | Chivora`,
      description: system.promise,
      url: `/source-systems/${system.slug}`,
      type: "website",
    },
  };
}

export default async function SourceSystemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const system = getSourceSystemBySlug(slug);
  if (!system) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${system.name} to Dynamics 365 Data Migration`,
    description: system.promise,
    provider: {
      "@type": "ProfessionalService",
      name: "Chivora",
    },
    areaServed: "GB",
    serviceType: "D365 Data Migration",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Source Systems", item: "https://chivora.co.uk/source-systems" },
      { "@type": "ListItem", position: 2, name: system.name, item: `https://chivora.co.uk/source-systems/${system.slug}` },
    ],
  };

  const escape = (obj: object) =>
    JSON.stringify(obj)
      .replace(/</g, '\\u003c')
      .replace(/>/g, '\\u003e')
      .replace(/&/g, '\\u0026');

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: system.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: escape(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: escape(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: escape(faqLd) }}
      />
      <SourceSystemPageTemplate system={system} />
    </>
  );
}
