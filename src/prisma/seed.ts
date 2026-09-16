import { db } from "./db";

async function main() {
  await db.connect();

  const settings = await db.orm.public.SiteSettings.create({
    isLive: false,
    liveUrl: null,
  });

  console.log("Site settings created:", settings);

  await db.close();
}

main();