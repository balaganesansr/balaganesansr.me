import { ImageResponse } from "next/og";
import { IDENTITY } from "@/constants/content";

export const alt = `${IDENTITY.name} - ${IDENTITY.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0806 0%, #14100b 100%)",
          color: "#f6f2e9",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 22,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#b98a2f",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#15803d",
            }}
          />
          {IDENTITY.availability}
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
          }}
        >
          {IDENTITY.name}
        </div>
        <div
          style={{
            fontSize: 36,
            marginTop: 24,
            color: "#b98a2f",
            fontWeight: 600,
          }}
        >
          {IDENTITY.role}
        </div>
        <div
          style={{
            fontSize: 26,
            marginTop: 20,
            color: "#a99f8d",
            maxWidth: 900,
          }}
        >
          {IDENTITY.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 24,
            color: "#7d7565",
          }}
        >
          balaganesansr.me
        </div>
      </div>
    ),
    { ...size }
  );
}
