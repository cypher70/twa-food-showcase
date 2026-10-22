const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

if (!tg || !tg.initData) {
  document.getElementById('browser-note').hidden = false;
}

// TEMP-DEBUG: remove together with <pre id="debug"> in index.html
document.getElementById('debug').textContent = [
  'typeof window.Telegram: ' + typeof window.Telegram,
  'tg.platform: ' + tg?.platform,
  'tg.version: ' + tg?.version,
  'tg.initData length: ' + tg?.initData?.length,
  'tg.initDataUnsafe keys: ' + (tg ? Object.keys(tg.initDataUnsafe || {}).join(', ') : 'n/a'),
  'location.hash length: ' + location.hash.length,
  'location.href (no hash): ' + location.href.split('#')[0],
].join('\n');
