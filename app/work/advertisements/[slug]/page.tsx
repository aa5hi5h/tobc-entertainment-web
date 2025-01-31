"use client"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PageProps {
  params: {
    slug: string
  }
}

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
]


export default function Page({ params }: PageProps) {
  const ad = advertisements.find((ad) => ad.id === params.slug)
  if (!ad) notFound()

  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-background -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background to-background -z-10" />

      <div className="container mx-auto px-4 py-16">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="hover:bg-accent/10 transition-all duration-300 ease-in-out border-accent/20 mb-16"
        >
          <Link
            href="/work/advertisements"
            className="flex items-center gap-2 text-foreground/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Advertisements
          </Link>
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <section className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold tracking-normal mb-6">
              {ad.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {ad.description}
            </p>
          </section>

          <section className="max-w-4xl mx-auto">
            <div className="aspect-video bg-black">
              <iframe
                src={`https://player.vimeo.com/video/${ad.videoId}`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={ad.title}
              />
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  )
}