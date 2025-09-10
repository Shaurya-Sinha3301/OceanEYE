import { ArrowRight, Dna } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-abyss-gradient text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ocean-500/10 rounded-full blur-3xl animate-bounce-slow" />
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-coral-500/10 rounded-full blur-2xl animate-float" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="inline-flex items-center bg-ocean-500/20 border border-ocean-400/30 rounded-full px-4 py-2 mb-8 backdrop-blur-sm animate-fade-in">
            <Dna className="h-4 w-4 mr-2 text-teal-300 animate-pulse" />
            <span className="text-sm text-ocean-200">OceanEYE - SIH 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up" style={{ animationFillMode: 'forwards' }}>
            Deep Sea to
            <span className="block bg-gradient-to-r from-teal-400 via-ocean-400 to-coral-400 bg-clip-text text-transparent animate-gradient bg-300%">
              Discovery
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-abyss-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1" style={{ animationFillMode: 'forwards' }}>
            AI-powered eDNA analysis for identifying marine species and assessing deep-sea biodiversity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up stagger-2" style={{ animationFillMode: 'forwards' }}>
            <a href="/dashboard" className="btn-primary flex items-center group glow hover:scale-105 transition-transform">
              Start Analysis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="relative mt-16 animate-slide-up stagger-3">
          <div className="card-glass border-abyss-700 p-6 max-w-4xl mx-auto floating">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-coral-500 rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse stagger-1" />
                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse stagger-2" />
              </div>
              <span className="text-sm text-abyss-400">DNABERT-2 Analysis</span>
            </div>
            
            <div className="bg-abyss-900/80 backdrop-blur-sm rounded-lg p-4 font-mono text-sm">
              <div className="text-teal-400 mb-2 animate-fade-in">
                # Deep-Sea eDNA Analysis
              </div>
              <div className="text-ocean-400 mb-1 animate-fade-in stagger-1">
                &gt;Sample_001_sequence_1
              </div>
              <div className="text-teal-300 break-all animate-fade-in stagger-2">
                ATGCGATCGATCGATCGATCGATCGATCGATCGATC
              </div>
              <div className="text-coral-400 mt-2 flex items-center animate-fade-in stagger-3">
                <span className="mr-2 animate-spin">⟳</span>
                Processing with AI model...
              </div>
              <div className="text-teal-400 animate-fade-in stagger-4">
                ✓ Novel species identified: 3
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  )
}