function check_input() { 
    var input=document.getElementById("userInput").value; 
    if(input == true) { 
        alert(input)
        return false; 
    } else { 
        alert("Type something");
    } 
} 