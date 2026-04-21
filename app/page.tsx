import { getServices, getTeamMembers, getTestimonials, getCaseStudies } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import TeamGrid from '@/components/TeamGrid'
import TestimonialsSection from '@/components/TestimonialsSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import PartnerCTA from '@/components/PartnerCTA'

export default async function HomePage() {
  const [services, team, testimonials, caseStudies] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getCaseStudies(),
  ])

  return (
    <>
      <Hero />
      <ServicesGrid services={services} />
      <CaseStudiesSection caseStudies={caseStudies.slice(0, 3)} />
      <TeamGrid team={team} />
      <TestimonialsSection testimonials={testimonials} />
      <PartnerCTA />
    </>
  )
}