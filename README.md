# Moïse Soccer & Performance Training

A static Astro + Tailwind marketing website for Coach Charles Okeke, intended for Netlify hosting.

## Run locally
Use Node 24 LTS (or supported Node >=22.12). From this folder:

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

The development address is normally http://localhost:4321. Node 24 is configured in .nvmrc and netlify.toml.

## Pages and features
- Home: training overview, bio, highlight videos, plans/rates, events, testimonials, photos, booking/payment, and contact.
- The coach: grounded short bio and coaching focus.
- Training & plans: individual, small-group, performance, and monthly-plan enquiries.
- Highlights: real Instagram reel links and locally stored preview imagery.
- Events: confirmed-event cards when populated; useful enquiry state otherwise.
- Booking: direct link to https://calendly.com/moisefitness/60minutes.
- Payment: accepted Zelle, Venmo, and Cash App methods. Ask the coach for exact recipient details.
- Contact: accessible Netlify form with required-field validation and spam honeypot.
- Confirmation, 404, sitemap, robots, and per-page metadata.

No real booking or payment was submitted during development. Calendly controls scheduling and confirmation. This site does not take card or bank details.

## Edit content
Most content is in **src/site.ts**:
- business: name, coach, location, short bio, optional email/phone, Instagram, Calendly, accepted payment methods.
- plans: approved prices in rate, package descriptions and confirmed session counts/terms in details.
- events: program title, schedule, birth-year groups, venue, rates, training focus, flyer, and registration URL. The Events component appears on Home and Events; ProgramNotice links to it from Training & plans and Booking. Update or remove seasonal programs here when registration closes.
- testimonials: real approved quote, name, and role. No fabricated reviews are included.
- highlights: titles, preview images, dates, and original Instagram reel URLs.
- photos: local image path, alternative text, caption, and original post link.

Other headings and marketing copy are in src/pages and src/components. Styling and theme colors are in src/styles/global.css. Shared navigation and metadata are in src/layouts/BaseLayout.astro.

The supplied logo is used unchanged at public/images/moise-logo.png, including as the browser icon. Local photos and video preview stills are in public/images. Higher-resolution original media can replace these previews at the same paths.

## Confirm before launch
- Approve the bio and marketing copy; add the trainer's fuller background and credentials if desired.
- Supply exact rates, monthly package inclusions, event dates, and approved testimonials.
- Confirm the public email/phone if these should be displayed. Empty fields are hidden.
- Confirm payment recipient details with the trainer. No Zelle address, Venmo handle, or Cash App $Cashtag has been invented.
- Review the copied Instagram imagery and confirm approval for website publication, including images of players.
- Set the final domain and test contact delivery on Netlify.

Empty rates display “Ask for current rate.” Events and testimonials have explicit empty states. Booking and payment do not pretend to have completed anything.

## Netlify deployment
1. Push this folder's contents to a Git repository, including package-lock.json. node_modules, dist, and local cache files are ignored.
2. Import it in Netlify. If it sits inside a larger repo, set this folder as the base directory.
3. Build command: **npm run build**. Publish directory: **dist**. netlify.toml supplies both.
4. Set build environment variable **SITE_URL** to the final HTTPS origin, for example https://your-domain.com.
5. Deploy. In Netlify Forms, enable form detection, then redeploy. Confirm the contact form appears.
6. Configure the contact form's email notification recipient in Netlify. The public email in site.ts does not control notifications.
7. Submit a test enquiry on the deployed site; verify both Netlify's submission list and the email inbox.
8. Add your domain and update SITE_URL/redeploy as needed.

The form is static HTML with method POST, data-netlify, form-name, and a bot-field honeypot. On success it navigates to /thank-you/. Local dev/preview cannot deliver enquiries. Opening the confirmation page directly does not prove a submission was received.

## Metadata
Set SITE_URL in the build process environment. Without it, canonical URLs use example.com and indexing is intentionally disabled. The confirmation and 404 pages remain noindex. The sitemap lists eight public routes.

```sh
SITE_URL=https://your-domain.com npm run build
```

PowerShell:

```powershell
$env:SITE_URL="https://your-domain.com"
npm run build
```

.env.example documents the setting; the config reads the process environment, so copying it to .env alone does not configure the build.

## Media and provenance
The supplied Instagram profile identified Charles Okeke, NYC, player development, soccer/performance training, and one-on-one/small-group formats. No unrelated search-result credentials were added.

See MEDIA-SOURCES.md for image and reel sources. Instagram videos open on Instagram rather than loading tracking scripts or autoplaying on this site. Instagram may require a login. Replace local previews with trainer-supplied originals when available.

## References
- [Astro](https://docs.astro.build/en/install-and-setup/)
- [Tailwind for Astro](https://tailwindcss.com/docs/installation/framework-guides/astro)
- [Netlify Forms](https://docs.netlify.com/manage/forms/setup/)
