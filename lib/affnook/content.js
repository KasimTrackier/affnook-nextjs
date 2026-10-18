// Affnook homepage content. Edit copy, numbers, links and case studies here.
// Three audience versions live in D: operators, brands, networks.

export const AUDS = ['operators', 'brands', 'networks'];
export const C = {v:'var(--violet-l)', g:'var(--green)', p:'var(--pink)', a:'var(--amber)', r:'var(--red)', w:'var(--paper)'};
export const AF = 'https://affnook.com';

// Navigation menus (Solutions / Platform / Resources)
export const NAV = {
  sol:[['operators', 'Run every casino, sportsbook and poker brand from one log-in.'], ['brands', 'Track partners, promo codes and deposits, and pay partners on time.'], ['networks', 'Tiered publishers, commission rules and fraud checks across brands.']],
  plat:[['Power insightful growth', [['Live attribution data', '/affiliate-marketing-software/'], ['Promo-level insights', '/promo-tracking/'], ['Lifetime value calculator', '/lifetime-value/'], ['Affiliate network amplifier', '/super-affiliate-program/']]], ['Streamline operations', [['Automated invoicing', '/invoicing-automation/'], ['Commission bundling', '/custom-affiliate-payout-structures-for-groups/'], ['Migration made easy', '/seamless-migration/'], ['Made-to-order solutions', '/features-on-request/']]], ['Engineered for trust', [['Anytime assistance', '/24-7-support/'], ['Global fraud shield', '/affiliate-marketing-fraud-prevention/'], ['Integrations', '/integrations/']]]],
  res:[['Learn', [['Blogs', '/blog'], ['Guides', '/guides'], ['Industry reports', '/industry-reports/'], ['Whitepapers', '/whitepapers/'], ['Glossary', '/glossary/']]], ['Explore', [['Case studies', '/success-stories-case-study'], ['Ask Affnook', '/ask-affnook/'], ['News & events', '/news-events'], ['Checklists', '/igaming-checklist/'], ['Product updates', '/product-updates'], ['Compare us', '/compare-us']]]]
};

