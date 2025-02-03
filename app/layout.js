import { Cormorant ,Playfair } from "next/font/google";
import "./globals.css";


const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['italic', 'normal'],
});
const playfair = Playfair({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['italic', 'normal'],
});


export const metadata = {
  title: "La veriére Menu",
  description: "La veriére Menu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
