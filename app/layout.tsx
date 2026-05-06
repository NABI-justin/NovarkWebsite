import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "NOVARK — Intelligence, Innovation, Impact",
  description: "NOVARK conçoit des solutions IA, robotique et systèmes embarqués adaptées aux réalités africaines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
