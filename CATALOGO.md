# Catalogo della libreria delle sezioni Keryx

Generato da `src/data/catalogo.json` (fonte unica) con `npm run catalogo`. Pagina: https://keryxdesign.github.io/blocchi/

Come si usa (skill /web): 1) per ogni sezione dello scheletro #204 scegli il TIPO (A, numero) che serve; 2) prendi un blocco di quel tipo, preferendo KX (già col tema Keryx), poi HU (markup HTML+Tailwind pronto), poi AW (struttura Astro con props); 3) scegli il FORMATO (B) alternandolo con la sezione prima. Un tipo senza blocchi = da costruire, e il blocco nuovo si aggiunge a catalogo.json.

Codici: KX-… nostro (src/components/vendita nel sito), HU-… HyperUI MIT, AW-… AstroWind MIT. Ogni blocco ha `sorgente` e `anteprima` in catalogo.json.

## A1 · Navigazione e cornice

- **1. Announcement bar** (Barra di annuncio): una riga in cima per un'offerta, una scadenza o una novità. → HU-announcements-1, HU-announcements-2, HU-announcements-3, HU-announcements-4, HU-announcements-5, HU-announcements-6, HU-banners-1, HU-banners-2, HU-banners-3, AW-Announcement
- **2. Header / Navbar** (Testata): logo e menu; nelle landing spesso solo logo, per non far uscire. → HU-headers-1, HU-headers-2, HU-headers-3, HU-headers-4, AW-Header
- **3. Sticky header** (Testata fissa): resta in alto mentre si scorre, con il bottone sempre visibile. → _nessun blocco: da costruire_
- **4. Breadcrumb** (Briciole di pane): dice dove sei nel sito (pagine interne, non landing). → _nessun blocco: da costruire_
- **5. Footer** (Piede): link, dati legali, contatti; ultima occasione per agire. → HU-footers-1, HU-footers-2, HU-footers-3, HU-footers-4, HU-footers-5, HU-footers-6, HU-footers-7, HU-footers-8, HU-footers-9, HU-footers-10, HU-footers-11, HU-footers-12, AW-Footer
- **6. Copyright / Legal bar** (Riga legale): diritti, privacy, cookie, P.IVA. → _nessun blocco: da costruire_
- **7. Cookie banner** (Banner dei cookie): consenso, obbligatorio per legge. → _nessun blocco: da costruire_

## A2 · Apertura (above the fold)

