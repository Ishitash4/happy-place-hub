
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';

interface NavigationCardProps {
  to: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const NavigationCard = ({ to, title, description, Icon }: NavigationCardProps) => {
  return (
    <Link to={to} className="block">
      <Card className="h-full p-6 bg-gradient-to-br from-card to-muted border-border/50 card-hover">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 rounded-full bg-primary/10">
            <Icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Card>
    </Link>
  );
};

export default NavigationCard;
