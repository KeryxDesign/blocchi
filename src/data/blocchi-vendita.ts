// Catalogo interno dei blocchi di vendita (S0-S13, ratifica #204): un elenco, un blocco per sezione.
// Usato da /it/blocchi/ (indice) e /it/blocchi/[id]/ (un blocco da solo, per le anteprime telefono e computer).
// I testi sono di esempio e tengono i tetti di parole dello scheletro: non sono copy approvato.
export interface Blocco {
  id: string;
  sezione: string;
  nome: string;
  componente: string;
  cosa: string;
  tetti: string;
  usatoIn: string;
}

export const BLOCCHI: Blocco[] = [
  { id: "apertura", sezione: "S1", nome: "Primo schermo", componente: "KxApertura", cosa: "Qualifica, H1, sottotitolo, un bottone, una immagine.", tetti: "qualifica 10 · H1 9 · sottotitolo 15 · bottone 5", usatoIn: "Libri" },
  { id: "modulo", sezione: "S1b", nome: "Il modulo", componente: "KxModulo", cosa: "Titolo, riga, mockup del PDF e campo email.", tetti: "titolo e riga brevi, 5 livelli di testo", usatoIn: "Libri" },
  { id: "problema", sezione: "S2", nome: "Il problema", componente: "KxProblema", cosa: "3-5 voci con icona; l'ultima nomina il costo.", tetti: "H2 10 · voce: titolo 6 + testo 15", usatoIn: "Libri" },
  { id: "meccanismo", sezione: "S3", nome: "Cosa cambia", componente: "KxMeccanismo", cosa: "Perché te e non un altro: colonne con la prova.", tetti: "H2 e lead brevi, colonne con titolo + testo", usatoIn: "Libri" },
  { id: "lavori", sezione: "S4", nome: "I lavori", componente: "KxLavori", cosa: "Lavori con didascalia e carosello di copertine in loop.", tetti: "H2 breve, didascalia breve", usatoIn: "Libri" },
  { id: "voci", sezione: "S5", nome: "Le voci", componente: "KxVoci", cosa: "3-10 testimonianze in nastro in loop, con foto, senza stelle.", tetti: "H2 8 · citazione 40 · ruolo 8", usatoIn: "Libri" },
  { id: "chi", sezione: "S6", nome: "Chi lo fa", componente: "KxChi", cosa: "Foto, testo breve, elenco di fatti.", tetti: "H2 breve, testo, fatti", usatoIn: "Libri" },
  { id: "cosa-ricevi", sezione: "S7", nome: "Cosa ricevi", componente: "KxCosaRicevi", cosa: "Due elenchi: cosa c'è e cosa non c'è.", tetti: "voci brevi, una riga ciascuna", usatoIn: "Libri" },
  { id: "passi", sezione: "S8", nome: "Come funziona", componente: "KxPassi", cosa: "Passi in sequenza con il quando.", tetti: "titolo, testo e quando per passo", usatoIn: "Libri" },
  { id: "prezzo", sezione: "S9", nome: "Prezzo", componente: "KxPrezzo", cosa: "Box prezzo con 2-3 card; unico posto di scadenza e timer.", tetti: "nome, perChi, elenco voci, prezzo e bottone in fondo", usatoIn: "Libri" },
  { id: "garanzia", sezione: "S10", nome: "Garanzia", componente: "KxGaranzia", cosa: "Titolo, testo e condizioni.", tetti: "titolo, testo, condizioni", usatoIn: "Libri" },
  { id: "faq", sezione: "S11", nome: "Domande frequenti", componente: "KxFaq", cosa: "Domande e risposte a fisarmonica.", tetti: "max 8 domande", usatoIn: "Libri" },
  { id: "chiusura", sezione: "S12", nome: "Chiusura", componente: "KxChiusura", cosa: "Titolo, condizioni, azione finale uguale al primo schermo.", tetti: "titolo, 3 condizioni, ps", usatoIn: "Libri" },
];
