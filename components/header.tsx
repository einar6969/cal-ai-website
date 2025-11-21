import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/kali-logo.png" alt="Kalí Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-2xl font-bold text-foreground">Kalí</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground/80 hover:text-primary font-medium transition-colors">
              Home
            </a>
            <a href="#features" className="text-foreground/80 hover:text-primary font-medium transition-colors">
              Features
            </a>
            <a href="#download" className="text-foreground/80 hover:text-primary font-medium transition-colors">
              Download
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="flex items-center gap-2 bg-primary text-white hover:bg-primary/90 shadow-md rounded-full px-6"
            >
              <Image src="/app-store-icon.png" alt="App Store" width={16} height={16} className="w-4 h-4" />
              <span>App Store</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
