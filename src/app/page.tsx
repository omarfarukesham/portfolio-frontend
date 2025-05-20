import Hero from "@/components/Hero";
import ProudPartnerSection from "@/components/Partner";
import BlogsPage from "./blogs/page";
// import TestimonialPage from "@/components/Testimonial";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/Skills";
import Experience from "@/components/Experience";
import ContactNow from "@/components/contactNow";
import ProjectsSection from "@/components/ProjectSection";
// import ProjectsSection from "./projects/page";

export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <ProudPartnerSection />
      <Experience />
      <SkillsSection />
      <ProjectsSection />
      <BlogsPage />
      {/* <TestimonialPage /> */}
      <ContactNow />
      <Footer />
     
    </div>
  );
}
