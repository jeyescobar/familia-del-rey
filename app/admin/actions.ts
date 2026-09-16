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