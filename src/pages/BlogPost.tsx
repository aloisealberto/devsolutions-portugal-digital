import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground relative">
        <InteractiveBackground />
        <div className="relative z-10">
          <Header />
          <main className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
            <Link to="/blog">
              <Button>Voltar ao Blog</Button>
            </Link>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Blog DevSoluctions</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:tag" content={post.keywords.join(", ")} />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground relative">
        <InteractiveBackground />
        <div className="relative z-10">
          <Header />
          <article className="container mx-auto px-4 py-16 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Link>
            
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('pt-PT', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                <span>•</span>
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              {post.content.map((section, index) => (
                <section key={index} className="mb-8">
                  {section.heading && (
                    <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                  )}
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4 text-foreground/90 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            <footer className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-4">Fontes</h3>
              <ul className="space-y-2">
                {post.sources.map((source, index) => (
                  <li key={index}>
                    <a 
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {source.title} - {source.publication}
                    </a>
                  </li>
                ))}
              </ul>
            </footer>
          </article>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
