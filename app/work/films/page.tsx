import { Metadata } from "next"

import AllFilmsPage from "./all-films-page"

export const metadata: Metadata = {
  title: "Our Films | TOBC Entertainment",
  description:
    "Explore our collection of award-winning films across various genres.",
}

export default function FilmsPage() {
  return <AllFilmsPage />
}
