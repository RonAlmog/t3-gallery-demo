import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/bf45503f-bffe-4b1e-8977-8aad06ffdaea-i06e62.jpg",
    "https://utfs.io/f/eb1ed97a-8851-4816-a2a9-5b3c6eb66cdd-7p2eno.jpg",
    "https://utfs.io/f/450a065e-766a-4822-ad88-4ac3a22cebc1-pxko0h.jpg",
    "https://utfs.io/f/c91dd2b4-cf43-40cd-b430-b8d624362ebc-oek97a.jpg",
    "https://utfs.io/f/96066d93-cc3f-460a-808b-4cc7336f2db7-pdtd1z.jpg",
  ];
  const mockImages = mockUrls.map((url, index) => ({
    id: index,
    url,
  }));

  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      hello gallery
    </main>
  );
}
