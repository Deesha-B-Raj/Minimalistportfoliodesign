import { ArrowDown, Sparkles, ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToCaseStudies = () => {
    document.querySelector('section')?.nextElementSibling?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-100 via-white to-blue-100" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-violet-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4ODg4ODgiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full border border-violet-200 shadow-lg hover:shadow-xl transition-shadow">
              <Sparkles className="w-4 h-4 text-violet-600 animate-pulse" />
              <span className="text-sm text-violet-700">Open to Product Management Opportunities</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xl md:text-2xl text-neutral-600">Hi, I'm</p>
                <h1 className="text-6xl md:text-7xl lg:text-8xl text-neutral-900 tracking-tight leading-[0.95]">
                  <span className="block mb-2">Deesha</span>
                  <span className="block bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    B Raj
                  </span>
                </h1>
              </div>
              
              <div className="h-1.5 w-32 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full" />
            </div>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-700 leading-relaxed max-w-xl">
              Bridging the gap between{" "}
              <span className="text-violet-600">data-driven insights</span> and{" "}
              <span className="text-blue-600">user-centric product solutions</span>
            </p>
            
            {/* Description */}
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-xl">
              A data engineer turned product strategist, combining technical expertise with 
              business acumen to build products that matter. Currently pursuing my Master's in 
              Management Science & Engineering to master the art of product thinking.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={scrollToCaseStudies}
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all px-8 h-12"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                onClick={scrollToAbout}
                variant="outline" 
                size="lg"
                className="border-2 border-violet-200 text-violet-700 hover:bg-violet-50 hover:border-violet-300 px-8 h-12"
              >
                About Me
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-neutral-700 hover:text-violet-700 hover:bg-violet-50 px-8 h-12"
              >
                <Download className="mr-2 w-5 h-5" />
                Resume
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 max-w-xl">
              <div className="space-y-2">
                <div className="text-4xl text-violet-600">3+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl text-blue-600">2</div>
                <div className="text-sm text-neutral-600">Degrees</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl text-purple-600">∞</div>
                <div className="text-sm text-neutral-600">Ideas to Build</div>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative hidden lg:block">
            {/* Floating card elements */}
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Main decorative element */}
              <div className="relative z-10 w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-blue-500 rounded-3xl transform rotate-6 opacity-20" />
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-neutral-200">
                  <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl text-neutral-900">Product Thinker</h3>
                      <p className="text-neutral-600">
                        Transforming complex data into actionable product strategies
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="p-4 rounded-xl bg-violet-50 border border-violet-100">
                        <div className="text-sm text-violet-600">Data Engineering</div>
                        <div className="text-2xl text-violet-700 mt-1">Expert</div>
                      </div>
                      <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                        <div className="text-sm text-blue-600">Strategy</div>
                        <div className="text-2xl text-blue-700 mt-1">Focused</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badge 1 */}
              <div className="absolute top-0 right-0 bg-white rounded-2xl p-4 shadow-xl border border-violet-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-neutral-700 whitespace-nowrap">Available for opportunities</span>
                </div>
              </div>
              
              {/* Floating badge 2 */}
              <div className="absolute bottom-0 left-0 bg-white rounded-xl p-4 shadow-xl border border-blue-100 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xs text-neutral-600">Currently studying</div>
                <div className="text-sm text-neutral-900 mt-1">MS&E Program</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer" onClick={scrollToAbout}>
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
