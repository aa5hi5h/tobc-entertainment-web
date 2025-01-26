import { Metadata } from "next"

import AllMusicPage from "./all-music-page"

export const metadata: Metadata = {
  title: "Our Music | TOBC Entertainment",
  description:
    "Explore our collection of award-winning music across various genres.",
}

export default function MusicPage() {
  return <AllMusicPage />
}
