document.getElementById("toggleSidebar").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Check if the current tab's URL matches https://chatgpt.com/*
  if (tab && tab.url.includes("https://chatgpt.com/")) {
    chrome.tabs.sendMessage(tab.id, { action: "toggleSidebar" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      } else {
        console.log(response.status);
      }
    });
  } else {
    alert(
      "Please navigate to ChatGPT (https://chatgpt.com/) to pin the chat."
    );
  }
});
