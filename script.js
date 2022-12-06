const overlay = document.querySelector(".overlay");
const form = document.querySelector("form"),
name = form.querySelector("#name"),
date = form.querySelector("#date"),
town = form.querySelector("#town"),
market = form.querySelector("#market"),
tc = form.querySelector("#tc"),
pc = form.querySelector("#pc"),
sale = form.querySelector("#sale"),
am = form.querySelector("#am");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    submitForm(name.value,date.value,town.value,market.value,tc.value,pc.value,sale.value,am.value)
})

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
            overlay.style.display="flex";
            overlay.addEventListener("click",()=>{
                overlay.style.display="none";
            })
            form.reset();
        }
    })
    .catch(error => console.log(error));
}