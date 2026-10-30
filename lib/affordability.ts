export type AffordabilityInput={payment:number;deposit:number;term:number;rate:number};
export function calculateAffordability({payment,deposit,term,rate}:AffordabilityInput){const months=Math.max(term,1)*12;const r=Math.max(rate,0)/100/12;const principal=r===0?payment*months:payment*(1-Math.pow(1+r,-months))/r;return{principal,deposit:Math.max(deposit,0),budget:principal+Math.max(deposit,0),monthly:payment,months,rate};}
export const money=(n:number)=>new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP',maximumFractionDigits:0}).format(n);
