const form = document.querySelector("form");
const loading = document.querySelector(".loading");
const overlay = document.querySelector(".overlay");
const nameDropdown = form.querySelector("#name");
const date = form.querySelector("#date");
const town = form.querySelector("#town");
const market = form.querySelector("#market");
const tc = form.querySelector("#tc");
const pc = form.querySelector("#pc");
const sale = form.querySelector("#sale");
const am = form.querySelector("#am");
form.addEventListener("submit", function(e) {
    // Prevent the form from being submitted
    e.preventDefault();

    // Show the loading animation when the form is submitted
    loading.style.display = "block";

    // Submit the form as usual
    submitForm(nameDropdown.value, date.value, town.value, market.value, tc.value, pc.value, sale.value, am.value);
});

function submitForm(name, date, town, market, tc, pc, sale, am) {
    fetch("https://formsubmit.co/ajax/kansoadms@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Name: name,
            Date: date,
            Town: town,
            Market: market,
            TC: tc,
            PC: pc,
            Sale: sale,
            Additional_details: am
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success == "true") {
                // Hide the loading animation
                loading.style.display = "none";

                // Show the success message
                overlay.style.display = "flex";

                // Hide the success message when it is clicked
                overlay.addEventListener("click", () => {
                    overlay.style.display = "none";
                });

                // Reset the form
                form.reset();
            }
        })
        .catch(error => console.log(error));
}
