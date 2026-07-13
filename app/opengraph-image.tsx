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
            "radial-gradient(circle at top left, rgba(46,229,157,0.25), transparent 28%), radial-gradient(circle at 80% 28%, rgba(85,214,255,0.18), transparent 24%), #050505",
          color: "#f7f7f8",
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
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#2ee59d",
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 9,
              border: "1px solid rgba(46,229,157,0.7)",
              background: "rgba(46,229,157,0.16)",
            }}
          />
          LioranDB
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.02,
              letterSpacing: "-0.06em",
              fontWeight: 700,
              maxWidth: "820px",
            }}
          >
            A developer-first document database built in India.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a1a1aa",
              maxWidth: "860px",
              lineHeight: 1.35,
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
              gap: "12px",
              fontSize: 20,
              color: "#f7f7f8",
            }}
          >
            {["V1 live", "Rust V2", "Self-hostable"].map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 999,
                  padding: "10px 18px",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            style={{
              borderRadius: 999,
              border: "1px solid rgba(46,229,157,0.26)",
              background: "rgba(46,229,157,0.1)",
              padding: "10px 16px",
              fontSize: 20,
              color: "#2ee59d",
            }}
          >
            Pre-alpha • 16 Aug 2026
          </div>
        </div>
      </div>
    ),
    size,
  );
}
