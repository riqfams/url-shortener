import { redirect, notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function RedirectPage({ params }: PageProps) {
  const { slug } = await params

  // Validate slug format (6 characters, alphanumeric)
  if (!slug || slug.length !== 6 || !/^[a-zA-Z0-9]+$/.test(slug)) {
    notFound()
  }

  const supabase = await createClient()

  try {
    // Find the URL by slug
    const { data: urlData, error } = await supabase
      .from("urls")
      .select("original_url, click_count")
      .eq("slug", slug)
      .single()

    if (error || !urlData) {
      notFound()
    }

    // Increment click count
    await supabase
      .from("urls")
      .update({ click_count: (urlData.click_count || 0) + 1 })
      .eq("slug", slug)

    // Redirect to the original URL
    redirect(urlData.original_url)
  } catch (error) {
    console.error("Redirect error:", error)
    notFound()
  }
}

// Generate metadata for the redirect page
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params

  return {
    title: `Redirecting... | Shorto`,
    description: `Redirecting to the original URL for ${slug}`,
  }
}
