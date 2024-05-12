import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";
import TopNav from "./_components/topnav";

export const metadata = {
  title: "T3 Gallery",
  description: "Gallery of super cool pictures of all kinds",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="g-4 flex-col">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
