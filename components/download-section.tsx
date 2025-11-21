import Image from "next/image"
import { Button } from "@/components/ui/button"

export function DownloadSection() {
  return (
    <section id="download" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-kali-gradient rounded-[3rem] p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-16 -mb-16" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-white">
                Start your health journey today
              </h2>
              <p className="text-lg text-white/90 leading-relaxed font-medium">
                Join millions of users who trust Kalí to help them achieve their nutrition goals. Download now and get
                started for free.
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
            <div className="flex justify-center">
              <div className="relative w-[240px] md:w-[280px]">
                <Image
                  src="/kali-logo.png"
                  alt="Kalí mascot"
                  width={280}
                  height={280}
                  className="w-full h-auto animate-bounce-slow drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
