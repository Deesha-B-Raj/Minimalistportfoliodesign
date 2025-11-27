import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  duration: string;
  role: string;
}

interface CaseStudyCardProps {
  study: CaseStudy;
  onClick?: () => void;
}

export function CaseStudyCard({ study, onClick }: CaseStudyCardProps) {
  return (
    <article className="group cursor-pointer" onClick={onClick}>
      <div className="mb-4 overflow-hidden rounded-xl bg-neutral-100 aspect-[4/3] relative">
        <ImageWithFallback
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <ArrowUpRight className="absolute top-4 right-4 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="space-y-3">
        <h3 className="text-neutral-900 group-hover:text-violet-600 transition-colors">
          {study.title}
        </h3>
        
        <p className="text-neutral-600">
          {study.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {study.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-violet-100 text-violet-700 hover:bg-violet-200 border-none">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-4 text-neutral-500 pt-2">
          <span className="text-sm">{study.role}</span>
          <span className="text-sm">·</span>
          <span className="text-sm">{study.duration}</span>
        </div>
      </div>
    </article>
  );
}
