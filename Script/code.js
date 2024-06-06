let Answer = document.getElementById("Output")
let Display = document.getElementById("Age")
let NextNumbr = [1, 2, 3 , 4 , 5]
let counter = 0;
let Button = document.getElementById("Button")
let ArrayNumber = 2
let index = NextNumbr.indexOf(ArrayNumber)

function NxtNumber() {

    let index = NextNumbr.indexOf(2)
if (index !== -1 && index < NextNumbr.length - 1) {
    let NextArray = NextNumbr[index + 1];
console.log(NextArray)

}
else {

    console.log("End of array")

}


}