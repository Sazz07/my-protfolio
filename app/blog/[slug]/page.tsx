"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// In a real application, you would fetch this data from an API or CMS
const blogPosts = {
  "modern-react-patterns": {
    title: "Modern React Patterns for Cleaner Code",
    date: "May 10, 2024",
    category: "React",
    readTime: "8 min read",
    featuredImage: "/placeholder.svg?height=600&width=1200",
    images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    content: `
      <p>React has evolved significantly since its inception, and with it, patterns for writing clean, maintainable code have emerged. In this article, we'll explore some modern React patterns that can help you write more elegant and maintainable code.</p>
      
      <h2>Compound Components</h2>
      <p>Compound components are a pattern where components are used together such that they share an implicit state that lets them communicate with each other in the background.</p>
      <p>This pattern is particularly useful when you have components that are tightly coupled in terms of functionality but need to be flexible in terms of composition.</p>
      
      <h2>Custom Hooks</h2>
      <p>Custom hooks allow you to extract component logic into reusable functions. This pattern has revolutionized how we share stateful logic between components without introducing additional component hierarchy.</p>
      <p>By creating custom hooks, you can keep your components clean and focused on rendering, while complex logic is abstracted away into reusable functions.</p>
      
      <h2>Context + Reducer Pattern</h2>
      <p>Combining React Context with useReducer is a powerful pattern for managing complex state logic in larger applications. This pattern provides a lightweight alternative to external state management libraries for many use cases.</p>
      <p>The Context + Reducer pattern allows you to manage state in a predictable way, similar to Redux, but using only built-in React features.</p>
      
      <h2>Render Props</h2>
      <p>The render props pattern involves passing a function as a prop to a component, which the component then calls to render something. This pattern provides a flexible way to share code between components.</p>
      <p>While custom hooks have replaced many use cases for render props, this pattern is still valuable in certain scenarios, particularly when you need more control over what gets rendered.</p>
      
      <h2>Conclusion</h2>
      <p>By leveraging these modern React patterns, you can write more maintainable, reusable, and elegant code. Each pattern has its strengths and appropriate use cases, so understanding when to apply each one is key to becoming a more effective React developer.</p>
    `,
    relatedPosts: ["state-management", "nextjs-performance"],
  },
  "nextjs-performance": {
    title: "Optimizing Next.js Applications for Performance",
    date: "April 25, 2024",
    category: "Next.js",
    readTime: "10 min read",
    // No featured image
    content: `
      <p>Next.js provides an excellent foundation for building performant web applications, but there are always opportunities to optimize further. In this article, we'll explore practical techniques to improve loading times and user experience in your Next.js projects.</p>
      
      <h2>Image Optimization</h2>
      <p>Next.js provides built-in image optimization through the Image component. By using this component, you can automatically optimize images for different device sizes, formats, and loading strategies.</p>
      <p>Properly configured images can significantly reduce page load times and improve Core Web Vitals metrics like Largest Contentful Paint (LCP).</p>
      
      <h2>Code Splitting</h2>
      <p>Next.js automatically code-splits your JavaScript bundles at the page level. However, you can further optimize by using dynamic imports for components that aren't immediately needed.</p>
      <p>This technique is particularly useful for heavy components that aren't visible on initial load, such as modals, complex forms, or below-the-fold content.</p>
      
      <h2>Server Components</h2>
      <p>With the App Router, Next.js introduced React Server Components. These components render on the server, reducing the JavaScript sent to the client and improving performance, especially for data-fetching components.</p>
      <p>By strategically using Server Components for data-heavy parts of your application, you can significantly reduce the client-side JavaScript bundle.</p>
      
      <h2>Caching Strategies</h2>
      <p>Next.js offers various caching mechanisms, including static generation, incremental static regeneration, and dynamic rendering. Choosing the right caching strategy for each page can dramatically improve performance.</p>
      <p>Understanding when to use each approach based on your content's update frequency and user interaction patterns is key to optimizing performance.</p>
      
      <h2>Conclusion</h2>
      <p>Performance optimization in Next.js is an ongoing process that requires attention to various aspects of your application. By implementing these techniques, you can create faster, more responsive applications that provide a better user experience and potentially higher conversion rates.</p>
    `,
    relatedPosts: ["modern-react-patterns", "typescript-best-practices"],
  },
  "typescript-best-practices": {
    title: "TypeScript Best Practices for Large Applications",
    date: "April 12, 2024",
    category: "TypeScript",
    readTime: "12 min read",
    featuredImage: "/placeholder.svg?height=600&width=1200",
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    content: `
      <p>TypeScript has become the standard for building large-scale JavaScript applications, providing type safety and improved developer experience. In this article, we'll explore best practices for using TypeScript in large applications.</p>
      
      <h2>Strict Type Checking</h2>
      <p>Enable strict type checking in your tsconfig.json to catch more potential issues at compile time. This includes strictNullChecks, noImplicitAny, and other strict flags that help prevent common runtime errors.</p>
      
      <h2>Type Organization</h2>
      <p>Organize your types in a way that promotes reusability and maintainability. Consider creating dedicated type files for complex domains and using namespaces or modules to group related types.</p>
      
      <h2>Discriminated Unions</h2>
      <p>Use discriminated unions (also known as tagged unions) to model complex state or data structures. This pattern allows TypeScript to narrow down types based on a common discriminant property.</p>
      
      <h2>Utility Types</h2>
      <p>Leverage TypeScript's built-in utility types like Partial, Pick, Omit, and Record to create derived types without duplicating type definitions. These utilities help keep your type system DRY and maintainable.</p>
      
      <h2>Generic Components</h2>
      <p>Create generic components and functions when you need to work with different types while maintaining type safety. Generics allow you to create reusable code that works with a variety of types.</p>
      
      <h2>Conclusion</h2>
      <p>By following these best practices, you can leverage TypeScript's full potential to build robust, maintainable applications. The initial investment in proper typing pays off in reduced bugs, improved code quality, and better developer experience.</p>
    `,
    relatedPosts: ["nextjs-performance", "state-management"],
  },
  "state-management": {
    title: "Modern State Management in React Applications",
    date: "March 28, 2024",
    category: "React",
    readTime: "9 min read",
    featuredImage: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>State management is a critical aspect of React application development. With so many options available, it can be challenging to choose the right approach for your project. In this article, we'll compare different state management solutions and discuss when to use each one.</p>
      
      <h2>Local Component State</h2>
      <p>React's built-in useState hook is perfect for managing component-specific state that doesn't need to be shared. It's simple, efficient, and often all you need for many components.</p>
      
      <h2>Context API</h2>
      <p>React's Context API provides a way to share state across components without prop drilling. It's ideal for global state that changes infrequently, such as theme, authentication, or user preferences.</p>
      
      <h2>Redux and Redux Toolkit</h2>
      <p>Redux provides a predictable state container with a single source of truth. Redux Toolkit simplifies Redux usage with utilities for common patterns. It's well-suited for complex applications with extensive state interactions.</p>
      
      <h2>Zustand</h2>
      <p>Zustand is a lightweight state management library that uses hooks. It offers a simpler API than Redux while maintaining many of its benefits. It's great for medium-sized applications that need global state without the Redux boilerplate.</p>
      
      <h2>Jotai and Recoil</h2>
      <p>Jotai and Recoil take an atomic approach to state management, allowing you to create small, reusable pieces of state. They're excellent for applications with complex, interdependent state that would be difficult to model in a single store.</p>
      
      <h2>Conclusion</h2>
      <p>There's no one-size-fits-all solution for state management in React. The best approach depends on your application's size, complexity, and specific requirements. Start simple and add complexity only when needed.</p>
    `,
    relatedPosts: ["modern-react-patterns", "typescript-best-practices"],
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
      <div className="container mx-auto max-w-4xl">
        <Button asChild variant="ghost" size="sm" className="mb-4">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm"
        >
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>

          {/* Featured Image (if available) */}
          {post.featuredImage && (
            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.featuredImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article Content */}
          <div
            className="prose prose-slate dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Additional Images Gallery (if available) */}
          {post.images && post.images.length > 0 && (
            <div className="mt-8 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {post.images.map((image, index) => (
                  <div key={index} className="relative aspect-video rounded-lg overflow-hidden border">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${post.title} image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {post.relatedPosts.map((relatedSlug) => {
                  const relatedPost = blogPosts[relatedSlug as keyof typeof blogPosts]
                  if (!relatedPost) return null

                  return (
                    <Link key={relatedSlug} href={`/blog/${relatedSlug}`} className="group">
                      <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                        <Badge variant="secondary" className="mb-2">
                          {relatedPost.category}
                        </Badge>
                        <h4 className="font-medium group-hover:text-primary transition-colors">{relatedPost.title}</h4>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </motion.article>
      </div>
    </main>
  )
}
