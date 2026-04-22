import {
  Cpu, ShoppingCart, HeartPulse, Landmark, Home, GraduationCap, Plane, Scale, Wrench,
  UtensilsCrossed, Sparkles, Dumbbell, Factory, HandHeart, Car, Gamepad2,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Cpu, ShoppingCart, HeartPulse, Landmark, Home, GraduationCap, Plane, Scale, Wrench,
  UtensilsCrossed, Sparkles, Dumbbell, Factory, HandHeart, Car, Gamepad2,
};

export function IndustryIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const Icon = MAP[name] ?? Sparkles;
  return <Icon className={className} />;
}
