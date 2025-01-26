"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  Mic,
  Music2,
  PlayCircle,
  Share2,
  Trophy,
} from "lucide-react"

import { musicProjects } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function MusicPage({
  project,
}: {
  project: (typeof musicProjects)[number]
}) {
  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-background -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-background to-background -z-10" />
      <motion.div
        className="absolute bottom-20 left-20 text-accent/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      >
        <Music2 className="w-24 h-24" />
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="hover:bg-accent/10 transition-all duration-300 ease-in-out border-accent/20 mb-16"
        >
          <Link
            href="/work/music"
            className="flex items-center gap-2 text-foreground/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Music
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
              {project.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 text-xl text-foreground/80"
            >
              <span>{project.artist}</span>
              <span>•</span>
              <span>{project.genre}</span>
              <span>•</span>
              <span>{project.releaseYear}</span>
            </motion.div>
          </section>

          {/* Album Cover */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto aspect-square relative rounded-lg overflow-hidden shadow-2xl"
          >
            <img
              src={project.coverArt}
              alt={project.title}
              className="object-cover aspect-square size-full"
            />
          </motion.section>

          {/* Track List */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6">Track List</h2>
            <div className="space-y-4">
              {project.tracks.map((track, index) => (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <PlayCircle className="w-5 h-5 text-accent" />
                    <span>{track.title}</span>
                  </div>
                  <span className="text-foreground/80">{track.duration}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Stats & Credits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <Card className="p-6 space-y-4">
              <Trophy className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold">Awards</h3>
              <ul className="space-y-2">
                {project.awards.map((award, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-accent" />
                    {award}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 space-y-4">
              <Mic className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold">Credits</h3>
              <div className="space-y-2">
                <p>Producer: {project.credits.producer}</p>
                <p>Engineers:</p>
                <ul className="list-disc list-inside">
                  {project.credits.engineers.map((engineer, index) => (
                    <li key={index}>{engineer}</li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <Music2 className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold">Streaming</h3>
              <p className="text-2xl font-bold text-accent">
                {project.streams}
              </p>
              <p className="text-foreground/80">Total Streams</p>
            </Card>
          </motion.section>
        </motion.div>
      </div>
    </main>
  )
}
