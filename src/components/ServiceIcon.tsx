import {
  Search, Target, Share2, Code2, Palette, PenLine, Mail, Workflow, MousePointerClick, LineChart,
  Users, Video, Brush, Layers, ShoppingBag, MapPin, Shield, Megaphone, Building2, Sparkles,
  Smartphone, Briefcase, Compass, Boxes,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Search, Target, Share2, Code2, Palette, PenLine, Mail, Workflow, MousePointerClick, LineChart,
  Users, Video, Brush, Layers, ShoppingBag, MapPin, Shield, Megaphone, Building2, Sparkles,
  Smartphone, Briefcase, Compass, Boxes,
};

export function ServiceIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const Icon = MAP[name] ?? Sparkles;
  return <Icon className={className} />;
}
