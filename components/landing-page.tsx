"use client"

import React, { useEffect, useState } from "react"
import {
  DollarSignIcon,
  LightbulbIcon,
  LucidePersonStanding,
  TrendingUp,
  UsersIcon,
  VideoIcon,
} from "lucide-react"
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"
import "swiper/css/free-mode"
// Import Swiper styles
import "swiper/css"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useInView } from "framer-motion"

import { caseStudies, celebreties } from "@/config/site"
import { cn } from "@/lib/utils"
import AdvertisementContent from "@/app/work/ads-content"
import FilmsContent from "@/app/work/films-content"
import MusicContent from "@/app/work/music-content"
import { tabs } from "@/app/work/tabs"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Button } from "./ui/button"
import NumberTicker from "./ui/number-ticker"
import { HorizontalScrollBar } from "./scrollbar/main"

function AppleIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}

export default function LandingPage() {
  const [screenSize, setScreenSize] = useState<null | "lg" | "md" | "sm">(null)
  const [activeTab, setActiveTab] = useState("advertisement")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("sm")
      } else if (window.innerWidth < 1024) {
        setScreenSize("md")
      } else {
        setScreenSize("lg")
      }
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="w-full text-foreground">
      {/* Perfect influencer and celebrity Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex lg:flex-col flex-col lg:gap-16 gap-12 items-center justify-center  px-8 md:py-52 py-24 relativ w-fulle relative overflow-hidden"
      >
        <div className="w-full h-full absolute top-0 left-0 inset-0 z-[-1]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background to-70%"></div>
          <img
            src={"https://www.euruni.edu/blog/wp-content/uploads/Cinema-8.jpg"}
            alt="background"
            className="object-cover w-full h-full"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="tracking-normal uppercase text-balance text-center lg:text-5xl md:text-4xl text-3xl font-medium text-foreground"
          >
            Match Your <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-red-500
            to-rose-600 bg-opacity-50">Brand</span> With The
            <br />{" "}
            <span className="font-extrabold ">
              Perfect Celebrities and Influencers
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6 text-foreground max-w-xl mx-auto text-center lg:text-lg md:text-base text-sm"
          >
            Amplify your reach, and drive engagement with our influencer and
            celebrity marketing services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              size={"sm"}
              asChild
              className=" rounded-full bg-[size:300%_300%] bg-[position:0%_0%] hover:bg-[position:100%_100%] transition-all duration-500 ease-in-out object-center bg-gradient-to-r from-accent via-primary to-accent lg:text-base text-sm h-12 px-8 bg-primary text-white font-bold shadow-[0px_6px_40px_hsl(var(--accent)/0.3)] mt-8 capitalize"
            >
              <Link href={"/contact-us"}>Connect with us today!</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>
      {/* Our Story Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-8 pb-24 relative"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]"
        >
          <div className="flex-row sm:inline-flex gap-16 hidden -mt-16 overflow-visible pb-8 animate-slide-left w-full">
            {celebreties.map((celeb, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`inline ${
                  i % 2 === 0 ? (i % 3 === 0 ? "mt-48" : "mt-40") : "mt-16"
                }`}
              >
                <Image
                  draggable={false}
                  src={celeb.imageSrc}
                  alt="influencer and celebrity"
                  className="min-h-56 rounded-lg object-cover min-w-48 aspect-[3/4] "
                  width="187"
                  height="250"
                />
                <div className="flex flex-row justify-start gap-2 mt-4">
                  <Image
                    draggable={false}
                    src={celeb.imageSrc}
                    alt="influencer and celebrity"
                    className="rounded-full h-fit flex-1 aspect-square object-cover max-w-[40px]"
                    width="40"
                    height="40"
                  />
                  <div className="flex w-fit flex-col justify-start gap-2">
                    <h3 className="text-sm font-semibold">{celeb.name}</h3>
                    <p className="text-sm -mt-2">{celeb.tag}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {screenSize === "sm" && (
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            allowTouchMove={true}
            effect="cretive"
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, bulletClass: "text-primary" }}
            centeredSlides={true}
            className="overflow-visible"
          >
            {celebreties.map((celeb, i) => (
              <SwiperSlide className="overflow-visible">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="overflow-visible grid shadow-xl shadow-foreground/5 items-start bg-accent/[0.01] rounded-xl justify-center flex-col lg:p-8 p-6 h-full"
                >
                  <div className="grid gap-3 lg:gap-5">
                    <div className="flex flex-col justify-center gap-4 items-center space-x-3">
                      <div className="">
                        <Image
                          draggable={false}
                          src={celeb.imageSrc}
                          alt="Profile"
                          className="object-cover w-full h-full aspect-[374/500] rounded-lg"
                          width="374"
                          height="500"
                        />
                      </div>
                      <div className="text-xl font-bold tracking-normal text-center">
                        <div>{celeb.name}</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          {celeb.tag}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="tracking-normal uppercase text-center lg:text-5xl md:text-4xl text-3xl font-extrabold mt-8"
        >
          <span className="font-normal">Our</span>{" "}
          <span className="text-accent">Story</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center lg:lg:text-lg text-sm md:text-base text-foreground max-w-4xl mx-auto"
        >
          At TOBC Entertainment, we specialize in empowering brands to harness
          the power of influencer and celebrity marketing. With a team of
          seasoned experts and a deep understanding of digital trends, we’re
          committed to crafting tailored strategies that elevate your brand’s
          presence and drive tangible results.
          <br />
          <br /> From identifying the perfect influencers to executing seamless
          campaigns, we’re dedicated to helping your brand thrive in the
          ever-evolving digital landscape.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <Button
            size={"sm"}
            asChild
            className=" rounded-full bg-[size:300%_300%] bg-[position:0%_0%] hover:bg-[position:100%_100%] transition-all duration-500 ease-in-out object-center bg-gradient-to-r from-accent via-primary to-accent lg:text-base text-sm h-12 px-8 bg-primary text-white font-bold shadow-[0px_6px_40px_hsl(var(--accent)/0.3)] mt-12"
          >
            <Link href={"/contact-us"}>Contact Us</Link>
          </Button>
          <Button
            size={"sm"}
            asChild
            className=" rounded-full bg-[size:300%_300%] bg-[position:0%_0%] hover:bg-[position:100%_100%] transition-all duration-500 ease-in-out object-center bg-gradient-to-r from-accent via-primary to-accent lg:text-base text-sm h-12 px-8 bg-primary text-white font-bold shadow-[0px_6px_40px_hsl(var(--accent)/0.3)] mt-12"
          >
            <Link href={"/about"}>Discover More</Link>
          </Button>
        </motion.div>
      </motion.section>

      {/* Our Clients Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-8 py-24 relative"
      >
        <div className="mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="tracking-normal uppercase text-center lg:text-5xl md:text-4xl text-3xl font-medium"
          >
            Our <span className="font-extrabold text-gradient
            bg-gradient-to-r
            from-red-500
            to-rose-600
            bg-clip-text
            text-transparent">Clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-center lg:text-lg md:text-base text-sm text-foreground/80"
          >
            We help brands and agencies excel in influencer and celebrity
            marketing, globally.
          </motion.p>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-8"
          >
            <div className="logos group relative overflow-hidden whitespace-nowrap py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
              <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
                {Array.from({ length: 27 }).map((i: any, index: number) => (
                  <Image
                    key={i}
                    draggable={false}
                    width={400}
                    height={300}
                    className="mx-8 inline h-32 rounded-lg object-cover w-auto aspect-[4/3]"
                    src={`/brands/${index + 1}.webp`}
                    alt={`Brand ${index + 1}`}
                  />
                ))}
              </div>
              <div className="animate-slide-left group-hover:animation-pause inline-block w-max">
                {Array.from({ length: 27 }).map((i: any, index: number) => (
                  <Image
                    key={i}
                    draggable={false}
                    width={400}
                    height={300}
                    className="mx-8 inline h-32 rounded-lg object-cover w-auto aspect-[4/3]"
                    src={`/brands/${index + 1}.webp`}
                    alt={`Brand ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        </div>
      </motion.section>
      {/* The Power of Authentic Relationship Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-8 py-24 relative"
      >
        <div className="mx-auto max-w-7xl z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="tracking-normal uppercase text-center lg:text-5xl md:text-4xl text-3xl font-extrabold"
          >
            <span className="font-medium">The Power Of</span>
            <br /> Authentic influencer and celebrity Relationship
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-center lg:text-lg md:text-base text-sm text-foreground/80"
          >
            We effectively harness the credibility and sway of social media
            influencers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 mb-16"
          >
            <div className="rounded-xl  backdrop-blur-md md:p-8 p-6 border-foreground/10 border-2">
              <h3 className="text-center text-5xl font-extrabold">
                <NumberTicker value={90} />%
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                Engagement Rate
              </p>
            </div>
            <div className="rounded-xl  backdrop-blur-md md:p-8 p-6 border-foreground/10 border-2">
              <h3 className="text-center text-5xl font-extrabold">
                <NumberTicker value={200} />%
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                Increase In Views
              </p>
            </div>
            <div className="rounded-xl  backdrop-blur-md md:p-8 p-6 border-foreground/10 border-2">
              <h3 className="text-center text-5xl font-extrabold">
                <NumberTicker value={85} />%
              </h3>
              <p className="mt-2 text-center text-foreground/80">
                Follower Growth
              </p>
            </div>
            <div className="rounded-xl  backdrop-blur-md md:p-8 p-6 border-foreground/10 border-2">
              <h3 className="text-center text-5xl font-extrabold">
                <NumberTicker value={98} />%
              </h3>
              <p className="mt-2 text-center text-foreground/80">Brand Trust</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Crafted by Specialists and Trusted by Professionals Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-accent/[0.03] lg:py-20 py-16"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="tracking-normal text-balance lg:text-6xl md:text-5xl text-4xl font-extrabold mb-6 uppercase">
              Our <span className="text-accent">Work</span>
            </h1>
            <p className="lg:text-lg md:text-base text-sm text-foreground/80">
              Explore our diverse portfolio across advertisement, music, and
              film production. Each project represents our commitment to
              excellence and creativity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-background/50 backdrop-blur-sm p-2 rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out",
                    activeTab === tab.id
                      ? "bg-accent text-white shadow-lg"
                      : "hover:bg-accent/10"
                  )}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "advertisement" && <AdvertisementContent />}
              {activeTab === "music" && <MusicContent />}
              {activeTab === "films" && <FilmsContent />}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* The Trust We Earn Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className=" px-8 py-24 relative"
      >
        <div className="relative size-full max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="tracking-normal uppercase text-center lg:text-5xl md:text-4xl text-3xl font-medium"
          >
            The <span className="font-extrabold ">Trust We Earn</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-center lg:text-lg md:text-base text-sm text-foreground/80"
          >
            Our clients can&apos;t stop raving about us!
          </motion.p>
          <div className="w-full max-w-7xl mx-auto mt-8 rounded-xl">
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={50}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 32,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 32,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              allowTouchMove={true}
              effect="cretive"
              slidesPerView={1}
              navigation
              pagination={{ clickable: true, bulletClass: "text-primary" }}
              centeredSlides={true}
            >
              <SwiperSlide className="overflow-visible">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl  backdrop-blur-md md:p-8 p-6 border-foreground/10 border-2"
                >
                  <div className="grid gap-3 lg:gap-5">
                    <p className="lg:text-lg md:text-base text-sm">
                      &ldquo;I was amazed by the quality of service. The team
                      was professional, courteous, and efficient
                      throughout.&ldquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10">
                        <img
                          draggable={false}
                          src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Emily Patel</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          Marketing Manager
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="overflow-visible">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl  backdrop-blur-md md:p-8 p-6 border-foreground/10 border-2"
                >
                  <div className="grid gap-3 lg:gap-5">
                    <p className="lg:text-lg md:text-base text-sm ">
                      &ldquo;The level of expertise and attention to detail
                      demonstrated by the team was truly impressive. I would
                      highly recommend their services to anyone.&ldquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10">
                        <img
                          draggable={false}
                          src="https://images.pexels.com/photos/20094341/pexels-photo-20094341/free-photo-of-portrait-of-man-wearing-brown-cap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Adam Turner</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          CEO, Horizon Inc
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="overflow-visible">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl  backdrop-blur-md md:p-8 p-6 border-foreground/10 border-2"
                >
                  <div className="grid gap-3 lg:gap-5">
                    <p className="lg:text-lg md:text-base text-sm ">
                      &ldquo;The support team was incredibly helpful and
                      responsive. They resolved my issue in no time, and I
                      couldn&apos;t be happier with the service.&ldquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10">
                        <img
                          draggable={false}
                          src="https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Sophia Lee</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          Customer Support Representative
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="overflow-visible">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl  backdrop-blur-md md:p-8 p-6 border-foreground/10 border-2"
                >
                  <div className="grid gap-3 lg:gap-5">
                    <p className="lg:text-lg md:text-base text-sm">
                      &ldquo;I was amazed by the quality of service. The team
                      was professional, courteous, and efficient
                      throughout.&ldquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10">
                        <img
                          draggable={false}
                          src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Emily Patel</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          Marketing Manager
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="overflow-visible">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl  backdrop-blur-md md:p-8 p-6 border-foreground/10 border-2"
                >
                  <div className="grid gap-3 lg:gap-5">
                    <p className="lg:text-lg md:text-base text-sm">
                      &ldquo;The level of expertise and attention to detail
                      demonstrated by the team was truly impressive. I would
                      highly recommend their services to anyone.&ldquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10">
                        <img
                          draggable={false}
                          src="https://images.pexels.com/photos/20094341/pexels-photo-20094341/free-photo-of-portrait-of-man-wearing-brown-cap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Adam Turner</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          CEO, Horizon Inc
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
              <SwiperSlide className="overflow-visible">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl  backdrop-blur-md md:p-8 p-6 border-foreground/10 border-2"
                >
                  <div className="grid gap-3 lg:gap-5">
                    <p className="lg:text-lg md:text-base text-sm ">
                      &ldquo;The support team was incredibly helpful and
                      responsive. They resolved my issue in no time, and I
                      couldn&apos;t be happier with the service.&ldquo;
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full overflow-hidden w-10 h-10">
                        <img
                          draggable={false}
                          src="https://images.pexels.com/photos/13081260/pexels-photo-13081260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width="40"
                          height="40"
                          alt="Profile"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "40/40", objectFit: "cover" }}
                        />
                      </div>
                      <div className="text-sm font-semibold">
                        <div>Sophia Lee</div>
                        <div className="text-sm -mt-0.5 text-foreground/60 font-medium">
                          Customer Support Representative
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </motion.section>

      <section className="py-12">
      <HorizontalScrollBar />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-8 py-24 relative"
      >
        <div className="relative size-full max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="tracking-normal uppercase text-center lg:text-5xl md:text-4xl text-3xl font-extrabold"
          >
            <span className="font-medium">Frequently </span>Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-center lg:text-lg md:text-base text-sm text-foreground/80"
          >
            Frequently asked questions about our influencer and celebrity
            marketing services.
            <br />
            If you have any questions, feel free to contact us.
          </motion.p>
          <Accordion
            type="single"
            collapsible
            className="max-w-3xl mx-auto flex flex-col gap-4 mt-8"
          >
            <AccordionItem
              className=" backdrop-blur-sm shadow-lg shadow-foreground/[0.02] rounded-xl py-2 px-8"
              value="item-1"
            >
              <AccordionTrigger className="text-left">
                What Types of Influencers Do You Work With?
              </AccordionTrigger>
              <AccordionContent>
                Content regarding the types of influencers the agency works
                with.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className=" backdrop-blur-sm shadow-lg shadow-foreground/[0.02] rounded-xl py-2 px-8"
              value="item-2"
            >
              <AccordionTrigger className="text-left">
                How does our agency select influencers?
              </AccordionTrigger>
              <AccordionContent>
                Content explaining how the agency selects influencers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className=" backdrop-blur-sm shadow-lg shadow-foreground/[0.02] rounded-xl py-2 px-8"
              value="item-3"
            >
              <AccordionTrigger className="text-left">
                Can I choose the influencers I want to work with?
              </AccordionTrigger>
              <AccordionContent>
                Content about choosing influencers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className=" backdrop-blur-sm shadow-lg shadow-foreground/[0.02] rounded-xl py-2 px-8"
              value="item-4"
            >
              <AccordionTrigger className="text-left">
                How much does an influencer and celebrity marketing campaign
                cost?
              </AccordionTrigger>
              <AccordionContent>
                Content discussing the cost of an influencer and celebrity
                marketing campaign.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className=" backdrop-blur-sm shadow-lg shadow-foreground/[0.02] rounded-xl py-2 px-8"
              value="item-5"
            >
              <AccordionTrigger className="text-left">
                How do you ensure the content aligns with our brand?
              </AccordionTrigger>
              <AccordionContent>
                Content explaining how the agency ensures content alignment with
                the brand.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-accent px-8 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="tracking-normal uppercase font-extrabold lg:text-5xl md:text-4xl text-3xl text-center"
          >
            Ready To Make Waves?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-2 max-w-sm text-center lg:text-lg md:text-base text-sm mx-auto"
          >
            Get in touch with us to start your influencer and celebrity
            marketing journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Button
              variant={"secondary"}
              size={"lg"}
              className="mt-8 text-xl bg-foreground hover:bg-foreground/95 rounded-full h-14 px-10 text-background mx-auto"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
