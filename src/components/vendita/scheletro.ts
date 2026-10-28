// Scheletro fisso della pagina di vendita Keryx (ratifica #204, 28/10/2026).
// Fonte unica dei tetti: Arcadio — Sistema/_CORE/criteri/scheletro_pagina_vendita.md.
// Un box oltre il tetto si accorcia nel copy (MUSE), mai allargando il box.
// TARATURA (#204, punto 1): finché i tetti non sono confermati sulla pagina libri, uno sforamento
// di parole avvisa durante la build invece di fermarla; il dato serve a tarare. Box obbligatori
// vuoti e numero di voci fuori misura fermano la build già adesso.
export const TETTI_RIGIDI = false;

const SENZA_TAG = /<[^>]+>/g;

export function parole(testo = ""): number {
  return testo.replace(SENZA_TAG, " ").trim().split(/\s+/).filter(Boolean).length;
}

export function tetto(sezione: string, box: string, testo: string | undefined, max: number, obbligatorio = true): void {
  if (!testo || !testo.trim()) {
    if (obbligatorio) throw new Error(`[scheletro #204] ${sezione} · ${box}: box obbligatorio vuoto.`);
    return;
  }
  const n = parole(testo);
  if (n > max) {
    const msg = `[scheletro #204] ${sezione} · ${box}: ${n} parole, tetto ${max}. Si accorcia il copy (MUSE), non il box.`;
    if (TETTI_RIGIDI) throw new Error(msg);
    console.warn(msg);
  }
}

export function quante<T>(sezione: string, box: string, voci: T[] | undefined, min: number, max: number): T[] {
  const n = voci?.length ?? 0;
  if (n < min || n > max) {
    throw new Error(`[scheletro #204] ${sezione} · ${box}: ${n} voci, ammesse da ${min} a ${max}.`);
  }
  return voci as T[];
}

/** Fondi ammessi (#198, sistema_gerarchia_home §3.6). Nessun altro colore entra da fuori. */
export type Fondo = "bianco" | "marmo" | "crema" | "grigio" | "navy" | "notte";

export interface Azione {
  testo: string;
  href: string;
}
