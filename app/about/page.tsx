"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutUsPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold tracking-normal mb-8 text-center"
      >
        About Us
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="mb-16 border-foreground/10 rounded-2xl lg:p-8 p-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row lg:gap-8 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-normal mb-4">
                  About The Company
                </h2>
                <p className="mb-4">
                  Born in the heart of India&apos;s entertainment capital,
                  Mumbai, TOBC Entertainment is a production house founded in
                  2023 by visionary filmmaker Shivam Singh. From the outset,
                  TOBC Entertainment set out with a mission to break boundaries
                  and redefine the art of filmmaking across Pan India.
                </p>
                <p className="mb-4">
                  Beyond its focus on filmmaking, TOBC Entertainment is a
                  creative powerhouse where fresh ideas come to life.
                  Specializing in a diverse range of projects—from interesting
                  advertisements to captivating songs and meaningful feature
                  films—each project is meticulously crafted with an emphasis on
                  originality, quality, and impact, ensuring that every piece
                  resonates deeply with its audience.
                </p>
                <p>
                  With a talented team and a bold vision for the future, TOBC
                  Entertainment is poised to leave a lasting mark on the
                  entertainment industry, both in India and beyond. Whether
                  producing compelling content, managing star talent, or
                  launching groundbreaking campaigns, TOBC Entertainment is
                  dedicated to delivering work that entertains, inspires, and
                  makes a difference.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:w-1/3"
              >
                <Image
                  src="/logo.jpg"
                  alt="TOBC Entertainment"
                  width={400}
                  height={300}
                  className="rounded-xl object-cover"
                />
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="border-foreground/10 rounded-2xl lg:p-8 p-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row-reverse lg:gap-8 gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-normal mb-4">
                  About The Director
                </h2>
                <p className="mb-4">
                  Shivam Singh is a film producer who founded TOBC Entertainment
                  in 2023 to empower and promote new ideas and talent in the
                  entertainment industry while exploring his own style of
                  filmmaking.
                </p>
                <p className="mb-4">
                  At TOBC Entertainment, Shivam is committed to discovering and
                  collaborating on entertainment opportunities with some of the
                  giants in Bollywood, such as Zee Music, Sa Re Ga Ma, and Times
                  Music. He nurtures emerging artists, collaborates with
                  celebrities and casting directors, and has delivered several
                  promising and entertaining songs.
                </p>
                <p>
                  Shivam Singh is synonymous with prestige, elegance,
                  versatility, and success. He is open to collaborating with
                  companies that have high values and a strong creative ethos.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="md:w-1/3"
              >
                <Image
                  src="/logo.jpg"
                  alt="Shivam Singh"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
