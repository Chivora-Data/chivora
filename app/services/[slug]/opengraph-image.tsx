import { ImageResponse } from "next/og";
import { getServiceBySlug } from "@/lib/content/services";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const title = service?.name ?? "Our Services";
  const description = service?.promise ?? "D365 Data Migration Services";
  const tag = service?.categoryTag ?? "SERVICE";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b1f4b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "0 72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 10,
            height: 630,
            background: "#2563eb",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 72,
            top: 0,
            right: 0,
            height: 4,
            background: "#2563eb",
          }}
        />

        {/* Brand label */}
        <div
          style={{
            color: "#2563eb",
            fontSize: 17,
            letterSpacing: "0.1em",
            marginTop: 52,
            fontFamily: "monospace",
          }}
        >
          D365 DATA MIGRATION · CHIVORA
        </div>
        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(37,99,235,0.3)",
            marginTop: 16,
          }}
        />

        {/* Tag pill */}
        <div
          style={{
            display: "flex",
            marginTop: 36,
          }}
        >
          <div
            style={{
              background: "rgba(37,99,235,0.2)",
              border: "1px solid rgba(37,99,235,0.5)",
              color: "#2563eb",
              fontSize: 14,
              letterSpacing: "0.1em",
              padding: "6px 16px",
              borderRadius: 4,
              fontFamily: "monospace",
            }}
          >
            {tag}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            color: "#faf7f0",
            fontSize: 52,
            fontWeight: "bold",
            marginTop: 20,
            lineHeight: 1.15,
            maxWidth: 940,
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            color: "rgba(250,247,240,0.72)",
            fontSize: 24,
            marginTop: 20,
            lineHeight: 1.5,
            maxWidth: 860,
          }}
        >
          {description}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 72,
            right: 72,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 20,
            paddingBottom: 36,
          }}
        >
          <div style={{ color: "#faf7f0", fontSize: 24, fontWeight: "bold" }}>
            Chivora
          </div>
          <div style={{ color: "#2563eb", fontSize: 19 }}>chivora.co.uk</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
