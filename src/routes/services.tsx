import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, CallToAction } from '@/components/site';
import { ServiceCard } from '@/components/service-card';
import { services, pageHead } from '@/lib/business';
export const Route=createFileRoute('/services')({head:()=>pageHead('Our services','Explore manpower supply, security, housekeeping, hotel staff, catering and civil workforce services in India and UAE.'),component:Services});
function Services(){return <><PageIntro label="OUR SERVICES" title="The people your business needs." description="Specialised staffing across industries. Explore our services and tell us what the right team looks like for you."/><section className="section wrap"><div className="services-grid">{services.map((s,i)=><ServiceCard key={s.slug} service={s} index={i} details/>)}</div></section><CallToAction/></>}
