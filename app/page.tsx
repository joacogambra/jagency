"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Palette,
  PresentationIcon as PresentationChart,
  Globe,
  Instagram,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"

export default function JGAgencyWebsite() {
  const [isVisible, setIsVisible] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const services = [
    {
      icon: <Play className="h-8 w-8" />,
      title: "Video Editing",
      description: "Horizontal and vertical content for reels, shorts, ads, and social media platforms",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphic Design & Illustrations",
      description: "Creative visual solutions that bring your brand to life with stunning graphics",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <PresentationChart className="h-8 w-8" />,
      title: "Brand Presentation Decks",
      description: "Professional presentations that communicate your brand story effectively",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Product Catalog Websites",
      description: "Beautiful, functional websites that showcase your products perfectly",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Community Manager",
      description: "Complete social media management, content planning and community engagement",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Instagram className="h-8 w-8" />,
      title: "Social Media Manager",
      description: "Strategic social media campaigns that boost engagement and grow your audience",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Influencer Manager",
      description: "Connect with the right influencers and manage successful collaboration campaigns",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "Photography & Filmmaking",
      description: "Professional photo and video production for brands, products, and events",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const allProjects = [
    // Video Editing Projects
    {
      id: 1,
      category: "Video Editing",
      title: "TechFlow Product Launch",
      description: "Dynamic product reveal video with motion graphics",
      image: "/placeholder.svg?height=300&width=400&text=TechFlow+Launch",
      type: "video",
      color: "from-red-500 to-pink-600",
    },
    {
      id: 2,
      category: "Video Editing",
      title: "Instagram Reels Campaign",
      description: "Viral social media content for fashion brand",
      image: "/placeholder.svg?height=300&width=400&text=Fashion+Reels",
      type: "video",
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 3,
      category: "Video Editing",
      title: "Restaurant Commercial",
      description: "Appetizing food commercial with cinematic shots",
      image: "/placeholder.svg?height=300&width=400&text=Food+Commercial",
      type: "video",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 4,
      category: "Video Editing",
      title: "Fitness App Promo",
      description: "High-energy workout promotional video",
      image: "/placeholder.svg?height=300&width=400&text=Fitness+Promo",
      type: "video",
      color: "from-green-500 to-teal-600",
    },

    // Graphic Design Projects
    {
      id: 5,
      category: "Graphic Design",
      title: "Startup Brand Identity",
      description: "Complete visual identity for tech startup",
      image: "/placeholder.svg?height=300&width=400&text=Brand+Identity",
      type: "design",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 6,
      category: "Graphic Design",
      title: "Event Poster Series",
      description: "Creative posters for music festival",
      image: "/placeholder.svg?height=300&width=400&text=Music+Posters",
      type: "design",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 7,
      category: "Graphic Design",
      title: "Product Packaging",
      description: "Eco-friendly packaging design for cosmetics",
      image: "/placeholder.svg?height=300&width=400&text=Eco+Packaging",
      type: "design",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 8,
      category: "Graphic Design",
      title: "Social Media Templates",
      description: "Instagram story and post templates",
      image: "/placeholder.svg?height=300&width=400&text=Social+Templates",
      type: "design",
      color: "from-purple-500 to-violet-600",
    },

    // Presentations Projects
    {
      id: 9,
      category: "Presentations",
      title: "Investor Pitch Deck",
      description: "Compelling presentation for Series A funding",
      image: "/placeholder.svg?height=300&width=400&text=Pitch+Deck",
      type: "presentation",
      color: "from-indigo-500 to-blue-600",
    },
    {
      id: 10,
      category: "Presentations",
      title: "Sales Presentation",
      description: "High-converting sales deck for B2B clients",
      image: "/placeholder.svg?height=300&width=400&text=Sales+Deck",
      type: "presentation",
      color: "from-teal-500 to-cyan-600",
    },
    {
      id: 11,
      category: "Presentations",
      title: "Company Overview",
      description: "Corporate presentation for stakeholders",
      image: "/placeholder.svg?height=300&width=400&text=Company+Overview",
      type: "presentation",
      color: "from-gray-500 to-slate-600",
    },
    {
      id: 12,
      category: "Presentations",
      title: "Product Demo Slides",
      description: "Interactive product demonstration deck",
      image: "/placeholder.svg?height=300&width=400&text=Product+Demo",
      type: "presentation",
      color: "from-amber-500 to-orange-600",
    },

    // Websites Projects
    {
      id: 13,
      category: "Websites",
      title: "E-commerce Platform",
      description: "Modern online store with seamless UX",
      image: "/placeholder.svg?height=300&width=400&text=E-commerce+Site",
      type: "website",
      color: "from-emerald-500 to-green-600",
    },
    {
      id: 14,
      category: "Websites",
      title: "Restaurant Website",
      description: "Appetizing website with online ordering",
      image: "/placeholder.svg?height=300&width=400&text=Restaurant+Web",
      type: "website",
      color: "from-red-500 to-pink-600",
    },
    {
      id: 15,
      category: "Websites",
      title: "Portfolio Website",
      description: "Creative portfolio for photographer",
      image: "/placeholder.svg?height=300&width=400&text=Portfolio+Site",
      type: "website",
      color: "from-violet-500 to-purple-600",
    },
    {
      id: 16,
      category: "Websites",
      title: "SaaS Landing Page",
      description: "High-converting landing page for software",
      image: "/placeholder.svg?height=300&width=400&text=SaaS+Landing",
      type: "website",
      color: "from-blue-500 to-indigo-600",
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? allProjects : allProjects.filter((project) => project.category === activeFilter)

  const featuredProject = filteredProjects[0] || allProjects[0]
  const regularProjects = filteredProjects.slice(1)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-yellow-50 to-gray-50 opacity-60" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300 rounded-full opacity-30 animate-bounce delay-500" />
        </div>

        <div
          className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-gray-900 mb-4 tracking-tight">JG</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto mb-6" />
          </div>
          <p className="text-2xl md:text-3xl text-gray-700 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            We design. We edit. We create.
          </p>
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do Best</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to creation, we bring your vision to life with our comprehensive creative services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-yellow-100 rounded-lg mr-3 text-yellow-600">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-500 font-medium mb-6">Trusted by leading brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 font-bold">LOGO</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Modern Gallery */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">Our Work</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Recent Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A showcase of our latest creative work across different mediums and industries
            </p>

            {/* Project Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["All", "Video Editing", "Graphic Design", "Presentations", "Websites"].map((filter) => (
                <Button
                  key={filter}
                  variant={filter === activeFilter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-6 py-2 transition-all duration-300 ${
                    filter === activeFilter
                      ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
                      : "hover:bg-yellow-50 hover:border-yellow-400"
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* Modern Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Featured Large Project */}
            <div className="md:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-400 to-blue-500 p-1">
              <div className="relative h-96 lg:h-full bg-white rounded-xl overflow-hidden">
                <Image
                  src={featuredProject.image || "/placeholder.svg"}
                  alt={featuredProject.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <Badge className="bg-yellow-400 text-gray-900 mb-3">Featured Project</Badge>
                  <h3 className="text-2xl font-bold mb-2">{featuredProject.title}</h3>
                  <p className="text-gray-200 mb-4">{featuredProject.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      {featuredProject.type === "video" && <Play className="h-4 w-4 mr-1" />}
                      {featuredProject.type === "design" && <Palette className="h-4 w-4 mr-1" />}
                      {featuredProject.type === "presentation" && <PresentationChart className="h-4 w-4 mr-1" />}
                      {featuredProject.type === "website" && <Globe className="h-4 w-4 mr-1" />}
                      {featuredProject.category}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>

            {/* Regular Projects */}
            {regularProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group relative overflow-hidden border-0 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                    />
                    <Button
                      size="sm"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-900 hover:bg-gray-100"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {project.category}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl p-8 shadow-sm">
            {[
              { number: "150+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "25M+", label: "Views Generated" },
              { number: "98%", label: "Client Retention" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                company: "TechFlow",
                content:
                  "JG transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations.",
                rating: 5,
              },
              {
                name: "Miguel Rodriguez",
                role: "Founder",
                company: "StartupXYZ",
                content:
                  "The video content they created for our social media increased our engagement by 300%. Absolutely incredible work!",
                rating: 5,
              },
              {
                name: "Emma Chen",
                role: "Brand Manager",
                company: "Fashion Co.",
                content:
                  "Professional, creative, and always on time. JG is our go-to agency for all creative projects.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border-0 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full mr-1"></div>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-blue-400 rounded-full mr-4 flex items-center justify-center text-white font-bold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures every project delivers exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into your brand, goals, and target audience to understand your vision.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a comprehensive creative strategy tailored to your specific objectives.",
              },
              {
                step: "03",
                title: "Creation",
                description: "Our team brings the strategy to life with stunning visuals and compelling content.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deliver polished, ready-to-use assets that exceed your expectations.",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400 to-blue-400 opacity-30 transform -translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">About Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Creative Minds Behind JG</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by two passionate creatives, JG represents the perfect blend of artistic vision and technical
                expertise. We believe that great design has the power to transform businesses and connect with audiences
                on a deeper level.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach is simple: we listen, we understand, and then we create something extraordinary. Every
                project is a new opportunity to push creative boundaries and deliver results that exceed expectations.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">2</div>
                  <div className="text-gray-600">Creative Founders</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-500">100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="JG Founders"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-blue-400/20" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-80" />
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-400 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 mb-4">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let's Create Together</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring your vision to life? We'd love to hear about your project and discuss how we can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="w-full p-4 border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full p-4 border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-400 to-blue-400 hover:from-yellow-500 hover:to-blue-500 text-gray-900 font-semibold py-4 rounded-lg transition-all duration-300"
                  disabled={formSubmitted}
                >
                  {formSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            <div className="lg:pl-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect with us</h3>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Follow our creative journey and get inspired by our latest work. We love sharing behind-the-scenes
                  content and creative tips.
                </p>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="font-semibold">Follow on Instagram</span>
                  </a>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-4 bg-green-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="h-6 w-6" />
                    <span className="font-semibold">Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
                  <p className="text-gray-600 text-sm">
                    We typically respond to all inquiries within 24 hours. For urgent projects, feel free to reach out
                    via WhatsApp for faster communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-4xl font-bold mb-2">JG</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto mb-4" />
            <p className="text-gray-400">We design. We edit. We create.</p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">© {new Date().getFullYear()} JG Creative Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
