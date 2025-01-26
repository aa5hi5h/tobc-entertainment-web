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

export default function MusicContent() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {musicProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <Link
            key={project.id}
            href={`/work/music/${project.id}`}
            className="group"
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-0 relative">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={project.coverArt}
                    alt={project.title}
                    className="object-cover h-full aspect-square transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
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
        </motion.div>
      ))}
    </div>
  )
}
