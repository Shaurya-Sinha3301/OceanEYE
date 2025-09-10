'use client'

import { useState } from 'react'
import { Plus, Users, Calendar, MapPin, BarChart3, Settings, Play, Pause, MoreVertical } from 'lucide-react'


const projects = [
  {
    id: 1,
    name: 'Deep-Sea Vent Study 2024',
    description: 'Comprehensive biodiversity analysis of Pacific hydrothermal vents',
    status: 'active',
    progress: 75,
    startDate: '1/15/2024',
    location: 'Pacific Ocean • 2000-3500m',
    collaborators: 4,
    samples: 12,
    novelTaxa: 7,
    environment: 'Hydrothermal Vent',
    lastActivity: '2 hours ago'
  },
  {
    id: 2,
    name: 'Abyssal Plain Monitoring',
    description: 'Long-term monitoring of deep-sea plain ecosystems',
    status: 'completed',
    progress: 100,
    startDate: '11/20/2023',
    location: 'Atlantic Ocean • 4000-5000m',
    collaborators: 6,
    samples: 24,
    novelTaxa: 3,
    environment: 'Abyssal Plain',
    lastActivity: '1 week ago'
  },
  {
    id: 3,
    name: 'Mariana Trench Expedition',
    description: 'Extreme depth biodiversity assessment and novel species discovery',
    status: 'processing',
    progress: 45,
    startDate: '3/10/2024',
    location: 'Mariana Trench • 8000-11000m',
    collaborators: 8,
    samples: 18,
    novelTaxa: 15,
    environment: 'Ocean Trench',
    lastActivity: '30 minutes ago'
  }
]

const statusColors = {
  active: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
  completed: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' },
  processing: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' },
  paused: { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200' }
}

export default function ProjectManagement() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [showNewProject, setShowNewProject] = useState(false)

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-slide-up">
            Project Management
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-slide-up stagger-1">
            Organize and track your eDNA research projects with collaborative tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project List */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Research Projects</h3>
                <button
                  onClick={() => setShowNewProject(true)}
                  className="btn-primary p-2 hover:scale-105 transition-transform"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedProject.id === project.id
                        ? 'border-ocean-500 bg-ocean-50'
                        : 'border-slate-200 bg-white hover:border-ocean-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-slate-900 text-sm leading-tight">
                        {project.name}
                      </h4>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status as keyof typeof statusColors].bg} ${statusColors[project.status as keyof typeof statusColors].text}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-xs text-slate-600 mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{project.samples} samples</span>
                      <span>{project.progress}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
                      <div 
                        className="bg-ocean-500 h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="card p-8 animate-fade-in">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {selectedProject.name}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {selectedProject.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{selectedProject.startDate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{selectedProject.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{selectedProject.collaborators} collaborators</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                      <Settings className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Progress Overview */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">Analysis Progress</span>
                    <span className="text-sm text-ocean-600 font-semibold">{selectedProject.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div 
                      className="bg-ocean-gradient h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${selectedProject.progress}%` }}
                    />
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{selectedProject.samples}</div>
                    <div className="text-sm text-slate-600">Samples</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{selectedProject.novelTaxa}</div>
                    <div className="text-sm text-slate-600">Novel Taxa</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{selectedProject.environment}</div>
                    <div className="text-sm text-slate-600">Environment</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{selectedProject.collaborators}</div>
                    <div className="text-sm text-slate-600">Collaborators</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <button className="btn-primary flex items-center space-x-2">
                    {selectedProject.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    <span>{selectedProject.status === 'active' ? 'Pause' : 'Resume'}</span>
                  </button>
                  <button className="btn-secondary flex items-center space-x-2">
                    <BarChart3 className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                  <button className="btn-secondary flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </button>
                </div>

                {/* Recent Activity */}
                <div className="border-t border-slate-200 pt-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Recent Activity</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700">Analysis completed for sample batch #3</p>
                        <p className="text-xs text-slate-500">{selectedProject.lastActivity}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700">New collaborator added to project</p>
                        <p className="text-xs text-slate-500">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700">Novel taxa detected in deep samples</p>
                        <p className="text-xs text-slate-500">1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* New Project Modal */}
        {showNewProject && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={() => setShowNewProject(false)}
          >
            <div
              className="bg-white rounded-xl p-8 max-w-md w-full animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-xl font-bold text-slate-900 mb-6">Create New Project</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Name</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                      placeholder="Enter project name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                    <textarea 
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500"
                      rows={3}
                      placeholder="Describe your research project"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Environment Type</label>
                    <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500">
                      <option>Select environment</option>
                      <option>Hydrothermal Vent</option>
                      <option>Abyssal Plain</option>
                      <option>Mid-Ocean Ridge</option>
                      <option>Ocean Trench</option>
                    </select>
                  </div>
                </div>
                <div className="flex space-x-4 mt-8">
                  <button 
                    onClick={() => setShowNewProject(false)}
                    className="flex-1 btn-secondary"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => setShowNewProject(false)}
                    className="flex-1 btn-primary"
                  >
                    Create Project
                  </button>
                </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}