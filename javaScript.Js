// Open the modal and set the content
function openModal(title, description) {
  const modal = document.getElementById("modal");
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-description").textContent = description;
  modal.style.display = "flex";
}

// Close the modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none"; // Use this method consistently
}

// Close the modal when clicking outside the modal content
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("modal")) {
      closeModal();
  }
});

// Prevent modal from closing when interacting with the modal content
document.querySelector('.modal-content').addEventListener('click', (e) => {
  e.stopPropagation();
});

