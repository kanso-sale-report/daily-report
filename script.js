// Get a reference to the form and town field
let form = document.querySelector("form");
let town = form.querySelector("#town");
let name = form.querySelector("#name");

const loading = document.querySelector(".loading");
const overlay = document.querySelector(".overlay");
const nameDropdown = form.querySelector("#name");
const date = form.querySelector("#date");
const market = form.querySelector("#market");
const tc = form.querySelector("#tc");
const pc = form.querySelector("#pc");
const sale = form.querySelector("#sale");
const am = form.querySelector("#am");
const employeeNames = [
    'Abhishek Jha',
    'Abhishek Shukla',
    'Anand Sharma',
    'Balvinder',
    'Devendra Singh',
    'Harish Chander Singh',
    'Karuna Shankar Tiwari',
    'Kishan Kumar',
    'Rajesh Mishra',
    'Ranjeet Kumar',
    'Rekha',
    'Rishabh Jain',
    'Sanjay Kumar',
    'Sachin Gupta',
    'Vinod Kumar',
    'Vinod R Tiwari',
]
const townNames = [
    'Central Delhi',
    'East Delhi',
    'New Delhi',
    'North Delhi',
    'North East Delhi',
    'North West Delhi',
    'South Delhi',
    'South West Delhi',
    'West Delhi',
    'Allahabad',
    'Aligarh',
    'Ambedkar Nagar',
    'Auraiya',
    'Azamgarh',
    'Barabanki',
    'Budaun',
    'Bagpat',
    'Bahraich',
    'Bijnor',
    'Ballia',
    'Banda',
    'Balrampur',
    'Bareilly',
    'Basti',
    'Bulandshahr',
    'Chandauli',
    'Chhatrapati Shahuji Maharaj Nagar',
    'Chitrakoot',
    'Deoria',
    'Etah',
    'Kanshi Ram Nagar',
    'Etawah',
    'Firozabad',
    'Farrukhabad',
    'Fatehpur',
    'Faizabad',
    'Gautam Buddh Nagar',
    'Gonda',
    'Ghazipur',
    'Gorakhpur',
    'Ghaziabad',
    'Hamirpur',
    'Hardoi',
    'Mahamaya Nagar',
    'Jhansi',
    'Jalaun',
    'Jyotiba Phule Nagar',
    'Jaunpur district',
    'Ramabai Nagar (Kanpur Dehat)',
    'Kannauj',
    'Kanpur',
    'Kaushambi',
    'Kushinagar',
    'Lalitpur',
    'Lakhimpur Kheri',
    'Lucknow',
    'Mau',
    'Meerut',
    'Maharajganj',
    'Mahoba',
    'Mirzapur',
    'Moradabad',
    'Mainpuri',
    'Mathura',
    'Muzaffarnagar',
    'Panchsheel Nagar district (Hapur)',
    'Pilibhit',
    'Shamli',
    'Pratapgarh',
    'Rampur',
    'Raebareli',
    'Saharanpur',
    'Sitapur',
    'Shahjahanpur',
    'Sant Kabir Nagar',
    'Siddharthnagar',
    'Sonbhadra',
    'Sant Ravidas Nagar',
    'Sultanpur',
    'Shravasti',
    'Unnao',
    'Varanasi',
];

form.addEventListener("submit", function(e) {
    // Check if the value of the town field is in the townNames array
    if (!townNames.includes(town.value)) {
      // If the value is not in the array, prevent the form from being submitted
      e.preventDefault();
  
      // Display an error message to the user
      alert("The town you entered is not valid. Please enter a valid town name.");
    } else {
      // If the town name is valid, check the value of the name field against the employeeNames array
      if (!employeeNames.includes(name.value)) {
        // If the name is not valid, prevent the form from being submitted
        e.preventDefault();
  
        // Display an error message to the user
        alert("The name you entered is not valid. Please enter a valid employee name.");
      } else {
        // If both the town name and employee name are valid, check the value of the sale field
        if (sale.value < 2000) {
          // If the sale is less than 2000, prevent the form from being submitted
          e.preventDefault();
      
          // Display an alert to the user
          alert("Aapki sale 2000 se kam hai, kripya apni sale badhaein.");
        } else if (sale.value >= 2000 && sale.value < 5000) {
          // If the sale is greater than or equal to 2000 but less than 5000, display an alert to the user
          alert("Aapki sale 5000 se kam hai, kripya aur mehnat karein.");
        } else if (sale.value >= 5000) {
          // If the sale is greater than or equal to 5000, display an alert to the user
          alert("Bahut acchhe! Aise hi kaam karte rahein!")
        }
        loading.style.display = "block";
        submitForm(nameDropdown.value, date.value, town.value, market.value, tc.value, pc.value, sale.value, am.value);
      }
    }
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