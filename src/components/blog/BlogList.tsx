import { blogPosts } from "@/data/blogPosts";
import BlogPostCard from "./BlogPostCard";

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map(post => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
