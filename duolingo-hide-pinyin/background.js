browser.commands.onCommand.addListener(async (command) => {
  if (command !== 'toggle-pinyin') return;
  const data = await browser.storage.sync.get({ showPinyin: false });
  await browser.storage.sync.set({ showPinyin: !data.showPinyin });
});
