# A/C ServiceMaster — flyer

One-page flyer, 8.5 x 11 in. Built from the site's own design system, the logo Paul supplied,
and four of his own job photographs.

## Send these

| File | Use |
|---|---|
| `ac-servicemaster-flyer.jpg` | **Texting.** 1200px wide, ~280 KB — sends over SMS/MMS without being crushed |
| `ac-servicemaster-flyer-hires.jpg` | **Email.** Full 1632x2112, sharper on a desktop screen |
| `ac-servicemaster-flyer.pdf` | **Printing.** True 8.5x11, vector text, no margins — hand to any print shop |

## Editing it

`flyer.html` is the source. Change the copy there, then re-render:

```
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cd flyer
"$CHROME" --headless --disable-gpu --no-pdf-header-footer --no-margins \
  --print-to-pdf="ac-servicemaster-flyer.pdf" --virtual-time-budget=12000 "file://$PWD/flyer.html"
"$CHROME" --headless --disable-gpu --screenshot="_raw.png" \
  --window-size=816,1056 --force-device-scale-factor=2 \
  --virtual-time-budget=12000 "file://$PWD/flyer.html"
magick _raw.png -resize 1200x -quality 88 -strip ac-servicemaster-flyer.jpg
magick _raw.png -quality 92 -strip ac-servicemaster-flyer-hires.jpg
rm _raw.png
```

**The layout has no slack.** The page is a fixed 11in flex column: the header, the trust strip,
the orange offer band and the footer are all `flex:none`, and `.body` takes what is left. If you
add a line of copy, something else has to give or the body will overflow and clip. Check it by
loading `flyer.html` in a browser at 816x1056 and confirming `.body`'s scrollHeight is not taller
than its height.

The logo on the dark header must stay `logo-light.png` — the full-colour logo's wordmark is navy
and disappears against it.
