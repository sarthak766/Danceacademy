
function openPopupForm() {
    document.getElementById("popupForm").style.display = "flex";
  }

  // Function to close the popup form
  function closePopupForm() {
    document.getElementById("popupForm").style.display = "none";
  }
  // Open the contact popup when the contact button is clicked
document.getElementById("contactBtn").addEventListener("click", function() {
document.getElementById("contactPopup").style.display = "block";
});

// Close the contact popup when the close button is clicked
document.getElementById("closeBtn").addEventListener("click", function() {
document.getElementById("contactPopup").style.display = "none";
});