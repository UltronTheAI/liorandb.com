import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e0e10",
          color: "#f4f4f6",
          padding: "64px",
          fontFamily: "sans-serif",
          border: "1px solid #232328",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 20,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#9da1aa",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              background: "#ffffff",
            }}
          />
          LioranDB · Developer Infrastructure
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: 60,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              fontWeight: 600,
              maxWidth: "920px",
              color: "#ffffff",
            }}
          >
            India&apos;s developer-first document database.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#9da1aa",
              maxWidth: "860px",
              lineHeight: 1.4,
              fontWeight: 400,
            }}
          >
            High-performance document database developed in Rust — with Docker deployment and MongoDB-style APIs.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #232328",
            paddingTop: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              borderRadius: 8,
              background: "#ffffff",
              color: "#000000",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            Try Free
          </div>
          <div style={{ fontSize: 18, color: "#6b707c" }}>liorandb.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
