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
  title: "La Verrière Menu",
  description: "Explore La Verrière's complete menu of coffee, tea, shakes, smoothies, cocktails, and snacks. Browse through our offerings and find your favorite drinks and dishes. Perfect for anyone looking for a cozy and flavorful experience at La Verrière Lounge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
