// //Question 1 and 2
function InstagramPost(authorHandle, content, imgLink, noOfViews, noOfLikes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imgLink = imgLink;
    this.noOfViews = noOfViews;
    this.noOfLikes = noOfLikes;
}

const anita = new InstagramPost("@anitabrown", "Fiction", "https://www.instagram.com/p/CpIa9xSpWM_/?utm_source=ig_web_copy_link", "55,500 views", "30520 likes")
const sarah = new InstagramPost("@sarahquinn", "Historical Romance", "https://www.instagram.com/p/CpIm9gKrz1I/?utm_source=ig_web_copy_link", "23,456 views", "18,345 likes")
console.log(anita)
console.log(sarah)

// //Question 3a
function createPerson(name, age, location) {
    return{
        name: name,
        age: age,
        location: location,
    }
}

const musa = createPerson("Musa Dawodu", "19 years", "Lekki, Lagos State")
console.log(musa)
// //object
const musa1 = {
    name: "Musa Dawodu",
    age: 19,
    location: "Lekki, Lagos State",
    scores1: {
        eng: 90,
        govt: 95,
        lit: 80,
        crk: 85,
    }
};

console.log(musa1)

// //Question 3b
function createJambScores(eng, govt, lit, crk) {
   return {
    eng: eng,
    govt: govt,
    lit: lit,
    crk: crk,
   }
}

const scores = new createJambScores(90, 95, 80, 85)
console.log(scores)

// //object 
const scores1 = {
    eng: 90,
    govt: 95,
    lit: 80,
    crk: 85,
};

console.log(scores1)

// //QUestion 4
// //1. Using Object.assign()
// //example
const firstGirl = {
    firstName: "Jane",
    lastName: "Doe",
    age: "20",
};

const secondGirl = Object.assign({}, firstGirl);
secondGirl.firstName = "Anna";
secondGirl.lastName = "George"
console.log(firstGirl);
console.log(secondGirl);

// //2. using spread syntax

const thirdGirl = { ...firstGirl};
thirdGirl.firstName = "Mary";
thirdGirl.lastName = "Joshua"
console.log({thirdGirl})

// //3. Using the method JSON.parse(JSON.stringify())

const fourthGirl = JSON.parse;
fourthGirl.firstName = "Joy";
fourthGirl.lastName = "Greg";

console.log({ firstGirl });
console.log({ fourthGirl })


// //Question 5 
// //using for in loop
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }

 for (const president in presidentialCandidates) { 
    console.log(presidentialCandidates[president] + " " + "is the presidential candidate of" + " " + Object.keys(presidentialCandidates))
 };
