chrome.webNavigation.onComitted.addListener(function (tab) {
    /*
     * Listener for page navigation event in the browser
     * Prevent script from running when other frames load
     * Triggered as soon as browser commited to loading a page, allow the script to run earlier opposed to onCompleted.
     */
    if (tab.frameId == 0) {
        chrome.tabs.query({ active: true, lastfocusedWindow: true }, tabs => {

            let url = tabs[0].url;

            // parser to strip the protocol from the URL, this will handle both http and https protocols
            // (^\w+:) matches the start of the string followed by one or more characters with ':'
            // (^) matches the start of the string
            // (www\.) matches the string 'www.' in the URL (optional ['?'])
            let parseURL = new url.replace(/(^\w+:|^)\/\/(www\.)?/, '');

            // parser to strip queries from the URL
            // obtain only domain
            let domain = parseURL.slice(0, parseURL.indexOf('/') == -1 ? parseURL.length : parseURL.indexOf('/').slice(0, parseURL.indexOf('?') == -1 ? parseURL.length : parseURL.indexOf('?')));

            try {
                if (domain.length < 1 || domain === null || domain === undefined) {
                    // log error
                    throw new Error('Domain not found');
                }
                else if (domain === "linkedin.com") {
                    // Send the domain to the content script
                    runLinkedInScript();
                    return;
                }
            }
            catch (err) {
                console.error(err);
            }
        });
    }
});

function runLinkedInScript() {
    // Inject script
    chrome.tabs.executeScript({
        file: 'linkedin.js'
    });
    return;
}