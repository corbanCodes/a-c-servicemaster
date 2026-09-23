# Demo notes — A/C Service Master (Paul Diggs)

Built 23 Sep 2026 from one phone call. One page. This file is what is real, what is standing in,
and what to get from him next.

---

## Real — taken straight from the call

- **Paul Diggs**, trading as **A/C Service Master** (the LLC is A C Service Master LLC)
- **Slogan: "We Move Heat"** — this is the hero headline, the nav tagline and the footer tagline
- **Phone: (803) 661-3537** — the only conversion on the page
- **Email: acsmhvac@outlook.com** — in the contact tiles, the footer and the training section
- **Address: 356A Edgefield Road, North Augusta, SC 29841** — his nephew's address, which is the
  registered address of the LLC. It is on the page as "Based at", not as a storefront to visit
- He is **starting over in South Carolina**; the Tennessee operation is finished
- He has **no lab right now** — the training lab is a plan, not a place
- Much of the eventual lab equipment **comes off the real service work** he does in SC
- His own explanation of the trade, used almost verbatim in the "How it works" section and quoted
  in the pull-quote: *"They primarily just move heat. Either from outside to inside or vice versa."*

## What he wants the site to do

1. **Service work first.** This is a service business site. It has to make the phone ring.
2. **Training second, and only as a hint.** He explicitly said the school comes later and that he
   wants "some inklings" of it now, not a school site. That is exactly the weight it has: one dark
   band mid-page, one FAQ answer, one line in the why-grid, nothing more.
3. He looked at `hshvac.com` as the model. The layout, the navy/red palette and the section order
   here follow it deliberately.

---

## PHONE CALLS ONLY — read before changing anything

He asked for **calls only: no texts, no chat, no form.** So:

- Every CTA on the page is a `tel:+18036613537` link (17 of them)
- There is **no contact form** and **no `thank-you.html`** — the contact section is a call panel
- There is no SMS wording anywhere ("call or text" was removed throughout)
- There is no chat widget and none should be added

**If he ever changes his mind about a form**, note that HQ looks the slug up in the `Form` table
and 404s if it does not exist — so a form here needs a real form created in HQ first, and its
slug pasted into the `action`. Follow the convention on the other client sites (`source` set to
`acservicemaster.com — A/C Service Master`, `_gotcha` honeypot, `_next` to a thank-you page).

---

## Before this goes live

1. **Domain.** Nothing is registered. The canonical URL, the Open Graph URL and the OG image URL
   all currently say `https://acservicemaster.com/`. Pick the real domain and update those three
   tags plus the `url`/`image` fields in the JSON-LD block. `acservicemaster.com` may well be
   taken — `acsmhvac.com` matches his email if it is not.
2. **Photos.** Every image is stock and none of them are his (see `ATTRIBUTION.md`). The two
   U.S. Air Force photos show technicians in uniform — public domain and genuinely HVAC work, but
   the first things to replace. Ask him for: his van, himself, a job in progress, and anything
   from the Tennessee lab if he still has it.
3. **Licence / insurance.** South Carolina and Georgia both license mechanical contractors. The
   page deliberately makes **no licence claim at all** — there is no "Licensed & Insured" badge,
   because we have not seen a number. `hshvac.com` prints its VA and NC numbers; if Paul has SC
   and/or GA numbers, they belong in the trust strip and the footer and they will help him.
4. **Hours.** Not stated on the page because he did not give any. The scheduling line just says he
   returns calls personally. Ask, and add real hours if he has them.
5. **Google Business Profile.** Not created as far as we know. For a local service business this
   matters more than the website does. Worth raising with him.

---

## Things deliberately NOT on the page

- **No testimonials, no star rating, no review count.** He has no reviews in SC yet and inventing
  them is not worth the risk. `hshvac.com` leads with a 5.0 Google rating; that slot is filled
  here with honest non-numeric trust items instead.
- **No "25+ years" or any year count.** He clearly has a long career, but no number was confirmed
  on the call, so the copy says "a career in heating and air" and leaves it there. **Get the real
  number from him** — it is the single strongest thing missing from the page.
- **No licence or insurance claim.** See above.
- **No prices, no "$89 service call", no financing claim.**
- **No enrolment, tuition, dates or class sizes** for the training. The band says plainly that
  there are none yet.
- **Nothing from the call about his history in Jackson, TN beyond one neutral sentence** in the
  About section ("He has built a hands-on training lab before, in Tennessee"). **Confirm he is
  happy with that sentence** — it is the only backward-looking claim on the page and it is there
  because it makes the training plan credible. Everything else from that part of the call
  (funding, donations, amounts, names, and what went wrong last time) is **not on the site and
  should not go on the site.**

---

## Copy worth defending if he pushes back

The "How your system actually works" section is the most unusual thing on the page — a plain-English
explanation that an air conditioner moves heat rather than making cold. It is there for three reasons:

1. It is **his own line**, and it is genuinely good.
2. It earns the slogan. "We Move Heat" is a strange thing to put on a building until somebody
   explains it, and then it is the most memorable name in the market.
3. It is the **bridge to the school**. A man who can explain the trade in three sentences is
   visibly someone who could teach it, which is the whole argument the training band is making.

If he wants it shorter, cut the third step. Do not cut the pull-quote.

---

## Open questions for the next call

- How many years in the trade? (biggest gap on the page)
- SC and/or GA mechanical contractor licence numbers? Insured?
- Business hours? Does he take after-hours or emergency calls, and does he charge differently?
- Does he want the Augusta, GA side advertised as strongly as the SC side, or is GA secondary?
- Any brands he is dealer-certified for?
- Photos — anything at all, even phone photos of a job in progress
- Is he happy with the one Tennessee sentence in the About section?
- Domain preference
