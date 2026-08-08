import { ImageResponse } from "next/og";
import { getInsightBySlug } from "@/lib/content/insights";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  const title = article?.title ?? "Chivora Insights";
  const excerpt = article?.excerpt ?? "Practical D365 data migration guides";
  const category = article?.category ?? "Insights";
  const readTime = article?.readTime ?? "";

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

        {/* Category + read time */}
        <div
          style={{
            display: "flex",
            gap: 12,
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
            {category.toUpperCase()}
          </div>
          {readTime && (
            <div
              style={{
                color: "rgba(250,247,240,0.45)",
                fontSize: 14,
                letterSpacing: "0.08em",
                padding: "6px 0",
                fontFamily: "monospace",
              }}
            >
              {readTime.toUpperCase()}
            </div>
          )}
        </div>

        {/* Title */}
        <div
          style={{
            color: "#faf7f0",
            fontSize: 46,
            fontWeight: "bold",
            marginTop: 20,
            lineHeight: 1.2,
            maxWidth: 960,
          }}
        >
          {title}
        </div>

        {/* Excerpt */}
        <div
          style={{
            color: "rgba(250,247,240,0.65)",
            fontSize: 22,
            marginTop: 20,
            lineHeight: 1.5,
            maxWidth: 860,
          }}
        >
          {excerpt.length > 120 ? excerpt.slice(0, 120) + "…" : excerpt}
        </div>

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
          <div style={{ color: "#faf7f0", fontSize: 22, fontWeight: "bold" }}>
            Sunday Ukwungwu · Chivora
          </div>
          <div style={{ color: "#2563eb", fontSize: 19 }}>chivora.co.uk</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
