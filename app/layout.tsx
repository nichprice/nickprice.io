import "./globals.css";
import Navbar from "./components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>nickprice.io</title>
      </head>

      <body>
        <Navbar />
        <main className="bg-white px-12">{children}</main>
      </body>
    </html>
  );
}
