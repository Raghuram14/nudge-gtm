import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

/**
 * Default social card for the whole site.
 *
 * Generated at build time rather than shipped as a binary asset, so it cannot
 * drift from the brand tokens. Individual routes can override it by adding
 * their own `opengraph-image` file.
 */
export const alt = `${siteConfig.name} - ${siteConfig.category}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#0f172a";
const EMBER = "#b7410e";
const PAPER = "#ffffff";
const SLATE = "#475569";
const HAIRLINE = "#e2e8f0";

export default function OpengraphImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          borderBottom: `16px solid ${INK}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 3 H4.5 V21 H8" stroke={INK} strokeWidth="2" />
            <path d="M16 3 H19.5 V21 H16" stroke={INK} strokeWidth="2" />
            <path d="M8.5 16 H12 V9 H15.5" stroke={EMBER} strokeWidth="2.4" />
          </svg>
          <div style={{ fontSize: 32, fontWeight: 600, color: INK, letterSpacing: -0.5 }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              marginLeft: 12,
              fontSize: 17,
              color: SLATE,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {siteConfig.category}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 1.05,
              color: INK,
              letterSpacing: -2.5,
              maxWidth: 940,
            }}
          >
            Engineering decisions deserve evidence.
          </div>
          <div style={{ fontSize: 30, color: SLATE, marginTop: 28, maxWidth: 900 }}>
            Understand why delivery moved &mdash; with the commits, tickets, and reviews behind
            every claim.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            paddingTop: 28,
            borderTop: `2px solid ${HAIRLINE}`,
            fontSize: 22,
            color: SLATE,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, background: EMBER }} />
          Every insight comes with a receipt.
        </div>
      </div>
    ),
    size,
  );
}
