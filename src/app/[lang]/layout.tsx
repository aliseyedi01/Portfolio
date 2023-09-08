// style
import "./globals.css";
import { Ubuntu, Kanit, Alkatra, Vazirmatn, Lalezar } from "next/font/google";
// next
import type { Metadata } from "next";
// component
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { NavbarDesktop, ScrollTop } from "@/components";
import ProgressProvider from "@/components/utility/ProgressProvider";
import { Locale } from "@/lib/i18n.config";
import Navbar1 from "@/components/navbar/Navbar1";
// Fonts
import localFont from "next/font/local";

const iranSans = localFont({
  src: [
    {
      path: "../../assets/fonts/iransans-regular.woff2",
      weight: "400",
    },
    {
      path: "../../assets/fonts/iransans-bold.woff2",
      weight: "900",
    },
  ],
  variable: "--font-iranSans",
});
const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});
const kanit = Kanit({
  subsets: ["latin"],
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const alkatra = Alkatra({
  subsets: ["latin"],
  variable: "--font-alkatra",
  weight: ["400", "500", "600", "700"],
});
const vazir = Vazirmatn({
  subsets: ["latin"],
  variable: "--font-vazir",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const lalezar = Lalezar({
  subsets: ["latin"],
  variable: "--font-lalezar",
  weight: "400",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} dir={params.lang === "en" ? "ltr" : "rtl"}>
      <body
        className={` ${ubuntu.variable} ${alkatra.variable} ${kanit.variable} ${vazir.variable} ${lalezar.variable} ${iranSans.variable}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavbarDesktop>
            <Navbar1 lang={params.lang} />
          </NavbarDesktop>
          <ProgressProvider>{children}</ProgressProvider>
          <ScrollTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
