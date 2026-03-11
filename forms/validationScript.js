// JavaScript code for form validation
document.getElementById("myForm").addEventListener("submit", function(event) {

    // Prevent form from submitting
    event.preventDefault();

    // Retrieve the input field value
    let inputValue = document.getElementById("inputField").value;

    // Regular expression pattern for alphanumeric input
    let pattern = /^[a-zA-Z0-9]+$/;

    // Check if the input value matches the pattern
    if (pattern.test(inputValue)) {

        // Valid input: display confirmation and submit the form
        alert("Form submitted successfully!");

    } else {

        // Invalid input: display error message
        alert("Error: Input must contain only letters and numbers.");

    }

});