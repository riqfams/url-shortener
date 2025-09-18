import { UrlShortenerForm } from "@/components/url-shortener-form"
import { Card, CardContent } from "@/components/ui/card"
import { Link, Zap, BarChart3 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-accent" />
                <span className="font-semibold text-xl">Shorto</span>
              </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a href="#features" className="text-foreground/70 hover:text-accent transition-colors">
                  Features
                </a>
                <a href="#about" className="text-foreground/70 hover:text-accent transition-colors">
                  About
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-12 max-w-5xl mx-auto hero-gradient rounded-3xl p-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Shorten Your Links,{" "}
              <span className="text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                Amplify Your Reach
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-3xl leading-relaxed">
              Transform long, unwieldy URLs into clean, shareable links. Perfect for social media, marketing campaigns,
              and professional communications.
            </p>
          </div>

          {/* URL Shortener Form */}
          <div className="w-full max-w-3xl">
            <UrlShortenerForm />
          </div>

          <p className="text-sm text-muted-foreground">No registration required • Free to use • Instant results</p>
        </div>

        {/* Features Section */}
        <section id="features" className="mt-32">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose Shorto?</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Simple, fast, and reliable URL shortening with powerful features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 glow-teal">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">Lightning Fast</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Generate shortened URLs instantly with our optimized infrastructure. No waiting, no delays.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 glow-teal">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Link className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">Clean Links</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Get beautiful, memorable short links that are perfect for sharing across all platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 glow-teal">
              <CardContent className="space-y-6">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto">
                  <BarChart3 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">Click Tracking</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Monitor your link performance with built-in analytics. See how many clicks your links receive.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mt-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Simple. Powerful. Free.</h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Shorto is a modern URL shortening service built for today's digital world. Whether you're sharing links
                on social media, in emails, or in presentations, our clean and reliable short links help you communicate
                more effectively.
              </p>
              <p>
                Built with modern web technologies and designed for speed, Shorto provides instant URL shortening
                without the complexity of traditional services.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-32 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Zap className="h-6 w-6 text-accent" />
              <span className="font-semibold text-xl">Shorto</span>
            </div>
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
