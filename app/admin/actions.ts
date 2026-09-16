"use server";

import { auth } from "@/auth";
import { db } from "@/src/prisma/db";
import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";
const utapi = new UTApi();
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

export async function createEvent(formData: FormData) {
  const session = await auth();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const name = formData.get("name");
  const date = formData.get("date");
  const time = formData.get("time");
  const location = formData.get("location");
  const imageUrl = formData.get("imageUrl");
  const imageKey = formData.get("imageKey");

  if (
    typeof imageUrl !== "string" ||
    typeof imageKey !== "string" ||
    typeof name !== "string" ||
    typeof date !== "string" ||
    typeof time !== "string" ||
    typeof location !== "string"
  ) {
    throw new Error("Invalid event data");
  }

  if (imageUrl.trim() === "" || imageKey.trim() === "") {
  throw new Error("Event image is required");
}

  await db.orm.public.Event.create({
    name: name.trim(),
    date,
    time,
    location: location.trim(),
    imageUrl,
    imageKey,
  });

  revalidatePath("/admin/dashboard");
  revalidatePath("/");
}
export async function deleteEvent(formData: FormData) {
  const session = await auth();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const eventId = formData.get("eventId");

  if (typeof eventId !== "string") {
    throw new Error("Invalid event ID");
  }

  const event = await db.orm.public.Event
  .where({ id: Number(eventId) })
  .first();
  if (event?.imageKey) {
  await utapi.deleteFiles(event.imageKey);
}

  await db.orm.public.Event
    .where({ id: Number(eventId) })
    .delete();

  revalidatePath("/admin/dashboard");
  revalidatePath("/");
}

export async function updateLastMessage(formData: FormData) {
  const session = await auth();

if (!session) {
  throw new Error("Unauthorized");
}
  const series = formData.get("series");
  const title = formData.get("title");
  const preacher = formData.get("preacher");
  const date = formData.get("date");
  const youtubeUrl = formData.get("youtubeUrl");
  const imageUrl = formData.get("imageUrl");
  const imageKey = formData.get("imageKey");

  if (
    typeof series !== "string" ||
    typeof title !== "string" ||
    typeof preacher !== "string" ||
    typeof date !== "string" ||
    typeof youtubeUrl !== "string" ||
    typeof imageUrl !== "string" ||
    typeof imageKey !== "string"
  ) {
    throw new Error("Invalid last message data");
  }

  if (imageUrl.trim() === "" || imageKey.trim() === "") {
    throw new Error("Message cover is required");
  }
  revalidatePath("/admin/dashboard");
  revalidatePath("/");

  const allowedYouTubeHosts = [
  "youtube.com",
  "www.youtube.com",
  "youtu.be",
];

let parsedYouTubeUrl: URL;

try {
  parsedYouTubeUrl = new URL(youtubeUrl);
} catch {
  throw new Error("Invalid YouTube URL");
}

if (!allowedYouTubeHosts.includes(parsedYouTubeUrl.hostname)) {
  throw new Error("Only YouTube links are allowed");
}

  const existingMessage = await db.orm.public.LastMessage
    .all();

  if (existingMessage.length > 0) {
    

    await db.orm.public.LastMessage
      .where({ id: existingMessage[0].id })
      .update({
        series: series.trim(),
        title: title.trim(),
        preacher: preacher.trim(),
        date,
        youtubeUrl: youtubeUrl.trim(),
        imageUrl,
        imageKey,
      });
  } else {
    await db.orm.public.LastMessage.create({
      series: series.trim(),
      title: title.trim(),
      preacher: preacher.trim(),
      date,
      youtubeUrl: youtubeUrl.trim(),
      imageUrl,
      imageKey,
    });
  }
}