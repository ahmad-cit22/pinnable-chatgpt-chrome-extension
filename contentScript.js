// Inject sidebar HTML and CSS
function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "pinnedSidebar";
  sidebar.style.position = "fixed";
  sidebar.style.top = "0";
  sidebar.style.right = "0";
  sidebar.style.width = "300px";
  sidebar.style.height = "100%";
  sidebar.style.backgroundColor = "#f4f4f4";
  sidebar.style.zIndex = "9999";
  sidebar.style.borderLeft = "2px solid #ccc";
  sidebar.innerHTML = `
    <iframe src="https://chatgpt.com" style="width:100%; height:100%; border:none;"></iframe>
  `;

  document.body.appendChild(sidebar);
}

// Toggle sidebar visibility
function toggleSidebar() {
  const sidebar = document.getElementById("pinnedSidebar");
  if (sidebar) {
    sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
  } else {
    createSidebar();
  }
}

// Listen for messages from the popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleSidebar") {
    toggleSidebar();
    sendResponse({ status: "Sidebar toggled" });
  }
});
