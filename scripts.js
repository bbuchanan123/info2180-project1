document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); 
        const email = emailInput.value.trim();

        if (email === "") {
            showMessage("Please enter a valid email address.", "red");
        } else {
            showMessage(`Thank you! Your email address "${email}" has been added to our mailing list!`, "white");
            form.reset();
        }
    });

    function showMessage(text, color) {
        messageDiv.textContent = text;
        messageDiv.style.color = color;
        messageDiv.style.opacity = 1;       
        messageDiv.style.transition = "opacity 1s ease"; 

        setTimeout(() => {
            messageDiv.style.opacity = 0;
        }, 5000);
    }
});