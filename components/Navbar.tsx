'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { name: 'Route Finder', href: '/' },
    { name: 'Route Info', href: '/route-info' },
    { name: 'Stop Info', href: '/stop-info' }
  ]

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-700 hover:text-indigo-800 transition">
          Yatra Sathi
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium">
          {navItems.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={`transition ${
                pathname === href
                  ? 'text-indigo-600 underline underline-offset-4'
                  : 'text-gray-600 hover:text-indigo-500'
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
