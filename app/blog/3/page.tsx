import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeftIcon, Lightbulb, Rocket, Star, Zap } from "lucide-react"
import Link from "next/link"
import { FaBrain } from "react-icons/fa"



const ThirdBlogPage = () => {

    return (
        <div className="container mx-auto lg:px-8 px-4 py-16 pb-32">
      <div className="w-full flex flex-col justify-start gap-16 items-start">
        <Button size="sm" variant="secondary">
          <Link href="/blog" className="inline-flex items-center gap-2">
            <ArrowLeftIcon className="size-4" /> Go back to blogs
          </Link>
        </Button>
        <article className="max-w-4xl mx-auto px-4 py-12">
          <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 p-8 mb-12 border-none">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
              TOBC Entertainment: Shivam Singh&apos;s Creative Powerhouse
            </h1>
          </Card>

          <div className="prose prose-lg max-w-none space-y-8">
            <Card className="p-6 bg-white dark:bg-gray-900/50">
              <p className="text-lg leading-relaxed mb-6">
                In 2023, while most people were daydreaming about their next vacation or binge-watching the latest Netflix series, Shivam Singh was plotting something a little more… epic. Armed with a love for storytelling and a wild ambition to change the entertainment game, he founded TOBC Entertainment in the heart of Mumbai. It wasn&apos;t just another &quot;I&apos;ll make some ads and hope they go viral&quot; idea—it was a mission. And now, TOBC is one of the most exciting production houses out there, blending creativity with pure magic.
              </p>
            </Card>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200">The Master Plan: Shake Things Up</h2>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Shivam&apos;s game plan wasn&apos;t about following trends or hopping on bandwagons. He wanted to create content that didn&apos;t just look cool but meant something. Whether it&apos;s an ad that makes you chuckle, a song that you can&apos;t get out of your head (no matter how hard you try), or a short film that hits you right in the feels—TOBC doesn&apos;t just do entertainment, it gets entertainment. And that&apos;s why brands flock to them like kids to candy.
              </p>
              <p className="text-lg leading-relaxed">
                TOBC wasn&apos;t just built to be another production house churning out content. Shivam envisioned a creative playground where brands come to life in ways that leave you saying, &quot;Wait, who made this?&quot; Whether they&apos;re working on celebrity campaigns or crafting social media gold, TOBC knows how to make it pop. In short? They&apos;re not just playing the game; they&apos;re changing the rules.
              </p>
            </Card>

            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-200">TOBC Entertainment: Where Creativity Never Sleeps</h2>
              </div>
              <p className="text-lg leading-relaxed">
                It didn&apos;t take long for TOBC to become the go-to spot for any brand that wanted to break through the noise. From commercials that make you laugh harder than you should, to viral campaigns that take over the internet faster than a cat video—TOBC doesn&apos;t miss. Seriously, they&apos;re like the Midas of marketing: everything they touch turns to creative gold. It&apos;s no surprise that brands are lining up to get a piece of that TOBC magic.
              </p>
            </Card>

            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/50 dark:to-orange-950/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FaBrain className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200">Shivam Singh: The Man, The Myth, The Mastermind</h2>
              </div>
              <p className="text-lg leading-relaxed">
                Let&apos;s talk about Shivam Singh, the guy behind it all. He didn&apos;t just wake up one day and say, &quot;I think I&apos;ll start a company.&quot; He&apos;s been building up his storytelling chops for years. Now, as the head honcho at TOBC, he&apos;s like a mad scientist of creativity, mixing wit, innovation, and just the right amount of heart into every project. He&apos;s not afraid to take risks (and they usually pay off), whether it&apos;s collaborating with celebrities, creating campaigns that go viral, or simply making people think, &quot;Wow, that was clever.&quot;
              </p>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/50 dark:to-teal-950/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-green-600 dark:text-green-400" />
                <h2 className="text-2xl font-bold text-green-800 dark:text-green-200">The Future Looks… Fun</h2>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                With Shivam steering the ship, TOBC is more than just a production house—it&apos;s a creative beast that&apos;s only getting started. So, whether you&apos;re a brand looking to stand out or just someone who loves great content, keep an eye on TOBC Entertainment. If their past is any indication, the future is going to be one wild ride.
              </p>
            </Card>

            <div className="flex items-center justify-center p-6 text-center">
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                TOBC: Not just entertainment, but an experience you&apos;ll remember… even after you&apos;ve scrolled past.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    )
}

export default ThirdBlogPage