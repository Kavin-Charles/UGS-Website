import { Building2, Factory, Home } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      title: 'Commercial Office Tower',
      category: 'Commercial',
      type: 'ACMV & M&E Works',
      image: 'https://images.unsplash.com/photo-1765888366685-c3071053f426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMHNpbmdhcG9yZXxlbnwxfHx8fDE3NjgyNzg5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Complete ACMV and electrical installation for a 20-story commercial office building in the CBD.',
    },
    {
      title: 'Industrial Facility',
      category: 'Industrial',
      type: 'ACMV Works',
      image: 'https://images.unsplash.com/photo-1759646827242-cf09e30709aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIVkFDJTIwaW5kdXN0cmlhbCUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc2ODI3ODkzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Industrial-grade HVAC system for a manufacturing facility with precise climate control requirements.',
    },
    {
      title: 'Luxury Condominium',
      category: 'Residential',
      type: 'Smart Home Systems',
      image: 'https://images.unsplash.com/photo-1679356505858-bf4129177392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2ODIyMDI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Integrated smart home lighting and automation systems for a premium residential development.',
    },
    {
      title: 'Corporate Headquarters',
      category: 'Commercial',
      type: 'M&E & Security Systems',
      image: 'https://images.unsplash.com/photo-1558054665-fbe00cd7d920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMHBhbmVsfGVufDF8fHx8MTc2ODI3ODkzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Comprehensive electrical and security system installation for a multinational corporation.',
    },
    {
      title: 'Warehouse Complex',
      category: 'Industrial',
      type: 'ACMV & CCTV Systems',
      image: 'https://images.unsplash.com/photo-1761396716215-9ccb2a7eda9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHklMjB2ZW50aWxhdGlvbnxlbnwxfHx8fDE3NjgyNzg5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Ventilation systems and comprehensive surveillance for a large-scale logistics warehouse.',
    },
    {
      title: 'Shopping Mall',
      category: 'Commercial',
      type: 'ACMV & M&E Works',
      image: 'https://images.unsplash.com/photo-1704297275778-8763889fa47d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY4MTY3MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Large-scale ACMV and electrical infrastructure for a multi-level retail complex.',
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Commercial':
        return Building2;
      case 'Industrial':
        return Factory;
      case 'Residential':
        return Home;
      default:
        return Building2;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1738162837389-3b02d6dd507b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmclMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzY4Mjc4OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#003d82]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Projects
            </h1>
            <div className="w-20 h-1 bg-white mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl">
              Delivering excellence across commercial, industrial, and residential sectors
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-[#003d82] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of our recent engineering projects across Singapore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              return (
                <div
                  key={index}
                  className="bg-white overflow-hidden hover:shadow-2xl transition-all duration-500 group border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 bg-[#003d82] text-white px-5 py-2.5 flex items-center space-x-2 shadow-lg">
                      <CategoryIcon size={16} />
                      <span className="text-sm font-bold tracking-wide">{project.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <div className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-4 py-2 mb-4 tracking-wide">
                      {project.type}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <div className="text-6xl font-bold text-[#003d82] mb-4">50+</div>
              <div className="text-xl text-gray-700 font-semibold tracking-wide">Projects Completed</div>
            </div>
            <div className="p-8">
              <div className="text-6xl font-bold text-[#003d82] mb-4">100%</div>
              <div className="text-xl text-gray-700 font-semibold tracking-wide">Client Satisfaction</div>
            </div>
            <div className="p-8">
              <div className="text-6xl font-bold text-[#003d82] mb-4">15+</div>
              <div className="text-xl text-gray-700 font-semibold tracking-wide">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Project Sectors
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We serve diverse sectors across Singapore's built environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-sm text-center hover:bg-white/15 transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white mb-6">
                <Building2 size={36} className="text-[#003d82]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Commercial</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Office buildings, shopping malls, retail spaces, and commercial complexes
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-sm text-center hover:bg-white/15 transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white mb-6">
                <Factory size={36} className="text-[#003d82]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Industrial</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Manufacturing facilities, warehouses, logistics centers, and industrial plants
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-sm text-center hover:bg-white/15 transition-all">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white mb-6">
                <Home size={36} className="text-[#003d82]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Residential</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Condominiums, residential developments, and luxury homes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}