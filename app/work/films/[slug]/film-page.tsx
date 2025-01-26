"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Film, PlayCircle, Star, Trophy, Users } from "lucide-react"

import { filmProjects } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FilmPage({
  film,
}: {
  film: (typeof filmProjects)[number]
}) {
  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-background -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-accent/10 via-background to-background -z-10" />

      <motion.div
        className="absolute top-40 right-40 text-accent/20"
        animate={{
          y: [0, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      >
        <Film className="w-32 h-32" />
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="hover:bg-accent/10 transition-all duration-300 ease-in-out border-accent/20 mb-16"
        >
          <Link
            href="/work/films"
            className="flex items-center gap-2 text-foreground/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Films
          </Link>
        </Button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold tracking-normal mb-6"
            >
              {film.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 text-xl text-foreground/80"
            >
              <span>{film.genre}</span>
              <span>•</span>
              <span>{film.releaseYear}</span>
              <span>•</span>
              <span>{film.duration}</span>
            </motion.div>
          </section>

          {/* Film Poster & Trailer */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            <div className="relative group aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img
                src={film.poster}
                alt={film.title}
                className="object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-8">
              <div className="aspect-video relative rounded-lg overflow-hidden bg-accent/5">
                <Button
                  size="icon"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  onClick={() => window.open(film.trailer, "_blank")}
                >
                  <PlayCircle className="w-12 h-12" />
                </Button>
              </div>
              <p className="text-lg text-foreground/80">{film.synopsis}</p>
            </div>
          </motion.section>

          {/* Film Details */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <Card className="p-6 space-y-4">
              <Users className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold">Cast</h3>
              <ul className="space-y-2">
                {film.cast.map((actor, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent" />
                    {actor}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 space-y-4">
              <Trophy className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold">Awards</h3>
              <ul className="space-y-2">
                {film.awards.map((award, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent" />
                    {award}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 space-y-4">
              <Film className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold">Box Office</h3>
              <p className="text-2xl font-bold text-accent">{film.boxOffice}</p>
              <div className="flex items-center gap-2">
                <span className="text-foreground/80">Rating:</span>
                <span className="font-medium">{film.rating}</span>
              </div>
            </Card>
          </motion.section>

          {/* Director Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-4">Director</h2>
            <p className="text-xl font-medium text-accent">{film.director}</p>
          </motion.section>
        </motion.div>
      </div>
    </main>
  )
}
