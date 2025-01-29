"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaHeart, FaShareAlt } from "react-icons/fa"

import useMasonry from "@/components/utils/useMasonry"

const shuffle = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5)
}

const images = [
  "/tobc-galery-19.jpg",
  "/tobc-gallery.jpg",
  "/tobc-gallery-1.jpg",
  "/tobc-gallery-2.jpg",
  "/tobc-gallery-3.jpg",
  "/tobc-gallery-4.jpg",
  "/tobc-gallery-5.jpg",
  "/tobc-gallery-6.jpg",
  "/tobc-gallery-7.jpg",
  "/tobc-gallery-8.jpg",
  "/tobc-gallery-9.jpg",
  "/tobc-gallery-10.jpg",
  "/tobc-gallery-11.jpg",
  "/tobc-gallery-12.jpg",
  "/tobc-gallery-13.jpg",
  "/tobc-gallery-14.jpg",
  "/tobc-gallery-15.jpg",
  "/tobc-gallery-16.jpg",
  "/tobc-gallery-17.jpg",
  "/tobc-gallery-18.jpg",
  "/tobc-gallery-19.jpg",
  "/tobc-gallery-20.jpg",
  "/tobc-gallery-21.jpg",
  "/tobc-gallery-22.jpg",
  "/tobc-gallery-23.jpg",
  "/tobc-gallery-24.jpg",
  "/tobc-gallery-25.jpg",
  "/tobc-gallery-26.jpg",
  "/tobc-gallery-27.jpg",
  "/tobc-gallery-28.jpg",
  "/tobc-gallery-29.jpg",
  "/tobc-gallery-30.jpg",
  "/tobc-gallery-31.jpg",
  "/tobc-gallery-32.jpg",
  "/tobc-gallery-33.jpg",
  "/tobc-gallery-34.jpg",
  "/tobc-gallery-35.jpg",
  "/tobc-gallery-36.jpg",
  "/tobc-gallery-37.jpg",
  "/tobc-gallery-38.jpg",
  "/tobc-gallery-39.jpg",
  "/tobc-gallery-40.jpg",
  "/tobc-gallery-41.jpg",
  "/tobc-gallery-42.jpg",
  "/tobc-gallery-43.jpg",
]

export default function GalleryPage() {
  const masonryContainer = useMasonry()

  return (
    <div className="container mx-auto px-4 pt-16 pb-32 relative">
      <h1 className="md:text-5xl text-4xl text-center font-extrabold tracking-normal mb-8 uppercase">
        Gallery
      </h1>
      <div
        ref={masonryContainer}
        className="grid items-start gap-6 sm:grid-cols-3 md:gap-8"
      >
        {shuffle(images).map((image: string, index: number) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-all transform group-hover:scale-105 duration-300 flex flex-col justify-end">
              <div className="p-4 text-white text-center">
                <h2 className="text-lg font-semibold">
                  Image Title {index + 1}
                </h2>
              </div>
              <div className="flex items-center justify-center mb-4">
                <button className="bg-white p-2 rounded-full shadow-lg mx-2 hover:bg-gray-200">
                  <FaHeart className="text-red-500" />
                </button>
                <button className="bg-white p-2 rounded-full shadow-lg mx-2 hover:bg-gray-200">
                  <FaShareAlt className="text-blue-500" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="fixed bottom-4 right-4 flex space-x-4">
        <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
          <FaHeart />
        </button>
        <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300">
          <FaShareAlt />
        </button>
      </div>
    </div>
  )
}
