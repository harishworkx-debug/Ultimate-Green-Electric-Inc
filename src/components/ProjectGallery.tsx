import { useState } from 'react';
import { Shield, MapPin, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { PROJECT_GALLERY, ProjectItem, BUSINESS } from '@/data/business';
import { Link } from 'react-router-dom';

export default function ProjectGallery({ title = "Recent Electrical Projects in Mission Viejo & South OC", subtitle = "View our code-compliant electrical work — from 200A service panel upgrades to Level 2 EV charging stations and commercial buildouts." }: { title?: string; subtitle?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Panel Upgrade', 'EV Charger', 'Residential', 'Commercial', 'Repairs'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECT_GALLERY
    : PROJECT_GALLERY.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-24 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            Verified Workmanship · CA Lic #{BUSINESS.license}
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            {title}
          </h2>
          <p className="text-dark-600 text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-primary-500 text-white shadow-md shadow-primary-500/20'
                  : 'bg-white text-dark-600 hover:bg-dark-100 border border-dark-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-dark-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-dark-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {project.category}
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-medium bg-dark-950/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                  <MapPin className="w-3.5 h-3.5 text-primary-400" />
                  {project.location}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-display font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-600 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Specs chips */}
                <div className="space-y-1.5 pt-4 border-t border-dark-100 mb-5">
                  {project.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-dark-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="text-xs font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1"
                  >
                    <span>Request Similar Project</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  <span className="text-[11px] text-dark-400 font-medium">CA Lic #{BUSINESS.license}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-dark-900 rounded-2xl p-6 md:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-dark-800">
          <div>
            <h4 className="text-xl font-display font-bold mb-1">
              Have a Specific Electrical Project in Mind?
            </h4>
            <p className="text-dark-300 text-sm">
              We provide itemized upfront quotes with city permit processing included.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#estimate-section"
              className="bg-primary-500 hover:bg-primary-400 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap shadow-lg hover:shadow-primary-500/30"
            >
              Get Free Estimate
            </a>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
