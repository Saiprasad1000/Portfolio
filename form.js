// Real-time Validation Functions
function validateName() {
   const name = document.getElementById("contact-name").value;
   const nameError = document.getElementById("name-error");
   const submitError = document.getElementById("submit-error");
   
   if (name.length === 0) {
     nameError.textContent = "Name is required";
     return false;
   }
   if (!/^[a-zA-Z\s]+$/.test(name)) {
     nameError.textContent = "Only alphabets and spaces allowed";
     return false;
   }
   nameError.textContent = ""; // Clear error
   submitError.textContent = ""; // Clear submit error
   return true;
 }
 
 function validateEmail() {
   const email = document.getElementById("email").value;
   const emailError = document.getElementById("email-error");
   const submitError = document.getElementById("submit-error");
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
   if (email.length === 0) {
     emailError.textContent = "Email is required";
     return false;
   }
   if (!emailRegex.test(email)) {
     emailError.textContent = "Invalid email format";
     return false;
   }
   emailError.textContent = "";
   submitError.textContent = ""; // Clear submit error
   return true;
 }
 
 function validatePhone() {
   const phone = document.getElementById("phone").value;
   const phoneError = document.getElementById("phone-error");
   const submitError = document.getElementById("submit-error");
 
   if (phone.length === 0) {
     phoneError.textContent = "Phone number is required";
     return false;
   }
   if (!/^\d{10}$/.test(phone)) {
     phoneError.textContent = "Enter a valid 10-digit phone number";
     return false;
   }
   phoneError.textContent = "";
   submitError.textContent = ""; // Clear submit error
   return true;
 }
 
 function validateComment() {
   const comment = document.getElementById("comment").value;
   const commentError = document.getElementById("comment-error");
   const submitError = document.getElementById("submit-error");
 
   if (comment.length === 0) {
     commentError.textContent = "Comment cannot be empty";
     return false;
   }
   if (comment.length < 10) {
     commentError.textContent = "Comment should be at least 10 characters long";
     return false;
   }
   commentError.textContent = "";
   submitError.textContent = ""; // Clear submit error
   return true;
 }
 
 // Form Validation
 function validateForm() {
   const isNameValid = validateName();
   const isEmailValid = validateEmail();
   const isPhoneValid = validatePhone();
   const isCommentValid = validateComment();
 
   const submitError = document.getElementById("submit-error");
 
   if (isNameValid && isEmailValid && isPhoneValid && isCommentValid) {
     submitError.textContent = ""; // Clear the error message
     return true; // Allow submission
   } else {
     submitError.textContent = "Please correct the errors and try again.";
     return false; // Block submission
   }
 }
 
 // AJAX Form Submission
 $("#submit-form").submit((e) => {
   e.preventDefault(); // Prevent default form submission
 
   if (validateForm()) {
     // If validation passes, proceed with AJAX submission
     $.ajax({
       url: "https://script.google.com/macros/s/AKfycbz6-n6EzgU3PEL1hWBWUoVN216rFmqboKNpaA-lL7TMfg0OQARSZKLcvvocZfguTfLwGA/exec",
       data: $("#submit-form").serialize(),
       method: "post",
       success: function (response) {
         alert("Form submitted successfully");
         window.location.reload();
       },
       error: function (err) {
         alert("Something went wrong. Please try again.");
       },
     });
   }
 });
 
 // Add Event Listeners for Real-Time Validation
 document.getElementById("contact-name").addEventListener("input", validateName);
 document.getElementById("email").addEventListener("input", validateEmail);
 document.getElementById("phone").addEventListener("input", validatePhone);
 document.getElementById("comment").addEventListener("input", validateComment);
 