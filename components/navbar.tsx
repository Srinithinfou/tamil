"use client"

import { useState, useCallback, useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown } from "lucide-react"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const handleDropdownToggle = useCallback((dropdown: string) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown))
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [])

  // Memoize active states to prevent recalculation
  const activeStates = useMemo(
    () => ({
      home: pathname === "/",
      about: pathname === "/about",
      products: pathname === "/products",
      cultureRural: pathname === "/culture-rural",
      leadership: pathname === "/leadership",
      partners: pathname === "/partners",
      contact: pathname === "/contact",
      services: pathname === "/products" || pathname === "/culture-rural",
    }),
    [pathname],
  )

  const serviceItems = useMemo(
    () => [
      { href: "/products", label: "Products & Services", active: activeStates.products },
      { href: "/culture-rural", label: "Culture & Rural Finance", active: activeStates.cultureRural },
    ],
    [activeStates],
  )

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="relative w-10 h-10">
              <Image
                src="/images/twb-logo-tamil.png"
                alt="Tamil World Bank Logo"
                width={40}
                height={40}
                className="rounded-lg"
                priority
                loading="eager"
              />
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900">Tamil World Bank</span>
              <div className="text-xs text-gray-600 font-medium">Professional Banking Services</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors relative py-2 ${
                activeStates.home ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
              }`}
            >
              Home
              {activeStates.home && (
                <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-green-600 rounded-full"></div>
              )}
            </Link>

            <Link
              href="/about"
              className={`font-medium transition-colors relative py-2 ${
                activeStates.about ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
              }`}
            >
              About
              {activeStates.about && (
                <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-green-600 rounded-full"></div>
              )}
            </Link>

            {/* Services Dropdown - Enhanced with click highlighting */}
            <div className="relative group">
              <button
                onMouseEnter={() => setActiveDropdown("desktop-services")}
                onMouseLeave={() => setActiveDropdown(null)}
                className={`flex items-center font-medium transition-colors relative py-2 px-2 rounded-md ${
                  activeStates.services
                    ? "text-green-600 font-semibold"
                    : activeDropdown === "desktop-services"
                      ? "text-green-600 bg-green-50"
                      : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    activeDropdown === "desktop-services" ? "rotate-180" : ""
                  }`}
                />
                {activeStates.services && (
                  <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-green-600 rounded-full"></div>
                )}
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-150 ${
                  activeDropdown === "desktop-services"
                    ? "opacity-100 visible"
                    : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                }`}
                onMouseEnter={() => setActiveDropdown("desktop-services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="py-2">
                  {serviceItems.map(({ href, label, active }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`block px-4 py-3 text-sm transition-colors ${
                        active
                          ? "bg-green-50 text-green-600 border-l-4 border-green-600 font-semibold"
                          : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                      }`}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/leadership"
              className={`font-medium transition-colors relative py-2 ${
                activeStates.leadership ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
              }`}
            >
              Leadership
              {activeStates.leadership && (
                <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-green-600 rounded-full"></div>
              )}
            </Link>

            <Link
              href="/partners"
              className={`font-medium transition-colors relative py-2 ${
                activeStates.partners ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
              }`}
            >
              Partners
              {activeStates.partners && (
                <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-green-600 rounded-full"></div>
              )}
            </Link>

            <Link
              href="/contact"
              className={`font-medium transition-colors relative py-2 ${
                activeStates.contact ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"
              }`}
            >
              Contact
              {activeStates.contact && (
                <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-green-600 rounded-full"></div>
              )}
            </Link>

            <Link href="/contact" className="btn-primary">
              Open Account
            </Link>
          </div>

          {/* Mobile menu button with Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 p-2"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/images/twb-logo-tamil.png"
                        alt="Tamil World Bank Logo"
                        width={32}
                        height={32}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-gray-900">Tamil World Bank</span>
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto">
                  <div className="px-6 py-4 space-y-2">
                    <Link
                      href="/"
                      className={`block px-3 py-3 font-medium rounded-lg transition-colors ${
                        activeStates.home
                          ? "bg-green-50 text-green-600 border-l-4 border-green-600 font-semibold"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      }`}
                      onClick={closeMenu}
                    >
                      Home
                    </Link>

                    <Link
                      href="/about"
                      className={`block px-3 py-3 font-medium rounded-lg transition-colors ${
                        activeStates.about
                          ? "bg-green-50 text-green-600 border-l-4 border-green-600 font-semibold"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      }`}
                      onClick={closeMenu}
                    >
                      About
                    </Link>

                    {/* Mobile Services - Enhanced with click highlighting */}
                    <div>
                      <button
                        onClick={() => handleDropdownToggle("mobile-services")}
                        className={`flex items-center justify-between w-full px-3 py-3 font-medium rounded-lg transition-colors ${
                          activeStates.services
                            ? "bg-green-50 text-green-600 border-l-4 border-green-600 font-semibold"
                            : activeDropdown === "mobile-services"
                              ? "bg-green-100 text-green-700 border-l-4 border-green-500"
                              : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                        }`}
                      >
                        Services
                        <ChevronDown
                          className={`h-4 w-4 transform transition-transform ${
                            activeDropdown === "mobile-services" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeDropdown === "mobile-services" && (
                        <div className="pl-6 space-y-1 mt-2 bg-green-25 rounded-lg py-2">
                          {serviceItems.map(({ href, label, active }) => (
                            <Link
                              key={href}
                              href={href}
                              className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                                active
                                  ? "bg-green-100 text-green-700 border-l-4 border-green-600 font-semibold"
                                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                              }`}
                              onClick={closeMenu}
                            >
                              {label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    <Link
                      href="/leadership"
                      className={`block px-3 py-3 font-medium rounded-lg transition-colors ${
                        activeStates.leadership
                          ? "bg-green-50 text-green-600 border-l-4 border-green-600 font-semibold"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      }`}
                      onClick={closeMenu}
                    >
                      Leadership
                    </Link>

                    <Link
                      href="/partners"
                      className={`block px-3 py-3 font-medium rounded-lg transition-colors ${
                        activeStates.partners
                          ? "bg-green-50 text-green-600 border-l-4 border-green-600 font-semibold"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      }`}
                      onClick={closeMenu}
                    >
                      Partners
                    </Link>

                    <Link
                      href="/contact"
                      className={`block px-3 py-3 font-medium rounded-lg transition-colors ${
                        activeStates.contact
                          ? "bg-green-50 text-green-600 border-l-4 border-green-600 font-semibold"
                          : "text-gray-700 hover:text-green-600 hover:bg-green-50"
                      }`}
                      onClick={closeMenu}
                    >
                      Contact
                    </Link>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                    onClick={closeMenu}
                  >
                    Open Account
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
