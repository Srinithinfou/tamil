import type { Metadata } from "next"
import { Linkedin, Mail, Users, Target, Award, ExternalLink, Star, Globe, Briefcase } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Leadership Team - Tamil World Bank",
  description:
    "Meet the visionary leaders and advisory board members driving Tamil World Bank's mission of community-focused banking.",
}

const executiveLeaders = [
  {
    name: "Arun Kumar Manickam",
    title: "Founding Team & Chief Happiness Officer",
    image: "/pic/arun-kumar-manickam.png",
    bio: "Visionary banking professional with over two decades of experience across leading financial institutions including State Bank of India, IDBI Bank, ICICI Bank, ING Vysya Bank, and Cholamandalam DBS. Holds a Master's degree in Management from BSMED, Coimbatore, with strategic leadership capabilities enhanced through IIM-A.",
    linkedin: "https://www.linkedin.com/in/arun-kumar-manickam-b7476150/",
    email: "arun@tamilworldbank.com",
    expertise: ["Banking", "Leadership", "Strategy"],
    experience: "20+ Years",
  },
  {
    name: "S. Viswanathan",
    title: "Chairman, ASV Agriculture Research & Export P Ltd",
    image: "/pic/s-viswanathan.png",
    bio: "Visionary agripreneur and Chairman of ASV Agriculture Research & Export Pvt. Ltd. Strong commitment to innovation in farming practices, value-added agri-products, and promoting scientific research. Instrumental in farmer empowerment and positioning India as a global leader in agricultural exports.",
    linkedin: "#",
    email: "viswanathan@tamilworldbank.com",
    expertise: ["Agriculture", "Export", "Innovation"],
    experience: "25+ Years",
  },
  {
    name: "Ashwath Ram",
    title: "Chief Commercial Officer",
    image: "/pic/ashwath-ram.png",
    bio: "Seasoned professional with extensive experience in hospitality with deep understanding of the Indian market. Proven track record of delivering growth and profitability, creating strategies that drive revenue, increase market share, and enhance customer satisfaction.",
    linkedin: "https://www.linkedin.com/in/ashwath-ram-a40a972b/",
    email: "ashwath@tamilworldbank.com",
    expertise: ["Commercial", "Strategy", "Growth"],
    experience: "15+ Years",
  },
  {
    name: "N. C. Vasudev",
    title: "Director, ALBUM Semiconductors",
    image: "/pic/nc-vasudev.png",
    bio: "Seasoned semiconductor expert with over two decades of experience in advanced microelectronics, embedded systems, and memory technologies. Former Principal Engineer at ARM Embedded Technologies and senior positions at Intel, STMicroelectronics. M.Tech in Microelectronics from IIT Bombay.",
    linkedin: "https://www.linkedin.com/in/n-c-vasudev-63930512/",
    email: "vasudev@tamilworldbank.com",
    expertise: ["Technology", "Semiconductors", "Innovation"],
    experience: "20+ Years",
  },
]

const seniorLeaders = [
  {
    name: "Mohan Manickam",
    title: "General Manager - Operations",
    expertise: "25+ years in Business Planning & Control, Textile Industry Operations",
    certifications: "SAP Solution Consultant, ISO Lead Auditor, LEAN Six Sigma Black Belt",
    image: "/pic/mohan-manickam.png",
    specialization: "Operations",
  },
  {
    name: "Ramya Raman",
    title: "Head Corporate Relations",
    expertise: "20+ years in pharmaceutical distribution, CEO of Monarch Pharmaceuticals",
    linkedin: "https://www.linkedin.com/in/ramya-raman-b3b061368/",
    image: "/pic/ramya-raman.png",
    specialization: "Corporate Relations",
  },
  {
    name: "Sangeetha Kumar",
    title: "Chief Sports Officer",
    expertise: "Gold medalist in discus throw, Junior National Sports Meet 1997",
    linkedin: "https://www.linkedin.com/in/sangeetha-kumar-98ab94369/",
    image: "/pic/sangeetha-kumar.png",
    specialization: "Sports & Wellness",
  },
  {
    name: "Ashutosh Singh",
    title: "Chief Technology Officer",
    expertise: "10+ years in technology leadership, digital transformation, AI and cloud computing",
    linkedin: "https://www.linkedin.com/in/intelligem/",
    image: "/pic/ashutosh-singh.png",
    specialization: "Technology",
  },
]

