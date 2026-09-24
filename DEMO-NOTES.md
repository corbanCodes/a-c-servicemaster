# Demo notes — A/C Service Master (Paul Diggs)

Built 23 Sep 2026 from one phone call; rebuilt 24 Sep on the Clear Look Cleaning
(`howard-vanderpool`) design system at the client's request. One page. **Demo banner is live at
the top of every page — remove it before launch** (see "Before this goes live", item 1).

---

## Real — from the call

- **Paul Diggs**, trading as **A/C Service Master** (the LLC is A/C ServiceMaster LLC)
- **Slogan: "We Move Heat"** — his own words. It is the hero headline, the top bar, the footer,
  and the whole "How it works" section exists to pay it off
- **Phone: (803) 661-3537** — the only conversion on the page
- **Email: acsmhvac@outlook.com**
- **Address: 356A Edgefield Road, North Augusta, SC 29841** — his nephew's address, which is the
  registered address of the LLC. On the page as "Based at", not as a storefront
- He is **starting over in South Carolina**; the Tennessee operation is finished
- He has **no lab right now** — the training lab is a plan, not a place
- Much of the eventual lab equipment **comes off the real service work** he does in SC
- How he described the trade on the call — that a system just moves heat, outside to inside or
  the other way round. This is the **idea** behind the "How it works" section. It was briefly on
  the page as a pull-quote attributed to him and that was wrong: a line from a scattered phone
  note is not a statement he has approved for publication, and set in quotation marks it read as
  odd rather than plain-spoken. **Removed 24 Sep.** The section keeps the idea in ordinary prose.

## Real — verified from his Experience.com profile

Source: <https://www.experience.com/reviews/ac-servicemaster-llc-22557209> (aggregating Google).
This filled in most of what was missing after the call.

- **4.71 average from 65 Google reviews** — 88% five-star, 5% four, 3% three, 0% two, 5% one
- **In the trade since 1989** — the profile says "37 Years of Experience" and "Year Started 1989"
- **Owner-operator**, his own description: *"The owner (Paul Diggs) takes personal pride in the
  hands-on experience of all the work completed"*
- **Residential and commercial**
- **Specialises in ductless HVAC installations** — this is why mini-splits are one of the six cards
- **Cash and credit cards accepted, financing available**
- **10% senior discount**

### Six reviews are quoted verbatim on the page

Walker G., Tom S., Ourst8ofmind, The M. (Trophies Unlimited — the commercial one), Sam W. and
Jessica C. **Do not edit the wording of a quote.** Names are shown as first name + initial, which
is how they are already published.

The page says **4.71, not 5.0**, because that is the real number. Do not round it up.

---

## Three things about that profile worth raising with Paul

1. **It is an unclaimed profile**, so nothing on it has been confirmed by him. The numbers above
   are the basis for "since 1989", "37 years" and "4.71 from 65" on the page — **get him to
   confirm them before launch**, particularly the year.
2. **The address on it is 122 Horry St NE, Aiken, SC 29801** — not the North Augusta address he
   gave on the call. The site uses what he told us. Worth asking which is current.
3. **The most recent review is a 1-star from May 2024 reading "No longer doing service."**
   That is consistent with him winding down before the move, but it is sitting at the top of his
   Google results right now. **Claiming and updating the Google Business Profile is the single
   highest-value thing he could do this week** — more than the website.

---

## PHONE CALLS ONLY — read before changing anything

He asked for **calls only: no texts, no chat, no form.** So:

- Every CTA is a `tel:+18036613537` link, including all six service cards
- There is **no contact form** anywhere and no `thank-you.html`
- The hero's right-hand card is a **call card**, in the slot where the Clear Look design puts its
  estimate form
- There is a sticky call bar on mobile
- No SMS wording anywhere; no chat widget, and none should be added
- `assets/js/main.js` has the Clear Look form handler **removed** on purpose

**If he ever changes his mind about a form**, HQ looks the slug up in the `Form` table and 404s if
it does not exist — so a form here needs a form created in HQ first and its real slug pasted into
the `action`. The Clear Look markup in `howard-vanderpool/index.html` is the pattern to copy.

---

## Before this goes live

1. **Remove the demo banner.** Delete the `<div class="demo-bar">` line from `index.html`,
   `404.html` and `credits.html`, and the `.demo-bar` block at the bottom of
   `assets/css/style.css`. Each one is marked with a comment.
