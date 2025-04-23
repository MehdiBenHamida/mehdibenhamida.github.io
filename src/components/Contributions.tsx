
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Contribution = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  stars?: number;
};

const contributions: Contribution[] = [
  {
    title: "React Component Library",
    description: "A collection of reusable React components built with TypeScript and styled with Tailwind CSS. Features 30+ components with comprehensive documentation and examples.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/johndoe/react-component-library",
    stars: 143
  },
  {
    title: "VS Code Extension",
    description: "A productivity-focused VS Code extension for React developers. Includes snippets, auto-completion, and debugging tools. Downloaded over 10,000 times.",
    tags: ["TypeScript", "VS Code API"],
    link: "https://github.com/johndoe/vscode-react-tools",
    stars: 89
  },
  {
    title: "GraphQL Schema Generator",
    description: "A CLI tool that generates GraphQL schemas from your database schema. Supports PostgreSQL, MySQL, and MongoDB.",
    tags: ["Node.js", "GraphQL", "CLI"],
    link: "https://github.com/johndoe/graphql-schema-gen",
    stars: 67
  },
  {
    title: "Markdown Blog Engine",
    description: "A lightweight, file-based blog engine that uses Markdown for content. Includes features like tags, categories, and RSS feeds.",
    tags: ["JavaScript", "Markdown", "Static Site"],
    link: "https://github.com/johndoe/markdown-blog",
    stars: 42
  }
];

const Contributions = () => {
  return (
    <section id="contributions" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <h2 className="section-heading">Open Source Contributions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {contributions.map((contribution, index) => (
            <Card key={index} className="neo-blur card-hover h-full flex flex-col">
              <CardHeader>
                <CardTitle>{contribution.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  {contribution.stars && (
                    <span className="flex items-center text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      {contribution.stars}
                    </span>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{contribution.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {contribution.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-primary/10 text-primary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <a href={contribution.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild>
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              View all repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
