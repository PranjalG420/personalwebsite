import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainSection from "@/components/Sections/MainSection";
import AboutSection from "@/components/Sections/AboutSection";
import ProjectsSection from "@/components/Sections/ProjectsSection";
import ContactSection from "@/components/Sections/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen h-full">
      <Navbar />
      <MainSection />
      <AboutSection />
      <ProjectsSection />
       <ContactSection /> 
      <Footer />
    </main>
  );
}
