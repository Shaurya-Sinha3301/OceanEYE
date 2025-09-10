'use client'

import { useState } from 'react'
import { Menu, X, Dna } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-ocean-gradient p-2 rounded-lg">
              <Dna className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">OceanEYE</h1>
              <p className="text-xs text-abyss-600">eDNA Analysis Platform</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-abyss-700 hover:text-teal-600 transition-colors font-medium">Features</a>
            <a href="#pipeline" className="text-abyss-700 hover:text-teal-600 transition-colors font-medium">Pipeline</a>
            <a href="#analytics" className="text-abyss-700 hover:text-teal-600 transition-colors font-medium">Analytics</a>
            <a href="#projects" className="text-abyss-700 hover:text-teal-600 transition-colors font-medium">Projects</a>
            <a href="/dashboard" className="btn-primary text-sm px-6 py-2">Workspace</a>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-abyss-700 hover:text-teal-600 transition-colors">Features</a>
              <a href="#pipeline" className="text-abyss-700 hover:text-teal-600 transition-colors">Pipeline</a>
              <a href="#analytics" className="text-abyss-700 hover:text-teal-600 transition-colors">Analytics</a>
              <a href="#projects" className="text-abyss-700 hover:text-teal-600 transition-colors">Projects</a>
              <a href="/dashboard" className="btn-primary w-full">Workspace</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}