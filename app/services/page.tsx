import Link from 'next/link'
import { getServices, getMetafieldValue } from '@/lib/cosmic'

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Our <span className="gold-text">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive legal tech and digital estate solutions for international clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h3 className="font-display text-2xl font-bold mb-3 text-white group-hover:text-gold transition-colors">
                {getMetafieldValue(service.metadata?.service_name) || service.title}
              </h3>
              <p className="text-gray-400 line-clamp-3">
                {getMetafieldValue(service.metadata?.short_description)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}