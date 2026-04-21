import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-gold/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚖️</span>
              <span className="font-display text-xl font-bold text-white">
                Google<span className="gold-text">Peak</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              40 Years of Legal Legacy, Digitally Integrated.
            </p>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Legal Tech</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-gray-400 hover:text-white">Corporate Law</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Tax Strategy</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Family Law</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Digital Estate</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-gray-400 hover:text-white">Domain Management</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">SEO Content</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Headless Web</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Karachi: +92 331 6644789</li>
              <li>Lahore: +92 302 6644789</li>
              <li>Islamabad: +92 316 6644789</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} GooglePeak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}