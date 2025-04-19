
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
    <Link to={to}>
      <Card className="h-full p-6 bg-gradient-to-br from-[#2A2F3C] to-[#1A1F2C] border-[#403E43] hover:border-[#9b87f5] transition-all duration-300 group">
        <div className="flex flex-col items-center text-center space-y-4">
          <Icon className="w-12 h-12 text-[#9b87f5] group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </Card>
    </Link>
  );
};

export default NavigationCard;
