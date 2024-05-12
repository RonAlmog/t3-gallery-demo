import Link from "next/link";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/b5b458ab-f77a-488d-8812-993336edac52-z68uc2.jpg",
    "https://utfs.io/f/eedb9edb-0498-42a8-9f98-948b6eade50d-1y3tjj.jpg",
    "https://utfs.io/f/450a065e-766a-4822-ad88-4ac3a22cebc1-pxko0h.jpg",
    "https://utfs.io/f/c91dd2b4-cf43-40cd-b430-b8d624362ebc-oek97a.jpg",
    "https://utfs.io/f/96066d93-cc3f-460a-808b-4cc7336f2db7-pdtd1z.jpg",
  ];
  const mockImages = mockUrls.map((url, index) => ({
    id: index,
    url,
  }));
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      hello gallery
    </main>
  );
}
