import { NextResponse } from "next/server";
import { db } from "@/src/prisma/db";
export async function GET() {

  const settings = await db.orm.public.SiteSettings
    .where({ id: 1 })
    .first();


  return NextResponse.json({
  isLive: settings?.isLive ?? false,
  liveUrl: settings?.liveUrl ?? null,
});
}