export const STEPS_T = ['Book a free demo', 'Sign up & onboard', 'Migrate, integrate, launch', 'Set up, optimise & scale'];
export const D = {
  operators: {
    key:'operators', label:'Operators',
    h1:['All your brands.', 'One control panel.'],
    sub:'Run every casino, sportsbook and poker brand from one login. See which brand, market and affiliate is driving NGR, live.',
    url:'app.affnook.com/dashboard', dash:'ops',
    problem:{t:['Your brands keep growing.', 'Your view of them doesn’t.'], intro:'Running several casinos, sportsbooks and poker rooms usually breaks down in the same four places.', cards:[
      ['A panel per brand', 'Casino, sportsbook and poker each report in their own tool, so no one sees the whole portfolio.', 'panels'],
      ['No clear winner', 'It’s hard to tell which brand, market or affiliate is really driving NGR.', 'qbars'],
      ['Every launch starts from zero', 'A new brand means a new setup, new partner onboarding and new reports.', 'setup'],
      ['Fraud slips between tools', 'Bots, proxy IPs and fake sign-ups hide where your data doesn’t connect.', 'dots']]},
    turn:{t:'Five brands shouldn’t mean five logins.', body:'Affnook puts every brand, affiliate and payout in one control panel. Then it gives you a team that stays with you long after go-live.', btn:'Why operators choose Affnook', q:'Can we add a custom NGR formula for our poker brand?', a:'Yes. It’s logged as a feature request, and your CSM will confirm the timeline with you.'},
    proof:{t:'Operators who made the switch.', cases:['uni', 'gg', 'sb']},
    how:{t:'From demo to live in four steps.', steps:['Walk through your brands and workflows with an Affnook expert.', 'Your CSM sets up brands, tracking domains and partner groups with you.', 'Move data by API, OAuth, CSV or FTP, connect your platform provider, and go live.', 'Tune commissions, dashboards and fraud rules as your portfolio grows.'], check:['Brands added', 'Tracking domains', 'Partner groups', 'Commission plans']},
    feat:{t:'Everything an operator needs, in one platform', tabs:['reporting', 'attribution', 'fraud', 'invoicing', 'tiered', 'api']},
    testi:{side:'uni', row:['gg', 'sb', 'cc']},
    cta:{t:['Bring every brand', 'into view.'], sub:'See Affnook with your own brands and data in a free, guided demo.'}
  },
  brands: {
    key:'brands', label:'Brands',
    h1:['Know which partners', 'bring players who pay.'],
    sub:'Track every affiliate, promo code and deposit in one dashboard. Pay partners on time, block fake traffic, and put budget where the real players come from.',
    url:'app.affnook.com/reports/partners', dash:'brands',
    problem:{t:['Your partners drive growth.', 'You can’t see which ones.'], intro:'Most iGaming brands lose sight of their partners in the same four places.', cards:[
      ['Dashboard hopping', 'Tracking, partner chats, payouts and reports sit in different tools. Every answer needs four logins.', 'tabs4'],
      ['Deposits without a source', 'Clicks and sign-ups are easy to count. Tracing a deposit back to its partner isn’t.', 'deposit'],
      ['Payouts by spreadsheet', 'Commission maths by hand means late or wrong payouts, and wrong payouts sour your best partners.', 'sheet'],
      ['Paying for bots', 'Fake sign-ups, data-centre traffic and bonus abuse look like growth until the invoice arrives.', 'fraud']]},
    turn:{t:'Grow the brand. Skip the spreadsheets.', body:'Affnook puts every partner, promo code and payout in one dashboard. Then it gives you a team that stays with you long after go-live.', btn:'Why brands choose Affnook', q:'Can we pay our top partners weekly instead of monthly?', a:'Yes. Put them in their own affiliate group with a weekly payout schedule. Invoices go out automatically.'},
    proof:{t:'Brands that grew with Affnook.', cases:['gg', 'sb', 'uni']},
    how:{t:'From demo to live in four steps.', steps:['Walk through your partners, promo codes and payouts with an Affnook expert.', 'Your CSM sets up tracking links, promo codes and partner groups with you.', 'Move data by API, OAuth, CSV or FTP, connect your platform provider, and go live.', 'Tune commissions, payout schedules and fraud rules as your program grows.'], check:['Tracking links', 'Promo codes', 'Partner groups', 'Payout schedules']},
    feat:{t:'Everything a brand needs, in one platform', tabs:['attribution', 'ltv', 'fraud', 'invoicing', 'tiered', 'api']},
    testi:{side:'gg', row:['uni', 'sb', 'cc']},
    cta:{t:['See which partners', 'really pay off.'], sub:'See Affnook with your own partners and data in a free, guided demo.'}
  },
  networks: {
    key:'networks', label:'Affiliate networks',
    h1:['Scale the network.', 'Not the busywork.'],
    sub:'Manage multi-tier publishers across every brand partner, catch fraud in real time, and let commission rules and payouts run themselves.',
    url:'app.affnook.com/network', dash:'net',
    problem:{t:['Your network keeps growing.', 'Your ops team can’t.'], intro:'More brands and more publishers should mean more revenue. Without the right platform, it mostly means more manual work in four places.', cards:[
      ['Commission rules by hand', 'Tiered, hybrid and brand-specific deals need manual maths every payout cycle.', 'rules'],
      ['Brands × tiers × publishers', 'Every new brand multiplies the deals, links and reports your team has to track.', 'matrix'],
      ['Reconciliation that never ends', 'Matching your conversions to every operator’s report, by hand, every month.', 'rec'],
      ['Fraud across every campaign', 'Bots, IP intrusions and device fraud spread across brands before anyone spots them.', 'dots2']]},
    turn:{t:'Payouts shouldn’t need a whole team.', body:'Affnook runs commission rules, invoices and fraud checks across every brand and publisher. Then it gives you a team that stays with you long after go-live.', btn:'Why networks choose Affnook', q:'Can Tier 2 publishers get CPA plus 25% rev share on one brand only?', a:'Yes. Set a hybrid plan for that publisher group on that brand, and it’s applied automatically.'},
    proof:{t:'Built for networks at scale.', cases:['plat', 'uni', 'gg']},
    how:{t:'How it all comes together.', steps:['Walk through your brands, publisher tiers and payout rules with an Affnook expert.', 'Your CSM sets up brands, publisher groups and tracking domains with you.', 'Move data by API, OAuth, CSV or FTP, connect your platform provider, and go live.', 'Tune commission rules, payout schedules and fraud checks as the network grows.'], check:['Brand partners', 'Publisher groups', 'Tracking domains', 'Commission rules']},
    feat:{t:'Everything a network needs, in one platform', tabs:['tiered', 'bundling', 'fraud', 'invoicing', 'attribution', 'api']},
    testi:{side:'uni', row:['gg', 'sb', 'cc']},
    cta:{t:['Grow partnerships,', 'not paperwork.'], sub:'See Affnook with your brands and publishers in a free, guided demo.'}
  }
};

