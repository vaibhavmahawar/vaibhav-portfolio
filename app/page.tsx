import AnimatedBackground from "@/components/background/AnimatedBackground";
import CursorGlow from "@/components/ui/CursorGlow";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { profile } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "AI Engineer, Software Engineer, Computer Vision Researcher",
  description: profile.description,
  url: profile.linkedin,
  sameAs: [profile.github, profile.linkedin],
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ajmer",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Computer Vision",
    "Multi-Agent AI",
    "Generative AI",
    "Machine Learning",
    "Backend Engineering",
    "Autonomous Systems",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Loader />
      <AnimatedBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-container px-margin">
        <Hero />
        <About />
        <ExperienceTimeline />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
