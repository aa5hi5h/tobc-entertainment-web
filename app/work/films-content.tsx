"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { filmProjects } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function FilmsContent() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filmProjects.map((film, index) => (
        <motion.div
          key={film.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <Link key={film.id} href={`/work/films/${film.id}`} className="group">
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={film.poster}
                    alt={film.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="text-white border-white"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{film.title}</CardTitle>
                <CardDescription>{film.synopsis}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
