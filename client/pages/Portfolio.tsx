import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 left-10 w-24 h-24 bg-green-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-blue-300/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-teal-400/15 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <div className="text-white text-xl font-medium">
          Sneha Mishra
        </div>
        <nav className="flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-blue-300 transition-colors">
            Home
          </Link>
          <Link to="/portfolio" className="text-white hover:text-blue-300 transition-colors border-b-2 border-red-500 pb-1">
            Portfolio
          </Link>
          <button className="text-white hover:text-blue-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <section className="relative z-10 text-center py-16 lg:py-24">
        <h1 className="text-6xl lg:text-8xl font-light text-white mb-12">
          Portfolio
        </h1>
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-slate-800/50 rounded-lg p-12 backdrop-blur-sm border border-slate-700">
            <h2 className="text-2xl font-light text-white mb-6">
              Coming Soon
            </h2>
            <p className="text-white/80 text-lg mb-8">
              This page is currently under development. Check back soon to see my latest projects and work samples.
            </p>
            <p className="text-white/60">
              Continue prompting to help build out this page with your portfolio content!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
