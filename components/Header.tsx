import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-charcoal/80 border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">⚖️</span>
          <span className="font-display text-2xl font-bold text-white">
            Google<span className="gold-text">Peak</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider">
            Services
          </Link>
          <Link href="/case-studies" className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider">
            Case Studies
          </Link>
          <Link href="/team" className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider">
            Leadership
          </Link>
          <Link href="/testimonials" className="text-gray-300 hover:text-gold transition-colors text-sm uppercase tracking-wider">
            Testimonials
          </Link>
        </nav>

        <a
          href="https://wa.me/923166644789"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex px-5 py-2.5 bg-gradient-gold text-charcoal rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Consult Now
        </a>
      </div>
    </header>
  )
}