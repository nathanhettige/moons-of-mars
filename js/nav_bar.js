document.addEventListener("readystatechange", function(event) {
    if(event.target.readyState == "interactive") {

        // Hide nav bar on scroll
        var prevScrollPos = window.pageYOffset;
        const navBar = document.getElementsByTagName("header")[0];

        window.onscroll = function() {
            // Auto Hide
            var scrollPos = window.pageYOffset;
            if (prevScrollPos > scrollPos) {
                navBar.style.top = "0";
            } else {
                navBar.style.top = "-15vh";
            }
            prevScrollPos = scrollPos;

            // Change colour of nav when not on top
            if (scrollPos > 0) {
                navBar.style.backgroundColor = "rgba(0, 0, 0, 0.60)";
            } else {
                navBar.style.backgroundColor = "transparent";
            }
        }

        // Mobile nav bar
        let navButton = document.querySelector("#mobile-nav-btn");
        let menu = document.getElementsByTagName("menu")[0]
        navButton.addEventListener("click", function(event) {
            menu.classList.toggle("show");
            navButton.classList.toggle("show");
        });

    }


    

    

});

