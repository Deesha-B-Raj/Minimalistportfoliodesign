import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-blue-50 -z-10" />
      
      <div className="px-6 py-16 md:py-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="space-y-4 max-w-md">
            <h3 className="text-neutral-900">
              Let's Build Something Great Together
            </h3>
            <p className="text-neutral-600">
              I'm actively seeking product management opportunities where I can leverage 
              my technical background and strategic thinking to drive meaningful impact.
            </p>
            <Button className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm text-neutral-600">Connect with me</p>
            <div className="flex gap-4">
              <a 
                href="mailto:deesha.raj@example.com" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-violet-50 text-neutral-700 hover:text-violet-600 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/deeshabraj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-violet-50 text-neutral-700 hover:text-violet-600 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/deeshabraj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg hover:bg-violet-50 text-neutral-700 hover:text-violet-600 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm">
            <p>© {new Date().getFullYear()} Deesha B Raj. All rights reserved.</p>
            <p>Designed & Built with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
}