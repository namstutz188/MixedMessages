//Mixed Messages JS file

//Messages

const message1 = "The _NOUN_ went to the beach. The sand was really _ADJ_. The _NOUN_ liked to _VERB_ at the beach.".split(" ");
const message2 = "_NOUN_ is going to make a sandwhich. First they _VERB_ on mayo. then they add some cheese and turkey. Their sandwhiches are _ADJ_".split(" ");
const message3 = "Before I _VERB_ to sleep, a _NOUN_ in my closet makes sounds. This _NOUN_ is very _ADJ_!".split(" ");

const messageArr = [message1,message2,message3];

//Selects random message and returns

function selectMessage() {
    return messageArr[Math.floor(Math.random()*3)];
}

//Get userinput

const getUserInput = () => {
    let noun = "Dog";
    let adj = "happy";
    let verb = "sprints";

    return [noun,adj,verb];
}

//Create random message

function randomMessage() {
    //Get user input; expecting [NOUN,ADJ,VERB] format.
    let userInput = getUserInput();

    //Get random message
    let randomMessageText = selectMessage();

    //Replace the appropriate text
    randomMessageText = randomMessageText.map(str => {
        if (str.substring(0,"_NOUN_".length) === "_NOUN_") {
            let extra = str.charAt(str.length-1);
            if (extra === "_") {
                extra = "";
            }
            return userInput[0] +extra;
        } else if (str.substring(0,"_ADJ_".length) === "_ADJ_") {
            let extra = str.charAt(str.length-1);
            if (extra === "_") {
                extra = "";
            }
            return userInput[1]+extra;
        } else if (str.substring(0,"_VERB_".length) === "_VERB_") {
            let extra = str.charAt(str.length-1);
            if (extra === "_") {
                extra = "";
            }
            return userInput[2]+extra;
        } else {
            return str;
        }
    });

    console.log(randomMessageText.join(" "));
}

//Run Program
randomMessage();