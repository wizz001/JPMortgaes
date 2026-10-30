export type LocalAreaSearch={area:string;budget:number;radius:string};
export interface LocalAreaSearchAdapter{search(input:LocalAreaSearch):Promise<unknown>}
// Reserved integration boundary for an authorised local-area or property-data provider.
export const localAreaSearch:LocalAreaSearchAdapter={async search(){return null}};
