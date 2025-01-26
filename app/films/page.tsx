import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const films = [
  {
    title: "The Lost City",
    description:
      "An adventure comedy about a reclusive romance novelist on a book tour with her cover model.",
    poster:
      "https://i.pinimg.com/originals/21/a6/4f/21a64f3541924d524411ed322ae80744.jpg",
    year: 2022,
  },
  {
    title: "Eternal Sunshine",
    description:
      "A sci-fi drama about a couple who undergo a medical procedure to erase each other from their memories.",
    poster:
      "https://res.cloudinary.com/dzdgpwtox/image/upload/w_600,c_scale,f_auto,q_auto/v1595714939/designer-tool-uploads/bucket_1773/1595714840570.jpg",
    year: 2004,
  },
  {
    title: "The Matrix",
    description:
      "A sci-fi action film about a computer programmer who discovers a secret world of artificial intelligence.",
    poster:
      "https://assets-prd.ignimgs.com/2022/06/30/matrix1-1656607748915.png",
    year: 1999,
  },
]

export default function FilmsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="md:text-5xl text-4xl font-extrabold tracking-normal mb-8">
        Our Films
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {films.map((film, index) => (
          <Card key={index} className="rounded-lg">
            <CardHeader className="p-0">
              <img
                draggable={false}
                src={film.poster}
                alt={`${film.title} poster`}
                width={300}
                height={450}
                className="w-full select-none aspect-video object-cover rounded-t-lg"
              />
            </CardHeader>

            <CardContent className="pt-7 -mt-1 space-y-2">
              <div className="flex flex-col gap-1">
                <CardTitle>{film.title}</CardTitle>
                <CardDescription>{film.year}</CardDescription>
              </div>
              <p>{film.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
