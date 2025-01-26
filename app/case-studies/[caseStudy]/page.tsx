import Image from "next/image"
import { notFound } from "next/navigation"

import { caseStudies } from "@/config/site"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    caseStudy: study.id,
  }))
}

export default function CaseStudy({
  params,
}: {
  params: { caseStudy: string }
}) {
  const study = caseStudies.find((s) => s.id === params.caseStudy)

  if (!study) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 pt-16 pb-32">
      <Card className="max-w-4xl mx-auto rounded-xl p-4">
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold tracking-normal mb-8">
            {study.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="mb-8">
            <img
              src={study.image}
              alt={study.title}
              width={800}
              height={400}
              className="rounded-lg object-cover object-center"
            />
          </div>
          <section>
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-normal mb-4">
              Overview
            </h2>
            <p>{study.description}</p>
          </section>
          <section>
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-normal mb-4">
              Client
            </h2>
            <p>{study.client}</p>
          </section>
          <section>
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-normal mb-4">
              Challenge
            </h2>
            <p>{study.challenge}</p>
          </section>
          <section>
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-normal mb-4">
              Solution
            </h2>
            <p>{study.solution}</p>
          </section>
          <section>
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-normal mb-4">
              Results
            </h2>
            <ul className="list-disc pl-5">
              {study.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </section>
          <section className="bg-card border-2 border-foreground/10 p-6 rounded-lg">
            <h2 className="md:text-3xl text-2xl font-extrabold tracking-normal mb-4">
              Testimonial
            </h2>
            <blockquote className="text-lg text-pretty">
              &quot;{study.testimonial.quote}&quot;
            </blockquote>
            <p className="mt-2 font-bold">- {study.testimonial.author}</p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
