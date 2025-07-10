import Link from "next/link"
import { ArrowRight, Shield, Users, TrendingUp, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50/30 to-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Banking for the <span className="text-gradient">Tamil Community</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Empowering Tamil families and businesses worldwide with culturally-aware banking solutions, rural
                  finance programs, and community-focused financial services.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary group">
                  Open Account Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/products" className="btn-secondary">
                  Explore Services
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-gray-600">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">₹500Cr+</div>
                  <div className="text-sm text-gray-600">Loans Disbursed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-100/50 to-white rounded-2xl p-8">
                <img
                  src="/images/hero.png?height=500&width=600"
                  alt="Tamil World Bank - Community Banking"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Comprehensive Banking Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From traditional banking to specialized rural finance, we offer culturally-sensitive financial solutions
              designed for the Tamil community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Personal Banking */}
            <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Banking</h3>
              <p className="text-gray-600 mb-6">
                Savings accounts, fixed deposits, and personal loans tailored for Tamil families.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Tamil language support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cultural festival bonuses
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Flexible terms
                </li>
              </ul>
              <Link
                href="/products"
                className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Business Banking */}
            <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Banking</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive business solutions for Tamil entrepreneurs and enterprises.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  SME loan programs
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Trade finance solutions
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Digital banking tools
                </li>
              </ul>
              <Link
                href="/products"
                className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Rural Finance */}
            <div className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-green-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rural Finance</h3>
              <p className="text-gray-600 mb-6">Specialized agricultural and rural development financing programs.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Agricultural loans
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Microfinance programs
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Community development
                </li>
              </ul>
              <Link
                href="/culture-rural"
                className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
              >
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Tamil Families Trust Us</h2>
                <p className="text-lg text-gray-600">
                  We understand the unique financial needs of the Tamil community and provide culturally-aware banking
                  solutions with personalized service.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Cultural Understanding</h3>
                    <p className="text-gray-600">
                      Our team speaks Tamil and understands cultural values, festivals, and community needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Trusted Security</h3>
                    <p className="text-gray-600">
                      Advanced security measures and regulatory compliance to protect your financial assets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Community Growth</h3>
                    <p className="text-gray-600">
                      Committed to supporting Tamil community development through specialized programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-50/30 to-white rounded-2xl p-8">
                <img
                  src="/images/about.png?height=400&width=500"
                  alt="Tamil Community Banking"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Community Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Serving the Tamil community with pride and dedication for over two decades.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600 font-medium">Active Customers</div>
              <div className="text-sm text-gray-500 mt-1">Across 15 countries</div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">₹500Cr+</div>
              <div className="text-gray-600 font-medium">Loans Disbursed</div>
              <div className="text-sm text-gray-500 mt-1">Supporting dreams</div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Years of Service</div>
              <div className="text-sm text-gray-500 mt-1">Trusted experience</div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Customer Satisfaction</div>
              <div className="text-sm text-gray-500 mt-1">Rated by customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 text-center text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Join Our Banking Family?</h2>
              <p className="text-xl text-green-100">
                Experience banking that understands your culture, supports your dreams, and grows with your community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/contact"
                  className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  Open Account Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-green-500">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5 text-green-200" />
                  <span className="text-green-100">+91 44 2345 6789</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-5 w-5 text-green-200" />
                  <span className="text-green-100">info@tamilworldbank.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-5 w-5 text-green-200" />
                  <span className="text-green-100">Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
