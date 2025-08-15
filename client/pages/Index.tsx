import { Link } from 'react-router-dom';

export default function Index() {
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
          <Link to="/" className="text-white hover:text-blue-300 transition-colors border-b-2 border-red-500 pb-1">
            Home
          </Link>
          <Link to="/portfolio" className="text-white hover:text-blue-300 transition-colors">
            Portfolio
          </Link>
          <button className="text-white hover:text-blue-300 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-16 lg:py-24">
        <h1 className="text-6xl lg:text-8xl font-light text-white mb-12">
          Home
        </h1>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-white text-lg lg:text-xl font-light leading-relaxed">
            Data Analytics | Data Engineering | Data Science | Machine Learning & Statistics | Deep Learning | Natural Language Processing | Recommendation Systems
          </p>
        </div>
      </section>

      {/* Red divider line */}
      <div className="w-full h-1 bg-red-500 relative z-10"></div>

      {/* About Section */}
      <section className="relative z-10 bg-gradient-to-r from-slate-800/90 to-slate-900/90 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-8">
                About me:
              </h2>
              <div className="space-y-6 text-white text-base lg:text-lg leading-relaxed">
                <p>
                  Welcome to my website! I'm Sneha, an experienced data professional passionate about optimizing data processes and infrastructure to drive effective and efficient data-driven solutions.
                </p>
                <p>
                  As a Master's student in Data Science at Texas A&M University, specializing in the Computer Science department, I'm excited to share my academic journey, projects, and research interests with you.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Sneha Mishra" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
