import { Brain, Database, Clock, Search, BarChart3, Shield } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Deep Learning Classification',
    description: 'Transformer models for accurate taxonomic classification',
    color: 'text-ocean-600',
    bg: 'bg-ocean-50'
  },
  {
    icon: Search,
    title: 'Novel Taxa Discovery',
    description: 'Identify previously unknown species in deep-sea environments',
    color: 'text-teal-600',
    bg: 'bg-teal-50'
  },
  {
    icon: Clock,
    title: 'Optimized Workflows',
    description: 'Efficient pipeline design with parallel processing',
    color: 'text-coral-600',
    bg: 'bg-coral-50'
  },
  {
    icon: BarChart3,
    title: 'Abundance Estimation',
    description: 'Quantitative biodiversity metrics with confidence intervals',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    icon: Database,
    title: 'Minimal Database Reliance',
    description: 'Reduced dependency on incomplete reference databases',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  },
  {
    icon: Shield,
    title: 'Validated Results',
    description: 'High accuracy and reliability of taxonomic assignments',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-abyss-900 mb-4">
            AI-Driven Analysis
          </h2>
          <p className="text-xl text-abyss-600 max-w-3xl mx-auto">
            Advanced pipeline combining deep learning with biodiversity assessment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-8 hover:scale-105 transition-transform duration-300">
              <div className={`inline-flex p-3 rounded-lg ${feature.bg} mb-6`}>
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-abyss-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-abyss-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}