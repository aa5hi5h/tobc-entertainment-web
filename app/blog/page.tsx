import Image from "next/image"
import Link from "next/link"

import { blogPosts } from "@/config/site"

export default function BlogPage() {
  return (
    <div className="container mx-auto lg:px-8 px-4 py-16 pb-32">
      <h1 className="md:text-5xl text-4xl text-center font-extrabold tracking-normal mb-8">
        All Blog Posts
      </h1>
      <div className="grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {blogPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="h-full">
            <div className="bg-background rounded-lg shadow-md shadow-black/[0.02] hover:shadow-black/[0.04] hover:shadow-lg overflow-hidden transition-all ease-in-out duration-300 border-2 border-muted">
              <img
                src={post.imageSrc}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-forgeround/70 line-clamp-3">
                  {post.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
