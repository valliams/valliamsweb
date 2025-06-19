import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from '../assets/images/logo.png'
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valliams Corporation",
  description: "Leading software company providing comprehensive HR services, client support, and custom project development across all technologies",
  icons: {
    icon: "/logo.png", // for default favicon
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gradient-to-r from-white via-green-50 to-white backdrop-blur-md shadow-xl border-b border-green-100/50 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo Section */}
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center group cursor-pointer">
                  {/* <div className="bg-gradient-to-br from-green-100 text-white p-3 rounded-xl mr-4 shadow-lg group-hover:shadow-green-500/25 transition-all duration-300 group-hover:scale-105"> */}
                    <div className= "p-3 mr-1">
                    <Image className="h-12 w-12" src={logo} alt="Logo" />
                    </div>
                  {/* </div> */}
                  <div>
                    <span className="text-2xl font-black text-gray-900 tracking-tight">Valliams</span>
                    <div className="flex items-center -mt-1">
                      <span className="text-sm text-green-600 font-bold tracking-wide">Corporation</span>
                      <div className="ml-2 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">2025</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-1">
                <a href="/" className="group relative text-gray-700 hover:text-green-600 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-green-50">
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 rounded-xl transition-all duration-300"></div>
                </a>
                <a href="/services" className="group relative text-gray-700 hover:text-green-600 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-green-50">
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 rounded-xl transition-all duration-300"></div>
                </a>
                <a href="/mvp" className="group relative text-gray-700 hover:text-green-600 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-green-50">
                  <span className="relative z-10 flex items-center">
                    Quick MVP
                    <div className="ml-2 px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full">HOT</div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 rounded-xl transition-all duration-300"></div>
                </a>
                <a href="/about" className="group relative text-gray-700 hover:text-green-600 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-green-50">
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 rounded-xl transition-all duration-300"></div>
                </a>
                <a href="/contact" className="group relative text-gray-700 hover:text-green-600 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-green-50">
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-green-500/10 rounded-xl transition-all duration-300"></div>
                </a>
                
                {/* CTA Button */}
                <div className="ml-4">
                  <a href="/mvp" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center">
                    <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Get Started
                  </a>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button id="mobile-menu-button" className="text-gray-700 hover:text-green-600 hover:bg-green-50 p-3 rounded-xl transition-all duration-300">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Side Navigation Overlay */}
          <div id="mobile-overlay" className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 hidden transition-opacity duration-300"></div>
          
          {/* Mobile Side Navigation */}
          <div id="mobile-sidebar" className="lg:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform -translate-x-full transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-6 border-b border-green-100 bg-gradient-to-r from-green-50 to-white">
                <div className="flex items-center">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-2 rounded-lg mr-3">
                    <Image className="h-10 w-10" src={logo} alt="Logo" />
                  </div>
                  <div>
                    <span className="text-lg font-black text-gray-900">Valliams</span>
                    <div className="flex items-center -mt-1">
                      <span className="text-xs text-green-600 font-bold">Corporation</span>
                      <div className="ml-2 px-1.5 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">2025</div>
                    </div>
                  </div>
                </div>
                <button id="close-sidebar" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-6 py-6 space-y-2">
                <a href="/" className="flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 group">
                  <svg className="h-5 w-5 mr-3 text-gray-400 group-hover:text-green-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </a>
                
                <a href="/services" className="flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 group">
                  <svg className="h-5 w-5 mr-3 text-gray-400 group-hover:text-green-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
                  </svg>
                  Services
                </a>
                
                <a href="/mvp" className="flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 group">
                  <svg className="h-5 w-5 mr-3 text-gray-400 group-hover:text-green-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="flex items-center justify-between w-full">
                    Quick MVP
                    <div className="ml-2 px-2 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded-full">HOT</div>
                  </span>
                </a>
                
                <a href="/about" className="flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 group">
                  <svg className="h-5 w-5 mr-3 text-gray-400 group-hover:text-green-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  About
                </a>
                
                <a href="/contact" className="flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-4 rounded-xl text-base font-semibold transition-all duration-300 group">
                  <svg className="h-5 w-5 mr-3 text-gray-400 group-hover:text-green-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </a>
              </div>

              {/* CTA Button & Contact Info */}
              <div className="p-6 border-t border-gray-100">
                <a href="/mvp" className="block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl text-center font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mb-4">
                  <span className="flex items-center justify-center">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Get Started Today
                  </span>
                </a>
                
                {/* Contact Info */}
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">Need help? Contact us:</div>
                  <div className="text-sm font-medium text-green-600">+1 (555) 123-4567</div>
                  <div className="text-sm text-gray-600">info@valliams.com</div>
                </div>
              </div>
                        </div>
          </div>
        </nav>

        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const mobileMenuButton = document.getElementById('mobile-menu-button');
              const mobileOverlay = document.getElementById('mobile-overlay');
              const mobileSidebar = document.getElementById('mobile-sidebar');
              const closeSidebar = document.getElementById('close-sidebar');
              
              function openSidebar() {
                mobileOverlay?.classList.remove('hidden');
                mobileSidebar?.classList.remove('-translate-x-full');
                document.body.style.overflow = 'hidden';
              }
              
              function closeSidebarFunc() {
                mobileOverlay?.classList.add('hidden');
                mobileSidebar?.classList.add('-translate-x-full');
                document.body.style.overflow = '';
              }
              
              if (mobileMenuButton) {
                mobileMenuButton.addEventListener('click', openSidebar);
              }
              
              if (closeSidebar) {
                closeSidebar.addEventListener('click', closeSidebarFunc);
              }
              
              if (mobileOverlay) {
                mobileOverlay.addEventListener('click', closeSidebarFunc);
              }
              
              // Close sidebar when clicking a navigation link
              const sidebarLinks = mobileSidebar?.querySelectorAll('a[href^="/"]');
              sidebarLinks?.forEach(link => {
                link.addEventListener('click', closeSidebarFunc);
              });
            });
          `
        }} />
        <main className="min-h-screen">
        {children}
        </main>
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-end mb-4">
                  <div className="p-2 rounded-lg">
                    <Image className="h-10 w-10" src={logo} alt="Logo" />
                  </div>
              <div>
                    <span className="text-xl font-bold">Valliams Corporation</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Leading software company providing comprehensive HR services, expert client support, and cutting-edge project development across all modern technologies.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.311-.623-.311-1.543c0-1.446.839-2.525 1.883-2.525.888 0 1.317.664 1.317 1.46 0 .889-.566 2.219-.858 3.449-.244 1.03.516 1.87 1.533 1.87 1.84 0 3.254-1.943 3.254-4.749 0-2.482-1.784-4.218-4.333-4.218-2.954 0-4.69 2.214-4.69 4.499 0 .891.342 1.847.769 2.364a.36.36 0 0 1 .083.343c-.091.378-.293 1.191-.332 1.358-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.357-.63-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-400">Our Services</h3>
                <ul className="space-y-2">
                  <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">HR Consulting</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Staff Augmentation</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Custom Development</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Project Management</a></li>
                  <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Technical Support</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 flex items-center">
                    <svg className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@valliams.com
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <svg className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +91 6383992292
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <svg className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Chennai, Tamilnadu, India - 603103
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400">
                &copy; 2024 Valliams Corporation. All rights reserved. | 
                <span className="text-green-400"> Empowering businesses through technology and talent.</span>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