const advisoryBoard = [
  {
    name: "Riyaz Shaik, CFA",
    title: "Advisory Board Member",
    expertise: "23+ years in banking, investment management, capital markets. Chartered Accountant and Cost Accountant",
    linkedin: "https://www.linkedin.com/in/riyazshaik/",
    image: "/pic/riyaz-shaik.png",
    category: "Financial Expert",
  },
  {
    name: "Dr. Elizabeth Zavier",
    title: "FinTech Innovation Advisor",
    expertise: "IIT & IIM credentials, 20+ years in FinTech innovation and AI-enabled solutions",
    linkedin: "https://www.linkedin.com/in/elizabethzavier/",
    image: "/pic/elizabeth-zavier.png",
    category: "Innovation Leader",
  },
  {
    name: "Puli S. Saravanan",
    title: "Corporate Strategy Advisor",
    expertise: "30+ years in Oil & Gas, Regional Turnaround Director at Shell Asia, MBA from Imperial College London",
    linkedin: "https://www.linkedin.com/in/pulisaravanan",
    image: "/pic/puli-saravanan.png",
    category: "Strategy Expert",
  },
  {
    name: "Kasiviswanathan Panchatsharam",
    title: "Automotive & EV Strategy Advisor",
    expertise: "25+ years in automotive innovation, EV policy development, former Global Director at VinFast LLC",
    linkedin: "https://www.linkedin.com/in/kasiviswanathan-panchatsharam-aa12b320/",
    image: "/pic/kasiviswanathan-panchatsharam.png",
    category: "Industry Pioneer",
  },
  {
    name: "Shrinithi Mohan",
    title: "Legal & Project Management Consultant",
    expertise: "Global project management experience, Agile practitioner, CRM strategist, PGDM in Enterprise Creation",
    linkedin: "https://www.linkedin.com/in/shrinithimohan/",
    image: "/pic/shrinithi-mohan.png",
    category: "Legal Expert",
  },
]

const honoraryAdvisors = [
  {
    name: "V. Krishnasamy",
    title: "Honorary Advisor",
    expertise: "43+ years at Singapore Airlines, 50+ years of Tamil community leadership in Singapore",
    background: "Veteran aviation professional and community leader, former President of Singai Tamil Association",
    image: "/pic/v-krishnasamy.png",
  },
]

const additionalLeaders = [
  {
    name: "Arun KJ",
    title: "Strategic Advisor",
    expertise: "Business development and strategic planning expertise",
    image: "/pic/arun-kj.png",
  },
  {
    name: "Dato Dr. Jason Murugasan",
    title: "Medical & Healthcare Strategic Advisor",
    expertise:
      "Distinguished healthcare leader with Malaysian Dato title, medical expertise and healthcare industry advisory services",
    image: "/pic/jason-murugasan.png",
  },
]

