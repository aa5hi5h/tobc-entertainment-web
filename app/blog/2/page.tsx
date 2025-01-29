import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"



const SecondBlogPage = () => {

    return (
        <div className="container mx-auto lg:px-8 px-4 py-16 pb-32">
        <div className="w-full flex flex-col justify-start gap-16 items-start">
          <Button size="sm" variant="secondary">
            <Link href="/blog" className="inline-flex items-center gap-2">
              <ArrowLeftIcon className="size-4" /> Go back to blogs
            </Link>
          </Button>
          <article className="max-w-4xl mx-auto px-4 py-12">
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 p-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-blue-900 dark:text-blue-100">
          TOBC Entertainment: Shivam Singh's Creative Masterpiece in the Making
        </h1>
      </Card>

      <div className="prose prose-lg max-w-none space-y-8">
        <Card className="bg-white dark:bg-gray-900/50 p-6">
          <p className="text-lg leading-relaxed mb-6">
            In 2023, Shivam Singh wasn't just sitting around brainstorming ordinary business ideas. He was dreaming big—really big. With a love for stories, a vision for creativity, and a burning desire to shake up the entertainment industry, Shivam founded TOBC Entertainment in the bustling city of Mumbai. What started as a one-man mission with big dreams quickly snowballed into one of the most exciting production houses in the game.
          </p>
          
          <p className="text-lg leading-relaxed mb-6">
            Shivam's idea was simple: blend entertainment with real impact. He didn't want to make just any ads, songs, or short films—he wanted to create something that connects. With a knack for capturing the essence of a brand and turning it into something meaningful, TOBC became the go-to spot for creative campaigns that leave a lasting mark.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            TOBC's rise wasn't just about following trends—it was about setting them. From producing ads that make you laugh to songs that get stuck in your head, and films that make you feel, Shivam knew how to grab attention. And, of course, he didn't stop there. The next step? TOBC quickly became a favorite for brands looking to connect with audiences in fresh, authentic ways.
          </p>

          <p className="text-lg leading-relaxed">
            Today, with Shivam's fearless leadership, TOBC Entertainment is more than just a production house—it's a creative revolution. With every project, they push the boundaries of what's possible, mixing wit, creativity, and a bit of heart into everything they do.
          </p>
        </Card>

        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 p-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-900 dark:text-purple-100">
            Shivam Singh: The Man Behind the Magic
          </h2>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Shivam Singh's journey to founding TOBC Entertainment wasn't a straight path. With a passion for storytelling and a desire to create something that resonates, he put everything on the line to make his vision a reality. Now, as the driving force behind TOBC, Shivam's creative genius is what fuels the company's continued success.
            </p>
            
            <p className="text-lg leading-relaxed">
              His ability to take a brand's message and turn it into an unforgettable experience is what sets TOBC apart. From celebrity collaborations to viral marketing campaigns, Shivam's approach is always fresh, innovative, and, above all, impactful.
            </p>
          </div>
        </Card>
      </div>
    </article>
          </div>
          </div>
    )
}

export default SecondBlogPage