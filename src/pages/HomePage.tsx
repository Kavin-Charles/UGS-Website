import { Link } from 'react-router-dom';
import { Shield, Award, CheckCircle, Handshake, Wind, Zap, Camera, Lightbulb, ArrowRight } from 'lucide-react';

export function HomePage() {
  const coreValues = [
    {
      icon: Shield,
      title: 'Safety',
      description: 'Committed to the highest safety standards in every project',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Excellence in engineering and installation services',
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Dependable solutions backed by proven expertise',
    },
    {
      icon: Handshake,
      title: 'Commitment',
      description: 'Dedicated to client satisfaction and long-term partnerships',
    },
  ];

  const services = [
    {
      icon: Wind,
      title: 'ACMV Works',
      description: 'Comprehensive air conditioning, mechanical, and ventilation solutions for commercial and industrial facilities.',
      image: 'https://images.unsplash.com/photo-1759646827242-cf09e30709aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIVkFDJTIwaW5kdXN0cmlhbCUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc2ODI3ODkzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Zap,
      title: 'M&E Works',
      description: 'Expert mechanical and electrical engineering services tailored to your project requirements.',
      image: 'https://images.unsplash.com/photo-1558054665-fbe00cd7d920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMHBhbmVsfGVufDF8fHx8MTc2ODI3ODkzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Camera,
      title: 'CCTV & Door Access Systems',
      description: 'Advanced security solutions including surveillance and access control systems.',
      image: 'https://images.unsplash.com/photo-1653039923048-aa285ded90ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN5c3RlbXxlbnwxfHx8fDE3NjgyNzg5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Lightbulb,
      title: 'Smart Home Lighting Systems',
      description: 'Intelligent lighting solutions for modern residential and commercial spaces.',
      image: 'https://images.unsplash.com/photo-1679356505858-bf4129177392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2ODIyMDI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[650px] md:h-[750px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1738162837389-3b02d6dd507b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZW5naW5lZXJpbmclMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzY4Mjc4OTM2fDA&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#003d82]/95 via-[#003d82]/85 to-[#003d82]/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Engineering Excellence in ACMV & MEP Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
              Your trusted partner for comprehensive engineering services across Singapore. Delivering quality, safety, and reliability in every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#003d82] font-semibold rounded hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-[#003d82] transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#003d82] rounded-full mb-4 group-hover:bg-[#002d62] transition-colors">
                  <value.icon size={36} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-[#003d82] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering solutions tailored to meet the diverse needs of our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="h-72 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <service.icon size={28} className="text-[#003d82]" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[#003d82] font-semibold hover:gap-3 gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[550px] rounded-sm overflow-hidden shadow-2xl order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1765888366685-c3071053f426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMHNpbmdhcG9yZXxlbnwxfHx8fDE3NjgyNzg5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Modern Singapore Building"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Ultra Global Services
              </h2>
              <div className="w-20 h-1 bg-[#003d82] mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Ultra Global Services Pte. Ltd. is a leading engineering company based in Singapore, specializing in ACMV, M&E, and integrated security systems. With years of experience in the industry, we have built a reputation for delivering high-quality engineering solutions that meet the highest standards of safety and reliability.
              </p>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Our team of experienced professionals is committed to providing exceptional service and innovative solutions tailored to each client's unique requirements.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-10 py-4 bg-[#003d82] text-white font-semibold rounded hover:bg-[#002d62] transition-all shadow-lg hover:shadow-xl"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certified & Compliant
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto">
            We maintain the highest industry standards and certifications to ensure quality and safety in all our projects
          </p>
          <div className="inline-flex items-center justify-center px-16 py-12 bg-white/10 backdrop-blur-sm rounded-sm border-2 border-white/30">
            <div className="text-center">
              <div className="mx-auto mb-6">
                <img src="/bizsafe.png" alt="bizSAFE Level 3 Certificate" className="w-28 h-auto object-contain" />
              </div>
              <h3 className="text-3xl font-bold mb-3">bizSAFE Level 3</h3>
              <p className="text-gray-300 text-lg">Certified Safety Management System</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}