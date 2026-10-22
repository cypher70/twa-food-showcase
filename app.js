const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

if (!tg || !tg.initData) {
  document.getElementById('browser-note').hidden = false;
}
