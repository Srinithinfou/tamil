import Link from "next/link"
import { ArrowRight, Handshake, Globe, Award, CheckCircle, Building, Users } from "lucide-react"

export default function PartnersPage() {
  const partners = [
    {
      name: "Tamil Cultural Association",
      type: "Cultural Partner",
      description: "Promoting Tamil culture and heritage through educational programs and events.",
      logo: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Rural Development Foundation",
      type: "Development Partner",
      description: "Supporting rural communities with infrastructure and development projects.",
      logo: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Tamil Business Network",
      type: "Business Partner",
      description: "Connecting Tamil entrepreneurs and businesses globally for mutual growth.",
      logo: "/placeholder.svg?height=100&width=200",
    },
    {
      name: "Educational Trust",
      type: "Education Partner",
      description: "Advancing Tamil education and scholarship programs worldwide.",
      logo: "/placeholder.svg?height=100&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50/30 to-white section-padding">
        <div className="container-custom">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Our <span className="text-gradient">Partners</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Building strong partnerships with organizations that share our commitment to serving the Tamil community
                and fostering cultural preservation and economic growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary group">
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Partnership Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with various organizations to maximize our impact in the Tamil community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Building className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Partners</h3>
              <p className="text-gray-600 mb-6">
                Collaborating with banks, credit unions, and financial institutions to expand our reach.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Correspondent banking
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Technology sharing
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Joint product development
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Partners</h3>
              <p className="text-gray-600 mb-6">
                Working with cultural organizations and community groups to preserve Tamil heritage.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Cultural event sponsorship
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Educational programs
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Community development
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Partners</h3>
              <p className="text-gray-600 mb-6">
                Partnering with fintech companies to deliver innovative banking solutions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Digital banking platforms
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Mobile applications
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Security solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Partners Section */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Featured Partners</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet some of our key partners who help us serve the Tamil community better.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="w-20 h-12 object-contain flex-shrink-0"
                  />
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{partner.name}</h3>
                      <p className="text-green-600 font-medium">{partner.type}</p>
                    </div>
                    <p className="text-gray-600">{partner.description}</p>
                    <Link
                      href="/contact"
                      className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why Partner With Us?</h2>
                <p className="text-lg text-gray-600">
                  Join our mission to serve the Tamil community and create lasting positive impact together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Handshake className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mutual Growth</h3>
                    <p className="text-gray-600">
                      Collaborate for shared success and expand your reach in the Tamil community.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Shared Values</h3>
                    <p className="text-gray-600">
                      Work with an organization that shares your commitment to community service.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Global Network</h3>
                    <p className="text-gray-600">Access our extensive network of Tamil communities worldwide.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-green-50/30 to-white rounded-2xl p-8">
                <img
                  src="/pic/con.png?height=500&width=600"
                  alt="Partnership Collaboration"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 lg:p-12 text-center text-white">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Ready to Partner With Us?</h2>
              <p className="text-xl text-green-100">
                Join our network of partners and help us create positive impact in the Tamil community. Let's work
                together for a better future.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/contact"
                  className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center"
                >
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Partnership Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
