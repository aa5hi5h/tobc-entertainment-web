"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

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
                src="/logo-wide.png"
                alt="TOBC Entertainment Logo"
                width={300}
                height={108}
              />
              <div className="flex flex-col mb-8">
                <a
                  className="inline-block text-sm  hover:text-accent transition-all duration-300 ease-in-out"
                  href="tel:+919999999999"
                >
                  Call us at: +91 99999 99999
                </a>
                <a
                  className="inline-block text-sm  duration-300 ease-in-out hover:text-accent transition-all "
                  href="mailto:contact@tobcentertainment.com"
                >
                  Email: contact@tobcentertainment.com
                </a>
              </div>
              <div>
                <a
                  className="inline-block hover:text-primary transition-all duration-300 ease-in-out mr-6"
                  href="#"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.6349 20.7272V12.766H16.3583L16.7669 9.66243H13.6349V7.68126C13.6349 6.78299 13.8882 6.17083 15.203 6.17083L16.8771 6.17015V3.39421C16.5876 3.35731 15.5938 3.27271 14.4371 3.27271C12.0217 3.27271 10.3681 4.71878 10.3681 7.37389V9.66243H7.63647V12.766H10.3681V20.7272H13.6349Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a
                  className="inline-block hover:text-primary transition-all duration-300 ease-in-out mr-6"
                  href="#"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.8181 6.14598C21.1356 6.44844 20.4032 6.65356 19.6336 6.74513C20.4194 6.27462 21.0208 5.52831 21.3059 4.64177C20.5689 5.0775 19.7553 5.39389 18.8885 5.56541C18.1943 4.82489 17.2069 4.36365 16.1118 4.36365C14.0108 4.36365 12.3072 6.06719 12.3072 8.16707C12.3072 8.46489 12.3408 8.75577 12.4057 9.03392C9.24434 8.87513 6.44104 7.3605 4.56483 5.05895C4.23686 5.61986 4.05028 6.27344 4.05028 6.9711C4.05028 8.29107 4.72243 9.45574 5.74225 10.1371C5.11877 10.1163 4.53237 9.94477 4.01901 9.65968V9.70719C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5466 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1623 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4279 9.10416 19.4279C16.1026 19.4279 19.928 13.6312 19.928 8.60398L19.9153 8.11147C20.6627 7.57834 21.3094 6.90853 21.8181 6.14598Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <a
                  className="inline-block hover:text-primary transition-all duration-300 ease-in-out"
                  href="#"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.2 3H4.8C3.81 3 3 3.81 3 4.8V19.2C3 20.19 3.81 21 4.8 21H19.2C20.19 21 21 20.19 21 19.2V4.8C21 3.81 20.19 3 19.2 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.67C6.15 8.67 5.43 7.95 5.43 7.05C5.43 6.15 6.15 5.43 7.05 5.43C7.95 5.43 8.67 6.15 8.67 7.05C8.67 7.95 7.95 8.67 7.05 8.67ZM18.3 18.3H15.6V13.53C15.6 12.81 14.97 12.18 14.25 12.18C13.53 12.18 12.9 12.81 12.9 13.53V18.3H10.2V10.2H12.9V11.28C13.35 10.56 14.34 10.02 15.15 10.02C16.86 10.02 18.3 11.46 18.3 13.17V18.3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
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
