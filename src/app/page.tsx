import { Navbar } from "./component/header/Navbar";
import { AboutSection } from "./component/view/AboutSection";
import AchievementsSection from "./component/view/AchievementsSection";
import { HeroSection } from "./component/view/HeroSection";
import {ProjectsSection} from "./component/view/ProjectsSection";
import {EmailSection} from "./component/view/EmailSection";
import {Footer} from "./component/view/Footer";
// import { useEffect } from "react";
import {connect} from "@/app/utils/db"
import * as dotenv from 'dotenv';
import fs from "fs-extra"

dotenv.config();


export default function Home() {
  
  return (
    <main className="flex min-h-screen px-10 flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-16 mx-auto py-4">
        <HeroSection/>
        <AchievementsSection/>
        <AboutSection/>
        <ProjectsSection />
        <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}