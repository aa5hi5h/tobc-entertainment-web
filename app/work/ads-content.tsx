"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { advertisements } from "@/config/site"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function AdvertisementContent() {
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
            key={ad.id}
            href={`/work/advertisements/${ad.id}`}
            className="group"
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={ad.coverImage}
                    alt={ad.title}
                    className="object-cover aspect-video h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{ad.title}</CardTitle>
                <CardDescription>{ad.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
