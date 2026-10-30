import test from 'node:test';
import assert from 'node:assert/strict';
import {mockPropertyProvider} from './property-provider.ts';
import {parsePropertySearch} from './property-search.ts';
import {validateContactPayload} from './contact.ts';

test('property filters combine price, bedrooms, type and location',async()=>{const filters=parsePropertySearch({location:'Altrincham',budget:'400000',bedrooms:'3',type:'Detached'});const results=await mockPropertyProvider.search(filters);assert.deepEqual(results.map(result=>result.id),['mock-willow'])});
test('property search bounds malformed query values',()=>{const search=parsePropertySearch({budget:'not-a-number',radius:'999',bedrooms:'-10',coords:'not-coordinates'});assert.equal(search.maxPrice,500000);assert.equal(search.radius,50);assert.equal(search.minBedrooms,undefined);assert.equal(search.hasCoordinates,false)});
test('contact validation rejects unconsented and honeypot submissions',()=>{assert.equal(validateContactPayload({name:'Joe',email:'joe@example.com',message:'A suitable message',consent:false,website:''}).valid,false);assert.equal(validateContactPayload({name:'Joe',email:'joe@example.com',message:'A suitable message',consent:true,website:'spam.example'}).valid,false)});
test('contact validation accepts a minimal legitimate enquiry',()=>{const result=validateContactPayload({name:'Joe Pointon',email:'joe@example.com',message:'Please contact me about a mortgage.',consent:true,website:''});assert.equal(result.valid,true)});
