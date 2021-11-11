document.addEventListener("readystatechange", function(event) {
    if(event.target.readyState == "interactive") {
        // Adding a "JavaScript is Enabled" Body Class
        document.body.classList.add("js");

        // // Baguette Box Gallery 
        baguetteBox.run('#gallery-box');
    }
});
