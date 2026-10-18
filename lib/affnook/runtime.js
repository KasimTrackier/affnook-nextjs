// Browser-only behaviour: smooth scroll, scroll-linked effects, reveal-on-scroll, marquees,
// canvas lines, nav dropdowns, tabs, FAQ, audience switcher and so on.
// start() boots everything and returns a function that undoes it (React effect cleanup).
import { D } from './content';
import { page, navHTML, feedRow, FEEDS, fmt } from './render';

export function start() {
  const ac = new AbortController();
  const signal = ac.signal;
  let alive = true, raf = 0;
  document.documentElement.classList.add('js');

const REDUCE = matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE = matchMedia('(hover: hover) and (pointer: fine)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

function bindNav() {
  const navEl = $('#nav');
  navEl.innerHTML = navHTML();
  const dds = $$('[data-dd]', navEl);
  const close = () => dds.forEach(d => { d.classList.remove('on'); $('.dd-t', d).setAttribute('aria-expanded', 'false'); });
  const open = d => { dds.forEach(x => { if (x !== d) { x.classList.remove('on'); $('.dd-t', x).setAttribute('aria-expanded', 'false'); } }); d.classList.add('on'); $('.dd-t', d).setAttribute('aria-expanded', 'true'); };
  dds.forEach(d => {
    let t;
    if (FINE) { d.addEventListener('pointerenter', () => { clearTimeout(t); open(d); }); d.addEventListener('pointerleave', () => { t = setTimeout(() => { d.classList.remove('on'); $('.dd-t', d).setAttribute('aria-expanded', 'false'); }, 160); }); }
    $('.dd-t', d).addEventListener('click', () => d.classList.contains('on') ? close() : open(d));
  });
  document.addEventListener('click', e => { if (!e.target.closest('[data-dd]')) close(); }, {signal});
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); setMenu(false); } }, {signal});
  const burger = $('.burger', navEl);
  const setMenu = on => { navEl.classList.toggle('open', on); burger.setAttribute('aria-expanded', on); burger.setAttribute('aria-label', on ? 'Close menu' : 'Open menu'); };
  burger.addEventListener('click', () => setMenu(!navEl.classList.contains('open')));
  $$('.mm-sec>button', navEl).forEach(b => b.addEventListener('click', () => { const sec = b.parentElement, on = !sec.classList.contains('on'); $$('.mm-sec', navEl).forEach(x => { x.classList.remove('on'); $('button', x).setAttribute('aria-expanded', 'false'); }); if (on) { sec.classList.add('on'); b.setAttribute('aria-expanded', 'true'); } }));
  $$('[data-navaud]', navEl).forEach(b => b.addEventListener('click', () => { close(); setMenu(false); switchTo(b.dataset.aud); }));
  $$('[data-close], .mmenu a', navEl).forEach(a => a.addEventListener('click', () => { close(); setMenu(false); }));
}
function markNavAud(aud) { $$('#nav [data-navaud]').forEach(b => { const t = $('.cur-tag', b); if (t) t.hidden = b.dataset.aud !== aud; }); }

/* ============ runtime ============ */
const app = $('#app');
const timers = [];
let io = null, marquees = [], scrubs = [], canvases = [], current = 'operators';
const later = (fn, ms) => { const t = setTimeout(fn, ms); timers.push(t); return t; };
const every = (fn, ms) => { const t = setInterval(fn, ms); timers.push(t); return t; };
function clearTimers() { timers.forEach(t => { clearTimeout(t); clearInterval(t); }); timers.length = 0; }

