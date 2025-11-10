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
      <body className="bg-black text-gray-200">
        <Header />
        <main className="p-8 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
