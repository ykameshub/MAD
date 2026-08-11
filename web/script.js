// Travel Booking Form Validation

document.getElementById("travelForm").addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let destination = document.getElementById("destination").value;
    let departure = document.getElementById("departure").value;
    let returnDate = document.getElementById("return").value;
    let travellers = document.getElementById("travellers").value;
    let packageType = document.getElementById("package").value;
    let passport = document.getElementById("passport").value;
    let message = document.getElementById("message").value.trim();

    // Name
    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    // Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone
    let phonePattern = /^[0-9]{10}$/;

    if (!phone.match(phonePattern)) {
        alert("Mobile number must contain exactly 10 digits.");
        return;
    }

    // Destination
    if (destination === "") {
        alert("Please select a destination.");
        return;
    }

    // Dates
    let today = new Date().toISOString().split("T")[0];

    if (departure < today) {
        alert("Departure date cannot be in the past.");
        return;
    }

    if (returnDate <= departure) {
        alert("Return date must be after departure date.");
        return;
    }

    // Travellers
    if (travellers === "" || travellers < 1) {
        alert("Enter the number of travellers.");
        return;
    }

    // Package
    if (packageType === "") {
        alert("Please choose a package.");
        return;
    }

    // Passport Upload
    if (passport === "") {
        alert("Please upload your passport or ID proof.");
        return;
    }

    // Special Requests
    if (message === "") {
        alert("Please enter your special requests.");
        return;
    }

    // Success
    alert(
        "🎉 Booking Successful!\n\n" +
        "Thank you, " + name + "!\n\n" +
        "Your trip to " + destination + " has been booked successfully.\n\n" +
        "Have a wonderful journey! ✈🌍"
    );

    document.getElementById("travelForm").reset();

});