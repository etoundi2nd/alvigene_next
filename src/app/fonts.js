import { Inter, Noto_Serif_Display } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const noto_serif_display = Noto_Serif_Display({
  subsets: ["latin"],
  variable: "--font-display",
});
