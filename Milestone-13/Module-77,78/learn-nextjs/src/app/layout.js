import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NabBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s | Learning NextJS",
  },
  keywords: ["Next.js", "React", "JavaScript", "Learning", "PlayGround"],
  description: "Try to learn next js ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}antialiased`}>
        {/* navbar */}
        <NavBar />
        {/* like OutLet */}
        <main className="min-h-[calc(100vh-140px)] text-center ">
          {children}
        </main>

        {/* footer */}
        <footer className="text-center py-6 bg-gray-700">
          Awesome NextJS project
        </footer>
      </body>
    </html>
  );
}
