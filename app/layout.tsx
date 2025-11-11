import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "devSin8 Portfolio",
  description: "Built with Next.js and TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-mono leading-relaxed min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 py-12 px-6 max-w-4xl mx-auto w-full">{children}</main>
      <body className="bg-black text-gray-200">
        <Header />
        <main className="p-8 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
