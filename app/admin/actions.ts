"use server";

import { auth } from "@/auth";
import { db } from "@/src/prisma/db";
import { revalidatePath } from "next/cache";

export async function toggleLive() {
  const session = await auth();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const settings = await db.orm.public.SiteSettings
    .where({ id: 1 })
    .first();

  if (!settings) {
    throw new Error("Site settings not found");
    
  }
  await db.orm.public.SiteSettings
  .where({ id: 1 })
  .update({
    isLive: !settings.isLive,
  });
  revalidatePath("/admin/dashboard");
  revalidatePath("/");
}
export async function updateLiveUrl(formData: FormData) {
  const session = await auth();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const liveUrl = formData.get("liveUrl");

  if (typeof liveUrl !== "string") {
    throw new Error("Invalid live URL");
  }
  const trimmedUrl = liveUrl.trim();

if (
  trimmedUrl !== "" &&
  !trimmedUrl.startsWith("https://www.youtube.com/") &&
  !trimmedUrl.startsWith("https://youtu.be/")
) {
  throw new Error("The URL must be a YouTube link");
}
await db.orm.public.SiteSettings
  .where({ id: 1 })
  .update({
    liveUrl: trimmedUrl === "" ? null : trimmedUrl,
  });

revalidatePath("/admin/dashboard");
revalidatePath("/");
}