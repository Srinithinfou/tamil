import Link from "next/link"
import { ArrowRight, Heart, Users, Sprout, BookOpen, CheckCircle, Award, Globe } from "lucide-react"

export default function CultureRuralPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50/30 to-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Culture & <span className="text-gradient">Rural Finance</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Supporting Tamil cultural preservation and rural development through specialized financial programs,
                  community grants, and agricultural financing solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary group">
                  Apply for Grants
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-100/50 to-white rounded-2xl p-8">
                <img
                  src="/pic/green1.png?height=300&width=400"
                  alt="Tamil Culture and Rural Development"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Programs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Cultural Preservation Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated to preserving and promoting Tamil culture, language, and traditions through financial support
              and community initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education Grants</h3>
              <p className="text-gray-600 mb-6">
                Financial support for Tamil language schools, cultural education programs, and scholarship funds.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Tamil language schools
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Student scholarships
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cultural curriculum development
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
              >
                Apply Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural Events</h3>
              <p className="text-gray-600 mb-6">
                Funding for Tamil festivals, cultural performances, and community celebrations worldwide.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Festival celebrations
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cultural performances
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Community gatherings
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
              >
                Apply Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Arts & Literature</h3>
              <p className="text-gray-600 mb-6">
                Support for Tamil artists, writers, and cultural creators to preserve and promote Tamil heritage.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Literary publications
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Art exhibitions
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cultural research projects
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
              >
                Apply Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rural Finance Section */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Rural Development Finance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empowering rural Tamil communities through agricultural loans, microfinance, and development programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Sprout className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Agricultural Loans</h3>
              <p className="text-gray-600 mb-6">
                Specialized financing for farming activities, equipment, and crop cultivation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Crop loans at 7% interest
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Equipment financing available
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Flexible repayment terms
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
              >
                Apply Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Microfinance Programs</h3>
              <p className="text-gray-600 mb-6">
                Small loans and financial services for rural entrepreneurs and self-help groups.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Self-help group loans
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Women entrepreneur support
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Financial literacy programs
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
              >
                Apply Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Development</h3>
              <p className="text-gray-600 mb-6">Infrastructure and development projects for rural Tamil communities.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Water and sanitation projects
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Educational infrastructure
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Healthcare facilities
                </li>
              </ul>
              <Link
                href="/contact"
                className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
              >
                Apply Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Community Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measuring our success through the positive impact we create in Tamil communities worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-gray-600 font-medium">Cultural Events Funded</div>
              <div className="text-sm text-gray-500">Across 15 countries</div>
            </div>

            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-green-600">₹50Cr+</div>
              <div className="text-gray-600 font-medium">Rural Loans Disbursed</div>
              <div className="text-sm text-gray-500">Supporting farmers</div>
            </div>

            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-green-600">1,200+</div>
              <div className="text-gray-600 font-medium">Families Supported</div>
              <div className="text-sm text-gray-500">Through microfinance</div>
            </div>

            <div className="text-center space-y-4">
              <div className="text-3xl font-bold text-green-600">25+</div>
              <div className="text-gray-600 font-medium">Schools Established</div>
              <div className="text-sm text-gray-500">Tamil education</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 text-center text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Join Our Cultural Mission</h2>
              <p className="text-xl text-green-100">
                Be part of preserving Tamil culture and supporting rural communities. Apply for grants or explore our
                financing programs today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/contact"
                  className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  Apply for Grants
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Get Rural Financing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
