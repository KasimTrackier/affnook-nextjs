# Affnook Home (Next.js)

The Affnook homepage as a Next.js app: dark theme, scroll animations, and three switchable
versions (Operators, Brands, Affiliate networks).

## Run it

1. Install Node.js 20.9 or newer from https://nodejs.org
2. Open a terminal in this folder
3. Run `npm install`
4. Run `npm run dev`
5. Open http://localhost:3000

To publish it: run `npm run build`, then `npm start`. It also deploys to Vercel as is.

## The three versions

Add the version to the address: `/#operators`, `/#brands`, `/#networks`.
The buttons under the hero switch between them.

## Where to change things

| What | File |
| --- | --- |
| Headlines, copy, numbers, case studies, FAQ, menu links | `lib/affnook/content.js` |
| Section layout and HTML | `lib/affnook/render.js` |
| Scrolling, animations, tabs, menus, switcher | `lib/affnook/runtime.js` |
| Colours, spacing, type sizes | `app/globals.css` |
| Page title and description | `app/layout.tsx` |
| Fonts (TT Firs Neue) | `public/fonts` |
| Favicon | `app/icon.svg` |

## Notes

- JetBrains Mono (used for small code labels) loads from Google Fonts.
- The dashboard numbers are sample data, as in the original design.
