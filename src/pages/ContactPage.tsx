import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '02cf0842-c457-4aaa-ac15-82a7d336ef2c',
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: 'UGS Website Contact Form',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          service: formData.service || 'Not specified',
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              Contact Us
            </h1>
            <div className="w-20 h-1 bg-white mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl">
              Get in touch with our team to discuss your engineering needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-10">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-[#003d82] flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      No. 24 Clive Street<br />
                      Singapore 209780
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-[#003d82] flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone</h3>
                    <p className="text-gray-600 text-lg">+65 6680 7382</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-[#003d82] flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                    <p className="text-gray-600 text-lg">admin@ugsengineers.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-[#003d82] flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Business Hours</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Details Box */}
              <div className="mt-10 bg-gray-50 p-8 rounded-sm border-l-4 border-[#003d82]">
                <h3 className="font-bold text-gray-900 mb-6 text-lg">Company Details</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p><strong>Company Name:</strong><br />Ultra Global Services Pte. Ltd.</p>
                  <p><strong>Industry:</strong><br />MEP Engineering & ACMV Services</p>
                  <p><strong>Certification:</strong><br />bizSAFE Level 3</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-10 rounded-sm shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send Us a Message
                </h2>

                {submitted && (
                  <div className="mb-8 p-5 bg-green-50 border-l-4 border-green-500">
                    <p className="text-green-800 font-medium">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="mb-8 p-5 bg-red-50 border-l-4 border-red-500">
                    <p className="text-red-800 font-medium">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-[#003d82] focus:border-transparent outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-[#003d82] focus:border-transparent outline-none transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-[#003d82] focus:border-transparent outline-none transition-all"
                        placeholder="+65 XXXX XXXX"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">
                        COMPANY NAME
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-[#003d82] focus:border-transparent outline-none transition-all"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">
                      SERVICE INTERESTED IN
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-[#003d82] focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="acmv">ACMV Works</option>
                      <option value="me">M&E Works</option>
                      <option value="cctv">CCTV & Door Access Systems</option>
                      <option value="smart-lighting">Smart Home Lighting Systems</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-3 tracking-wide">
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-sm focus:ring-2 focus:ring-[#003d82] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full md:w-auto inline-flex items-center justify-center px-12 py-5 bg-[#003d82] text-white font-bold rounded-sm hover:bg-[#002d62] transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={20} className="mr-3 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="ml-3" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Location
          </h2>
          <div className="w-20 h-1 bg-[#003d82] mx-auto mb-12"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7798493397075!2d103.85461237496567!3d1.3050899986808282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a8bce11181%3A0x5e2d1d9c3d5b5b5d!2s24%20Clive%20St%2C%20Singapore%20209780!5e0!3m2!1sen!2ssg!4v1705123456789!5m2!1sen!2ssg"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-sm shadow-xl"
            title="Ultra Global Services Location"
          />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Ultra Global Services?
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              With our commitment to safety, quality, reliability, and client satisfaction, we deliver engineering solutions that stand the test of time. Our bizSAFE Level 3 certification and extensive experience across commercial, industrial, and residential sectors make us your trusted engineering partner in Singapore.
            </p>
            <div className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-12 py-5 rounded-sm font-bold tracking-wider text-lg">
              SAFETY • QUALITY • RELIABILITY • COMMITMENT
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}