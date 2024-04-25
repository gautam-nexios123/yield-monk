import Header from "@/components/Header/index.js";
import "./globals.css";
import NextProvider from "./NextProvider";

export const metadata = {
  title: "Yield Monk",
  description: "Yield Monk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.svg" sizes="32*32" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
      </head>
      <body>
        <NextProvider>
          <Header />
          {children}
        </NextProvider>
      </body>
    </html>
  );
}
