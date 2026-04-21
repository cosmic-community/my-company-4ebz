import { getTestimonials, getMetafieldValue } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Client <span className="gold-text">Testimonials</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What our international clients say about our services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  )
}