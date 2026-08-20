import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Alexandre Macé - Full stack developer"

const chips = ["climate", "dataviz", "culture", "design"]

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          backgroundColor: "#FAF8F0",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#66635a", marginBottom: 40 }}>
          alexandremace.fr
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, color: "#1a1a1a" }}>
          Alexandre Macé
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#66635a", marginTop: 16 }}>
          Full stack developer, projects tied to climate or biodiversity.
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 56 }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#0737FF",
              color: "#ffffff",
              borderRadius: 9999,
              padding: "10px 28px",
              fontSize: 26,
            }}
          >
            all
          </div>
          {chips.map((chip) => (
            <div
              key={chip}
              style={{
                display: "flex",
                border: "2px solid #d8d3c4",
                color: "#66635a",
                borderRadius: 9999,
                padding: "10px 28px",
                fontSize: 26,
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
