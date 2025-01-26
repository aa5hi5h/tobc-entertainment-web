import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Film, PlayCircle, Star, Trophy, Users } from "lucide-react"

import { filmProjects } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import FilmPage from "./film-page"

interface PageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const film = filmProjects.find((f) => f.id === params.slug)
  if (!film) return { title: "Not Found" }

  return {
    title: `${film.title} | TOBC Entertainment`,
    description: film.synopsis,
  }
}

export function generateStaticParams() {
  return filmProjects.map((film) => ({
    slug: film.id,
  }))
}

export default function FilmPageServer({ params }: PageProps) {
  const film = filmProjects.find((f) => f.id === params.slug)
  if (!film) notFound()

  return <FilmPage film={film} />
}
