import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { SERVICES_CONTENT, getServiceBySlug } from "@/lib/content/services";

export function generateStaticParams() {
  return SERVICES_CONTENT.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} | Chivora — D365 Data Migration Specialists`,
    description: `${service.promise} Chivora specialises exclusively in D365 data migration.`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.bodyParagraph,
    provider: {
      "@type": "ProfessionalService",
      name: "Chivora",
    },
    areaServed: "GB",
    serviceType: "D365 Data Migration",
  };

  const jsonLdString = JSON.stringify(jsonLd)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
