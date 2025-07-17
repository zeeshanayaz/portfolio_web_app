"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github, Calendar, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/data/portfolio-data"

interface ProjectDetailProps {
  project: Project
  onBack: () => void
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("Android")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-4 flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>

          <div className="flex items-start gap-6">
            {/* App Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-white">{project.name.charAt(0)}</span>
            </div>

            {/* Title and Actions */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{project.name}</h1>
              <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.playStore && (
                  <Button asChild>
                    <Link href={project.playStore} target="_blank" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Play Store
                    </Link>
                  </Button>
                )}
                {project.appStore && (
                  <Button variant="outline" asChild>
                    <Link href={project.appStore} target="_blank" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      App Store
                    </Link>
                  </Button>
                )}
                {project.github && (
                  <Button variant="outline" asChild>
                    <Link href={project.github} target="_blank" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About the App */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">About the App</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.longDescription}</p>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Preview Section */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Preview</h2>

              {/* Platform Selector */}
              {project.platforms.length > 1 && (
                <div className="flex gap-2 mb-6">
                  {project.platforms.map((platform) => (
                    <Button
                      key={platform}
                      variant={selectedPlatform === platform ? "default" : "outline"}
                      onClick={() => setSelectedPlatform(platform)}
                      className="flex items-center gap-2"
                    >
                      <Smartphone className="h-4 w-4" />
                      {platform}
                    </Button>
                  ))}
                </div>
              )}

              {/* Screenshots Grid */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="bg-slate-900 rounded-lg p-4 aspect-[9/16]">
                      <Image
                        src={screenshot || "/placeholder.svg"}
                        alt={`${project.name} screenshot ${index + 1}`}
                        width={300}
                        height={600}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Timeline */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {project.createdDate && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">Created</span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400">{project.createdDate}</p>
                    </div>
                  )}

                  {project.releasedDate && (
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-green-700 dark:text-green-300 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">Released</span>
                      </div>
                      <p className="text-green-600 dark:text-green-400">{project.releasedDate}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Project Type */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Project Type</h3>
                <Badge variant="outline" className="text-sm">
                  {project.type}
                </Badge>
              </CardContent>
            </Card>

            {/* Platforms */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Platforms</h3>
                <div className="space-y-2">
                  {project.platforms.map((platform, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-600 dark:text-slate-300">{platform}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
