# Sito di Pico Doc

Pagine statiche, senza passaggi di compilazione e senza risorse esterne (carattere e immagini sono qui).

- `index.html` + `testi.js`: pagina principale in 5 lingue (it, en, fr, de, es). I testi si cambiano in `testi.js`;
  l'italiano è anche scritto in `index.html` per chi non ha JavaScript.
- `privacy.html`, `elimina-account.html`: pagine richieste dagli store (italiano e inglese).
- Indirizzi degli store: oggetto `NEGOZI` in cima a `testi.js`. Finché sono vuoti i pulsanti dicono «In arrivo».
- `app-ads.txt` (richiesto da AdMob): da aggiungere nella radice quando si conosce il codice publisher,
  una riga `google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`.
- Le schermate dell'app sono disegnate in HTML e CSS (riproducono l'interfaccia vera): si possono sostituire con screenshot reali.
- Carattere: Bricolage Grotesque (licenza OFL, in `font/`).