function countUp(el) {
  if (el.dataset.done) return; el.dataset.done = 1;
  const v = parseFloat(el.dataset.v), dec = +el.dataset.dec, p = el.dataset.p, s = el.dataset.s;
  if (REDUCE) return;
  const dur = 1700, t0 = performance.now();
  const step = now => { const k = clamp((now - t0) / dur, 0, 1), e = 1 - Math.pow(1 - k, 4); el.textContent = p + fmt(v * e, dec) + s; if (k < 1) requestAnimationFrame(step); };
  el.textContent = p + fmt(0, dec) + s;
  requestAnimationFrame(step);
}
const RUN = {
  chat(el) {
    const you = $('.bub.you', el), typing = $('.typing', el), aff = $('.bub.aff', el);
    later(() => you.classList.add('show'), 350);
    later(() => typing.classList.add('show'), 1000);
    later(() => { typing.classList.add('gone'); aff.classList.add('show'); }, 2300);
  },
  mcp(el) {
    const ut = $('.ut', el), q = 'Which affiliates drove the most revenue last week?';
    let i = 0;
    const type = () => { ut.textContent = q.slice(0, ++i); if (i < q.length) later(type, 26); else done(); };
    const done = () => {
      $('.caret', el).style.display = 'none';
      later(() => $('.toolc', el).classList.add('show'), 300);
      [$('.a1', el), $('.atbl', el), $('.dimp', el)].forEach((n, k) => later(() => n.classList.add('show'), 1100 + k * 450));
      cyclePrompts(el);
    };
    later(type, 400);
  }
};
function cyclePrompts(el) {
  const ph = $('.aip', el), chips = $$('.pchip');
  const P = chips.map(c => c.textContent.replace('↗', '').trim());
  let k = 0;
  const show = () => {
    chips.forEach((c, i) => c.classList.toggle('on', i === k));
    const txt = P[k]; let j = 0;
    const tp = () => { ph.textContent = txt.slice(0, ++j); ph.style.color = 'var(--paper)'; if (j < txt.length) later(tp, 22); };
    tp(); k = (k + 1) % P.length;
  };
  later(show, 2400); every(show, 4200);
}
function setupIO() {
  if (io) io.disconnect();
  const els = $$('[data-io]', app);
  if (REDUCE || !('IntersectionObserver' in window)) { els.forEach(e => { e.classList.add('in'); if (e.dataset.run) RUN[e.dataset.run](e); }); $$('.cnt', app).forEach(countUp); return; }
  io = new IntersectionObserver(ents => ents.forEach(en => {
    if (!en.isIntersecting) return;
    const e = en.target; e.classList.add('in'); io.unobserve(e);
    if (e.dataset.run) RUN[e.dataset.run](e);
    $$('.cnt', e).forEach(c => { if (!c.closest('.hero')) countUp(c); });
  }), {rootMargin:'0px 0px -10% 0px', threshold:0.08});
  els.forEach(e => { if (!e.closest('.hero')) io.observe(e); });
}

