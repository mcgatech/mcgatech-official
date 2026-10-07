# Temporarily Hide StayLink Design

## Goal

Temporarily remove all public StayLink references from the MCGA corporate website while preserving the rest of the page and its future-product placeholder.

## Scope

- Remove the StayLink brand card, its website link, and the StayLink support-email link.
- Keep the `Brands & products` section and its `More to come` card.
- Leave the corporate navigation, company copy, capability cards, visual styling, and interaction script unchanged.

## Validation

Update the static page test so it requires the retained content and fails if `StayLink`, `staylink.org`, or the former support email remains in `index.html`. Run the complete Node test suite.
