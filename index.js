function hideAlert(){
    document.querySelector("#hiddenAlert").style.visibility = "hidden";
}
function functionalize() {
    document.querySelector("#button").addEventListener("click",validate);

}
functionalize();
function validate(){

let allEmptyFieldsArray = document.querySelectorAll(".notEmpty")
let allNumbersArray = document.querySelectorAll(".onlyNumbers")
//if its empty
for(i=0;i<allEmptyFieldsArray.length;i++){
    if (allEmptyFieldsArray[i].value==""){
        document.querySelector("#hiddenAlert").style.visibility = "initial";
        document.querySelector("#hiddenAlert").innerHTML="Some fields are missing!!!";

    }
    else if (isNaN(allNumbersArray.value)){
        document.querySelector("#hiddenAlert").style.visibility = "initial"
        document.querySelector("#hiddenAlert").innerHTML = "Please, note, that card, amount, postal code and cvc fields have to have a numeric value";
  }

    else{
        document.querySelector("#hiddenAlert").style.visibility = "hidden";
    }
};




}