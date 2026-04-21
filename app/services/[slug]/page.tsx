// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getService, getMetafieldValue } from '@/lib/cosmic'

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) notFound()

  const features = service.metadata?.key_features || []
  const featuredImage = service.metadata?.featured_image

  return (
    <article className="py-24 bg-charcoal">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/services" className="text-gold hover:text-gold-light mb-8 inline-block">
          ← Back to Services
        </Link>

        <div className="text-6xl mb-6">
          {getMetafieldValue(service.metadata?.icon_emoji) || '⚖️'}
        </div>
        <div className="text-sm uppercase tracking-wider text-electric-blue mb-3">
          {getMetafieldValue(service.metadata?.wing)}
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
          {getMetafieldValue(service.metadata?.service_name) || service.title}
        </h1>

        {featuredImage && (
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={service.title}
            width={800}
            height={400}
            className="w-full rounded-xl mb-8"
          />
        )}

        <div className="glass rounded-xl p-8 mb-8">
          <p className="text-xl text-gray-300 leading-relaxed">
            {getMetafieldValue(service.metadata?.short_description)}
          </p>
        </div>

        {service.metadata?.full_description && (
          <div
            className="prose prose-invert max-w-none text-gray-300 mb-8"
            dangerouslySetInnerHTML={{ __html: service.metadata.full_description }}
          />
        )}

        {features.length > 0 && (
          <div className="glass rounded-xl p-8">
            <h2 className="font-display text-2xl font-bold mb-6 text-gold">Key Features</h2>
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-gold mr-3">✓</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}