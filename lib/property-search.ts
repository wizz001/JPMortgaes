import type {PropertyFilters} from './property-provider';
type Query=Record<string,string|string[]|undefined>;
const first=(value:Query[string])=>Array.isArray(value)?value[0]:value;
const clean=(value:Query[string],maxLength=80)=>(first(value)??'').trim().slice(0,maxLength);
const boundedNumber=(value:Query[string],fallback:number,min:number,max:number)=>{const parsed=Number(clean(value));return Number.isFinite(parsed)?Math.min(max,Math.max(min,parsed)):fallback};
export type PropertySearch=PropertyFilters&{radius:number;phrase:string;hasCoordinates:boolean};
export function parsePropertySearch(query:Query):PropertySearch{const coordinates=clean(query.coords).match(/^(-?\d{1,2}(?:\.\d+)?),(-?\d{1,3}(?:\.\d+)?)$/);const latitude=coordinates?Number(coordinates[1]):undefined;const longitude=coordinates?Number(coordinates[2]):undefined;const hasCoordinates=latitude!==undefined&&longitude!==undefined&&Math.abs(latitude)<=90&&Math.abs(longitude)<=180;const bedrooms=boundedNumber(query.bedrooms,0,0,10);const type=clean(query.type,40);return{location:clean(query.location),radius:boundedNumber(query.radius,10,1,50),maxPrice:boundedNumber(query.budget,500000,0,10000000),minBedrooms:bedrooms||undefined,type:type||undefined,phrase:clean(query.q),coordinates:hasCoordinates?{latitude:latitude!,longitude:longitude!}:undefined,hasCoordinates}}