/* --- marquees --- */
function setupMarquees() {
  marquees = $$('[data-mq]', app).map(m => ({el:$('.mq-track', m), dir:+m.dataset.mq, speed:+m.dataset.speed, vel:!!m.dataset.vel, x:0, w:0, hover:false, skew:0, m}));
  marquees.forEach(q => { q.w = q.el.scrollWidth / 2; q.m.addEventListener('mouseenter', () => q.hover = true); q.m.addEventListener('mouseleave', () => q.hover = false); });
}
/* --- landscape lines canvas --- */
function setupCanvases() {
  canvases = $$('canvas[data-lines]', app).map(cv => {
    const o = {cv, ctx:cv.getContext('2d'), vis:true, w:0, h:0};
    const r = () => { const dpr = Math.min(devicePixelRatio || 1, 2); o.w = cv.clientWidth; o.h = cv.clientHeight; cv.width = o.w * dpr; cv.height = o.h * dpr; o.ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    r(); o.resize = r;
    if ('IntersectionObserver' in window) new IntersectionObserver(e => o.vis = e[0].isIntersecting).observe(cv);
    return o;
  });
}
function drawLines(o, t) {
  const {ctx, w, h} = o; ctx.clearRect(0, 0, w, h);
  const N = 14;
  for (let i = 0; i < N; i++) {
    const g = ctx.createLinearGradient(0, 0, w, 0);
    const a = .12 + (i / N) * .3;
    g.addColorStop(0, `rgba(140,134,255,0)`); g.addColorStop(.35, `rgba(140,134,255,${a})`); g.addColorStop(.75, `rgba(0,209,127,${a * .9})`); g.addColorStop(1, 'rgba(0,209,127,0)');
    ctx.strokeStyle = g; ctx.lineWidth = 1; ctx.beginPath();
    const base = h * .2 + i * (h * .055), amp = 18 + i * 3.2;
    for (let x = 0; x <= w; x += 14) {
      const y = base + Math.sin(x * .0042 + t * .00035 + i * .55) * amp + Math.sin(x * .011 - t * .0005 + i) * (amp * .35);
      x ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    }
    ctx.stroke();
  }
}

/* --- scroll-linked effects --- */
function setupScrubs() {
  scrubs = [];
  const vh = () => innerHeight;
  // word highlight
  $$('[data-anim="scrub"]', app).forEach(h => { const ws = $$('.sw', h); scrubs.push(() => { const r = h.getBoundingClientRect(); const p = clamp((vh() * .88 - r.top) / (vh() * .55 + r.height * .5), 0, 1); const n = Math.round(p * ws.length); ws.forEach((w, i) => w.classList.toggle('lit', i < n)); }); });
  // hero dashboard tilt + float parallax
  const tilt = $('.hero .hv-tilt', app), stage = $('.hero .hv-stage', app);
  if (tilt) scrubs.push(() => { const r = stage.getBoundingClientRect(); const p = clamp(1 - (r.top - vh() * .12) / (vh() * .8), 0, 1); tilt.style.setProperty('--rx', `${(1 - p) * 26}deg`); tilt.style.setProperty('--sc', (.9 + p * .1).toFixed(3)); });
  $$('[data-par]', app).forEach(f => { const amt = +f.dataset.par; scrubs.push(() => { const r = f.getBoundingClientRect(); const p = (r.top + r.height / 2 - vh() / 2) / vh(); f.style.transform = `translateY(${(p * amt).toFixed(1)}px)`; }); });
  // horizontal proof
  const hp = $('[data-hpin]', app);
  if (hp) {
    const track = $('.ptrack', hp), bar = $('.proof-prog i', hp), num = $('.pp-n', hp), n = $$('.case', hp).length;
    const size = () => { if (innerWidth <= 900) { hp.style.height = ''; track.style.transform = ''; return 0; } const dist = Math.max(0, track.scrollWidth - innerWidth); hp.style.height = `${dist + innerHeight}px`; return dist; };
    let dist = size(); hp._size = () => dist = size();
    scrubs.push(() => { if (innerWidth <= 900) return; const r = hp.getBoundingClientRect(); const p = clamp(-r.top / Math.max(1, hp.offsetHeight - innerHeight), 0, 1); track.style.transform = `translate3d(${(-p * dist).toFixed(1)}px,0,0)`; bar.style.transform = `scaleX(${p})`; num.textContent = '0' + Math.min(n, 1 + Math.floor(p * n * .999)); });
  }
  // pinned steps
  const hs = $('[data-steps]', app);
  if (hs) {
    const fillv = $('.fillv', hs);
    const size = () => { hs.style.height = innerWidth > 980 ? `${innerHeight * 3.2}px` : ''; };
    size(); hs._size = size;
    scrubs.push(() => { if (innerWidth <= 980) return; const r = hs.getBoundingClientRect(); const p = clamp(-r.top / Math.max(1, hs.offsetHeight - innerHeight), 0, 1); fillv.style.transform = `scaleY(${p})`; setStep(hs, Math.min(3, Math.floor(p * 4 * .999))); });
  }
  // footer wordmark rise
  const fl = $$('.fbig g', app), foot = $('[data-foot]', app);
  if (foot) scrubs.push(() => { const r = foot.getBoundingClientRect(); const p = clamp((vh() - r.top) / (r.height * .9), 0, 1); fl.forEach((s, i) => { const k = clamp(p * 1.6 - i * .08, 0, 1); s.style.setProperty('--fy', `${((1 - k) * 100).toFixed(1)}%`); }); });
  // dock + progress handled globally
}
function setStep(root, i) {
  if (root._step === i) return; root._step = i;
  $$('.step', root).forEach((s, k) => s.classList.toggle('on', k === i));
  $$('.panel', root).forEach((s, k) => s.classList.toggle('on', k === i));
}

/* --- interactions bound per render --- */
function bindPage() {
  // audience switchers
  $$('[data-aud]', app).forEach(b => b.addEventListener('click', () => switchTo(b.dataset.aud)));
  $$('[data-aud-link]', app).forEach(a => a.addEventListener('click', e => { e.preventDefault(); switchTo(a.dataset.audLink); }));
  $$('.fn-form', app).forEach(f => { const m = f.parentNode.querySelector('.fn-msg'), i = f.querySelector('input'); f.addEventListener('submit', e => { e.preventDefault(); const v = i.value.trim(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { m.className = 'fn-msg err'; m.textContent = 'Please enter a valid email address.'; i.focus(); return; } m.className = 'fn-msg ok'; m.textContent = 'Thanks! You’re subscribed to the Affnook newsletter.'; f.reset(); }); });
  placeIndicators();
  // feature tabs
  $$('[data-tabs]', app).forEach(sec => {
    const tabs = $$('.ftab', sec), panes = $$('.fp', sec); let cur = 0, paused = false;
    const go = i => { cur = i; tabs.forEach((t, k) => { t.classList.toggle('on', k === i); t.setAttribute('aria-selected', k === i); const pr = $('.pr', t); pr.style.animation = 'none'; void pr.offsetWidth; pr.style.animation = ''; }); panes.forEach((p, k) => p.classList.toggle('on', k === i)); };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const st = $('.fstage', sec);
    sec.addEventListener('mouseenter', () => { paused = true; sec.classList.add('paused'); });
    sec.addEventListener('mouseleave', () => { paused = false; sec.classList.remove('paused'); });
    tabs.forEach(t => $('.pr', t).addEventListener('animationend', () => { if (!paused) go((cur + 1) % tabs.length); }));
  });
  // steps click (mobile + desktop jump)
  const hs = $('[data-steps]', app);
  if (hs) {
    $$('.step', hs).forEach((s, i) => s.addEventListener('click', () => {
      if (innerWidth > 980) { const top = hs.getBoundingClientRect().top + scrollY; scrollToY(top + (hs.offsetHeight - innerHeight) * (i + .5) / 4); }
      else setStep(hs, i);
    }));
    every(() => { if (innerWidth <= 980) setStep(hs, ((hs._step || 0) + 1) % 4); }, 4500);
  }
  // FAQ
  $$('.qa button', app).forEach(b => b.addEventListener('click', () => { const qa = b.parentElement, open = !qa.classList.contains('open'); $$('.qa', app).forEach(x => { x.classList.remove('open'); $('button', x).setAttribute('aria-expanded', 'false'); }); if (open) { qa.classList.add('open'); b.setAttribute('aria-expanded', 'true'); } }));
  $$('.fcat', app).forEach(c => c.addEventListener('click', () => { $$('.fcat', app).forEach(x => x.classList.toggle('on', x === c)); let first = true; $$('.qa', app).forEach(q => { const show = q.dataset.qcat === c.dataset.cat; q.hidden = !show; q.classList.toggle('open', show && first); if (show) first = false; }); refreshSizes(); }));
  // MCP prompt chips
  $$('.pchip', app).forEach(c => c.addEventListener('click', () => { const ph = $('.aip', app); $$('.pchip', app).forEach(x => x.classList.toggle('on', x === c)); ph.textContent = c.textContent.replace('↗', '').trim(); ph.style.color = 'var(--paper)'; }));
  // before/after sliders
  $$('[data-ba]', app).forEach(ba => {
    let drag = false;
    const set = x => { const r = ba.getBoundingClientRect(); ba.style.setProperty('--pos', `${clamp((x - r.left) / r.width * 100, 4, 96)}%`); };
    ba.addEventListener('pointerdown', e => { drag = true; ba.setPointerCapture(e.pointerId); set(e.clientX); });
    ba.addEventListener('pointermove', e => { if (drag) set(e.clientX); });
    ba.addEventListener('pointerup', () => drag = false);
    ba.addEventListener('pointercancel', () => drag = false);
    if (!REDUCE && 'IntersectionObserver' in window) { const o = new IntersectionObserver(en => { if (en[0].isIntersecting) { o.disconnect(); sweep(ba); } }, {threshold:.4}); o.observe(ba); }
  });
  // tilt tiles
  if (FINE && !REDUCE) $$('[data-tilt]', app).forEach(t => {
    t.addEventListener('pointermove', e => { const r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height; t.style.setProperty('--ry', `${(x - .5) * 7}deg`); t.style.setProperty('--rx', `${(.5 - y) * 7}deg`); t.style.setProperty('--mx', `${x * 100}%`); t.style.setProperty('--my', `${y * 100}%`); });
    t.addEventListener('pointerleave', () => { t.style.setProperty('--rx', '0deg'); t.style.setProperty('--ry', '0deg'); });
  });
  // magnetic
  bindMagnetic(app);
  const cta = $('[data-spot]', app);
  // live feeds
  $$('[data-feed]', app).forEach(ul => { const k = ul.dataset.feed, pool = FEEDS[k], max = k === 'ops' ? 5 : 4; let n = max; every(() => { if (document.hidden) return; ul.insertAdjacentHTML('afterbegin', feedRow(pool[n++ % pool.length], k)); while (ul.children.length > max) ul.lastElementChild.remove(); }, 2600); });
  // FX ticker
  $$('[data-fx]', app).forEach(b => { const base = +b.dataset.fx; every(() => { b.textContent = (base * (1 + (Math.random() - .5) * .004)).toFixed(4); }, 1800 + Math.random() * 900); });
  // tracking domain typing loop
  $$('[data-type]', app).forEach(s => { const full = s.dataset.type; let i = 0, dir = 1; const tick = () => { i += dir; s.textContent = full.slice(0, i); if (i >= full.length) { dir = -1; later(tick, 2600); return; } if (i <= 'track.'.length && dir < 0) { dir = 1; later(tick, 400); return; } later(tick, dir > 0 ? 55 : 22); }; if (!REDUCE) later(tick, 1500); });
}
function sweep(ba) {
  const t0 = performance.now(), d = 1600;
  const f = now => { const k = clamp((now - t0) / d, 0, 1); const v = 50 + Math.sin(k * Math.PI * 2) * 30 * (1 - k); ba.style.setProperty('--pos', `${v}%`); if (k < 1) requestAnimationFrame(f); };
  requestAnimationFrame(f);
}
function bindMagnetic(root) {
  if (!FINE || REDUCE) return;
  $$('.magnetic', root).forEach(m => {
    if (m._mag) return; m._mag = 1;
    m.addEventListener('pointermove', e => { const r = m.getBoundingClientRect(); const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2; m.style.transform = `translate(${x * .28}px,${y * .38}px)`; });
    m.addEventListener('pointerleave', () => m.style.transform = '');
  });
}
function placeIndicators() {
  $$('[data-seg]').forEach(s => { const on = $('.seg-b.on', s), ind = $('.seg-ind', s); if (!on || !ind) return; ind.style.width = on.offsetWidth + 'px'; ind.style.transform = `translateX(${on.offsetLeft}px)`; });
}

/* --- smooth scroll (Lenis-style) --- */
const SS = {cur:scrollY, target:scrollY, active:false, last:scrollY, vel:0};
const maxY = () => document.documentElement.scrollHeight - innerHeight;
function scrollToY(y, immediate) {
  y = clamp(y, 0, maxY());
  if (immediate || REDUCE || !FINE) { SS.active = false; SS.cur = SS.target = y; scrollTo(0, y); return; }
  SS.target = y; SS.cur = scrollY; SS.active = true;
}
if (FINE && !REDUCE) {
  addEventListener('wheel', e => {
    if (e.ctrlKey || e.defaultPrevented) return;
    e.preventDefault();
    const dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * innerHeight : e.deltaY;
    if (!SS.active) SS.cur = SS.target = scrollY;
    SS.target = clamp(SS.target + dy, 0, maxY()); SS.active = true;
  }, {passive:false, signal});
}
addEventListener('scroll', () => { if (!SS.active) SS.cur = SS.target = scrollY; }, {passive:true, signal});
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  const id = a.getAttribute('href').slice(1); const t = id ? document.getElementById(id) : null;
  if (!t && id) return;
  e.preventDefault(); scrollToY(t ? t.getBoundingClientRect().top + scrollY - (id === 'top' ? 0 : 20) : 0);
}, {signal});


