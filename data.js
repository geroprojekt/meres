window.DATA = {
 "generated": "2026.11.19. 00:29",
 "kpis": [
  {
   "label": "Mérések",
   "value": "5 + 5",
   "sub": "felfűtés + kisütés"
  },
  {
   "label": "Leggyorsabb felfűtés 16 → 60 °C",
   "value": "26",
   "unit": "perc",
   "sub": "csőkígyó 1930 l/h",
   "color": "var(--hot)"
  },
  {
   "label": "Időállandó τ",
   "value": "20–32",
   "unit": "perc",
   "sub": "nagy … kis csőkígyós térfogatáram",
   "color": "var(--hot)"
  },
  {
   "label": "Használható melegvíz (≥ 40 °C)",
   "value": "193–226",
   "unit": "liter",
   "sub": "a 300 literből",
   "color": "var(--cold)"
  },
  {
   "label": "Csőkígyó UA",
   "value": "688–971",
   "unit": "W/K",
   "sub": "a térfogatárammal nő"
  }
 ],
 "findings": [
  "Nagyobb csőkígyós térfogatárammal gyorsabb a felfűtés: τ ≈ 31 perc (730 l/h) helyett ≈ 20 perc (1930 l/h). Kb. 1500 l/h fölött a nyereség már kicsi.",
  "A csőkígyós felfűtés gyakorlatilag kevert tárolót ad: az első 20 perc után a legmelegebb és a leghidegebb réteg között csak 2–3 K a különbség.",
  "Kisütésnél a 300 literből 193–226 liter jön ki legalább 40 °C-on, a csapolási térfogatáramtól csak kissé függően.",
  "A hidegfront nem vízszintes: alul a fal mentén, feljebb középen jár előrébb – ez a fal melletti és belső hőmérők különbségén látszik.",
  "A pufferről történő felfűtés kb. 59 °C-ig jutott: a puffer kifogyott, a csőkígyó végül már nem fűtött."
 ],
 "heat": {
  "columns": [
   "Mérés",
   "Csőkígyó [l/h]",
   "Időtartam [perc]",
   "Tároló átlag eleje [°C]",
   "Tároló átlag vége [°C]",
   "Fal átlag vége [°C]",
   "Belső átlag vége [°C]",
   "T14 átlag [°C]",
   "Bevitt hő [kWh]",
   "Átlagos bevitt hőáram Q̇ [kW]",
   "Max. bevitt hőáram Q̇ (1 perces átlag) [kW]",
   "Idő 16→30 °C [perc]",
   "Idő 16→40 °C [perc]",
   "Idő 16→50 °C [perc]",
   "Idő 16→60 °C [perc]",
   "Idő 16→65 °C [perc]",
   "Idő 16→70 °C [perc]",
   "Exp. illesztés τ [perc]",
   "Exp. illesztés T∞ [°C]",
   "3τ (95%) [perc]",
   "Időállandó τ = m·cp/(V̇ρcp·ε) [perc]",
   "Csőkígyó hatásosság ε [-]",
   "UA LMTD-vel, medián [W/K]"
  ],
  "rows": [
   {
    "Mérés": "felfűtés, csőkígyó 730 l/h (pufferről)",
    "Csőkígyó [l/h]": 730,
    "Időtartam [perc]": 54.1,
    "Tároló átlag eleje [°C]": 15.84,
    "Tároló átlag vége [°C]": 59.05,
    "Fal átlag vége [°C]": 59.19,
    "Belső átlag vége [°C]": 58.92,
    "T14 átlag [°C]": 71.01,
    "Bevitt hő [kWh]": 11.542,
    "Átlagos bevitt hőáram Q̇ [kW]": 12.79,
    "Max. bevitt hőáram Q̇ (1 perces átlag) [kW]": 33.12,
    "Idő 16→30 °C [perc]": 8.7,
    "Idő 16→40 °C [perc]": 16.0,
    "Idő 16→50 °C [perc]": 26.5,
    "Idő 16→60 °C [perc]": null,
    "Idő 16→65 °C [perc]": null,
    "Idő 16→70 °C [perc]": null,
    "Exp. illesztés τ [perc]": 22.8,
    "Exp. illesztés T∞ [°C]": 65.15,
    "3τ (95%) [perc]": 68.0,
    "Időállandó τ = m·cp/(V̇ρcp·ε) [perc]": 31.0,
    "Csőkígyó hatásosság ε [-]": 0.59,
    "UA LMTD-vel, medián [W/K]": 743.0
   },
   {
    "Mérés": "felfűtés, csőkígyó 730 l/h",
    "Csőkígyó [l/h]": 730,
    "Időtartam [perc]": 135.4,
    "Tároló átlag eleje [°C]": 15.05,
    "Tároló átlag vége [°C]": 73.04,
    "Fal átlag vége [°C]": 73.72,
    "Belső átlag vége [°C]": 72.37,
    "T14 átlag [°C]": 75.64,
    "Bevitt hő [kWh]": 16.3,
    "Átlagos bevitt hőáram Q̇ [kW]": 7.22,
    "Max. bevitt hőáram Q̇ (1 perces átlag) [kW]": 31.88,
    "Idő 16→30 °C [perc]": 8.7,
    "Idő 16→40 °C [perc]": 16.0,
    "Idő 16→50 °C [perc]": 26.3,
    "Idő 16→60 °C [perc]": 44.0,
    "Idő 16→65 °C [perc]": 57.3,
    "Idő 16→70 °C [perc]": 79.1,
    "Exp. illesztés τ [perc]": 29.9,
    "Exp. illesztés T∞ [°C]": 73.64,
    "3τ (95%) [perc]": 90.0,
    "Időállandó τ = m·cp/(V̇ρcp·ε) [perc]": 31.7,
    "Csőkígyó hatásosság ε [-]": 0.564,
    "UA LMTD-vel, medián [W/K]": 688.0
   },
   {
    "Mérés": "felfűtés, csőkígyó 1130 l/h (hibás késik a kazán)",
    "Csőkígyó [l/h]": 1130,
    "Időtartam [perc]": 118.5,
    "Tároló átlag eleje [°C]": 14.76,
    "Tároló átlag vége [°C]": 71.91,
    "Fal átlag vége [°C]": 72.22,
    "Belső átlag vége [°C]": 71.59,
    "T14 átlag [°C]": 71.85,
    "Bevitt hő [kWh]": 17.481,
    "Átlagos bevitt hőáram Q̇ [kW]": 8.85,
    "Max. bevitt hőáram Q̇ (1 perces átlag) [kW]": 39.17,
    "Idő 16→30 °C [perc]": 8.2,
    "Idő 16→40 °C [perc]": 16.0,
    "Idő 16→50 °C [perc]": 28.2,
    "Idő 16→60 °C [perc]": 50.9,
    "Idő 16→65 °C [perc]": 67.1,
    "Idő 16→70 °C [perc]": 91.5,
    "Exp. illesztés τ [perc]": 32.2,
    "Exp. illesztés T∞ [°C]": 72.87,
    "3τ (95%) [perc]": 97.0,
    "Időállandó τ = m·cp/(V̇ρcp·ε) [perc]": 27.4,
    "Csőkígyó hatásosság ε [-]": 0.463,
    "UA LMTD-vel, medián [W/K]": 800.0
   },
   {
    "Mérés": "felfűtés, csőkígyó 1530 l/h (T3 hibás)",
    "Csőkígyó [l/h]": 1530,
    "Időtartam [perc]": 122.1,
    "Tároló átlag eleje [°C]": 13.76,
    "Tároló átlag vége [°C]": 72.37,
    "Fal átlag vége [°C]": 72.36,
    "Belső átlag vége [°C]": 72.17,
    "T14 átlag [°C]": 74.27,
    "Bevitt hő [kWh]": 16.919,
    "Átlagos bevitt hőáram Q̇ [kW]": 8.31,
    "Max. bevitt hőáram Q̇ (1 perces átlag) [kW]": 43.11,
    "Idő 16→30 °C [perc]": 5.7,
    "Idő 16→40 °C [perc]": 10.8,
    "Idő 16→50 °C [perc]": 18.3,
    "Idő 16→60 °C [perc]": 31.4,
    "Idő 16→65 °C [perc]": 42.0,
    "Idő 16→70 °C [perc]": 72.0,
    "Exp. illesztés τ [perc]": 19.5,
    "Exp. illesztés T∞ [°C]": 71.72,
    "3τ (95%) [perc]": 58.0,
    "Időállandó τ = m·cp/(V̇ρcp·ε) [perc]": 21.9,
    "Csőkígyó hatásosság ε [-]": 0.392,
    "UA LMTD-vel, medián [W/K]": 866.0
   },
   {
    "Mérés": "felfűtés, csőkígyó 1930 l/h",
    "Csőkígyó [l/h]": 1930,
    "Időtartam [perc]": 113.6,
    "Tároló átlag eleje [°C]": 14.96,
    "Tároló átlag vége [°C]": 71.66,
    "Fal átlag vége [°C]": 72.19,
    "Belső átlag vége [°C]": 71.14,
    "T14 átlag [°C]": 74.44,
    "Bevitt hő [kWh]": 17.364,
    "Átlagos bevitt hőáram Q̇ [kW]": 9.17,
    "Max. bevitt hőáram Q̇ (1 perces átlag) [kW]": 59.42,
    "Idő 16→30 °C [perc]": 5.5,
    "Idő 16→40 °C [perc]": 10.1,
    "Idő 16→50 °C [perc]": 16.4,
    "Idő 16→60 °C [perc]": 26.2,
    "Idő 16→65 °C [perc]": 35.4,
    "Idő 16→70 °C [perc]": 75.8,
    "Exp. illesztés τ [perc]": 16.4,
    "Exp. illesztés T∞ [°C]": 70.87,
    "3τ (95%) [perc]": 49.0,
    "Időállandó τ = m·cp/(V̇ρcp·ε) [perc]": 20.2,
    "Csőkígyó hatásosság ε [-]": 0.358,
    "UA LMTD-vel, medián [W/K]": 971.0
   }
  ]
 },
 "dis": {
  "columns": [
   "Mérés",
   "Kisütés [l/h]",
   "Időtartam [perc]",
   "Kivett térfogat [l]",
   "Tároló átlag eleje [°C]",
   "Tároló átlag vége [°C]",
   "T13 max [°C]",
   "T0 hideg víz átlag [°C]",
   "V55 (T13 ≥ 55 °C) [l]",
   "V45 (T13 ≥ 45 °C) [l]",
   "V40 (T13 ≥ 40 °C) [l]",
   "Kivett hőmennyiség Q [kWh]",
   "Elméleti kivehető hő (eleje→hideg víz) [kWh]",
   "Kivett hő T13≥40 °C-ig [kWh]",
   "Kisütési hatásfok 40 °C-ig [%]",
   "Hasznos térfogatarány V40/300 l [-]",
   "Hidegfront 1. réteg (fal/belső) [l]",
   "Hidegfront 2. réteg (fal/belső) [l]",
   "Hidegfront 3. réteg (fal/belső) [l]",
   "Hidegfront 4. réteg (fal/belső) [l]",
   "Hidegfront 5. réteg (fal/belső) [l]",
   "Hidegfront 6. réteg (fal/belső) [l]"
  ],
  "rows": [
   {
    "Mérés": "kisütés 375 l/h",
    "Kisütés [l/h]": 375,
    "Időtartam [perc]": 38.5,
    "Kivett térfogat [l]": 240.0,
    "Tároló átlag eleje [°C]": 73.06,
    "Tároló átlag vége [°C]": 16.37,
    "T13 max [°C]": 74.44,
    "T0 hideg víz átlag [°C]": 15.94,
    "V55 (T13 ≥ 55 °C) [l]": 187.0,
    "V45 (T13 ≥ 45 °C) [l]": 191.0,
    "V40 (T13 ≥ 40 °C) [l]": 193.0,
    "Kivett hőmennyiség Q [kWh]": 12.949,
    "Elméleti kivehető hő (eleje→hideg víz) [kWh]": 19.446,
    "Kivett hő T13≥40 °C-ig [kWh]": 12.631,
    "Kisütési hatásfok 40 °C-ig [%]": 65.0,
    "Hasznos térfogatarány V40/300 l [-]": 0.643,
    "Hidegfront 1. réteg (fal/belső) [l]": "19 / 21",
    "Hidegfront 2. réteg (fal/belső) [l]": "34 / 31",
    "Hidegfront 3. réteg (fal/belső) [l]": "60 / 62",
    "Hidegfront 4. réteg (fal/belső) [l]": "89 / 88",
    "Hidegfront 5. réteg (fal/belső) [l]": "128 / 126",
    "Hidegfront 6. réteg (fal/belső) [l]": "169 / 170"
   },
   {
    "Mérés": "kisütés 500 l/h",
    "Kisütés [l/h]": 500,
    "Időtartam [perc]": 45.9,
    "Kivett térfogat [l]": 383.0,
    "Tároló átlag eleje [°C]": 71.71,
    "Tároló átlag vége [°C]": 15.26,
    "T13 max [°C]": 72.83,
    "T0 hideg víz átlag [°C]": 15.13,
    "V55 (T13 ≥ 55 °C) [l]": 212.0,
    "V45 (T13 ≥ 45 °C) [l]": 216.0,
    "V40 (T13 ≥ 40 °C) [l]": 218.0,
    "Kivett hőmennyiség Q [kWh]": 14.71,
    "Elméleti kivehető hő (eleje→hideg víz) [kWh]": 19.277,
    "Kivett hő T13≥40 °C-ig [kWh]": 14.108,
    "Kisütési hatásfok 40 °C-ig [%]": 73.2,
    "Hasznos térfogatarány V40/300 l [-]": 0.727,
    "Hidegfront 1. réteg (fal/belső) [l]": "21 / 24",
    "Hidegfront 2. réteg (fal/belső) [l]": "38 / 34",
    "Hidegfront 3. réteg (fal/belső) [l]": "68 / 70",
    "Hidegfront 4. réteg (fal/belső) [l]": "100 / 99",
    "Hidegfront 5. réteg (fal/belső) [l]": "145 / 143",
    "Hidegfront 6. réteg (fal/belső) [l]": "191 / 193"
   },
   {
    "Mérés": "kisütés 1000 l/h (T3 hibás)",
    "Kisütés [l/h]": 1000,
    "Időtartam [perc]": 30.8,
    "Kivett térfogat [l]": 513.0,
    "Tároló átlag eleje [°C]": 72.37,
    "Tároló átlag vége [°C]": 14.34,
    "T13 max [°C]": 73.23,
    "T0 hideg víz átlag [°C]": 14.11,
    "V55 (T13 ≥ 55 °C) [l]": 220.0,
    "V45 (T13 ≥ 45 °C) [l]": 224.0,
    "V40 (T13 ≥ 40 °C) [l]": 226.0,
    "Kivett hőmennyiség Q [kWh]": 15.897,
    "Elméleti kivehető hő (eleje→hideg víz) [kWh]": 19.842,
    "Kivett hő T13≥40 °C-ig [kWh]": 14.887,
    "Kisütési hatásfok 40 °C-ig [%]": 75.0,
    "Hasznos térfogatarány V40/300 l [-]": 0.753,
    "Hidegfront 1. réteg (fal/belső) [l]": "25 / 28",
    "Hidegfront 2. réteg (fal/belső) [l]": "42 / 38",
    "Hidegfront 3. réteg (fal/belső) [l]": "72 / nan",
    "Hidegfront 4. réteg (fal/belső) [l]": "104 / 103",
    "Hidegfront 5. réteg (fal/belső) [l]": "150 / 149",
    "Hidegfront 6. réteg (fal/belső) [l]": "199 / 200"
   },
   {
    "Mérés": "kisütés 1500 l/h",
    "Kisütés [l/h]": 1500,
    "Időtartam [perc]": 19.5,
    "Kivett térfogat [l]": 488.0,
    "Tároló átlag eleje [°C]": 72.11,
    "Tároló átlag vége [°C]": 15.08,
    "T13 max [°C]": 73.13,
    "T0 hideg víz átlag [°C]": 14.39,
    "V55 (T13 ≥ 55 °C) [l]": 211.0,
    "V45 (T13 ≥ 45 °C) [l]": 215.0,
    "V40 (T13 ≥ 40 °C) [l]": 217.0,
    "Kivett hőmennyiség Q [kWh]": 15.338,
    "Elméleti kivehető hő (eleje→hideg víz) [kWh]": 19.662,
    "Kivett hő T13≥40 °C-ig [kWh]": 14.413,
    "Kisütési hatásfok 40 °C-ig [%]": 73.3,
    "Hasznos térfogatarány V40/300 l [-]": 0.723,
    "Hidegfront 1. réteg (fal/belső) [l]": "21 / 25",
    "Hidegfront 2. réteg (fal/belső) [l]": "38 / 36",
    "Hidegfront 3. réteg (fal/belső) [l]": "67 / 69",
    "Hidegfront 4. réteg (fal/belső) [l]": "98 / 98",
    "Hidegfront 5. réteg (fal/belső) [l]": "144 / 142",
    "Hidegfront 6. réteg (fal/belső) [l]": "192 / 192"
   },
   {
    "Mérés": "kisütés 2000 l/h",
    "Kisütés [l/h]": 2000,
    "Időtartam [perc]": 14.9,
    "Kivett térfogat [l]": 498.0,
    "Tároló átlag eleje [°C]": 58.83,
    "Tároló átlag vége [°C]": 14.91,
    "T13 max [°C]": 59.67,
    "T0 hideg víz átlag [°C]": 14.26,
    "V55 (T13 ≥ 55 °C) [l]": 198.0,
    "V45 (T13 ≥ 45 °C) [l]": 204.0,
    "V40 (T13 ≥ 40 °C) [l]": 206.0,
    "Kivett hőmennyiség Q [kWh]": 11.66,
    "Elméleti kivehető hő (eleje→hideg víz) [kWh]": 15.297,
    "Kivett hő T13≥40 °C-ig [kWh]": 10.498,
    "Kisütési hatásfok 40 °C-ig [%]": 68.6,
    "Hasznos térfogatarány V40/300 l [-]": 0.687,
    "Hidegfront 1. réteg (fal/belső) [l]": "14 / 22",
    "Hidegfront 2. réteg (fal/belső) [l]": "31 / 31",
    "Hidegfront 3. réteg (fal/belső) [l]": "59 / 61",
    "Hidegfront 4. réteg (fal/belső) [l]": "89 / 89",
    "Hidegfront 5. réteg (fal/belső) [l]": "136 / 134",
    "Hidegfront 6. réteg (fal/belső) [l]": "184 / 187"
   }
  ]
 },
 "qc": {
  "columns": [
   "Mérés",
   "Hőmérő",
   "Kizárva (QC 9)",
   "Törölve – lehetetlen (QC 4) [db]",
   "Törölve – > 20 K eltérés (QC 3) [db]",
   "Gyanús – tüske (QC 1) [db]",
   "Gyanús – szomszédoktól eltér (QC 2) [db]",
   "Törölt [%]",
   "Gyanús, megtartott [%]"
  ],
  "rows": [
   {
    "Mérés": "felfűtés, csőkígyó 1530 l/h",
    "Hőmérő": "T3",
    "Kizárva (QC 9)": "igen – tudottan hibás",
    "Törölve – lehetetlen (QC 4) [db]": null,
    "Törölve – > 20 K eltérés (QC 3) [db]": null,
    "Gyanús – tüske (QC 1) [db]": null,
    "Gyanús – szomszédoktól eltér (QC 2) [db]": null,
    "Törölt [%]": 100.0,
    "Gyanús, megtartott [%]": null
   },
   {
    "Mérés": "kisütés 1000 l/h",
    "Hőmérő": "T2",
    "Kizárva (QC 9)": "",
    "Törölve – lehetetlen (QC 4) [db]": 0,
    "Törölve – > 20 K eltérés (QC 3) [db]": 0,
    "Gyanús – tüske (QC 1) [db]": 0,
    "Gyanús – szomszédoktól eltér (QC 2) [db]": 6,
    "Törölt [%]": 0.0,
    "Gyanús, megtartott [%]": 1.62
   },
   {
    "Mérés": "kisütés 1000 l/h",
    "Hőmérő": "T3",
    "Kizárva (QC 9)": "igen – tudottan hibás",
    "Törölve – lehetetlen (QC 4) [db]": null,
    "Törölve – > 20 K eltérés (QC 3) [db]": null,
    "Gyanús – tüske (QC 1) [db]": null,
    "Gyanús – szomszédoktól eltér (QC 2) [db]": null,
    "Törölt [%]": 100.0,
    "Gyanús, megtartott [%]": null
   },
   {
    "Mérés": "felfűtés, csőkígyó 1930 l/h",
    "Hőmérő": "T3",
    "Kizárva (QC 9)": "",
    "Törölve – lehetetlen (QC 4) [db]": 0,
    "Törölve – > 20 K eltérés (QC 3) [db]": 0,
    "Gyanús – tüske (QC 1) [db]": 0,
    "Gyanús – szomszédoktól eltér (QC 2) [db]": 547,
    "Törölt [%]": 0.0,
    "Gyanús, megtartott [%]": 40.13
   },
   {
    "Mérés": "kisütés 500 l/h",
    "Hőmérő": "T3",
    "Kizárva (QC 9)": "",
    "Törölve – lehetetlen (QC 4) [db]": 0,
    "Törölve – > 20 K eltérés (QC 3) [db]": 0,
    "Gyanús – tüske (QC 1) [db]": 0,
    "Gyanús – szomszédoktól eltér (QC 2) [db]": 92,
    "Törölt [%]": 0.0,
    "Gyanús, megtartott [%]": 16.7
   },
   {
    "Mérés": "felfűtés, csőkígyó 730 l/h",
    "Hőmérő": "T3",
    "Kizárva (QC 9)": "",
    "Törölve – lehetetlen (QC 4) [db]": 67,
    "Törölve – > 20 K eltérés (QC 3) [db]": 148,
    "Gyanús – tüske (QC 1) [db]": 6,
    "Gyanús – szomszédoktól eltér (QC 2) [db]": 930,
    "Törölt [%]": 13.24,
    "Gyanús, megtartott [%]": 57.64
   },
   {
    "Mérés": "kisütés 375 l/h",
    "Hőmérő": "T3",
    "Kizárva (QC 9)": "",
    "Törölve – lehetetlen (QC 4) [db]": 38,
    "Törölve – > 20 K eltérés (QC 3) [db]": 0,
    "Gyanús – tüske (QC 1) [db]": 0,
    "Gyanús – szomszédoktól eltér (QC 2) [db]": 303,
    "Törölt [%]": 8.23,
    "Gyanús, megtartott [%]": 65.58
   },
   {
    "Mérés": "kisütés 375 l/h",
    "Hőmérő": "T4",
    "Kizárva (QC 9)": "",
    "Törölve – lehetetlen (QC 4) [db]": 0,
    "Törölve – > 20 K eltérés (QC 3) [db]": 0,
    "Gyanús – tüske (QC 1) [db]": 0,
    "Gyanús – szomszédoktól eltér (QC 2) [db]": 6,
    "Törölt [%]": 0.0,
    "Gyanús, megtartott [%]": 1.3
   }
  ]
 },
 "heatFigs": [
  {
   "src": "img/felfutesi_idok.webp",
   "title": "Felfűtési idő 16 °C-ról",
   "desc": "A tároló átlaghőmérséklete mennyi idő alatt ér el 30–70 °C-ot ugyanarról a 16 °C-os kezdőpontról. A nagyobb csőkígyós térfogatáram gyorsabb, de egyre kisebb nyereséggel.",
   "w": 1650,
   "h": 825,
   "wide": true,
   "group": "Felfűtési idő és időállandó"
  },
  {
   "src": "img/idoallando_illesztes.webp",
   "title": "Időállandó – exponenciális illesztés",
   "desc": "A mért tárolóátlagra illesztett exponenciális görbe. Ha ráfekszik a mért görbére, a τ értelmes jellemző: τ alatt a hiányzó hőmérséklet-különbség 63%-a, 3τ alatt 95%-a pótlódik.",
   "w": 3150,
   "h": 630,
   "wide": true
  },
  {
   "src": "img/idoallando_es_UA_vs_terfogataram.webp",
   "title": "Időállandó, hatásosság és UA a térfogatáram függvényében",
   "desc": "τ: milyen gyorsan melegszik a tároló. ε: a csőkígyón átfolyó víz a lehetséges lehűlés hányad részét teszi meg. UA: hány W megy át 1 K különbségenként. A nagyobb térfogatáram gyorsít, de kb. 1500 l/h fölött már alig.",
   "w": 2250,
   "h": 690,
   "wide": true
  },
  {
   "src": "img/felfutes_retegenkent_fal.webp",
   "title": "Rétegenként – fal melletti hőmérők",
   "desc": "Minden réteg külön grafikonon, benne minden felfűtés egy görbe. Csak a palást melletti (3 cm) hőmérők.",
   "w": 2400,
   "h": 1425,
   "wide": true,
   "group": "Rétegenként"
  },
  {
   "src": "img/felfutes_retegenkent_belso.webp",
   "title": "Rétegenként – belső hőmérők",
   "desc": "Ugyanez a belső (30 cm) hőmérőkkel.",
   "w": 2400,
   "h": 1425,
   "wide": true
  },
  {
   "src": "img/felfutes_retegenkent_atlag.webp",
   "title": "Rétegenként – fal és belső átlaga",
   "desc": "Rétegenként a fal melletti és a belső hőmérő átlaga.",
   "w": 2400,
   "h": 1425,
   "wide": true
  },
  {
   "src": "img/felfutes_fal_minus_belso_retegenkent.webp",
   "title": "Fal melletti mínusz belső, rétegenként",
   "desc": "Pozitív: a fal mellett melegebb. Felfűtéskor a különbség kicsi (±1–2 K), a tároló egyenletesen melegszik; alul a fal kissé hidegebb.",
   "w": 2400,
   "h": 1425,
   "wide": true
  },
  {
   "src": "img/felfutes_retegzodes.webp",
   "title": "Rétegződés felfűtés közben",
   "desc": "A legmelegebb és a leghidegebb rétegátlag különbsége, a gyanús (QC 1/2) értékek nélkül számolva. Az első 20 percben 5–7 K, utána minden térfogatáramnál 2–3 K: a csőkígyó gyakorlatilag kevert tárolót ad.",
   "w": 1500,
   "h": 750,
   "wide": false,
   "group": "Rétegződés és hőáram"
  },
  {
   "src": "img/osszes_uzemallapot_bevitt_hoaram.webp",
   "title": "Csőkígyón bevitt hőáram – minden felfűtés",
   "desc": "1 perces átlag. Ahogy a tároló közelít az előremenő hőmérséklethez, a hőáram csökken. A pufferes felfűtésnél a puffer kifogyott: a hőáram 50 perc körül nullára esik.",
   "w": 1650,
   "h": 870,
   "wide": false
  }
 ],
 "disFigs": [
  {
   "src": "img/kisutes_kilepo_homerseklet.webp",
   "title": "Kilépő melegvíz a kivett térfogat függvényében",
   "desc": "Hány liter vehető ki, mielőtt a csapvíz kihűl. A szaggatott vonalak 40 és 45 °C-nál, a pontozott 300 l-nél.",
   "w": 1500,
   "h": 825,
   "wide": false,
   "group": "Használható melegvíz"
  },
  {
   "src": "img/kisutes_hidegfront.webp",
   "title": "Hidegfront érkezése rétegenként",
   "desc": "Hány liter kivétele után éri el a hideg víz az egyes rétegeket, az ideális (keveredésmentes) dugattyúáramhoz képest.",
   "w": 1950,
   "h": 780,
   "wide": false
  },
  {
   "src": "img/kisutes_retegenkent_fal_terfogat.webp",
   "title": "Rétegenként – fal melletti hőmérők",
   "desc": "A kivett térfogat szerint ábrázolva, így a különböző kisütési térfogatáramok közvetlenül összevethetők.",
   "w": 2400,
   "h": 1425,
   "wide": true,
   "group": "Rétegenként (kivett térfogat szerint)"
  },
  {
   "src": "img/kisutes_retegenkent_belso_terfogat.webp",
   "title": "Rétegenként – belső hőmérők",
   "desc": "Ugyanez a belső hőmérőkkel.",
   "w": 2400,
   "h": 1425,
   "wide": true
  },
  {
   "src": "img/kisutes_retegenkent_atlag_terfogat.webp",
   "title": "Rétegenként – fal és belső átlaga",
   "desc": "Rétegenként a fal melletti és a belső hőmérő átlaga.",
   "w": 2400,
   "h": 1425,
   "wide": true
  },
  {
   "src": "img/kisutes_fal_minus_belso_retegenkent.webp",
   "title": "Fal melletti mínusz belső – a hidegfront alakja",
   "desc": "A csúcsok azt mutatják, hogy a front nem vízszintes: negatív csúcs – a fal mellett ér oda előbb a hideg víz, pozitív – középen. A csúcs szélessége (literben) a front ferdeségét jelzi.",
   "w": 2400,
   "h": 1425,
   "wide": true
  }
 ],
 "measurements": [
  {
   "anim": {
    "src": "img/anim/1117_1303_felfutes_2000_730.webp",
    "w": 880,
    "h": 458,
    "mb": "2,5",
    "speed": "181"
   },
   "id": "1117_1303_felfutes_2000_730",
   "kind": "felfűtés",
   "label": "felfűtés, csőkígyó 730 l/h",
   "short": "csőkígyó 730 l/h",
   "chip": "730 l/h · puffer",
   "note": "pufferről",
   "when": "2026.11.17. 13:03",
   "excluded": [],
   "info": [
    {
     "k": "időtartam",
     "v": "54 perc"
    },
    {
     "k": "tároló átlag eleje → vége",
     "v": "15,8 → 59,1 °C"
    },
    {
     "k": "bevitt hő",
     "v": "11,5 kWh"
    }
   ],
   "figs": [
    {
     "src": "img/1117_1303_felfutes_2000_730/1_fal.webp",
     "title": "Fal melletti hőmérők",
     "desc": "A 6 palást melletti (3 cm) hőmérő, rétegenként. Narancs karika: gyanús (QC-flag), de megtartott érték.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1303_felfutes_2000_730/2_belso.webp",
     "title": "Belső hőmérők",
     "desc": "A 6 belső (30 cm) hőmérő, rétegenként.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1303_felfutes_2000_730/3_retegatlag.webp",
     "title": "Rétegátlag",
     "desc": "Rétegenként a fal melletti és a belső hőmérő átlaga.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1303_felfutes_2000_730/4_csoportatlagok.webp",
     "title": "Fal / belső / tároló átlag",
     "desc": "A fal melletti és a belső hőmérők átlaga, a tárolóátlag és a be-/kilépő hőmérsékletek egy ábrán.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1303_felfutes_2000_730/6_idosor_minden_homero.webp",
     "title": "Idősor – minden hőmérő",
     "desc": "A mérőprogram grafikonja: mind a 17 hőmérő, jobb tengelyen a hőáram (1 perces átlag).",
     "w": 1799,
     "h": 960,
     "wide": true
    },
    {
     "src": "img/1117_1303_felfutes_2000_730/7_tarolo_sema.webp",
     "title": "Tároló séma – pillanatképek",
     "desc": "A mérőprogram tárolónézete. Kisütésnél a hidegfront rétegenkénti megérkezésének pillanataiban.",
     "w": 1867,
     "h": 871,
     "wide": true
    }
   ]
  },
  {
   "anim": {
    "src": "img/anim/1118_1730_felfutes_375_730.webp",
    "w": 880,
    "h": 458,
    "mb": "2,4",
    "speed": "451"
   },
   "id": "1118_1730_felfutes_375_730",
   "kind": "felfűtés",
   "label": "felfűtés, csőkígyó 730 l/h",
   "short": "csőkígyó 730 l/h",
   "chip": "730 l/h",
   "note": "",
   "when": "2026.11.18. 17:30",
   "excluded": [],
   "info": [
    {
     "k": "időtartam",
     "v": "135 perc"
    },
    {
     "k": "tároló átlag eleje → vége",
     "v": "15,0 → 73,0 °C"
    },
    {
     "k": "bevitt hő",
     "v": "16,3 kWh"
    }
   ],
   "figs": [
    {
     "src": "img/1118_1730_felfutes_375_730/1_fal.webp",
     "title": "Fal melletti hőmérők",
     "desc": "A 6 palást melletti (3 cm) hőmérő, rétegenként. Narancs karika: gyanús (QC-flag), de megtartott érték.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1730_felfutes_375_730/2_belso.webp",
     "title": "Belső hőmérők",
     "desc": "A 6 belső (30 cm) hőmérő, rétegenként.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1730_felfutes_375_730/3_retegatlag.webp",
     "title": "Rétegátlag",
     "desc": "Rétegenként a fal melletti és a belső hőmérő átlaga.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1730_felfutes_375_730/4_csoportatlagok.webp",
     "title": "Fal / belső / tároló átlag",
     "desc": "A fal melletti és a belső hőmérők átlaga, a tárolóátlag és a be-/kilépő hőmérsékletek egy ábrán.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1730_felfutes_375_730/5_adatminoseg.webp",
     "title": "Adatminőség (QC-flag)",
     "desc": "Nyers és felhasznált adatsor hőmérőnként. Piros x: fizikailag lehetetlen, törölve (QC 4). Lila +: 20 K-nél jobban eltérő gyanús érték, törölve (QC 3). Narancs karika: gyanús, de megtartott érték (QC 1 tüske, QC 2 eltér a szomszédoktól).",
     "w": 1500,
     "h": 450,
     "wide": false
    },
    {
     "src": "img/1118_1730_felfutes_375_730/6_idosor_minden_homero.webp",
     "title": "Idősor – minden hőmérő",
     "desc": "A mérőprogram grafikonja: mind a 17 hőmérő, jobb tengelyen a hőáram (1 perces átlag).",
     "w": 1799,
     "h": 960,
     "wide": true
    },
    {
     "src": "img/1118_1730_felfutes_375_730/7_tarolo_sema.webp",
     "title": "Tároló séma – pillanatképek",
     "desc": "A mérőprogram tárolónézete. Kisütésnél a hidegfront rétegenkénti megérkezésének pillanataiban.",
     "w": 1867,
     "h": 871,
     "wide": true
    }
   ]
  },
  {
   "anim": {
    "src": "img/anim/1117_1441_felfutes_1500_1130.webp",
    "w": 880,
    "h": 458,
    "mb": "2,4",
    "speed": "395"
   },
   "id": "1117_1441_felfutes_1500_1130",
   "kind": "felfűtés",
   "label": "felfűtés, csőkígyó 1130 l/h",
   "short": "csőkígyó 1130 l/h",
   "chip": "1130 l/h",
   "note": "hibás késik a kazán",
   "when": "2026.11.17. 14:41",
   "excluded": [],
   "info": [
    {
     "k": "időtartam",
     "v": "119 perc"
    },
    {
     "k": "tároló átlag eleje → vége",
     "v": "14,8 → 71,9 °C"
    },
    {
     "k": "bevitt hő",
     "v": "17,5 kWh"
    }
   ],
   "figs": [
    {
     "src": "img/1117_1441_felfutes_1500_1130/1_fal.webp",
     "title": "Fal melletti hőmérők",
     "desc": "A 6 palást melletti (3 cm) hőmérő, rétegenként. Narancs karika: gyanús (QC-flag), de megtartott érték.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1441_felfutes_1500_1130/2_belso.webp",
     "title": "Belső hőmérők",
     "desc": "A 6 belső (30 cm) hőmérő, rétegenként.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1441_felfutes_1500_1130/3_retegatlag.webp",
     "title": "Rétegátlag",
     "desc": "Rétegenként a fal melletti és a belső hőmérő átlaga.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1441_felfutes_1500_1130/4_csoportatlagok.webp",
     "title": "Fal / belső / tároló átlag",
     "desc": "A fal melletti és a belső hőmérők átlaga, a tárolóátlag és a be-/kilépő hőmérsékletek egy ábrán.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1441_felfutes_1500_1130/6_idosor_minden_homero.webp",
     "title": "Idősor – minden hőmérő",
     "desc": "A mérőprogram grafikonja: mind a 17 hőmérő, jobb tengelyen a hőáram (1 perces átlag).",
     "w": 1808,
     "h": 960,
     "wide": true
    },
    {
     "src": "img/1117_1441_felfutes_1500_1130/7_tarolo_sema.webp",
     "title": "Tároló séma – pillanatképek",
     "desc": "A mérőprogram tárolónézete. Kisütésnél a hidegfront rétegenkénti megérkezésének pillanataiban.",
     "w": 1867,
     "h": 871,
     "wide": true
    }
   ]
  },
  {
   "anim": {
    "src": "img/anim/1118_1130_felfutes_1000_1530.webp",
    "w": 880,
    "h": 458,
    "mb": "2,3",
    "speed": "407"
   },
   "id": "1118_1130_felfutes_1000_1530",
   "kind": "felfűtés",
   "label": "felfűtés, csőkígyó 1530 l/h",
   "short": "csőkígyó 1530 l/h",
   "chip": "1530 l/h",
   "note": "T3 hibás",
   "when": "2026.11.18. 11:30",
   "excluded": [
    "T3"
   ],
   "info": [
    {
     "k": "időtartam",
     "v": "122 perc"
    },
    {
     "k": "tároló átlag eleje → vége",
     "v": "13,8 → 72,4 °C"
    },
    {
     "k": "bevitt hő",
     "v": "16,9 kWh"
    }
   ],
   "figs": [
    {
     "src": "img/1118_1130_felfutes_1000_1530/1_fal.webp",
     "title": "Fal melletti hőmérők",
     "desc": "A 6 palást melletti (3 cm) hőmérő, rétegenként. Narancs karika: gyanús (QC-flag), de megtartott érték.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1130_felfutes_1000_1530/2_belso.webp",
     "title": "Belső hőmérők",
     "desc": "A 6 belső (30 cm) hőmérő, rétegenként.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1130_felfutes_1000_1530/3_retegatlag.webp",
     "title": "Rétegátlag",
     "desc": "Rétegenként a fal melletti és a belső hőmérő átlaga.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1130_felfutes_1000_1530/4_csoportatlagok.webp",
     "title": "Fal / belső / tároló átlag",
     "desc": "A fal melletti és a belső hőmérők átlaga, a tárolóátlag és a be-/kilépő hőmérsékletek egy ábrán.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1130_felfutes_1000_1530/5_adatminoseg.webp",
     "title": "Adatminőség (QC-flag)",
     "desc": "Nyers és felhasznált adatsor hőmérőnként. Piros x: fizikailag lehetetlen, törölve (QC 4). Lila +: 20 K-nél jobban eltérő gyanús érték, törölve (QC 3). Narancs karika: gyanús, de megtartott érték (QC 1 tüske, QC 2 eltér a szomszédoktól).",
     "w": 1500,
     "h": 450,
     "wide": false
    },
    {
     "src": "img/1118_1130_felfutes_1000_1530/6_idosor_minden_homero.webp",
     "title": "Idősor – minden hőmérő",
     "desc": "A mérőprogram grafikonja: mind a 17 hőmérő, jobb tengelyen a hőáram (1 perces átlag).",
     "w": 1808,
     "h": 960,
     "wide": true
    },
    {
     "src": "img/1118_1130_felfutes_1000_1530/7_tarolo_sema.webp",
     "title": "Tároló séma – pillanatképek",
     "desc": "A mérőprogram tárolónézete. Kisütésnél a hidegfront rétegenkénti megérkezésének pillanataiban.",
     "w": 1867,
     "h": 871,
     "wide": true
    }
   ]
  },
  {
   "anim": {
    "src": "img/anim/1118_1437_felfutes_500_1930.webp",
    "w": 880,
    "h": 458,
    "mb": "2,4",
    "speed": "379"
   },
   "id": "1118_1437_felfutes_500_1930",
   "kind": "felfűtés",
   "label": "felfűtés, csőkígyó 1930 l/h",
   "short": "csőkígyó 1930 l/h",
   "chip": "1930 l/h",
   "note": "",
   "when": "2026.11.18. 14:37",
   "excluded": [],
   "info": [
    {
     "k": "időtartam",
     "v": "114 perc"
    },
    {
     "k": "tároló átlag eleje → vége",
     "v": "15,0 → 71,7 °C"
    },
    {
     "k": "bevitt hő",
     "v": "17,4 kWh"
    }
   ],
   "figs": [
    {
     "src": "img/1118_1437_felfutes_500_1930/1_fal.webp",
     "title": "Fal melletti hőmérők",
     "desc": "A 6 palást melletti (3 cm) hőmérő, rétegenként. Narancs karika: gyanús (QC-flag), de megtartott érték.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1437_felfutes_500_1930/2_belso.webp",
     "title": "Belső hőmérők",
     "desc": "A 6 belső (30 cm) hőmérő, rétegenként.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1437_felfutes_500_1930/3_retegatlag.webp",
     "title": "Rétegátlag",
     "desc": "Rétegenként a fal melletti és a belső hőmérő átlaga.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1437_felfutes_500_1930/4_csoportatlagok.webp",
     "title": "Fal / belső / tároló átlag",
     "desc": "A fal melletti és a belső hőmérők átlaga, a tárolóátlag és a be-/kilépő hőmérsékletek egy ábrán.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1437_felfutes_500_1930/5_adatminoseg.webp",
     "title": "Adatminőség (QC-flag)",
     "desc": "Nyers és felhasznált adatsor hőmérőnként. Piros x: fizikailag lehetetlen, törölve (QC 4). Lila +: 20 K-nél jobban eltérő gyanús érték, törölve (QC 3). Narancs karika: gyanús, de megtartott érték (QC 1 tüske, QC 2 eltér a szomszédoktól).",
     "w": 1500,
     "h": 450,
     "wide": false
    },
    {
     "src": "img/1118_1437_felfutes_500_1930/6_idosor_minden_homero.webp",
     "title": "Idősor – minden hőmérő",
     "desc": "A mérőprogram grafikonja: mind a 17 hőmérő, jobb tengelyen a hőáram (1 perces átlag).",
     "w": 1808,
     "h": 960,
     "wide": true
    },
    {
     "src": "img/1118_1437_felfutes_500_1930/7_tarolo_sema.webp",
     "title": "Tároló séma – pillanatképek",
     "desc": "A mérőprogram tárolónézete. Kisütésnél a hidegfront rétegenkénti megérkezésének pillanataiban.",
     "w": 1867,
     "h": 871,
     "wide": true
    }
   ]
  },
  {
   "anim": {
    "src": "img/anim/1118_1946_kisutes_375_730.webp",
    "w": 880,
    "h": 458,
    "mb": "2,3",
    "speed": "128"
   },
   "id": "1118_1946_kisutes_375_730",
   "kind": "kisütés",
   "label": "kisütés 375 l/h",
   "short": "375 l/h",
   "chip": "375 l/h",
   "note": "",
   "when": "2026.11.18. 19:46",
   "excluded": [],
   "info": [
    {
     "k": "időtartam",
     "v": "38 perc"
    },
    {
     "k": "tároló átlag eleje → vége",
     "v": "73,1 → 16,4 °C"
    },
    {
     "k": "kivett hő",
     "v": "12,9 kWh"
    }
   ],
   "figs": [
    {
     "src": "img/1118_1946_kisutes_375_730/1_fal.webp",
     "title": "Fal melletti hőmérők",
     "desc": "A 6 palást melletti (3 cm) hőmérő, rétegenként. Narancs karika: gyanús (QC-flag), de megtartott érték.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1946_kisutes_375_730/2_belso.webp",
     "title": "Belső hőmérők",
     "desc": "A 6 belső (30 cm) hőmérő, rétegenként.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1946_kisutes_375_730/3_retegatlag.webp",
     "title": "Rétegátlag",
     "desc": "Rétegenként a fal melletti és a belső hőmérő átlaga.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1946_kisutes_375_730/4_csoportatlagok.webp",
     "title": "Fal / belső / tároló átlag",
     "desc": "A fal melletti és a belső hőmérők átlaga, a tárolóátlag és a be-/kilépő hőmérsékletek egy ábrán.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1946_kisutes_375_730/5_adatminoseg.webp",
     "title": "Adatminőség (QC-flag)",
     "desc": "Nyers és felhasznált adatsor hőmérőnként. Piros x: fizikailag lehetetlen, törölve (QC 4). Lila +: 20 K-nél jobban eltérő gyanús érték, törölve (QC 3). Narancs karika: gyanús, de megtartott érték (QC 1 tüske, QC 2 eltér a szomszédoktól).",
     "w": 1500,
     "h": 795,
     "wide": false
    },
    {
     "src": "img/1118_1946_kisutes_375_730/6_idosor_minden_homero.webp",
     "title": "Idősor – minden hőmérő",
     "desc": "A mérőprogram grafikonja: mind a 17 hőmérő, jobb tengelyen a hőáram (1 perces átlag).",
     "w": 1771,
     "h": 960,
     "wide": true
    },
    {
     "src": "img/1118_1946_kisutes_375_730/7_tarolo_sema.webp",
     "title": "Tároló séma – pillanatképek",
     "desc": "A mérőprogram tárolónézete. Kisütésnél a hidegfront rétegenkénti megérkezésének pillanataiban.",
     "w": 2388,
     "h": 871,
     "wide": true
    }
   ]
  },
  {
   "anim": {
    "src": "img/anim/1118_1631_kisutes_500_1930.webp",
    "w": 880,
    "h": 458,
    "mb": "2,2",
    "speed": "153"
   },
   "id": "1118_1631_kisutes_500_1930",
   "kind": "kisütés",
   "label": "kisütés 500 l/h",
   "short": "500 l/h",
   "chip": "500 l/h",
   "note": "",
   "when": "2026.11.18. 16:31",
   "excluded": [],
   "info": [
    {
     "k": "időtartam",
     "v": "46 perc"
    },
    {
     "k": "tároló átlag eleje → vége",
     "v": "71,7 → 15,3 °C"
    },
    {
     "k": "kivett hő",
     "v": "14,7 kWh"
    }
   ],
   "figs": [
    {
     "src": "img/1118_1631_kisutes_500_1930/1_fal.webp",
     "title": "Fal melletti hőmérők",
     "desc": "A 6 palást melletti (3 cm) hőmérő, rétegenként. Narancs karika: gyanús (QC-flag), de megtartott érték.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1631_kisutes_500_1930/2_belso.webp",
     "title": "Belső hőmérők",
     "desc": "A 6 belső (30 cm) hőmérő, rétegenként.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1631_kisutes_500_1930/3_retegatlag.webp",
     "title": "Rétegátlag",
     "desc": "Rétegenként a fal melletti és a belső hőmérő átlaga.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1631_kisutes_500_1930/4_csoportatlagok.webp",
     "title": "Fal / belső / tároló átlag",
     "desc": "A fal melletti és a belső hőmérők átlaga, a tárolóátlag és a be-/kilépő hőmérsékletek egy ábrán.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1631_kisutes_500_1930/5_adatminoseg.webp",
     "title": "Adatminőség (QC-flag)",
     "desc": "Nyers és felhasznált adatsor hőmérőnként. Piros x: fizikailag lehetetlen, törölve (QC 4). Lila +: 20 K-nél jobban eltérő gyanús érték, törölve (QC 3). Narancs karika: gyanús, de megtartott érték (QC 1 tüske, QC 2 eltér a szomszédoktól).",
     "w": 1500,
     "h": 450,
     "wide": false
    },
    {
     "src": "img/1118_1631_kisutes_500_1930/6_idosor_minden_homero.webp",
     "title": "Idősor – minden hőmérő",
     "desc": "A mérőprogram grafikonja: mind a 17 hőmérő, jobb tengelyen a hőáram (1 perces átlag).",
     "w": 1771,
     "h": 960,
     "wide": true
    },
    {
     "src": "img/1118_1631_kisutes_500_1930/7_tarolo_sema.webp",
     "title": "Tároló séma – pillanatképek",
     "desc": "A mérőprogram tárolónézete. Kisütésnél a hidegfront rétegenkénti megérkezésének pillanataiban.",
     "w": 2388,
     "h": 871,
     "wide": true
    }
   ]
  },
  {
   "anim": {
    "src": "img/anim/1118_1334_kisutes_1000_1530.webp",
    "w": 880,
    "h": 458,
    "mb": "2,2",
    "speed": "103"
   },
   "id": "1118_1334_kisutes_1000_1530",
   "kind": "kisütés",
   "label": "kisütés 1000 l/h",
   "short": "1000 l/h",
   "chip": "1000 l/h",
   "note": "T3 hibás",
   "when": "2026.11.18. 13:34",
   "excluded": [
    "T3"
   ],
   "info": [
    {
     "k": "időtartam",
     "v": "31 perc"
    },
    {
     "k": "tároló átlag eleje → vége",
     "v": "72,4 → 14,3 °C"
    },
    {
     "k": "kivett hő",
     "v": "15,9 kWh"
    }
   ],
   "figs": [
    {
     "src": "img/1118_1334_kisutes_1000_1530/1_fal.webp",
     "title": "Fal melletti hőmérők",
     "desc": "A 6 palást melletti (3 cm) hőmérő, rétegenként. Narancs karika: gyanús (QC-flag), de megtartott érték.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1334_kisutes_1000_1530/2_belso.webp",
     "title": "Belső hőmérők",
     "desc": "A 6 belső (30 cm) hőmérő, rétegenként.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1334_kisutes_1000_1530/3_retegatlag.webp",
     "title": "Rétegátlag",
     "desc": "Rétegenként a fal melletti és a belső hőmérő átlaga.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1334_kisutes_1000_1530/4_csoportatlagok.webp",
     "title": "Fal / belső / tároló átlag",
     "desc": "A fal melletti és a belső hőmérők átlaga, a tárolóátlag és a be-/kilépő hőmérsékletek egy ábrán.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1118_1334_kisutes_1000_1530/5_adatminoseg.webp",
     "title": "Adatminőség (QC-flag)",
     "desc": "Nyers és felhasznált adatsor hőmérőnként. Piros x: fizikailag lehetetlen, törölve (QC 4). Lila +: 20 K-nél jobban eltérő gyanús érték, törölve (QC 3). Narancs karika: gyanús, de megtartott érték (QC 1 tüske, QC 2 eltér a szomszédoktól).",
     "w": 1500,
     "h": 795,
     "wide": false
    },
    {
     "src": "img/1118_1334_kisutes_1000_1530/6_idosor_minden_homero.webp",
     "title": "Idősor – minden hőmérő",
     "desc": "A mérőprogram grafikonja: mind a 17 hőmérő, jobb tengelyen a hőáram (1 perces átlag).",
     "w": 1771,
     "h": 960,
     "wide": true
    },
    {
     "src": "img/1118_1334_kisutes_1000_1530/7_tarolo_sema.webp",
     "title": "Tároló séma – pillanatképek",
     "desc": "A mérőprogram tárolónézete. Kisütésnél a hidegfront rétegenkénti megérkezésének pillanataiban.",
     "w": 2388,
     "h": 871,
     "wide": true
    }
   ]
  },
  {
   "anim": {
    "src": "img/anim/1117_1641_kisutes_1500_1130.webp",
    "w": 880,
    "h": 458,
    "mb": "2,2",
    "speed": "65"
   },
   "id": "1117_1641_kisutes_1500_1130",
   "kind": "kisütés",
   "label": "kisütés 1500 l/h",
   "short": "1500 l/h",
   "chip": "1500 l/h",
   "note": "",
   "when": "2026.11.17. 16:41",
   "excluded": [],
   "info": [
    {
     "k": "időtartam",
     "v": "20 perc"
    },
    {
     "k": "tároló átlag eleje → vége",
     "v": "72,1 → 15,1 °C"
    },
    {
     "k": "kivett hő",
     "v": "15,3 kWh"
    }
   ],
   "figs": [
    {
     "src": "img/1117_1641_kisutes_1500_1130/1_fal.webp",
     "title": "Fal melletti hőmérők",
     "desc": "A 6 palást melletti (3 cm) hőmérő, rétegenként. Narancs karika: gyanús (QC-flag), de megtartott érték.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1641_kisutes_1500_1130/2_belso.webp",
     "title": "Belső hőmérők",
     "desc": "A 6 belső (30 cm) hőmérő, rétegenként.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1641_kisutes_1500_1130/3_retegatlag.webp",
     "title": "Rétegátlag",
     "desc": "Rétegenként a fal melletti és a belső hőmérő átlaga.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1641_kisutes_1500_1130/4_csoportatlagok.webp",
     "title": "Fal / belső / tároló átlag",
     "desc": "A fal melletti és a belső hőmérők átlaga, a tárolóátlag és a be-/kilépő hőmérsékletek egy ábrán.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1641_kisutes_1500_1130/5_adatminoseg.webp",
     "title": "Adatminőség (QC-flag)",
     "desc": "Nyers és felhasznált adatsor hőmérőnként. Piros x: fizikailag lehetetlen, törölve (QC 4). Lila +: 20 K-nél jobban eltérő gyanús érték, törölve (QC 3). Narancs karika: gyanús, de megtartott érték (QC 1 tüske, QC 2 eltér a szomszédoktól).",
     "w": 1500,
     "h": 450,
     "wide": false
    },
    {
     "src": "img/1117_1641_kisutes_1500_1130/6_idosor_minden_homero.webp",
     "title": "Idősor – minden hőmérő",
     "desc": "A mérőprogram grafikonja: mind a 17 hőmérő, jobb tengelyen a hőáram (1 perces átlag).",
     "w": 1774,
     "h": 960,
     "wide": true
    },
    {
     "src": "img/1117_1641_kisutes_1500_1130/7_tarolo_sema.webp",
     "title": "Tároló séma – pillanatképek",
     "desc": "A mérőprogram tárolónézete. Kisütésnél a hidegfront rétegenkénti megérkezésének pillanataiban.",
     "w": 2388,
     "h": 871,
     "wide": true
    }
   ]
  },
  {
   "anim": {
    "src": "img/anim/1117_1359_kisutes_2000_730.webp",
    "w": 880,
    "h": 458,
    "mb": "2,2",
    "speed": "50"
   },
   "id": "1117_1359_kisutes_2000_730",
   "kind": "kisütés",
   "label": "kisütés 2000 l/h",
   "short": "2000 l/h",
   "chip": "2000 l/h",
   "note": "",
   "when": "2026.11.17. 13:59",
   "excluded": [],
   "info": [
    {
     "k": "időtartam",
     "v": "15 perc"
    },
    {
     "k": "tároló átlag eleje → vége",
     "v": "58,8 → 14,9 °C"
    },
    {
     "k": "kivett hő",
     "v": "11,7 kWh"
    }
   ],
   "figs": [
    {
     "src": "img/1117_1359_kisutes_2000_730/1_fal.webp",
     "title": "Fal melletti hőmérők",
     "desc": "A 6 palást melletti (3 cm) hőmérő, rétegenként. Narancs karika: gyanús (QC-flag), de megtartott érték.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1359_kisutes_2000_730/2_belso.webp",
     "title": "Belső hőmérők",
     "desc": "A 6 belső (30 cm) hőmérő, rétegenként.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1359_kisutes_2000_730/3_retegatlag.webp",
     "title": "Rétegátlag",
     "desc": "Rétegenként a fal melletti és a belső hőmérő átlaga.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1359_kisutes_2000_730/4_csoportatlagok.webp",
     "title": "Fal / belső / tároló átlag",
     "desc": "A fal melletti és a belső hőmérők átlaga, a tárolóátlag és a be-/kilépő hőmérsékletek egy ábrán.",
     "w": 1650,
     "h": 900,
     "wide": false
    },
    {
     "src": "img/1117_1359_kisutes_2000_730/6_idosor_minden_homero.webp",
     "title": "Idősor – minden hőmérő",
     "desc": "A mérőprogram grafikonja: mind a 17 hőmérő, jobb tengelyen a hőáram (1 perces átlag).",
     "w": 1774,
     "h": 960,
     "wide": true
    },
    {
     "src": "img/1117_1359_kisutes_2000_730/7_tarolo_sema.webp",
     "title": "Tároló séma – pillanatképek",
     "desc": "A mérőprogram tárolónézete. Kisütésnél a hidegfront rétegenkénti megérkezésének pillanataiban.",
     "w": 2388,
     "h": 871,
     "wide": true
    }
   ]
  }
 ],
 "methodHtml": "<h2>Mérőállomás (a mérőprogram alapján)</h2>\n<ul>\n<li>T0: alsó csonk (kisütésnél hideg belépő), T1–T6: belső (30 cm) hőmérők az 1.(alsó)–6.(felső) rétegben, T7–T12: fal melletti (3 cm) hőmérők ugyanazokban a rétegekben, T13: felső melegvíz-kilépő, T14/T15: csőkígyó belépő/kilépő, T16: környezet. Minden számítás a kalibrált (<code>_korr</code>) oszlopokból.</li>\n<li>Fájlnév: <code>Meres_&lt;dátum&gt;_&lt;idő&gt;_&lt;kisütési l/h&gt;_&lt;csőkígyós l/h&gt;_&lt;megjegyzés&gt;</code>.</li>\n<li>Tároló: 300 l, 6 egyenlő (50 l-es) réteggel számolva.</li>\n</ul>\n<h2>Adatminőség – mintánkénti QC-flag</h2>\n<p>Minden mérési pont (5 s) minden hőmérőjéhez minőségjelző tartozik. Csak a fizikailag lehetetlen érték törlődik,</p>\n<p>minden más anomália megmarad az adatsorban és a grafikonokon, csak meg van jelölve (narancs karika).</p>\n<ul>\n<li>0 – jó</li>\n<li>1 – gyanús, tüske (T1–T12): a 35 s-os mozgó mediántól &gt; 5 K eltérés, ami azonnal visszaugrik (a meredek, de monoton felfutás / hidegfront nem az) → megtartva</li>\n<li>2 – gyanús, eltér a környezetétől (T1–T12): legalább 30 s-ig &gt; 2 K-val a rétegtárs és a függőleges szomszédok által kijelölt sávon kívül (1. rétegben csak felső, 6.-ban csak alsó korlát) → megtartva</li>\n<li>3 – hibás, szélsőséges eltérés (T1–T12): a minta (akár rövid kilengés is) több mint 20 K-val kívül esik a rétegtárs és a függőleges szomszédok által kijelölt sávon → törölve</li>\n<li>4 – hibás, fizikailag lehetetlen: &lt; 0 °C vagy &gt; 100 °C (pl. −201,6 °C szenzorszakadás), vagy a tárolóban (T1–T13) hidegebb a leghidegebb belépő víznél (T0 min.) − 5 K, ill. melegebb a legmelegebb előremenőnél (T14 max.) + 5 K → törölve</li>\n<li>9 – kizárva, tudottan hibás hőmérő (mérés közben feljegyezve, fájlnévben „T3 hibás”): T3 a 11.18-i 1000/1530-as felfűtésből és kisütésből → törölve</li>\n</ul>\n<p>A gyanús (1/2) értékek az átlagokban is benne vannak. Interpoláció nincs: a törölt minta helyén a görbe megszakad.</p>\n<p>Részletek: <code>01_meresek/&lt;mérés&gt;/5_adatminoseg.png</code>, az Excel „Adatminőség (QC)” lapja és a mérésenkénti adatlapok „QC T0…T16” oszlopai.</p>\n<h2>Átlagok</h2>\n<ul>\n<li>Rétegátlag: az adott réteg fal melletti és belső hőmérőjének átlaga, (belső + fal)/2. Ha az egyik értéke az adott pillanatban extrémként törölve van, a réteg értéke abban a pillanatban a megmaradt hőmérő. Más rétegből vagy időben nincs interpoláció.</li>\n<li>Fal / belső átlag: az adott csoport érvényes hőmérőinek átlaga.</li>\n<li>Tároló átlag: a 6 rétegátlag átlaga.</li>\n</ul>\n<h2>Hőmennyiségek</h2>\n<ul>\n<li>Felfűtés: hőáram Q̇ = V̇_csőkígyó·ρ((T14+T15)/2)·cp·(T14 − T15) [kW], hőmennyiség Q = ∫Q̇ dt [kWh].</li>\n<li>A Q̇ 5 s-onként számolt; az ábrákon vastagon az 1 perces (12 mintás, középre igazított) mozgóátlag, halványan a nyers érték. A Q a nyers 5 s-os értékekből összegzett, a simítás nem befolyásolja.</li>\n<li>Kisütés: a csőkígyó nem üzemel (T14/T15 lassan hűl), ezért a kivett hőt mutatjuk: Q̇ = V̇_kisütés·ρ(T0)·cp·(T13 − T0).</li>\n</ul>\n<h2>Időállandó</h2>\n<ul>\n<li>Felfűtési idő: a tároló átlag 16 °C-ról 30, 40, 50, 60, 65, 70 °C-ra érésének ideje (közös kezdőpont).</li>\n<li>Exponenciális illesztés: T(t) = T∞ − (T∞ − T₀)·e^(−t/τ) (az első 3 perc nélkül); 3τ ≈ 95%-os felfűtés.</li>\n<li>Fizikai időállandó: m·cp·dT/dt = V̇ρcp·ε·(T14 − T), azaz dT/dt = (T14 − T)/τ, τ legkisebb négyzetes illesztéssel. Ez az előremenő hőmérséklet ingadozását (pl. késő kazán) is kiszűri.</li>\n<li>Csőkígyó hatásosság ε = (T14 − T15)/(T14 − T_tároló), UA = −V̇ρcp·ln(1 − ε), ill. UA = P/LMTD.</li>\n</ul>\n<h2>Kisütés jellemzők</h2>\n<ul>\n<li>V40/V45/V55: a kivett térfogat, amíg a T13 kilépő ≥ 40/45/55 °C.</li>\n<li>Kisütési hatásfok: a 40 °C-ig kivett hő / (300 l víz lehűtése a kezdeti átlagról a hideg víz hőmérsékletére).</li>\n<li>Hidegfront: az a kivett térfogat, amikor a réteg hőmérője átlépi a kezdeti és a hideg víz közti felezőt. Ideális dugattyúáramnál (keveredés nélkül) a k. réteg közepe (k − 0,5)·50 l-nél érné el.</li>\n</ul>"
};
