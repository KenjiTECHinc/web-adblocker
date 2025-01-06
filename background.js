chrome.webNavigation.onCommitted.addListener(function (details) {
    /**
     * Listener for page navigation event in the browser
     * Prevent script from running when other frames load
     * Triggered as soon as browser commited to loading a page, allow the script to run earlier opposed to onCompleted.
     */
    if (details.frameId == 0) {
        chrome.tabs.get(details.tabId, (tab) => {
            if (chrome.runtime.lastError || !tab.url) {
                console.error('Error retrieving tab details:', chrome.runtime.lastError);
                return;
            }

            let url = new URL(tab.url);
            let domain = url.hostname.replace("www.", ""); // Extract domain

            if (domain === "linkedin.com") {
                runLinkedInScript(details.tabId);
            }
        });
    }
});

function runLinkedInScript(my_tabid) {
    // Inject script
    console.log('Injecting script');
    chrome.scripting.executeScript({
        target: { tabId: my_tabid },
        file: 'linkedin.js'
    }, () => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
        }
    });
    return true;
}