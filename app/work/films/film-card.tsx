"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { filmProjects } from "@/config/site"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function FilmCard({
  film,
}: {
  film: (typeof filmProjects)[number]
}) {
  return (
    <Link href={`/work/films/${film.id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
        <CardHeader className="p-0">
          <div className="relative aspect-[16/9] overflow-hidden">
            <motion.img
              src={film.poster}
              alt={film.title}
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="px-8 py-3 border border-white text-white rounded-full"
              >
                View Details
              </motion.div>
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-6 group">
          <motion.h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-all duration-300 ease-in-out">
            {film.title}
          </motion.h3>
          <div className="flex items-center gap-2 text-sm text-foreground/80">
            <span>{film.genre}</span>
            <span>•</span>
            <span>{film.releaseYear}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
