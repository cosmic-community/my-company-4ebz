// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCaseStudy, getMetafieldValue } from '@/lib/cosmic'

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cs = await getCaseStudy(slug)

  if (!cs) notFound()

  const image = cs.metadata?.featured_image

  return (
    <article className="py-24 bg-charcoal">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/case-studies" className="text-gold hover:text-gold-light mb-8 inline-block">
          ← Back to Case Studies
        </Link>

        <div className="flex gap-3 mb-4">
          <span className="text-sm uppercase tracking-wider text-gold">
            {getMetafieldValue(cs.metadata?.service_category)}
          </span>
          <span className="text-sm uppercase tracking-wider text-electric-blue">
            {getMetafieldValue(cs.metadata?.client_type)}
          </span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 text-white">
          {getMetafieldValue(cs.metadata?.case_title) || cs.title}
        </h1>

        {image && (
          <img
            src={`${image.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={cs.title}
            width={800}
            height={450}
            className="w-full rounded-xl mb-10"
          />
        )}

        <div className="space-y-8">
          {cs.metadata?.challenge && (
            <div className="glass rounded-xl p-8">
              <h2 className="font-display text-2xl font-bold text-gold mb-4">The Challenge</h2>
              <div
                className="prose prose-invert max-w-none text-gray-300"
                dangerouslySetInnerHTML={{ __html: cs.metadata.challenge }}
              />
            </div>
          )}

          {cs.metadata?.solution && (
            <div className="glass rounded-xl p-8">
              <h2 className="font-display text-2xl font-bold text-electric-blue mb-4">Our Solution</h2>
              <div
                className="prose prose-invert max-w-none text-gray-300"
                dangerouslySetInnerHTML={{ __html: cs.metadata.solution }}
              />
            </div>
          )}

          {cs.metadata?.outcome && (
            <div className="glass rounded-xl p-8 border-gold/40">
              <h2 className="font-display text-2xl font-bold text-gold mb-4">Outcome</h2>
              <div
                className="prose prose-invert max-w-none text-gray-300"
                dangerouslySetInnerHTML={{ __html: cs.metadata.outcome }}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  )
}