# Blocchi

Libreria delle sezioni per le pagine di vendita Keryx. Non è il sito.

- Pagina: https://keryxdesign.github.io/blocchi/ (si pubblica da sola a ogni push su `main`).
- Logica: **A** = tipo di sezione per funzione (76, in 9 categorie), **B** = formato di layout (24). Ogni blocco ha un codice e almeno un tipo A.
- Fonte unica: `src/data/catalogo.json` (tipi, blocchi, sorgenti, anteprime). `CATALOGO.md` è la versione testuale per la skill /web: si rigenera con `npm run catalogo`.
- Fonti dei blocchi: **KX** nostri (`src/components/vendita/`, copia dal sito `KeryxDesign/keryx-design`: se cambiano lì vanno riallineati), **HU** HyperUI (MIT, `public/hyperui/`), **AW** AstroWind (MIT, solo elenco con link al sorgente).
- Elenco dei tipi con fonti dei nomi: `sistema/tipi_di_sezione_nomi_e_funzioni_2026-10-29.md` nei file del progetto.

Aggiungere un blocco: componente o HTML nel repo, una voce in `blocchi` di catalogo.json (codice, fonte, funzioni, formati, anteprima, sorgente), `npm run catalogo`, push.
