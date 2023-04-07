import "./globals.css";
import Navbar from "../components/navbar";
import clsx from "clsx";
import Providers from "@/components/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx("text-black bg-white")}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <title>nickprice.io</title>
      </head>

      <body>
        <Providers>
          <Navbar />
          <main className="px-12">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
