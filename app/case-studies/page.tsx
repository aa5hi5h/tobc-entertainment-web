"use client"

import { motion } from "framer-motion"

export default function CaseStudies() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        className="border-b border-accent/20 relative h-[80vh] flex items-center justify-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <motion.img
            src="/placeholder.svg?height=800&width=1200"
            alt="Desktop with computer and plants"
            className="w-full h-full object-cover"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="absolute inset-0 bg-black/40"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
        <motion.h1
          className="relative text-6xl md:text-7xl font-extrabold uppercase text-center max-w-4xl mx-auto leading-tight"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Data speaks louder than words.
        </motion.h1>
      </motion.section>

      {/* Health & Wellness Case Study */}
      <motion.section
        className="border-b border-accent/20 bg-black/10 py-20 px-4 md:px-8"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            HOW WE HELPED A HEALTH & WELLNESS CLIENT FROM 1,200 TO 250,000+
            FOLLOWERS IN 12 MONTHS.
          </motion.h2>
          <div className="flex md:flex-row-reverse flex-col justify-between gap-12 mt-8">
            <div className="space-y-4">
              <motion.img
                src="/placeholder.svg?height=600&width=300"
                alt="Analytics graph"
                className="w-full max-w-[300px]"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.p
                className="text-sm text-foreground/70"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                *Results vary from account to account and aren&apos;t
                guaranteed.
              </motion.p>
            </div>
            <div className="space-y-6">
              <motion.p
                className="text-foreground/80"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Based on the monthly data we gather for clients, we created a
                new accessible offer in their funnel and aligned a launch
                strategy along with their offer.
              </motion.p>
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Industry</h3>
                  <p>Health & Wellness</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Platforms</h3>
                  <p>Instagram</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Services</h3>
                  <p>Full-service social media management</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Year</h3>
                  <p>2023-24</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Website Traffic Case Study */}
      <motion.section
        className="border-b border-accent/20 bg-accent py-20 px-4 md:px-8"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            HOW WE INCREASED WEBSITE TRAFFIC BY 125%+ WITH A 4-6 WEEK LAUNCH
            STRATEGY
          </motion.h2>
          <div className="flex md:flex-row flex-col justify-between gap-12 mt-8">
            <div className="space-y-4">
              <motion.img
                src="/placeholder.svg?height=400&width=600"
                alt="Website traffic graph"
                className="w-full"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.p
                className="text-sm text-foreground/70"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                *Results vary from account to account and aren&apos;t
                guaranteed.
              </motion.p>
            </div>
            <div className="space-y-6">
              <motion.p
                className="text-foreground/80"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                We created a custom 4-6 week launch marketing plan that
                incorporated 3 kinds of traffic sources for offer combining
                social media, email, and website traffic.
              </motion.p>
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Industry</h3>
                  <p>Education</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Platforms</h3>
                  <p>Instagram + email</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Services</h3>
                  <p>Comprehensive launch strategy + full-service management</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Year</h3>
                  <p>2024</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interior Designer Case Study */}
      <motion.section
        className="border-b border-accent/20 bg-black/10 py-20 px-4 md:px-8"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            HOW WE HELPED AN INTERIOR DESIGNER WITH A $12,000+ COURSE LAUNCH IN
            4-WEEKS
          </motion.h2>
          <div className="flex md:flex-row-reverse flex-col justify-between gap-12 mt-8">
            <div className="space-y-4">
              <motion.img
                src="/placeholder.svg?height=400&width=600"
                alt="Course launch graph"
                className="w-full"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.p
                className="text-sm text-foreground/70"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                *Results vary from account to account and aren&apos;t
                guaranteed.
              </motion.p>
            </div>
            <div className="space-y-6">
              <motion.p
                className="text-foreground/80"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                We developed a course launch content strategy to launch a course
                to her existing 15,000 followers. We implemented Meta/Chat
                funnels to support a high rate of engagement and course
                interest, which generated $7,000+ of cascaded followers during
                the 4-week launch period.
              </motion.p>
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Industry</h3>
                  <p>Interior Design</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Platforms</h3>
                  <p>Instagram</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Services</h3>
                  <p>Full-service social media management</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Year</h3>
                  <p>Q2 2024</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Hospitality Brand Case Study */}
      <motion.section
        className="border-b border-accent/20 bg-background py-20 px-4 md:px-8"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            HOW WE INCREASED E.R. OF A BILLION-DOLLAR HOSPITALITY BRAND BY OVER
            400% VS. THEIR COMPETITOR
          </motion.h2>
          <div className="flex md:flex-row flex-col justify-between gap-12 mt-8">
            <div className="space-y-4">
              <motion.img
                src="/placeholder.svg?height=400&width=600"
                alt="Engagement rate comparison"
                className="w-full"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="space-y-6">
              <motion.p
                className="text-foreground/80"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                We A/B tested their content strategy by using content
                strategically produced on-site vs. repurposed content from their
                competitor. Our approach to UGC (User Generated Content) allowed
                us to spike our engagement.
              </motion.p>
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Industry</h3>
                  <p>Hospitality (B2B)</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Platforms</h3>
                  <p>LinkedIn</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Services</h3>
                  <p>Full-service social media management</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Year</h3>
                  <p>2024</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Brand Partnerships Case Study */}
      <motion.section
        className="border-b border-accent/20 bg-black/10 py-20 px-4 md:px-8"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-2"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            HOW WE CLOSED $19,500 IN BRAND PARTNERSHIPS IN Q4
          </motion.h2>
          <div className="flex md:flex-row-reverse flex-col justify-between gap-12 mt-8">
            <div className="space-y-4">
              <motion.img
                src="/placeholder.svg?height=400&width=400"
                alt="Pie chart of brand partnerships"
                className="w-full max-w-[400px]"
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="space-y-6">
              <motion.p
                className="text-foreground/80"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                We used our PLSPTM framework—PR figures, studio feature, social
                content, and pitch leverage, in order to get in front of brands
                effectively.
              </motion.p>
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Industry</h3>
                  <p>Marketing</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Platforms</h3>
                  <p>Multi-channel</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Services</h3>
                  <p>Full-service PR management</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-sm text-foreground/70 mb-1">Year</h3>
                  <p>Q4 2023</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="border-b border-accent/20 bg-accent py-32 px-4 md:px-8 text-center uppercase font-extrabold"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-4xl md:text-5xl mb-4"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Become Our
        </motion.h2>
        <motion.h2
          className="text-4xl md:text-5xl mb-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Next Case Study.
        </motion.h2>
        <motion.a
          href="/contact-us"
          className="text-lg border-2 border-white px-8 py-3 hover:bg-white hover:text-accent transition-all duration-300 ease-in-out font-semibold"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work with us
        </motion.a>
      </motion.section>
    </div>
  )
}
