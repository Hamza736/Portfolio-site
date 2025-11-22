function SendMail(e) {
  e.preventDefault();

  var params = {
    from_name: document.getElementById("fullName").value,
    phone_number: document.getElementById("phoneNumber").value,
    email_id: document.getElementById("emailAddress").value,
    subject: document.getElementById("yourSubject").value,
    message: document.getElementById("yourMessage").value,
    reply_to: document.getElementById("emailAddress").value

  };

  var formMessages = document.getElementById("form-messages");

  emailjs.send("service_p12dkli", "template_g8ezfrt", params)
    .then(function(res) {
      formMessages.classList.remove("error");
      formMessages.classList.add("success");
      formMessages.textContent = "Thanks for your message! I’ll review it and respond shortly.";
      document.getElementById("contact-form").reset();
    })
    .catch(function(err) {
      formMessages.classList.remove("success");
      formMessages.classList.add("error");
      formMessages.textContent = "Oops! Something went wrong. Please try again.";
    });
}

//    Load More Button Function

document.addEventListener("DOMContentLoaded", function () {

    const items = document.querySelectorAll(".portfolio-item");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    let itemsToShow = 6; // How many items to show initially
    let totalItems = items.length;

    // Hide all items after 6 on page load
    items.forEach((item, index) => {
        if (index >= itemsToShow) {
            item.style.display = "none";
        }
    });

    // Load More button click function
    loadMoreBtn.addEventListener("click", function (e) {
        e.preventDefault();

        items.forEach((item) => {
            item.style.display = "block";
        });

        // Hide button after showing all items
        loadMoreBtn.style.display = "none";
    });

});