/* --- main loop --- */
const nav = $('#nav'), prog = $('#progress');
let lastY = scrollY, navHidden = false;
function loop(t) {
  if (!alive) return;
  if (SS.active) {
    SS.cur = lerp(SS.cur, SS.target, .1);
    if (Math.abs(SS.target - SS.cur) < .4) { SS.cur = SS.target; SS.active = false; }
    scrollTo(0, SS.cur);
  }
  const y = scrollY, dy = y - lastY; lastY = y;
  SS.vel = lerp(SS.vel, dy, .15);
  // chrome
  prog.style.transform = `scaleX(${(y / Math.max(1, maxY())).toFixed(4)})`;
  nav.classList.toggle('scrolled', y > 40);
  if (Math.abs(dy) > 2) { const hide = dy > 0 && y > 200 && !nav.classList.contains('open') && !$('#nav .dd.on'); if (hide !== navHidden) { navHidden = hide; nav.classList.toggle('hide', hide); } }
  const hero = $('.hero', app);
  // scrubs
  for (const s of scrubs) s();
  // marquees
  for (const q of marquees) {
    if (!q.w) q.w = q.el.scrollWidth / 2;
    let sp = q.speed * (q.hover ? .25 : 1);
    if (q.vel) { const v = clamp(SS.vel, -60, 60); sp *= 1 + Math.abs(v) * .25; if (v < -1) q.vdir = -1; else if (v > 1) q.vdir = 1; }
    const dir = q.dir * (q.vdir || 1);
    q.x -= sp * dir;
    if (q.x <= -q.w) q.x += q.w; if (q.x > 0) q.x -= q.w;
    q.skew = lerp(q.skew, q.vel ? clamp(SS.vel * -.25, -10, 10) : 0, .12);
    q.el.style.transform = `translate3d(${q.x.toFixed(2)}px,0,0) skewX(${q.skew.toFixed(2)}deg)`;
  }
  // canvases
  for (const c of canvases) if (c.vis) drawLines(c, REDUCE ? 0 : t);
  raf = requestAnimationFrame(loop);
}

