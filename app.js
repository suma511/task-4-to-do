let answers = [];

function checkAnswer(question) {
    let answer = ""
    switch (question) {
        case "yes":
        case "y":
            answer = "yes"
            break;

        case "no":
        case "n":
            answer = "no"
            break;

        case "":
            answer = "invalid"
            break;
    }

    answers.push(answer);
}
let Q1 = prompt("are you happy?").toLowerCase();
checkAnswer(Q1);


let Q2 = prompt("are you sad?").toLowerCase();
checkAnswer(Q2);

let Q3 = prompt("are you mad?").toLowerCase();
checkAnswer(Q3);


console.log(answers);

for (i = 0; i < 3; i++) {
    console.log(answers[i]);
}

function genders() {

    if (A4 != true) {

        if (A2 == "male") {
            alert("welcome Mr  " + A1);
        }
        else if (A2 == "female") {
            alert("welcome Ms" + "  " + A1);
        }
        else {
            alert("welcome");
        }
    }
}
let answers2=[] ;
let A1 = prompt("whats your name?").toLowerCase();
answers2.push(A1);
let A2 = prompt("enter ur gender?").toLowerCase();
answers2.push(A2);
let A3 = prompt("how old are you");
answers2.push(parseInt(A3));
let A4 = confirm("do you want to skip welcome msg!");
answers2.push(A4);
genders () ;





