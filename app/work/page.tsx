"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

import AdvertisementContent from "./ads-content"
import FilmsContent from "./films-content"
import MusicContent from "./music-content"
import SectionHeader from "./section-header"
import { tabs } from "./tabs"
import FullAdvertisementContent from "./advertisement-content"

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("advertisement")

  return (
    <main className="min-h-screen">
      {/* Hero Section with Tabs */}
      <section className="relative overflow-hidden bg-accent/[0.03] lg:py-20 py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="tracking-normal text-balance lg:text-6xl md:text-5xl text-4xl font-extrabold mb-6 uppercase">
              Our <span className="text-accent">Work</span>
            </h1>
            <p className="text-lg text-foreground/80">
              Explore our diverse portfolio across advertisement, music, and
              film production. Each project represents our commitment to
              excellence and creativity.
            </p>
          </div>

          <div className="flex justify-center mb-12">
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
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "advertisement" && <FullAdvertisementContent />}
              {activeTab === "music" && <MusicContent />}
              {activeTab === "films" && <FilmsContent />}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
}
