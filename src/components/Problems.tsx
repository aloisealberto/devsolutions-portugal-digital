import { AlertCircle, TrendingUp, Clock, Shield } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: AlertCircle,
      problem: "Processos Manuais Ineficientes",
      solution: "Automatização inteligente que poupa tempo e reduz erros",
    },
    {
      icon: Clock,
      problem: "Falta de Escalabilidade",
      solution: "Sistemas que crescem com o seu negócio",
    },
    {
      icon: TrendingUp,
      problem: "Dados Desorganizados",
      solution: "Bases de dados estruturadas e acessíveis",
    },
    {
      icon: Shield,
      problem: "Segurança de Informação",
      solution: "Proteção robusta dos seus dados críticos",
    },
  ];

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-primary rounded-full blur-3xl top-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-secondary rounded-full blur-3xl bottom-0 left-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Transformamos Desafios em Oportunidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entendemos as suas dores e oferecemos soluções práticas e eficazes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{item.problem}</h3>
                    <div className="w-full h-px bg-gradient-to-r from-destructive to-primary my-4"></div>
                    <p className="text-primary font-medium flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
