import Link from "next/link"
import { ArrowRight, Users, Shield, Globe, Award, CheckCircle, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50/30 to-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  About <span className="text-gradient">Tamil World Bank</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded in 1999, Tamil World Bank has been serving the global Tamil community with culturally-aware
                  banking solutions, fostering economic growth and preserving cultural heritage.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary group">
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/leadership" className="btn-secondary">
                  Meet Our Team
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-100/50 to-white rounded-2xl p-8">
                <img
                  src="/pic/aboutpage.png?height=500&width=600"
                  alt="Tamil World Bank Heritage"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  To empower the Tamil community worldwide by providing accessible, culturally-sensitive financial
                  services that support individual dreams, business growth, and community development while preserving
                  our rich cultural heritage.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Provide inclusive financial services to Tamil communities globally</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Support rural development and agricultural financing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Foster cultural preservation through community programs</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                <p className="text-lg text-gray-600">
                  To be the leading financial institution for the Tamil diaspora, recognized for our commitment to
                  cultural values, innovative banking solutions, and unwavering support for community prosperity.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Be the preferred bank for Tamil families and businesses</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Lead in digital banking innovation with cultural sensitivity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">Create lasting positive impact in Tamil communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to serving thousands of Tamil families worldwide, our story is one of community,
              trust, and shared prosperity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-green-600">1999</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Foundation</h3>
              <p className="text-gray-600">
                Established in Chennai with a vision to serve the Tamil community with culturally-aware banking
                services.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-green-600">2010</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Global Expansion</h3>
              <p className="text-gray-600">
                Extended services to Tamil diaspora communities in Canada, UK, Singapore, and other countries.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-green-600">2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Digital Innovation</h3>
              <p className="text-gray-600">
                Launched advanced digital banking platform with Tamil language support and AI-powered financial
                insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape our commitment to the Tamil community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through transparency, integrity, and reliability.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Community</h3>
              <p className="text-gray-600">Fostering unity and supporting the growth of Tamil communities worldwide.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                Embracing technology while honoring traditional values and cultural heritage.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Excellence</h3>
              <p className="text-gray-600">Delivering exceptional service and continuously improving our offerings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 text-center text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Be Part of Our Story?</h2>
              <p className="text-xl text-green-100">
                Join thousands of Tamil families who trust us with their financial journey. Experience banking that
                understands your culture and supports your dreams.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/contact"
                  className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  Open Account Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
