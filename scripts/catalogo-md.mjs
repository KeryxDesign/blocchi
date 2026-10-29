// Rigenera CATALOGO.md (letto dalla skill /web) da src/data/catalogo.json, la fonte unica. Uso: npm run catalogo
import { readFileSync, writeFileSync } from "node:fs";
const { categorie, tipi, blocchi } = JSON.parse(readFileSync("src/data/catalogo.json", "utf8"));
const L = [
  "# Catalogo della libreria delle sezioni Keryx", "",
  "Generato da `src/data/catalogo.json` (fonte unica) con `npm run catalogo`. Pagina: https://keryxdesign.github.io/blocchi/", "",
  "Come si usa (skill /web): 1) per ogni sezione dello scheletro #204 scegli il TIPO (A, numero) che serve; 2) prendi un blocco di quel tipo, preferendo KX (già col tema Keryx), poi HU (markup HTML+Tailwind pronto), poi AW (struttura Astro con props); 3) scegli il FORMATO (B) alternandolo con la sezione prima. Un tipo senza blocchi = da costruire, e il blocco nuovo si aggiunge a catalogo.json.", "",
  "Codici: KX-… nostro (src/components/vendita nel sito), HU-… HyperUI MIT, AW-… AstroWind MIT. Ogni blocco ha `sorgente` e `anteprima` in catalogo.json.", "",
];
for (const c of categorie) {
  L.push(`## ${c.id} · ${c.nome}`, "");
  const chiave = c.id === "B" ? "formati" : "funzioni";
  for (const t of tipi.filter((t) => t.cat === c.id)) {
    const bl = blocchi.filter((b) => b[chiave].includes(t.n)).map((b) => b.codice);
    L.push(`- **${t.n}. ${t.en}** (${t.it}): ${t.funzione} → ${bl.length ? bl.join(", ") : "_nessun blocco: da costruire_"}`);
  }
  L.push("");
}
L.push("## Fuori dalle pagine di vendita", "", blocchi.filter((b) => b.fuori).map((b) => b.codice).join(", "), "");
writeFileSync("CATALOGO.md", L.join("\n"));
