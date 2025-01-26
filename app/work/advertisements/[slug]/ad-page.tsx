"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Award, BarChart3, Quote } from "lucide-react"

import { advertisements } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AdvertisementPage({
  ad,
}: {
  ad: (typeof advertisements)[number]
}) {
  return (
    <main className="min-h-screen relative">
      {/* Fancy background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-background -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background to-background -z-10" />

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-20 text-accent/20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      >
        <Award className="w-20 h-20" />
      </motion.div>

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
          className="space-y-16"
        >
          {/* Hero Section */}
          <section className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold tracking-normal mb-6"
            >
              {ad.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              {ad.description}
            </motion.p>
          </section>

          {/* Campaign Details */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <Card className="p-6 space-y-4 hover:shadow-lg transition-all">
              <BarChart3 className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold">Campaign Results</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  {ad.results.reach}
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  {ad.results.engagement}
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-accent" />
                  {ad.results.conversion}
                </li>
              </ul>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-all">
              <Award className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold">Client Information</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Client:</span> {ad.client}
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Year:</span> {ad.year}
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-medium">Category:</span> {ad.category}
                </p>
              </div>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-all">
              <Quote className="w-8 h-8 text-accent" />
              <h3 className="text-xl font-semibold">Campaign Overview</h3>
              <p className="text-muted-foreground">{ad.details}</p>
            </Card>
          </motion.section>

          {/* Gallery Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold tracking-normal">
              Campaign Gallery
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ad.gallery.map((image: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 * index }}
                  className="relative aspect-video rounded-lg overflow-hidden group"
                >
                  <img
                    src={image}
                    alt={`Campaign image ${index + 1}`}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testimonial */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Quote className="w-12 h-12 text-accent mx-auto mb-6" />
            <blockquote className="text-2xl font-medium mb-4">
              &quot;{ad.testimonial.quote}&quot;
            </blockquote>
            <cite className="text-muted-foreground">
              — {ad.testimonial.author}
            </cite>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Start Your Campaign
            </Button>
          </motion.section>
        </motion.div>
      </div>
    </main>
  )
}
