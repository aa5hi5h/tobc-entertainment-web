import { Metadata } from "next"

import AllAdsPage from "./all-ads-page"

export const metadata: Metadata = {
  title: "Our Advertisements | TOBC Entertainment",
  description:
    "Explore our portfolio of successful advertising campaigns and brand stories.",
}

export default function AdvertisementsPage() {
  return <AllAdsPage />
}
