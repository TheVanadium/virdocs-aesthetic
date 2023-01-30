function updateTocChapterStyle() {
    var toc = document.getElementsByClassName("toc-list-content")[0];
    var tocItems = toc.getElementsByTagName("li");
    for (var i = 0; i < tocItems.length; i++) {
        var tocItem = tocItems[i];
        if (tocItem.innerText.startsWith("Chapter")) {
            tocItem.classList.add("chapter-section");
        }
    }
}

// Regularly check if styled elements are loaded and update them
var updateStyling = setInterval(function() {
    if (document.getElementsByClassName("toc-list-content")[0]) {
        updateTocChapterStyle();
    }
}, 100);
