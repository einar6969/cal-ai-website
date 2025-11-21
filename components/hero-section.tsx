import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-kali-gradient min-h-[90vh] flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm text-white shadow-sm">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 border border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 border border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 border border-white" />
              </div>
              <span className="font-medium">Loved by 5M+ users with</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                <span className="font-bold">4.9 rating</span>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-white drop-shadow-sm">
                Meet Kalí
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight text-white/90">
                Track your calories with just a picture
              </h2>
            </div>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl font-medium">
              Meet Kalí, the AI-powered app for easy calorie tracking. Snap a photo, scan a barcode, or describe your
              meal and get instant calorie and nutrient info.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 flex items-center gap-3 px-8 py-6 text-base shadow-lg border-0"
              >
                <Image src="/app-store-icon.png" alt="App Store" width={24} height={24} className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center gap-8">
            <div className="relative w-[280px] md:w-[320px] transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/iphone-15-pro-3.png"
                alt="Kalí app camera view"
                width={320}
                height={650}
                className="w-full h-auto drop-shadow-2xl"
                style={{ background: "transparent" }}
              />
            </div>
            <div className="relative w-[280px] md:w-[320px] transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/app-screenshot-meal.png"
                alt="Kalí app meal details"
                width={320}
                height={650}
                className="w-full h-auto drop-shadow-2xl"
                style={{ background: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
