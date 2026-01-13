import { Wind, Zap, Camera, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesPage() {
  const services = [
    {
      icon: Wind,
      title: 'ACMV Works',
      description: 'Comprehensive air conditioning, mechanical, and ventilation solutions for commercial and industrial facilities.',
      image: 'https://images.unsplash.com/photo-1759646827242-cf09e30709aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIVkFDJTIwaW5kdXN0cmlhbCUyMGVuZ2luZWVyaW5nfGVufDF8fHx8MTc2ODI3ODkzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Design and installation of HVAC systems',
        'Ventilation and air quality management',
        'Chiller and cooling tower systems',
        'Ducting and air distribution networks',
        'System maintenance and optimization',
        'Energy-efficient solutions',
      ],
    },
    {
      icon: Zap,
      title: 'M&E Works',
      description: 'Expert mechanical and electrical engineering services tailored to your project requirements.',
      image: 'https://images.unsplash.com/photo-1558054665-fbe00cd7d920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY29udHJvbCUyMHBhbmVsfGVufDF8fHx8MTc2ODI3ODkzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Electrical system design and installation',
        'Power distribution and management',
        'Lighting systems and controls',
        'Fire alarm and detection systems',
        'Emergency power systems',
        'Testing and commissioning',
      ],
    },
    {
      icon: Camera,
      title: 'CCTV & Door Access Systems',
      description: 'Advanced security solutions including surveillance and access control systems.',
      image: 'https://images.unsplash.com/photo-1653039923048-aa285ded90ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN5c3RlbXxlbnwxfHx8fDE3NjgyNzg5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'HD and IP camera installation',
        'Video surveillance systems',
        'Card access and biometric systems',
        'Intercom and communication systems',
        'Remote monitoring capabilities',
        'Integration with building management systems',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Smart Home Lighting Systems',
      description: 'Intelligent lighting solutions for modern residential and commercial spaces.',
      image: 'https://images.unsplash.com/photo-1679356505858-bf4129177392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2ODIyMDI1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      features: [
        'Smart lighting control systems',
        'Automated scheduling and scenes',
        'Energy-efficient LED solutions',
        'Mobile app integration',
        'Voice control compatibility',
        'Customizable lighting designs',
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1761396716215-9ccb2a7eda9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHklMjB2ZW50aWxhdGlvbnxlbnwxfHx8fDE3NjgyNzg5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#003d82]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our Services
            </h1>
            <div className="w-20 h-1 bg-white mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl">
              Comprehensive engineering solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-[500px] rounded-sm overflow-hidden shadow-2xl ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-[#003d82] flex items-center justify-center">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                </div>
                <div className="w-20 h-1 bg-[#003d82] mb-8"></div>

                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-xl mb-6">
                    What We Offer:
                  </h3>
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start space-x-4 group"
                    >
                      <CheckCircle
                        size={22}
                        className="text-[#003d82] mt-0.5 flex-shrink-0"
                      />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact us today to discuss your project requirements and discover how our engineering solutions can benefit your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-5 bg-white text-[#003d82] font-bold rounded hover:bg-gray-100 transition-all shadow-lg hover:shadow-2xl"
          >
            Contact Us
            <ArrowRight size={20} className="ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
}