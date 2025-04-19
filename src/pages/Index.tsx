
import { Brain, Book, List, Calendar, Settings, Gamepad, Store } from "lucide-react";
import NavigationCard from "@/components/NavigationCard";
import NavBar from "@/components/NavBar";

const Index = () => {
  const navigation = [
    {
      to: "/games",
      title: "Mindful Games",
      description: "Practice mindfulness through engaging games",
      Icon: Gamepad
    },
    {
      to: "/store",
      title: "Wellness Store",
      description: "Discover tools for your mental wellbeing",
      Icon: Store
    },
    {
      to: "/todo",
      title: "Self-Care Tasks",
      description: "Track your daily wellness activities",
      Icon: List
    },
    {
      to: "/emotion-scan",
      title: "Mood Scanner",
      description: "Check in with your emotional state",
      Icon: Brain
    },
    {
      to: "/journal",
      title: "Reflection Journal",
      description: "Document your thoughts and feelings",
      Icon: Book
    },
    {
      to: "/options",
      title: "Your Settings",
      description: "Personalize your wellness journey",
      Icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-12 page-transition">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary/80 to-accent/80 bg-clip-text text-transparent">
            Welcome to MindSpace
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your personal sanctuary for mental wellness. Explore mindful games, track your mood, 
            and journal your journey to better mental health.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigation.map((item) => (
            <NavigationCard key={item.to} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
