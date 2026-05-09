import Preloader from "@/components/Preloader";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden">
        <Preloader />
        {children}
      </body>
    </html>
  );
}