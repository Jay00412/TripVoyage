document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("my-Modal");
    const closeButton = document.querySelector(".close");
    const submitButton = document.getElementById("submit");
    const form = document.getElementById("inquiryForm");
    const openModal = document.getElementById("openModal")

    function showModal() {
    modal.style.display = "block";
}
    openModal.addEventListener("click", showModal);


    function closeModal() {
        modal.style.display = "none";
    }

 
    function validateForm() {
        let valid = true;
        const inputs = document.querySelectorAll("input[required], select[required]");
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "";
            }
        });
        return valid;
    }


    closeButton.addEventListener("click", closeModal);


    submitButton.addEventListener("click", function () {
        if (validateForm()) {
            alert("Form submitted successfully!");
            form.reset();
            closeModal();
        } else {
            alert("Please fill out all required fields.");
        }
    });
});

document.querySelector(".explore-btn").addEventListener("click", function() {
    document.querySelector(".destination-grid").scrollIntoView({ behavior: "smooth" });
  });


