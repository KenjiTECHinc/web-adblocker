chrome.webNavigation.onCommitted.addListener(function (details) {
    /**
     * Listener for page navigation event in the browser
     * Prevent script from running when other frames load
     * Triggered as soon as browser commited to loading a page, allow the script to run earlier opposed to onCompleted.
     */
    if (details.frameId == 0) {
        console.log('Tab ID:', details.tabId);
        chrome.tabs.get(details.tabId, (tab) => {
            if (chrome.runtime.lastError || !tab.url) {
                console.error('Error retrieving tab details:', chrome.runtime.lastError);
                return;
            }

            let url = new URL(tab.url);
            let domain = url.hostname.replace("www.", ""); // Extract domain

            if (domain === "linkedin.com") {
                RunLinkedInScript(details.tabId);
            }
        });
    }
});

function RunLinkedInScript(tabId) {
    /**
     * Inject the script into the tab
     * tabId: int
     */
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['linkedin.js']
    });
    return;
}
