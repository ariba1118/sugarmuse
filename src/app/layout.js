import "./globals.css";
import Head from "next/head";
import SessionClientProvider from "./SessionClientProvider";

export const metadata = {
  title: "SugarMuse Dessert Shop",
  description: "Freshly Baked | Sweetly Delivered",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="../../public/icon/favicon.png"
        />
      </Head>
      <body className="bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 min-h-screen flex flex-col">
        <SessionClientProvider>{children}</SessionClientProvider>
      </body>
    </html>
  );
}
