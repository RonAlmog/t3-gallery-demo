import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"; // avoid caching the page

export default async function HomePage() {
  const images = await getMyImages();

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4">
          {images.map((image) => (
            <div key={image.id} className="h-48 w-48 flex-col p-4">
              <Image
                src={image.url}
                alt={image.name}
                style={{ objectFit: "contain" }}
                height={192}
                width={192}
              />

              <div>{image.name}</div>
            </div>
          ))}
        </div>
      </SignedIn>
    </main>
  );
}