export default function LeadershipPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom section-padding">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-8 border border-white/20">
              <Globe className="w-4 h-4 mr-2" />
              Diverse Leadership from Global Tamil Community
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Leadership
              <span className="block bg-gradient-to-r from-green-300 to-green-100 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Meet the visionary leaders from diverse backgrounds - banking, technology, agriculture, healthcare, and
              community service - united by a common goal of empowering the Tamil community through innovative financial
              services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-2xl font-bold text-green-300">16+</span>
                <span className="text-white/90 ml-2">Leaders</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-2xl font-bold text-green-300">200+</span>
                <span className="text-white/90 ml-2">Years Combined Experience</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-2xl font-bold text-green-300">Global</span>
                <span className="text-white/90 ml-2">Expertise</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Executive Leadership */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-6">
              <Star className="w-4 h-4 mr-2" />
              Executive Leadership
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Founding Vision
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The founding team and core executives leading our transformative vision
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {executiveLeaders.map((leader, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 card-shadow group-hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="relative">
                      <div className="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-green-100 group-hover:ring-green-200 transition-all duration-300">
                        <Image
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          width={112}
                          height={112}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                      <p className="text-green-600 font-semibold mb-4">{leader.title}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {leader.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                          {leader.experience}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{leader.bio}</p>

                      <div className="flex space-x-3">
                        {leader.linkedin && leader.linkedin !== "#" && (
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors group"
                          >
                            <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-gray-700" />
                          </a>
                        )}
                        <a
                          href={`mailto:${leader.email}`}
                          className="p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                        >
                          <Mail className="h-5 w-5 text-green-600 group-hover:text-green-700" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Leadership */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Senior Leadership
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Operational{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals driving excellence across all functions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seniorLeaders.map((leader, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 card-shadow group-hover:scale-105 transition-all duration-300 text-center h-full">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto ring-4 ring-green-100 group-hover:ring-green-200 transition-all duration-300">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-green-600 font-semibold mb-3 text-sm">{leader.title}</p>

                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-full">
                      {leader.specialization}
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs mb-4 leading-relaxed">{leader.expertise}</p>

                  {leader.certifications && (
                    <p className="text-gray-500 text-xs mb-4 leading-relaxed">{leader.certifications}</p>
                  )}

                  {leader.linkedin && (
                    <div className="mt-auto">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-gray-600 hover:text-gray-700 font-medium"
                      >
                        <Linkedin className="h-3 w-3 mr-1" />
                        Connect
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="section-padding bg-gradient-to-br from-white to-green-50/30">
        <div className="container-custom">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-6">
              <Award className="w-4 h-4 mr-2" />
              Advisory Board
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Strategic{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Guidance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Distinguished advisors providing strategic guidance and industry expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryBoard.map((advisor, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 card-shadow group-hover:scale-105 transition-all duration-300 text-center h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-100 to-gray-100 rounded-bl-3xl"></div>

                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto ring-4 ring-green-100 group-hover:ring-green-200 transition-all duration-300">
                      <Image
                        src={advisor.image || "/placeholder.svg"}
                        alt={advisor.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                      {advisor.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{advisor.name}</h3>
                  <p className="text-green-600 font-semibold mb-4 text-sm">{advisor.title}</p>
                  <p className="text-gray-600 text-xs mb-6 leading-relaxed">{advisor.expertise}</p>

                  {advisor.linkedin && (
                    <a
                      href={advisor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-gray-600 hover:text-gray-700 font-medium bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full transition-colors"
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honorary & Strategic Advisors */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Honorary Advisors */}
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-6">
                  <Users className="w-4 h-4 mr-2" />
                  Honorary Advisors
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Community{" "}
                  <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                    Wisdom
                  </span>
                </h2>
              </div>

              {honoraryAdvisors.map((advisor, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-gray-50 rounded-2xl p-8 card-shadow">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-6 ring-4 ring-green-200">
                      <Image
                        src={advisor.image || "/placeholder.svg"}
                        alt={advisor.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{advisor.name}</h3>
                    <p className="text-green-600 font-semibold mb-4">{advisor.title}</p>
                    <p className="text-gray-600 text-sm mb-4">{advisor.expertise}</p>
                    <p className="text-gray-500 text-xs">{advisor.background}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Leaders */}
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full mb-6">
                  <Target className="w-4 h-4 mr-2" />
                  Strategic Leaders
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Specialized{" "}
                  <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                    Expertise
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                {additionalLeaders.map((leader, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 card-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden ring-4 ring-gray-100">
                        <Image
                          src={leader.image || "/placeholder.svg"}
                          alt={leader.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
                        <p className="text-green-600 font-semibold mb-2 text-sm">{leader.title}</p>
                        <p className="text-gray-600 text-xs">{leader.expertise}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our Leadership <span className="text-green-300">Philosophy</span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Guiding principles that drive our organizational culture and decision-making
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community-Driven Vision</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  We lead with a clear vision of empowering the Tamil community through innovative financial solutions
                  and cultural preservation.
                </p>
              </div>

              <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Diverse Expertise</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Our leadership brings together diverse expertise from banking, technology, agriculture, healthcare,
                  and community service.
                </p>
              </div>

              <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Global Perspective</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  We combine global experience with local understanding to serve the Tamil community worldwide
                  effectively.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
              <blockquote className="text-2xl font-light leading-relaxed mb-6">
                "Our leadership is built on the foundation of serving our community first. Every decision we make, every
                product we develop, and every service we offer is guided by our commitment to the Tamil community's
                prosperity and cultural preservation."
              </blockquote>
              <cite className="text-green-300 font-semibold">
                - Arun Kumar Manickam, Chief Happiness Officer & Founder
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Join Our Leadership{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We're always looking for passionate leaders who share our vision of community-focused banking and cultural
              empowerment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="btn-primary">
                Career Opportunities
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Leadership
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
