(async () => {
  const root = document.documentElement;

  function applyState(showPinyin) {
    root.classList.toggle('dhp-show-pinyin', !!showPinyin);
  }

  // Read initial state (defaults to hiding pinyin, i.e. showPinyin = false)
  const data = await browser.storage.sync.get({ showPinyin: false });
  applyState(data.showPinyin);

  // React live if toggled from the popup or via the keyboard shortcut
  browser.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.showPinyin) {
      applyState(changes.showPinyin.newValue);
    }
  });

  // Hold Alt to temporarily reveal pinyin without changing the saved toggle
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Alt') root.classList.add('dhp-peek');
  });
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Alt') root.classList.remove('dhp-peek');
  });
  window.addEventListener('blur', () => root.classList.remove('dhp-peek'));
})();
