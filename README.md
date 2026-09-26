# A/C Service Master — Paul Diggs (North Augusta, SC)

One-page site by [60 Minute Sites](https://60minutesites.com). **Demo built 23 Sep 2026,
rebuilt 24 Sep on the Clear Look Cleaning design system.**

- **Client:** Paul Diggs — A/C ServiceMaster, North Augusta, South Carolina
- **Slogan:** *We Move Heat*
- **Goal:** get phone calls for HVAC service work, with a visible hint of the training lab
- **Service area:** Aiken County, **South Carolina only** — no Georgia, he is not licensed there
- **Phone (the only conversion on the page):** (803) 661-3537
- **Email:** acsmhvac@outlook.com
- **Address:** 356A Edgefield Road, North Augusta, SC 29841
- **Repo:** `git@github.com:corbanCodes/a-c-servicemaster.git`
- **Reviews:** 4.71 from 65 Google reviews, six quoted verbatim on the page
- **Photography:** Paul's own job photos throughout, plus a 20-photo Recent Work carousel
- **Domain:** not registered yet — the page assumes `acservicemaster.com` in its canonical and
  Open Graph tags. Change those if he buys something else.

> **This still has the demo banner on it.** Remove it before launch — `DEMO-NOTES.md`,
> "Before this goes live", item 1.

## Phone calls only

Paul asked for calls — **no SMS, no chat widget, no contact form**. Every call-to-action is a
`tel:` link, the hero card is a call card rather than an estimate form, and there is a sticky
call bar on mobile. `DEMO-NOTES.md` explains what to add back if that ever changes.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site — one page, anchor nav |
| `reviews.html` | All 65 Google reviews, hosted here, with a rating filter |
| `404.html` | Not-found page |
| `credits.html` | Photo credits and licences (linked from the footer) |
| `assets/css/style.css` | All styling |
| `assets/js/main.js` | Nav, dropdowns, reveal-on-scroll (no form handler by design) |
| `assets/img/` | Paul's own job photos, plus five licensed stock images (see `ATTRIBUTION.md`) |
| `assets/img/work/` | The 20 Recent Work gallery photos |
| `assets/video/` | 44s reel built from his job photos |
| `new-logo/` | The logo he supplied |
| `client-provided-photos/` | The originals he supplied, untouched |
| `netlify.toml` | Netlify config — no build step, publish from the repo root |
| `DEMO-NOTES.md` | What is real, what is stock, what to ask him |
| `ATTRIBUTION.md` | Photo credits and licences |

## Design lineage

Built on the `howard-vanderpool` (Clear Look Cleaning) system — same Oswald/Barlow type and the
same section structure — retimed for HVAC: navy and sky for the cooling half of the job, a flame
accent for the heating half and for every call-to-action. Full notes in `DEMO-NOTES.md`.

## Local preview

```
python3 -m http.server 5091 --directory "60MS Client Sites/a-c-servicemaster"
```

Then open http://localhost:5091

## Deploy

Netlify → **Add new site → Import an existing project** → GitHub → `corbanCodes/a-c-servicemaster`.
No build command and no publish directory to set — `netlify.toml` already says publish from the
repo root. `404.html` is picked up automatically. Every push to `main` redeploys.
