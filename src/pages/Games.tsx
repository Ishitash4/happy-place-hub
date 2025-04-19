
import NavBar from "@/components/NavBar";
import NavigationCard from "@/components/NavigationCard";
import { Gamepad } from "lucide-react";

const Games = () => {
  const games = [
    {
      to: "/games/wordle",
      title: "Wordle",
      description: "Guess the word in 6 tries",
      Icon: Gamepad
    },
    {
      to: "/games/memory",
      title: "Memory",
      description: "Match the pairs",
      Icon: Gamepad
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <NavBar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-white mb-8">Games</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game) => (
            <NavigationCard key={game.to} {...game} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Games;
