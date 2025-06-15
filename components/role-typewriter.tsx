"use client"

import { useState, useEffect } from "react"

const roles = ["Software Developer", "Full Stack Developer", "Frontend Developer", "Backend Developer"]

export default function RoleTypewriter() {
  const [displayText, setDisplayText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    // Current role we're typing/deleting
    const currentRole = roles[roleIndex]

    // Handle typing effect
    if (!isDeleting && displayText === currentRole) {
      // Finished typing, wait before deleting
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, 1500)
    } else if (isDeleting && displayText === "") {
      // Finished deleting, move to next role
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
      // Small pause before typing next word
      timer = setTimeout(() => {}, 500)
    } else {
      // Calculate typing/deleting speed
      const speed = isDeleting ? 50 : 100

      timer = setTimeout(() => {
        setDisplayText((prev) => {
          if (isDeleting) {
            // Delete a character
            return prev.substring(0, prev.length - 1)
          } else {
            // Add a character
            return currentRole.substring(0, prev.length + 1)
          }
        })
      }, speed)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  return (
    <div className="flex items-center h-full">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center">
        <span className="text-primary mr-2">I'm a</span>
        <span className="inline-block min-w-[240px]">
          {displayText}
          <span className="animate-blink ml-0.5 text-primary">|</span>
        </span>
      </h2>
    </div>
  )
}
