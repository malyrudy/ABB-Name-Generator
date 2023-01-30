const names = [
"Lukáš Rucký",
"Aleš Křivánek" ,
"Boyan Atanasov",
"Boyan Atanasov",
"Boyan Atanasov",
"Boyan Atanasov",
"Daniela Vrbová",
"David Polok",
"David Tomiczek",
"David Tomiczek",
"Dita Vysoudilová",
"Ekaterina Khludova",
"Eva Suchá",
"Geena Alexander George",
"Honza Kašpárek" ,
"Ivo Hluchník",
"Jakub Konarski",
"Jan Fasanok",
"Jana Soviarová",
"Jana Soviarová",
"Jindřich Šonka",
"Jiří Bartusek", 
"Jiří Hradil", 
"Jiří Kula",
"Kateřina Nová",
"Lenka Lodge Herdová",
"Lucia Lajčáková" ,
"Lucie Horejsková",
"Lukáš Hertl" ,
"Lukáš Krais" ,
"Marek Knobloch",
"Marek Mucha",
"Martin Čapek",
"Martin Čapek",
"Michael Bik",
"Michael Bik",
"Michael Bik",
"Michael Bik",
"Michael Piňos",
"Michaela Brandýsová",
"Michaela Wilczková",
"Michaela Zelinová",
"Michal Bik",
"Michal Bůžek",
"Monika Banotová",
"Monika Banotová",
"Nadia Merzougui" ,
"Nikola Tillová",
"Parmi Mehta" ,
"Patrik Donee",
"Pavel Lepík",
"Petr Kalman",
"Petr Mazurek", 
"Petr Sklenář",
"Petr Szypka" ,
"Radka Šišková",
"Radka Šišková",
"Radovan Číž",
"Roman Liebertz",
"Samuel Gabaj",
"Simona Vaisová",
"Simona Vaisová",
"Táňa Vimmerová",
"Tomáš Burda",
"Tomáš Burda",
"Tomáš Burda",
"Tomáš Kofránek", 
"Tomáš Stehlík",
"Vojtěch Kaniok",
"Vojtěch Žurek",
"Vojtěch Žurek",
"Vojtěch Žurek",
"Zuzana Kocmánková"
]

// Selectors
const candidatesButton = document.querySelector(".btn");
const candidates = document.querySelector(".candidates");

// Events
candidatesButton.addEventListener("click", getRandomCandidate);

// functions

function getRandomCandidate(event) {
    event.preventDefault();
    const randomNumber = Math.floor(Math.random() * names.length);  

    // Create LI
    const newCandidate = document.createElement("li");
    newCandidate.innerText = names[randomNumber];
    newCandidate.classList.add("newCandidate");

    // Append LI to UL
    candidates.appendChild(newCandidate);
    console.log(names);
    names.splice(randomNumber, 1)
}




