import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Send } from "lucide-react";

const BudgetForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country_code: "+351",
    company: "",
    service_type: "",
    description: "",
  });

  const countryCodes = [
    { code: "+351", country: "Portugal" },
    { code: "+55", country: "Brasil" },
    { code: "+244", country: "Angola" },
    { code: "+238", country: "Cabo Verde" },
    { code: "+258", country: "Moçambique" },
    { code: "+34", country: "Espanha" },
    { code: "+33", country: "França" },
    { code: "+44", country: "Reino Unido" },
    { code: "+1", country: "EUA/Canadá" },
    { code: "+49", country: "Alemanha" },
  ];

  const serviceTypes = [
    "Desenvolvimento de Software",
    "Base de Dados",
    "Automação com IA",
    "Agentes de IA",
    "Consultoria Tecnológica",
    "Outro",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service_type || !formData.description) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.from("budget_requests").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country_code: formData.country_code,
          company: formData.company || null,
          service_type: formData.service_type,
          description: formData.description,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Orçamento enviado!",
        description: "Entraremos em contacto em breve. Obrigado!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        country_code: "+351",
        company: "",
        service_type: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting budget:", error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="orcamento" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-accent rounded-full blur-3xl top-0 left-0 animate-float"></div>
        <div className="absolute w-96 h-96 bg-primary rounded-full blur-3xl bottom-0 right-0 animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Solicite o Seu Orçamento
            </h2>
            <p className="text-xl text-muted-foreground">
              Descreva o seu projeto e entraremos em contacto em breve
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Nome Completo *</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="O seu nome"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">País</label>
                <Select value={formData.country_code} onValueChange={(value) => setFormData({ ...formData, country_code: value })}>
                  <SelectTrigger className="bg-background/50 border-border focus:border-primary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border max-h-64">
                    {countryCodes.map((item) => (
                      <SelectItem key={item.code} value={item.code}>
                        {item.country} ({item.code})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Telefone (WhatsApp) *</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="912796600"
                  required
                  className="bg-background/50 border-border focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Empresa (Opcional)</label>
              <Input
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Nome da sua empresa"
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Tipo de Serviço *</label>
              <Select value={formData.service_type} onValueChange={(value) => setFormData({ ...formData, service_type: value })}>
                <SelectTrigger className="bg-background/50 border-border focus:border-primary">
                  <SelectValue placeholder="Selecione um serviço" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {serviceTypes.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Descreva o Seu Projeto *</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Descreva em detalhe o que necessita. Quanto mais informação fornecer, melhor conseguiremos ajudá-lo."
                rows={6}
                required
                className="bg-background/50 border-border focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity text-lg py-6"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  A enviar...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Pedido de Orçamento
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BudgetForm;
