import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
        {/* Left accent bar */}
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
        {/* Top accent line */}
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

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(37,99,235,0.3)",
            marginTop: 18,
          }}
        />

        {/* Headline */}
        <div
          style={{
            color: "#faf7f0",
            fontSize: 58,
            fontWeight: "bold",
            marginTop: 52,
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Chivora — D365 Data Migration Specialists
        </div>

        {/* Sub */}
        <div
          style={{
            color: "rgba(250,247,240,0.72)",
            fontSize: 26,
            marginTop: 28,
            lineHeight: 1.5,
            maxWidth: 860,
          }}
        >
          We migrate SAP, Oracle, Sage, NAV, BPCS, IFS and Access Dimensions
          into D365 F&O and CE. Cleanly. Completely. On time.
        </div>

        {/* Footer bar */}
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
          <div style={{ color: "#faf7f0", fontSize: 26, fontWeight: "bold" }}>
            Chivora
          </div>
          <div style={{ color: "#2563eb", fontSize: 20 }}>chivora.co.uk</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
