"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play } from "lucide-react"

const advertisements = [
    {
      id: "campaign-1",
      videoId: "1028339432",
      title: "Brand Campaign",
      description: "Storytelling through visual excellence",
      category: "Commercial"
    },
    {
      id: "campaign-2",
      videoId: "1028335454",
      title: "Creative Vision",
      description: "Innovative brand storytelling",
      category: "Brand Film"
    },
    {
      id: "campaign-3",
      videoId: "1028330112",
      title: "Marketing Excellence",
      description: "Engaging visual narrative",
      category: "Advertisement"
    },
    {
      id: "campaign-4",
      videoId: "1028327950",
      title: "Brand Story",
      description: "Compelling visual journey",
      category: "Commercial"
    },
    {
      id: "campaign-5",
      videoId: "1028324211",
      title: "Visual Journey",
      description: "Cinematic brand experience",
      category: "Brand Film"
    },
    {
      id: "campaign-6",
      videoId: "1020867798",
      title: "Digital Innovation",
      description: "Modern marketing solutions",
      category: "Commercial"
    },
    {
      id: "campaign-7",
      videoId: "1020866368",
      title: "Creative Showcase",
      description: "Artistic brand expression",
      category: "Brand Film"
    },
    {
      id: "campaign-8",
      videoId: "1020865034",
      title: "Market Impact",
      description: "Strategic visual communication",
      category: "Advertisement"
    },
    {
      id: "campaign-9",
      videoId: "1020861611",
      title: "Brand Evolution",
      description: "Progressive marketing approach",
      category: "Commercial"
    },
    {
      id: "campaign-10",
      videoId: "1020860028",
      title: "Visual Storytelling",
      description: "Emotional brand connection",
      category: "Brand Film"
    },
    {
      id: "campaign-11",
      videoId: "1020856851",
      title: "Creative Excellence",
      description: "Innovative advertising solutions",
      category: "Advertisement"
    },
    {
      id: "campaign-12",
      videoId: "962289737",
      title: "Brand Identity",
      description: "Distinctive visual branding",
      category: "Commercial"
    },
    {
      id: "campaign-13",
      videoId: "955396167",
      title: "Marketing Vision",
      description: "Forward-thinking campaigns",
      category: "Brand Film"
    },
    {
      id: "campaign-14",
      videoId: "953133961",
      title: "Creative Direction",
      description: "Strategic brand messaging",
      category: "Advertisement"
    },
    {
      id: "campaign-15",
      videoId: "952331773",
      title: "Visual Impact",
      description: "Powerful brand statements",
      category: "Commercial"
    },
    {
      id: "campaign-16",
      videoId: "942681988",
      title: "Brand Expression",
      description: "Authentic storytelling",
      category: "Brand Film"
    },
    {
      id: "campaign-17",
      videoId: "919681705",
      title: "Market Leadership",
      description: "Pioneering advertising concepts",
      category: "Advertisement"
    },
    {
      id: "campaign-18",
      videoId: "919678763",
      title: "Creative Innovation",
      description: "Next-generation marketing",
      category: "Commercial"
    },
    {
      id: "campaign-19",
      videoId: "907002934",
      title: "Brand Narrative",
      description: "Compelling story development",
      category: "Brand Film"
    },
    {
      id: "campaign-20",
      videoId: "888628838",
      title: "Digital Excellence",
      description: "Modern marketing mastery",
      category: "Advertisement"
    },
    {
      id: "campaign-21",
      videoId: "872448921",
      title: "Visual Legacy",
      description: "Timeless brand messaging",
      category: "Commercial"
    }
  ].map(ad => ({
  ...ad,
  vimeoUrl: `https://vimeo.com/${ad.videoId}`
}))

export default function FullAdvertisementContent() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {advertisements.map((ad, index) => (
        <motion.div
          key={ad.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <Link
            href={`/work/advertisements/${ad.id}`}
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden bg-gray-900">
                  <iframe
                    src={`https://player.vimeo.com/video/${ad.videoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-gray-900" />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{ad.title}</CardTitle>
                <CardDescription>
                  <span className="text-sm font-medium text-muted-foreground">
                    {ad.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{ad.description}</span>
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}