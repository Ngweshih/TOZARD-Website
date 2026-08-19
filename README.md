# TOZARD Research Laboratory Website

## Editing the website

This project is intentionally kept readable and organized so that
the content and design can be edited without needing to understand
a complex build system.

### Main files

- `index.html` — Homepage
- Other `.html` files — Individual website pages
- `.css` files — Colors, layout, typography, responsive design
- `.js` files — Navigation and interactive behavior
- Image folders — Website images and assets

## Changing the green color palette

Open the main CSS file and look for:

`TOZARD Green Scientific Theme`

The green CSS variables are grouped together in `:root`.
Changing those values updates the visual identity consistently.

## Our Team photographs

The team section contains clearly marked photo placeholders.
Replace a placeholder with a real image when the photograph is
available. Do not invent or add biographical information.

## Donation page

The Support section has been renamed to **Donate**.

Bank-payment information should only be changed when the official
TOZARD information is available.

Cryptocurrency wallet fields are intentionally placeholders until
real wallet addresses and network details are supplied.

## Navigation

When adding or removing a page, update the navigation links in
each HTML page so the header remains consistent.

## Code style

HTML, CSS and JavaScript are deliberately spaced out and include
comments around important sections. Avoid minifying the source
files if you want to preserve this easy-to-edit format.


## Our Team photo layout

Each team member is displayed in one unified card:
- The photograph/photo placeholder is above the description.
- The photo area is approximately one quarter of the card width.
- The member's name, role, qualifications, description and contact
  information remain in the same card below the photograph.
- Replace the placeholder with the real photograph when available.
