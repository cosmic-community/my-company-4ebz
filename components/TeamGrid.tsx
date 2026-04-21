import Link from 'next/link'
import { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamGrid({ team }: { team: TeamMember[] }) {
  if (!team || team.length === 0) return null

  return (
    <section className="py-24 bg-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-electric-blue text-sm uppercase tracking-widest mb-3">Leadership</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Trusted <span className="gold-text">Legal Minds</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.slice(0, 6).map((member) => {
            const portrait = member.metadata?.portrait
            return (
              <Link
                key={member.id}
                href={`/team/${member.slug}`}
                className="glass rounded-xl overflow-hidden group transition-all hover:-translate-y-1"
              >
                {portrait && (
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={`${portrait.imgix_url}?w=800&h=1000&fit=crop&auto=format,compress`}
                      alt={member.title}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-gold mb-2">
                    {getMetafieldValue(member.metadata?.wing)}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {getMetafieldValue(member.metadata?.full_name) || member.title}
                  </h3>
                  <p className="text-electric-blue text-sm">
                    {getMetafieldValue(member.metadata?.role)}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/team"
            className="inline-block px-8 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-charcoal transition-all font-semibold"
          >
            View All Leadership
          </Link>
        </div>
      </div>
    </section>
  )
}