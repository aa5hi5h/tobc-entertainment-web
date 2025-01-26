import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

interface WorkItemProps {
  title: string
  description: string
  image: string
  link?: string
  id: string
}

export function WorkItem({
  title,
  description,
  image,
  link,
  id,
}: WorkItemProps) {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 flex- flex-col gap-2 items-start justify-start shadow-foreground/[0.02] hover:shadow-foreground/[0.04] hover:shadow-lg border-2 border-foreground/10">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="transition-all object-cover ease-in-out duration-300"
        />
      </div>
      <div className="p-4 md:mt-20 mt-24">
        <h3 className="md:text-2xl text-xl font-bold mb-4">{title}</h3>
        <p className="text-foreground/80 mb-8">{description}</p>
        <Button variant="default" asChild>
          <Link className="w-full" href={`/case-studies/${id}`}>
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  )
}
