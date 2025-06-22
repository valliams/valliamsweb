export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section - Dark, Powerful, Enterprise */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-transparent to-red-600/10"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-500/30 mb-8">
              <svg className="h-5 w-5 mr-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-green-400 font-semibold text-sm">ENTERPRISE-GRADE TECHNOLOGY SOLUTIONS</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                NEXT-GEN
              </span>
              <br/>
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                DIGITAL EXCELLENCE
              </span>
            </h1>

            <p className="max-w-4xl mx-auto text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Delivering <span className="text-green-400 font-semibold">AI-Powered Solutions</span>, 
              <span className="text-red-400 font-semibold"> Blockchain Innovation</span>, and 
              <span className="text-blue-400 font-semibold"> Custom Software Development</span> for businesses ready to grow
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a
                href="/mvp"
                className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-xl text-lg font-bold shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="relative z-10">GET STARTED TODAY</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </a>
              <a
                href="/services"
                className="group border-2 border-white/20 hover:border-green-400/50 text-white hover:text-green-400 px-12 py-4 rounded-xl text-lg font-bold backdrop-blur-sm transition-all duration-300"
              >
                EXPLORE TECHNOLOGIES
              </a>
            </div>

            {/* Company Promise */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-green-400 mb-2">2025</div>
                <div className="text-gray-400 font-medium">FOUNDED</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">100%</div>
                <div className="text-gray-400 font-medium">CLIENT SATISFACTION</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-red-400 mb-2">24/7</div>
                <div className="text-gray-400 font-medium">SUPPORT AVAILABLE</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">∞</div>
                <div className="text-gray-400 font-medium">POSSIBILITIES</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Blockchain Technologies */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-green-700 to-gray-900 bg-clip-text text-transparent">
                CUTTING-EDGE
              </span>
              <br/>
              <span className="text-green-600">TECHNOLOGY STACK</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to leverage the most advanced technologies to deliver exceptional business results
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {/* AI & Machine Learning */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-green-200 transition-all duration-500 transform hover:-translate-y-3">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-green-600/5 rounded-bl-3xl"></div>
              <div className="relative">
                <div className="h-20 w-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">AI & MACHINE LEARNING</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Advanced neural networks, deep learning models, and predictive analytics for intelligent automation and decision-making.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
                    TensorFlow & PyTorch Implementation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
                    Computer Vision & NLP
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3"></div>
                    Predictive Analytics Engine
                  </li>
                </ul>
              </div>
            </div>

            {/* Blockchain & Web3 */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-3">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-bl-3xl"></div>
              <div className="relative">
                <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">BLOCKCHAIN & WEB3</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Decentralized solutions, smart contracts, and cryptocurrency integration for secure, transparent operations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-3"></div>
                    Ethereum & Solidity Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-3"></div>
                    DeFi & NFT Solutions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="h-2 w-2 bg-blue-500 rounded-full mr-3"></div>
                    Cross-chain Integration
                  </li>
                </ul>
              </div>
            </div>

            {/* Quantum Computing */}
            <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-gray-100 hover:border-purple-200 transition-all duration-500 transform hover:-translate-y-3">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-bl-3xl"></div>
              <div className="relative">
                <div className="h-20 w-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">QUANTUM COMPUTING</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Next-generation quantum algorithms and computing solutions for complex optimization problems.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                    Quantum Algorithm Development
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                    Cryptographic Security
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="h-2 w-2 bg-purple-500 rounded-full mr-3"></div>
                    Complex Optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology Partners */}
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12">
            <h3 className="text-3xl font-black text-white text-center mb-12">TECHNOLOGY PARTNERS</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
              {['AWS', 'Google Cloud', 'Microsoft Azure', 'OpenAI', 'NVIDIA', 'IBM'].map((partner, index) => (
                <div key={index} className="text-center">
                  <div className="h-16 w-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">{partner.slice(0, 2)}</span>
                  </div>
                  <div className="text-gray-300 font-semibold text-sm">{partner}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Best Practices */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                SECURITY FIRST
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Following industry best practices and security standards from day one
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-2xl p-8 border border-red-500/20">
              <div className="h-16 w-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-white mb-4">SECURE BY DESIGN</h3>
              <p className="text-gray-300">Built with security in mind from the ground up</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 rounded-2xl p-8 border border-green-500/20">
              <div className="h-16 w-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-white mb-4">DATA ENCRYPTION</h3>
              <p className="text-gray-300">End-to-end encryption for all sensitive data</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-2xl p-8 border border-blue-500/20">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-white mb-4">REGULAR BACKUPS</h3>
              <p className="text-gray-300">Automated backups and disaster recovery</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 rounded-2xl p-8 border border-yellow-500/20">
              <div className="h-16 w-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m13 0h-6" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-white mb-4">CODE REVIEWS</h3>
              <p className="text-gray-300">Thorough security audits and code reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              OUR <span className="text-green-600">MISSION</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge technology solutions that drive growth and innovation
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="h-16 w-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">LIGHTNING FAST DELIVERY</h3>
              <p className="text-gray-700 leading-relaxed">
                We understand that time is money. Our agile development process ensures your project goes from concept to deployment in record time without compromising quality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">CUTTING-EDGE INNOVATION</h3>
              <p className="text-gray-700 leading-relaxed">
                Stay ahead of the competition with the latest technologies. We implement AI, blockchain, and modern web solutions that give your business a technological edge.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-xl border border-gray-100">
              <div className="h-16 w-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">CLIENT-FIRST APPROACH</h3>
              <p className="text-gray-700 leading-relaxed">
                Your success is our success. We work closely with you throughout the entire development process, ensuring the final product exceeds your expectations.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12">
            <h3 className="text-3xl font-black text-white text-center mb-12">WHY CHOOSE VALLIAMS?</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-20 w-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-2">LIGHTNING FAST</h4>
                <p className="text-gray-400 text-sm">Quick turnaround times</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-2">AFFORDABLE PRICING</h4>
                <p className="text-gray-400 text-sm">Competitive startup rates</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-2">MODERN TECH STACK</h4>
                <p className="text-gray-400 text-sm">Latest technologies</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 bg-gradient-to-br from-red-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-bold mb-2">PERSONAL TOUCH</h4>
                <p className="text-gray-400 text-sm">Direct founder involvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Enterprise Contact */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
              READY TO DOMINATE
            </span>
            <br/>
            <span className="text-white">YOUR INDUSTRY?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to transform your business with cutting-edge technology solutions? Let&apos;s build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/mvp"
              className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-5 rounded-xl text-xl font-black shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative z-10">START YOUR PROJECT TODAY</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            </a>
            <a
              href="/services"
              className="group border-2 border-white/20 hover:border-green-400/50 text-white hover:text-green-400 px-12 py-5 rounded-xl text-xl font-black backdrop-blur-sm transition-all duration-300"
            >
              VIEW TECHNOLOGY PORTFOLIO
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-black text-green-400 mb-2">FREE</div>
              <div className="text-gray-400 text-sm">CONSULTATION</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-blue-400 mb-2">FAST</div>
              <div className="text-gray-400 text-sm">DELIVERY</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-red-400 mb-2">24/7</div>
              <div className="text-gray-400 text-sm">SUPPORT</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 