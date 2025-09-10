import { Upload, Zap, Brain, Eye, Download } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'eDNA Upload',
    description: 'Upload FASTA/FASTQ files with deep-sea eDNA sequences',
    details: 'Supports FASTA, FASTQ, Multi-FASTA formats'
  },
  {
    icon: Zap,
    title: 'BERTax Classification',
    description: 'Fast taxonomic classification using BERTax model',
    details: 'Rapid species identification and taxonomic assignment'
  },
  {
    icon: Brain,
    title: 'DNABERT-S Novelty Detection',
    description: 'Deep-sea creature novelty detection with DNABERT-S',
    details: 'Specialized model for discovering unknown deep-sea species'
  },
  {
    icon: Eye,
    title: 'Confidence Analysis',
    description: 'Statistical confidence scoring and validation',
    details: 'Confidence scores and biodiversity metrics'
  },
  {
    icon: Download,
    title: 'Results & Insights',
    description: 'Comprehensive reports with novel species discoveries',
    details: 'Deep-sea biodiversity analysis with visualizations'
  }
]

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-24 bg-gradient-to-br from-slate-50 to-ocean-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-abyss-900 mb-4">
            Analysis Pipeline
          </h2>
          <p className="text-xl text-abyss-600 max-w-3xl mx-auto">
            From raw eDNA sequences to biodiversity insights in four steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-teal-gradient p-3 rounded-lg">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-abyss-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-abyss-600 mb-2">
                    {step.description}
                  </p>
                  <p className="text-sm text-abyss-500">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="card p-8 bg-gradient-to-br from-ocean-50 to-teal-50 border-ocean-200">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-abyss-700">Analysis Progress</span>
                <span className="text-sm text-ocean-600">75% Complete</span>
              </div>
              <div className="w-full bg-abyss-200 rounded-full h-2">
                <div className="bg-teal-gradient h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-abyss-200">
                <span className="text-sm text-abyss-700">eDNA Preprocessing</span>
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">Complete</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-abyss-200">
                <span className="text-sm text-abyss-700">BERTax Classification</span>
                <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">Complete</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-abyss-200">
                <span className="text-sm text-abyss-700">DNABERT-S Novelty Detection</span>
                <span className="text-xs bg-ocean-100 text-ocean-800 px-2 py-1 rounded-full">Processing</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-abyss-200">
                <span className="text-sm text-abyss-700">Deep-Sea Report Generation</span>
                <span className="text-xs bg-abyss-100 text-abyss-600 px-2 py-1 rounded-full">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}