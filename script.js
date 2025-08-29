// Increase the number of hearts in navbar
document.querySelectorAll(".heart-icon").forEach(icon => {
    icon.addEventListener("click", function (e) {
        e.preventDefault();

        const heartCount = parseInt(document.getElementById("heart-count").innerText);
        const cnt = heartCount + 1;
        document.getElementById("heart-count").innerText = cnt;
    });
});

// Handle call button clicks
document.querySelectorAll(".call-btn").forEach(call => {
    call.addEventListener("click", function (e) {
        e.preventDefault();

        const card = e.target.closest(".card");

        const coinCount = parseInt(document.getElementById("coin-count").innerText);
        const alertText = card.querySelector(".alert-text").innerText;
        const alertNo = card.querySelector(".alert-no").innerText;

        if (coinCount >= 20) {
            const decreaseCoin = coinCount - 20;
            document.getElementById("coin-count").innerText = decreaseCoin;

            alert("Calling " + alertText + " " + alertNo);

            // Add to call history
            const data = {
                name: alertText,
                number: alertNo,
                date: new Date().toLocaleTimeString()
            };

            const cardContainer = document.getElementById("card-container");
            const div = document.createElement("div");
            div.innerHTML = `
              <div class="flex justify-between items-center bg-gray-100 p-4 rounded-xl gap-8">
                  <div>
                      <h1 class="text-lg font-semibold">${data.name}</h1>
                      <p class="text-gray-500">${data.number}</p>
                  </div>
                  <p class="text-sm text-gray-400">${data.date}</p>
              </div>`;

            cardContainer.appendChild(div);
        }
        else {
            alert("Not enough coins.You need at least 20 coins");
        }
    });
});

//clear history
document.getElementById("clear-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // clears all call history
});

//copy buttons
document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", function(e) {
        e.preventDefault();

        
        const card = button.closest(".card");
        const textToCopy = card.querySelector(".alert-no").innerText;

        // Copy text to clipboard
        navigator.clipboard.writeText(textToCopy).then(() => 
            {
                alert(`Copied: "${textToCopy}"`);
                
                const copyCount = parseInt(document.getElementById("copy-count").innerText);
                document.getElementById("copy-count").innerText = copyCount + 1;
            })
    });
});