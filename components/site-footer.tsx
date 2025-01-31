"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Facebook, Instagram } from "lucide-react"
import { Twitter } from "lucide-react"
import { Youtube } from "lucide-react"

interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {}

export default function SiteFooter({ className, ...props }: SiteFooterProps) {
  return (
    <footer
      className={cn("bg-background py-8 lg:py-16 border border-accent/20", className)}
      {...props}
    >
      <div className="container mx-auto lg:px-8 px-6 mb-8 md:mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
              <Image
                className="h-14 w-auto mb-8 "
                src="/logo-wide.jpg"
                alt="TOBC Entertainment Logo"
                width={300}
                height={108}
              />
              <div className="flex flex-col mb-8">
                <a
                  className="inline-block text-sm  hover:text-accent transition-all duration-300 ease-in-out"
                  href="tel:+919999999999"
                >
                  Call us at: +91 80775 52630
                </a>
                <a
                  className="inline-block text-sm  duration-300 ease-in-out hover:text-accent transition-all "
                  href="mailto:info@tobcentertainment.com"
                >
                  Email: info@tobcentertainment.com
                </a>
              </div>
              <div>
              <div className="flex space-x-4">
              <Link href="https://www.facebook.com/TOBCEntertainment" className="text-foreground hover:text-opacity-80">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/tobcentertainment" className="text-foreground hover:text-opacity-80">
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/CreativesOfTOBC" className="text-foreground hover:text-opacity-80">
                <Twitter />
              </Link>
              <Link href="https://www.youtube.com/@tobcmusic" className="text-foreground hover:text-opacity-80">
                <Youtube />
              </Link>
            </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 px-4">
              <div className="flex flex-wrap justify-start sm:gap-16 gap-8">
                <div>
                  <h3 className="text-base font-extrabold mb-3">
                    Primary Links
                  </h3>
                  {siteConfig.mainNavGroups.primaryLinks.map(
                    (navItem, index) => (
                      <div key={index} className="w-full">
                        <ul>
                          <li className="mb-2">
                            <Link
                              className="text-sm hover:text-accent transition-all duration-300 ease-in-out"
                              href={navItem.href}
                            >
                              {navItem.title}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )
                  )}
                </div>
                <div>
                  <h3 className="text-base mb-3 font-extrabold">
                    Secondary Links
                  </h3>
                  {siteConfig.mainNavGroups.footerLinks.map(
                    (navItem, index) => (
                      <div key={index} className="w-full">
                        <ul>
                          <li className="mb-2">
                            <Link
                              className="text-sm hover:text-accent transition-all duration-300 ease-in-out"
                              href={navItem.href}
                            >
                              {navItem.title}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 border-t-2 border-accent/20">
        <div className="container lg:px-8 px-6 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="sm:flex items-center justify-between -mb-5">
              <div className="mb-5">
                <p className="text-sm">
                  © Copyright {new Date().getFullYear()}. All rights reserved by
                  TOBC Entertainment.
                </p>
              </div>
              <div className="mb-5">
                <a className="inline-block mr-5" href="#">
                  <img src="shopal-assets/logos/visa-logo.svg" alt="" />
                </a>
                <a className="inline-block mr-5" href="#">
                  <img src="shopal-assets/logos/mastercard-logo.svg" alt="" />
                </a>
                <a className="inline-block" href="#">
                  <img src="shopal-assets/logos/paypal-logo.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
