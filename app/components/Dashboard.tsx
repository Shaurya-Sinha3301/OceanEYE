'use client'

import { useState, useEffect } from 'react'
import { 
  Upload, 
  Play, 
  Pause, 
  RotateCcw, 
  Download, 
  Eye, 
  Zap, 
  Brain, 
  Search,
  FileText,
  BarChart3,
  Settings,
  Bell,
  User,
  ChevronDown,
  Activity,
  TrendingUp,
  Database,
  Microscope,
  Waves,
  Fish
} from 'lucide-react'

// Sample data for the dashboard
const recentAnalyses = [
  { id: 1, name: 'Mariana Trench Sample A1', status: 'completed', species: 47, novel: 8, confidence: 94 },
  { id: 2, name: 'Abyssal Plain B2', status: 'processing', species: 23, novel: 3, confidence: 89 },
  { id: 3, name: 'Hadal Zone C3', status: 'queued', species: 0, novel: 0, confidence: 0 },
  { id: 4, name: 'Deep Trench D4', status: 'completed', species: 62, novel: 12, confidence: 96 }
]

const pipelineSteps = [
  { 
    name: 'Data Upload', 
    status: 'completed', 
    time: '2.3s',
    description: 'eDNA sequences uploaded and validated'
  },
  { 
    name: 'BERTax Classification', 
    status: 'completed', 
    time: '45.2s',
    description: 'Fast taxonomic classification using BERTax model'
  },
  { 
    name: 'DNABERT-S Novelty Detection', 
    status: 'processing', 
    time: '127.8s',
    description: 'Deep-sea creature novelty detection with DNABERT-S'
  },
  { 
    name: 'Confidence Scoring', 
    status: 'pending', 
    time: '--',
    description: 'Statistical confidence analysis'
  },
  { 
    name: 'Report Generation', 
    status: 'pending', 
    time: '--',
    description: 'Comprehensive analysis report'
  }
]

