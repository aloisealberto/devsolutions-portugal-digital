import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Problems from "@/components/Problems";
import About from "@/components/About";
import BudgetForm from "@/components/BudgetForm";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <InteractiveBackground />
      <div className="relative z-10">
        <Header />
        <main id="inicio">
          <Hero />
          <Services />
          <Problems />
          <About />
          <BudgetForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
