function hideAlert(){
    document.querySelector("#hiddenAlert").style.visibility = "hidden";
}
function functionalize() {
    document.querySelector("#button").addEventListener("click",validate);

}
functionalize();
function validate(){
hideAlert();
let allEmptyFieldsArray = document.querySelectorAll(".notEmpty");
let allNumbersArray = document.querySelectorAll(".onlyNumbers")
let allStringsArray = document.querySelectorAll(".onlyStrings")
//if its empty
for(i=0;i<allEmptyFieldsArray.length;i++){
    if (allEmptyFieldsArray[i].value==""|| null){
        document.querySelector("#hiddenAlert").style.visibility = "initial";
        document.querySelector("#hiddenAlert").innerHTML="Some fields are missing!!!";

    }
//if its numbers
    else if (parseInt(isNaN(allNumbersArray[i].value))){
        document.querySelector("#hiddenAlert").style.visibility = "initial";
        document.querySelector("#hiddenAlert").innerHTML = "Please, note, that card, amount, postal code and cvc fields have to have a numeric value";

  }
  //if it has a string value
    else if (typeof allStringsArray[i].value!== "string"){
        document.querySelector("#hiddenAlert").style.visibility = "initial";
        document.querySelector("#hiddenAlert").innerHTML = "Please, make sure it has a string value";
  }
  //if card field has 16 characters
    else if (document.querySelector("#card").value.length!==16){
        document.querySelector("#hiddenAlert").style.visibility = "initial";
        document.querySelector("#hiddenAlert").innerHTML = "Make sure card has 16 charachters";
  }

    else  {
        hideAlert();
    }
};




}