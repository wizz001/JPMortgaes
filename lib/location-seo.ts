import type{Location}from'./locations';
export const locationPath=(location:Location)=>`/locations/${location.slug}`;
export const locationTitle=(location:Location)=>`Mortgage Broker ${location.name}`;
export const locationDescription=(location:Location)=>`Mortgage advice in ${location.name} for buyers, homeowners and property investors. Explore options for ${location.context}.`;
export const nearbyLocations=(location:Location,locations:Location[],count=3)=>locations.filter(candidate=>candidate.slug!==location.slug).sort((a,b)=>Math.abs(a.distance-location.distance)-Math.abs(b.distance-location.distance)||a.name.localeCompare(b.name)).slice(0,count);
