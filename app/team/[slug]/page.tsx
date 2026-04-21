// app/team/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTeamMember, getMetafieldValue } from '@/lib/cosmic'

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = await getTeamMember(slug)

  if (!member) notFound()

  const portrait = member.metadata?.portrait
  const specializations = member.metadata?.specializations || []

  return (
    <article className="py-24 bg-charcoal">
      <div className="max-w-5xl mx-auto px-6">
        <Link href="/team" className="text-gold hover:text-gold-light mb-8 inline-block">
          ← Back to Team
        </Link>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            {portrait && (
              <img
                src={`${portrait.imgix_url}?w=800&h=1000&fit=crop&auto=format,compress`}
                alt={member.title}
                width={400}
                height={500}
                className="w-full rounded-xl"
              />
            )}
          </div>

          <div className="md:col-span-3">
            <div className="text-sm uppercase tracking-wider text-gold mb-2">
              {getMetafieldValue(member.metadata?.wing)}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-2 text-white">
              {getMetafieldValue(member.metadata?.full_name) || member.title}
            </h1>
            <p className="text-electric-blue text-xl mb-6">
              {getMetafieldValue(member.metadata?.role)}
            </p>

            {member.metadata?.credentials && (
              <div className="glass rounded-lg p-4 mb-6">
                <div className="text-xs uppercase tracking-wider text-gold mb-1">Credentials</div>
                <p className="text-gray-300">{getMetafieldValue(member.metadata?.credentials)}</p>
              </div>
            )}

            {member.metadata?.bio && (
              <div
                className="prose prose-invert max-w-none text-gray-300 mb-6"
                dangerouslySetInnerHTML={{ __html: member.metadata.bio }}
              />
            )}

            {specializations.length > 0 && (
              <div className="mb-6">
                <h3 className="text-gold font-semibold mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec, idx) => (
                    <span key={idx} className="glass px-3 py-1 rounded-full text-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 flex-wrap">
              {member.metadata?.email && (
                <a
                  href={`mailto:${getMetafieldValue(member.metadata.email)}`}
                  className="px-6 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-charcoal transition-all"
                >
                  Email
                </a>
              )}
              {member.metadata?.whatsapp && (
                <a
                  href={`https://wa.me/${getMetafieldValue(member.metadata.whatsapp).replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-gold text-charcoal rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}