2. **Domain.** Nothing is registered. `index.html` currently assumes
   `https://acservicemaster.com/` in the canonical tag, the `og:url`, the `og:image` and the
   JSON-LD `url`/`image`. `acservicemaster.com` may well be taken — `acsmhvac.com` matches his
   email if it is free.
3. **Confirm the numbers with Paul** — 1989, 37 years, 4.71 from 65. See above.
4. **Photos.** Every image is stock and none are his. The hero and the A/C-repair card are
   **another HVAC company's marketing photo** (CC BY 2.0, credited) showing an identifiable
   technician who is not Paul — cropped to favour the work over the face, but first to replace.
   Four more are U.S. Air Force public-domain shots with uniforms visible. See `ATTRIBUTION.md`.
5. **Licence / insurance.** SC and GA both license mechanical contractors. The page makes
   **no licence claim at all** because we have not seen a number. If Paul has SC and/or GA
   numbers they belong in the top bar and the footer, and they will help him.
6. **Hours.** Not on the page. His Experience profile lists Thu 8–8, Fri 8–8, Sat 8–2 but does
   not show the other four days, and the profile is stale, so nothing was published. Ask him.

---

## Things deliberately NOT on the page

- **No 5.0 rating.** It is 4.71 and the page says 4.71, with the full star breakdown including
  the 5% one-star.
- **No invented testimonials.** All six quotes are real and verbatim.
- **No licence or insurance claim.** See above.
- **No prices, no "$89 service call".** Financing and the senior discount are mentioned because
  his own profile states them.
- **No enrolment, tuition, dates or class sizes** for the training. The band says plainly there
  are none yet.
- **Nothing from the call about Jackson, TN** beyond the fact that the training lab is coming.
  Everything else from that part of the call — funding, donations, amounts, names, and what went
  wrong last time — is **not on the site and should not go on the site.**

---

## Design notes

Built on the `howard-vanderpool` (Clear Look Cleaning) system at the client's request: same
Oswald/Barlow type, same top bar → sticky header → hero-with-card → trust strip → about →
reviews marquee → services grid → FAQ → areas → CTA band → footer structure, same
`reveal`-on-scroll behaviour.

**What changed for this client:**

- Palette keeps Clear Look's navy and sky — which reads as *cooling* and suits HVAC — and adds a
  **flame accent** (`--flame: #e8552d`) used only on the word "Heat" in the hero and on every
  call-to-action. Cool base, warm action: the two halves of what he does.
- The hero's estimate form is replaced by the **call card** (`.call-card`).
- Two sections are new and have no Clear Look equivalent: **"How it works"** (`.how-grid`) and the
  **training band** (`.training-band`).
- The reviews marquee carries the real star breakdown (`.rv-bars`) because the rating is 4.71
  rather than a clean 5.0 and the breakdown is what makes that number reassuring rather than
  apologetic.
- Services and Areas are **anchors on the one page**, not the sub-pages Clear Look has. The nav
  dropdowns still work and still list everything; they just jump rather than navigate. If Paul
  ever wants real service and area pages for SEO, the Clear Look repo has the templates.

---

## Copy worth defending if he pushes back

The "How your system actually works" section — the plain-English explanation that an air
conditioner moves heat rather than making cold — is there for three reasons:

1. It is **his own line**, and it is genuinely good.
2. It **earns the slogan.** "We Move Heat" is a strange thing to put on a truck until somebody
   explains it, and then it is the most memorable name in the market.
3. It is the **bridge to the school.** A man who can explain the trade in three sentences is
   visibly someone who could teach it, which is the argument the training band is making.

If he wants it shorter, cut the third step.

**Do not put his phone-call phrasing back on the page as a quotation.** Nothing he said on that
call was said for publication, and quoting rough notes verbatim makes a plain-spoken man sound
strange. If a real quote from him would help, ask him for one directly and let him approve it.

---

## Open questions for the next call

- Confirm: in the trade since 1989? 37 years?
- SC and/or GA mechanical contractor licence numbers? Insured?
- Which address is current — North Augusta, or the Aiken one on his Google listing?
- Has he claimed his Google Business Profile? (This matters more than the website.)
- Business hours? After-hours or emergency calls, and does he charge differently?
- Photos — anything at all, even phone photos of a job in progress
- Domain preference
