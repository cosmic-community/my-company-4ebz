import Link from 'next/link'
import { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudiesSection({ caseStudies }: { caseStudies: CaseStudy[] }) {
  if (!caseStudies || caseStudies.length === 0) return null

  return (
    <section className="py-24 bg-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-electric-blue text-sm uppercase tracking-widest mb-3">Success Stories</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Featured <span className="gold-text">Case Studies</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="text-gold hover:text-gold-light font-semibold"
          >
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => {
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
                      src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
                      alt={cs.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-gold mb-2">
                    {getMetafieldValue(cs.metadata?.service_category)}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-gold transition-colors">
                    {getMetafieldValue(cs.metadata?.case_title) || cs.title}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}