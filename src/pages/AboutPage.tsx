import { Shield, Award, CheckCircle, Handshake, Target, Eye } from 'lucide-react';

export function AboutPage() {
  const coreValues = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize safety in every aspect of our operations, ensuring a secure working environment for our team and clients. Our bizSAFE Level 3 certification demonstrates our commitment to world-class safety standards.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Our dedication to quality drives us to deliver exceptional engineering solutions. We employ rigorous quality control processes and utilize the latest technologies to ensure superior results.',
    },
    {
      icon: CheckCircle,
      title: 'Reliability',
      description: 'Clients trust us to deliver on our promises. Our track record of successful project completions and long-term client relationships speaks to our reliability and consistency.',
    },
    {
      icon: Handshake,
      title: 'Commitment',
      description: 'We are committed to building lasting partnerships with our clients. Our team goes above and beyond to ensure client satisfaction and project success.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[450px] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1765888366685-c3071053f426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMHNpbmdhcG9yZXxlbnwxfHx8fDE3NjgyNzg5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#003d82]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About Us
            </h1>
            <div className="w-20 h-1 bg-white mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl">
              Leading the way in engineering excellence across Singapore
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-[#003d82] mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ultra Global Services Pte. Ltd. is a premier engineering company based in Singapore, specializing in comprehensive ACMV (Air Conditioning, Mechanical, and Ventilation), M&E (Mechanical & Electrical), and integrated smart security solutions. Since our establishment, we have been dedicated to delivering innovative engineering solutions that meet the evolving needs of our clients.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our expertise spans across commercial, industrial, and residential sectors, where we have successfully completed numerous projects of varying complexity. We pride ourselves on our ability to deliver tailored solutions that not only meet but exceed client expectations, while maintaining the highest standards of safety, quality, and reliability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a team of highly skilled engineers, technicians, and project managers, we bring together technical excellence and industry best practices to every project. Our commitment to continuous improvement and staying at the forefront of technological advancements ensures that our clients benefit from cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-sm shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-[#003d82] flex items-center justify-center mb-6">
                <Target size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="w-16 h-1 bg-[#003d82] mb-6"></div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide world-class engineering solutions that enhance the built environment across Singapore. We strive to deliver innovative, sustainable, and cost-effective services while maintaining the highest standards of safety, quality, and professionalism in every project we undertake.
              </p>
            </div>
            <div className="bg-white p-12 rounded-sm shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-16 h-16 bg-[#003d82] flex items-center justify-center mb-6">
                <Eye size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="w-16 h-1 bg-[#003d82] mb-6"></div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be Singapore's most trusted and innovative engineering services provider, recognized for our technical excellence, reliability, and commitment to client success. We envision a future where our solutions contribute to smarter, safer, and more sustainable buildings and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-[#003d82] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-10 rounded-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#003d82] flex items-center justify-center flex-shrink-0">
                    <value.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leadership & Expertise
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our leadership team brings together decades of combined experience in engineering, project management, and client service. Under the guidance of our directors, Ultra Global Services has grown to become a trusted name in Singapore's engineering sector.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our management philosophy emphasizes technical excellence, operational efficiency, and a client-centric approach. This has enabled us to build strong, long-lasting relationships with clients across various industries while maintaining our reputation for delivering projects on time and within budget.
            </p>
          </div>
        </div>
      </section>

      {/* Singapore-Focused Excellence */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1765888366685-c3071053f426?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZyUyMHNpbmdhcG9yZXxlbnwxfHx8fDE3NjgyNzg5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Singapore Skyline"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Singapore-Focused Engineering Credibility
              </h2>
              <div className="w-20 h-1 bg-[#003d82] mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a Singapore-based company, we have an in-depth understanding of local building codes, regulations, and industry standards. This expertise, combined with our commitment to compliance, ensures that all our projects meet or exceed regulatory requirements.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We are proud to contribute to Singapore's built environment, working on projects that range from commercial office buildings to industrial facilities and residential developments. Our local expertise and industry connections enable us to deliver efficient, reliable solutions that are perfectly suited to Singapore's unique requirements.
              </p>
              <div className="bg-gray-50 p-8 rounded-sm border-l-4 border-[#003d82]">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Certified & Compliant</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-[#003d82] flex-shrink-0" />
                    <span>bizSAFE Level 3 Certified</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-[#003d82] flex-shrink-0" />
                    <span>Full compliance with Singapore building regulations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-[#003d82] flex-shrink-0" />
                    <span>Commitment to industry best practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}