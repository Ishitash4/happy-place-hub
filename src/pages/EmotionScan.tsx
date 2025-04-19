
import NavBar from "@/components/NavBar";

const EmotionScan = () => (
  <div className="min-h-screen bg-background">
    <NavBar />
    <main className="container mx-auto px-4 pt-24 pb-12 page-transition">
      <h1 className="text-4xl font-bold text-foreground mb-8">Mood Scanner</h1>
      <p className="text-muted-foreground">Check in with your emotional wellbeing...</p>
    </main>
  </div>
);

export default EmotionScan;
