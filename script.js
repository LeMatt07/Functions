function sendText(name,time){
    console.log(`Hey ${name} do you want to hang out today at ${time}?`)
}
sendText(`Erica`,10)
sendText(`Michael`,9)
sendText(`William`,6)
sendText(`Sean`,5)

function sendReminder(name,time){
   console.log(`Dear ${name} your meeting is at ${time}.`)
}
sendReminder(`Sanjay`,7)
sendReminder(`Tiffany`,5)
sendReminder(`Oscar`,3)
sendReminder(`Anabelle`,2)

//let name = `Terrence`
//let count = 1

//function showAlert(){
    //console.log(`${name}, wake up! This is your alarm number ${count}!`)
    //count += 1
//}
//showAlert()
//showAlert()
//showAlert()
//showAlert()

function calculate(){
    console.log(`hello`);
    console.log(2+2);
}
calculate();
calculate();

function calculateTax(){
    console.log(1000*0.1)
}
calculateTax();

function calculateTax(parameter1){
    console.log(parameter1*0.1);
}
calculateTax(2000);
calculateTax(5000);

function calculateTax(cost, taxPercent=0.1){
    console.log(cost*taxPercent);
}
calculateTax(2000,0.3);
calculateTax(5000)

function changeGreeting(){
    document.getElementById("greeting").textContent=`Hello, JavaScript!`
}

function changeBackground(){
    document.body.style.backgroundColor=`lightblue`;
}

function showName(){
    let name = document.getElementById("userInput").value;
    document.getElementById("output").textContent=`Hello, ${name}`;
}

let count = 0;
function increaseCount(){
    count ++;
    document.getElementById("count").textContent=`${count}`;
}

function changeImage(){
    document.getElementById("myImage").src = `image2.jpg`;
}

function toggleText(){
    let text = document.getElementById("text");
    text.style.display = text.style.display === "none"?"block":"none";
}

function increaseFontSize(){
    document.getElementById("textSize").style.fontSize = `24px`;
}

function updateContent(){
    document.getElementById("title").textContent=`New Title`;
    document.getElementById("description").textContent=`This text has changed!`;
    document.getElementById("description").style.color=`red`;
}

function calculateSquare(){
    let num = document.getElementById("numberInput").value;
    let square = num*num;
    document.getElementById("result").textContent=`The square of ${num} is ${square}`;
}