//get string from page
//controller function
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let usertString = document.getElementById("userString").value;
    let revString = reverseString(usertString);
    displayString(revString);

}


//reverse string
//logic function
function reverseString(userString){

    let revString = [];
    
    //reverse a string using a for loop

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];        
    }

    return revString;
}

//display message with reverse string 
//view function
function displayString(revString){

    //write message to page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    //turn on alert box
    document.getElementById("alert").classList.remove("invisible");

}