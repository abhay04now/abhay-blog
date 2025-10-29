import { Search, Instagram, Linkedin, Moon, Sun, Heart, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Post } from "@/data/posts";
import { format } from "date-fns";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";

const imageMap: Record<string, string> = {
  "/src/assets/post-1.jpg": post1,
  "/src/assets/post-2.jpg": post2,
  "/src/assets/post-3.jpg": post3,
  "/src/assets/post-4.jpg": post4,
};

// Theme Toggle Component
export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  );
};

// Header Component
interface HeaderProps {
  onSearch?: (query: string) => void;
}

export const Header = ({ onSearch }: HeaderProps) => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="group">
              <h1 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight text-foreground hover:text-accent transition-colors">
                Abhay Anand
              </h1>
              <p className="text-sm text-muted-foreground font-serif italic">Words That Stay</p>
            </Link>
            
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/abhay.anand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://medium.com/@abhay.anand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
                aria-label="Medium"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/abhay-anand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <ThemeToggle />
            </div>
          </div>
          
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search posts..."
              className="pl-10 bg-secondary/50 border-border focus-visible:ring-accent"
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="border-t border-border mt-24 py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/abhay.anand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://medium.com/@abhay.anand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Medium"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/abhay-anand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground font-serif">
            © {new Date().getFullYear()} Abhay Anand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// PostCard Component
interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const imageSrc = imageMap[post.image] || post.image;
  
  return (
    <article className="group animate-fade-in">
      <Link to={`/post/${post.slug}`} className="block">
        <div className="overflow-hidden rounded-sm mb-4 bg-secondary/30">
          <img
            src={imageSrc}
            alt={post.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <time className="text-sm text-muted-foreground font-sans">
          {format(new Date(post.date), "MMMM d, yyyy")}
        </time>
        
        <h2 className="text-2xl font-sans font-semibold mt-2 mb-3 text-foreground group-hover:text-accent transition-colors">
          {post.title}
        </h2>
        
        <p className="text-foreground/80 font-serif leading-relaxed mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-sans text-xs hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <span className="text-sm font-sans text-accent hover:underline">
          Read More →
        </span>
      </Link>
    </article>
  );
};

// LikeButton Component
interface LikeButtonProps {
  postId: string;
  initialLikes: number;
}

export const LikeButton = ({ postId, initialLikes }: LikeButtonProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
    if (likedPosts[postId]) {
      setIsLiked(true);
    }
    
    const savedLikes = localStorage.getItem(`likes-${postId}`);
    if (savedLikes) {
      setLikes(parseInt(savedLikes));
    }
  }, [postId]);

  const handleLike = () => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
    
    if (isLiked) {
      delete likedPosts[postId];
      setLikes(likes - 1);
      setIsLiked(false);
      localStorage.setItem(`likes-${postId}`, (likes - 1).toString());
    } else {
      likedPosts[postId] = true;
      setLikes(likes + 1);
      setIsLiked(true);
      localStorage.setItem(`likes-${postId}`, (likes + 1).toString());
    }
    
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLike}
      className={`gap-2 ${isLiked ? "text-accent" : "text-muted-foreground"} hover:text-accent transition-colors`}
    >
      <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
      <span className="font-sans">{likes}</span>
    </Button>
  );
};

export { imageMap };
