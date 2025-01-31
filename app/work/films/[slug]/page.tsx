"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Star, Clapperboard, User, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface PageProps {
  params: { slug: string }
}



const filmProjects = [
  {
    id: "film-1",
    title: "Dilema",
    synopsis: "Discover our collection of films, from thrilling dramas to heartwarming comedies.",
    poster: "/tobc-films-1.jpg",
    details: {
      cast: "Rohan Mehra & Pragya Kodile",
      director: "Preet Singh Bhullar",
      producer: "Shivam Singh"
    }
  },
  {
    id: "film-2", 
    title: "Lehenga",
    synopsis: "A compelling narrative exploring human emotions",
    poster: "/tobc-films-2.jpg", 
    details: {
      cast: "Jameel Khan",
      director: "Piyush Priyank", 
      coProducer: "Shivam Singh (TOBC)"
    }
  }
]

export default function FilmDetailPage({ params }: PageProps) {
  const film = filmProjects.find((f:any) => f.id === params.slug)
  
  if (!film) notFound()

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
            href="/work/films"
            className="flex items-center gap-2 text-foreground/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Films
          </Link>
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
              <img
                src={film.poster}
                alt={film.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-4">{film.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{film.synopsis}</p>
            </div>
          </section>

          {/* Film Details */}
          <section className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">Film Details</h3>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Clapperboard className="w-4 h-4 text-accent" />
                  <span className="font-medium">Genre:</span> 
                  {film.id === "film-1" ? "Psychological Drama" : "Romantic Drama"}
                </p>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <User className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">Cast</h3>
              </div>
              <p>{film.details.cast}</p>
            </Card>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">Creative Team</h3>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Director:</span> {film.details.director}
                </p>
                <p>
                  <span className="font-medium">
                    {film.id === "film-1" ? "Producer:" : "Co-Producer:"}
                  </span> {film.details.producer || film.details.coProducer}
                </p>
              </div>
            </Card>
          </section>

          {/* Story Synopsis */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Story Synopsis</h2>
            <Card className="p-8 prose max-w-none">
              <p className="text-lg">
                {film.id === "film-1" 
                  ? "As Vicky and Shweta's relationship unravels, they confront deep emotional scars. The narrative blurs the lines between dream and reality, leaving them to face an unresolved future."
                  : "Lehenga follows Javed Ali, a talented tailor, who becomes captivated by Chand Khan's voice when she asks him to make her lehenga. As they grow closer, Javed falls in love with her. However, after a quarrel with her husband, Chand is sent away, leaving Javed heartbroken as he delivers the finished lehenga, only to find she's gone."}
              </p>
            </Card>
          </section>
        </motion.div>
      </div>
    </main>
  )
}