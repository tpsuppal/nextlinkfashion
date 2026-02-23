import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
    queryFn: async () => {
      const res = await fetch("/api/blog");
      if (!res.ok) throw new Error("Failed to fetch posts");
      return res.json();
    },
  });

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-accent/10 py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Industry Insights</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            News, trends, and expert perspectives from the forefront of global apparel manufacturing.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white border border-black/5 rounded-2xl p-8 animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="group flex flex-col bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-testid={`blog-post-${post.id}`}>
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <span className="text-accent font-semibold">{post.category}</span>
                      <span className="text-muted-foreground">&bull;</span>
                      <span className="text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      <Link href="#">{post.title}</Link>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5">
                      <span className="text-sm font-medium text-foreground">{post.readTime}</span>
                      <Link href="#" className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-1">
                        Read Article <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLineJoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No blog posts available yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
