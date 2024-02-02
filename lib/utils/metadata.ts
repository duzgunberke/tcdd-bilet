import { Metadata } from "next"
import { Icon } from "next/dist/lib/metadata/types/metadata-types"

export function constructMetadata({
    title = "TCDD Bilet Bul",
    description = "TCDD bilet bulmanıza yardımcı araç.",
    icons = [
        { rel: "apple-touch-icon", url: "/icon128x128.png" },
        { rel: "icon", url: "/icon.png" },
      ],
    image="/icon.png",
    noIndex = false,
    manifest="/manifest.json",
    keywords= ["tcdd", "yht", "tren", "tcdd bilet", "thy bilet","bilet bul","thy bilet bul","türkiye cumhuriyeti devlet demiryolları"],
    viewport= "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  }: {
    title?: string
    description?: string
    image?: string
    icons?: Icon[]
    noIndex?: boolean
    manifest?:string
    keywords?:string[]
    viewport?:string
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: image
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
        creator: "Berke Düzgün"
      },
      icons,
      keywords,
      manifest,
      viewport,
      metadataBase: new URL('https://tcdd-bilet.vercel.app'),
      themeColor: '#FFF',
      ...(noIndex && {
        robots: {
          index: false,
          follow: false
        }
      })
    }
  }