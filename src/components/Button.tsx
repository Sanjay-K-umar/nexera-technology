import { Button as ShadcnButton } from "@/components/ui/button";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<React.ComponentPropsWithoutRef<typeof ShadcnButton>, "variant"> {
  variant?: "default" | "hero" | "ghost" | "outline" | "destructive" | "secondary" | "link";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const isHero = variant === "hero";
    const shadcnVariant = isHero ? "default" : (variant as any);
    
    return (
      <ShadcnButton
        ref={ref}
        variant={shadcnVariant}
        className={cn(
          "transition-all duration-300",
          isHero && "bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl hover:scale-105",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
