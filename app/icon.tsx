import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

// Monogramme « am » empilé, Geist Bold, couleurs du kit :
// fond sable, a encre, m bleu primary.
export default async function Icon() {
  const geistBold = await readFile(
    join(
      process.cwd(),
      "node_modules/geist/dist/fonts/geist-sans/Geist-Bold.ttf",
    ),
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF8F0",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Geist",
            fontSize: 38,
            fontWeight: 700,
            lineHeight: 0.72,
            marginTop: -2,
          }}
        >
          <span style={{ color: "#171717" }}>a</span>
          <span style={{ color: "#0737FF" }}>m</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Geist", data: geistBold, weight: 700 }],
    },
  )
}
