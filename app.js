const names = 
    ["Lukas Rucký", 
    "Pavlína Rucká", 
    "Jaromir Rucký", 
    "Petra Lasota", 
    "Rostislav Michalczyk", 
    "Slávek Vinogradov", 
    "Dan Benedikovič", 
    "Martin Mester", 
    "Petr Kubát", 
    "Petr Bainar",
    "Radek Daníšek",
    "Arnošt Zdenkovic",
    "Jaroslav Skála",
    "Pavel Prautsch",
    "Klára Novákova",
    "Božena Gubancová",
    "Jindřich Šonka"
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
    console.log(randomNumber)  
    // Create DIV
    const candidateDiv = document.createElement("div");
    // Create LI
    const newCandidate = document.createElement("li");
    newCandidate.innerText = names[randomNumber];
    newCandidate.classList.add("newCandidate");
    // Append LI to DIV
    candidateDiv.appendChild(newCandidate);
    // Append DIV to UL
    candidates.appendChild(candidateDiv);
    console.log(names);
    names.splice(randomNumber, 1)
}




