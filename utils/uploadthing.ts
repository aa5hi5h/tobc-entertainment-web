import { generateUploadDropzone, generateUploadButton, generateUploader } from "@uploadthing/react"
import { generateReactHelpers } from "@uploadthing/react"

import type { OurFileRouter } from "@/app/api/uploadthing/core"

export const UploadDropzone =
    generateUploadDropzone<OurFileRouter>()

export const UploadButton = generateUploadButton<OurFileRouter>()

export const Uploader = generateUploader<OurFileRouter>()

export const { useUploadThing, uploadFiles } =
    generateReactHelpers<OurFileRouter>() 