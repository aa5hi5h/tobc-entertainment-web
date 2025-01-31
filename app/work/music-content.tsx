"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PlayCircle } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const musicProjects = [

  {
    id: "track-4",
    title: "Ab Kise Barbaad Karoge",
    artist: "Altamash Faridi ",
    genre: "R&B",
    youtubeId: "xhgm6F9Q0xU",
    youtubeUrl: "https://youtu.be/xhgm6F9Q0xU",
    coverArt: `https://img.youtube.com/vi/xhgm6F9Q0xU/maxresdefault.jpg`
  },
  {
    id: "track-6",
    title: "Khayalat",
    artist: "Faisla Khan",
    genre: "Experimental",
    youtubeId: "uoE6_wd6pFQ",
    youtubeUrl: "https://youtu.be/uoE6_wd6pFQ",
    coverArt: `https://img.youtube.com/vi/uoE6_wd6pFQ/maxresdefault.jpg`
  },
  {
    id: "track-7",
    title: "Humnashi",
    artist: "Palak Muchhal & Ashok Ojha",
    genre: "Bass Music",
    youtubeId: "rS0_xQXwqC0",
    youtubeUrl: "https://youtu.be/rS0_xQXwqC0",
    coverArt: `https://img.youtube.com/vi/rS0_xQXwqC0/maxresdefault.jpg`
  },
  
  {
    id: "track-9",
    title: "TUJHI PE MERA HAQ HAI",
    artist: "Saaj Bhatt & Srishti Bhandari",
    genre: "Future Bass",
    youtubeId: "B5h-fTV0m3A",
    youtubeUrl: "https://youtu.be/B5h-fTV0m3A",
    coverArt: `https://img.youtube.com/vi/B5h-fTV0m3A/maxresdefault.jpg`
  },
  {
    id: "track-10",
    title: "MUSKURANA TERA",
    artist: "Saaj Bhatt",
    genre: "Dark Ambient",
    youtubeId: "YcvbOWOnpP0",
    youtubeUrl: "https://youtu.be/YcvbOWOnpP0",
    coverArt: `https://img.youtube.com/vi/YcvbOWOnpP0/maxresdefault.jpg`
  },
  {
    id: "track-15",
    title: "Ex (Official Video)",
    artist: "Danish Alfaaz",
    genre: "Vaporwave",
    youtubeId: "V61rzxoukNM",
    youtubeUrl: "https://youtu.be/V61rzxoukNM",
    coverArt: `https://img.youtube.com/vi/V61rzxoukNM/maxresdefault.jpg`
  }
];

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
            href={project.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl h-full">
              <CardHeader className="p-0">
                <div className="relative w-full pt-[100%]">
                  <Image
                    src={project.coverArt}
                    alt={project.title}
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 line-clamp-1">{project.title}</CardTitle>
                <CardDescription>
                  <span className="line-clamp-1">
                    {project.artist} • {project.genre}
                  </span>
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}