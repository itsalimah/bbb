var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        // clearInterval(readyStateCheckInterval);
            var postsTitles = document.getElementsByClassName("_eYtD2XCVieq6emjKBH3m");
            var postsParagraphes = document.getElementsByClassName("_1qeIAgB0cPwnLhDF9XSiJM");
            for (let title of postsTitles) {
                if (title.innerText.toLowerCase().includes("brucebabs")) {
                    title.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
                }
            };
            for (let para of postsParagraphes ) {
                if (para.innerText.toLowerCase().includes("brucebabs")) {
                    para.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
                    console.log(++found);
                }
            };
    }
}, 4000);
