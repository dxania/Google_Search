function check_input() { 
    var input=document.getElementById("userInput").value; 
    if(input == "") { 
        alert("Type something");
        return false; 
    } else { 
        alert(input)                
    } 
} 