var toggle;

function replaceImages() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].src = "https://gu-daddy.github.io/gu-daddy/images/gu01.jpg";
    }
}

chrome.runtime.sendMessage({type: "toggle"}, function(response) {
    if (response.toggle) {
        replaceImages();
    }
});