const liveMetrics = {
  totalSamples: 1247,
  speciesIdentified: 3892,
  novelSpecies: 156,
  avgConfidence: 94.2,
  processingTime: 89.3,
  activeAnalyses: 7
}

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedSample, setSelectedSample] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleStartAnalysis = () => {
    setIsProcessing(true)
    // Simulate processing
    setTimeout(() => setIsProcessing(false), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-white to-marine-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-ocean-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Waves className="h-8 w-8 text-ocean-600" />
                <h1 className="text-2xl font-bold gradient-text">OceanEYE Dashboard</h1>
              </div>
              <div className="hidden md:flex items-center space-x-1 text-sm text-abyss-600">
                <span>{currentTime.toLocaleDateString()}</span>
                <span>•</span>
                <span>{currentTime.toLocaleTimeString()}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-abyss-600 hover:text-ocean-600 hover:bg-ocean-50 rounded-lg transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 text-abyss-600 hover:text-ocean-600 hover:bg-ocean-50 rounded-lg transition-colors">
                <Settings className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-2 bg-ocean-50 rounded-lg px-3 py-2">
                <User className="h-5 w-5 text-ocean-600" />
                <span className="text-sm font-medium text-abyss-900">Dr. Marine</span>
                <ChevronDown className="h-4 w-4 text-abyss-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Live Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-abyss-600">Total Samples</p>
                <p className="text-2xl font-bold text-ocean-600">{liveMetrics.totalSamples.toLocaleString()}</p>
              </div>
              <Database className="h-8 w-8 text-ocean-400" />
            </div>
          </div>
          
          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-abyss-600">Species ID'd</p>
                <p className="text-2xl font-bold text-teal-600">{liveMetrics.speciesIdentified.toLocaleString()}</p>
              </div>
              <Fish className="h-8 w-8 text-teal-400" />
            </div>
          </div>
          
          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-abyss-600">Novel Species</p>
                <p className="text-2xl font-bold text-coral-600">{liveMetrics.novelSpecies}</p>
              </div>
              <Microscope className="h-8 w-8 text-coral-400" />
            </div>
          </div>
          
          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-abyss-600">Avg Confidence</p>
                <p className="text-2xl font-bold text-marine-600">{liveMetrics.avgConfidence}%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-marine-400" />
            </div>
          </div>
          
          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-abyss-600">Avg Time</p>
                <p className="text-2xl font-bold text-abyss-600">{liveMetrics.processingTime}s</p>
              </div>
              <Zap className="h-8 w-8 text-abyss-400" />
            </div>
          </div>
          
          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-abyss-600">Active</p>
                <p className="text-2xl font-bold text-ocean-600">{liveMetrics.activeAnalyses}</p>
              </div>
              <Activity className="h-8 w-8 text-ocean-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Analysis Pipeline */}
          <div className="lg:col-span-2">
            <div className="card p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-abyss-900">BERTax → DNABERT-S Pipeline</h2>
                <div className="flex space-x-2">
                  <button 
                    onClick={handleStartAnalysis}
                    disabled={isProcessing}
                    className="btn-primary flex items-center space-x-2 disabled:opacity-50"
                  >
                    {isProcessing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    <span>{isProcessing ? 'Processing...' : 'Start Analysis'}</span>
                  </button>
                  <button className="btn-secondary">
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                {pipelineSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-ocean-50 to-marine-50 rounded-lg">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                      step.status === 'completed' ? 'bg-green-500' :
                      step.status === 'processing' ? 'bg-blue-500 animate-pulse' :
                      'bg-gray-400'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-abyss-900">{step.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          step.status === 'completed' ? 'bg-green-100 text-green-800' :
                          step.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {step.status}
                        </span>
                      </div>
                      <p className="text-sm text-abyss-600 mt-1">{step.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-xs text-abyss-500">Time: {step.time}</span>
                        {step.status === 'processing' && (
                          <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-xs">
                            <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upload Section */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-abyss-900 mb-6">Upload eDNA Sequences</h2>
              <div className="border-2 border-dashed border-ocean-300 rounded-lg p-8 text-center hover:border-ocean-400 transition-colors">
                <Upload className="h-12 w-12 text-ocean-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-abyss-900 mb-2">Drop your FASTA files here</h3>
                <p className="text-abyss-600 mb-4">or click to browse and select files</p>
                <button className="btn-primary">
                  Choose Files
                </button>
                <p className="text-xs text-abyss-500 mt-2">Supports FASTA, FASTQ formats • Max 100MB per file</p>
              </div>
            </div>
          </div>

          {/* Recent Analyses */}
          <div className="space-y-6">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-abyss-900">Recent Analyses</h2>
                <button className="text-ocean-600 hover:text-ocean-700 text-sm font-medium">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentAnalyses.map((analysis) => (
                  <div key={analysis.id} className="p-4 bg-gradient-to-r from-ocean-50 to-marine-50 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-abyss-900 text-sm">{analysis.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        analysis.status === 'completed' ? 'bg-green-100 text-green-800' :
                        analysis.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {analysis.status}
                      </span>
                    </div>
                    
                    {analysis.status === 'completed' && (
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <span className="text-abyss-500">Species:</span>
                          <span className="font-semibold text-teal-600 ml-1">{analysis.species}</span>
                        </div>
                        <div>
                          <span className="text-abyss-500">Novel:</span>
                          <span className="font-semibold text-coral-600 ml-1">{analysis.novel}</span>
                        </div>
                        <div>
                          <span className="text-abyss-500">Conf:</span>
                          <span className="font-semibold text-marine-600 ml-1">{analysis.confidence}%</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex space-x-2">
                        <button className="p-1 text-ocean-600 hover:bg-ocean-100 rounded">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-1 text-ocean-600 hover:bg-ocean-100 rounded">
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                      {analysis.status === 'processing' && (
                        <div className="flex-1 bg-gray-200 rounded-full h-1 ml-4">
                          <div className="bg-blue-500 h-1 rounded-full animate-pulse" style={{width: '45%'}}></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-abyss-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-ocean-50 to-marine-50 rounded-lg hover:from-ocean-100 hover:to-marine-100 transition-colors">
                  <Brain className="h-5 w-5 text-ocean-600" />
                  <span className="font-medium text-abyss-900">Model Training</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-teal-50 to-marine-50 rounded-lg hover:from-teal-100 hover:to-marine-100 transition-colors">
                  <BarChart3 className="h-5 w-5 text-teal-600" />
                  <span className="font-medium text-abyss-900">Analytics</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-coral-50 to-marine-50 rounded-lg hover:from-coral-100 hover:to-marine-100 transition-colors">
                  <FileText className="h-5 w-5 text-coral-600" />
                  <span className="font-medium text-abyss-900">Export Report</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 bg-gradient-to-r from-abyss-50 to-marine-50 rounded-lg hover:from-abyss-100 hover:to-marine-100 transition-colors">
                  <Search className="h-5 w-5 text-abyss-600" />
                  <span className="font-medium text-abyss-900">Search Database</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}