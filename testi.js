/* Pico Doc — testi del sito nelle cinque lingue e piccola logica della pagina.
   Indirizzi degli store: finché sono vuoti i pulsanti dicono «In arrivo». */
const NEGOZI = {
  play: '',    // es. https://play.google.com/store/apps/details?id=app.picodoc
  apple: '',   // es. https://apps.apple.com/app/idXXXXXXXXXX
};

const TESTI = {
  it: {
    categoria2: "Documenti e pratiche", visura: "Visura camerale", visura_peso: "3 pagine · 124 KB", f3_f: "Nessuna profilazione: gli annunci non sono personalizzati.",
    doc_titolo: "Pico Doc · Documenti scansionati in PDF leggerissimi",
    titolo_grande: "Documenti grandi così.", titolo_piccolo: "File piccoli così.",
    sommario: "Pico Doc scansiona carta d'identità, patente e pratiche e le trasforma in PDF di poche decine di KB. Restano sul tuo telefono, cifrati, e ti avvisa prima che scadano.",
    presto: "In arrivo su", scarica: "Scarica da",
    telefono_alt: "La schermata principale di Pico Doc: i documenti come carte sovrapposte",
    categoria: "Documenti d'identità", passaporto: "Passaporto", patente: "Patente di guida", carta: "Carta d'identità",
    carta_peso: "2 pagine · 86 KB", carta_scade: "Scade tra 12 giorni", scansiona: "Scansiona",
    peso_titolo: "La stessa carta d'identità, fronte e retro.", peso_foto: "Due foto del telefono", peso_pdf: "Il PDF di Pico Doc",
    peso_nota: "Un esempio tipico: il peso reale dipende dal documento. L'app te lo mostra dopo ogni scansione.",
    f1_titolo: "Inquadri, e il resto lo fa lui",
    f1_testo: "Pico Doc trova i bordi, raddrizza il foglio, lo mette nel verso giusto e ti avvisa se la foto è venuta mossa. Per i documenti a due facciate ti guida: prima il fronte, poi il retro.",
    f1_passo: "Passo 2 di 2", retro: "Retro",
    f2_titolo: "Ti avvisa prima che scada",
    f2_testo: "Legge la data di scadenza direttamente dal documento e ti manda un promemoria per tempo. Per la carta d'identità: 90, 30 e 7 giorni prima.",
    f2_avviso: "Carta d'identità scade tra 30 giorni", f2_tocca: "Tocca per vederla", f2_giorni: "giorni prima",
    f3_titolo: "Restano sul tuo telefono",
    f3_a: "Cifrati, con una chiave che non esce dal dispositivo.", f3_b: "Nessun account e nessuna registrazione per iniziare.",
    f3_c: "Niente screenshot e niente anteprime tra le app recenti.", f3_d: "Fuori dai backup automatici.",
    f3_e: "Un documento eliminato per sbaglio si recupera per 30 giorni.",
    f4_titolo: "Al tuo professionista, con un codice",
    f4_testo: "Se il tuo commercialista o un altro professionista usa un programma compatibile, inserisci il codice che ti dà e gli invii i documenti dall'app, senza email e senza chat. Decidi tu cosa mandare e quando. È un componente aggiuntivo a pagamento, una tantum.",
    f4_collega: "Collega",
    b1_t: "Gratis, con un solo banner", b1_d: "Nella schermata principale, mai accanto a un documento. Annunci non personalizzati. Si toglie per sempre con un acquisto una tantum.",
    b2_t: "Si condivide con tutto", b2_d: "Uno o più PDF verso email, messaggi o qualsiasi altra app.",
    b3_t: "Cinque lingue", b3_d: "Italiano, inglese, francese, tedesco e spagnolo: segue la lingua del telefono.",
    firma_a: "Ideata con", firma_b: "da Guido", privacy: "Privacy", elimina: "Eliminare l'account",
    mb: "4,2 MB",
  },
  en: {
    categoria2: "Documents and paperwork", visura: "Company register extract", visura_peso: "3 pages · 124 KB", f3_f: "No profiling: ads are not personalized.",
    doc_titolo: "Pico Doc · Documents scanned into tiny PDFs",
    titolo_grande: "Documents this big.", titolo_piccolo: "Files this small.",
    sommario: "Pico Doc scans your ID card, driving licence and paperwork into PDFs of a few dozen KB. They stay on your phone, encrypted, and you get a reminder before they expire.",
    presto: "Coming soon to", scarica: "Get it on",
    telefono_alt: "The Pico Doc home screen: documents as stacked cards",
    categoria: "Identity documents", passaporto: "Passport", patente: "Driving licence", carta: "Identity card",
    carta_peso: "2 pages · 86 KB", carta_scade: "Expires in 12 days", scansiona: "Scan",
    peso_titolo: "The same identity card, front and back.", peso_foto: "Two phone photos", peso_pdf: "The Pico Doc PDF",
    peso_nota: "A typical example: the real size depends on the document. The app shows it after every scan.",
    f1_titolo: "Point the camera, it does the rest",
    f1_testo: "Pico Doc finds the edges, straightens the page, turns it the right way up and tells you if the photo is blurry. For two-sided documents it guides you: front first, then back.",
    f1_passo: "Step 2 of 2", retro: "Back",
    f2_titolo: "A reminder before it expires",
    f2_testo: "It reads the expiry date straight from the document and reminds you in good time. For an identity card: 90, 30 and 7 days before.",
    f2_avviso: "Identity card expires in 30 days", f2_tocca: "Tap to view", f2_giorni: "days before",
    f3_titolo: "They stay on your phone",
    f3_a: "Encrypted, with a key that never leaves the device.", f3_b: "No account and no sign-up to get started.",
    f3_c: "No screenshots and no previews in recent apps.", f3_d: "Kept out of automatic backups.",
    f3_e: "A document deleted by mistake can be restored for 30 days.",
    f4_titolo: "To your accountant, with a code",
    f4_testo: "If your accountant or another professional uses compatible software, enter the code they give you and send documents from the app, with no email and no chat. You decide what to send and when. It is a paid add-on, bought once.",
    f4_collega: "Connect",
    b1_t: "Free, with a single banner", b1_d: "On the home screen, never next to a document. Non-personalized ads. Remove it for good with a one-time purchase.",
    b2_t: "Share with anything", b2_d: "One or more PDFs to email, messages or any other app.",
    b3_t: "Five languages", b3_d: "Italian, English, French, German and Spanish: it follows your phone's language.",
    firma_a: "Designed with", firma_b: "by Guido", privacy: "Privacy", elimina: "Delete your account",
    mb: "4.2 MB",
  },
  fr: {
    categoria2: "Documents et démarches", visura: "Extrait du registre", visura_peso: "3 pages · 124 Ko", f3_f: "Aucun profilage : les annonces ne sont pas personnalisées.",
    doc_titolo: "Pico Doc · Vos documents numérisés en PDF ultra-légers",
    titolo_grande: "Des documents grands comme ça.", titolo_piccolo: "Des fichiers petits comme ça.",
    sommario: "Pico Doc numérise carte d'identité, permis et papiers en PDF de quelques dizaines de Ko. Ils restent sur votre téléphone, chiffrés, et vous êtes prévenu avant leur expiration.",
    presto: "Bientôt sur", scarica: "Disponible sur",
    telefono_alt: "L'écran d'accueil de Pico Doc : les documents comme des cartes superposées",
    categoria: "Pièces d'identité", passaporto: "Passeport", patente: "Permis de conduire", carta: "Carte d'identité",
    carta_peso: "2 pages · 86 Ko", carta_scade: "Expire dans 12 jours", scansiona: "Numériser",
    peso_titolo: "La même carte d'identité, recto et verso.", peso_foto: "Deux photos du téléphone", peso_pdf: "Le PDF de Pico Doc",
    peso_nota: "Un exemple typique : le poids réel dépend du document. L'application l'affiche après chaque numérisation.",
    f1_titolo: "Vous cadrez, il s'occupe du reste",
    f1_testo: "Pico Doc trouve les bords, redresse la page, la remet dans le bon sens et vous prévient si la photo est floue. Pour les documents recto verso, il vous guide : d'abord le recto, puis le verso.",
    f1_passo: "Étape 2 sur 2", retro: "Verso",
    f2_titolo: "Prévenu avant l'expiration",
    f2_testo: "Il lit la date d'expiration directement sur le document et vous envoie un rappel à temps. Pour la carte d'identité : 90, 30 et 7 jours avant.",
    f2_avviso: "Carte d'identité expire dans 30 jours", f2_tocca: "Touchez pour l'afficher", f2_giorni: "jours avant",
    f3_titolo: "Ils restent sur votre téléphone",
    f3_a: "Chiffrés, avec une clé qui ne quitte pas l'appareil.", f3_b: "Aucun compte ni inscription pour commencer.",
    f3_c: "Pas de captures d'écran ni d'aperçus dans les applications récentes.", f3_d: "Exclus des sauvegardes automatiques.",
    f3_e: "Un document supprimé par erreur se restaure pendant 30 jours.",
    f4_titolo: "À votre comptable, avec un code",
    f4_testo: "Si votre comptable ou un autre professionnel utilise un logiciel compatible, saisissez le code qu'il vous donne et envoyez-lui vos documents depuis l'application, sans e-mail ni messagerie. Vous décidez quoi envoyer et quand. C'est un module payant, acheté une seule fois.",
    f4_collega: "Connecter",
    b1_t: "Gratuit, avec une seule bannière", b1_d: "Sur l'écran d'accueil, jamais à côté d'un document. Annonces non personnalisées. Un achat unique la retire définitivement.",
    b2_t: "Se partage partout", b2_d: "Un ou plusieurs PDF vers l'e-mail, les messages ou toute autre application.",
    b3_t: "Cinq langues", b3_d: "Italien, anglais, français, allemand et espagnol : selon la langue du téléphone.",
    firma_a: "Conçue avec", firma_b: "par Guido", privacy: "Confidentialité", elimina: "Supprimer le compte",
    mb: "4,2 Mo",
  },
  de: {
    categoria2: "Unterlagen und Formalitäten", visura: "Handelsregisterauszug", visura_peso: "3 Seiten · 124 KB", f3_f: "Kein Profiling: Die Anzeigen sind nicht personalisiert.",
    doc_titolo: "Pico Doc · Dokumente als winzige PDFs scannen",
    titolo_grande: "Dokumente, so groß.", titolo_piccolo: "Dateien, so klein.",
    sommario: "Pico Doc scannt Personalausweis, Führerschein und Unterlagen als PDFs mit wenigen Dutzend KB. Sie bleiben verschlüsselt auf deinem Telefon, und du wirst erinnert, bevor sie ablaufen.",
    presto: "Demnächst bei", scarica: "Jetzt bei",
    telefono_alt: "Der Startbildschirm von Pico Doc: Dokumente als gestapelte Karten",
    categoria: "Ausweisdokumente", passaporto: "Reisepass", patente: "Führerschein", carta: "Personalausweis",
    carta_peso: "2 Seiten · 86 KB", carta_scade: "Läuft in 12 Tagen ab", scansiona: "Scannen",
    peso_titolo: "Derselbe Personalausweis, Vorder- und Rückseite.", peso_foto: "Zwei Handyfotos", peso_pdf: "Das PDF von Pico Doc",
    peso_nota: "Ein typisches Beispiel: Die tatsächliche Größe hängt vom Dokument ab. Die App zeigt sie nach jedem Scan.",
    f1_titolo: "Du hältst drauf, den Rest macht die App",
    f1_testo: "Pico Doc findet die Ränder, begradigt die Seite, dreht sie richtig herum und sagt dir, wenn das Foto unscharf ist. Bei zweiseitigen Dokumenten führt es dich: erst die Vorderseite, dann die Rückseite.",
    f1_passo: "Schritt 2 von 2", retro: "Rückseite",
    f2_titolo: "Erinnerung vor dem Ablauf",
    f2_testo: "Es liest das Ablaufdatum direkt aus dem Dokument und erinnert dich rechtzeitig. Beim Personalausweis: 90, 30 und 7 Tage vorher.",
    f2_avviso: "Personalausweis läuft in 30 Tagen ab", f2_tocca: "Zum Ansehen tippen", f2_giorni: "Tage vorher",
    f3_titolo: "Sie bleiben auf deinem Telefon",
    f3_a: "Verschlüsselt, mit einem Schlüssel, der das Gerät nie verlässt.", f3_b: "Kein Konto und keine Registrierung zum Loslegen.",
    f3_c: "Keine Screenshots und keine Vorschau in den zuletzt verwendeten Apps.", f3_d: "Von automatischen Backups ausgeschlossen.",
    f3_e: "Ein versehentlich gelöschtes Dokument lässt sich 30 Tage lang wiederherstellen.",
    f4_titolo: "An deine Kanzlei, mit einem Code",
    f4_testo: "Wenn deine Steuerkanzlei oder ein anderer Dienstleister eine kompatible Software nutzt, gibst du den Code ein, den du bekommst, und sendest Dokumente direkt aus der App, ohne E-Mail und ohne Chat. Du entscheidest, was du wann sendest. Das ist eine kostenpflichtige Erweiterung, einmalig gekauft.",
    f4_collega: "Verbinden",
    b1_t: "Kostenlos, mit einem einzigen Banner", b1_d: "Auf dem Startbildschirm, nie neben einem Dokument. Nicht personalisierte Anzeigen. Mit einem Einmalkauf dauerhaft entfernbar.",
    b2_t: "Mit allem teilbar", b2_d: "Ein oder mehrere PDFs per E-Mail, Nachricht oder mit jeder anderen App.",
    b3_t: "Fünf Sprachen", b3_d: "Italienisch, Englisch, Französisch, Deutsch und Spanisch: Die App folgt der Sprache des Telefons.",
    firma_a: "Mit", firma_b: "entworfen von Guido", privacy: "Datenschutz", elimina: "Konto löschen",
    mb: "4,2 MB",
  },
  es: {
    categoria2: "Documentos y trámites", visura: "Extracto del registro", visura_peso: "3 páginas · 124 KB", f3_f: "Sin perfiles: los anuncios no son personalizados.",
    doc_titolo: "Pico Doc · Documentos escaneados en PDF ligerísimos",
    titolo_grande: "Documentos así de grandes.", titolo_piccolo: "Archivos así de pequeños.",
    sommario: "Pico Doc escanea tu documento de identidad, el permiso de conducir y tus papeles en PDF de unas decenas de KB. Se quedan en tu teléfono, cifrados, y te avisa antes de que caduquen.",
    presto: "Próximamente en", scarica: "Disponible en",
    telefono_alt: "La pantalla principal de Pico Doc: los documentos como tarjetas superpuestas",
    categoria: "Documentos de identidad", passaporto: "Pasaporte", patente: "Permiso de conducir", carta: "Documento de identidad",
    carta_peso: "2 páginas · 86 KB", carta_scade: "Caduca en 12 días", scansiona: "Escanear",
    peso_titolo: "El mismo documento de identidad, anverso y reverso.", peso_foto: "Dos fotos del teléfono", peso_pdf: "El PDF de Pico Doc",
    peso_nota: "Un ejemplo típico: el tamaño real depende del documento. La aplicación lo muestra después de cada escaneo.",
    f1_titolo: "Tú encuadras, él hace el resto",
    f1_testo: "Pico Doc encuentra los bordes, endereza la hoja, la pone en la orientación correcta y te avisa si la foto ha salido movida. En los documentos a dos caras te guía: primero el anverso, luego el reverso.",
    f1_passo: "Paso 2 de 2", retro: "Reverso",
    f2_titolo: "Te avisa antes de que caduque",
    f2_testo: "Lee la fecha de caducidad directamente del documento y te envía un recordatorio con tiempo. Para el documento de identidad: 90, 30 y 7 días antes.",
    f2_avviso: "Documento de identidad caduca en 30 días", f2_tocca: "Toca para verlo", f2_giorni: "días antes",
    f3_titolo: "Se quedan en tu teléfono",
    f3_a: "Cifrados, con una clave que no sale del dispositivo.", f3_b: "Sin cuenta y sin registro para empezar.",
    f3_c: "Sin capturas de pantalla ni vistas previas en las aplicaciones recientes.", f3_d: "Fuera de las copias de seguridad automáticas.",
    f3_e: "Un documento borrado por error se recupera durante 30 días.",
    f4_titolo: "A tu asesor, con un código",
    f4_testo: "Si tu asesor u otro profesional usa un programa compatible, introduce el código que te dé y envíale los documentos desde la aplicación, sin correo y sin chat. Tú decides qué enviar y cuándo. Es un complemento de pago, de compra única.",
    f4_collega: "Conectar",
    b1_t: "Gratis, con un solo banner", b1_d: "En la pantalla principal, nunca junto a un documento. Anuncios no personalizados. Se quita para siempre con una compra única.",
    b2_t: "Se comparte con todo", b2_d: "Uno o varios PDF por correo, mensajes o cualquier otra aplicación.",
    b3_t: "Cinco idiomas", b3_d: "Italiano, inglés, francés, alemán y español: sigue el idioma del teléfono.",
    firma_a: "Diseñada con", firma_b: "por Guido", privacy: "Privacidad", elimina: "Eliminar la cuenta",
    mb: "4,2 MB",
  },
};

