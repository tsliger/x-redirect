console.log("Background worker initialized");

// You can add logic here to listen for when the redirect happens
browser.declarativeNetRequest.onRuleMatchedDebug?.addListener((info) => {
  console.log("Redirect rule matched:", info);
});
