import Header from "@/components/Header/page";
import "./globals.css";

export const metadata = {
  title: "Futuristic",
  description: "An Amazing Tailwind Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        <Header />
        <main className="max-w-7xl mx-auto px-5">{children}</main>
      </body>
    </html>
  );
}
