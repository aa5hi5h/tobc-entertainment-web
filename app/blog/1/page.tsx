import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"


const FirstBlogPage = () => {

    return (
        <div className="container mx-auto lg:px-8 px-4 py-16 pb-32">
          <div className="w-full flex flex-col justify-start gap-16 items-start">
            <Button size="sm" variant="secondary">
              <Link href="/blog" className="inline-flex items-center gap-2">
                <ArrowLeftIcon className="size-4" /> Go back to blogs
              </Link>
            </Button>
            <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 leading-tight">
        TOBC Entertainment Teams Up with Varun Sharma – A Hilarious Ride Behind the Scenes
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg leading-relaxed mb-8">
          At TOBC Entertainment, we thrive on creating campaigns that leave a lasting impression, and when we partnered with the one and only Varun Sharma, we knew we were in for something special! Varun's infectious energy, comedic genius, and relatable charm made him the perfect collaborator for one of our most memorable projects to date.
        </p>

        <Card className="bg-blue-50 dark:bg-blue-950/50 p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
            When Varun Entered the Room, Laughter Followed
          </h2>
          <p className="leading-relaxed mb-4">
            Varun Sharma isn't just a talented actor – he's a vibe. From the moment he stepped onto the set, it was clear that working with him was going to be nothing short of epic. His down-to-earth personality made the entire team feel like we were hanging out with a longtime friend, and his ability to switch from cracking jokes to delivering perfect takes was simply chef's kiss.
          </p>
          <p className="leading-relaxed">
            Working with Varun was not just about shooting scenes; it was about creating an environment where creativity flowed effortlessly. Whether it was a small behind-the-scenes gag or a full-on improvised moment, Varun kept us laughing while delivering every shot with finesse. That's the magic he brings – making the complex look easy and the serious, funny!
          </p>
        </Card>

        <Card className="bg-purple-50 dark:bg-purple-950/50 p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-800 dark:text-purple-200">
            Collaboration That Sparked Creativity
          </h2>
          <p className="leading-relaxed mb-4">
            At TOBC Entertainment, we always aim to collaborate with people who not only bring their A-game but also elevate the entire project. With Varun Sharma, the synergy was instant. His improvisational skills and spontaneous ideas added layers to our vision, taking what was on paper and transforming it into something truly unique on-screen.
          </p>
          <p className="leading-relaxed">
            We didn't just direct him; we let him play, explore, and add his signature style. And believe us, the results were nothing short of electric! Varun's ability to seamlessly weave humor into any situation gave the project an edge that connected with the audience effortlessly.
          </p>
        </Card>

        <Card className="bg-green-50 dark:bg-green-950/50 p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-800 dark:text-green-200">
            Behind the Scenes with Varun – All Fun, No Drama
          </h2>
          <p className="leading-relaxed mb-4">
            The best part of working with Varun? His no-drama, all-fun attitude. Between takes, you could find him chatting with the crew, cracking up over his own bloopers, or simply sharing his love for movies and food (yes, he's a major foodie!). His positive energy was infectious, keeping everyone's spirits high throughout the shoot.
          </p>
          <p className="leading-relaxed">
            But don't get it twisted – when it was time to work, Varun brought laser focus. His professionalism mixed with a dash of fun ensured that every scene was executed flawlessly, while the crew was left smiling ear to ear.
          </p>
        </Card>

        <Card className="bg-amber-50 dark:bg-amber-950/50 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-amber-800 dark:text-amber-200">
            A Partnership We Won't Forget
          </h2>
          <p className="leading-relaxed mb-4">
            Working with Varun Sharma was an unforgettable experience for TOBC Entertainment. His personality, creativity, and effortless humor made him a dream collaborator. We didn't just create content – we crafted an experience that blended entertainment with joy, making the entire process a breeze.
          </p>
          <p className="leading-relaxed mb-4">
            Here at TOBC, we know the importance of a strong partnership, and with Varun, it felt like magic. It wasn't just another campaign; it was a celebration of what happens when two creative forces come together to make something incredible.
          </p>
          <p className="leading-relaxed">
            So, whether it's behind the camera or on the screen, TOBC Entertainment will always have a blast working with talents like Varun Sharma, where the only thing that matters more than the final product is the joy in the journey of creating it!
          </p>
        </Card>
      </div>
    </article>
          </div>
        </div>
      )
    }

export default FirstBlogPage
