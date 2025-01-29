"use client"

import { useState } from "react"
import Image from "next/image"
import { UploadButton } from "@/utils/uploadthing"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, LoaderIcon, Plus, X } from "lucide-react"
import { useForm } from "react-hook-form"
import { PiArrowRightBold } from "react-icons/pi"
import { RiErrorWarningLine } from "react-icons/ri"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Please enter a valid age.",
  }),
  height: z.string().min(1, { message: "Please enter your height." }),
  nativePlace: z
    .string()
    .min(2, { message: "Please enter your native place." }),
  currentLocation: z
    .string()
    .min(2, { message: "Please enter your current location." }),
  introductionLinks: z.array(z.string().url()).max(4).min(1, {
    message: "Please enter at least 1 introduction link.",
  }),
  photos: z
    .array(
      z.object({
        url: z.string().url(),
        name: z.string(),
      })
    )
    .max(4),
  auditionLinks: z.array(z.string().url()).max(2).min(1, {
    message: "Please enter at least 1 audition link.",
  }),
  workLinks: z.array(z.string().url()).max(3).min(1, {
    message: "Please enter at least 1 work link.",
  }),
  instagramLink: z.string().url().optional(),
  extraActivities: z.array(
    z.enum(["Dance", "Singing", "Badminton", "Gymnastics", "Modeling","Theatre - NSD & FTII","Athletics","Anchoring","Dubbing","Mimicry","Martial Arts","Driving 4 wheeler","Skateboarding","Yoga"])
  ),
})

type FormValues = z.infer<typeof formSchema>

