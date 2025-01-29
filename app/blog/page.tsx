import Image from "next/image"
import Link from "next/link"

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "TOBC Entertainment Teams Up with Varun Sharma – A Hilarious Ride Behind the Scenes",
    description: "At TOBC Entertainment, we thrive on creating campaigns that leave a lasting impression, and when we partnered with the one and only Varun Sharma, we knew we were in for something special! Varun’s infectious energy, comedic genius, and relatable charm made him the perfect collaborator for one of our most memorable projects to date.",
    imageSrc: "/tobc-gallery-11.jpg"
  },
  {
    id: "2",
    title: "TOBC Entertainment: Shivam Singh’s Creative Masterpiece in the Making",
    description: "In 2023, Shivam Singh  wasn’t just sitting around brainstorming ordinary business ideas. He was dreaming big—really big. With a love for stories, a vision for creativity, and a burning desire to shake up the entertainment industry, Shivam founded TOBC Entertainment in the bustling city of Mumbai. What started as a one-man mission with big dreams quickly snowballed into one of the most exciting production houses in the game.",
    imageSrc: "/tobc-gallery-1.jpg"
  },
  {
    id: "3",
    title: " TOBC Entertainment: Shivam Singh’s Creative Powerhouse",
    description: "In 2023, while most people were daydreaming about their next vacation or binge-watching the latest Netflix series, Shivam Singh was plotting something a little more… epic. Armed with a love for storytelling and a wild ambition to change the entertainment game, he founded TOBC Entertainment in the heart of Mumbai. It wasn’t just another “I’ll make some ads and hope they go viral” idea—it was a mission. And now, TOBC is one of the most exciting production houses out there, blending creativity with pure magic.",
    imageSrc: "/tobc-gallery-22.jpg"
  }
]

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
                height={320}
                className="w-full h-60 object-cover"
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