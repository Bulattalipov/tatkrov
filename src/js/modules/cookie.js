export default function () {

  const cookieBtn = document.querySelector('.cookie-modal-btn');
  const cookieModal = document.querySelector('.cookie-modal');

  if (!localStorage.getItem("cookiesAccepted")) {
    cookieModal.style.display = 'flex';
  }

  cookieBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieModal.style.display = 'none';
  });
}
