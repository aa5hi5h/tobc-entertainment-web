"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { PlayCircle } from "lucide-react"

import { musicProjects } from "@/config/site"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function MusicCard({
  project,
}: {
  project: (typeof musicProjects)[number]
}) {
  return (
    <Link href={`/work/music/${project.id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
        <CardHeader className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <motion.img
              src={project.coverArt}
              alt={project.title}
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center"
            >
              <PlayCircle className="w-12 h-12 text-white" />
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2">{project.title}</CardTitle>
          <CardDescription>
            {project.artist} • {project.genre}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
