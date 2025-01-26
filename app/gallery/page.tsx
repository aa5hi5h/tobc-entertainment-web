"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaHeart, FaShareAlt } from "react-icons/fa"

import useMasonry from "@/components/utils/useMasonry"

const shuffle = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5)
}

const images = [
  "https://picsum.photos/id/424/2048/1536",
  "https://picsum.photos/id/425/959/635",
  "https://picsum.photos/id/426/4272/2848",
  "https://picsum.photos/id/427/4272/2848",
  "https://picsum.photos/id/428/2529/1581",
  "https://picsum.photos/id/429/4128/2322",
  "https://picsum.photos/id/430/5000/3333",
  "https://picsum.photos/id/431/5000/3334",
  "https://picsum.photos/id/432/5000/3333",
  "https://picsum.photos/id/433/4752/3168",
  "https://picsum.photos/id/434/4928/3264",
  "https://picsum.photos/id/435/1200/800",
  "https://picsum.photos/id/436/2580/1716",
  "https://picsum.photos/id/437/4128/2716",
  "https://picsum.photos/id/439/5000/3334",
  "https://picsum.photos/id/440/3888/2592",
  "https://picsum.photos/id/441/4219/2802",
  "https://picsum.photos/id/442/1909/1262",
  "https://picsum.photos/id/443/3008/2000",
  "https://picsum.photos/id/444/4288/2848",
  "https://picsum.photos/id/445/4256/2819",
  "https://picsum.photos/id/446/3072/1728",
  "https://picsum.photos/id/447/1280/853",
  "https://picsum.photos/id/448/5000/3333",
  "https://picsum.photos/id/449/4928/3264",
  "https://picsum.photos/id/450/4288/2848",
  "https://picsum.photos/id/451/1545/1024",
  "https://picsum.photos/id/452/4096/2722",
  "https://picsum.photos/id/453/2048/1365",
  "https://picsum.photos/id/454/4403/2476",
  "https://picsum.photos/id/455/2376/1782",
  "https://picsum.photos/id/456/3823/2549",
  "https://picsum.photos/id/457/4896/2760",
  "https://picsum.photos/id/458/5000/3333",
  "https://picsum.photos/id/459/2310/1534",
  "https://picsum.photos/id/460/4476/2984",
  "https://picsum.photos/id/461/4256/2832",
  "https://picsum.photos/id/464/3198/2230",
  "https://picsum.photos/id/465/4928/3264",
  "https://picsum.photos/id/466/3264/2176",
  "https://picsum.photos/id/467/5000/3333",
  "https://picsum.photos/id/468/5000/3337",
  "https://picsum.photos/id/469/3008/2000",
  "https://picsum.photos/id/471/3264/1824",
  "https://picsum.photos/id/472/5000/3333",
  "https://picsum.photos/id/473/5000/3333",
  "https://picsum.photos/id/474/4288/2848",
  "https://picsum.photos/id/475/4288/2848",
  "https://picsum.photos/id/476/5000/3333",
  "https://picsum.photos/id/477/4919/3258",
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
