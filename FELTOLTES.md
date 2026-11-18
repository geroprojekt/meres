# Feltöltés GitHub Pages-re

Ez a mappa egy kész, statikus weboldal. Szerver, telepítés vagy build nem kell hozzá.

## Tartalom
- `index.html` – a weboldal
- `assets/` – megjelenés (style.css) és működés (app.js)
- `data.js` – a táblázatok, számok és ábraleírások
- `img/` – az összes ábra (WebP formátumban)
- `.nojekyll` – üres fájl, a GitHub Pages ne alakítsa át a fájlokat (rejtett fájl, ez is kell!)

## Első feltöltés (böngészőből)
1. github.com → jobb felül **+** → **New repository**.
   Név pl. `tarolo-meresek`, **Public**, majd **Create repository**.
2. Az új repository oldalán: **uploading an existing file** (vagy **Add file → Upload files**).
3. Csomagold ki a ZIP-et, és a kicsomagolt mappa **tartalmát** (nem magát a mappát) húzd be
   a feltöltő mezőbe: `index.html`, `data.js`, `assets`, `img`, `.nojekyll`.
   - macOS Finderben a rejtett `.nojekyll` látszódjon: **Cmd + Shift + .**
   - A mappák (assets, img) szerkezete Chrome-ban és Safariban megmarad behúzáskor.
   - A GitHub böngészős feltöltése egyszerre **legfeljebb 100 fájlt** és fájlonként **25 MB-ot** fogad.
     Ha a mappa több fájlt tartalmaz, töltsd fel két részletben:
     a) először mindent az `img/anim` mappa nélkül (az `anim` mappát ideiglenesen húzd ki a kicsomagolt `img`-ből),
     b) a repositoryban kattints az **img** mappára, ott **Add file → Upload files**, és húzd be az `anim` mappát.
        A feltöltés abba a mappába kerül, amelyikben állsz, így az útvonal `img/anim/...` lesz.
4. Lent **Commit changes**.
5. **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, mappa: **/(root)** → **Save**.
6. 1–2 perc múlva az oldal elérhető: `https://<felhasználónév>.github.io/tarolo-meresek/`
   (a pontos címet a Settings → Pages oldal tetején is kiírja).

## Frissítés új mérések után
1. Futtasd újra a kiértékelést – ez újraépíti a `weboldal` mappát és a `weboldal.zip`-et.
2. A repositoryban **Add file → Upload files**, és töltsd fel újra a mappa tartalmát
   (a régi fájlokat felülírja). **Commit changes** – 1–2 perc múlva frissül az oldal.
   Ha egy ábrát töröltél, a régi kép a repositoryban marad, de az oldal már nem hivatkozik rá.

## Helyi megtekintés
A böngésző a helyi `index.html`-t is megnyitja dupla kattintással. Ha valami nem töltődik be,
indíts egy kis helyi szervert a mappában:
`python3 -m http.server 8000` → http://localhost:8000
