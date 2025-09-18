import { UrlShortenerForm } from "@/components/url-shortener-form"
import { Card, CardContent } from "@/components/ui/card"
import { Link, Zap, BarChart3 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">LinkShort</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#features" className="text-foreground/60 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Shorten Your Links, <span className="text-primary">Amplify Your Reach</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
              Transform long, unwieldy URLs into clean, shareable links. Perfect for social media, marketing campaigns,
              and professional communications.
            </p>
          </div>

          {/* URL Shortener Form */}
          <div className="w-full max-w-2xl">
            <UrlShortenerForm />
          </div>

          <p className="text-sm text-muted-foreground">No registration required • Free to use • Instant results</p>
        </div>

        {/* Features Section */}
        <section id="features" className="mt-24">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose LinkShort?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, fast, and reliable URL shortening with powerful features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Generate shortened URLs instantly with our optimized infrastructure. No waiting, no delays.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <Link className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Clean Links</h3>
                <p className="text-muted-foreground">
                  Get beautiful, memorable short links that are perfect for sharing across all platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Click Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor your link performance with built-in analytics. See how many clicks your links receive.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-24 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Simple. Powerful. Free.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              LinkShort is a modern URL shortening service built for today's digital world. Whether you're sharing links
              on social media, in emails, or in presentations, our clean and reliable short links help you communicate
              more effectively.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Built with modern web technologies and designed for speed, LinkShort provides instant URL shortening
              without the complexity of traditional services.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-semibold">LinkShort</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
