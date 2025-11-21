import { Camera, Zap, BarChart3, Shield } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Camera,
      title: "Snap & Track",
      description:
        "Simply take a photo of your meal and let our AI instantly identify the food and calculate nutrition.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get detailed calorie, protein, carbs, and fat information in seconds. No manual entry required.",
      gradient: "from-pink-400 to-pink-600",
    },
    {
      icon: BarChart3,
      title: "Track Your Progress",
      description: "Monitor your daily intake with beautiful charts and insights to reach your health goals.",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data stays private and secure. We never share your information with third parties.",
      gradient: "from-indigo-400 to-indigo-600",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Everything you need to track your nutrition
          </h2>
          <p className="text-lg text-muted-foreground">
            Powered by advanced AI technology to make calorie tracking effortless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-3xl border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.gradient} text-white shadow-lg`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
