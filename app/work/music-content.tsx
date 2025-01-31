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
    id: "track-1",
    title: "Tum Subah",
    artist: "Mohd Danish, Sarodee Borah",
    genre: "Electronic",
    youtubeId: "PaAJeXtT1Hw",
    youtubeUrl: "https://youtu.be/PaAJeXtT1Hw",
    coverArt: `https://img.youtube.com/vi/PaAJeXtT1Hw/maxresdefault.jpg`
  },
  {
    id: "track-2",
    title: "Laut Maa Aao",
    artist: "Anong Singpho & Oupseng Namchoom",
    genre: "Emotional",
    youtubeId: "zffBlrbRJVo",
    youtubeUrl: "https://youtu.be/zffBlrbRJVo",
    coverArt: `https://img.youtube.com/vi/zffBlrbRJVo/maxresdefault.jpg`
  },
  {
    id: "track-3",
    title: "Tum Mere Pass",
    artist: " Mohammed Irfan",
    genre: "Ambient",
    youtubeId: "4L_Ur3bVBF0",
    youtubeUrl: "https://youtu.be/4L_Ur3bVBF0",
    coverArt: `https://img.youtube.com/vi/4L_Ur3bVBF0/maxresdefault.jpg`
  },
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
    id: "track-5",
    title: "Sunne Sunne",
    artist: "Dolly Khan",
    genre: "Synthwave",
    youtubeId: "Jofkkn_VU8c",
    youtubeUrl: "https://youtu.be/Jofkkn_VU8c",
    coverArt: `https://img.youtube.com/vi/Jofkkn_VU8c/maxresdefault.jpg`
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
    id: "track-8",
    title: "Careless ",
    artist: "Vishu Arik ",
    genre: "Electronic Pop",
    youtubeId: "Y_qG_8Ssv-k",
    youtubeUrl: "https://youtu.be/Y_qG_8Ssv-k",
    coverArt: `https://img.youtube.com/vi/Y_qG_8Ssv-k/maxresdefault.jpg`
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
    id: "track-11",
    title: "TU MERE DIL ME RAHNE KE LAYAK NAHI",
    artist: "Altamash Faridi ",
    genre: "Synthpop",
    youtubeId: "KmILhw-1ztc",
    youtubeUrl: "https://youtu.be/KmILhw-1ztc",
    coverArt: `https://img.youtube.com/vi/KmILhw-1ztc/maxresdefault.jpg`
  },
  {
    id: "track-12",
    title: "Sang Tum Rehna",
    artist: "Alka Yagnik, Ashok Ojha",
    genre: "Ambient",
    youtubeId: "BGM3FDI1fHY",
    youtubeUrl: "https://youtu.be/BGM3FDI1fHY",
    coverArt: `https://img.youtube.com/vi/BGM3FDI1fHY/maxresdefault.jpg`
  },
  {
    id: "track-13",
    title: "Dooriyan",
    artist: "P-ush",
    genre: "Chillwave",
    youtubeId: "7xXUjQy36KQ",
    youtubeUrl: "https://youtu.be/7xXUjQy36KQ",
    coverArt: `https://img.youtube.com/vi/7xXUjQy36KQ/maxresdefault.jpg`
  },
  {
    id: "track-14",
    title: "Ohh Jaaniye",
    artist: "Anong Singpho",
    genre: "Electronic",
    youtubeId: "IcBSljhfIDM",
    youtubeUrl: "https://youtu.be/IcBSljhfIDM",
    coverArt: `https://img.youtube.com/vi/IcBSljhfIDM/maxresdefault.jpg`
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