(function () {
  const ricorda = { leggi() { try { return localStorage.getItem('lingua'); } catch (e) { return null; } }, scrivi(l) { try { localStorage.setItem('lingua', l); } catch (e) { /* senza memoria va bene lo stesso */ } } };
  const chiesta = new URLSearchParams(location.search).get('lang');
  const delBrowser = (navigator.languages || [navigator.language || 'it']).map(l => l.slice(0, 2)).find(l => TESTI[l]);
  let lingua = [chiesta, ricorda.leggi(), delBrowser, 'en'].find(l => l && TESTI[l]);

  function applica() {
    const t = TESTI[lingua];
    document.documentElement.lang = lingua;
    document.title = t.doc_titolo;
    document.querySelectorAll('[data-t]').forEach(el => { const v = t[el.dataset.t]; if (v) el.textContent = v; });
    document.querySelectorAll('[data-t-aria]').forEach(el => { const v = t[el.dataset.tAria]; if (v) el.setAttribute('aria-label', v); });
    const foto = document.querySelector('.riga-peso.foto .quanto'); if (foto) foto.textContent = t.mb;
    const pdf = document.querySelector('.riga-peso.pdf .quanto'); if (pdf) pdf.textContent = lingua === 'fr' ? '86 Ko' : '86 KB';
    for (const [id, indirizzo] of Object.entries(NEGOZI)) {
      const a = document.getElementById(id); if (!a) continue;
      if (indirizzo) { a.href = indirizzo; a.removeAttribute('aria-disabled'); a.querySelector('small').textContent = t.scarica; }
    }
    const scelta = document.getElementById('lingua'); if (scelta) scelta.value = lingua;
  }
  applica();
  const scelta = document.getElementById('lingua');
  if (scelta) scelta.addEventListener('change', () => { lingua = scelta.value; ricorda.scrivi(lingua); applica(); });

  // L'unica animazione della pagina parte quando il confronto dei pesi entra nello schermo.
  const peso = document.getElementById('peso');
  if (peso) {
    if ('IntersectionObserver' in window) {
      const o = new IntersectionObserver(v => { if (v.some(x => x.isIntersecting)) { peso.classList.add('in-vista'); o.disconnect(); } }, { threshold: 0.5 });
      o.observe(peso);
    } else peso.classList.add('in-vista');
  }
})();
