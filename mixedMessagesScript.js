//Mixed Messages Project - Codecademy

//Define Random Celebrity Variable
const randomCeleb = {

    musicCeleb: ["Michael Jackson", "Whitney Houston", "Eminem", "Elvis Presley","Kanye West","Ed Sheeran","Lady Gaga", "Taylor Swift", "Drake","Lionel Richie"],
    sportCeleb: ["Michael Jordan","Muhammad Ali","Lebron James","Pele","Lionel Messi","Cristiano Ronaldo","Anthony Joshua","Roger Federer","Lewis Hamilton","Usain Bolt"],
    filmCeleb: ["Sean Connery","Jack Black","Keira Knightley","Uma Thurman","Will Smith","Emma Stone","Robin Williams","Daisy Ridley","Bruce Willis","Daniel Craig"],
};

//Store Random Celebs in an array
let celebArray = [];

//Store favourite Celebrity
let bestMusic, bestSport, bestFilm;

//Iterate over the object
for (let person in randomCeleb) {
    let randomIndex = Math.floor(Math.random() * randomCeleb[person].length);
    //use the objects properties to customise the message being added to the randomCeleb array
    switch (person) {
        case "musicCeleb":
            bestMusic = randomCeleb[person][randomIndex];
            celebArray.push(`Your favourite music icon is: ${bestMusic}.`);
            break;
        case "sportCeleb":
            bestSport = randomCeleb[person][randomIndex];
            celebArray.push(`Your favourite sports icon is: ${bestSport}.`);
            break;
        case "filmCeleb":
            bestFilm = randomCeleb[person][randomIndex];
            celebArray.push(`Your favourite film icon is: ${bestFilm}.`);
            break;
    }
}

//Format and print favourites message
const formatAndPrint = (array) => {
    const formatted = array.join('\n')
    console.log(formatted)
}

//Print formatted favourite celebs message
formatAndPrint(celebArray);
