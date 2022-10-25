const names = [
    "Jan Zezulka",
    "Alejandro FERNANDEZ LOZANO", 
    "Radka Franková", 
    "Jiří Plíšek",
    "Jakub Hurta",
    "Pavel Lepík",
    "Nadia Merzougui",
    "Geena Alexander George",
    "Petr Vantuch",
    "David Tomiczek", 
    "Gareth Caughey",
    "Gareth Caughey",
    "Jiří Polách",
    "David Buchta",
    "Martin Čapek",
    "Marcela Vyšlanová",
    "Lenka Landryová",
    "Aleš Váchala", 
    "Nikola Bahrová",
    "Abrorkhon Akhmedov",
    "Jan Kašpárek",
    "Kateřina Nogolová",
    "Nikol Vinklerová",
    "Geena Alexander",
    "Martin Skořupa",
    "Jan Fasánok",
    "Filip Henzel",
    "Irena Pavezka",
    "Mohamed Fawzy",
    "Martin Skořupa",
    "Jiří Kapica",
    "Patrik Janečka",
    "Jana Lauseckerova",
    "Haj Mohamed",
    "Haj Mohamed",
    "Klára Blechová",
    "Marek Siřiště",
    "Kristína Gabrišová",
    "Jan Borski",
    "Jiří Kula", 
    "Jiří Beseda",
    "Matěj Kavka",
    "Alena Bečvářová",
    "Monika Banotová",
    "Geena Alexander George",
    "Marek Siřiště",
    "Denisa Faitová",
    "Alena Bečvářová",
    "Marcela Boniatti",
    "Dominik Lanča",
    "Štěpánka Šťastná",
    "Simona Vaisová",
    "Samuel Gabaj",
    "David Pavlis",
    "Monika Banotová",
    "Marek Zháněl",
    "Petr Mazurek",
    "Parmi Mehta",
    "Moataz Saleh",
    "Radek Chwalek",
    "Katarina Urbanova",
    "Adam Krása",
    "Adam Krása",
    "Petr Trávníček",
    "David Patera",
    "Jaroslav Vítek",
    "Radka Ismali",
    "Martin Nováček",
    "Lukáš Říman",
    "Lucie Horejsková",
    "Lenka Herdová",
    "Adam Goranov", 
    "Radka Ismail"
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