- **8. Above the fold** (Primo schermo): tutto ciò che si vede senza scorrere; deve dire cosa, per chi, e cosa fare. → KX-apertura
- **9. Hero** (Sezione d'apertura): titolo, sottotitolo, bottone, immagine: la promessa principale. → KX-apertura, HU-sections-1, HU-sections-2, HU-sections-3, HU-sections-4, AW-Hero, AW-Hero2, AW-HeroText
- **10. Value proposition** (Proposta di valore): la frase che dice perché scegliere te, spesso sotto l'hero. → _nessun blocco: da costruire_
- **11. Pre-headline / Eyebrow** (Occhiello o qualifica): riga piccola sopra il titolo che seleziona il lettore. → _nessun blocco: da costruire_
- **12. VSL hero** (Primo schermo con video): un video di vendita al posto dell'immagine. → _nessun blocco: da costruire_
- **13. Lead capture / Opt-in** (Modulo di cattura): email in cambio di qualcosa (PDF, guida). → KX-modulo
- **14. Trust bar** (Barra di fiducia): subito sotto l'hero: loghi, stelle, «oltre 100 clienti». → _nessun blocco: da costruire_

## A3 · Fiducia e prova (social proof, trust signals)

- **15. Logo cloud / Logo wall** (Fila di loghi): clienti o media noti, per dire «altri si fidano». → HU-logo-clouds-1, HU-logo-clouds-2, HU-logo-clouds-3, HU-logo-clouds-4, AW-Brands
- **16. Testimonials** (Testimonianze): citazioni di clienti con nome, ruolo, foto. → KX-voci, HU-testimonials-1, HU-testimonials-2, HU-testimonials-3, AW-Testimonials
- **17. Video testimonials** (Testimonianze video): clienti che parlano in camera. → _nessun blocco: da costruire_
- **18. Reviews / Ratings** (Recensioni con punteggio): stelle e numero di recensioni (Google, Trustpilot). → _nessun blocco: da costruire_
- **19. Featured quote** (Citazione grande): una sola testimonianza forte, a tutta larghezza. → AW-Quote
- **20. Stats / Numbers** (Numeri chiave): 3-4 cifre grandi (anni, clienti, libri). → HU-stats-1, HU-stats-2, HU-stats-3, AW-SocialProof, AW-Stats
- **21. Case study** (Caso studio): un cliente, il problema, cosa hai fatto, il risultato. → _nessun blocco: da costruire_
- **22. Before / After** (Prima e dopo): due stati a confronto. → _nessun blocco: da costruire_
- **23. Portfolio / Gallery** (Lavori / galleria): esempi del lavoro. → KX-lavori, AW-Gallery, AW-Projects
- **24. As seen in / Press** (Visto su / stampa): articoli e media. → _nessun blocco: da costruire_
- **25. Awards / Certifications / Badges** (Premi, certificazioni, bollini): riconoscimenti e sicurezza (pagamenti, GDPR). → _nessun blocco: da costruire_
- **26. Trust signals** (Segnali di fiducia): insieme di garanzie, bollini, pagamenti sicuri vicino al bottone. → _nessun blocco: da costruire_

## A4 · Problema e soluzione

- **27. Problem / Pain points** (Problema): i dolori del lettore, per farlo riconoscere. → KX-problema
- **28. Agitation** (Agitazione): cosa succede se non risolve (tipico della risposta diretta). → _nessun blocco: da costruire_
- **29. Solution / Introduction** (Soluzione): presenta l'offerta come risposta al problema. → AW-Content
- **30. Unique mechanism** (Meccanismo unico): perché funziona in modo diverso dagli altri. → KX-meccanismo
- **31. Who it's for / not for** (Per chi è / per chi non è): seleziona il lettore e riduce i clienti sbagliati. → _nessun blocco: da costruire_
- **32. Use cases** (Casi d'uso): situazioni concrete in cui serve. → _nessun blocco: da costruire_

## A5 · Vantaggi e prodotto

- **33. Features** (Caratteristiche): cosa c'è dentro. → HU-cards-1, HU-cards-2, HU-cards-3, HU-cards-4, HU-cards-5, HU-cards-6, HU-cards-7, HU-cards-8, HU-cards-9, HU-feature-grids-1, HU-feature-grids-2, HU-feature-grids-3, HU-feature-grids-4, AW-Features, AW-Features3, AW-FeatureTabs, AW-Bento
- **34. Benefits** (Benefici): cosa ottieni (il risultato, non la caratteristica). → HU-feature-grids-1, HU-feature-grids-2, HU-feature-grids-3, HU-feature-grids-4, AW-Features2
- **35. Why choose us** (Perché noi): ragioni per scegliere te sugli altri. → KX-meccanismo
- **36. Services** (Servizi): cosa offri, ciascuno con il suo beneficio. → _nessun blocco: da costruire_
- **37. Product details / Specs** (Dettagli e specifiche): misure, formati, tempi. → _nessun blocco: da costruire_
- **38. Comparison** (Confronto): tu contro gli altri (o contro il fai-da-te). → AW-Comparison
- **39. Integrations** (Integrazioni / strumenti): programmi e piattaforme con cui lavori. → AW-Integrations
- **40. Demo / Interactive preview** (Anteprima interattiva): prova o sfoglia prima di comprare. → _nessun blocco: da costruire_
- **41. Video section** (Sezione video): spiega o mostra in movimento. → AW-Video

## A6 · Offerta e processo

- **42. What's included / Deliverables** (Cosa ricevi): elenco preciso di ciò che arriva. → KX-cosa-ricevi
- **43. What's not included** (Cosa non c'è): il confine dell'offerta. → KX-cosa-ricevi
- **44. How it works / Process** (Come funziona): i passi, dal primo contatto alla consegna. → KX-passi, AW-Steps, AW-Steps2, AW-QuickStart
- **45. Timeline** (Linea del tempo): date e durata. → AW-Timeline
- **46. Bonuses** (Bonus): extra compresi. → _nessun blocco: da costruire_
- **47. Pricing** (Prezzi): pacchetti a card con prezzo e bottone. → KX-prezzo, HU-pricing-1, HU-pricing-2, AW-Pricing
- **48. Pricing table / Feature matrix** (Tabella dei prezzi): pacchetti × voci, per confrontarli. → _nessun blocco: da costruire_
- **49. Payment plans** (Piani di pagamento): rate e modalità. → _nessun blocco: da costruire_
- **50. Calculator / ROI** (Calcolatore): quanto costa o rende, con i numeri del lettore. → _nessun blocco: da costruire_
- **51. Urgency / Countdown** (Urgenza / conto alla rovescia): scadenza o posti rimasti. → KX-prezzo, AW-Countdown
- **52. Scarcity / Availability** (Disponibilità): posti liberi, prossimo slot. → _nessun blocco: da costruire_
- **53. Order form / Checkout** (Modulo d'ordine): pagamento in pagina. → _nessun blocco: da costruire_
- **54. Order bump / Upsell** (Aggiunta all'ordine): un extra offerto al momento dell'acquisto. → _nessun blocco: da costruire_

## A7 · Rassicurazione e obiezioni

- **55. Guarantee / Risk reversal** (Garanzia): toglie il rischio a chi compra. → KX-garanzia
- **56. FAQ** (Domande frequenti): risponde ai dubbi prima che il lettore se ne vada. → KX-faq, HU-faqs-1, HU-faqs-2, HU-faqs-3, AW-FAQs
- **57. Objection handling** (Obiezioni e risposte): le 3-4 paure principali, una per una. → _nessun blocco: da costruire_
- **58. About / Founder story** (Chi sono / storia del fondatore): la persona dietro l'offerta. → KX-chi
- **59. Team** (Squadra): chi ci lavora. → HU-team-sections-1, HU-team-sections-2, HU-team-sections-3, AW-Team
- **60. Values / Mission** (Valori / missione): in cosa credi. → _nessun blocco: da costruire_

## A8 · Azione e chiusura

- **61. CTA section / CTA banner** (Sezione di invito all'azione): un titolo e un bottone, ripetuta durante la pagina. → HU-ctas-1, HU-ctas-2, HU-ctas-3, HU-ctas-4, AW-CallToAction, AW-Note
- **62. Final CTA / Closing** (Chiusura): riepilogo e ultima chiamata. → KX-chiusura
- **63. P.S.** (Poscritto): riga finale che riprende il motivo principale. → _nessun blocco: da costruire_
- **64. Sticky CTA bar** (Barra fissa col bottone): in basso sul telefono, sempre visibile. → AW-StickyCTA
- **65. Contact** (Contatti): modulo, email, telefono, WhatsApp. → HU-contact-forms-1, HU-contact-forms-2, HU-contact-forms-3, HU-contact-forms-4, HU-contact-forms-5, AW-Contact
- **66. Floating chat / WhatsApp button** (Bottone chat galleggiante): domanda veloce senza modulo. → _nessun blocco: da costruire_
- **67. Exit-intent popup** (Finestra all'uscita): ultima offerta quando si sta per lasciare la pagina. → _nessun blocco: da costruire_
- **68. Newsletter signup** (Iscrizione newsletter): per chi non è pronto a comprare. → HU-newsletter-signup-1, HU-newsletter-signup-2, AW-Newsletter
- **69. Booking / Calendar** (Prenotazione): scegli l'orario di una call. → _nessun blocco: da costruire_

## A9 · Contenuto e risorse (più da sito che da landing)

- **70. Blog / Latest posts** (Articoli): ultimi contenuti. → HU-blog-cards-1, HU-blog-cards-2, HU-blog-cards-3, HU-blog-cards-4, HU-blog-cards-5, HU-blog-cards-6, HU-blog-cards-7, AW-BlogHighlightedPosts, AW-BlogLatestPosts
- **71. Resources / Downloads** (Risorse da scaricare): guide, PDF. → _nessun blocco: da costruire_
- **72. Events / Webinar** (Eventi): prossime date e iscrizione. → _nessun blocco: da costruire_
- **73. Location / Map** (Sede e mappa): dove sei, orari. → _nessun blocco: da costruire_
- **74. Careers** (Lavora con noi): posizioni aperte. → _nessun blocco: da costruire_
- **75. Changelog / News** (Novità): aggiornamenti. → _nessun blocco: da costruire_
- **76. Thank-you page** (Pagina di ringraziamento): cosa succede dopo l'invio. → _nessun blocco: da costruire_

## B · Formati di layout

- **77. Image + text / Split** (Immagine e testo): metà immagine, metà testo, affiancati. → KX-apertura, KX-modulo, KX-chi, HU-ctas-1, HU-ctas-3, HU-ctas-4, HU-product-collections-1, HU-product-collections-2, HU-product-collections-3, HU-product-collections-4, HU-sections-1, HU-testimonials-2, AW-Hero, AW-Features3, AW-Steps2
- **78. Alternating / Zig-zag** (Alternati): righe immagine-testo che si invertono a ogni riga. → AW-Content
- **79. Centered / Single column** (Colonna centrata): testo al centro, per frasi forti o lettere. → KX-garanzia, KX-chiusura, HU-buttons-1, HU-buttons-2, HU-buttons-3, HU-buttons-4, HU-buttons-5, HU-carts-1, HU-carts-2, HU-carts-3, HU-ctas-2, HU-empty-content-1, HU-empty-content-2, HU-empty-content-3, HU-empty-content-4, HU-empty-content-5, HU-polls-1, HU-polls-2, HU-polls-3, HU-product-cards-1, HU-product-cards-2, HU-product-cards-3, HU-product-cards-4, HU-product-cards-5, HU-product-cards-6, HU-product-cards-7, HU-product-cards-8, HU-sections-2, HU-sections-3, HU-sections-4, AW-Hero2, AW-HeroText
- **80. Icon list / Bullet points with icons** (Elenco con icone): voci brevi con un'icona o una spunta. → KX-problema, HU-feature-grids-1, HU-feature-grids-2, HU-feature-grids-3, HU-feature-grids-4, AW-Features2
- **81. Feature grid / Card grid** (Griglia di card): 3-6 riquadri uguali. → KX-lavori, KX-prezzo, HU-blog-cards-1, HU-blog-cards-2, HU-blog-cards-3, HU-blog-cards-4, HU-blog-cards-5, HU-blog-cards-6, HU-blog-cards-7, HU-cards-1, HU-cards-2, HU-cards-3, HU-cards-4, HU-cards-5, HU-cards-6, HU-cards-7, HU-cards-8, HU-cards-9, HU-feature-grids-1, HU-feature-grids-2, HU-feature-grids-3, HU-feature-grids-4, HU-pricing-1, HU-pricing-2, HU-team-sections-1, HU-team-sections-2, HU-team-sections-3, AW-Features, AW-Projects, AW-Testimonials, AW-Integrations, AW-Team, AW-Pricing, AW-BlogHighlightedPosts, AW-BlogLatestPosts
- **82. Columns (2-3-4)** (Colonne): contenuti affiancati della stessa importanza. → KX-meccanismo, HU-footers-1, HU-footers-2, HU-footers-3, HU-footers-4, HU-footers-5, HU-footers-6, HU-footers-7, HU-footers-8, HU-footers-9, HU-footers-10, HU-footers-11, HU-footers-12, HU-logo-clouds-1, HU-logo-clouds-2, HU-logo-clouds-3, HU-logo-clouds-4, AW-Footer, AW-Brands
- **83. Bento grid** (Griglia bento): riquadri di misure diverse. → AW-Bento
- **84. Carousel / Slider / Marquee** (Carosello / nastro): scorre, orizzontale o in loop. → KX-lavori, KX-voci
- **85. Tabs** (Schede): contenuti alternativi sotto linguette. → AW-FeatureTabs
- **86. Accordion** (Fisarmonica): domande che si aprono (FAQ). → KX-faq, HU-faqs-1, HU-faqs-2, HU-faqs-3, AW-FAQs
- **87. Table** (Tabella): righe e colonne di confronto. → AW-Comparison
- **88. Steps / Numbered list** (Passi numerati): 1-2-3 in fila o in colonna. → KX-passi, AW-Steps, AW-QuickStart
- **89. Timeline (vertical)** (Linea del tempo verticale): passi lungo una linea. → AW-Timeline
- **90. Stats row** (Riga di numeri): cifre grandi affiancate. → HU-stats-1, HU-stats-2, HU-stats-3, AW-SocialProof, AW-Stats
- **91. Masonry gallery** (Galleria a mattoni): immagini di altezze diverse. → AW-Gallery
- **92. Full-bleed / Background image** (A tutta larghezza / con immagine di fondo): sezione d'impatto. → AW-Video
- **93. Banner / Strip** (Fascia): sezione bassa e larga con una frase e un bottone. → HU-announcements-1, HU-announcements-2, HU-announcements-3, HU-announcements-4, HU-announcements-5, HU-announcements-6, AW-Announcement, AW-Countdown, AW-CallToAction, AW-Note
- **94. Sticky scroll / Scrollytelling** (Scorrimento con elemento fisso): un'immagine resta ferma mentre il testo scorre. → _nessun blocco: da costruire_
- **95. Long-form letter** (Lettera lunga): testo continuo con sottotitoli (sales letter). → _nessun blocco: da costruire_
- **96. Checklist** (Lista di spunte): cosa c'è dentro, punto per punto. → KX-cosa-ricevi
- **97. Quote block** (Blocco citazione): testo grande tra virgolette. → HU-testimonials-1, HU-testimonials-3, AW-Quote
- **98. Modal / Popup** (Finestra sopra la pagina): contenuto che si apre sopra la pagina (offerta, modulo, video). → _nessun blocco: da costruire_
- **99. Sticky bar (top/bottom)** (Barra fissa): sempre visibile, in alto o in basso. → HU-banners-1, HU-banners-2, HU-banners-3, AW-StickyCTA
- **100. Form (inline / card / multi-step)** (Modulo): in riga, in un riquadro o a più passaggi. → KX-modulo, HU-contact-forms-1, HU-contact-forms-2, HU-contact-forms-3, HU-contact-forms-4, HU-contact-forms-5, HU-newsletter-signup-1, HU-newsletter-signup-2, AW-Contact, AW-Newsletter

## Fuori dalle pagine di vendita

HU-buttons-1, HU-buttons-2, HU-buttons-3, HU-buttons-4, HU-buttons-5, HU-carts-1, HU-carts-2, HU-carts-3, HU-empty-content-1, HU-empty-content-2, HU-empty-content-3, HU-empty-content-4, HU-empty-content-5, HU-polls-1, HU-polls-2, HU-polls-3, HU-product-cards-1, HU-product-cards-2, HU-product-cards-3, HU-product-cards-4, HU-product-cards-5, HU-product-cards-6, HU-product-cards-7, HU-product-cards-8, HU-product-collections-1, HU-product-collections-2, HU-product-collections-3, HU-product-collections-4
