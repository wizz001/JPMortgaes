export type ListingStatus = 'available' | 'under_offer' | 'sstc' | 'sold' | 'withdrawn';
export type Property = { id:string; provider:'mock'|'cw'|'external'; sourceId:string; canonicalId:string; listingUrl?:string; address:string; postcode?:string; latitude?:number; longitude?:number; price:number; bedrooms:number; bathrooms?:number; type:string; description?:string; images:string[]; agent:{id:string;name:string;branchId?:string}; status:ListingStatus; lastVerified:string; viewing:{eligible:boolean;cwReference?:string} };
export type PropertyFilters = { location?:string; radius?:number; coordinates?:{latitude:number;longitude:number}; minBedrooms?:number; type?:string; maxPrice:number; phrase?:string };
export interface PropertyProvider { search(filters:PropertyFilters):Promise<Property[]>; get(id:string):Promise<Property|undefined> }

const seeded:Property[]=[
  {id:'mock-willow',provider:'mock',sourceId:'willow-1',canonicalId:'mock-willow',address:'Willow Lane, Altrincham',price:385000,bedrooms:3,bathrooms:2,type:'Detached',description:'Illustrative three-bedroom demonstration home.',images:['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80'],agent:{id:'demo-agent',name:'Demonstration provider'},status:'available',lastVerified:'2026-10-29T00:00:00Z',viewing:{eligible:false}},
  {id:'mock-meadows',provider:'mock',sourceId:'meadows-1',canonicalId:'mock-meadows',address:'The Meadows, Wilmslow',price:465000,bedrooms:4,bathrooms:2,type:'Semi-detached',description:'Illustrative four-bedroom demonstration home.',images:['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80'],agent:{id:'demo-agent',name:'Demonstration provider'},status:'available',lastVerified:'2026-10-29T00:00:00Z',viewing:{eligible:false}},
  {id:'mock-station',provider:'mock',sourceId:'station-1',canonicalId:'mock-station',address:'Station Road, Stockport',price:295000,bedrooms:2,bathrooms:1,type:'Terrace',description:'Illustrative two-bedroom demonstration home.',images:['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80'],agent:{id:'demo-agent',name:'Demonstration provider'},status:'available',lastVerified:'2026-10-29T00:00:00Z',viewing:{eligible:false}}
];
const normalise=(value:string)=>value.trim().toLocaleLowerCase('en-GB');
const textMatches=(property:Property,query?:string)=>!query||`${property.address} ${property.type} ${property.description??''}`.toLocaleLowerCase('en-GB').includes(normalise(query));
export const filterProperties=(properties:Property[],filters:PropertyFilters)=>{const seen=new Set<string>();return properties.filter(property=>{if(seen.has(property.canonicalId))return false;seen.add(property.canonicalId);return property.status==='available'&&property.price<=filters.maxPrice&&property.bedrooms>=(filters.minBedrooms??0)&&(!filters.type||normalise(property.type)===normalise(filters.type))&&textMatches(property,filters.location)&&textMatches(property,filters.phrase)})};
export const mockPropertyProvider:PropertyProvider={async search(filters){return filterProperties(seeded,filters)},async get(id){return seeded.find(property=>property.id===id)}};

export type ViewingEnquiry={property:Property;customer:{name:string;email:string};requestedDetails:string};
export type ViewingEnquiryResult={supported:false;reason:string}|{supported:true;reference:string};
export interface CWPropertyProvider extends PropertyProvider{openViewingEnquiry(enquiry:ViewingEnquiry):Promise<ViewingEnquiryResult>}
export const cwPropertyProvider:CWPropertyProvider={async search(){return[]},async get(){return undefined},async openViewingEnquiry(){return{supported:false,reason:'CW viewing integration is not configured.'}}};
