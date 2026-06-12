import TransitionProvider from "@/components/TransitionProvider";
import Preloader from "@/components/Preloader";
import "../app/globals.css";
import Providers from "./providers";

export const metadata = {
  title: "CareGo Robotics",
  description: "Smart Robotics Platform",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#fbfbff] text-slate-900 antialiased overflow-x-clip">

        <Providers>

          {/* Background Effects */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-200/30 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-violet-200/20 blur-[140px] rounded-full" />
          </div>

          {/* Preloader */}
          <Preloader />

          {/* Page Transitions */}
          <TransitionProvider>
            {children}
          </TransitionProvider>

        </Providers>

      </body>
    </html>
  );
}