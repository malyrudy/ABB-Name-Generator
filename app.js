const names = [
"Štěpán Neústupný",
"Adéla Černá",
"Nikola Židek",
"Petr Bagar",
"Michal Mati",
"Cristian Petrachi",
"Firat Köseoglu",
"Andrea Piková",
"Jan Hlosta",
"Jan Korous",
"David Buchta",
"Hana Teplárková",
"Martin Peša",
"Jindřich Šonka",
"Michaela Brandysová",
"Martin Čapek",
"David Tomiczek",
"Věra Stratilová",
"Nikola Mik Bahrová",
"Natálie Reháková",
"Vojtěch Kalas",
"Radim Lapiš",
"Walter Stricker",
"Daniel Swierzek",
"Dita Vysoudilová",
"Dita Vysoudilová",
"Zuzana Mikušová",
"Pavlína Mecová",
"Šárka Magnusková",
"Adéla Černá",
"Nikola Mik Bahrová",
"Radovan Čierný",
"Jiří Lochmann",
"Jiří Lochmann",
"Jiří Pavlinec",
"Martin Plšek",
"Nadia Merzougi",
"Jana Janíková",
"Adéla Černá",
"Markéta Malinkov",
"Nikola Židek",
"Filip Kavan",
"Geena Alexandra Georg",
"Roman Černý",
"Nikol Vinklerová",
"Michal Kabašta",
"Zuzana Feber",
"Jiří Pasečný",
"Eva Tomisová",
"Lukáš Rucký",
"Juliia Minibaeva",
"Michal Kabašta",
"Petr Bagar",
"Soňa Tejkal",
"Nikol Vinklerová",
"Daniela Vrbová",
"Akhmedov Abrorkhon",
"Silvie Nevrlová",
"Václav Bernaťák",
"Daniela Vrbová",
"Markéta Malinková",
"Aneta Sčígelová", 
"Jakub Hurta",
"Robert Ramík",
"Jiří Lochmann",
"Lukáš Krais",
"Pavel Chodura",
"Adam Sobanski",
"Adam Sobanski",
"Jan Kašpárek",
"Geena Alexander George",
"Matěj Říman",
"Jana Janíková",
"Jiří Kapica",
"Jan Lacina",
"Eva Tomisová",
"Renata Šebestová",
"Mario Dembiny",
"Jiří Bartusek", 
"Břetislav Stacho",
"Nikola Mik Bahrová",
"Nadia MERZOUGUI",
"Martin Kaszper",
"Jan Zezulka",
"Nikola Mik Bahrová",
"Tomáš Pick",
"Svatopluk Brychta",
"Renáta Šebestová",
"Simona Vaisová",
"Nikola Mik Bahrová",
"Matouš Vrzala",
"Natalie Pravosudova",
"Petr Menkal",
"Pavel Lepík",
"Tomáš Toběrný",
"Nikol Vinklerová",
"Patrik Janečka",
"Aleš Vachala",
"Bohdana Bajgerová",
"Michael Bik",
"Dan Cancík",
"Zuzana Mikušová",
"Aneta Teichmannová",
"Radek Danisek",
"Martin Mondřík",
"Nikola Bahrová",
"Eva Tomisová",
"Zuzana Mikusová",
"Kirstýny Svák",
"Walter Sticker", 
"Dallas Bond",
"Jiří Polach",
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




