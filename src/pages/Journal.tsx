
import NavBar from "@/components/NavBar";

const Journal = () => (
  <div className="min-h-screen bg-background">
    <NavBar />
    <main className="container mx-auto px-4 pt-24 pb-12 page-transition">
      <h1 className="text-4xl font-bold text-foreground mb-8">Reflection Journal</h1>
      <p className="text-muted-foreground">Document your thoughts and feelings in a safe space...</p>
    </main>
  </div>
);

export default Journal;
