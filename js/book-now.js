document.addEventListener("readystatechange", function(event) {
    if(event.target.readyState == "interactive") {
        // Adding a "JavaScript is Enabled" Body Class
        document.body.classList.add("js");
    }

    // Set minimum date
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);

    var checkIn = document.querySelector("#form-check-in");
    var checkOut = document.querySelector("#form-check-out");

    var tomorrowString = tomorrow.getFullYear() + '-' + (String(tomorrow.getMonth() + 1)).padStart(2, '0') + '-' + (String(tomorrow.getDate())).padStart(2, '0');
    var dayAfterString = dayAfter.getFullYear() + '-' + (String(dayAfter.getMonth() + 1)).padStart(2, '0') + '-' + (String(dayAfter.getDate())).padStart(2, '0');

    checkIn.setAttribute("min", tomorrowString);
    checkOut.setAttribute("min", dayAfterString);

    // Booking Page Form Validation

    document.querySelector("#booking-page form").addEventListener("submit", function(event) {

        let firstName = document.querySelector("#form-first-name");
        let lastName = document.querySelector("#form-last-name");
        let destination = document.querySelector("#form-destination");
        
        let complete = (firstName.value != "") && (lastName.value != "") && (checkIn.value != "") && (checkOut.value != "") && (destination.value != "none")

        if (complete) {
            console.log("Form Completed")

            document.querySelector("form").remove();
            document.querySelector("#information").remove();
            document.querySelector("#booking-page").style.flexDirection = "column"
            document.querySelector("#booking-page").style.textAlign = "center"

            var thank = document.createElement("h2");
            thank.innerHTML = `We can\'t wait to see you ${firstName.value}!`
            document.querySelector("#booking-page").appendChild(thank);

            var confirmation = document.createElement("h4");
            confirmation.innerHTML = "You will recieve a confirmation shortly via email with further information."
            document.querySelector("#booking-page ").appendChild(confirmation);



        } else {
            if (firstName.value == "") {
                firstName.classList.add("error");

                let formFirstNameLabel = firstName.closest(".form-item").querySelector("label");
                formFirstNameLabel.classList.add("error");

            }

            if (lastName.value == "") {
                lastName.classList.add("error");

                let formLastNameLabel = lastName.closest(".form-item").querySelector("label");
                formLastNameLabel.classList.add("error");
            }

            if (checkIn.value == "") {
                checkIn.classList.add("error");

                let formCheckInLabel = checkIn.closest(".form-item").querySelector("label");
                formCheckInLabel.classList.add("error");
            }

            if (checkOut.value == "") {
                checkOut.classList.add("error");

                let formCheckOutLabel = checkOut.closest(".form-item").querySelector("label");
                formCheckOutLabel.classList.add("error");
            }

            if (destination.value == "none") {
                destination.classList.add("error");

                let formDestinationLabel = destination.closest('.form-item').querySelector("label");
                formDestinationLabel.classList.add("error");
            }
        }

        event.preventDefault();
    });


    const textFields = document.querySelectorAll("#form-first-name, #form-last-name");
    for(field of textFields) {
        field.addEventListener("keydown", function() {
            this.classList.remove("error");
            this.closest(".form-item").querySelector("label").classList.remove("error");
        });
    }

    const selectFields = document.querySelectorAll("#form-check-in, #form-check-out, #form-destination");
    for(field of selectFields) {
        field.addEventListener("change", function() {
            this.classList.remove("error");
            this.closest(".form-item").querySelector("label").classList.remove("error");
        });
    }


});

