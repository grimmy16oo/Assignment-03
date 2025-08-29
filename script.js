// increase the no of heart in navbar
document.querySelectorAll(".heart-icon").forEach(icon => {
    icon.addEventListener("click",function(e)
    {
        e.preventDefault();

        const heartCount = parseInt(document.getElementById("heart-count").innerText);
        const cnt = heartCount + 1;
        document.getElementById("heart-count").innerText = cnt;
    })
}) 

document.querySelectorAll(".call-btn").forEach(call => {
    call.addEventListener("click",function(e)
    {
        e.preventDefault();
        console.log("hi");

        const coinCount = parseInt(document.getElementById("coin-count").innerText);
        //fix later. gotta add for all buttons
        const alertText = document.querySelector(".alert-text").innerText;
        const alertNo = document.querySelector(".alert-no").innerText;
        
        if(coinCount > 20)
        {
            const decreaseCoin = coinCount - 20;
            document.getElementById("coin-count").innerText = decreaseCoin;
            
            alert("Calling " + alertText + " " + alertNo);
        }
    })
})