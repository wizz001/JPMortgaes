# JP Mortgage Solutions launch checklist

## Ready in this branch

- [x] Calculator calculation and input-validation flow
- [x] Budget hand-off to the property finder
- [x] Clearly labelled demonstration listings with deterministic price, bedroom, type, location-text and phrase filtering
- [x] Secure contact endpoint foundation: server-side validation, honeypot, rate limit, duplicate protection and clear unconfigured-delivery response
- [x] Privacy and cookie-information pages, plus a revisitable consent choice; no optional analytics are enabled
- [x] Sitemap only emits URLs after a verified `NEXT_PUBLIC_SITE_URL` is configured
- [x] Production build and automated tests pass

## Technically complete but awaiting configuration

- [ ] Configure `CONTACT_DELIVERY_WEBHOOK_URL` to an approved server-side email or CRM receiver and verify delivery end to end.
- [ ] Set the verified production `NEXT_PUBLIC_SITE_URL` so absolute sitemap URLs and metadata base are emitted.
- [ ] Confirm the telephone number and add the verified public email, legal business name and address.
- [ ] Review the privacy notice with the actual processor, retention, lawful-basis and contact details.

## Awaiting external integration

- [ ] Contract an authorised UK residential-listing provider; do not scrape portal data. Supply verified listing coordinates before enabling radius search or live availability.
- [ ] Provide CW API/database documentation, authentication, booking endpoint and test credentials. The adapter intentionally returns “not configured” until then.
- [ ] Add an approved geocoding provider only if it is licensed and configured server-side.

## Awaiting business/regulatory approval

- [ ] FCA number, regulatory status, principal/appointed-representative details, permissions and complaints process.
- [ ] Finalised mortgage copy, representative examples and disclosures.
- [ ] Approved Joe Pointon portrait and biography; no qualifications, awards or experience claims should be added without verification.
- [ ] Legal approval of privacy, cookies, terms and consent wording.

## Before publishing this branch

- [ ] Test the configured contact delivery using a non-sensitive test enquiry.
- [ ] Perform mobile and keyboard testing on the deployed environment.
- [ ] Run `npm test` and `npm run build`.
- [ ] Review the deployment's environment variables and hosting security headers.
- [ ] Have an authorised mortgage-compliance reviewer sign off the final site.
