// HTML builders for every section of the page. These are pure functions of the content
// in ./content, so they run on the server (first render) and in the browser (audience switch).
import { AUDS, C, AF, NAV, D, CASES, TCARDS, FEATS, FAQ, STEPS_T } from './content';

const ARROW = '<svg class="ico" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ARW = '<span class="arc" aria-hidden="true"><span class="arw"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><svg viewBox="0 0 16 16" width="14" height="14"><path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span></span>';
const CHECK = '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON = {
  operators:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg>',
  brands:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1.8 14.2 8 8 14.2 1.8 8Z"/></svg>',
  networks:'<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="3.2" r="1.8"/><circle cx="3.2" cy="12.4" r="1.8"/><circle cx="12.8" cy="12.4" r="1.8"/><path d="M7 4.8 4.2 10.8M9 4.8l2.8 6M5 12.4h6"/></svg>'
};
const LP = [["M78.173 16.2653H76.8169C76.2592 16.2653 75.7321 16.0303 75.3534 15.6124L67.1912 6.57611C66.9251 6.27839 66.439 6.47165 66.439 6.87384V14.2335C66.439 15.3565 65.5486 16.2601 64.4535 16.2601H64.4177C63.3174 16.2601 62.4321 15.3512 62.4321 14.2335V2.02664C62.4321 0.903631 63.3225 0 64.4177 0H65.7737C66.3315 0 66.8586 0.240268 67.2373 0.658131L75.3994 9.72053C75.6655 10.0183 76.1517 9.825 76.1517 9.4228V2.03708C76.1517 0.914072 77.0421 0.0104488 78.1372 0.0104488H78.173C79.2733 0.0104488 80.1586 0.919295 80.1586 2.03708V14.2439C80.1586 15.3669 79.2681 16.2705 78.173 16.2705V16.2653Z", "N"], ["M102.08 4.75968V11.5134C102.08 12.9185 101.691 14.0624 100.908 14.9451C100.125 15.8278 99.117 16.2718 97.8889 16.2718H87.1783C85.9297 16.2718 84.9113 15.8278 84.1233 14.9346C83.3352 14.0415 82.936 12.9028 82.936 11.5186V4.7649C82.936 3.38073 83.3301 2.24206 84.1233 1.34888C84.9113 0.455697 85.9297 0.0117188 87.1783 0.0117188H97.8889C99.1221 0.0117188 100.125 0.455694 100.908 1.33843C101.691 2.22116 102.08 3.36507 102.08 4.77013V4.75968ZM98.068 10.8553V5.41781C98.068 5.05218 97.9707 4.74923 97.7712 4.50374C97.5716 4.25824 97.3311 4.13289 97.0394 4.13289H87.9459C87.6593 4.13289 87.4188 4.25824 87.2295 4.50374C87.0401 4.74923 86.9429 5.05741 86.9429 5.41781V10.8553C86.9429 11.2209 87.035 11.5238 87.2295 11.7693C87.4188 12.0148 87.6593 12.1402 87.9459 12.1402H97.0394C97.326 12.1402 97.5716 12.0148 97.7712 11.7693C97.9656 11.5238 98.068 11.2209 98.068 10.8553Z", "O1"], ["M124.001 4.75968V11.5134C124.001 12.9185 123.612 14.0624 122.829 14.9451C122.047 15.8278 121.038 16.2718 119.81 16.2718H109.1C107.851 16.2718 106.833 15.8278 106.045 14.9346C105.257 14.0415 104.857 12.9028 104.857 11.5186V4.7649C104.857 3.38073 105.251 2.24206 106.045 1.34888C106.833 0.455697 107.851 0.0117188 109.1 0.0117188H119.81C121.044 0.0117188 122.047 0.455694 122.829 1.33843C123.612 2.22116 124.001 3.36507 124.001 4.77013V4.75968ZM119.989 10.8553V5.41781C119.989 5.05218 119.892 4.74923 119.693 4.50374C119.493 4.25824 119.252 4.13289 118.961 4.13289H109.867C109.581 4.13289 109.34 4.25824 109.151 4.50374C108.962 4.74923 108.864 5.05741 108.864 5.41781V10.8553C108.864 11.2209 108.956 11.5238 109.151 11.7693C109.34 12.0148 109.581 12.1402 109.867 12.1402H118.961C119.247 12.1402 119.493 12.0148 119.693 11.7693C119.887 11.5238 119.989 11.2209 119.989 10.8553Z", "O2"], ["M135.015 7.7618L139.59 2.64821C140.5 1.63489 139.794 0 138.443 0H137.108C136.668 0 136.248 0.193259 135.951 0.527549L131.202 5.93365C130.946 6.22616 130.803 6.60223 130.808 6.99398V9.52727C130.808 9.93991 130.972 10.3317 131.253 10.6294L136.171 15.7848C136.463 16.0929 136.862 16.2653 137.282 16.2653H138.505C139.876 16.2653 140.572 14.5782 139.615 13.5753L135.035 8.79079C134.764 8.50873 134.759 8.05953 135.02 7.76702L135.015 7.7618Z", "K"], ["M128.831 0.00390625H128.79C127.693 0.00390625 126.804 0.911264 126.804 2.03054V14.2426C126.804 15.3619 127.693 16.2692 128.79 16.2692H128.831C129.927 16.2692 130.816 15.3619 130.816 14.2426V2.03054C130.816 0.911264 129.927 0.00390625 128.831 0.00390625Z", "K"], ["M38.6344 10.9098H30.1703C29.2236 10.9098 28.456 11.6933 28.456 12.6596V14.284C28.456 15.3809 27.5861 16.2689 26.5114 16.2689H26.3528C25.2782 16.2689 24.4082 15.3809 24.4082 14.284V8.93016C24.4082 7.83327 25.2782 6.94531 26.3528 6.94531H38.6344C39.709 6.94531 40.579 7.83327 40.579 8.93016C40.579 10.0271 39.709 10.915 38.6344 10.915V10.9098Z", "F1"], ["M38.6344 0H26.3528C25.2788 0 24.4082 0.888648 24.4082 1.98485V2.14677C24.4082 3.24297 25.2788 4.13162 26.3528 4.13162H38.6344C39.7083 4.13162 40.579 3.24297 40.579 2.14677V1.98485C40.579 0.888648 39.7083 0 38.6344 0Z", "F1"], ["M57.6173 10.9098H49.1532C48.2065 10.9098 47.4389 11.6933 47.4389 12.6596V14.284C47.4389 15.3809 46.569 16.2689 45.4943 16.2689H45.3357C44.2611 16.2689 43.3911 15.3809 43.3911 14.284V8.93016C43.3911 7.83327 44.2611 6.94531 45.3357 6.94531H57.6173C58.6919 6.94531 59.5619 7.83327 59.5619 8.93016C59.5619 10.0271 58.6919 10.915 57.6173 10.915V10.9098Z", "F2"], ["M57.6178 0H45.3362C44.2622 0 43.3916 0.888648 43.3916 1.98485V2.14677C43.3916 3.24297 44.2622 4.13162 45.3362 4.13162H57.6178C58.6917 4.13162 59.5624 3.24297 59.5624 2.14677V1.98485C59.5624 0.888648 58.6917 0 57.6178 0Z", "F2"], ["M0.306991 13.2645L7.30238 1.92476C8.03927 0.733848 9.32372 0.0078125 10.7003 0.0078125C12.0666 0.0078125 13.3459 0.718179 14.0828 1.89342L21.2164 13.2436C22.0454 14.5651 21.1192 16.2992 19.5788 16.294H19.2104C18.54 16.294 17.9208 15.9441 17.5626 15.3643L11.9284 6.16607C11.4116 5.32512 10.2141 5.3199 9.69729 6.16607L4.0017 15.3747C3.64349 15.9493 3.02429 16.2992 2.35904 16.2992H1.94454C0.414455 16.2992 -0.511781 14.5808 0.301874 13.2593L0.306991 13.2645Z", "A"], ["M12.8671 11.9033C12.8671 10.7205 11.9278 9.76172 10.769 9.76172C9.61025 9.76172 8.6709 10.7205 8.6709 11.9033V14.1597C8.6709 15.3425 9.61025 16.3013 10.769 16.3013C11.9278 16.3013 12.8671 15.3425 12.8671 14.1597V11.9033Z", "A"]];
const LOGO_ORDER = ['A', 'F1', 'F2', 'N', 'O1', 'O2', 'K'];
function logoSVG(groups) {
  const path = d => `<path d="${d}"/>`;
  const inner = groups ? LOGO_ORDER.map((g, i) => `<g style="--i:${i}">${LP.filter(p => p[1] === g).map(p => path(p[0])).join('')}</g>`).join('') : LP.map(p => path(p[0])).join('');
  return `<svg viewBox="0 0 141 17" fill="currentColor" role="img" aria-label="Affnook">${inner}</svg>`;
}
const CHEV = '<svg viewBox="0 0 8 5" fill="none" aria-hidden="true"><path d="M1 1l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ml = ([t, u], i) => `<a class="ml mi" style="--i:${i}" href="${AF}${u}" target="_blank" rel="noopener">${t}</a>`;
export function navHTML() {
  const sol = NAV.sol.map(([a, d], i) => `<button class="mi" style="--i:${i}" data-aud="${a}" data-navaud><span class="mic">${ICON[a]}</span><span><b>${D[a].label}<em class="cur-tag" hidden>Viewing</em></b><span class="md">${d}</span></span></button>`).join('');
  let k = 0;
  const plat = `<div class="mcols">${NAV.plat.map(([h, l]) => `<div class="mcol"><h6>${h}</h6>${l.map(x => ml(x, k++)).join('')}</div>`).join('')}</div><a class="mfeat mi" style="--i:${k}" href="#mcp" data-close><span><span class="newb">New</span><b>Affnook MCP.</b> Ask Claude about your affiliate data and get instant answers.</span><span class="go">Explore →</span></a>`;
  k = 0;
  const res = `<div class="mcols">${NAV.res.map(([h, l]) => `<div class="mcol"><h6>${h}</h6>${l.map(x => ml(x, k++)).join('')}</div>`).join('')}<a class="mcard mi" style="--i:${k}" href="${CASES.uni.url}" target="_blank" rel="noopener"><span><small>Case study</small><b>How Unicon365 grew NGR 200% across 9+ brands</b><p>Tracking, fraud checks and payouts in one Affnook dashboard.</p></span><span class="go">Read the story →</span></a></div>`;
  const dd = (id, label, body, cls) => `<div class="dd" data-dd><button class="dd-t" aria-expanded="false" aria-controls="dd-${id}">${label}${CHEV}</button><div class="dd-p ${cls}" id="dd-${id}">${body}</div></div>`;
  const mm = (label, body) => `<div class="mm-sec"><button aria-expanded="false">${label}${CHEV}</button><div class="mm-body"><div>${body}</div></div></div>`;
  return `<div class="nav-in">
    <a class="logo" href="#top" aria-label="Affnook home">${logoSVG()}</a>
    <nav class="nav-links" aria-label="Main">${dd('sol', 'Solutions', sol, 'dd-sol')}${dd('plat', 'Platform', plat, 'dd-plat')}${dd('res', 'Resources', res, 'dd-res')}<a class="nl" href="${AF}/why-choose-affnook" target="_blank" rel="noopener">Why Affnook</a><a class="nl" href="${AF}/contact-sales/" target="_blank" rel="noopener">Pricing</a></nav>
    <div class="nav-r"><a class="nav-contact" href="${AF}/contact-sales/" target="_blank" rel="noopener">Contact sales</a>${btn('Book a free demo')}<button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="mmenu"><i></i><i></i></button></div>
  </div>
  <div class="mmenu" id="mmenu">${mm('Solutions', NAV.sol.map(([a]) => `<button class="ml" data-aud="${a}" data-navaud style="width:100%">${D[a].label}</button>`).join(''))}${mm('Platform', NAV.plat.flatMap(([, l]) => l).map(x => ml(x, 0)).join('') + '<a class="ml" href="#mcp" data-close>Affnook MCP · New</a>')}${mm('Resources', NAV.res.flatMap(([, l]) => l).map(x => ml(x, 0)).join(''))}<a class="mm-a" href="${AF}/why-choose-affnook" target="_blank" rel="noopener">Why Affnook</a><a class="mm-a" href="${AF}/contact-sales/" target="_blank" rel="noopener">Pricing</a>
  <div class="mm-cta">${btn('Book a free demo')}${btn('Contact sales', {kind:'s', href:AF + '/contact-sales/'})}</div></div>`;
}

