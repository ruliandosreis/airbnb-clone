import "./globals.css";
import { Nunito } from "next/font/google";
import Header from "@/components/Header/Header";
import ToasterProvider from "@/providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb Clone",
  description:
    "Encontre o lugar perfeito a um preço incrível em 191 países. O mundo é a sua casa com o Airbnb Clone.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={nunito.className}>
        <ToasterProvider />
        <Header currentUser={currentUser} />
        <div className="pb-20 pt-32">{children}</div>
      </body>
    </html>
  );
}
