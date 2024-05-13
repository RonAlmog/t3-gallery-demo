import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // avoid caching the page

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4">
          {images.map((image) => (
            <div key={image.id} className="w-48 flex-col p-4">
              <img src={image.url} alt="image" />
              <div>{image.name}</div>
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  );
}
