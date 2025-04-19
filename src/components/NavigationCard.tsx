
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavigationCardProps {
  to: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

const NavigationCard = ({ to, title, description, Icon }: NavigationCardProps) => {
  return (
    <Link to={to} className="navigation-card">
      <div className="card-hover">
        <div className="icon-wrapper">
          <Icon size={32} color="#9b87f5" />
        </div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </Link>
  );
};

export default NavigationCard;
