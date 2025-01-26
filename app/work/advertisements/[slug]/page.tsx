import { Metadata } from "next"
import { notFound } from "next/navigation"

import { advertisements } from "@/config/site"

import AdPage from "./ad-page"

interface PageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const ad = advertisements.find((ad) => ad.id === params.slug)
  if (!ad) return { title: "Not Found" }

  return {
    title: `${ad.title} | TOBC Entertainment`,
    description: ad.description,
  }
}

export function generateStaticParams() {
  return advertisements.map((ad) => ({
    slug: ad.id,
  }))
}

export default function Page({ params }: PageProps) {
  const ad = advertisements.find((ad) => ad.id === params.slug)
  if (!ad) notFound()

  return <AdPage ad={ad} />
}