/* ============ helpers ============ */
let CI = 0;
const chars = t => t.split(' ').map(w => `<span class="wd">${[...w].map(c => `<span class="ch" style="--i:${CI++}">${c}</span>`).join('')}</span>`).join(' ');
const words = t => t.split(' ').map(w => `<span class="sw">${w}</span>`).join(' ');
function H(lines, {tag = 'h2', cls = 'h2', mode = 'chars', extra = ''} = {}) {
  CI = 0;
  const inner = lines.map((l, i) => `<span class="hl${i ? ' dim' : ''}">${mode === 'chars' ? chars(l) : words(l)}</span>`).join(' ');
  return `<${tag} class="${cls}" data-anim="${mode}" data-io ${extra}>${inner}</${tag}>`;
}
export const fmt = (v, d) => Number(v).toLocaleString('en-US', {minimumFractionDigits:d, maximumFractionDigits:d});
const cnt = (p, v, s, d = 0) => `<span class="cnt" data-v="${v}" data-p="${p}" data-s="${s}" data-dec="${d}">${p}${fmt(v, d)}${s}</span>`;
const btn = (label, {kind = 'p', arrow = true, href = 'https://affnook.com/book-free-demo/', ext = true} = {}) =>
  `<a class="btn btn-${kind}${arrow ? ' has-arc' : ''}" href="${href}"${ext ? ' target="_blank" rel="noopener"' : ''}><span>${label}</span>${arrow ? ARW : ''}</a>`;
const eyebrow = t => `<span class="eyebrow rv" data-io><i></i>${t}</span>`;
const seg = key => `<div class="seg" data-seg role="tablist" aria-label="Choose your business type">${AUDS.map(a => `<button class="seg-b${a === key ? ' on' : ''}" data-aud="${a}" role="tab" aria-selected="${a === key}">${ICON[a]}<span>${D[a].label}</span></button>`).join('')}<span class="seg-ind" aria-hidden="true"></span></div>`;
function smooth(pts) {
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    d += ` C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)},${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)} ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)},${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)} ${p2[0]},${p2[1]}`;
  }
  return d;
}
const toPts = (vals, W, H, max, pad = 6) => vals.map((v, i) => [+(i * W / (vals.length - 1)).toFixed(1), +(H - pad - v / max * (H - pad * 2)).toFixed(1)]);
function spark(kind, color) {
  const v = kind === 'up' ? [6, 8, 7, 10, 11, 13, 16] : kind === 'down' ? [14, 13, 14, 11, 10, 9, 8] : [10, 11, 9, 10, 11, 10, 11];
  const col = kind === 'down' ? 'var(--red)' : color === C.w ? 'var(--green)' : color;
  return `<svg viewBox="0 0 72 20" aria-hidden="true"><path d="${smooth(toPts(v, 72, 20, 18, 2))}" fill="none" stroke="${col}" stroke-width="1.6" stroke-linecap="round"/></svg>`;
}
const win = (url, inner) => `<div class="win"><div class="win-bar"><span class="lights"><i></i><i></i><i></i></span><span class="url">${url}</span><span class="win-meta"><span>Sample data</span><b class="live"><i></i>Live</b></span></div>${inner}</div>`;
const side = (h, items) => `<aside class="dside"><div class="dlogo">${logoSVG()}</div><nav class="dnav">${['Dashboard', 'Reports', 'Manage', 'Configuration'].map((t, i) => `<span class="${i ? '' : 'on'}"><i></i>${t}</span>`).join('')}</nav><p class="dside-h">${h}</p><ul class="dlist">${items.map(([t, c], i) => `<li class="${i ? '' : 'on'}"><i style="background:${c}"></i>${t}</li>`).join('')}</ul></aside>`;
const kpi = (l, p, v, s, d, delta, cls = '') => `<div class="kpi"><span>${l}</span><b>${cnt(p, v, s, d)}</b><em class="${cls}">${delta}</em></div>`;

