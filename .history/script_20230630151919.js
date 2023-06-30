// This targets the class of the side navigation buttons remains active when clicked, and removes it when not.
const anchorButtons = document.querySelectorAll(".js-active-btn");
anchorButtons.forEach((btn) => {
  btn.addEventListener("click", makeButtonActive);
});

const viewerBtn = document.querySelectorAll("css-img-btn");

/**
 * This function is called when the side navigation buttons are clicked.
 * @param {*} event
 */
function makeButtonActive(event) {
  anchorButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
}

for (let i = 0; i < viewerBtn.length; i++) {
  viewerBtn[i].addEventListener("click", function (e) {
    var imgSrc = e.target.getAttribute("data-img-src");
    document.getElementById("img-modal").src = imgSrc;
  });
}

// bootstrap tooltips trigger
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

AOS.init();
