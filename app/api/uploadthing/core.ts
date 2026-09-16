import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@/auth";

const f = createUploadthing();

export const ourFileRouter = {
  eventImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  }

  
)
    .middleware(async () => {
      const session = await auth();

      if (!session) {
        throw new UploadThingError("Unauthorized");
      }

      return { userId: "admin" };
    })
    .onUploadComplete(async ({ file }) => {
  return {
    imageUrl: file.ufsUrl,
    imageKey: file.key,
  };
}),
messageCover: f({
  image: {
    maxFileSize: "4MB",
    maxFileCount: 1,
  },
})
  .middleware(async () => {
    const session = await auth();

    if (!session) {
      throw new UploadThingError("Unauthorized");
    }

    return { userId: "admin" };
  })
  .onUploadComplete(async ({ file }) => {
    return {
      imageUrl: file.ufsUrl,
      imageKey: file.key,
    };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;