/* ============ dashboards ============ */
function opsChart() {
  const W = 520, Hh = 190, max = 200;
  const casino = [62, 70, 66, 82, 92, 88, 104, 116, 124, 138, 150, 176], sport = [40, 46, 43, 52, 58, 57, 64, 70, 77, 83, 90, 102], poker = [28, 31, 27, 33, 35, 32, 37, 35, 39, 37, 41, 43];
  const pc = toPts(casino, W, Hh, max), ps = toPts(sport, W, Hh, max), pp = toPts(poker, W, Hh, max);
  const last = pc[pc.length - 1];
  return `<div class="chart"><svg viewBox="0 -10 ${W} ${Hh + 10}" role="img" aria-label="NGR by brand, rising over three months">
  <defs><linearGradient id="ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8C86FF" stop-opacity=".38"/><stop offset="1" stop-color="#8C86FF" stop-opacity="0"/></linearGradient></defs>
  ${[40, 90, 140].map(y => `<line x1="0" x2="${W}" y1="${y}" y2="${y}" stroke="#1D2B5F" stroke-dasharray="3 5"/>`).join('')}
  <path class="fade" style="--d:900" d="${smooth(pc)} L${W},${Hh} L0,${Hh} Z" fill="url(#ga)"/>
  <path class="draw" pathLength="1" d="${smooth(pp)}" fill="none" stroke="#E86AAE" stroke-width="2.2" stroke-linecap="round"/>
  <path class="draw" style="--d:150" pathLength="1" d="${smooth(ps)}" fill="none" stroke="#00D17F" stroke-width="2.2" stroke-linecap="round"/>
  <path class="draw" style="--d:300" pathLength="1" d="${smooth(pc)}" fill="none" stroke="#8C86FF" stroke-width="2.6" stroke-linecap="round"/>
  <g class="fade" style="--d:1700"><circle cx="${last[0]}" cy="${last[1]}" r="9" fill="#8C86FF" opacity=".25"/><circle cx="${last[0]}" cy="${last[1]}" r="4.5" fill="#8C86FF"/></g>
  </svg><div class="ctip fade" style="--d:1700;left:${(last[0] / W * 100).toFixed(1)}%;top:calc(${((last[1] + 10) / (Hh + 10)).toFixed(3)} * (100% - 26px))">Week 12 · Casino<b>$184.6K NGR</b></div><div class="xl"><span>Jul</span><span>Aug</span><span>Sep</span></div></div>`;
}
function donut() {
  const segs = [[46, '#8C86FF', 'Casino'], [31, '#00D17F', 'Sportsbook'], [15, '#E86AAE', 'Poker'], [8, '#FFC600', 'Live casino']];
  let off = 0;
  const arcs = segs.map(([v, c], i) => { const s = `<circle class="seg-arc" pathLength="100" cx="65" cy="65" r="52" fill="none" stroke="${c}" stroke-width="16" style="--len:${v - 1.2};--d:${300 + i * 220}" stroke-dashoffset="${-off}" transform="rotate(-90 65 65)"/>`; off += v; return s; }).join('');
  return `<div class="donut"><svg viewBox="0 0 130 130" role="img" aria-label="Share of NGR by brand"><circle cx="65" cy="65" r="52" fill="none" stroke="rgba(255,255,255,.05)" stroke-width="16"/>${arcs}<text x="65" y="64" text-anchor="middle" style="font:600 17px var(--f-display)">$1.24M</text><text x="65" y="80" text-anchor="middle" style="font:500 10px var(--f-body);fill:#7A84B0">total NGR</text></svg><ul>${segs.map(([v, c, l]) => `<li style="--c:${c}"><i></i>${l} · ${v}%</li>`).join('')}</ul></div>`;
}
export const FEEDS = {
  ops:[['FTD', 'Sportsbook · DE', '$120', '', C.g], ['Registration', 'Casino · BR', '—', '', C.v], ['Click rejected', 'Proxy IP · flagged', 'blocked', 'r', C.r], ['Deposit', 'Poker · CA', '$60', '', C.g], ['FTD', 'Live casino · NL', '$250', '', C.g], ['Deposit', 'Casino · DE', '$80', '', C.g], ['Registration', 'Sportsbook · BR', '—', '', C.v], ['Click rejected', 'Data-centre IP', 'blocked', 'r', C.r]],
  net:[['FTD · Pub 2231 · Brand A', '200 OK · 124 ms', '', 'g', C.g], ['Registration · Pub 1874', '200 OK · 98 ms', '', 'g', C.g], ['Click · Pub 0942', 'Rejected · proxy IP', '', 'r', C.r], ['Deposit · Pub 3310 · Brand C', '200 OK · 131 ms', '', 'g', C.g], ['FTD · Pub 0518 · Brand B', '200 OK · 109 ms', '', 'g', C.g], ['Click · Pub 7741', 'Rejected · data-centre IP', '', 'r', C.r]]
};
export const feedRow = (r, k) => k === 'ops' ? `<li><i style="--c:${r[4]}"></i><div><b>${r[0]}</b><span>${r[1]}</span></div><em class="${r[3]}">${r[2]}</em></li>` : `<li><i style="--c:${r[4]}"></i><div><b>${r[0]}</b><span>${r[1]}</span></div><em></em></li>`;
function dashboard(d) {
  let inner = '', floats = '';
  if (d.dash === 'ops') {
    inner = `<div class="dbody">${side('Brands', [['All brands', '#fff'], ['Casino', '#8C86FF'], ['Sportsbook', '#00D17F'], ['Poker', '#E86AAE'], ['Live casino', '#FFC600']])}
    <div class="dmain"><div class="dhead"><div><h4>All brands</h4><p>Last 30 days · data refreshed every minute</p></div><span class="dpill">Sep 1 – Sep 30, 2026</span></div>
    <div class="kpis">${kpi('NGR', '$', 1.24, 'M', 2, '+9.2%')}${kpi('FTDs', '', 3482, '', 0, '+12.6%')}${kpi('Active players', '', 21760, '', 0, '+4.8%')}${kpi('Clicks blocked', '', 12906, '', 0, 'fraud', 'bad')}</div>
    <div class="dgrid"><div class="dcard"><div class="dcard-h"><b>NGR by brand</b><span class="legend"><span><i style="--c:#8C86FF"></i>Casino</span><span><i style="--c:#00D17F"></i>Sportsbook</span><span><i style="--c:#E86AAE"></i>Poker</span></span></div>${opsChart()}</div>
    <div class="dcard"><div class="dcard-h"><b>Share of NGR</b></div>${donut()}</div></div></div></div>`;
    floats = `<div class="float fl-l" data-par="-60"><div class="float-in"><h5>Top markets · NGR</h5>${[['Germany', 34, C.v], ['Brazil', 22, C.g], ['Canada', 18, C.p], ['Netherlands', 11, C.a]].map(([n, v, c], i) => `<div class="mrow"><span>${n}</span><b>${v}%</b><div class="trk"><i class="grow" style="--c:${c};width:${v * 2.6}%;--d:${1500 + i * 120}"></i></div></div>`).join('')}</div></div>
    <div class="float fl-r" data-par="-110"><div class="float-in"><h5>Live activity <b class="live"><i></i>Live</b></h5><ul class="feed" data-feed="ops">${FEEDS.ops.slice(0, 5).map(r => feedRow(r, 'ops')).join('')}</ul></div></div>`;
  } else if (d.dash === 'brands') {
    const split = ['#8C86FF', '#00D17F', '#E86AAE', '#FFC600'];
    const fr = [['Clicks', '1.28M', 100, [40, 28, 20, 12]], ['Registrations', '42.6K', 66, [36, 30, 20, 14]], ['FTDs', '6.9K', 38, [44, 26, 18, 12]], ['Repeat deposits', '3.1K', 20, [52, 24, 16, 8]]];
    inner = `<div class="dbody">${side('Top partners', [['All partners', '#fff'], ['Partner #2231', '#8C86FF'], ['Partner #1874', '#00D17F'], ['Partner #0942', '#E86AAE'], ['Partner #3310', '#FFC600']])}
    <div class="dmain"><div class="dhead"><div><h4>Player journey by partner</h4><p>Last 30 days · data refreshed every minute</p></div><span class="dpill">Sep 1 – Sep 30, 2026</span></div>
    <div class="kpis">${kpi('Clicks', '', 1.28, 'M', 2, '+6.1%')}${kpi('Registrations', '', 42610, '', 0, '3.3% CR', 'neu')}${kpi('FTDs', '', 6904, '', 0, '16.2% of regs', 'neu')}${kpi('Fake sign-ups blocked', '', 1946, '', 0, 'fraud', 'bad')}</div>
    <div class="dgrid"><div class="dcard"><div class="dcard-h"><b>Funnel · split by partner</b><span class="legend">${split.map((c, i) => `<span><i style="--c:${c}"></i>#${['2231', '1874', '0942', '3310'][i]}</span>`).join('')}</span></div><div class="funnel">${fr.map(([l, v, w, parts], i) => `<div class="frow"><span>${l}</span><div class="fbar grow" style="--w:${w}%;--d:${400 + i * 160}">${parts.map((p, j) => `<i style="width:${p}%;background:${split[j]}"></i>`).join('')}</div><b>${v}</b></div>`).join('')}</div></div>
    <div class="dcard"><div class="dcard-h"><b>Player LTV by sign-up week</b></div><div class="heat"><span></span>${['D0', 'D7', 'D14', 'D30', 'D60', 'D90'].map(x => `<span>${x}</span>`).join('')}${[1, 2, 3, 4].map(w => `<span>Week ${w}</span>` + [0, 1, 2, 3, 4, 5].map(c => `<i class="c" style="--o:${(.12 + Math.min(c, 6 - w) * .16).toFixed(2)};--d:${500 + (w * 6 + c) * 40}"></i>`).join('')).join('')}</div></div></div></div></div>`;
    floats = `<div class="float fl-l" data-par="-60"><div class="float-in"><h5>Promo codes <span class="chip">Uses · FTDs</span></h5>${[['WELCOME50', '812 · 214', 100], ['SPINS20', '604 · 166', 76], ['VIPBONUS', '188 · 97', 44], ['CRYPTO10', '143 · 41', 22]].map(([n, v, w], i) => `<div class="mrow"><span style="font-family:var(--f-mono);font-size:11.5px">${n}</span><b>${v}</b><div class="trk"><i class="grow" style="--c:var(--violet-l);width:${w}%;--d:${1500 + i * 120}"></i></div></div>`).join('')}</div></div>
    <div class="float fl-r" data-par="-110"><div class="float-in"><h5>Payout run · Oct 1 <span class="chip a">Scheduled</span></h5><b style="display:block;font:600 30px/1.1 var(--f-display);margin-bottom:4px">${cnt('$', 182400, '', 0)}</b><p style="margin:0 0 12px;color:var(--mist)">38 partners · CPA, rev share and hybrid plans</p><div style="display:flex;gap:6px;flex-wrap:wrap"><span class="chip v">USD</span><span class="chip">EUR</span><span class="chip">BRL</span><span class="chip">CAD</span><span class="chip">+ more</span></div></div></div>`;
  } else {
    inner = `<div class="dbody">${side('Brand partners', [['All brands', '#fff'], ['Brand A · Casino', '#8C86FF'], ['Brand B · Sports', '#00D17F'], ['Brand C · Poker', '#E86AAE'], ['Brand D · Bingo', '#FFC600']])}
    <div class="dmain"><div class="dhead"><div><h4>Network overview</h4><p>All brand partners · last 30 days · data refreshed every minute</p></div><span class="dpill">Sep 1 – Sep 30, 2026</span></div>
    <div class="kpis">${kpi('Brand partners', '', 36, '', 0, '+4')}${kpi('Active publishers', '', 1248, '', 0, '+86')}${kpi('Conversions', '', 18420, '', 0, '+11.2%')}${kpi('Commissions due', '$', 412, 'K', 0, 'Oct 1', 'neu')}</div>
    <div class="dgrid"><div class="dcard"><div class="dcard-h"><b>Publishers by tier</b><span class="legend">Your network · 1,248 publishers</span></div><div class="tiers">${[['Tier 1', '42 publishers', 38, 'CPA $60 per FTD', C.v], ['Tier 2', '318 publishers', 41, 'Hybrid · CPA $40 + 25% rev share', C.g], ['Tier 3', '888 publishers', 21, 'Rev share · 30% of NGR', C.p]].map(([t, n, v, m, c], i) => `<div class="tier"><b>${t}</b><div class="trk"><i class="grow" style="--c:${c};--w:${v * 2.2}%;--d:${400 + i * 160}"></i></div><em>${v}%</em><small>${n} · ${m}</small></div>`).join('')}</div></div>
    <div class="dcard"><div class="dcard-h"><b>Revenue by brand partner</b></div><div class="vbars">${[['A', 184, '#8C86FF'], ['B', 142, '#00D17F'], ['C', 96, '#E86AAE'], ['D', 61, '#FFC600'], ['+32', 129, '#2E3F80']].map(([n, v, c], i) => `<div class="vb"><b>$${v}K</b><i class="growy" style="--c:${c};--h:${v / 184 * 100}%;--d:${500 + i * 120}"></i><span>${n}</span></div>`).join('')}</div></div></div></div></div>`;
    floats = `<div class="float fl-l" data-par="-60"><div class="float-in"><h5>Commission rule <span class="chip g">Auto-applied</span></h5><div class="kv"><span>Group</span><b>Tier 2 publishers</b><span>Brand</span><b>Brand B · Sports</b><span>Model</span><b>Hybrid</b><span>Payout</span><b>CPA $40 + 25% RS</b><span>Negative carryover</span><b><i class="toggle"></i></b></div></div></div>
    <div class="float fl-r" data-par="-110"><div class="float-in"><h5>Postback log <b class="live"><i></i>Live</b></h5><ul class="feed" data-feed="net">${FEEDS.net.slice(0, 4).map(r => feedRow(r, 'net')).join('')}</ul></div></div>`;
  }
  return `<div class="hv-stage" data-io>${floats}<div class="hv-tilt">${win(d.url, inner)}</div></div>`;
}

/* ============ problem visuals ============ */
function pv(kind) {
  const dots = (hot, tags) => `<div class="dots">${Array.from({length:45}, (_, i) => `<i class="${hot.includes(i) ? 'hot' : ''}" style="--dl:${(i % 5) * .4}s"></i>`).join('')}</div>${tags.map(([t, l, tp]) => `<span class="tagf" style="left:${l}%;top:${tp}%">${t}</span>`).join('')}`;
  switch (kind) {
    case 'panels': return `<div class="pv pv-panels"><div class="mw" style="--c:#8C86FF">Casino<i></i></div><div class="mw" style="--c:#00D17F">Sportsbook<i></i></div><div class="mw" style="--c:#E86AAE">Poker<i></i><i style="width:45%"></i></div></div>`;
    case 'qbars': return `<div class="pv"><div class="qline"></div><div class="qb">${[[64, '#7069E0', 0], [74, '#00B46E', .4], [58, '#C35A95', .8], [66, '#C99A2E', 1.2]].map(([h, c, dl]) => `<span style="--h:${h}px;--c:${c};--dl:${dl}s"></span>`).join('')}</div></div>`;
    case 'setup': return `<div class="pv"><div class="setup"><header><span>New brand setup</span><em>0%</em></header><div class="sbar"><i></i></div><ul><li>Tracking domain</li><li>Partner sign-up flow</li><li>Commission plans</li><li>Reports &amp; dashboards</li></ul></div></div>`;
    case 'dots': return `<div class="pv">${dots([3, 12, 23, 29, 38], [['Proxy IP', 52, 14]])}</div>`;
    case 'dots2': return `<div class="pv">${dots([5, 11, 20, 31, 40], [['Proxy IP', 14, 38], ['Bot', 62, 62]])}</div>`;
    case 'tabs4': return `<div class="pv"><div class="tabs4"><nav>${['Tracking', 'Payouts', 'Partners', 'Sheets'].map((t, i) => `<span style="--dl:${i * 1.5}s">${t}</span>`).join('')}</nav><div class="tb"><i style="width:80%"></i><i style="width:60%"></i><i style="width:70%"></i><i style="width:40%"></i></div><p>4 tabs · 4 logins</p></div></div>`;
    case 'deposit': return `<div class="pv"><div class="dep"><svg viewBox="0 0 300 170" preserveAspectRatio="none" aria-hidden="true"><path d="M110 34 C170 34 170 85 205 85" stroke="#2E3F80" stroke-width="1.5" fill="none"/><path d="M118 85 L205 85" stroke="#2E3F80" stroke-width="1.5" fill="none"/><path d="M110 136 C170 136 170 85 205 85" stroke="#2E3F80" stroke-width="1.5" fill="none"/></svg><span class="pt" style="top:22px">Partner A · SEO</span><span class="pt" style="top:73px">Partner B · Streamer</span><span class="pt" style="top:124px">Partner C · Telegram</span><span class="dc">$250<small>first deposit</small></span><span class="q">?</span></div></div>`;
    case 'sheet': return `<div class="pv"><div class="sheet"><div><span>Partner</span><span>FTDs</span><span>CPA</span><span>Payout</span></div><div><span>Partner A</span><span>142</span><span>$40</span><span>$5,680</span></div><div><span>Partner B</span><span>96</span><span>$45</span><span class="err">#REF!</span></div><div><span>Partner C</span><span>61</span><span></span><span>$2,440</span></div><div><span>Total</span><span></span><span></span><span class="tot">$ ? ? ?</span></div></div></div>`;
    case 'fraud': return `<div class="pv"><div class="frl"><div><span>Sign-up · Germany</span><span class="chip g">real</span></div><div class="bad"><span>Sign-up · data-centre IP</span><span class="chip r">bot</span></div><div class="ab"><span>Bonus claim · same device ×4</span><span class="chip a">abuse</span></div></div></div>`;
    case 'rules': return `<div class="pv"><div class="rules"><header><span>Commission rules</span><span class="chip a">Edited by hand ×12</span></header><div><span>Tier 1 · Brand A</span><b>CPA $60</b></div><div><span>Tier 2 · Brand B</span><b>CPA $40 + 25% RS</b></div><div><span>Tier 3 · all brands</span><b>RS 30% of NGR</b></div></div></div>`;
    case 'matrix': return `<div class="pv"><div class="mx"><span></span><span>Brand A</span><span>Brand B</span><span>Brand C</span>${[1, 2, 3].map(t => `<span>Tier ${t}</span>` + [0, 1, 2].map(b => `<i style="--dl:${((t - 1) * 3 + b) * .45}s"></i>`).join('')).join('')}</div></div>`;
    case 'rec': return `<div class="pv"><div class="rec"><div>Your data<b>1,204</b>FTDs · September</div><em>≠</em><div>Operator report<b>1,176</b>FTDs · September</div><p>−28 FTDs to match by hand</p></div></div>`;
  }
  return '<div class="pv"></div>';
}

