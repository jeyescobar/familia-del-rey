import { NextResponse } from "next/server";
import { db } from "@/src/prisma/db";

export async function GET() {
  const events = await db.orm.public.Event.all();

  return NextResponse.json(events);
}