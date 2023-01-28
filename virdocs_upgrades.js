function updateChapterStyle() {
    // get the table of contents
    var toc = document.getElementsByClassName("toc-list-content")[0];
    var tocItems = toc.getElementsByTagName("li");
    for (var i = 0; i < tocItems.length; i++) {
        var tocItem = tocItems[i];
        if (tocItem.innerText.startsWith("Chapter")) {
            // add a class to the toc item
            tocItem.classList.add("chapter-section");
        }
    }
}

// keep checking if the table of contents is loaded
var tocInterval = setInterval(function() {
    if (document.getElementsByClassName("toc-list-content")[0]) {
        updateChapterStyle();
    }
}, 100);
