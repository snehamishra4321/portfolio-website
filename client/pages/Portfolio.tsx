import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6 lg:px-12">
        <div className="text-white text-xl font-semibold tracking-wide">
          Sneha Mishra
        </div>
        <nav className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-white/80 hover:text-cyan-400 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="text-white hover:text-cyan-400 transition-all duration-300 border-b border-cyan-400"
          >
            Portfolio
          </Link>
          <Link
            to="/research"
            className="text-white/80 hover:text-cyan-400 transition-all duration-300"
          >
            Research
          </Link>
          <Link
            to="/contact"
            className="text-white/80 hover:text-cyan-400 transition-all duration-300"
          >
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <section className="relative z-10 px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Project Highlights */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Featured Projects
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-cyan-400 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    AI Virtual Historian Chatbot
                  </h3>
                  <p className="text-cyan-400 text-sm mb-2">
                    Ancestry Inc. | Executive Panel Presentation
                  </p>
                  <p className="text-white/70 text-sm">
                    RAG pipeline for 100K+ family history books with hybrid
                    retrieval, achieving 0.85 MRR and 0.78 ROUGE-1 scores.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">
                      RAG
                    </span>
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                      LLMs
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded text-xs">
                      BERT
                    </span>
                  </div>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Scholar Recommendation System
                  </h3>
                  <p className="text-purple-400 text-sm mb-2">
                    Texas A&M University | Production System
                  </p>
                  <p className="text-white/70 text-sm">
                    LLM-powered system using Llama2 with QLoRA and RAG, now used
                    by VP of Research for 2000+ grants annually.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                      Llama2
                    </span>
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">
                      QLoRA
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded text-xs">
                      VectorDB
                    </span>
                  </div>
                </div>

                <div className="border-l-4 border-emerald-400 pl-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Cancer Biomarker Detection
                  </h3>
                  <p className="text-emerald-400 text-sm mb-2">
                    Nature Publication | Research Breakthrough
                  </p>
                  <p className="text-white/70 text-sm">
                    Multi-class classification using ViT, ResNet50, and
                    InceptionV3 for breast cancer tissue analysis.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded text-xs">
                      Computer Vision
                    </span>
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">
                      Vision Transformers
                    </span>
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                      Medical AI
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Technologies */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Technical Expertise
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                    AI & Machine Learning
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      PyTorch
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      TensorFlow
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      HuggingFace
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      LangChain
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      Scikit-Learn
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">
                    Cloud & Infrastructure
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      AWS
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      Docker
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      Databricks
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      MLflow
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      Airflow
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                    Programming
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      Python
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      SQL
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      Scala
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      C++
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      R
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-3">
                    Specialized Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      FAISS
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      Weights & Biases
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      Tableau
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      Git
                    </span>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      Jenkins
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-8">
              Professional Journey
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      Machine Learning Engineer
                    </h3>
                    <span className="text-cyan-400 text-sm">
                      Nov 2024 - Present
                    </span>
                  </div>
                  <p className="text-cyan-400 font-medium mb-2">
                    Wizerr AI, Austin, Texas
                  </p>
                  <p className="text-white/70 text-sm">
                    Building scalable AI pipelines for semiconductor
                    cross-reference tools, fine-tuning LLMs, and developing RAG
                    infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      Data Science-AI-NLP-CV Intern
                    </h3>
                    <span className="text-purple-400 text-sm">
                      May 2024 - Sep 2024
                    </span>
                  </div>
                  <p className="text-purple-400 font-medium mb-2">
                    Ancestry, Lehi, Utah
                  </p>
                  <p className="text-white/70 text-sm">
                    Developed AI-driven virtual historian chatbot selected for
                    executive panel presentation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-emerald-400 rounded-full mt-2"></div>
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      Design Lead / Product Owner
                    </h3>
                    <span className="text-emerald-400 text-sm">
                      Mar 2021 - Jun 2022
                    </span>
                  </div>
                  <p className="text-emerald-400 font-medium mb-2">
                    HCLTech, Chennai, India
                  </p>
                  <p className="text-white/70 text-sm">
                    Led Agile NPD projects worth $10MM, from ideation to
                    deployment and maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Interested in My Work?
              </h2>
              <p className="text-white/70 mb-6">
                This portfolio showcases just a glimpse of my projects. For
                detailed case studies, code samples, or to discuss potential
                collaborations, let's connect!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </Link>
                <Link
                  to="/research"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View Research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
