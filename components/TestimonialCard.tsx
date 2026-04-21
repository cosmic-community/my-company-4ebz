import { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const rating = testimonial.metadata?.rating ?? 5
  const photo = testimonial.metadata?.client_photo

  return (
    <div className="glass rounded-xl p-6 flex flex-col h-full">
      <div className="flex text-gold mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < rating ? 'text-gold' : 'text-gray-600'}>★</span>
        ))}
      </div>

      <p className="text-gray-300 italic flex-grow mb-6">
        "{getMetafieldValue(testimonial.metadata?.quote)}"
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-gold/10">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={testimonial.title}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <div className="text-white font-semibold text-sm">
            {getMetafieldValue(testimonial.metadata?.client_name) || testimonial.title}
          </div>
          <div className="text-gray-500 text-xs">
            {getMetafieldValue(testimonial.metadata?.client_title)}
            {testimonial.metadata?.location && ` • ${getMetafieldValue(testimonial.metadata.location)}`}
          </div>
        </div>
      </div>
    </div>
  )
}