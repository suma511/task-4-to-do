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
checkAnswer(Q1) ;


let Q2 = prompt("are you sad?").toLowerCase();
checkAnswer(Q2) ;

let Q3 = prompt("are you mad?").toLowerCase();
checkAnswer(Q3) ;


console.log(answers);

for(i=0;i<3;i++){
    console.log(answers[i]);
}