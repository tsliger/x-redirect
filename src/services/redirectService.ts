browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    const url = new URL(changeInfo.url);

    if (
      url.hostname === "twitter.com" ||
      url.hostname === "x.com" ||
      url.hostname.endsWith(".x.com")
    ) {
      const data = await browser.storage.local.get("targetUrl");
      const targetDomain = data.targetUrl || "xcancel.com";

      const newUrl = changeInfo.url
        .replace("twitter.com", targetDomain)
        .replace("x.com", targetDomain);

      browser.tabs.update(tabId, { url: newUrl });
    }
  }
});
