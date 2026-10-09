import workforce from '@/assets/workforce-hero.jpg';
import security from '@/assets/security.jpg';
import hospitality from '@/assets/hospitality.jpg';
import housekeeping from '@/assets/housekeeping.jpg';
export const business = { name: 'Yaabesh Grace', phone: '+91 94615 20555', whatsapp: '919461520555', email: 'yaabeshgrace@gmail.com', address: 'B 28 Dahiya Compus, Vindayka, Jaipur, Rajasthan 302041', director: 'Bimukh Chandra Routh' };
export const services = [
 { title:'Manpower Supply', slug:'manpower', image:workforce, category:'Workforce', description:'The right people, where you need them. Skilled, semi-skilled and support staff for your everyday operations.', roles:['Industrial & warehouse staff','Office support & administration','Skilled & semi-skilled workers','Logistics & loading teams'] },
 { title:'Security Services', slug:'security', image:security, category:'Protection', description:'A reassuring presence for your people and premises, with security staffing tailored to your site.', roles:['Security guards','Commercial & residential security','Gate & access management','Event security personnel'] },
 { title:'Housekeeping Services', slug:'housekeeping', image:housekeeping, category:'Facility care', description:'Clean spaces. Better experiences. Housekeeping teams for offices, hotels and commercial properties.', roles:['Office & commercial housekeeping','Hotel room attendants','Cleaning & facility support','Public-area attendants'] },
 { title:'Hospitality & Hotel Staff', slug:'hospitality', image:hospitality, category:'Hospitality', description:'People who make every guest feel welcome, from the front desk to the dining room.', roles:['Front office & receptionists','Hotel operations staff','Guest relations & bell desk','Restaurant & service staff'] },
 { title:'Food, Beverages & Catering', slug:'catering', image:hospitality, category:'Food & beverage', description:'Kitchen and service teams that keep your restaurant, event or catering operation moving.', roles:['Cooks & kitchen assistants','Waiters & food servers','Catering & banquet staff','Stewards & beverage service'] },
 { title:'Civil & Construction Workforce', slug:'civil', image:workforce, category:'Construction', description:'Hands-on workforce support for civil projects, construction sites and infrastructure operations.', roles:['Civil work labour','Masons & construction helpers','Site support personnel','Technical & maintenance staff'] },
];
export function whatsappLink(message:string) { return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`; }
export function pageHead(title:string, description:string) { return { meta:[{title:`${title} | Yaabesh Grace`},{name:'description',content:description},{property:'og:title',content:`${title} | Yaabesh Grace`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}] }; }
