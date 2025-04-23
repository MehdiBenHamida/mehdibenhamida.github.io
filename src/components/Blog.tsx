
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Building Accessible React Applications",
    excerpt: "A deep dive into creating truly accessible applications with React. Learn about ARIA attributes, keyboard navigation, and screen reader support.",
    date: "May 10, 2023",
    tags: ["React", "Accessibility", "Frontend"],
    readTime: "8 min read",
    slug: "building-accessible-react-applications"
  },
  {
    title: "State Management in 2023: Beyond Redux",
    excerpt: "Exploring modern state management solutions in the React ecosystem. From Context API to Zustand, Jotai, and Recoil.",
    date: "April 3, 2023",
    tags: ["React", "State Management", "JavaScript"],
    readTime: "12 min read",
    slug: "state-management-in-2023"
  },
  {
    title: "The Ultimate Guide to TypeScript Generics",
    excerpt: "Master TypeScript generics with practical examples. Learn how to write more flexible and reusable code with advanced type definitions.",
    date: "March 15, 2023",
    tags: ["TypeScript", "JavaScript", "Web Development"],
    readTime: "10 min read",
    slug: "typescript-generics-guide"
  },
  {
    title: "Optimizing React Performance",
    excerpt: "Practical techniques to improve your React application's performance. From component memoization to code splitting and lazy loading.",
    date: "February 28, 2023",
    tags: ["React", "Performance", "Optimization"],
    readTime: "6 min read",
    slug: "optimizing-react-performance"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container">
        <h2 className="section-heading">Recent Blog Posts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="neo-blur card-hover h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </div>
                <CardDescription className="flex justify-between items-center mt-2">
                  <span>{post.date}</span>
                  <span className="text-sm">{post.readTime}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-accent/10 text-accent-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <a href={`/blog/${post.slug}`}>Read Article</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <a href="/blog">View All Posts</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
