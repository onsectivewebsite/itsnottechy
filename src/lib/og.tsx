import { SITE } from "@/lib/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

type OgProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accent?: string;
};

export function OgCard({ eyebrow, title, subtitle, accent = "#00b3a4" }: OgProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background:
          "linear-gradient(135deg, #0d0e13 0%, #11141c 55%, #0a1a1a 100%)",
        color: "#ffffff",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -120,
          width: 520,
          height: 520,
          borderRadius: 9999,
          background: accent,
          opacity: 0.18,
          filter: "blur(80px)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -160,
          left: -100,
          width: 420,
          height: 420,
          borderRadius: 9999,
          background: "#66e7da",
          opacity: 0.14,
          filter: "blur(90px)",
          display: "flex",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 12,
            background: accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0d0e13",
            fontSize: 22,
            fontWeight: 800,
          }}
        >
          i
        </div>
        <div style={{ fontSize: 28, fontWeight: 600, letterSpacing: -0.5 }}>
          {SITE.name}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {eyebrow ? (
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: accent,
              fontWeight: 600,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 60 ? 62 : 76,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
            maxWidth: 1040,
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 980,
              lineHeight: 1.35,
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontSize: 22,
          color: "rgba(255,255,255,0.55)",
        }}
      >
        <div style={{ display: "flex" }}>{SITE.url.replace(/^https?:\/\//, "")}</div>
        <div style={{ display: "flex" }}>{SITE.tagline}</div>
      </div>
    </div>
  );
}
