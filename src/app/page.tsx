import { HeroSection } from "./component/HeroSection";
import { Navbar } from "./component/Navbar"
import { AboutSection } from "./component/AboutSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-16 mx-auto px-12 py-4">
        <HeroSection/>
        <AboutSection/>
      </div>
    </main>
  );
}