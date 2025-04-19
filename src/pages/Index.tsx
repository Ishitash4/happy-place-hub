
import { Gamepad, Store, List, Calendar, Book, Settings } from "lucide-react";
import NavigationCard from "@/components/NavigationCard";
import NavBar from "@/components/NavBar";

const Index = () => {
  const navigation = [
    {
      to: "/games",
      title: "Games",
      description: "Play Wordle and Memory games",
      Icon: Gamepad
    },
    {
      to: "/store",
      title: "Store",
      description: "Browse and get new games",
      Icon: Store
    },
    {
      to: "/todo",
      title: "Todo List",
      description: "Manage your tasks",
      Icon: List
    },
    {
      to: "/emotion-scan",
      title: "Emotion Scan",
      description: "Track your emotional state",
      Icon: Calendar
    },
    {
      to: "/journal",
      title: "Journal",
      description: "Write your thoughts",
      Icon: Book
    },
    {
      to: "/options",
      title: "Options",
      description: "Customize your experience",
      Icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Welcome to Game Hub</h1>
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
