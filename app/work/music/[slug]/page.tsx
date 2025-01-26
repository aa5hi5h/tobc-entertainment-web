import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Mic, Music2, PlayCircle, Share2, Trophy } from "lucide-react"

import { musicProjects } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import MusicPage from "./music-page"

interface PageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = musicProjects.find((p) => p.id === params.slug)
  if (!project) return { title: "Not Found" }

  return {
    title: `${project.title} | TOBC Entertainment`,
    description: project.description,
  }
}

export function generateStaticParams() {
  return musicProjects.map((project) => ({
    slug: project.id,
  }))
}

export default function MusicProjectPage({ params }: PageProps) {
  const project = musicProjects.find((p) => p.id === params.slug)
  if (!project) notFound()

  return <MusicPage project={project} />
}
