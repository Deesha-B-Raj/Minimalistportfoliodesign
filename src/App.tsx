import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CaseStudies } from "./components/CaseStudies";
import { Footer } from "./components/Footer";
import { CaseStudyCard } from "./components/CaseStudyCard";

export default function App() {
  const caseStudies = [
    {
      id: "spotify-mood-mix",
      title: "Spotify: Mood Mix Generator",
      description: "Designed an intelligent mood-based playlist feature to reduce user friction in music discovery, targeting a 20% increase in listening time and 15% improvement in retention.",
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG90aWZ5JTIwbXVzaWMlMjBhcHB8ZW58MXx8fHwxNzYzNTEyOTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Music Streaming", "User Research", "Product Strategy"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      
      {/* Case Studies Section with click handler */}
      <section className="px-6 py-20 md:py-32 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
            Portfolio
          </div>
          <h2 className="text-neutral-900 mb-4">
            Case Studies
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Explore how I approach product challenges with a data-driven mindset and user-centric focus
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
          {caseStudies.map((study) => (
            <CaseStudyCard 
              key={study.id} 
              study={study} 
              onClick={() => window.location.href = "https://deesha-b-raj.github.io/spotify-deep-dive/"}
            />
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}