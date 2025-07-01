"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Search, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useBlogs, useBlogCategories } from "@/lib/tanstack/queries"

// Static fallback data
const staticBlogPosts = [
  {
    id: "modern-react-patterns",
    title: "Modern React Patterns for Cleaner Code",
    excerpt: "Exploring advanced patterns to improve your React components and application architecture.",
    date: "May 10, 2024",
    category: "React",
    featuredImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "nextjs-performance",
    title: "Optimizing Next.js Applications for Performance",
    excerpt: "Practical techniques to improve loading times and user experience in your Next.js projects.",
    date: "April 25, 2024",
    category: "Next.js",
    // No featured image
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Applications",
    excerpt: "How to leverage TypeScript's type system to build maintainable and scalable applications.",
    date: "April 12, 2024",
    category: "TypeScript",
    featuredImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "state-management",
    title: "Modern State Management in React Applications",
    excerpt: "Comparing different state management solutions and when to use each one.",
    date: "March 28, 2024",
    category: "React",
    // No featured image
  },
  {
    id: "css-architecture",
    title: "Building a Scalable CSS Architecture",
    excerpt: "Strategies for organizing your CSS to maintain consistency and avoid specificity issues.",
    date: "March 15, 2024",
    category: "CSS",
    featuredImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "api-design",
    title: "RESTful API Design Principles",
    excerpt: "Best practices for designing clean, intuitive, and developer-friendly APIs.",
    date: "February 28, 2024",
    category: "Backend",
    featuredImage: "/placeholder.svg?height=400&width=600",
  },
]

// Static fallback categories
const staticCategories = ["All", "React", "Next.js", "TypeScript", "CSS", "Backend"]

// Function to get categories from API or use static fallback
const getCategories = (categoriesData: any) => {
  if (categoriesData?.data && categoriesData.data.length > 0) {
    // Add "All" category to the beginning of the list
    return ["All", ...categoriesData.data.map((category: any) => category.name)]
  }
  return staticCategories
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [blogPosts, setBlogPosts] = useState(staticBlogPosts)
  
  // Fetch blogs using TanStack Query
  const { data: blogsData, isLoading: isLoadingBlogs, isError: isErrorBlogs } = useBlogs()
  const { data: categoriesData, isLoading: isLoadingCategories } = useBlogCategories()
  
  // Use effect to update blogs when data is fetched
  useEffect(() => {
    if (blogsData?.data) {
      console.log('Blogs data from API:', blogsData.data)
      // Uncomment the line below to use API data instead of static data
      // setBlogPosts(blogsData.data)
    }
  }, [blogsData])

  const filteredPosts = blogPosts
    .filter((post) => activeCategory === "All" || post.category === activeCategory)
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
    )

  return (
    <main className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
      <div className="container mx-auto max-w-5xl">
        <Button asChild variant="ghost" size="sm" className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">
            INSIGHTS
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts, insights, and tutorials on web development, programming, and technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {getCategories(categoriesData).map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {isLoadingBlogs ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Loading blog posts...</p>
          </div>
        ) : isErrorBlogs ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Error loading blog posts. Please try again later.</p>
            <Button onClick={() => window.location.reload()}>Retry</Button>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid gap-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:border-primary/50 transition-colors duration-300">
                  <div className="grid md:grid-cols-3 gap-6">
                    {post.featuredImage ? (
                      <div className="relative aspect-video md:aspect-square overflow-hidden">
                        <Image
                          src={post.featuredImage || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video md:aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <div className="flex flex-col items-center text-muted-foreground">
                          <ImageIcon className="h-10 w-10 mb-2 opacity-20" />
                          <span className="text-sm">No featured image</span>
                        </div>
                      </div>
                    )}

                    <div className="md:col-span-2 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <Link href={`/blog/${post.id}`} className="group">
                        <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <Button asChild variant="outline" className="rounded-full">
                        <Link href={`/blog/${post.id}`}>Read Article</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No articles found matching your search criteria.</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("All")
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </main>
  )
}
