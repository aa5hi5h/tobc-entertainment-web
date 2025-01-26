import { createUploadthing, type FileRouter } from "uploadthing/next"

const f = createUploadthing()

export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 4 } })
        .middleware(async () => {
            // Optionally add authentication here
            return {}
        })
        .onUploadComplete(async ({ metadata, file }) => {
            return { uploadedBy: '', url: file.url }
        }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter 