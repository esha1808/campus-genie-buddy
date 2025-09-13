import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { cva, type VariantProps } from "class-variance-authority";

const campusButtonVariants = cva(
  "campus-button rounded-3xl font-semibold transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary hover:scale-105",
        genie: "genie-glow text-white hover:scale-110",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        ghost: "bg-primary/10 text-primary hover:bg-primary/20",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CampusButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof campusButtonVariants> {}

const CampusButton = ({ className, variant, size, ...props }: CampusButtonProps) => {
  return (
    <Button
      className={cn(campusButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { CampusButton, campusButtonVariants };