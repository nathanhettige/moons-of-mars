document.addEventListener("readystatechange", function(event) {
    if(event.target.readyState == "interactive") {

        // Adding a "JavaScript is Enabled" Body Class
        document.body.classList.add("js");

        // FAQ Expand
        let questionExpandButtons = document.querySelectorAll(".question .expand-button")
        for (let button of questionExpandButtons) {
            button.addEventListener("click", function(event) {
                this.classList.toggle("expanded")
                this.nextSibling.nextSibling.classList.toggle("expanded");
                event.preventDefault();
            });
        }
    }
});