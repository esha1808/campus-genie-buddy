import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InfoCardProps {
  title: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const InfoCard = ({ title, icon, children, className, onClick }: InfoCardProps) => {
  return (
    <Card
      className={cn(
        "glass-card hover-lift cursor-pointer rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-accent/12 to-accent/8 p-6 transition-all duration-300",
        "before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-2xl before:bg-gradient-radial before:from-accent/5 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100 hover:border-accent/40 hover:shadow-accent",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="relative z-10 pb-4">
        <CardTitle className="flex items-center gap-3 text-primary text-xl">
          {icon && <span className="text-2xl">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10 pt-0">
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard;