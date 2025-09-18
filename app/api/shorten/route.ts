import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// Generate a random 6-character slug
function generateSlug(): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let result = ""
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

// Validate URL format
function isValidUrl(string: string): boolean {
  try {
    const url = new URL(string)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch (_) {
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    // Validate input
    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL is required" }, { status: 400 })
    }

    // Validate URL format
    if (!isValidUrl(url)) {
      return NextResponse.json({ error: "Invalid URL format" }, { status: 400 })
    }

    const supabase = await createClient()

    // Check if URL already exists
    const { data: existingUrl } = await supabase.from("urls").select("slug").eq("original_url", url).single()

    if (existingUrl) {
      return NextResponse.json({
        slug: existingUrl.slug,
        original_url: url,
        message: "URL already shortened",
      })
    }

    // Generate unique slug
    let slug = generateSlug()
    let attempts = 0
    const maxAttempts = 10

    while (attempts < maxAttempts) {
      const { data: existingSlug } = await supabase.from("urls").select("id").eq("slug", slug).single()

      if (!existingSlug) {
        break // Slug is unique
      }

      slug = generateSlug()
      attempts++
    }

    if (attempts >= maxAttempts) {
      return NextResponse.json({ error: "Failed to generate unique slug" }, { status: 500 })
    }

    // Insert new URL
    const { data, error } = await supabase
      .from("urls")
      .insert({
        original_url: url,
        slug: slug,
      })
      .select()
      .single()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to create short URL" }, { status: 500 })
    }

    return NextResponse.json({
      slug: data.slug,
      original_url: data.original_url,
      created_at: data.created_at,
    })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
