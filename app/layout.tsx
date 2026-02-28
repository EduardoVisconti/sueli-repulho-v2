import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "Sueli Repulho | Psicóloga e Mentora de Transformação Emocional",
  description:
    "Sueli Repulho é psicóloga clínica e mentora com 40 anos de experiência. Atendimento online para todo o Brasil. Agende sua sessão pelo WhatsApp.",
  keywords: [
    "psicóloga online",
    "mentora emocional",
    "terapia online",
    "transformação emocional",
    "autoconhecimento",
    "processo RAJA",
    "Sueli Repulho",
  ],
  openGraph: {
    title: "Sueli Repulho | Psicóloga e Mentora de Transformação Emocional",
    description:
      "Um espaço de acolhimento e transformação. Atendimento online para todo o Brasil.",
    url: "https://suelirepulho.com.br",
    siteName: "Sueli Repulho",
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
