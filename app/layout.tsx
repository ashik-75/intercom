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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
