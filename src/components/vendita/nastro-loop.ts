// Carosello in loop dei nastri [data-kxn] (S4 copertine, S5 voci). Porta in componente lo script della v48
// (pagina libri, v24): scorrimento continuo via scrollLeft, così il nastro resta un contenitore scorrevole vero
// (dito, trackpad, rotellina, frecce) e col mouse si trascina. Pausa: mouse sopra, fuoco da tastiera, dito giù
// (riparte 1,5 s dopo). Nessun bottone (Florbo 23/10). Movimento ridotto: nessuno scorrimento automatico.
const ridotto = window.matchMedia("(prefers-reduced-motion: reduce)");

document.querySelectorAll<HTMLElement>("[data-kxn]").forEach((kc) => {
  const n = kc.querySelector<HTMLElement>(".kxn-nastro");
  const doppio = kc.querySelector<HTMLElement>('.kxn-corsa > li[aria-hidden="true"]');
  const primo = kc.querySelector<HTMLElement>(".kxn-corsa > li");
  if (!n || !doppio || !primo) return;
  const vel = Number(kc.dataset.kxn) || 30; // px al secondo
  const stop = { mouse: false, focus: false, dito: false, trascina: false };
  let pos = 0, ultimo = 0, t0 = 0, timerDito = 0;
  const meta = () => doppio.offsetLeft - primo.offsetLeft;
  const fermo = () => ridotto.matches || stop.mouse || stop.focus || stop.dito || stop.trascina;

  function passo(t: number) {
    const dt = t0 ? Math.min(t - t0, 100) / 1000 : 0; t0 = t;
    if (!fermo() && !document.hidden) {
      const m = meta();
      if (Math.abs(n!.scrollLeft - ultimo) > 2) pos = n!.scrollLeft; // l'utente ha scorso: si riparte da lì
      pos += vel * dt;
      if (m > 0 && pos >= m) pos -= m;
      n!.scrollLeft = pos; ultimo = n!.scrollLeft;
    }
    requestAnimationFrame(passo);
  }
  // Giro continuo anche a mano: oltre la prima copia si torna all'inizio, prima dell'inizio si salta alla fine.
  n.addEventListener("scroll", () => {
    if (ridotto.matches) return;
    const m = meta(); if (m <= 0) return;
    if (n.scrollLeft >= m + 1) n.scrollLeft -= m;
    else if (n.scrollLeft <= 0 && (stop.dito || stop.mouse)) n.scrollLeft += m;
    if (Math.abs(n.scrollLeft - ultimo) > 2) pos = ultimo = n.scrollLeft;
  }, { passive: true });
  n.addEventListener("mouseenter", () => { stop.mouse = true; });
  n.addEventListener("mouseleave", () => { stop.mouse = false; });
  kc.addEventListener("focusin", (e) => { if (e.target === n && n.matches(":focus-visible")) stop.focus = true; });
  kc.addEventListener("focusout", (e) => { if (e.target === n) stop.focus = false; });
  n.addEventListener("touchstart", () => { clearTimeout(timerDito); stop.dito = true; }, { passive: true });
  n.addEventListener("touchend", () => { clearTimeout(timerDito); timerDito = window.setTimeout(() => { stop.dito = false; }, 1500); }, { passive: true });
  // Trascinamento col mouse (il dito usa lo scorrimento nativo); dopo un trascinamento il rilascio non apre link.
  let x0 = 0, s0 = 0, mosso = false;
  n.addEventListener("click", (e) => { if (mosso) { e.preventDefault(); e.stopPropagation(); mosso = false; } }, true);
  n.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    stop.trascina = true; mosso = false; x0 = e.clientX; s0 = n.scrollLeft; n.classList.add("is-trascina");
  });
  n.addEventListener("pointermove", (e) => {
    if (!stop.trascina) return;
    if (!mosso && Math.abs(e.clientX - x0) > 5) { mosso = true; try { n.setPointerCapture(e.pointerId); } catch { /* niente */ } }
    const m = meta(); let v = s0 - (e.clientX - x0);
    if (m > 0) { while (v < 0) { v += m; s0 += m; } while (v >= m) { v -= m; s0 -= m; } }
    n.scrollLeft = v;
  });
  const fine = () => { if (!stop.trascina) return; stop.trascina = false; n.classList.remove("is-trascina"); pos = ultimo = n.scrollLeft; };
  n.addEventListener("pointerup", fine); n.addEventListener("pointercancel", fine); n.addEventListener("lostpointercapture", fine);
  window.addEventListener("pointerup", fine);
  requestAnimationFrame(passo);
});