export const CASES = {
  uni:{tag:'Online casino operator · 9+ brands', name:'Unicon365', story:'Unicon365 moved affiliate management for 9+ casino brands onto one Affnook dashboard in April 2024, with tracking, fraud checks and payouts in one place.', m:[['',200,'%',0,'NGR growth, Apr–Jul 2024'], ['',30000,'+',0,'new players acquired'], ['',13,'M+',0,'player activities tracked']], after:['All 9 brands · NGR', '+200%'], link:'Read the full story', url:'https://affnook.com/customer-success-story-online-casino-brand/'},
  gg:{tag:'Virtual casino · global', name:'Gamegram', story:'Gamegram moved its whole affiliate program to Affnook to get fraud traffic under control while it scaled. After four months:', m:[['20–',25,'%',0,'monthly NGR/GGR growth'], ['20–',30,'%',0,'more active players'], ['12–',15,'%',0,'higher player LTV']], after:['Monthly NGR/GGR', '+20–25%'], link:'Read the full story', url:'https://affnook.com/customer-success-story-gamegram/'},
  sb:{tag:'Crypto-first casino · new launch', name:'Slot Bunny', story:'Slot Bunny launched its affiliate program on Affnook from day one, with tracking, reporting and fraud monitoring built in, and grew without adding to the team.', m:[['',3,'X',0,'scale without adding operational cost']], after:['Affiliate program', '3X'], link:'Read the full story', url:'https://affnook.com/customer-success-story-slot-bunny/'},
  plat:{tag:'Platform · all clients', name:'What Affnook runs today', story:'Networks need infrastructure that doesn’t blink. Here’s what Affnook already handles for iGaming clients in 20+ countries.', m:[['',500,'TB',0,'data migrated with zero loss'], ['',99.9,'%',1,'platform uptime'], ['',100,'+',0,'two-way integrations']], after:['Commissions due · Oct 1', '$412K'], link:'See why networks choose Affnook', url:'https://affnook.com/why-choose-affnook'}
};
export const TCARDS = {
  uni:{name:'Unicon365', tag:'Online casino · 9+ brands', c:C.g, period:'Apr–Jul 2024', m:[['',200,'%',0,'growth in NGR'], ['',30000,'+',0,'new players acquired'], ['',13,'M+',0,'player activities tracked']], sum:'Runs affiliate programs for 9+ iGaming products from one Affnook dashboard, with real-time reporting and fraud checks before payouts.', url:CASES.uni.url},
  gg:{name:'Gamegram', tag:'Virtual casino · global', c:C.v, period:'After 4 months', m:[['20–',25,'%',0,'monthly NGR & GGR growth'], ['20–',30,'%',0,'rise in active players'], ['12–',15,'%',0,'boost in player LTV']], sum:'Moved its entire affiliate management to Affnook to get fraud traffic under control, and rated the UI above legacy tools.', url:CASES.gg.url},
  sb:{name:'Slot Bunny', tag:'Crypto casino · new launch', c:C.a, period:'From day one', m:[['',3,'X',0,'scale with no added operational cost']], sum:'Launched its affiliate program on Affnook, with tracking, reporting and fraud monitoring built in from the start.', url:CASES.sb.url},
  cc:{name:'Crypto casino operator', tag:'Multi-chain casino', c:C.g, period:'Since Q1 2024', m:[['',100,'+',0,'partners in its affiliate program']], sum:'Built its partner program on Affnook at launch, adding 10+ athletes and crypto influencers as brand ambassadors.', url:'https://affnook.com/affnook-online-casino-operator-case-study/'}
};

