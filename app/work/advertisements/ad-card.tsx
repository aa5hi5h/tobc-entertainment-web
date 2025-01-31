import Link from "next/link"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Play } from "lucide-react"

export default function AdCard({
  ad,
}: {
  ad: {
    id: string;
    videoId: string;
    title: string;
    description: string;
    category: string;
  }
}) {
  return (
    <Link href={`/work/advertisements/${ad.id}`}>
      <motion.div
          key={ad.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{}}
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
        </motion.div>
    </Link>
  )
}