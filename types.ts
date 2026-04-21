export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    wing?: { key: string; value: string } | string;
    category?: string;
    short_description?: string;
    full_description?: string;
    icon_emoji?: string;
    featured_image?: { url: string; imgix_url: string };
    key_features?: string[];
    display_order?: number;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    role?: string;
    wing?: { key: string; value: string } | string;
    bio?: string;
    portrait?: { url: string; imgix_url: string };
    credentials?: string;
    specializations?: string[];
    email?: string;
    whatsapp?: string;
    display_order?: number;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    case_title?: string;
    client_type?: string;
    service_category?: string;
    challenge?: string;
    solution?: string;
    outcome?: string;
    featured_image?: { url: string; imgix_url: string };
    related_service?: Service;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    client_title?: string;
    quote?: string;
    rating?: number;
    client_photo?: { url: string; imgix_url: string };
    location?: string;
    related_service?: Service;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}