export default function PartnerCTA() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="text-electric-blue text-sm uppercase tracking-widest mb-4">Join Our Network</div>
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
          Partner With <span className="gold-text">Us</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Join our 100+ site network of digital real estate investors and entrepreneurs.
          Build your digital legacy with GooglePeak.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://wa.me/923166644789"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-gold text-charcoal rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start Partnership
          </a>
          <a
            href="mailto:partner@googlepeak.com"
            className="px-8 py-4 border border-gold text-gold rounded-lg font-semibold hover:bg-gold hover:text-charcoal transition-all"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  )
}