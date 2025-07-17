"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, Calendar, Smartphone, Download, Star, Users, TrendingUp, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { Project } from "@/data/portfolio-data"
import { useState } from "react"

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const router = useRouter()
  const [selectedPlatform, setSelectedPlatform] = useState<string>(project.platforms[0] || "Android")

  // Get screenshots for selected platform
  const currentScreenshots = project.screenshots
    ? project.screenshots[selectedPlatform] || project.screenshots[Object.keys(project.screenshots)[0]] || []
    : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-6 flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full px-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>

          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            {/* App Icon */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-50"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <span className="text-3xl font-bold text-white">{project.name.charAt(0)}</span>
              </div>
            </div>

            {/* Title and Actions */}
            <div className="flex-1 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                  >
                    {project.type}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`${
                      project.company === "Genetech Solutions"
                        ? "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400"
                        : project.company === "Minhasoft"
                          ? "bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400"
                          : "bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400"
                    }`}
                  >
                    {project.company}
                  </Badge>
                  <div className="flex gap-2">
                    {project.platforms.map((platform) => (
                      <Badge
                        key={platform}
                        variant="outline"
                        className={`${
                          platform === "Android"
                            ? "text-green-600 border-green-500/20 bg-green-500/10"
                            : "text-blue-600 border-blue-500/20 bg-blue-500/10"
                        }`}
                      >
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-3">
                  {project.name}
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Stats Cards */}
              {project.stats && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
                          <Download className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">{project.stats.downloads}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Downloads</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                          <Star className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <span className="text-2xl font-bold text-slate-900 dark:text-white">
                          {project.stats.rating}
                        </span>
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Rating</div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-lg">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white">{project.stats.reviews}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">Reviews</div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.storeLinks.map((storeLink, index) => (
                  <Button
                    key={index}
                    asChild
                    className={`${
                      storeLink.store === "Google Play"
                        ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                        : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    } text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <Link href={storeLink.url} target="_blank" className="flex items-center gap-2">
                      {storeLink.store === "Google Play" ? (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                        </svg>
                      )}
                      {storeLink.store}
                    </Link>
                  </Button>
                ))}
                {project.github && (
                  <Button
                    variant="outline"
                    asChild
                    className="bg-gradient-to-r from-slate-500/10 to-slate-600/10 border-slate-500/20 text-slate-600 dark:text-slate-400 hover:bg-slate-500 hover:text-white transition-all duration-300"
                  >
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
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-blue-500" />
                  About the App
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{project.longDescription}</p>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-purple-500" />
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Preview Section */}
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <Smartphone className="w-6 h-6 mr-3 text-cyan-500" />
                  Preview
                </h2>

                {/* Platform Selector */}
                {project.platforms.length > 1 && (
                  <div className="flex gap-3 mb-8">
                    {project.platforms.map((platform) => (
                      <Button
                        key={platform}
                        variant={selectedPlatform === platform ? "default" : "outline"}
                        onClick={() => setSelectedPlatform(platform)}
                        className={`flex items-center gap-2 transition-all duration-300 ${
                          selectedPlatform === platform
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : "bg-white/50 dark:bg-slate-700/50 hover:bg-blue-50 dark:hover:bg-slate-600"
                        }`}
                      >
                        <Smartphone className="h-4 w-4" />
                        {platform}
                      </Button>
                    ))}
                  </div>
                )}

                {/* Screenshots Grid */}
                {currentScreenshots.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {currentScreenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 aspect-[9/16] hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Image
                          src={screenshot || "/placeholder.svg"}
                          alt={`${project.name} ${selectedPlatform} screenshot ${index + 1}`}
                          width={300}
                          height={600}
                          className="w-full h-full object-contain rounded-xl relative z-10"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Timeline */}
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                  Timeline
                </h3>
                <div className="space-y-4">
                  {project.createdDate && (
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4 border border-blue-200/50 dark:border-blue-700/50">
                      <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">Created</span>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">{project.createdDate}</p>
                    </div>
                  )}

                  {project.releasedDate && (
                    <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4 border border-green-200/50 dark:border-green-700/50">
                      <div className="flex items-center gap-2 text-green-700 dark:text-green-300 mb-1">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">Released</span>
                      </div>
                      <p className="text-green-600 dark:text-green-400 font-semibold">{project.releasedDate}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Project Type */}
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Project Type</h3>
                <Badge
                  variant="outline"
                  className="text-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400"
                >
                  {project.type}
                </Badge>
              </CardContent>
            </Card>

            {/* Platforms */}
            <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Platforms</h3>
                <div className="space-y-3">
                  {project.platforms.map((platform, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          platform === "Android"
                            ? "bg-gradient-to-r from-green-500 to-green-600"
                            : "bg-gradient-to-r from-blue-500 to-blue-600"
                        }`}
                      >
                        <Smartphone className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-slate-600 dark:text-slate-300 font-medium">{platform}</span>
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
