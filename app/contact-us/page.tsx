"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  LoaderIcon,
  Twitter,
  Youtube,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { FaVimeoV } from "react-icons/fa"
import { PiArrowRightBold } from "react-icons/pi"
import { RiErrorWarningLine } from "react-icons/ri"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from "lucide-react"
import { Mail } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/send-email/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }

      const result = await response.json()
      if (result.status === 200) {
        toast.success("Email sent successfully!", {
          description: "We'll get back to you as soon as possible.",
          icon: <CheckCircle className="size-6" />,
        })
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Failed to send email", {
        description: "Please try again after a few minutes.",
        icon: <RiErrorWarningLine className="size-6" />,
      })
    } finally {
      setIsSubmitting(false)
      form.reset()
    }
  }

  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <div className="relative sm:h-96 h-72 flex items-center justify-center overflow-hidden">
          <Image
            src="/contact.jpg"
            alt="Contact Us"
            width={1920}
            height={1080}
            className="object-cover size-full absolute inset-0 -z-[1] object-center brightness-75"
          />
          <h1 className="text-foreground lg:text-5xl md:text-4xl text-3xl font-bold uppercase">
            Contact US
          </h1>
        </div>

        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get in touch!</h2>
          
          {/* New Contact Information Section */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+918077552630" className="hover:text-accent">
                  Call us at: +91 80775 52630
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@tobcentertainment.com" className="hover:text-accent">
                  Email: info@tobcentertainment.com
                </a>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-2xl mx-auto space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="Your name"
                    {...field}
                    required
                  />
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <Input
                    type="email"
                    placeholder="Your email address"
                    {...field}
                    required
                  />
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="Subject"
                    {...field}
                    required
                  />
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <Textarea
                    placeholder="Your message"
                    {...field}
                    required
                    className="h-32"
                  />
                )}
              />
              <div className="flex items-center justify-between">
                <div
                  className="g-recaptcha"
                  data-sitekey="your_recaptcha_site_key"
                ></div>
                <Button
                  type="submit"
                  size="sm"
                  disabled={isSubmitting}
                  className="border-accent/20 text-sm w-full hover:bg-accent/10 h-11"
                  variant="outline"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </Form>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Connect with social media
            </h3>
            <div className="flex justify-center space-x-4">
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

          <div className="mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0126353064897!2d72.81742931490721!3d19.10679478706484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b888ae67fd%3A0xe274bcb68d6c2a2a!2sClean%20Slate%20Filmz!5e0!3m2!1sen!2sin!4v1623317981111!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  )
}
