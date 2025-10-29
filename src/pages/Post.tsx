import { useParams, Link, Navigate } from "react-router-dom";
import { posts } from "@/data/posts";
import { Header, Footer, LikeButton, imageMap } from "@/components/BlogComponents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Instagram, ExternalLink } from "lucide-react";
import { format } from "date-fns";

const Post = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const imageSrc = imageMap[post.image] || post.image;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 max-w-3xl animate-fade-in">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8 font-sans"
          >
            <ArrowLeft className="h-4 w-4" />
            All Posts
          </Link>

          <div className="mb-8">
            <img
              src={imageSrc}
              alt={post.title}
              className="w-full h-96 object-cover rounded-sm mb-8"
            />
            
            <div className="flex items-center gap-4 mb-6">
              <time className="text-sm text-muted-foreground font-sans">
                {format(new Date(post.date), "MMMM d, yyyy")}
              </time>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-sans text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-foreground leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none font-serif">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <LikeButton postId={post.id} initialLikes={post.likes} />
              
              <div className="flex gap-3">
                {post.instagramUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-2 font-sans"
                  >
                    <a href={post.instagramUrl} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                      View on Instagram
                    </a>
                  </Button>
                )}
                {post.mediumUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="gap-2 font-sans"
                  >
                    <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View on Medium
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Post;
