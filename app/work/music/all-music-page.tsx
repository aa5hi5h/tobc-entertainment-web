"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Mic, Music2, Radio } from "lucide-react"

import { musicProjects } from "@/config/site"
import { Button } from "@/components/ui/button"

import MusicCard from "./music-card"
import MusicContent from "../music-content"

export default function AllMusicPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-background -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background -z-10" />

      <motion.div
        className="absolute top-40 right-20 text-accent/20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      >
        <Music2 className="w-32 h-32" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20 text-accent/10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      >
        <Radio className="w-24 h-24" />
      </motion.div>

      <div className="container mx-auto px-4 py-16">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="hover:bg-accent/10 transition-all duration-300 ease-in-out border-accent/20 mb-16"
        >
          <Link
            href="/work"
            className="flex items-center gap-2 text-foreground/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Work
          </Link>
        </Button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-7xl font-bold tracking-normal mb-6 uppercase">
            Our <span className="text-accent">Music</span>
          </h1>
          <p className="text-xl text-foreground/80">
            Explore our collection of chart-topping hits and groundbreaking
            musical projects.
          </p>
        </motion.div>

        <MusicContent />
      </div>
    </main>
  )
}
