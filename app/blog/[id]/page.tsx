import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"
import ReactMarkdown from "react-markdown"

import { blogPosts } from "@/config/site"
import { Button } from "@/components/ui/button"

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto lg:px-8 px-4 py-16 pb-32">
      <div className="w-full flex flex-col justify-start gap-16 items-start">
        <Button size="sm" variant="secondary">
          <Link href="/blog" className="inline-flex items-center gap-2">
            <ArrowLeftIcon className="size-4" /> Go back to blogs
          </Link>
        </Button>
        <ReactMarkdown className="prose lg:prose-lg">
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}
