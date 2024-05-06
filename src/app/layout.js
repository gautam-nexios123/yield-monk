import Header from "@/components/Header/index.js";
import "./globals.css";
import NextProvider from "./NextProvider";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Providers from "./Providers";

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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap" />
      </head>
      <body className="bg-white dark:bg-[#1E1E1E]">
        <Providers>
          <NextProvider>
            <Header />
            {children}
          </NextProvider>
        </Providers>
      </body>
    </html>
  );
}
