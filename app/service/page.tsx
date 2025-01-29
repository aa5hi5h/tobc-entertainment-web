"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

type Service = {
  title: string;
  points: string[];
  imagePath: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "Advertisement & Product Shoot",
    points: [
      "Commercial ATL",
      "Digital Ads",
      "Product Photography",
      "Lifestyle Photography",
      "Fashion Photography",
      "ATL & BTL"
    ],
    imagePath: "/tobc-Advertisement & Product Shoot.png",
    icon: "📸"
  },
  {
    title: "Video Production",
    points: [
      "Concept Development",
      "Storyboarding",
      "Screenwriting",
      "Filming",
      "Color Grading",
      "Casting"
    ],
    imagePath: "/tobc-Video Production.png",
    icon: "🎥"
  },
  {
    title: "Films & Music Videos",
    points: [
      "Films",
      "Documentation",
      "Promotional Videos",
      "Short Films",
      "Music Video",
      "Events"
    ],
    imagePath: "/tobc-Films & Music Videos.png",
    icon: "🎬"
  },
  {
    title: "Content Creation",
    points: [
      "Social Media Content",
      "Blog Posts",
      "Articles",
      "Reels",
      "Podcast"
    ],
    imagePath: "/tobc-content-creation.png",
    icon: "📱"
  },
  {
    title: "Graphic Design",
    points: [
      "Logo Design",
      "Branding",
      "Print Design/Brochures",
      "Digital Design/Social Media Graphics",
      "Flyers, Posters",
      "Web Banners"
    ],
    imagePath: "/tobc-Graphic Design.png",
    icon: "🎨"
  },
  {
    title: "Digital Marketing",
    points: [
      "Social Media Management",
      "YouTube Managing",
      "Paid Marketing",
      "PPC/Social Ads",
      "Email Marketing"
    ],
    imagePath: "/tobc-Digital Marketing.png",
    icon: "📊"
  },
  {
    title: "Post Production Services",
    points: [
      "Video Editing",
      "Sound Design",
      "Color Grading",
      "Visual Effects (VFX)",
      "Titles and Graphics"
    ],
    imagePath: "/tobc-Post Production Services.png",
    icon: "✂️"
  },
  {
    title: "Influencer & Brand Collaboration",
    points: [
      "Influencer Marketing Campaigns",
      "Brand Ambassador Program",
      "Sponsored Content",
      "Collaborative Projects"
    ],
    imagePath: "/tobc-Influencer & Brand Collaboration.png",
    icon: "🤝"
  }
];

const ServicePage = () => {
  return (
    <div className="container mx-auto lg:px-8 px-4 pb-32 pt-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="md:text-5xl text-4xl font-extrabold tracking-normal mb-8"
      >
        Our Services
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="h-full flex flex-col border-foreground/10 ">
              <CardHeader>
              <Image
                  src={service.imagePath}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="mb-4 rounded-lg w-28 h-28 object-contain"
                  />
                <CardTitle className="text-xl tracking-normal font-bold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="text-sm">
                      • {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;