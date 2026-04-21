import Link from 'next/link'
import { getCaseStudies, getMetafieldValue } from '@/lib/cosmic'

export default async function CaseStudiesPage() {
  const cases = await getCaseStudies()

  return (
    <div className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Case <span className="gold-text">Studies</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real results from our work with international clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((cs) => {
            const image = cs.metadata?.featured_image
            return (
              <Link
                key={cs.id}
                href={`/case-studies/${cs.slug}`}
                className="glass rounded-xl overflow-hidden group transition-all hover:-translate-y-1"
              >
                {image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`${image.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
                      alt={cs.title}
                      width={600}
                      height={337}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex gap-3 mb-3">
                    <span className="text-xs uppercase tracking-wider text-gold">
                      {getMetafieldValue(cs.metadata?.service_category)}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-electric-blue">
                      {getMetafieldValue(cs.metadata?.client_type)}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {getMetafieldValue(cs.metadata?.case_title) || cs.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-3">
                    {getMetafieldValue(cs.metadata?.challenge)}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}