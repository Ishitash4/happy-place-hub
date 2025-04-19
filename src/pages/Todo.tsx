
import NavBar from "@/components/NavBar";

const Todo = () => (
  <div className="min-h-screen bg-background">
    <NavBar />
    <main className="container mx-auto px-4 pt-24 pb-12 page-transition">
      <h1 className="text-4xl font-bold text-foreground mb-8">Self-Care Tasks</h1>
      <p className="text-muted-foreground">Track and manage your daily wellness activities...</p>
    </main>
  </div>
);

export default Todo;
