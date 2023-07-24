const names = [
"Abrorkhon Akhmedov", 
"Aleksandar Čebzan",
"Anton Duda",
"Boris Novosad",
"Dagmar Valcharova",
"Dallas Bond",
"Daniel Balhar",
"Daniel Stiller",
"Daniela Buchová",
"Dita Vysoudilová",
"Eva Suchá",
"Garbiela Parnican",
"Geena Alexander George",
"Hana Stefanov", 
"Jakub Šalamoun",
"Jana Hachemi",
"Jiří Hikl",
"Jiří Rohel",
"Kamila Šponerová",
"Kateřina Lalíková",
"Kateřina Lalíková",
"Kateřina Lalíková",
"Kateřina Lalíková",
"Kristína Gabrišová",
"Lukáš Krais",
"Marek Nigut",
"Marie Pešáková",
"Marie Seltenreich",
"Martin Skořupa",
"Melih Karaali",
"Melih Karaali",
"Michal Nevlud",
"Mohamed Gamal Mohamed",
"Monika Goceri",
"Ondřej Korbela",
"Pavlína Mecová",
"Petr Korbel",
"Petr Vantuch",
"Petra Křenová",
"Přemysl Kostka",
"Radim Brenek",
"Romana Pivodová",
"Tomáš Laryš",
"Věra Konupčíková",
"Veronika Weissová",
"Vincent Fortuné",
"Vincent Fortuné",
"Vojtěch Žurek",
"Vojtěch Žurek",
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




