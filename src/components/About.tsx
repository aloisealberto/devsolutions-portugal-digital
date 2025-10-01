import { Users, Award, Target, Zap } from "lucide-react";

const About = () => {
  const team = [
    { icon: Users, title: "Engenheiros de Software", description: "Especialistas em desenvolvimento de soluções robustas" },
    { icon: Award, title: "Engenheiros de Dados", description: "Mestres em arquitetura e gestão de dados" },
    { icon: Target, title: "Programadores", description: "Criadores de código limpo e eficiente" },
    { icon: Zap, title: "Gestores de Automação", description: "Especialistas em otimização de processos com IA" },
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sobre a DevSoluctions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma equipa de profissionais especializados em Mangualde, Portugal, dedicados a transformar o seu negócio através da tecnologia. 
            Com expertise em software, dados e inteligência artificial, criamos soluções que impulsionam resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={index}
                className="bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{member.title}</h3>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">A Nossa Missão</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Democratizar o acesso à tecnologia de ponta, oferecendo soluções personalizadas que se adaptam às necessidades específicas de cada cliente. 
            Acreditamos que cada negócio merece ferramentas digitais que potenciam o seu crescimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
