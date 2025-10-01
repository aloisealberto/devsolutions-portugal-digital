import { Code2, Database, Bot, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento de Software",
      description: "Criação de software personalizado que se adapta perfeitamente aos processos únicos do seu negócio.",
      features: ["Aplicações Web", "Sistemas Empresariais", "APIs Robustas"],
    },
    {
      icon: Database,
      title: "Bases de Dados",
      description: "Arquitetura e gestão de bases de dados escaláveis e seguras para os seus dados críticos.",
      features: ["Design de Esquemas", "Otimização", "Migração de Dados"],
    },
    {
      icon: Bot,
      title: "Automações com IA",
      description: "Automatize processos repetitivos e ganhe eficiência com soluções inteligentes de IA.",
      features: ["Automação de Processos", "Chatbots", "Análise Inteligente"],
    },
    {
      icon: Sparkles,
      title: "Agentes de IA",
      description: "Agentes autónomos que trabalham continuamente para otimizar e melhorar os seus processos.",
      features: ["Assistentes Virtuais", "Processamento de Dados", "Tomada de Decisões"],
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Os Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções tecnológicas completas para impulsionar o seu negócio para o futuro digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:animate-glow">
                    <Icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
