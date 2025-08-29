// Heart Count
const allService = document.getElementById("all-service").addEventListener("click", function (event) {
  if (event.target.closest(".normal_gray_heart")) {
    const heartCount = document.getElementById("heart-count");
    const totalCount = parseInt(heartCount.textContent, 0);
    heartCount.textContent = totalCount + 1;
  }
});


// Call section and call history feature 

const coin = document.getElementById("coin");
const callBtn = document.querySelectorAll(".call-btn");
const cardTitle = document.querySelectorAll(".card-title");
const callNumber = document.querySelectorAll(".call_number");
const history = document.getElementById("history");

const clearHistory = document.getElementById("clearHistory");



callBtn.forEach((call, i) => {
    call.addEventListener('click', () => {
        if (coin.innerText <20){
            alert("You have insufficient balance")
            return
        }
        alert("📞 Calling " + cardTitle[i].innerText + " " + callNumber[i].innerText);
        history.innerHTML +=`
                <div class="flex items-center justify-between bg-gray-100 p-3 rounded-[8px] mb-3 mx-3">
                    <div>
                        <h1 class="font-bold text-[16px]">${cardTitle[i].innerText}</h1>
                        <p class="text-[16px] text-gray-500">${callNumber[i].innerText}</p>
                    </div>
                    <p class="text-gray-800">${new Date().toLocaleTimeString()}</p>
                </div>`
        coin.innerText = coin.innerText - 20;
        return coin
        
    });
});


clearHistory.addEventListener('click', () => {
    history.innerHTML = '';
});



// copy count + copy number section

const copy_count = document.getElementById("copyCount");
const clickCopy = document.querySelectorAll(".clickCopy");
let copyCount = 0;

for (const button of clickCopy) {
  button.addEventListener("click", function () {
    const card = button.closest(".card-body");
    const numElement = card.querySelector("h2.text-2xl");
    const number = numElement.textContent.trim();
    navigator.clipboard
      .writeText(number)
      .then(() => {
        alert(`Copied Successfully: ${number}`);
        copyCount++;
        copy_count.textContent = copyCount;
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
}