export const T_PARTNERS = {cols:['Partner', 'NGR', 'FTDs', 'Conv.', 'Trend'], rows:[['Partner A · SEO', '$57.2K', '604', '4.8%', 'up', C.v], ['Partner B · Streamer', '$38.4K', '422', '4.1%', 'up', C.g], ['Promo WELCOME50', '$18.6K', '198', '3.2%', 'flat', C.p], ['Partner C · Telegram', '$9.8K', '158', '2.7%', 'down', C.a], ['Partner D · PPC', '$4.1K', '72', '2.1%', 'down', C.w]]};
export const T_TIERS = {cols:['Group', 'Payout', 'Publishers', 'Model', 'Trend'], rows:[['Tier 1 · Brand A', '$60 CPA', '42', 'CPA', 'up', C.v], ['Tier 2 · Brand B', '$40 + 25%', '318', 'Hybrid', 'up', C.g], ['Tier 3 · all brands', '30% NGR', '888', 'Rev share', 'flat', C.p], ['Streamers · Brand C', '$45 CPA', '56', 'CPA', 'up', C.a], ['Sub-affiliates', '5% of tier', '212', 'Referral', 'flat', C.w]]};
export const FEATS = {
  reporting:{tab:'Multi-brand reporting', t:'See every brand side by side', p:'Compare NGR, GGR, FTDs and conversion across casinos, sportsbooks and poker rooms, then drill into any market or affiliate.', ticks:['One login for every brand and region', 'Reports by NGR, GGR, FTD and wager amount', 'Spot top-performing brands and affiliates fast'], vis:['table', {cols:['Brand', 'NGR', 'FTDs', 'Conv.', 'Trend'], rows:[['Casino', '$572K', '1,604', '4.8%', 'up', C.v], ['Sportsbook', '$384K', '1,122', '4.1%', 'up', C.g], ['Poker', '$186K', '498', '3.2%', 'flat', C.p], ['Live casino', '$98K', '258', '2.7%', 'down', C.a], ['Bingo', '$41K', '112', '2.1%', 'down', C.w]]}]},
  attribution:{tab:'Attribution tracking', t:'Trace every deposit to its partner', p:'Server-to-server and pixel tracking tie every sign-up, first deposit and repeat deposit to the partner, link or promo code behind it.', ticks:['A unique tracking link or promo code per partner', 'Reports by NGR, GGR, FTDs and deposits', 'Data refreshed every minute'], vis:['table', T_PARTNERS]},
  fraud:{tab:'Fraud Shield', t:'Pay for players, not bots', p:'A built-in fraud shield checks every click and conversion before it reaches a payout, at no extra cost.', ticks:['Block data-centre traffic', 'Blacklist suspicious IPs and keep repeat offenders out', 'Filter conversions from unknown devices'], vis:['log', [['Click rejected', 'Proxy IP · 185.220.x.x', 'blocked', 'r'], ['Conversion held', 'Data-centre IP · AS14061', 'review', 'a'], ['Sign-up flagged', 'Same device ×4 · bonus claim', 'blocked', 'r'], ['FTD approved', 'Partner #2231 · DE', 'paid', 'g']]]},
  invoicing:{tab:'Automated invoicing', t:'Invoices that send themselves', p:'Generate invoices at a set frequency and threshold, in 50+ currencies, and pay through pre-integrated gateways or your own.', ticks:['Recurring invoices on your schedule', '50+ currencies supported', 'Custom invoice settings per affiliate'], vis:['invoice']},
  tiered:{tab:'Tiered payouts', t:'Commission rules that apply themselves', p:'Set CPA, rev share or hybrid plans per publisher group and brand. Affnook applies them to every conversion and schedules the payouts.', ticks:['Tiered publisher groups with their own payout plans', 'Negative carryover on or off, per partner', 'Auto payouts on your schedule, in 50+ currencies'], vis:['table', T_TIERS]},
  api:{tab:'Two-way API', t:'Push and pull data in real time', p:'Connect your platform provider and the rest of your stack with two-way APIs, so every player action flows into your reports within minutes.', ticks:['Platform provider integrations', '100+ two-way integrations', 'Admin and affiliate API docs'], vis:['log', [['GET /reports/affiliates', '200 OK · 84 ms', 'live', 'g'], ['POST /postback/ftd', '200 OK · 112 ms', 'live', 'g'], ['GET /players/ltv', '200 OK · 96 ms', 'live', 'g'], ['POST /invoices/run', '202 Accepted', 'queued', 'v']]]},
  ltv:{tab:'Player LTV', t:'See what each partner’s players are worth', p:'Lifetime value by partner, cohort and campaign, so you pay more for partners whose players stay and deposit again.', ticks:['LTV by sign-up week and partner', 'Repeat deposits tracked to the source', 'Spot partners who send one-time players'], vis:['ltv']},
  bundling:{tab:'Commission bundling', t:'One payout for many deals', p:'Bundle commissions across brands and affiliate groups, so a partner gets one invoice and one payout for every deal they run.', ticks:['Group affiliates across brands', 'One invoice per partner per cycle', 'Rules applied per group automatically'], vis:['table', {cols:['Bundle', 'Brands', 'Partners', 'Cycle', 'Trend'], rows:[['Streamers · all brands', '4', '56', 'Weekly', 'up', C.a], ['SEO partners', '3', '212', 'Monthly', 'up', C.v], ['Tier 1 · Casino + Poker', '2', '42', 'Bi-weekly', 'flat', C.g], ['Telegram groups', '5', '138', 'Monthly', 'up', C.p]]}]}
};
export const FAQ = [
  ['General', 'Who is Affnook for?', 'iGaming operators, brands and affiliate networks that want affiliate tracking, partner management, payouts and fraud prevention in one platform.'],
  ['General', 'Can Affnook work with our existing tech stack?', 'Yes. Affnook connects to your platform provider, payment gateways and marketing tools through 100+ two-way integrations, and the API refreshes in real time, so reports never wait on a sync.'],
  ['General', 'Is there a free trial?', 'Start with a free, guided demo. After it, you can take a trial of the platform before you buy.'],
  ['General', 'Can we request features that aren’t there yet?', 'Yes. Tell your customer success manager what you need, and our engineers build it with a fast turnaround.'],
  ['Fraud & data', 'How does Affnook stop affiliate fraud?', 'A built-in fraud shield blocks data-centre traffic, blacklists suspicious IPs, keeps repeat offenders out and filters conversions from unknown devices, so you pay only for real players.'],
  ['Fraud & data', 'Is Affnook GDPR and CCPA compliant?', 'Yes. Affnook follows GDPR and CCPA requirements for data privacy and security.'],
  ['Fraud & data', 'How fresh is the data?', 'Reports refresh every minute, and your first real-time reports are ready in about 10 minutes.']
];
