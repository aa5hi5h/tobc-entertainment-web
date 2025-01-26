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

export default function AdCard({
  ad,
}: {
  ad: (typeof advertisements)[number]
}) {
  return (
    <Link href={`/work/advertisements/${ad.id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <motion.img
              src={ad.coverImage}
              alt={ad.title}
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/60 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="px-6 py-3 border border-white text-white rounded-full"
              >
                View Campaign
              </motion.div>
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="mb-2">{ad.title}</CardTitle>
          <CardDescription>{ad.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
