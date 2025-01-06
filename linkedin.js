function removePromotedPosts() {
    /**
     * This function finds all the posts on LinkedIn that are marked as "Promoted" and removes them from the displayed page.
     * "Removal" is done by setting the display property of the post to "none".
     * return: void
     */

    let spans = document.getElementsByTagName('span');

    for (let i = 0; i < spans.length; i++) {
        // check for keyword "Promoted"
        if (spans[i].innerHTML === "Promoted"
            || spans[i].innerHTML === "\n                <span aria-hidden=\"true\"><!---->Promoted<!----></span><span class=\"visually-hidden\"><!---->Promoted<!----></span>\n              ") {
            // get the div card that contains the entire post
            let card = spans[i].closest('.feed-shared-update-v2');

            if (card === null) {
                // if the card is not found, brute force search for the parent node.
                let j = 0;
                card = spans[i];
                while (j < 6) {
                    card = card.parentNode;
                    ++j;
                }
            }
            card.setAttribute('style', 'display: none !important;');
        }
    }
}

removePromotedPosts();

setInterval(function () {
    /**
     * remove post every 100ms, ensure post is removed as soon as it is loaded.
     */
    removePromotedPosts();
}, 100);