export default function CastingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [introductionLinks, setIntroductionLinks] = useState([""])
  const [photos, setPhotos] = useState<{ url: string; name: string }[]>([])
  const [auditionLinks, setAuditionLinks] = useState([""])
  const [workLinks, setWorkLinks] = useState([""])
  console.log(photos)
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      height: "",
      nativePlace: "",
      currentLocation: "",
      introductionLinks: [""],
      photos: [],
      auditionLinks: [""],
      workLinks: [""],
      instagramLink: "",
      extraActivities: [],
    },
  })

  const addField = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    maxLength: number
  ) => {
    setter((prev) => (prev.length < maxLength ? [...prev, ""] : prev))
  }

  const removeField = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    index: number
  ) => {
    setter((prev) => prev.filter((_, i) => i !== index))
  }

  const updateField = (
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    index: number,
    value: string
  ) => {
    setter((prev) => prev.map((item, i) => (i === index ? value : item)))
  }

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    try {
      // Merge the dynamic fields with the form data
      const submissionData = {
        ...data,
        introductionLinks,
        photos,
        auditionLinks,
        workLinks,
        instagramLink: data.instagramLink,
        extraActivities: data.extraActivities,
        name: data.name,
        age: data.age,
        height: data.height,
        nativePlace: data.nativePlace,
        currentLocation: data.currentLocation,
      }

      const response = await fetch("/api/send-email/casting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      })

      if (!response.ok) {
        throw new Error("Failed to send application")
      }

      const result = await response.json()
      if (result.status === 200) {
        toast.success("Application submitted successfully!", {
          description:
            "We'll review your application and get back to you soon.",
          icon: <CheckCircle className="size-6" />,
        })
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Failed to submit application", {
        description: "Please try again after a few minutes.",
        icon: <RiErrorWarningLine className="size-6" />,
      })
    } finally {
      setIsSubmitting(false)
      form.reset()
      setIntroductionLinks([""])
      setPhotos([])
      setAuditionLinks([""])
      setWorkLinks([""])
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto border-foreground/10">
        <CardHeader>
          <CardTitle className="text-4xl font-extrabold tracking-normal">
            Casting Application
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="px-1 flex-col flex gap-3">
                {/* Basic fields */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Your age"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="height"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Height</FormLabel>
                      <FormControl>
                        <Input placeholder="Your height" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="nativePlace"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Native Place</FormLabel>
                      <FormControl>
                        <Input placeholder="Your native place" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="currentLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Your current location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Dynamic fields */}
                <FormItem>
                  <FormLabel>Introduction Links</FormLabel>
                  {introductionLinks.map((link, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        placeholder="Introduction link URL"
                        value={link}
                        onChange={(e) =>
                          updateField(
                            setIntroductionLinks,
                            index,
                            e.target.value
                          )
                        }
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeField(setIntroductionLinks, index)}
                      >
                        <X className="size-4" />
                      </Button>
                    </div>
                  ))}
                  {introductionLinks.length < 4 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => addField(setIntroductionLinks, 4)}
                    >
                      <Plus className="size-4 mr-2" /> Add Link
                    </Button>
                  )}
                </FormItem>

                <FormItem>
                  <FormLabel>Photos</FormLabel>
                  <div className="space-y-4">
                    <UploadButton
                      endpoint="imageUploader"
                      onClientUploadComplete={(res: any) => {
                        if (res) {
                          const newPhotos = res.map((file: any) => ({
                            url: file.url,
                            name: file.name,
                          }))
                          setPhotos((prev) =>
                            [...prev, ...newPhotos].slice(0, 4)
                          )
                        }
                      }}
                      onUploadError={(error: Error) => {
                        toast.error("Failed to upload photo", {
                          description: error.message,
                          icon: <RiErrorWarningLine className="size-6" />,
                        })
                      }}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      {photos.map((photo, index) => (
                        <div key={index} className="relative group">
                          <div className="relative aspect-square">
                            <Image
                              src={photo.url}
                              alt={photo.name}
                              fill
                              className="object-cover rounded-lg"
                            />
                          </div>
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() =>
                              setPhotos((prev) =>
                                prev.filter((_, i) => i !== index)
                              )
                            }
                          >
                            <X className="size-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                  {form.formState.errors.photos && (
                    <FormMessage>
                      {form.formState.errors.photos.message}
                    </FormMessage>
                  )}
                </FormItem>

                <FormItem>
                  <FormLabel>Audition Links</FormLabel>
                  {auditionLinks.map((link, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        placeholder="Audition link URL"
                        value={link}
                        onChange={(e) =>
                          updateField(setAuditionLinks, index, e.target.value)
                        }
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeField(setAuditionLinks, index)}
                      >
                        <X className="size-4" />
                      </Button>
                    </div>
                  ))}
                  {auditionLinks.length < 2 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => addField(setAuditionLinks, 2)}
                    >
                      <Plus className="size-4 mr-2" /> Add Link
                    </Button>
                  )}
                </FormItem>

                <FormItem>
                  <FormLabel>Work Links</FormLabel>
                  {workLinks.map((link, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        placeholder="Work link URL"
                        value={link}
                        onChange={(e) =>
                          updateField(setWorkLinks, index, e.target.value)
                        }
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeField(setWorkLinks, index)}
                      >
                        <X className="size-4" />
                      </Button>
                    </div>
                  ))}
                  {workLinks.length < 3 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => addField(setWorkLinks, 3)}
                    >
                      <Plus className="size-4 mr-2" /> Add Link
                    </Button>
                  )}
                </FormItem>

                <FormField
                  control={form.control}
                  name="instagramLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Instagram Link</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Instagram profile URL"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="extraActivities"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Extra Activities</FormLabel>
                      <div className="flex flex-wrap gap-4">
                        {[
                          "Dance",
                          "Singing",
                          "Badminton",
                          "Gymnastics",
                          "Modeling",
                          "Theatre - NSD & FTII",
                          "Athletics",
                          "Anchoring",
                          "Dubbing",
                          "Mimicry",
                          "Martial Arts",
                          "Driving 4 wheeler",
                          "Skateboarding",
                          "Yoga",

                        ].map((activity) => (
                          <FormItem
                            key={activity}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(
                                  activity as
                                    | "Dance"
                                    | "Singing"
                                    | "Badminton"
                                    | "Gymnastics"
                                    | "Modeling"
                                    |"Theatre - NSD & FTII"
                                    |"Athletics"
                                    |"Anchoring"
                                    |"Dubbing"
                                    |"Mimicry"
                                    |"Martial Arts"
                                    |"Driving 4 wheeler"
                                    |"Skateboarding"
                                    |"Yoga"
                                )}
                                onCheckedChange={(checked: any) => {
                                  const updatedValue = checked
                                    ? [...(field.value || []), activity]
                                    : (field.value || []).filter(
                                        (value) => value !== activity
                                      )
                                  field.onChange(updatedValue)
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {activity}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                onClick={() => {
                  onSubmit(form.getValues())
                }}
                disabled={
                  isSubmitting ||
                  auditionLinks.some((link) => link === "") ||
                  photos.length < 1 ||
                  workLinks.some((link) => link === "") ||
                  introductionLinks.some((link) => link === "")
                }
                className="w-full text-lg font-bold tracking-normal inline-flex items-center group"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}{" "}
                {isSubmitting ? (
                  <LoaderIcon className="size-5 ml-2 animate-spin" />
                ) : (
                  <PiArrowRightBold className="ml-2 mb-0.5 size-5 group-hover:-rotate-45 transition-all duration-300 ease-in-out" />
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
