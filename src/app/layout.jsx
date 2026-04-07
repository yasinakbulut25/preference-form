import { Arimo } from "next/font/google";
import ClientProvider from "./ClientProvider";
import "../styles/globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
});

export const metadata = {
  title: "Preference Form",
  description: "Preference Form Case to Ministry of CRM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${arimo.variable} h-full antialiased`}>
      <body className="min-h-full bg-color-bg font-sans">
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
