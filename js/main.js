//Checking to se if js file is linked
console.log("stephen you are so brilliant");
let hamster = {
    name: "Hammy",
    age: 4,
    legs: 3,
    children: ["Captain Hook", "Peter Pan", "Sally"],
    nickname: "hamilton",
    Chewing: function chew(what) {
        console.log("chewing", what);
    }
};

/*Lightning Exercise 1: Given two options of data structures - array or object - which should you use? 
You need to represent a red 2015 Ford Mustang in your code
*/

let Car = {
    Type: "ford",
    Model: "mustang",
    Year: 2015,
    color: "red"
};

/*Lightning Exercise 2: Given two options of data structures - array or object - 
which should you use? You need to store list of animal names in a shelter. 
The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".
*/

let Animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"];

/*Lightning Exercise 3: Define an object for four family members, and put each object in an array named familyMembers.
 Each family member object that you create should have the same keys on them, but the values will be different.*/
//Array of objects called familyMembers
const familyMembers = [
    (Dad = {
        age: 45,
        name: "John",
        weight: 145,
        Alive: true
    }),

    (Mom = {
        age: 30,
        name: "Mary",
        weight: 135,
        Alive: false
    }),
    (Son = {
        age: 18,
        name: "Grady",
        weight: 215,
        Alive: true
    }),

    (Daughter = {
        age: 11,
        name: "Alice",
        weight: 110,
        Alive: true
    })
];
console.log(familyMembers);

/*practice dot and square-bracket notation. 
Use the following object to complete the lightning exercises below.
*/
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
};

/*Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.

Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console.
 Create 5 variables first with the keys as their values. Use those variables to look up the values.
*/
console.log(`empireStateBuilding ${empireStateBuilding.height}${empireStateBuilding.stories}${empireStateBuilding.eastWestLength}${empireStateBuilding.northSouthLength}`);

let buildingKeys = {
    key1: "address",
    key2: "constructionDate",
    key3: "cost",
    key4: "owner",
    key5: "architect"
}

console.log(`${empireStateBuilding[buildingKeys.key1]}${empireStateBuilding[buildingKeys.key2]}${empireStateBuilding[buildingKeys.key3]}${empireStateBuilding[buildingKeys.key4]} ${empireStateBuilding[buildingKeys.key5]}`)

//Dot Notation

// string interpolation
console.log(`String Interpolation: Lassie's breed is ${lassie.breed}`);
// //string concatenation
console.log("String Concatenation: Lassie's breed is " + lassie.breed);

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
};
console.log("Wardrobe Lightning Exercises");
console.log(`My Wardrobe height is ${wardrobe.height} inches tall, the contents inside contain ${wardrobe.contents} the depth of the wardrobe is ${wardrobe.depth} inches deep.
the width of the wardrobe is ${wardrobe.width} wide. The manufacturer is ${wardrobe.manufacturer} the contents include ${wardrobe.contents}`);


   const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
console.log(nashvilleSoftwareSchool.fulltime, nashvilleSoftwareSchool.partTime);

console.log(nashvilleSoftwareSchool.instructors.fulltime[4], nashvilleSoftwareSchool.instructors.partTime[0]);




//Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.
let beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]   
}


console.log(`${beatles.members[1].name} was in the beatles from ${beatles.history.formed} to ${beatles.history.disbanded} He was born in ${beatles.members[1].birth} he contributed heavily to the, ${beatles.albums[3]}Album`)