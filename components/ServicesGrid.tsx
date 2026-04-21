import Link from 'next/link'
import { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServicesGrid({ services }: { services: Service[] }) {
  if (!services || services.length === 0) return null

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-gold text-sm uppercase tracking-widest mb-3">What We Offer</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Two Wings, <span className="gold-text">Unified Excellence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="glass rounded-xl p-8 transition-all hover:-translate-y-1 group"
            >
              <div className="text-5xl mb-4">
                {getMetafieldValue(service.metadata?.icon_emoji) || '⚖️'}
              </div>
              <div className="text-xs uppercase tracking-wider text-gold mb-2">
                {getMetafieldValue(service.metadata?.wing)}
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors">
                {getMetafieldValue(service.metadata?.service_name) || service.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                {getMetafieldValue(service.metadata?.short_description)}
              </p>
              <div className="mt-4 text-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}