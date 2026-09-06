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
          background:
            "radial-gradient(ellipse 70% 60% at 75% 20%, rgba(0,104,74,0.45), transparent 55%), #001e2b",
          color: "#ffffff",
          padding: "52px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 22,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#00ed64",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              border: "1px solid #00ed64",
              background: "rgba(0,237,100,0.16)",
            }}
          />
          LioranDB
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              fontWeight: 500,
              maxWidth: "900px",
            }}
          >
            A developer-first document database developed in India.
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#a8b3bc",
              maxWidth: "860px",
              lineHeight: 1.4,
            }}
          >
            MongoDB-style simplicity today. A high-performance Rust engine tomorrow.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 22px",
              borderRadius: 999,
              background: "#00ed64",
              color: "#001e2b",
              fontSize: 20,
              fontWeight: 600,
            }}
          >
            Try Free
          </div>
          <div style={{ fontSize: 20, color: "#a8b3bc" }}>liorandb.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
