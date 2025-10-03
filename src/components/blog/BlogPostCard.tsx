import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-2xl font-bold leading-tight hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('pt-PT', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={`/blog/${post.slug}`} className="w-full">
          <Button variant="outline" className="w-full group">
            Ler mais
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
