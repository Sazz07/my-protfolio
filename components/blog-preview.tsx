"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, ImageIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const blogPosts = [
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
    // No featured image for this post
  },
]

export default function BlogPreview() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full flex flex-col overflow-hidden group hover:border-primary/50 transition-colors duration-300">
            {post.featuredImage ? (
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <div className="flex flex-col items-center text-muted-foreground">
                  <ImageIcon className="h-10 w-10 mb-2 opacity-20" />
                  <span className="text-sm">No featured image</span>
                </div>
              </div>
            )}

            <CardContent className="p-6 flex-grow">
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="secondary">{post.category}</Badge>
                <div className="text-sm text-muted-foreground flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {post.date}
                </div>
              </div>
              <Link href={`/blog/${post.id}`} className="block group">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
              </Link>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Link href={`/blog/${post.id}`} className="text-primary font-medium flex items-center hover:underline">
                Read Article
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
