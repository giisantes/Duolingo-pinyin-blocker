const checkbox = document.getElementById('showPinyin');

(async () => {
  const data = await browser.storage.sync.get({ showPinyin: false });
  checkbox.checked = data.showPinyin;
})();

checkbox.addEventListener('change', () => {
  browser.storage.sync.set({ showPinyin: checkbox.checked });
});
