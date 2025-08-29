// Heart Count
const allService = document.getElementById("all-service").addEventListener("click", function (event) {
  if (event.target.closest(".normal_gray_heart")) {
    const heartCount = document.getElementById("heart-count");
    const totalCount = parseInt(heartCount.textContent, 0);
    heartCount.textContent = totalCount + 1;
  }
});