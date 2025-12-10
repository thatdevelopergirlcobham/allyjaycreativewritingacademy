import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";

// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Include necessary weights
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ally Jay Creative Writing Academy",
  description: "Unleashing creativity in children ages 7-15 through writing, storytelling, and performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
