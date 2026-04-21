import Link from 'next/link'
import { getTeamMembers, getMetafieldValue } from '@/lib/cosmic'

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Our <span className="gold-text">Leadership</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Distinguished advocates and industry leaders with decades of experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => {
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
                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {getMetafieldValue(member.metadata?.full_name) || member.title}
                  </h3>
                  <p className="text-electric-blue">
                    {getMetafieldValue(member.metadata?.role)}
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