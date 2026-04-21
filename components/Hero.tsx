import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48 grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-charcoal/50 to-charcoal pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block glass rounded-full px-4 py-2 mb-8 text-xs uppercase tracking-widest text-gold">
          ⚖️ Qanoon Group × Digital Estate Wing
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-white">
          40 Years of <span className="gold-text">Legal Legacy</span>,
          <br />
          Digitally <span className="text-electric-blue">Integrated</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Premium consultancy firm serving international business owners, overseas Pakistanis,
          and digital real estate investors. Corporate law, tax strategy, family law, and
          headless web architecture — all under one trusted banner.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/services"
            className="px-8 py-4 bg-gradient-gold text-charcoal rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore Services
          </Link>
          <a
            href="https://wa.me/923166644789"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-electric-blue text-electric-blue rounded-lg font-semibold hover:bg-electric-blue hover:text-charcoal transition-all"
          >
            Free Consultation
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { num: '40+', label: 'Years Legacy' },
            { num: '100+', label: 'Site Network' },
            { num: '31', label: 'Member Firms' },
            { num: '5K+', label: 'Clients Served' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold gold-text">{s.num}</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}