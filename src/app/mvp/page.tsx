'use client'

import { useState } from 'react'

export default function MVPPage() {
  const [selectedPackage, setSelectedPackage] = useState('startup')

  const packages = {
    starter: {
      name: "MVP Starter",
      price: "$4,999",
      duration: "2-3 weeks",
      color: "green",
      description: "Perfect for validating your idea quickly",
      features: [
        "Core functionality development",
        "Basic UI/UX design",
        "Responsive web application",
        "User authentication",
        "Basic dashboard",
        "Database setup",
        "1 month free support",
        "Source code delivery"
      ],
      process: [
        "Requirements gathering (2 days)",
        "UI/UX wireframing (3 days)",
        "Core development (10 days)",
        "Testing & deployment (3 days)"
      ]
    },
    startup: {
      name: "MVP Business",
      price: "$9,999",
      duration: "4-6 weeks",
      color: "blue",
      description: "Comprehensive MVP with advanced features",
      features: [
        "All Starter features",
        "Advanced UI/UX design",
        "Mobile-responsive design",
        "Payment integration",
        "Admin panel",
        "Analytics dashboard",
        "API development",
        "Cloud deployment",
        "3 months free support",
        "Documentation included"
      ],
      process: [
        "Discovery & planning (1 week)",
        "Design & prototyping (1 week)",
        "Development & integration (3 weeks)",
        "Testing, optimization & launch (1 week)"
      ]
    },
    enterprise: {
      name: "MVP Enterprise",
      price: "$24,999",
      duration: "6-10 weeks",
      color: "purple",
      description: "Full-featured MVP ready for scale",
      features: [
        "All Business features",
        "Custom design system",
        "Multiple user roles",
        "Advanced integrations",
        "Real-time features",
        "Advanced security",
        "Performance optimization",
        "Multi-platform support",
        "AI/ML integration",
        "6 months premium support",
        "Training & handover"
      ],
      process: [
        "Strategic consultation (1 week)",
        "Architecture & design (2 weeks)",
        "Development & integration (5 weeks)",
        "Testing, optimization & deployment (2 weeks)"
      ]
    }
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-green-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-red-500/5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-500/30 mb-8">
              <svg className="h-5 w-5 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-green-700 font-semibold text-sm">QUICK MVP DEVELOPMENT</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
              Launch Your <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">MVP</span> Fast
            </h1>
            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Transform your idea into a working product in just weeks, not months. Our Quick MVP approach helps you validate your concept, attract investors, and launch faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#packages"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View Packages
              </a>
              <a
                href="#contact"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Quick MVP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is a <span className="text-green-600">Quick MVP?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                A Minimum Viable Product (MVP) is the simplest version of your product that solves the core problem for your users. Our Quick MVP approach focuses on speed and validation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Validate Your Idea</h3>
                    <p className="text-gray-600">Test your concept with real users before investing heavily in development.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Attract Investors</h3>
                    <p className="text-gray-600">Demonstrate market demand and user engagement to potential investors.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Launch Faster</h3>
                    <p className="text-gray-600">Get to market quickly with essential features, then iterate based on feedback.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-10 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our Quick MVP?</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Speed</h4>
                  </div>
                  <p className="text-gray-600">Launch in 2-10 weeks instead of 6-12 months.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Cost-Effective</h4>
                  </div>
                  <p className="text-gray-600">Start from $2,999 with flexible payment options.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <div className="h-10 w-10 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">Quality</h4>
                  </div>
                  <p className="text-gray-600">Production-ready code with modern technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              MVP <span className="text-green-600">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your needs. All packages include source code, documentation, and support.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {Object.entries(packages).map(([key, pkg]) => (
              <div
                key={key}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${
                  key === 'startup' ? 'ring-4 ring-green-500 scale-105' : ''
                }`}
              >
                {key === 'startup' && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-extrabold text-gray-900">{pkg.price}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{pkg.duration}</p>
                    <p className="text-gray-700 mb-8">{pkg.description}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPackage(key)}
                    className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all duration-300 ${
                      key === 'startup'
                        ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Choose {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Process Details */}
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {packages[selectedPackage as keyof typeof packages].name} Development Process
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {packages[selectedPackage as keyof typeof packages].process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Available MVP Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Popular <span className="text-red-600">MVP Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready-to-customize MVP solutions for common business needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "E-commerce Platform",
                description: "Online store with payment processing, inventory management, and admin dashboard",
                features: ["Product catalog", "Shopping cart", "Payment gateway", "Order management", "Customer accounts"],
                icon: "🛒",
                popular: true
              },
              {
                title: "SaaS Dashboard",
                description: "Business intelligence platform with analytics, reporting, and user management",
                features: ["Data visualization", "Real-time analytics", "User roles", "API integration", "Export tools"],
                icon: "📊"
              },
              {
                title: "Marketplace App",
                description: "Two-sided marketplace connecting buyers and sellers with built-in messaging",
                features: ["User profiles", "Listing management", "In-app chat", "Rating system", "Payments"],
                icon: "🏪"
              },
              {
                title: "Social Platform",
                description: "Community platform with user-generated content, feeds, and social features",
                features: ["User profiles", "Content feeds", "Messaging", "Notifications", "Social features"],
                icon: "👥"
              },
              {
                title: "Booking System",
                description: "Appointment scheduling platform with calendar integration and notifications",
                features: ["Calendar booking", "Payment processing", "Email notifications", "Admin panel", "Reports"],
                icon: "📅"
              },
              {
                title: "Food Delivery App",
                description: "Multi-vendor food delivery platform with real-time tracking and payments",
                features: ["Restaurant listings", "Order tracking", "Payment gateway", "Delivery management", "Reviews"],
                icon: "🍕"
              }
            ].map((product, index) => (
              <div key={index} className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {product.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Modules */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Technologies & <span className="text-green-600">Modules</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern tech stack and ready-to-use modules to accelerate your MVP development
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Frontend Technologies */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="h-10 w-10 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                Frontend Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React.js", "Next.js", "TypeScript", "Tailwind CSS",
                  "React Native", "Flutter", "Vue.js", "Angular"
                ].map((tech, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-3 text-center">
                    <span className="text-blue-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="h-10 w-10 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </div>
                Backend Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Node.js", "Python", "PostgreSQL", "MongoDB",
                  "Express.js", "Django", "AWS", "Firebase"
                ].map((tech, index) => (
                  <div key={index} className="bg-green-50 rounded-lg p-3 text-center">
                    <span className="text-green-700 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Essential Modules */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="h-10 w-10 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                Essential Modules
              </h3>
              <div className="space-y-3">
                {[
                  "User Authentication & Authorization",
                  "Payment Processing (Stripe/PayPal)",
                  "Email & SMS Notifications",
                  "File Upload & Storage",
                  "Analytics & Tracking",
                  "Admin Dashboard",
                  "API Integration",
                  "Search & Filtering"
                ].map((module, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{module}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Features */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="h-10 w-10 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                Advanced Features
              </h3>
              <div className="space-y-3">
                {[
                  "Real-time Chat & Messaging",
                  "Push Notifications",
                  "Social Media Integration",
                  "Multi-language Support",
                  "Advanced Security Features",
                  "Performance Optimization",
                  "SEO Optimization",
                  "A/B Testing Framework"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-gradient-to-r from-green-500 to-green-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Build Your MVP?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Let&apos;s turn your idea into reality. Schedule a free consultation to discuss your project and get a custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule Free Consultation
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
            >
              View All Services
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-black text-white mb-2">2-10</div>
              <div className="text-green-100 text-sm">WEEKS DELIVERY</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-white mb-2">$2,999</div>
              <div className="text-green-100 text-sm">STARTING FROM</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-white mb-2">100%</div>
              <div className="text-green-100 text-sm">SOURCE CODE</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 