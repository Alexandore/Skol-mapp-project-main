// --------Section 4: KOMOPETENSER------------
const visaMerKnapp = document.querySelector("#visa-mer");
const extraInfo = document.querySelector("#extra-info");

visaMerKnapp.addEventListener("click", visaMer);

function visaMer() {
    console.log("Knappen fungerar!");
    extraInfo.classList.toggle("dold");

    if (extraInfo.classList.contains("dold")){
        visaMerKnapp.textContent = "visa mer";
    } else {
        visaMerKnapp.textContent = "visa mindre";
    }
}