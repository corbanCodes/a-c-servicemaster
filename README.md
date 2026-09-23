# A/C Service Master — Paul Diggs (North Augusta, SC)

One-page site by [60 Minute Sites](https://60minutesites.com). **Demo built 23 Sep 2026.**

- **Client:** Paul Diggs — A/C Service Master, North Augusta, South Carolina
- **Slogan:** *We Move Heat*
- **Goal:** get phone calls for HVAC service work, with a visible hint of the training lab he is building
- **Phone (the only conversion on the page):** (803) 661-3537
- **Email:** acsmhvac@outlook.com
- **Address:** 356A Edgefield Road, North Augusta, SC 29841
- **Repo:** `git@github.com:corbanCodes/ac-service-master.git`
- **Domain:** not registered yet — the page currently assumes `acservicemaster.com` in its
  canonical/Open Graph tags. Change those if he buys something else.

## Phone calls only

Paul asked for calls — **no SMS, no chat widget, no contact form**. The page reflects that:
every call-to-action is a `tel:` link, there is a sticky call bar on mobile, and the contact
section is a call panel rather than a form. If that changes, `DEMO-NOTES.md` explains what to
add back.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site — one page, anchor nav |
| `404.html` | Not-found page |
| `credits.html` | Photo credits and licences (linked from the footer) |
| `assets/styles.css` | All styling |
| `assets/img/` | Licensed stock photography (see `ATTRIBUTION.md`) |
| `_redirects` | Netlify SPA-style fallback to `/index.html` |
| `DEMO-NOTES.md` | What is real, what is stock, what to ask him for |
| `ATTRIBUTION.md` | Photo credits and licences |

## Local preview

```
python3 -m http.server 5091 --directory "60MS Client Sites/ac-service-master"
```

Then open http://localhost:5091