function refreshSizes() {
  $$('[data-hpin],[data-steps]', app).forEach(s => s._size && s._size());
  canvases.forEach(c => c.resize());
  marquees.forEach(q => q.w = q.el.scrollWidth / 2);
  placeIndicators();
}
let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(refreshSizes, 120); }, {signal});

function heroIntro() {
  const hero = $('.hero', app); if (!hero) return;
  requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('go')));
  later(() => { $$('[data-io]', hero).forEach(e => e.classList.add('in')); $$('.cnt', hero).forEach(countUp); }, REDUCE ? 0 : 1300);
}
function mount(aud) {
  clearTimers();
  current = aud;
  app.innerHTML = page(D[aud]);
  markNavAud(aud);
  bindPage(); setupIO(); setupMarquees(); setupCanvases(); setupScrubs();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refreshSizes);
  later(refreshSizes, 400);
}
let switching = false;
function switchTo(aud) {
  if (!D[aud] || aud === current || switching) return;
  try { history.replaceState(null, '', '#' + aud); } catch (e) {}
  if (REDUCE) { mount(aud); scrollToY(0, true); heroIntro(); return; }
  switching = true;
  app.classList.add('swap');
  setTimeout(() => {
    mount(aud); scrollToY(0, true);
    requestAnimationFrame(() => { app.classList.remove('swap'); heroIntro(); setTimeout(() => switching = false, 400); });
  }, 360);
}

/* --- boot --- */
bindNav();
const hash = (location.hash || '').slice(1);
mount(D[hash] ? hash : 'operators');
raf = requestAnimationFrame(loop);
heroIntro();
addEventListener('hashchange', () => { const h = location.hash.slice(1); if (D[h]) switchTo(h); }, {signal});

  return function destroy() {
    alive = false;
    ac.abort();
    cancelAnimationFrame(raf);
    clearTimeout(rz);
    clearTimers();
    if (io) io.disconnect();
  };
}
