import { Testimonial } from '@/types'
import TestimonialCard from '@/components/TestimonialCard'

export default function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  if (!testimonials || testimonials.length === 0) return null

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-gold text-sm uppercase tracking-widest mb-3">Client Voices</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            What Clients <span className="gold-text">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}