import { describe, expect, it } from 'vitest';
import { business, services, whatsappLink } from '@/lib/business';
describe('Business enquiry rules', () => {
  it('sends WhatsApp enquiries to the supplied card number', () => {
    expect(new URL(whatsappLink('Hello')).pathname).toBe('/919461520555');
    expect(business.phone).toBe('+91 94615 20555');
  });
  it('keeps service and job enquiries distinct', () => {
    expect(new URL(whatsappLink('Service enquiry')).searchParams.get('text')).toBe('Service enquiry');
    expect(new URL(whatsappLink('Job application')).searchParams.get('text')).toBe('Job application');
    expect(whatsappLink('Service enquiry')).not.toBe(whatsappLink('Job application'));
  });
  it('includes the requested hotel roles', () => {
    expect(services.find(s=>s.slug==='hospitality')?.roles).toContain('Front office & receptionists');
    expect(services.find(s=>s.slug==='catering')?.roles).toContain('Cooks & kitchen assistants');
    expect(services.find(s=>s.slug==='catering')?.roles).toContain('Waiters & food servers');
  });
});