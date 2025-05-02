import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBootstrap from "@/components/AddBootstrap/AddBootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Reservations",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: "travel, reservations, booking, hotels, flights",
  authors: [
    {
      name: "Travel Reservations",
      url: "https://travelreservations.com",
    },
  ],
  creator: "Travel Reservations",
  description: "Travel Reservations - Your one-stop solution for all travel needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AddBootstrap />
        {children}
        </body>
    </html>
  );
}
