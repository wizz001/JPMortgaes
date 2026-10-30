import test from 'node:test'; import assert from 'node:assert/strict';
function calc(payment,deposit,term,rate){const n=term*12,r=rate/100/12,p=r===0?payment*n:payment*(1-(1+r)**-n)/r;return{p,b:p+deposit}}
test('standard amortisation estimate is deterministic',()=>{const x=calc(1500,30000,25,5);assert.ok(Math.abs(x.p-256770)<200);assert.ok(Math.abs(x.b-286770)<200)});
test('zero rate uses simple monthly payment multiplication',()=>assert.equal(calc(1000,10000,10,0).p,120000));
