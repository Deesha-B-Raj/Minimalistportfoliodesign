import { ArrowLeft, Target, Users, TrendingUp, Lightbulb, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SpotifyCaseStudyProps {
  onBack: () => void;
}

export function SpotifyCaseStudy({ onBack }: SpotifyCaseStudyProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 bg-gradient-to-br from-green-50 via-white to-violet-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-green-600 text-white hover:bg-green-700">Music Streaming</Badge>
            <Badge className="bg-violet-600 text-white hover:bg-violet-700">User Research</Badge>
            <Badge className="bg-blue-600 text-white hover:bg-blue-700">A/B Testing</Badge>
            <Badge className="bg-purple-600 text-white hover:bg-purple-700">Product Strategy</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            Spotify: Mood Mix Generator
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-700 mb-4 max-w-3xl leading-relaxed">
            Transforming music discovery through emotional intelligence to increase user engagement and retention
          </p>
          
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm">
            💡 Conceptual Product Design & Strategy Case Study
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl text-neutral-900">Problem Statement</h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-neutral-700 leading-relaxed">
              The core problem Mood Mix addresses is <strong>user friction and fatigue in music discovery</strong> when their current listening intent is driven by an emotional state, not by a specific artist or genre.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-xl bg-violet-50 border border-violet-100">
                <h3 className="text-xl text-neutral-900 mb-3">User Problem</h3>
                <p className="text-neutral-700 mb-4">
                  Users experience <strong>Music Discovery Fatigue (73% surveyed)</strong> and <strong>Emotional Context Missing (65% surveyed)</strong>. Existing recommendations don't account for their current emotional state, leading to mismatched suggestions and the need to skip.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
                <h3 className="text-xl text-neutral-900 mb-3">Business Problem</h3>
                <p className="text-neutral-700 mb-4">
                  The fatigue and mismatched recommendations contribute to <strong>Repetitive Listening Patterns (81% of users)</strong> and decreasing overall listening time. Users revert to familiar, shorter sessions instead of exploring new content, which impacts retention and revenue.
                </p>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-green-50 border border-green-200 mt-6">
              <h3 className="text-xl text-neutral-900 mb-3">Why it Matters</h3>
              <p className="text-neutral-700">
                Solving the "What should I listen to?" fatigue and improving content discovery is crucial for increasing user retention, lifting overall listening time, and driving revenue through more ad opportunities (Free users) or reduced churn (Premium users).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="px-6 py-16 md:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl text-neutral-900">User Research</h2>
          </div>
          
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            The research identifies two key user personas and three main pain points, validating the need for a mood-based solution.
          </p>
          
          {/* User Personas */}
          <h3 className="text-2xl text-neutral-900 mb-6">User Personas</h3>
          
          <div className="space-y-6 mb-10">
            <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">👤</div>
                <h4 className="text-xl text-neutral-900">The Casual Explorer</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-neutral-900 mb-2">Profile</h5>
                  <p className="text-neutral-700 mb-3">
                    Free tier user, 25-35 years old, listens 1-2 hours daily during routine activities.
                  </p>
                  <div className="p-4 bg-violet-50 rounded-lg border-l-4 border-violet-600">
                    <p className="text-neutral-700 italic">
                      "I just want something that matches my mood right now, but I don't know where to start."
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="text-neutral-900 mb-2">Pain Points</h5>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Difficulty finding new music</li>
                    <li>• Listening is passive</li>
                    <li>• Spends 5-10 minutes finding the "right vibe"</li>
                    <li>• Skips or settles for old favorites</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">👤</div>
                <h4 className="text-xl text-neutral-900">The Mood-Driven Curator</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-neutral-900 mb-2">Profile</h5>
                  <p className="text-neutral-700 mb-3">
                    Premium subscriber, 20-40 years old, listens 2-3 hours daily, actively seeks new music.
                  </p>
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                    <p className="text-neutral-700 italic">
                      "I love discovering music, but I wish Spotify understood how I'm feeling, not just what I've listened to."
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="text-neutral-900 mb-2">Pain Points</h5>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Time consuming to discover music</li>
                    <li>• Heavy reliance on personalization</li>
                    <li>• Discovery feels emotionless</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Uncovered Pain Points */}
          <h3 className="text-2xl text-neutral-900 mb-6">Uncovered Pain Points</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm text-center">
              <div className="text-4xl text-violet-600 mb-3">73%</div>
              <h4 className="text-lg text-neutral-900 mb-2">Music Discovery Fatigue</h4>
              <p className="text-neutral-700">
                Users reported feeling overwhelmed by choice and spending significant time browsing without finding satisfying music.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm text-center">
              <div className="text-4xl text-blue-600 mb-3">65%</div>
              <h4 className="text-lg text-neutral-900 mb-2">Emotional Context Missing</h4>
              <p className="text-neutral-700">
                Existing recommendations are too generic and don't account for the user's current emotional state.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm text-center">
              <div className="text-4xl text-green-600 mb-3">81%</div>
              <h4 className="text-lg text-neutral-900 mb-2">Repetitive Listening Patterns</h4>
              <p className="text-neutral-700">
                Users frequently fall back to the same playlists or albums because the discovery process feels like too much work.
              </p>
            </div>
          </div>
          
          {/* Current User Journey */}
          <h3 className="text-2xl text-neutral-900 mb-6">Current User Journey (Without Mood Mix)</h3>
          <p className="text-neutral-700 mb-6">
            The existing journey suffers from <strong>Friction</strong> and leads to users settling for less-than-ideal music:
          </p>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-300 hidden md:block"></div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 relative z-10">1</div>
                <div className="flex-1 pt-3">
                  <h4 className="text-lg text-neutral-900 mb-2">Start</h4>
                  <p className="text-neutral-700">User has a specific mood or activity in mind.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 relative z-10">2</div>
                <div className="flex-1 pt-3">
                  <h4 className="text-lg text-neutral-900 mb-2">Discovery Options</h4>
                  <p className="text-neutral-700">User scrolls through homepage, explores playlists, checks Discovery Weekly, searches keywords.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 relative z-10">3</div>
                <div className="flex-1 pt-3">
                  <h4 className="text-lg text-neutral-900 mb-2">Experiences Friction</h4>
                  <p className="text-neutral-700">None of the recommendations feel quite right; starts second-guessing choices; feels decision paralysis.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 relative z-10">4</div>
                <div className="flex-1 pt-3">
                  <h4 className="text-lg text-neutral-900 mb-2">Settles or Gives Up</h4>
                  <p className="text-neutral-700">Either picks a "good enough" playlist that's not perfect, or returns to familiar favorites.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl text-neutral-900">Solution & Product Requirements</h2>
          </div>
          
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Mood Mix Generator is an intelligent feature that allows users to create personalized playlists based on their current emotional state, transforming listening from a passive experience into an emotionally intelligent ritual.
          </p>
          
          <h3 className="text-2xl text-neutral-900 mb-6">Key Features</h3>
          
          <div className="space-y-6 mb-10">
            <div className="p-6 rounded-xl bg-violet-50 border border-violet-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">1️⃣</span>
                <h4 className="text-xl text-neutral-900">Mood Input Mechanism (Mobile/Desktop)</h4>
              </div>
              <p className="text-neutral-700">
                Users select from 8-10 pre-defined mood categories, each with distinct visual identity and color coding for quick emotional recognition.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">2️⃣</span>
                <h4 className="text-xl text-neutral-900">Smart Mix Generation (Key Differentiator)</h4>
              </div>
              <p className="text-neutral-700 mb-3">
                The generator creates a personalized mix that balances <strong>fresh music discovery</strong> with <strong>frequently heard songs</strong> tailored to the user's listening style.
              </p>
              <div className="p-4 bg-blue-100 rounded-lg">
                <p className="text-neutral-800">
                  <strong>Impact:</strong> This feature directly addresses discovery fatigue by providing immediate, emotionally relevant, yet familiar content.
                </p>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-purple-50 border border-purple-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">3️⃣</span>
                <h4 className="text-xl text-neutral-900">Cross-Platform Interface</h4>
              </div>
              <p className="text-neutral-700 mb-3">
                The feature is designed to integrate seamlessly into Spotify's existing interface across mobile and desktop platforms.
              </p>
              <ul className="space-y-2 text-neutral-700">
                <li>• <strong>Mobile Interface:</strong> Dedicated screen showing "Create Your Mood Mix" with large, colorful mood tiles</li>
                <li>• <strong>Desktop Integration:</strong> Prominently placed on home screen with large mood cards and quick access to recently created mixes</li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-green-50 border border-green-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">4️⃣</span>
                <h4 className="text-xl text-neutral-900">Learning & Refinement</h4>
              </div>
              <p className="text-neutral-700">
                The system uses playback data, skip rate, and user feedback (e.g., Thumbs Up/Down) to refine mixes in real-time and improve future recommendations.
              </p>
            </div>
            
            <div className="p-6 rounded-xl bg-orange-50 border border-orange-100">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">5️⃣</span>
                <h4 className="text-xl text-neutral-900">Save/Library Integration</h4>
              </div>
              <p className="text-neutral-700">
                Allows users to save a Mood Mix for replay, serving as a signal of high value and intent for repeat usage.
              </p>
            </div>
          </div>
          
          <div className="bg-neutral-900 text-white p-8 rounded-xl mb-10">
            <h3 className="text-2xl mb-6">Why These Features Were Prioritized</h3>
            <div className="space-y-4">
              <div>
                <div className="text-green-400 mb-2">Direct Problem Solving</div>
                <p className="text-neutral-300">
                  Prioritizing mood-based playlists directly resolves the <strong>Emotional Context Missing</strong> pain point.
                </p>
              </div>
              <div>
                <div className="text-blue-400 mb-2">Reduce Friction</div>
                <p className="text-neutral-300">
                  The instant, personalized generation feature removes the need for browsing and curation, addressing the <strong>Music Discovery Fatigue</strong>.
                </p>
              </div>
              <div>
                <div className="text-violet-400 mb-2">Habit Formation</div>
                <p className="text-neutral-300">
                  Integrating familiar songs with new discovery ensures comfort and maximizes the chance of the user listening to the mix completely, driving the crucial <strong>Mix Completion Rate</strong> KPI.
                </p>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <h3 className="text-2xl text-neutral-900 mb-6">MVP vs Future Roadmap</h3>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="text-left p-4 border border-neutral-200">Phase</th>
                  <th className="text-left p-4 border border-neutral-200">Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-neutral-200 align-top">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">MVP/Initial Launch</span>
                  </td>
                  <td className="p-4 border border-neutral-200">
                    Mood Selection (simple tags/slider) → Instant Mood Mix Generation → Mix Playback → Thumbs Up/Down feedback → Save to Library
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-neutral-200 align-top">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Future Roadmap</span>
                  </td>
                  <td className="p-4 border border-neutral-200">
                    Expanding mood categories → Integrating real-time sentiment analysis (e.g., voice input) → Incorporating external data (weather, location) for mood prediction → Advanced social sharing/collaborative mood mixes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Execution & Tradeoffs */}
      <section className="px-6 py-16 md:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-neutral-900 mb-8">Execution & Tradeoffs</h2>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600 text-xl">
                  ⚖️
                </div>
                <div>
                  <h3 className="text-xl text-neutral-900 mb-2">Tradeoff</h3>
                  <p className="text-neutral-700">
                    Prioritized developing a robust <strong>mood-based recommendation system</strong> over the immediate integration of complex social sharing features to ensure a focused and effective initial launch.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center text-red-600 text-xl">
                  🚧
                </div>
                <div>
                  <h3 className="text-xl text-neutral-900 mb-2">Constraint</h3>
                  <p className="text-neutral-700">
                    Initial user feedback mechanism was limited to simple <strong>Thumbs Up/Down ratings</strong> after playback, with plans to expand based on early insights.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl text-neutral-900 mb-2">Decision</h3>
                  <p className="text-neutral-700">
                    The phased launch strategy (Alpha/Beta to GA) was chosen to gather real user feedback and refine the model responsibly while minimizing large-scale learning risks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype Mockups Section */}
      <section className="px-6 py-16 md:py-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-violet-600" />
            </div>
            <h2 className="text-3xl md:text-4xl text-neutral-900">Prototype Mockups</h2>
          </div>
          
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Visual representation of how the Mood Mix Generator feature would integrate into the Spotify experience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mockup 1 */}
            <div className="rounded-xl overflow-hidden bg-white border border-neutral-200 shadow-lg">
              <div className="aspect-[9/16] relative bg-gradient-to-br from-green-400 to-green-600 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760359991731-2bcc31d0bde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG90aWZ5JTIwbW9iaWxlJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NDAwMDg1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mood Selection Interface"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-neutral-900 mb-2">Mood Selection Screen</h3>
                <p className="text-neutral-700">
                  Users are greeted with an intuitive mood selector featuring emotional tags and a mood intensity slider. The interface uses warm colors and smooth animations to create an inviting experience.
                </p>
              </div>
            </div>

            {/* Mockup 2 */}
            <div className="rounded-xl overflow-hidden bg-white border border-neutral-200 shadow-lg">
              <div className="aspect-[9/16] relative bg-gradient-to-br from-violet-400 to-purple-600 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1642310290559-53902b3b0f2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFwcCUyMG1vb2QlMjBzZWxlY3Rpb258ZW58MXx8fHwxNzY0MDAwODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Playlist Generation"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-neutral-900 mb-2">Instant Mix Generation</h3>
                <p className="text-neutral-700">
                  After selecting a mood, the app instantly generates a personalized playlist. The loading animation reflects the emotional tone selected, creating anticipation and engagement.
                </p>
              </div>
            </div>

            {/* Mockup 3 */}
            <div className="rounded-xl overflow-hidden bg-white border border-neutral-200 shadow-lg">
              <div className="aspect-[9/16] relative bg-gradient-to-br from-blue-400 to-indigo-600 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1684409270762-51ea1841e646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF5bGlzdCUyMGdlbmVyYXRpb24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0MDAwODUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Now Playing with Mood Context"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-neutral-900 mb-2">Enhanced Playback Experience</h3>
                <p className="text-neutral-700">
                  The playback screen displays the current mood context and offers quick options to "Match My Mood" or "Shift My Mood" for dynamic playlist adjustment based on real-time feedback.
                </p>
              </div>
            </div>

            {/* Mockup 4 */}
            <div className="rounded-xl overflow-hidden bg-white border border-neutral-200 shadow-lg">
              <div className="aspect-[9/16] relative bg-gradient-to-br from-pink-400 to-rose-600 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1c2VyJTIwZXhwZXJpZW5jZXxlbnwxfHx8fDE3NjQwMDA4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Save and Library Integration"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-neutral-900 mb-2">Save & Library Integration</h3>
                <p className="text-neutral-700">
                  Users can save mood mixes with one tap, creating a personal collection of emotional soundtracks. Saved mixes appear in "Your Library" with mood tags for easy retrieval.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-xl bg-blue-50 border border-blue-200">
            <h3 className="text-xl text-neutral-900 mb-3">Design Principles</h3>
            <ul className="space-y-2 text-neutral-700">
              <li>• <strong>Low Friction:</strong> Mood selection takes less than 5 seconds</li>
              <li>• <strong>Visual Feedback:</strong> Color schemes and animations reflect the selected emotional state</li>
              <li>• <strong>Contextual Controls:</strong> Easy access to mood adjustment without leaving the playback screen</li>
              <li>• <strong>Seamless Integration:</strong> Feels native to Spotify's existing design language</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-br from-blue-50 via-violet-50 to-purple-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl text-neutral-900">Metrics & Success Criteria</h2>
          </div>
          
          <div className="mb-10 p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <h3 className="text-2xl text-neutral-900 mb-3">North Star Metric</h3>
            <div className="text-3xl text-violet-600 mb-2">Weekly Active Users (WAU) - Mood Mix</div>
            <p className="text-neutral-700">
              Unique users who either create OR listen to mood mixes in any 7-day period.
            </p>
          </div>
          
          <h3 className="text-2xl text-neutral-900 mb-6">Key Performance Indicators (KPIs)</h3>
          
          <div className="space-y-6 mb-10">
            <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-orange-100 text-orange-700">Alpha/Beta</Badge>
                <h4 className="text-xl text-neutral-900">Habit Formation & Quality</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-neutral-900 mb-2">Leading KPIs</h5>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Activation ≤ 48h: ≥30%</li>
                    <li>• Mix Completion Rate: ≥60% (listening to ≥ half the tracks)</li>
                    <li>• Weekly Starters: ≥40% of activated users use 2+ times per week</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-neutral-900 mb-2">Lagging KPIs</h5>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Net Minutes Lift: +15% more minutes per week</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-green-100 text-green-700">GA (General Availability)</Badge>
                <h4 className="text-xl text-neutral-900">Adoption, Scale, and Business Impact</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-neutral-900 mb-2">Leading KPIs</h5>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• WAU Penetration Rate (Month 6): 20-25% of total Spotify WAU</li>
                    <li>• Engagement Ratio (Listening Time Lift): +20% more minutes vs. non-users</li>
                    <li>• Repeat Usage Rate: ≥50% using 2+ times weekly</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-neutral-900 mb-2">Lagging KPIs</h5>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• 30-Day Retention: ≥40%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <h3 className="text-2xl mb-6">Bottom Line Impact - Success Looks Like</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">15%</div>
                <div className="text-green-100">Retention Improvement</div>
                <p className="text-sm text-white/80 mt-2">Mood Mix users stick around 15% more than others</p>
              </div>
              <div>
                <div className="text-3xl mb-2">20%</div>
                <div className="text-blue-100">Listening Time Lift</div>
                <p className="text-sm text-white/80 mt-2">Users listen 20% more each week</p>
              </div>
              <div>
                <div className="text-3xl mb-2">$$$</div>
                <div className="text-violet-100">Revenue Impact</div>
                <p className="text-sm text-white/80 mt-2">More ad revenue (Free) & lower churn (Premium)</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 space-y-4">
            <h3 className="text-2xl text-neutral-900">Expected Impact by User Type</h3>
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <h4 className="text-lg text-neutral-900 mb-2">Free Users</h4>
                <p className="text-neutral-700">
                  More mood mixes lead to more sessions, which means more ads shown (Ad Revenue Lift). Happy users eventually convert to Premium.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <h4 className="text-lg text-neutral-900 mb-2">Premium Users</h4>
                <p className="text-neutral-700">
                  Easier discovery reduces "what should I listen to?" fatigue. Better personalization makes them feel more attached, lowering churn.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <h4 className="text-lg text-neutral-900 mb-2">All Users</h4>
                <p className="text-neutral-700">
                  Better onboarding for new users by helping them find music they love faster.
                </p>
              </div>
            </div>
          </div>
          
          {/* Health Metrics */}
          <div className="mt-12 p-8 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200">
            <h3 className="text-2xl text-neutral-900 mb-6">Health Metrics (Internal Ratios)</h3>
            <p className="text-neutral-700 mb-6">
              These ratios help monitor the feature's health and ensure sustainable growth patterns.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg text-neutral-900 mb-2">Ratio</h4>
                    <div className="text-2xl text-violet-600">Creators : Total WAU</div>
                  </div>
                  <div>
                    <h4 className="text-lg text-neutral-900 mb-2">Healthy Range</h4>
                    <div className="text-2xl text-blue-600">20-40%</div>
                  </div>
                  <div>
                    <h4 className="text-lg text-neutral-900 mb-2">What It Means</h4>
                    <p className="text-neutral-700">
                      Not everyone creates constantly—some just replay saved mixes. This ratio shows healthy balance between active creators and passive listeners.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-white border border-neutral-200 shadow-sm">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg text-neutral-900 mb-2">Ratio</h4>
                    <div className="text-2xl text-violet-600">Mixes Created : Mixes Played</div>
                  </div>
                  <div>
                    <h4 className="text-lg text-neutral-900 mb-2">Healthy Range</h4>
                    <div className="text-2xl text-blue-600">1:5 to 1:10</div>
                  </div>
                  <div>
                    <h4 className="text-lg text-neutral-900 mb-2">What It Means</h4>
                    <p className="text-neutral-700">
                      Mixes get replayed a bunch, which means they are valuable. High replay ratio indicates users find lasting value in their mood mixes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Explanations Section */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-neutral-900 mb-8">Why These KPIs Were Selected</h2>
          
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Each KPI was carefully chosen to provide actionable insights at different stages of the product lifecycle and align with both user value and business objectives.
          </p>
          
          <div className="space-y-6">
            {/* Alpha/Beta KPIs */}
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-orange-50 px-6 py-4 border-b border-neutral-200">
                <h3 className="text-2xl text-neutral-900">Alpha/Beta Phase KPIs</h3>
                <p className="text-neutral-600 mt-2">Focus: Early validation and habit formation</p>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="p-5 rounded-lg bg-neutral-50">
                  <h4 className="text-lg text-neutral-900 mb-2">Activation ≤ 48h: ≥30%</h4>
                  <p className="text-neutral-700 mb-3">
                    <strong>Why this matters:</strong> Measures how quickly users try the feature after exposure. A 48-hour window tests whether the feature is compelling enough to drive immediate action.
                  </p>
                  <p className="text-neutral-700">
                    <strong>Target rationale:</strong> 30% activation within 48 hours indicates strong initial interest. Lower rates suggest messaging/positioning issues, while higher rates validate product-market fit early.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-neutral-50">
                  <h4 className="text-lg text-neutral-900 mb-2">Mix Completion Rate: ≥60%</h4>
                  <p className="text-neutral-700 mb-3">
                    <strong>Why this matters:</strong> Direct signal of content quality and relevance. If users skip most tracks, the mood-to-music matching isn't working.
                  </p>
                  <p className="text-neutral-700">
                    <strong>Target rationale:</strong> 60% completion (listening to ≥ half the tracks) is higher than typical playlist engagement, indicating that mood-based curation delivers superior personalization.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-neutral-50">
                  <h4 className="text-lg text-neutral-900 mb-2">Weekly Starters: ≥40% using 2+ times per week</h4>
                  <p className="text-neutral-700 mb-3">
                    <strong>Why this matters:</strong> Habit formation is critical for retention. This measures whether users return to the feature or if it's a one-time novelty.
                  </p>
                  <p className="text-neutral-700">
                    <strong>Target rationale:</strong> 40% repeat usage within a week shows the feature is becoming part of users' listening routine, not just an experiment.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-neutral-50">
                  <h4 className="text-lg text-neutral-900 mb-2">Net Minutes Lift: +15%</h4>
                  <p className="text-neutral-700 mb-3">
                    <strong>Why this matters:</strong> Lagging indicator that ties feature usage to the business goal of increasing listening time, which directly impacts revenue.
                  </p>
                  <p className="text-neutral-700">
                    <strong>Target rationale:</strong> 15% lift is ambitious but achievable. It demonstrates the feature moves the needle on core engagement, justifying continued investment.
                  </p>
                </div>
              </div>
            </div>

            {/* GA KPIs */}
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-green-50 px-6 py-4 border-b border-neutral-200">
                <h3 className="text-2xl text-neutral-900">General Availability (GA) KPIs</h3>
                <p className="text-neutral-600 mt-2">Focus: Scale, adoption, and sustained business impact</p>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="p-5 rounded-lg bg-neutral-50">
                  <h4 className="text-lg text-neutral-900 mb-2">WAU Penetration Rate: 20-25% by Month 6</h4>
                  <p className="text-neutral-700 mb-3">
                    <strong>Why this matters:</strong> Measures feature adoption at scale. This percentage of total Spotify WAU shows whether Mood Mix is becoming a mainstream behavior or niche feature.
                  </p>
                  <p className="text-neutral-700">
                    <strong>Target rationale:</strong> 20-25% penetration would make this one of Spotify's most-used features, comparable to Discover Weekly adoption rates, indicating product success.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-neutral-50">
                  <h4 className="text-lg text-neutral-900 mb-2">Engagement Ratio: +20% listening time vs. non-users</h4>
                  <p className="text-neutral-700 mb-3">
                    <strong>Why this matters:</strong> Isolates the incremental value Mood Mix creates. Comparing users vs. non-users controls for other factors affecting listening time.
                  </p>
                  <p className="text-neutral-700">
                    <strong>Target rationale:</strong> 20% lift is significant enough to impact overall platform metrics and proves the feature drives meaningful behavioral change.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-neutral-50">
                  <h4 className="text-lg text-neutral-900 mb-2">Repeat Usage Rate: ≥50% using 2+ times weekly</h4>
                  <p className="text-neutral-700 mb-3">
                    <strong>Why this matters:</strong> Long-term stickiness indicator. Higher than Alpha/Beta target because GA users should exhibit stronger habitual behavior.
                  </p>
                  <p className="text-neutral-700">
                    <strong>Target rationale:</strong> 50% repeat rate means half of all users make Mood Mix part of their regular listening routine, establishing it as a core feature.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-neutral-50">
                  <h4 className="text-lg text-neutral-900 mb-2">30-Day Retention: ≥40%</h4>
                  <p className="text-neutral-700 mb-3">
                    <strong>Why this matters:</strong> Classic retention metric that shows whether users who try Mood Mix continue using Spotify over time, directly addressing the churn problem.
                  </p>
                  <p className="text-neutral-700">
                    <strong>Target rationale:</strong> 40% is notably higher than typical feature retention rates (~25-30%), demonstrating Mood Mix creates lasting value and attachment.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Leading vs Lagging */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white">
              <h3 className="text-2xl mb-4">Leading vs. Lagging Indicators</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl mb-3 text-blue-100">Leading KPIs</h4>
                  <p className="text-white/90">
                    These are early warning signals that predict future success. They can be influenced directly by product iterations and are measured quickly (days/weeks), enabling rapid experimentation and course correction.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl mb-3 text-violet-100">Lagging KPIs</h4>
                  <p className="text-white/90">
                    These measure ultimate business outcomes but take longer to materialize (weeks/months). They validate whether leading indicators actually translate to business value and justify continued investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-16 bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Interested in learning more?</h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            I'd love to discuss this case study and my approach to product management in more detail.
          </p>
          <Button 
            onClick={onBack}
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white px-8"
          >
            Back to Portfolio
          </Button>
        </div>
      </section>
    </div>
  );
}