import { Dna, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-abyss-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="bg-teal-gradient p-2 rounded-lg">
              <Dna className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold gradient-text">OceanEYE</h3>
              <p className="text-xs text-abyss-400">SIH 2024 Project</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="/dashboard" className="text-abyss-300 hover:text-teal-400 transition-colors text-sm">
              Workspace
            </a>
            <a href="#" className="text-abyss-300 hover:text-teal-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-abyss-800 mt-8 pt-6 text-center">
          <p className="text-abyss-400 text-sm">
            © 2024 OceanEYE - Smart India Hackathon Project
          </p>
        </div>
      </div>
    </footer>
  )
}