/* ============ sections ============ */
function secHero(d) {
  CI = 0;
  const h1 = d.h1.map((l, i) => `<span class="hl${i ? ' dim' : ''}">${chars(l)}</span>`).join(' ');
  return `<section class="hero" id="top">
  <div class="glow g1"></div><div class="glow g2"></div><div class="glow g3"></div>
  <canvas class="lines" data-lines aria-hidden="true"></canvas>
  <div class="wrap hero-in">
    <a class="award" data-h style="--d:100" href="https://affpapa.com/affpapa-awards-2024/client-satisfaction-of-the-year/" target="_blank" rel="noopener"><b>Winner</b><span>AffPapa iGaming Awards 2024</span>${ARROW}</a>
    <h1 class="h1">${h1}</h1>
    <p class="hero-sub" data-h style="--d:650">${d.sub}</p>
    <div class="hero-cta" data-h style="--d:800">${btn('Book a free demo')}${btn('Take the tour', {kind:'s', arrow:false, href:'https://vimeo.com/1152140502/62c8d0ebe9'})}</div>
    <div class="aud" data-h style="--d:950"><p>See Affnook for</p>${seg(d.key)}</div>
  </div>
  <div class="wrap hv">${dashboard(d)}</div>
</section>`;
}
function secLogos() {
  const L = ['Unicon365', 'Funexch', 'Sixty', 'Koretbet', 'MaxDuel', 'Lucky.co', 'SpinsAmerica', 'Bwinners', 'Hyperedge', 'Epicsweep', 'AuraeGaming', 'Winkart', 'PowerBlocks', 'TrueiGtech', 'Lynon', 'Bangla11'];
  const set = list => `<div class="mq-set">${list.map((n, i) => `<span class="lw s${i % 4}">${n}</span>`).join('')}</div>`;
  const A = [['AffPapa Awards', 'Winner · 2024', '#FFC600'], ['FinanceOnline', 'Rising Star · 2024', '#8C86FF'], ['Best Est. ROI', 'Winter 2024', '#E86AAE'], ['Easiest Setup', 'Winter 2024', '#00D17F'], ['Fastest Implementation', 'Winter 2024', '#8C86FF'], ['High Performer', 'Asia Pacific', '#FFC600']];
  return `<section class="logos"><p class="rv" data-io>Trusted by iGaming operators, brands and networks in 20+ countries</p>
  <div class="mq" data-mq="1" data-speed="0.6"><div class="mq-track">${set(L.slice(0, 10))}${set(L.slice(0, 10))}</div></div>
  <div class="mq" data-mq="-1" data-speed="0.45" style="margin-top:28px"><div class="mq-track">${set(L.slice(6))}${set(L.slice(6))}</div></div>
  <div class="wrap"><div class="awards" data-io>${A.map(([t, s, c], i) => `<div class="badge" style="--d:${i * 90}"><svg viewBox="0 0 34 34" aria-hidden="true"><path d="M17 2 30 9.5v15L17 32 4 24.5v-15Z" fill="none" stroke="${c}" stroke-width="1.5"/><path d="m12 17 3.4 3.4L22.5 13" fill="none" stroke="${c}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg><div><b>${t}</b><span>${s}</span></div></div>`).join('')}</div></div></section>`;
}
function secProblem(d) {
  const p = d.problem;
  return `<section class="sec" id="problem"><div class="wrap">
  <div class="shead"><div>${eyebrow('The problem')}${H(p.t, {mode:'scrub'})}</div><p class="lead rv" data-io>${p.intro}</p></div>
  <div class="pcards">${p.cards.map(([t, desc, v], i) => `<article class="pcard rv" data-io style="--d:${i * 90}" data-cursor-hover>${pv(v)}<small>0${i + 1}</small><h3>${t}</h3><p>${desc}</p></article>`).join('')}</div>
  </div></section>`;
}
function secStakes() {
  const S = [[83, '%', 'of iGaming operators were hit by fraud in the past year', 'Source: Sumsub'], [64, '%', 'year-on-year rise in iGaming fraud', 'Source: Sumsub, 2024'], [50, '%', 'of online gambling ad traffic can be fraudulent', 'Source: RockApp']];
  return `<section class="sec stakes"><div class="glow"></div><div class="wrap center">${eyebrow('What it costs')}${H(['Fraud isn’t a rounding error.', 'It’s a line item.'])}
  <div class="stats">${S.map(([v, s, t, src], i) => `<div class="stat rv" data-io style="--d:${i * 120}"><div class="rule"></div><b>${cnt('', v, s)}</b><p>${t}</p><small>${src}</small></div>`).join('')}</div>
  <p class="fine rv" data-io>Third-party figures, as cited in Affnook’s 2026 Tech Playbook for iGaming affiliate networks.</p></div></section>`;
}
const PROMISES = [['Dedicated CSM', 'A named success manager from day one, with weekly check-ins.', '<path pathLength="1" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM5 20a7 7 0 0 1 14 0"/>', C.v, 'rgba(140,134,255,.14)'], ['24/7 support', 'Email, chat, video or phone. Every request gets the same priority.', '<path pathLength="1" d="M4 15v-3a8 8 0 0 1 16 0v3M4 14h3v5H5a1 1 0 0 1-1-1v-4Zm16 0h-3v5h2a1 1 0 0 0 1-1v-4Z"/>', C.g, 'rgba(0,209,127,.14)'], ['Anti-fraud built in', 'Bot, proxy and data-centre traffic blocked at no extra cost.', '<path pathLength="1" d="M12 3 5 6v6c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6l-7-3Z"/><path pathLength="1" d="m9 12 2 2 4-4"/>', C.p, 'rgba(232,106,174,.14)'], ['Features on request', 'Need something that isn’t there yet? Tell your CSM and our engineers build it.', '<path pathLength="1" d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>', C.a, 'rgba(255,198,0,.14)']];
function secTurn(d) {
  const t = d.turn;
  return `<section class="sec turn" id="why"><div class="glow"></div><div class="wrap">
  <div class="turn-top"><div>${eyebrow('Where Affnook comes in')}${H([t.t], {mode:'scrub'})}<p class="lead rv" data-io>${t.body}</p><div class="rv" data-io>${btn(t.btn, {kind:'s', href:'https://affnook.com/why-choose-affnook'})}</div></div>
  <div class="chatv" data-io data-run="chat"><div class="csm rv"><span class="av">CS</span><div><b>Your customer success manager</b><span>Named from day one · weekly check-ins</span><br><span class="chip g" style="margin-top:6px"><i style="width:6px;height:6px;border-radius:50%;background:currentColor"></i>Online</span></div></div>
    <div class="bub you"><small>You</small>${t.q}</div><div class="typing"><i></i><i></i><i></i></div><div class="bub aff"><small>Affnook</small>${t.a}</div>
    <div class="uptime rv" style="--d:400"><span>Platform uptime</span><b>${cnt('', 99.9, '%', 1)}</b><div class="ubars">${Array.from({length:36}, (_, i) => `<i class="${i === 23 ? 'w' : ''}" style="--d:${i * 22}"></i>`).join('')}</div></div>
    <p style="margin:0;color:var(--mist);font-size:12px">Sample conversation</p></div></div>
  <div class="promises">${PROMISES.map(([h, p, path, c, bg], i) => `<div class="prom rv" data-io style="--d:${i * 100}"><div class="ic" style="--c:${c};--bgc:${bg}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg></div><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>
  <div class="assure rv" data-io>${[['99.9% uptime', C.g], ['GDPR & CCPA compliant', C.v], ['100+ two-way integrations', C.p], ['Data refreshed every minute', C.a]].map(([t, c]) => `<span style="--c:${c}">${t}</span>`).join('')}</div>
  </div></section>`;
}
function secMcp() {
  const prompts = ['What were my top 5 affiliates by NGR this month?', 'Which campaigns converted best yesterday?', 'What payouts are due this week, and to whom?'];
  return `<section class="sec mcp" id="mcp"><div class="glow"></div><div class="wrap mcp-grid">
  <div><span class="newtag rv" data-io><b>New</b>Affnook MCP · AI assistant</span>
  ${H(['Your Affnook Data,', 'Now in Your AI Assistant'])}
  <p class="lead rv" data-io>Connect Affnook MCP with Claude and turn your affiliate data into instant answers. Simply ask about performance, conversions, revenue, payouts, or campaigns, and get the insights you need without digging through reports.</p>
  <div class="mcp-cta rv" data-io>${btn('Explore Affnook MCP', {href:'#mcp', ext:false})}<span class="works"><i></i>Works with Claude</span></div>
  <div class="try rv" data-io><p>Try asking</p><div>${prompts.map((p, i) => `<button class="pchip" data-prompt="${i}"><span>↗</span>${p}</button>`).join('')}</div></div></div>
  <div class="rv" data-io style="--d:150"><div class="aiw" data-io data-run="mcp">
    <div class="aiw-bar"><div><i></i><i></i><i></i>&nbsp;AI assistant</div><span class="chip g"><i style="width:6px;height:6px;border-radius:50%;background:currentColor"></i>Affnook MCP connected</span></div>
    <div class="conv"><div class="ub"><span class="ut"></span><span class="caret"></span></div>
      <span class="toolc"><i></i><span class="tct">Queried Affnook MCP · affiliate performance, 1–7 Oct</span></span>
      <div class="ans"><p class="a1">Here are your top affiliates by revenue for 1–7 Oct. SlotScout leads, up 18% on the week before.</p>
      <div class="atbl">${[['SlotScout', '€48.2k', 100, '+18%', C.g], ['BetWise Media', '€36.9k', 77, '+6%', C.v], ['ReelTips', '€21.4k', 44, '−3%', C.v]].map(([n, v, w, dl, c], i) => `<div class="arow"><b>${n}</b><div class="trk"><i style="--w:${w}%;--c:${c};--d:${i * 160}"></i></div><b class="num" style="text-align:right">${v}</b><em style="color:${dl.startsWith('+') ? 'var(--green)' : 'var(--red)'}">${dl}</em></div>`).join('')}</div>
      <p class="dimp">Want me to check which of these have payouts due this week?</p></div></div>
    <div class="ainp"><span class="aip">Ask about performance, payouts, campaigns…</span><button aria-label="Send">↑</button></div>
  </div><p class="capt">Sample conversation and data.</p></div>
  </div></section>`;
}
function baSlider(after) {
  return `<div class="ba" data-ba data-cursor-label="Drag"><div class="ba-side ba-before"><span class="ba-lab">Before</span><div class="sheets">${['NGR_casino.xlsx', 'affiliates_v4.csv', 'payouts_sep.xlsx', 'fraud_ips.txt'].map((n, i) => `<div style="--r:${[-3, 2, 4, -2][i]}deg">${n}<i></i><i style="width:60%"></i><i style="width:80%"></i></div>`).join('')}</div></div>
  <div class="ba-side ba-after"><span class="ba-lab">After</span><div class="mini"><small>${after[0]}</small><b>${after[1]}</b><div class="mb">${[30, 38, 34, 48, 56, 62, 74, 92].map(h => `<i style="--h:${h}%"></i>`).join('')}</div></div></div>
  <div class="ba-handle"></div><div class="ba-knob" aria-hidden="true"><svg width="20" height="12" viewBox="0 0 20 12"><path d="M6 1 1 6l5 5M14 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>`;
}
function secProof(d) {
  const cases = d.proof.cases.map(k => CASES[k]);
  return `<section class="proof-pin" id="proof" data-hpin><div class="proof-sticky">
  <div class="wrap"><div class="proof-head"><div>${eyebrow('Proof')}${H([d.proof.t])}</div><div class="proof-prog"><span class="pp-n">01</span><div><i></i></div><span>0${cases.length}</span></div></div></div>
  <div class="ptrack">${cases.map(c => `<article class="case" data-io><div><span class="tagp"><i></i>${c.tag}</span><h3>${c.name}</h3><p>${c.story}</p><div class="cmet${c.m.length === 1 ? ' one' : ''}">${c.m.map(([p, v, s, dd, l]) => `<div><b>${cnt(p, v, s, dd)}</b><span>${l}</span></div>`).join('')}</div><a class="link" href="${c.url}" target="_blank" rel="noopener">${c.link}${ARROW}</a></div>${baSlider(c.after)}</article>`).join('')}
  <div class="case-next"><h3>Your brand could be the next story.</h3>${btn('Book a free demo')}</div></div>
  </div></section>`;
}
function secHow(d) {
  const h = d.how;
  const opt = toPts([20, 24, 22, 30, 34, 33, 42, 48, 55, 64], 300, 130, 70);
  const panels = [
    `<h4>Book a free demo</h4><p>Pick a time that suits you · 30 minutes</p><div class="cal">${['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(x => `<span style="background:none">${x}</span>`).join('')}${Array.from({length:21}, (_, i) => `<span class="${i === 10 ? 'pick' : [3, 4, 8, 9, 11, 15, 16, 17].includes(i) ? 'av2' : ''}">${i + 6}</span>`).join('')}</div><div class="slot"><div><b>Thu, Oct 16 · 10:30</b><span>Free guided demo with an Affnook expert</span></div><span class="chip g">Confirmed</span></div>`,
    `<h4>Onboarding</h4><p>Your CSM sets this up with you</p><ul class="chk">${h.check.map((c, i) => `<li><span><i style="--d:${300 + i * 350}"></i>${c}</span><span class="chip ${i < 3 ? 'g' : 'v'}">${i < 3 ? 'Done' : 'In progress'}</span></li>`).join('')}</ul>`,
    `<h4>Migration</h4><p>From your previous platform to Affnook</p><div class="mchips"><span class="chip v">API</span><span class="chip">OAuth</span><span class="chip">CSV</span><span class="chip">FTP</span></div><div class="mig">${[['Affiliates', '4,812 records', 100, 'Done', 'g', C.g], ['Players', '1.9M records', 100, 'Done', 'g', C.g], ['Transactions', '38.2M records', 86, '86%', 'v', C.v], ['Commission plans', 'queued', 0, 'Queued', '', C.v]].map(([n, s, w, st, cc, c], i) => `<div><span><b>${n}</b><small>${s}</small></span><div class="trk"><i style="--w:${w}%;--c:${c};--d:${200 + i * 250}"></i></div><span class="chip ${cc}">${st}</span></div>`).join('')}</div><span class="okline">${CHECK}0 rows lost · 500TB migrated to Affnook so far</span>`,
    `<h4>Optimise &amp; scale</h4><p>Tune it as you grow</p><div class="opt"><div class="dcard"><div class="dcard-h"><b>NGR · last 10 weeks</b><span class="chip g">+220%</span></div><svg viewBox="0 0 300 140" aria-hidden="true"><path d="${smooth(opt)} L300,140 L0,140 Z" fill="rgba(0,209,127,.12)"/><path d="${smooth(opt)}" fill="none" stroke="#00D17F" stroke-width="2.4"/></svg></div><div class="tg">${['Fraud rules', 'Weekly payouts', 'Custom dashboard'].map((t, i) => `<div><span>${t}</span><i class="toggle" style="--d:${300 + i * 250}"></i></div>`).join('')}</div></div>`
  ];
  return `<section class="how-pin" id="how" data-steps><div class="how-sticky"><div class="wrap">
  ${eyebrow('How it works')}${H([h.t])}
  <div class="how-grid"><div class="steps"><span class="fillv"></span>${STEPS_T.map((t, i) => `<button class="step${i ? '' : ' on'}" data-step="${i}"><span class="n">0${i + 1}</span><span><b>${t}</b><p>${h.steps[i]}</p></span></button>`).join('')}</div>
  <div class="stage rv" data-io>${win('app.affnook.com/onboarding', '')}${panels.map((p, i) => `<div class="panel${i ? '' : ' on'}" data-panel="${i}">${p}</div>`).join('')}</div></div>
  </div></div></section>`;
}
function featVis(v) {
  if (v[0] === 'table') return `<div class="ftbl"><table><thead><tr>${v[1].cols.map(c => `<th>${c}</th>`).join('')}</tr></thead><tbody>${v[1].rows.map((r, i) => `<tr style="--d:${i * 80}"><td><i style="--c:${r[5]}"></i>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${spark(r[4], r[5])}</td></tr>`).join('')}</tbody></table></div>`;
  if (v[0] === 'log') return `<div class="flog">${v[1].map(([t, s, st, c], i) => `<div style="--d:${i * 110}"><span><b>${t}</b><span>${s}</span></span><span class="chip ${c}">${st}</span></div>`).join('')}</div>`;
  if (v[0] === 'invoice') return `<div class="inv"><header><b>Invoice INV-1042</b><span class="chip a">Scheduled · Oct 1</span></header><div class="kv"><span>Partner</span><b>Partner #2231</b><span>Period</span><b>Sep 1 – Sep 30, 2026</b><span>CPA · 142 FTDs × $40</span><b>$5,680.00</b><span>Rev share · 25% of NGR</span><b>$3,120.00</b><span>Currency</span><b>USD · 1 of 50+</b></div><div class="tot"><span style="color:var(--mist)">Total due</span><b>$8,800.00</b></div></div>`;
  const pts = w => toPts(w, 420, 200, 140, 10);
  const L = [[20, 38, 52, 70, 92, 118], [18, 30, 38, 46, 54, 60], [16, 22, 26, 29, 31, 33]];
  return `<div class="ltv ftbl" style="padding:20px"><div class="legend" style="margin-bottom:14px">${[['Partner A · $118', '#00D17F'], ['Partner B · $60', '#8C86FF'], ['Partner C · $33', '#E86AAE']].map(([t, c]) => `<span><i style="--c:${c}"></i>${t}</span>`).join('')}</div><svg viewBox="0 0 420 200" role="img" aria-label="Player LTV by partner over 90 days">${[50, 100, 150].map(y => `<line x1="0" x2="420" y1="${y}" y2="${y}" stroke="#1D2B5F" stroke-dasharray="3 5"/>`).join('')}${L.map((l, i) => `<path d="${smooth(pts(l))}" fill="none" stroke="${['#00D17F', '#8C86FF', '#E86AAE'][i]}" stroke-width="2.4"/>`).join('')}</svg><div class="xl">${['D0', 'D7', 'D14', 'D30', 'D60', 'D90'].map(x => `<span>${x}</span>`).join('')}</div></div>`;
}
function secFeat(d) {
  const tabs = d.feat.tabs.map(k => FEATS[k]);
  return `<section class="sec feat" data-tabs><div class="wrap"><h3 class="rv" data-io>${d.feat.t}</h3>
  <div class="ftabs rv" data-io role="tablist">${tabs.map((f, i) => `<button class="ftab${i ? '' : ' on'}" data-tab="${i}" role="tab" aria-selected="${!i}">${f.tab}<span class="pr"></span></button>`).join('')}</div>
  <div class="fstage clip" data-io>${tabs.map((f, i) => `<div class="fp${i ? '' : ' on'}" data-fp="${i}" role="tabpanel"><div><h4>${f.t}</h4><p>${f.p}</p><ul class="ticks">${f.ticks.map(t => `<li>${t}</li>`).join('')}</ul></div>${featVis(f.vis)}</div>`).join('')}</div>
  </div></section>`;
}
function secCustom() {
  const f = [['GGR', C.v], ['−', 0], ['Bonuses', C.p], ['−', 0], ['Chargebacks', C.a], ['−', 0], ['Platform fees', C.w], ['=', 0], ['NGR', C.g]];
  return `<section class="sec" id="custom"><div class="wrap">${eyebrow('Make it yours')}${H(['Customize everything,', 'not just the colours.'])}
  <div class="bento">
   <div class="tile t-a rv" data-io data-tilt><h3>Your NGR formula</h3><p>Define what NGR and GGR mean for your business, per brand.</p><div class="formula">${f.map(([t, c], i) => c ? `<span class="fchip" style="--c:${c};--d:${i * 110};--ty:${i % 4 ? -50 : 40}px;--rot:${i % 3 ? 10 : -12}deg">${t}</span>` : `<span class="fop" style="--d:${i * 110}">${t}</span>`).join('')}</div><p class="fnote">Example formula · set per brand</p></div>
   <div class="tile t-b rv" data-io data-tilt style="--d:100"><h3>Your tracking domain</h3><p>White-label tracking links on your own domain.</p><div class="domain"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect x="3" y="7" width="10" height="7" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" stroke-width="1.5"/></svg><span data-type="track.yourcasino.com/click?aff=2231">track.yourcasino.com/click?aff=2231</span><i class="caret"></i></div><div class="dtags"><span class="chip g">SSL verified</span><span class="chip v">White-label</span></div></div>
   <div class="tile t-c rv" data-io data-tilt><h3>Your FX rates</h3><p>Set your own exchange rates for reporting and payouts.</p><div class="fx">${[['EUR → USD', 1.085], ['GBP → USD', 1.271], ['BRL → USD', .179]].map(([p, v]) => `<div><span>${p}</span><b data-fx="${v}">${v.toFixed(4)}</b><span class="chip a">Set by you</span></div>`).join('')}</div></div>
   <div class="tile t-d rv" data-io data-tilt style="--d:100"><h3>Your dashboard, your KPIs</h3><p>Put the numbers that define success for your business front and centre.</p><div class="kpiw">${[['NGR', '#8C86FF'], ['FTDs', '#00D17F'], ['Top affiliates', '#E86AAE']].map(([n, c], i) => `<div class="kw"><span>${n}</span><div class="bars">${[30, 42, 50, 64, 82].map((h, k) => `<i class="growy" style="--c:${c};--h:${h}%;--k:${k};--d:${i * 150 + k * 70}"></i>`).join('')}</div></div>`).join('')}<div class="kpop"><small>GGR by market</small><b>${cnt('$', 2.1, 'M', 1)}</b></div></div></div>
  </div></div></section>`;
}
function secTesti(d) {
  const tc = (k, size) => {
    const c = TCARDS[k];
    return `<article class="tc ${size} rv" data-io><div><div class="top"><span class="tagp" style="--c:${c.c}"><i></i>${c.tag}</span><small>${c.period}</small></div><h3>${c.name}</h3><div class="tmet" style="--c:${c.c}">${c.m.map(([p, v, s, dd, l]) => `<div><b>${cnt(p, v, s, dd)}</b><span>${l}</span></div>`).join('')}</div><p class="sum">${c.sum}</p></div><div class="tfoot" style="border-top-color:var(--line)"><a class="link" href="${c.url}" target="_blank" rel="noopener">Read the case study${ARROW}</a></div></article>`;
  };
  return `<section class="sec" id="testimonials"><div class="wrap">
  <div class="award-row"><div>${eyebrow('Testimonials')}${H(['Don’t take our word for it.', 'Take theirs.'])}</div>
  <div class="awardc rv" data-io><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9Z" fill="currentColor"/></svg></span><div><b>Client Satisfaction of the Year</b><span>Winner · AffPapa iGaming Awards 2024</span></div></div></div>
  <div class="tgrid">
    <article class="tc feat rv" data-io><div><div class="top"><span class="tagp" style="--c:var(--green)"><i></i>Industry partner · AffPapa</span><span class="qmark" aria-hidden="true">“</span></div>
    <blockquote class="quote" data-anim="scrub" data-io>${words('We’ve been working closely with Affnook for over a year now and it’s been nothing but a smooth sailing. Great communication, clear vision and dedication is something that definitely sets Affnook apart. Excited to see what future collaborative efforts we have in store for us!')}</blockquote></div>
    <div class="tfoot"><div class="who"><span class="av">YA</span><div><b>Yeva Avagyan</b><span>Head of Commercial · AffPapa</span></div></div><div class="tres"><b>1+ year</b><span>working together</span></div></div></article>
  </div></div></section>`;
}
function secObj() {
  const O = [['Migration', '“Switching feels risky.”', ['500TB migrated to Affnook with zero data loss', 'Move data by API, OAuth, CSV or FTP', 'Your CSM runs the switch with you'], 'How migration works', 'https://affnook.com/seamless-migration/', C.g], ['Pricing', '“Will it cost more than we think?”', ['Billing starts when you go live', 'Pay for payout-triggering events, not clicks or wagers', 'No extra charge for data access'], 'See pricing', 'https://affnook.com/contact-sales/', C.v], ['Customization', '“Will it fit how we work?”', ['Custom NGR and GGR formulas', 'White-label domains and custom dashboards', 'Features built on request'], 'Explore customization', 'https://affnook.com/features-on-request/', C.a]];
  const cats = [...new Set(FAQ.map(f => f[0]))];
  return `<section class="sec" id="faq"><div class="wrap">${eyebrow('Still deciding?')}${H(['Fair questions.', 'Straight answers.'])}
  <div class="objs">${O.map(([tg, q, ticks, l, u, c], i) => `<article class="obj rv" data-io style="--c:${c};--d:${i * 100}"><span class="tagp">${tg}</span><h3>${q}</h3><ul class="ticks">${ticks.map(t => `<li>${t}</li>`).join('')}</ul><a class="link" href="${u}" target="_blank" rel="noopener">${l}${ARROW}</a></article>`).join('')}</div>
  <div class="faq"><div class="rv" data-io><h3>FAQ</h3><div class="fcats" role="tablist">${cats.map((c, i) => `<button class="fcat${i ? '' : ' on'}" data-cat="${c}">${c}</button>`).join('')}</div></div>
  <div class="acc rv" data-io>${FAQ.map(([c, q, a], i) => `<div class="qa${i === 0 ? ' open' : ''}" data-qcat="${c}"${c !== cats[0] ? ' hidden' : ''}><button aria-expanded="${i === 0}"><span>${q}</span><i class="pm" aria-hidden="true"></i></button><div class="ans2"><div><p>${a}</p></div></div></div>`).join('')}</div></div>
  </div></section>`;
}
function secRes() {
  const R = [['Blogs', 'iGaming Compliance Guide 2026: running a regulated business', 'https://affnook.com/blog', 'repeating-linear-gradient(45deg,rgba(140,134,255,.35) 0 2px,transparent 2px 22px)', '44px 44px', '440px 0', C.v], ['Guide', 'A step-by-step guide to auditing your affiliate program', 'https://affnook.com/guides', 'radial-gradient(circle,rgba(0,209,127,.55) 1.5px,transparent 2px)', '22px 22px', '0 440px', C.g], ['Industry report', 'Cookieless tracking in iGaming: attribution after cookies', 'https://affnook.com/industry-reports/', 'repeating-radial-gradient(circle at 30% 70%,rgba(232,106,174,.4) 0 1.5px,transparent 2px 26px)', '100% 100%', '200px 200px', C.p]];
  return `<section class="sec" id="resources"><div class="wrap"><div class="rhead"><div>${eyebrow('Resources')}${H(['Read before you decide.'])}</div><a class="link rv" data-io href="https://affnook.com/blog" target="_blank" rel="noopener" style="color:var(--paper)">All resources${ARROW}</a></div>
  <div class="rgrid">${R.map(([tg, t, u, pat, ps, pe, c], i) => `<a class="res rv" data-io style="--d:${i * 110}" href="${u}" target="_blank" rel="noopener" data-cursor-label="Read"><div class="art" style="--pat:${pat};--ps:${ps};--pe:${pe}"><span class="chip" style="color:${c}">${tg}</span></div><div class="body"><h3>${t}</h3><span class="link">Read${ARROW}</span></div></a>`).join('')}</div></div></section>`;
}
function secBigMq() {
  const star = '<svg class="star" viewBox="0 0 40 40" aria-hidden="true"><path d="M20 0v40M0 20h40M5.9 5.9l28.2 28.2M34.1 5.9 5.9 34.1" stroke="currentColor" stroke-width="3"/></svg>';
  const set = `<div class="mq-set"><span class="bm">Book a free demo</span>${star}<span class="bm o">Real-time reports</span>${star}<span class="bm v">Zero downtime</span>${star}<span class="bm o">24/7 support</span>${star}</div>`;
  return `<section class="bigmq" aria-hidden="true"><div class="mq" data-mq="1" data-speed="1.2" data-vel="1"><div class="mq-track">${set}${set}</div></div></section>`;
}
function secCta(d) {
  CI = 0;
  return `<section class="cta" id="cta" data-spot><div class="spot"></div><canvas class="lines" data-lines aria-hidden="true"></canvas><div class="wrap">
  <h2 class="h1" data-anim="chars" data-io>${d.cta.t.map((l, i) => `<span class="hl${i ? ' dim' : ''}">${chars(l)}</span>`).join(' ')}</h2>
  <p class="lead rv" data-io>${d.cta.sub}</p>
  <div class="hero-cta rv" data-io>${btn('Book a free demo')}${btn('Talk to sales', {kind:'s', arrow:false, href:'https://affnook.com/contact-sales/'})}</div>
  <div class="cchecks rv" data-io>${['Real-time reports in just 10 minutes', 'Unlimited customizations', '24/7 customer support'].map(t => `<span>${CHECK}${t}</span>`).join('')}</div>
  </div></section>`;
}
function secFoot() {
  const cols = [["Solutions", [["Operators", "https://affnook.com/igaming-affiliate-marketing-platform-for-operators"], ["Brands", "https://affnook.com/igaming-affiliate-marketing-platform-for-brands"], ["Affiliate networks", "https://affnook.com/igaming-affiliate-marketing-platform-for-affiliate-networks"]]], ["Platform", [["Live attribution", "https://affnook.com/affiliate-marketing-software/"], ["Fraud Shield", "https://affnook.com/"], ["Automated invoicing", "https://affnook.com/invoicing-automation/"], ["Commission bundling", "https://affnook.com/"], ["Migration", "https://affnook.com/seamless-migration/"], ["Integrations", "https://affnook.com/integrations/"]]], ["Resources", [["Blog", "https://affnook.com/blog"], ["Guides", "https://affnook.com/guides"], ["Industry reports", "https://affnook.com/industry-reports/"], ["Case studies", "https://affnook.com/success-stories-case-study"], ["Glossary", "https://affnook.com/glossary"], ["Compare us", "https://affnook.com/compare-us"]]], ["Company", [["Why Affnook", "https://affnook.com/why-choose-affnook"], ["About us", "https://affnook.com/about/"], ["Contact sales", "https://affnook.com/contact-sales/"], ["24/7 support", "https://affnook.com/24-7-support/"], ["Product updates", "https://affnook.com/product-updates"]]]], api = [["Admin API docs", "https://admin-api-docs.affnook.com/"], ["Affiliate API docs", "https://affiliate-api-docs.affnook.com/"]];
  const li = (h, [x, u], i) => h === 'Solutions' ? `<li><a href="#top" data-aud-link="${['operators', 'brands', 'networks'][i]}">${x}</a></li>` : `<li><a href="${u}" target="_blank" rel="noopener">${x}</a></li>`;
  return `<footer class="foot" data-foot><div class="wrap"><div class="fgrid"><div class="fbrand"><a class="logo" href="#top" aria-label="Affnook home">${logoSVG()}</a><p>The iGaming affiliate marketing platform for operators, brands and affiliate networks.</p><div class="fn-nl"><h4>Subscribe to our Newsletter</h4><form class="fn-form" novalidate><label class="sr" for="fnEmail">Work email</label><input id="fnEmail" type="email" name="email" placeholder="Your work email" autocomplete="email" required><button type="submit">Submit</button></form><div class="fn-msg" role="status" aria-live="polite"></div></div></div>
  ${cols.map(([h, l]) => `<div><h4>${h}</h4><ul>${l.map((x, i) => li(h, x, i)).join('')}</ul></div>`).join('')}
  <div class="fcol"><h4>API docs</h4><ul>${api.map((x, i) => li('API', x, i)).join('')}</ul><h4 class="fn-fh">Follow us</h4><nav class="fn-soc" aria-label="Affnook on social media"><a href="https://www.linkedin.com/company/affnook" target="_blank" rel="noopener" aria-label="Affnook on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-.95 1.84-1.95 3.79-1.95 4.05 0 4.8 2.53 4.8 5.83v5.62h-4v-4.98c0-1.19-.02-2.72-1.75-2.72-1.75 0-2.02 1.3-2.02 2.63v5.07h-4v-11Z"/></svg></a><a href="https://www.instagram.com/affnook/" target="_blank" rel="noopener" aria-label="Affnook on Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1ZM17.98 7.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3.6c2.73 0 3.06.01 4.14.06 2.77.13 4.06 1.44 4.19 4.19.05 1.08.06 1.4.06 4.15s-.01 3.06-.06 4.14c-.13 2.75-1.42 4.06-4.19 4.19-1.08.05-1.4.06-4.14.06s-3.07-.01-4.15-.06c-2.78-.13-4.06-1.45-4.19-4.19-.05-1.08-.06-1.4-.06-4.14s.01-3.07.06-4.15C3.79 5.1 5.08 3.79 7.85 3.66 8.93 3.61 9.26 3.6 12 3.6ZM12 2c-2.72 0-3.06.01-4.13.06C4.2 2.23 2.24 4.18 2.07 7.87 2.01 8.94 2 9.28 2 12s.01 3.06.07 4.13c.17 3.68 2.12 5.64 5.8 5.81 1.07.05 1.41.06 4.13.06s3.06-.01 4.13-.06c3.68-.17 5.64-2.12 5.8-5.81.06-1.07.07-1.41.07-4.13s-.01-3.06-.07-4.13C21.77 4.2 19.82 2.23 16.13 2.06 15.06 2.01 14.72 2 12 2Z"/></svg></a><a href="https://www.facebook.com/profile.php?id=61563616059791" target="_blank" rel="noopener" aria-label="Affnook on Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21.9v-7.4h2.5l.38-2.9H13.5V9.75c0-.84.24-1.41 1.44-1.41h1.53V5.75a20.6 20.6 0 0 0-2.23-.11c-2.21 0-3.72 1.35-3.72 3.82v2.14H8v2.9h2.52v7.4h2.98Z"/></svg></a><a href="https://www.youtube.com/@Affnook" target="_blank" rel="noopener" aria-label="Affnook on YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2C2 8.76 2 12 2 12s0 3.24.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.24 22 12 22 12s0-3.24-.42-4.81ZM10 15V9l5.2 3L10 15Z"/></svg></a></nav></div></div>
  <div class="fbig" aria-hidden="true">${logoSVG(true)}</div></div>
  <div class="flegal"><div class="wrap"><div>© 2026 Affnook. All rights reserved.<small>Affnook is a B2B SaaS platform. We do not provide gambling or betting services to consumers.</small></div><nav aria-label="Legal"><a href="https://affnook.com/billing-policy" target="_blank" rel="noopener">Billing policy</a><a href="https://affnook.com/privacy-policy" target="_blank" rel="noopener">Privacy policy</a><a href="https://affnook.com/terms-of-service" target="_blank" rel="noopener">Terms</a><a href="https://affnook.com/gdpr-ccpa-compliance" target="_blank" rel="noopener">GDPR · CCPA</a></nav></div></div></footer>`;
}
export function page(d) {
  return [secHero(d), secLogos(), secProblem(d), secStakes(), secTurn(d), secMcp(), secProof(d), secHow(d), secFeat(d), secCustom(), secTesti(d), secObj(), secRes(), secBigMq(), secCta(d), secFoot()].join('');
}
