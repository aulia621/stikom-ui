import type { Metadata } from "next";
import Providers from "../lib/providers";

export const metadata: Metadata = {
  title: "STIKOM UI",
  description: "Mini design system STIKOM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}