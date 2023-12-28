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

//Test

console.log(selectMessage());