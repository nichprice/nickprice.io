import "./globals.css";
import Navbar from "./components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <head>
        <title>Nicholas Price's Portfolio</title>
      </head>

      <main className="bg-white px-12">
        <section className="min-h-screen">
          <Navbar />
          <div>{children}</div>
        </section>
      </main>
    </div>
  );
}
