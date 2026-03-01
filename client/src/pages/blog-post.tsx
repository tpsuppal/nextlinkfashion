import { Link, useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();

  const { data: post, isLoading, isError } = useQuery<BlogPost>({
    queryKey: ["/api/blog", id],
    queryFn: async () => {
      const res = await fetch(`/api/blog/${id}`);
      if (!res.ok) throw new Error("Failed to fetch post");
      return res.json();
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col w-full pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-12"></div>
            <div className="space-y-4">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="flex flex-col w-full pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">Sorry, we couldn't find this article.</p>
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            Back to Industry Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Hero */}
      <section className="bg-accent/10 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
            Back to Industry Insights
          </Link>
          <div className="flex items-center gap-4 mb-4 text-sm">
            <span className="text-accent font-semibold">{post.category}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">
              {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{post.readTime}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-medium border-l-4 border-accent pl-6">
            {post.excerpt}
          </p>
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            {post.content ? (
              post.content.split("\n").map((paragraph, index) =>
                paragraph.trim() ? (
                  <p key={index} className="mb-6 text-base leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ) : null
              )
            ) : (
              <p className="text-muted-foreground">Full article content coming soon.</p>
            )}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Ready to Partner With Us?</h3>
            <p className="text-muted-foreground mb-6">Discover how Next Link Fashion can bring your apparel collection to life — design to delivery, across 5 countries.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent transition-colors">
              Start a Conversation
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
