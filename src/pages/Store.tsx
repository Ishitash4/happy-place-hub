
import NavBar from "@/components/NavBar";

const Store = () => (
  <div className="min-h-screen bg-background">
    <NavBar />
    <main className="container mx-auto px-4 pt-24 pb-12 page-transition">
      <h1 className="text-4xl font-bold text-foreground mb-8">Wellness Store</h1>
      <p className="text-muted-foreground">Discover tools and resources for your mental wellbeing journey...</p>
    </main>
  </div>
);

export default Store;
