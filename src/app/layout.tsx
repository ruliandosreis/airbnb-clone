import "./globals.css";
import { Nunito } from "next/font/google";
import Header from "@/components/Header/Header";
import ToasterProvider from "@/providers/ToasterProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb Clone",
  description:
    "Encontre o lugar perfeito a um preço incrível em 191 países. O mundo é a sua casa com o Airbnb Clone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <Header />
        {children}
      </body>
    </html>
  );
}
