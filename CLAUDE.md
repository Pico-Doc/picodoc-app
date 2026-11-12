# Sito di Pico Doc — istruzioni di lavoro

Sito pubblico dell'app Pico Doc, pubblicato con GitHub Pages dal ramo `main`: **https://pico-doc.github.io/**
Il repository è pubblico: qui stanno solo le pagine del sito. Il codice dell'app è altrove, in un repository privato.

- Rispondere al proprietario in italiano, senza gergo tecnico.
- **Pico Doc è un prodotto a sé**: nessun riferimento ad altre attività del proprietario. Titolare: Guido Carenza;
  contatto pubblico: pico.doc.app@gmail.com.
- Pagine statiche, nessun passaggio di compilazione e **nessuna risorsa esterna** (niente font, script o statistiche
  caricati da altri siti; niente cookie): è una promessa di riservatezza del prodotto.
- Testi della pagina principale: `testi.js` (5 lingue: it, en, fr, de, es; stesse chiavi in tutte). L'italiano è scritto
  anche in `index.html` per chi non ha JavaScript: tenerli allineati.
- `privacy.html` ed `elimina-account.html` sono gli indirizzi dichiarati negli store: **non rinominarli né spostarli**.
- Indirizzi degli store: oggetto `NEGOZI` in cima a `testi.js` (vuoti = «In arrivo»).
- `app-ads.txt` (AdMob) va nella radice quando si conosce il codice publisher.
- Non usare i loghi ufficiali degli store né di altri marchi: pulsanti di solo testo.
- Dopo una modifica: `git push` su `main`; la pubblicazione richiede un paio di minuti.
