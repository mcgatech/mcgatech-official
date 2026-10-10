# Corporate Credibility Content Design

## Goal

Make the MCGA Technologies public site easy to verify as a real Utah software company while keeping the existing one-page, editorial site intact.

## Chosen approach

Extend the existing single-page site with an About & Contact area and supporting footer links. This keeps corporate facts prominent for reviewers, avoids introducing a second navigation context, and provides durable standalone Privacy and Terms pages for policy links.

## Content and information architecture

- Add an `About & contact` destination to primary navigation.
- State that **MCGA TECHNOLOGIES LLC is a Utah, United States software company founded in 2026**.
- Describe the company as building reliable software for secure, well-managed digital environments.
- Expose the confirmed, operational contact address as a `mailto:admin@mcgatech.com` link.
- Preserve the current products section, while describing active product development without fabricating product names or release dates.
- Link to the Utah Division of Corporations business-search service as a public verification path; do not claim a registration number or external profile that has not been supplied.
- Add Privacy Policy and Terms of Use links in the footer. Their pages will be concise, site-specific documents with contact and governing-law information.

## Presentation

Continue the site’s dark, network-console visual language. The About & Contact section will use the established 12-column layout, with factual company details in a compact, legible information panel. On narrow screens it will inherit the existing responsive single-column behavior.

## Accessibility and resilience

- Use semantic sections and descriptive headings.
- Make email, legal documents, and the state-search resource standard keyboard-accessible links.
- Mark the external Utah verification link so visitors know it leaves the site.
- Keep all required company facts in HTML, not JavaScript-generated content.

## Verification

- Expand the Node test suite to assert the new company facts, email link, legal-page links, and external verification resource.
- Run the focused test before and after implementation, then the complete `node --test` suite.
