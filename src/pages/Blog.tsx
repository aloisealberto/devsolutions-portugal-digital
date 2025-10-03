import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogList from "@/components/blog/BlogList";
import InteractiveBackground from "@/components/InteractiveBackground";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog DevSoluctions - Tecnologia, IA e Crescimento Empresarial</title>
        <meta 
          name="description" 
          content="Acompanhe as últimas tendências em tecnologia, inteligência artificial e estratégias de crescimento empresarial. Insights baseados em Forbes, Business Insider e outras fontes de renome." 
        />
        <meta name="keywords" content="tecnologia, IA, inteligência artificial, crescimento empresarial, startups, transformação digital, Forbes, inovação" />
        <meta property="og:title" content="Blog DevSoluctions - Tecnologia e Inovação" />
        <meta property="og:description" content="Insights sobre tecnologia, IA e crescimento empresarial das principais fontes mundiais." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground relative">
        <InteractiveBackground />
        <div className="relative z-10">
          <Header />
          <main className="container mx-auto px-4 py-16">
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Blog DevSoluctions
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Insights sobre tecnologia, IA e crescimento empresarial das principais fontes mundiais
              </p>
            </header>
            <BlogList />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blog;
